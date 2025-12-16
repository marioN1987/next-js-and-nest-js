export interface IAuthContextProps {
  isAdmin: boolean;
  guestEmail: string | null;
  isInitialized: boolean;
  setIsAdmin: (value: boolean) => void;
  setGuestEmail: (value: string | null) => void;
}