import { signOutUser } from "@/actions/auth/auth";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <Button onClick={signOutUser} variant="ghost" size="icon" className="">
      <LogOut className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:hover:text-blue-800 dark:text-[#1B83BD]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
