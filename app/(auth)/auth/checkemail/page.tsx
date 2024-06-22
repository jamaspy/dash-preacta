import React from "react";
import Image from "next/image";
const CheckEmailPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-200">
      <div className="max-w-xl p-8 rounded-lg mx-auto w-full flex flex-col bg-gradient-to-br from-slate-50 to-slate-200 shadow-md">
        <Image
          src="/logo.svg"
          width={175}
          height={75}
          alt="preacta logo"
          className="mx-auto mb-8"
        />
        <p className="text-xl font-semibold mb-2 text-center">
          Check Your Emails
        </p>
        <p className="text-lg mb-2">
          No one likes passwords, so we have sent you a secure link to log in.
        </p>
        <p className="font-semibold">- Derek</p>
      </div>
    </main>
  );
};

export default CheckEmailPage;
