"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function Logout() {
  const { setIsAdmin, setGuestEmail } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // Clear state
    setGuestEmail(null);
    setIsAdmin(false);

    //clear localstorage
    localStorage.getItem("isAdmin") && localStorage.removeItem("isAdmin");
    localStorage.getItem("guestEmail") && localStorage.removeItem("guestEmail");

    // Redirect to homepage after logout
    router.push("/");
  }, [setGuestEmail, setIsAdmin, router]);

  return null;
}
