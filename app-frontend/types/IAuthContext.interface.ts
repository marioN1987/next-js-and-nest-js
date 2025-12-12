export interface IAuthContextProps {
  isAdmin: boolean;
  guestEmail: string | null;
  setIsAdmin: (value: boolean) => void;
  setGuestEmail: (value: string | null) => void;
}