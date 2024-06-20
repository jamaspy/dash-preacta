import { TabsContent } from "@/components/ui/tabs";
import React from "react";

const TabContentContainer = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  return (
    <TabsContent
      value={value}
      className="bg-slate-100 dark:bg-slate-800 flex-1 min-h-[600px] w-full rounded-t-md p-4"
    >
      {children}
    </TabsContent>
  );
};

export default TabContentContainer;
