"use client";

import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const { isAdmin, guestEmail } = useContext(AuthContext);

  const greetingText = () => {
    let greeting = null;
    if (isAdmin) {
      greeting = "admin";
    } else if (guestEmail) {
      greeting = guestEmail;
    }

    if (!greeting) {
      return null;
    }

    return (
      <div className="greeting relative mt-4">
        <p className="font-italic text-white">Hello {greeting}</p>
      </div>
    );
  };

  const navLinks = () => (
    <div className="navLinks z-12 ml-4">
      <div className="text-white flex flex-col items-start gap-x-4 gap-y-4 md:flex-row md:items-center">
        {isAdmin && (
          <>
            <div className="item">
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium bg-gray-400 text-gray-100 hover:bg-white/5 hover:text-white"
                href={{ pathname: "/add-new-streaming" }}
              >
                Add new Streamimg
              </Link>
            </div>
            <div className="item">
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium bg-gray-400 text-gray-100 hover:bg-white/5 hover:text-white"
                href={{ pathname: "/edit-streaming" }}
              >
                Edit Streaming
              </Link>
            </div>
            <div className="item">
              <Link
                className="rounded-md px-3 py-2 text-sm font-medium bg-gray-400 text-gray-100 hover:bg-white/5 hover:text-white"
                href="/metrics"
              >
                Metrics
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <header className="text-center py-5 relative">
      {/* make image darker with overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <Link href="/" className={styles.logo}>
        ZenithFlix
      </Link>

      <div className="flex flex-row md:justify-center flex-wrap mt-4 md:mt-0">
        <div className="right-section absolute text-right right-4 md:right-10 z-11">
          <div className="login-link">
            <Link
              href={`${isAdmin || guestEmail ? "/logout" : "/login"}`}
              type="button"
              className="text-fg-brand bg-neutral-primary border border-white text-white hover:bg-white hover:border-cyan-100 hover:text-black 
              transition delay-50 cursor-pointer duration-300 ease-in-out font-medium leading-5 rounded-base text-sm px-4 py-2 focus:outline-none"
            >
              {isAdmin || guestEmail ? "Logout" : "Login"}
            </Link>
          </div>
          {greetingText()}
        </div>

        {navLinks()}
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-heading md:text-4xl lg:text-5xl absolute text-white z-10 absolute inset-0 flex items-center justify-center">
        Welcome to ZenithFlix is a next-generation AI-driven streaming platform
      </h1>
    </header>
  );
}
