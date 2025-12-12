"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/components/context/app-context-provider";
import { useRouter } from "next/navigation";

export default function Logout() {
  const { setIsAdmin, setGuestEmail } = useContext(AppContext);
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
