"use client";
import { IAuthContextProps } from "@/types/IAuthContext.interface";
import { createContext } from "react";

const defaultContext: IAuthContextProps = {
  isAdmin: false,
  guestEmail: null,
  setIsAdmin: () => {},
  setGuestEmail: () => {},
};

export const AuthContext = createContext<IAuthContextProps>(defaultContext);
