import React from "react";
import Link from "next/link";

import { LampDemo } from "@/components/ui/lamp";
import { getAllJobs } from "@/actions/jobs/get-all-jobs";
import { auth, signOut } from "@/auth";
import { SignInButton } from "@/components/complex/auth";

export default async function Home() {
  const session = await auth();

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
        {!session ? (
          <SignInButton />
        ) : (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              className="text-slate-300 hover:text-cyan-500 font-thin tracking-wider"
              type="submit"
            >
              Sign Out
            </button>
          </form>
        )}
      </nav>
      <LampDemo />
    </div>
  );
}
