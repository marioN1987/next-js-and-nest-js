"use client";
import { createContext, useEffect, useState } from "react";

interface IAppContext {
  isAdmin: boolean;
  guestEmail: string | null;
  setIsAdmin: (value: boolean) => void;
  setGuestEmail: (value: string | null) => void;
}

const defaultContext: IAppContext = {
  isAdmin: false,
  guestEmail: null,
  setIsAdmin: () => {},
  setGuestEmail: () => {},
};

export const AppContext = createContext<IAppContext>(defaultContext);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [guestEmail, setGuestEmail] = useState<string | null>(null);

  //store in localstorage if admin or guest is logged in
  // because on page reload it was reseting
  useEffect(() => {
    if (localStorage.getItem("isAdmin")) {
      setIsAdmin(true);
    }

    if (localStorage.getItem("guestEmail")) {
      setGuestEmail(localStorage.getItem("guestEmail"));
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ guestEmail, setGuestEmail, isAdmin, setIsAdmin }}
    >
      {children}
    </AppContext.Provider>
  );
};
