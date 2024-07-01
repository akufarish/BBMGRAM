"use client";

import useAuth from "@/app/_services/auth";
import React, { useState } from "react";

function RegisterForm() {
  const { Register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  async function doRegister(e: React.FormEvent) {
    e.preventDefault();

    const data: RegisterPayload = {
      email: email,
      username: username,
      password: password,
      passwordConfirm: password,
    };

    await Register(data);
  }

  return (
    <form onSubmit={doRegister} className="flex flex-col gap-2">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        className="auth-input"
        placeholder="Email"
      />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        className="auth-input"
        placeholder="Username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="auth-input"
        placeholder="Password"
      />
      <button className="text-white bg-blue-600 h-[36px] rounded-lg">
        Sign up
      </button>
    </form>
  );
}

export default RegisterForm;
