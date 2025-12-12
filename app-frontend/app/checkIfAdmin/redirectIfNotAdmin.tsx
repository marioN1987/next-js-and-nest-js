import { AppContext } from "@/components/context/app-context-provider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export function redirectToHomepageIfNotAdmin() {
  const { isAdmin } = useContext(AppContext);
  const router = useRouter();

  //redirect if not admin
  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, [isAdmin]);
}
