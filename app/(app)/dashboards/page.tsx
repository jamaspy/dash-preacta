import { auth } from "@/auth";
import { TabOptions } from "@/components/complex";
import { NameModel } from "@/components/complex/auth/name-model/name-model";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  const userHasName = session?.user?.name;
  console.log("🚀  HERE>>>>>> :  : Dashboard : userHasName:", userHasName);
  return (
    <main className="min-h-screen flex-1 w-full flex flex-row dark:bg-slate-700  bg-slate-200">
      <NameModel open={!userHasName} />
      <TabOptions />
    </main>
  );
};

export default Dashboard;
