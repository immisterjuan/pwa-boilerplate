import { useCallback, useState } from 'react';
import {
  clearStoredUser,
  getStoredUser,
  setStoredUser,
  type StoredUser,
} from '../helper/authStorage';

export interface UseAuth {
  user: StoredUser | null;
  isAuthenticated: boolean;
  login: (user: StoredUser) => void;
  logout: () => void;
}

/**
 * Lightweight auth hook backed by localStorage (see `helper/authStorage.ts`).
 * Drives the Splash Intro -> Login/Registration -> Dashboard flow in this boilerplate.
 * Swap the storage calls for real API/session logic when integrating a backend.
 */
export function useAuth(): UseAuth {
  const [user, setUser] = useState<StoredUser | null>(() => getStoredUser());

  const login = useCallback((nextUser: StoredUser) => {
    setStoredUser(nextUser);
    setUser(nextUser);
  }, []);

  const logout = useCallback(() => {
    clearStoredUser();
    setUser(null);
  }, []);

  return { user, isAuthenticated: user !== null, login, logout };
}
