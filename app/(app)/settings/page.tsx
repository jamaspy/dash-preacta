import { SideBar } from "@/components/complex";
import React from "react";

const SettingsPage = () => {
  return (
    <main className="min-h-screen p-12 dark:bg-slate-700 bg-slate-200">
      <SideBar />
      <div className="bg-slate-100 dark:bg-slate-800 flex-1 min-h-[600px] w-full rounded-md p-4">
        Settings Page
      </div>
    </main>
  );
};

export default SettingsPage;
