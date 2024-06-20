import React from "react";
import { Tabs } from "@/components/ui/tabs";

import {
  DefinitionsDashboard,
  DetailsDashboard,
  DiversityDashboard,
  FunnelHealthDashboard,
  NurtureCycleDashboard,
  SummaryDashboard,
} from "../dashboards";

import TabHeadings from "./headings";
import TabContentContainer from "./tab-content-container";

export const TabOptions = () => {
  return (
    <Tabs
      defaultValue="funnel-health"
      className="w-full flex-1 flex flex-col justify-start"
    >
      <TabHeadings />

      <TabContentContainer value="funnel-health">
        <FunnelHealthDashboard />
      </TabContentContainer>

      <TabContentContainer value="summary">
        <SummaryDashboard />
      </TabContentContainer>

      <TabContentContainer value="detail">
        <DetailsDashboard />
      </TabContentContainer>

      <TabContentContainer value="nurture-cycle">
        <NurtureCycleDashboard />
      </TabContentContainer>

      <TabContentContainer value="diversity">
        <DiversityDashboard />
      </TabContentContainer>

      <TabContentContainer value="definitions">
        <DefinitionsDashboard />
      </TabContentContainer>
    </Tabs>
  );
};
