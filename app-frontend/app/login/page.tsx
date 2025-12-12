"use client";
import { loginAction } from "@/actions/loginFormAction";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useActionState, useContext, useEffect } from "react";

export default function LoginForm() {
  const { setIsAdmin, setGuestEmail } = useContext(AuthContext);
  const router = useRouter();

  const [formState, formAction, isPending] = useActionState(loginAction, {
    errors: null,
    success: false,
    enteredValues: null,
    userAccess: null,
  });

  /* ALL side effects must be done in useEffect */
  useEffect(() => {
    if (!formState.success) return;

    if (formState.userAccess === "admin") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
    } else {
      const email = formState.enteredValues?.email ?? null;
      setGuestEmail(email);
      localStorage.setItem("guestEmail", email ?? "");
    }

    router.push("/");
  }, [
    formState.success,
    formState.userAccess,
    formState.enteredValues,
    router,
    setIsAdmin,
    setGuestEmail,
  ]);

  return (
    <form className="max-w-md mx-auto my-4" action={formAction}>
      <h2 className="text-4xl font-bold text-heading mb-4">Login form</h2>

      {formState.errors && (
        <ul className="my-4 mb-4">
          {formState.errors.map((error) => (
            <li key={error} className="text-red-500 text-xs italic">
              {error}
            </li>
          ))}
        </ul>
      )}

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="name@flowbite.com"
          defaultValue={formState.enteredValues?.email ?? ""}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer text-fg-brand transition hover:bg-cyan-100 hover:text-black bg-neutral-primary border font-medium leading-2 rounded-base text-sm px-4 py-2.5"
      >
        Login
      </button>
    </form>
  );
}
