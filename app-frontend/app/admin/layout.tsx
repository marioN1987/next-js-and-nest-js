"use client";

import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //check context if not admin, then redirect to homepage
  const { isAdmin } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, [isAdmin, router]);

  return <>{children}</>;
}
