import { getAllJobs } from "@/actions/jobadder/get-jobs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("🚀  HERE>>>>>> :  : Home : session:", session);

  return (
    <main className="min-h-screen p-12 bg-gradient-to-br from-slate-100 to-slate-300">
      <nav className="flex flex-row items-center justify-end gap-8">
        {!!session && (
          <>
            <Link
              href="dashboards"
              className="hover:text-[#1B83BD] font-semibold"
            >
              Dashbaords
            </Link>
            <Link
              href="settings"
              className="hover:text-[#1B83BD] font-semibold"
            >
              Settings
            </Link>
          </>
        )}
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
      <section className="min-h-[90vh] h-full flex flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1 items-start justify-center p-12">
          <h1 className="text-4xl font-semibold mb-8">
            Welcome to Talent Intelligence.
          </h1>
          <p className="mb-8">
            Ullamco nulla veniam sunt elit officia excepteur pariatur mollit
            proident reprehenderit est nostrud est occaecat. Consectetur est
            esse incididunt non enim cupidatat. Lorem eiusmod esse amet ipsum
            incididunt est exercitation laboris esse in duis. Deserunt dolore
            non ex adipisicing quis.
          </p>
          <p>
            Ullamco nulla veniam sunt elit officia excepteur pariatur mollit
            proident reprehenderit est nostrud est occaecat. Consectetur est
            esse incididunt non enim cupidatat. Lorem eiusmod esse amet ipsum
            incididunt est exercitation laboris esse in duis. Deserunt dolore
            non ex adipisicing quis.
          </p>
        </div>
        <div className="flex flex-1">
          <Image src="/logo.svg" width={600} height={300} alt="preacta logo" />
        </div>
      </section>
    </main>
  );
}
