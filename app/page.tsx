import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import { LampDemo } from "@/components/ui/lamp";
import { getAllJobs } from "@/actions/jobs/get-all-jobs";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const jobs = await getAllJobs(2820575);

  return (
    <div className="relative">
      <nav className="w-full sticky top-0 bg-slate-950 flex flex-row items-end justify-end gap-8 pt-4 pr-8">
        <Link
          className="text-slate-300 hover:text-cyan-500 font-thin tracking-wider"
          href="dashboards"
        >
          Dashbaords
        </Link>
        <Link
          className="text-slate-300 hover:text-cyan-500 font-thin tracking-wider"
          href="dashboards"
        >
          Features
        </Link>
        <Link
          className="text-slate-300 hover:text-cyan-500 font-thin tracking-wider"
          href="dashboards"
        >
          Pricing
        </Link>
        <Link
          className="text-slate-300 hover:text-cyan-500 font-thin tracking-wider"
          href="/login"
        >
          Login
        </Link>
        {!session ? (
          <Link
            href="auth/signin"
            className="hover:text-[#1B83BD] font-semibold"
          >
            Sign In
          </Link>
        ) : (
          <Link href="settings" className="hover:text-[#1B83BD] font-semibold">
            Logout
          </Link>
        )}
      </nav>
      <LampDemo />
    </div>
  );
}
