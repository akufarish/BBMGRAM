"use client";

import useAuth from "@/app/_services/auth";
import React, { useState } from "react";

interface LoginPayload {
  identity: string;
  password: string;
}

function LoginForm() {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");

  const { Login } = useAuth();

  async function doLogin(e: React.FormEvent) {
    e.preventDefault();

    const payload: LoginPayload = {
      identity: identity,
      password: password,
    };

    await Login(payload);
  }

  return (
    <form onSubmit={doLogin} className="flex flex-col gap-2">
      <input
        value={identity}
        onChange={(e) => setIdentity(e.target.value)}
        type="text"
        className="auth-input"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="auth-input"
        placeholder="Password"
      />
      <button className="text-white bg-blue-600 h-[36px] rounded-lg">
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
