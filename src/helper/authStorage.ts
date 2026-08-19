// Minimal localStorage-backed "stored user" helper used to demo the
// Splash Intro -> (stored user?) -> Login/Dashboard flow.
// Replace with real auth/session logic (tokens, API calls, etc.) as needed.

const STORAGE_KEY = 'pwa-boilerplate:user';

export interface StoredUser {
  id: string;
  name: string;
  email: string;
}

export function getStoredUser(): StoredUser | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as StoredUser;
  } catch {
    return null;
  }
}

export function setStoredUser(user: StoredUser): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem(STORAGE_KEY);
}
