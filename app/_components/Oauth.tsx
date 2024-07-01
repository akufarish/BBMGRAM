"use client";

import React from "react";
import google from "@/public/google.webp";
import Image from "next/image";
import useAuth from "../_services/auth";

function Oauth() {
  const { OauthLogin } = useAuth();

  return (
    <button
      onClick={() => OauthLogin()}
      className="w-[268px] h-[33px] flex items-center justify-center bg-white rounded-md text-black"
    >
      <Image src={google} width={28} height={28} alt="google" />
      <p className="text-black font-semibold">Log in with google</p>
    </button>
  );
}

export default Oauth;
