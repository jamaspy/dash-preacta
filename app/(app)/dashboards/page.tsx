import { SideBar, TabOptions } from "@/components/complex";
import React from "react";

const Dashboard = () => {
  return (
    <main className="min-h-screen flex-1 w-full flex flex-row dark:bg-slate-700  bg-slate-200">
      <TabOptions />
    </main>
  );
};

export default Dashboard;
