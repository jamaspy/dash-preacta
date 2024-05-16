import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { headings } from "./data";
import {
  DefinitionsDashboard,
  DetailsDashboard,
  DiversityDashboard,
  FunnelHealthDashboard,
  NurtureCycleDashboard,
  SummaryDashboard,
} from "../dashboards";
import TabHeadings from "./headings";

export const TabOptions = () => {
  return (
    <Tabs
      defaultValue="funnel-health"
      className="w-full flex-1 flex flex-col justify-between"
    >
      <TabHeadings />
      <FunnelHealthDashboard />
      <SummaryDashboard />
      <DiversityDashboard />
      <DetailsDashboard />
      <DefinitionsDashboard />
      <NurtureCycleDashboard />
    </Tabs>
  );
};
