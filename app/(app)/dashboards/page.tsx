import { SideBar, TabOptions } from "@/components/complex";
import React from "react";

const Dashboard = () => {
  return (
    <main className="min-h-screen flex flex-row gap-2 dark:bg-slate-700 pr-2 bg-slate-200">
      <SideBar />
      <TabOptions />
    </main>
  );
};

export default Dashboard;
