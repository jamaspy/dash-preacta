"use client";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/dark-mode/dark-mode-trigger";
import Link from "next/link";
import {
  BarChartBig,
  Settings,
  LogOut,
  ChevronsRight,
  LayoutPanelLeft,
  User2,
  Settings2,
  LogOutIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export const Draw = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ChevronsRight className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD] mt-8 mb-4" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-slate-50 dark:bg-slate-800">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/logo-dark-mode.svg"
              width={175}
              height={75}
              alt="preacta logo"
              className="dark:block hidden mr-auto"
            />
            <Image
              src="/logo.svg"
              width={175}
              height={75}
              alt="preacta logo"
              className="block dark:hidden mr-auto"
            />
          </SheetTitle>

          <div className="flex flex-row items-center pt-4 pl-2">
            <ModeToggle />
            <p className="h-full text-xs">Toggle Dark Mode</p>
          </div>
        </SheetHeader>
        <div className="mt-12">
          <div className="flex flex-col gap-4 w-full ">
            <Link
              href="/"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <Home />
              Back To Home
            </Link>
            <Link
              href="/dashboards"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <BarChartBig />
              Default Dashboards
            </Link>
            <Link
              href="/"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <LayoutPanelLeft />
              Create Your Own Dashboard
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-full mt-24 pt-12 border-t">
            <Link
              href="/"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <User2 />
              Your Profile
            </Link>
            <Link
              href="/"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <Settings2 />
              Settings
            </Link>
            <Link
              href="/"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <LogOutIcon />
              Log Out
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
