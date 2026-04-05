const PREFIX = 'aurtiro.submissions';

export type FormType = 'contact' | 'employer' | 'talent';

export interface StoredSubmission {
  type: FormType;
  data: Record<string, unknown>;
  submittedAt: string;
}

export function storeSubmission(type: FormType, data: Record<string, unknown>): void {
  const key = `${PREFIX}.${type}`;
  const existing: StoredSubmission[] = JSON.parse(localStorage.getItem(key) ?? '[]');
  existing.push({ type, data, submittedAt: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(existing));
}

export function getSubmissions(type: FormType): StoredSubmission[] {
  const key = `${PREFIX}.${type}`;
  return JSON.parse(localStorage.getItem(key) ?? '[]');
}
