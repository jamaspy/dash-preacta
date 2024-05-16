import { Header, TabOptions } from "@/components/complex";
import React from "react";

const Dashboard = () => {
  return (
    <main className="min-h-screen p-12 dark:bg-slate-700 bg-slate-200">
      <Header />
      <TabOptions />
    </main>
  );
};

export default Dashboard;
