import { SignInForm } from "@/components/complex/auth";
import React from "react";
import Image from "next/image";
const LoginPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-200">
      <div className="max-w-xl p-8 rounded-lg mx-auto w-full flex flex-col bg-gradient-to-br from-slate-50 to-slate-200 shadow-md">
        <Image
          src="/logo.svg"
          width={175}
          height={75}
          alt="preacta logo"
          className="block dark:hidden mx-auto mb-8"
        />

        <SignInForm />
      </div>
    </main>
  );
};

export default LoginPage;
