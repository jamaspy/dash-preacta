import { TabsContent } from "@/components/ui/tabs";
import React from "react";

export const FunnelHealthDashboard = () => {
  return (
    <TabsContent
      value="funnel-health"
      className="bg-slate-100 dark:bg-slate-800 flex-1 min-h-[600px] w-full rounded-md p-4"
    >
      <h1 className="text-xl font-semibold">Funnel Health</h1>
    </TabsContent>
  );
};

export default FunnelHealthDashboard;
