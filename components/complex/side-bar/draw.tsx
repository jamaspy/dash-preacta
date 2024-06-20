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
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <ChevronsRight className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD] mt-8 mb-4" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-slate-50 dark:bg-slate-800">
        <SheetHeader>
          <SheetTitle>
            <div className="w-full flex flex-row justify-between items-center pr-8">
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
              <ModeToggle />
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-12">
          <div className="flex flex-col gap-4 w-full ">
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <Home />
              Back To Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/dashboards"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <BarChartBig />
              Default Dashboards
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/custom"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <LayoutPanelLeft />
              Create Your Own Dashboard
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-full mt-24 pt-12 border-t">
            <Link
              onClick={() => setOpen(false)}
              href="/profile"
              className="flex flex-row gap-2 items-center justify-start w-full text-left p-4 rounded-md dark:hover:bg-slate-700 dark:hover:text-purple-400 dark:text-[#1B83BD] hover:bg-slate-200 hover:text-blue-800"
            >
              <User2 />
              Your Profile
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/settings"
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
