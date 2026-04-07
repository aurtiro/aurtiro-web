# CLAUDE.md

## Environment
- Node/npm are not on the default PATH. Always prefix shell commands with:
  `export PATH=/opt/homebrew/bin:$PATH`
- Working dir: `/Users/recruit/Desktop/my-website`

## Execution preference
- Run all shell/build/deploy commands directly in this session. Do not tell the user to run them in their own terminal — just execute them here.

## Commands
- Build: `npm run build`
- Dev: `npm run dev`
- Deploy (Vercel prod): `npx vercel --prod`

## Stack
- Vite + React 19 + TypeScript + Tailwind v4
- React Router v6, lucide-react icons
- Output: `dist/`

## Model Classification & Routing Rules

All AI agents, cron jobs, and LLM-powered features across Aurtiro projects MUST follow these tiered model routing rules. The goal is cost optimization without sacrificing quality: use the cheapest model that can reliably complete the task.

### Tier 0: No LLM Required
Use deterministic code. No model calls.
- Structured API responses (GitHub API, Apollo API) — parse with code
- JSON validation and transformation
- Deduplication (hash-based or field matching)
- Date math, URL construction, query building
- Schema validation

### Tier 1: Workhorse (< $0.60/MTok output)
For high-volume, low-complexity, structured tasks. Daily cron agents live here.

| Model | Input/MTok | Output/MTok | Use when |
|-------|-----------|------------|----------|
| Groq Llama 3.1 8B | $0.06 | $0.06 | Simplest extraction, max speed |
| Gemini 2.0 Flash-Lite | $0.10 | $0.40 | Cheapest with decent quality |
| GPT-4o-mini | $0.15 | $0.60 | Best quality at this tier |
| Mistral Small 3.1 | $0.20 | $0.60 | EU data residency required |
| Grok 4.1 Fast | $0.20 | $0.50 | Twitter/X native understanding |
| DeepSeek V3.2 (cached) | $0.028 | $0.42 | Repeated prompts, cache-friendly |

**Mandatory for:** Daily signal cron jobs, search result parsing, structured data extraction, schema-filling, simple classification (binary yes/no), job posting extraction.

**Prompt rules at this tier:**
- Always use JSON output mode or structured output
- System prompt must include the exact output schema
- Max output tokens: 200 (constrain aggressively)
- No open-ended generation — every field is defined

### Tier 2: Reasoning ($0.50–$5.00/MTok output)
For tasks requiring judgment, scoring, or multi-step logic.

| Model | Input/MTok | Output/MTok | Use when |
|-------|-----------|------------|----------|
| DeepSeek V4 | $0.30 | $0.50 | Best price/performance for reasoning |
| Gemini 2.5 Flash | $0.30 | $2.50 | Strong reasoning, Google ecosystem |
| Mistral Medium 3 | $1.00 | $3.00 | Balanced cost/quality |
| o4-mini | $1.10 | $4.40 | Budget reasoning with CoT |
| Claude Haiku 4.5 | $1.00 | $5.00 | Best small-model quality |

**Mandatory for:** Sentiment scoring, signal worthwhileness assessment, candidate-role matching, enrichment decisions, content summarization, email draft generation.

**Prompt rules at this tier:**
- Include scoring rubric in system prompt
- Allow up to 500 output tokens for reasoning + structured output
- Cache system prompts (90% input discount on Anthropic/DeepSeek)

### Tier 3: Frontier ($8.00–$25.00/MTok output)
For complex reasoning, nuanced analysis, and high-stakes decisions. Human-triggered only.

| Model | Input/MTok | Output/MTok | Use when |
|-------|-----------|------------|----------|
| o3 | $2.00 | $8.00 | Strong reasoning, reasonable price |
| GPT-4o | $2.50 | $10.00 | Reliable general-purpose |
| Gemini 2.5 Pro | $1.25 | $10.00 | Best price/performance at frontier |
| Claude Sonnet 4.6 | $3.00 | $15.00 | Best quality for nuanced analysis |
| Claude Opus 4.6 | $5.00 | $25.00 | Complex multi-step reasoning |

**Mandatory for:** Company deep-dive analysis, candidate evaluation narratives, architecture decisions, product spec generation, client-facing content.

**Prompt rules at this tier:**
- No output length constraints — let the model reason fully
- Use extended thinking / chain-of-thought when available
- Batch API (50% off) for non-urgent analysis

### Tier 4: Search-Augmented
For tasks that require live web data.

| Model | Input/MTok | Output/MTok | Notes |
|-------|-----------|------------|-------|
| Perplexity Sonar | $1.00 | $1.00 | Built-in web search + citations |
| Perplexity Sonar Pro | $3.00 | $15.00 | Deep research with citations |
| Grok + web search | $0.20 | $0.50 | +$5/1K searches, native X/Twitter |

**Mandatory for:** Google job search agent, competitive intelligence, market research, news monitoring.

### Cost Control Rules

1. **Never use Tier 3 for Tier 1 work.** If the task has a defined schema and predictable output, it's Tier 1.
2. **Cache system prompts.** Every agent with a stable instruction set must use prompt caching.
3. **Batch when latency allows.** Daily cron jobs should use Batch API (50% off) since 24-hour latency is acceptable.
4. **Validate before downstream.** Every agent output must validate against its schema before entering the event stream. Retries are cheaper than garbage propagation.
5. **Log token usage.** Every API call must log: model, input_tokens, output_tokens, cost, task_type. This data feeds into cost dashboards.
6. **Review monthly.** Model pricing changes frequently. Review this table monthly and update if a cheaper model can handle an existing task.

### Schema Contract Rules

All agent inputs and outputs must conform to typed schemas defined in `cores/schemas/`. See the cores directory for:
- `signal.schema.ts` — standard signal format for all source agents
- `scored_signal.schema.ts` — output format for sentiment/scoring agents
- `search_params/` — frozen search configurations per source
- `instructions/` — versioned system prompts per agent role

No agent may produce freeform output. Every field must be defined in the schema.
