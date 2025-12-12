import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export function redirectToHomepageIfNotAdmin() {
  const { isAdmin } = useContext(AuthContext);
  const router = useRouter();

  //redirect if not admin
  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, [isAdmin]);
}
