import { storeSubmission, type FormType } from './formStore';

const API_BASE = import.meta.env.VITE_ATS_API_URL as string | undefined;
const TIMEOUT_MS = 5000;

function endpointFor(type: FormType): string {
  return type === 'talent' ? 'candidate-intake' : 'client-inquiry';
}

async function postWithTimeout(url: string, body: FormData | string, isMultipart: boolean): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const headers: HeadersInit = isMultipart ? {} : { 'Content-Type': 'application/json' };
    return await fetch(url, { method: 'POST', headers, body, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function submitForm(
  type: FormType,
  data: Record<string, unknown>,
  file?: File | null,
): Promise<void> {
  if (!API_BASE) {
    await storeLocally(type, data, file);
    return;
  }

  const url = `${API_BASE}/api/v1/${endpointFor(type)}`;

  try {
    let response: Response;
    if (type === 'talent' && file) {
      const form = new FormData();
      Object.entries(data).forEach(([k, v]) => form.append(k, String(v)));
      form.append('resume', file);
      response = await postWithTimeout(url, form, true);
    } else {
      response = await postWithTimeout(url, JSON.stringify({ ...data, formType: type }), false);
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  } catch {
    await storeLocally(type, data, file);
  }
}

async function storeLocally(type: FormType, data: Record<string, unknown>, file?: File | null): Promise<void> {
  if (file) {
    try {
      const resumeData = await readFileAsDataURL(file);
      storeSubmission(type, { ...data, resumeData, resumeName: file.name });
    } catch {
      storeSubmission(type, { ...data, resumeName: file.name });
    }
  } else {
    storeSubmission(type, data);
  }
}
