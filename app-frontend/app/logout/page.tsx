"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/components/context/app-content-provider";
import { useRouter } from "next/navigation";

export default function Logout() {
  const { setIsAdmin, setGuestEmail } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    // Clear state
    setGuestEmail(null);
    setIsAdmin(false);
    localStorage.getItem("isAdmin") && localStorage.removeItem("isAdmin");
    localStorage.getItem("guestEmail") && localStorage.removeItem("guestEmail");

    // Redirect after state is updated
    router.push("/");
  }, [setGuestEmail, setIsAdmin, router]);

  // Can return null or a loading indicator
  return null;
}
