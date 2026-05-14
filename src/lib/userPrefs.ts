const KEY = "sb_user_prefs_v1";

export interface UserPrefs {
  classFilter?: string | null;
  budgetK?: number | null;
  lastVisited?: string;
  assistantSeen?: boolean;
}

export function loadPrefs(): UserPrefs {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function savePrefs(patch: Partial<UserPrefs>) {
  try {
    const cur = loadPrefs();
    localStorage.setItem(KEY, JSON.stringify({ ...cur, ...patch }));
  } catch {
    // ignore
  }
}
