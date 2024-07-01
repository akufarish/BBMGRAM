import Oauth from "@/app/_components/Oauth";
import { Metadata } from "next";
import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "BBMGRAM",
    description: "BBMGRAM login page",
  };
}

function LoginPage() {
  return (
    <section className="shadow-md p-6 border border-gray-600">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white font-bold text-3xl">BBMGRAM</h1>
        <p className="text-gray-400 text-center w-60">
          Sign up to see photos and videos from your friends.
        </p>
        <LoginForm />

        <div className="flex items-center my-4">
          <div className="flex-grow border-t-2 w-[6.5rem] border-white"></div>
          <span className="mx-4 text-white">OR</span>
          <div className="flex-grow border-t-2 w-[6.5rem] border-white"></div>
        </div>
        <Oauth />
      </div>
      <div className="w[350px] h-[62px] flex items-center justify-center gap-2 mt-5">
        <p className="text-white">Don't have an account? </p>
        <Link href="/register" className="text-blue-500">
          Sign up
        </Link>
      </div>
    </section>
  );
}

export default LoginPage;
