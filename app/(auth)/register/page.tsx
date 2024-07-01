import Oauth from "@/app/_components/Oauth";
import Link from "next/link";
import React from "react";
import RegisterForm from "./RegisterForm";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "BBMGRAM",
    description: "Register page for BBMGRAM",
  };
}

function RegisterPage() {
  return (
    <section className="shadow-md p-6 border-gray-600">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white font-bold text-3xl">BBMGRAM</h1>
        <p className="text-gray-400 text-center w-60">
          Sign up to see photos and videos from your friends.
        </p>

        <Oauth />
        <div className="flex items-center mb-4">
          <div className="flex-grow border-t-2 w-[6.5rem] border-white"></div>
          <span className="mx-4 text-white">OR</span>
          <div className="flex-grow border-t-2 w-[6.5rem] border-white"></div>
        </div>
      </div>

      <RegisterForm />
      <div className="w[350px] h-[62px] flex items-center justify-center gap-2 mt-5">
        <p className="text-white">Have an account?</p>
        <Link href="/login" className="text-blue-500">
          Log in
        </Link>
      </div>
    </section>
  );
}

export default RegisterPage;
