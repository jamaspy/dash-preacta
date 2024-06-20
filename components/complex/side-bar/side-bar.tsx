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
import { Draw } from "./draw";
export const SideBar = () => {
  return (
    <div className="flex flex-col bg-slate-50 dark:bg-slate-800 flex-1 w-full justify-start items-center px-4 py-2  max-w-[5rem]">
      <Link href="/">
        <Image
          src="/logo-round.svg"
          width={75}
          height={75}
          alt="preacta logo"
        />
      </Link>
      <Draw />
      <div className="flex flex-1 h-full flex-col justify-between gap-4">
        <div className="w-full h-full flex flex-col gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="">
              <Home className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD]" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
          <Link href="/dashboards">
            <Button variant="ghost" size="icon" className="">
              <BarChartBig className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD]" />
              <span className="sr-only">Default Dashboards</span>
            </Button>
          </Link>
          <Link href="/dashboards">
            <Button variant="ghost" size="icon" className="">
              <LayoutPanelLeft className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD]" />
              <span className="sr-only">Create Your Own Dashboards</span>
            </Button>
          </Link>
        </div>
        <div className="h-full w-full flex flex-col gap-4 justify-end pb-8">
          <ModeToggle />
          <Link href="/settings">
            <Button variant="ghost" size="icon" className="">
              <Settings className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD]" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="">
            <LogOut className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
