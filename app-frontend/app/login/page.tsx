"use client";
import { AppContext } from "@/components/context/app-context-provider";
import { validateUser } from "@/utils/http";
import { useRouter } from "next/navigation";
import { useActionState, useContext } from "react";

export default function LoginForm() {
  const { setIsAdmin, setGuestEmail } = useContext(AppContext);

  const router = useRouter();

  const handleSubmit = (prevState: any, formState: FormData) => {
    const email = formState.get("email") as string;
    const password = formState.get("password") as string;

    let errors: string[] = [];

    if (!email) {
      errors.push("Please enter email");
    } else if (!email.trim().includes("@")) {
      errors.push("Invalid email");
    }

    if (!password) {
      errors.push("Please enter password");
    } else if (password.trim().length < 6) {
      errors.push("Password length should be more than 6 characters");
    }

    if (errors.length > 0) {
      return { errors, enteredValues: { email, password } };
    }

    validateUser({ email, password }).then((userAccess) => {
      if (userAccess === "admin") {
        setIsAdmin(true);
        localStorage.setItem("isAdmin", "true");
      } else {
        setGuestEmail(email);
        localStorage.setItem("guestEmail", email);
      }
    });

    router.push("/");
    return { errors: null };
  };

  const [formState, formAction] = useActionState(handleSubmit, {
    errors: null,
  });

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
          defaultValue={formState.enteredValues?.email}
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
        className="cursor-pointer text-fg-brand transition hover:bg-cyan-100 hover:text-black bg-neutral-primary border font-medium leading-2 rounded-base text-sm px-4 py-2.5"
      >
        Login
      </button>
    </form>
  );
}
