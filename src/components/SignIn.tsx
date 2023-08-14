import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

export default function SignIn() {
  return (
    <div className="container mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Image
          src={"/big-logo.png"}
          className="mx-auto"
          alt="logo"
          width={36}
          height={36}
        />
        <h1 className="tet-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="tet-sm max-w-xs mx-auto">
          By continuing, you are setting a account and agree to our Agreement
          and Policy
        </p>

        {/* sign in form */}
        <UserAuthForm />

        {/* go to sign up page */}
        <p className="px-8 text-center text-zinc-700">
          New to Blog?{" "}
          <Link
            href="/sign-up"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
