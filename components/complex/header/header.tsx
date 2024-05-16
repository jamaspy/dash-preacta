import React from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/dark-mode/dark-mode-trigger";
import Link from "next/link";
import { BarChartBig, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Header = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 flex-1 w-full mb-2 flex flex-row justify-between items-center  px-4 py-2 rounded-md">
      <Link href="/">
        <Image src="/logo.svg" width={200} height={150} alt="preacta logo" />
      </Link>
      <div className="flex flex-row gap-4">
        <Link href="/dashboards">
          <Button variant="ghost" size="icon" className="">
            <BarChartBig className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </Link>
        <Link href="/settings">
          <Button variant="ghost" size="icon" className="">
            <Settings className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </Link>
        <ModeToggle />
        <Button variant="ghost" size="icon" className="">
          <LogOut className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
};
