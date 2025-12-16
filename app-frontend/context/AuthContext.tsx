"use client";
import { IAuthContextProps } from "@/types/IAuthContext.interface";
import { createContext } from "react";

const defaultContext: IAuthContextProps = {
  isAdmin: false,
  guestEmail: null,
  setIsAdmin: () => {},
  setGuestEmail: () => {},
  isInitialized: false,
};

export const AuthContext = createContext<IAuthContextProps>(defaultContext);
