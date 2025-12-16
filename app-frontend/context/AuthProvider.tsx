"use client";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [guestEmail, setGuestEmail] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  //store in localstorage if admin or guest is logged in
  // because on page reload it was reseting
  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      setIsAdmin(true);
    }

    if (localStorage.getItem("guestEmail")) {
      setGuestEmail(localStorage.getItem("guestEmail"));
    }

    setIsInitialized(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{ guestEmail, setGuestEmail, isAdmin, setIsAdmin, isInitialized }}
    >
      {children}
    </AuthContext.Provider>
  );
};
