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
import { getQueryClient } from "@/react-query/get-query-client";
import { getAllJobForClientQuery } from "@/queries/jobs/get-all-jobs.query";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export const TabOptions = async () => {
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery(getAllJobForClientQuery),
    // Add more prefetch queries here
  ]);

  return (
    <Tabs
      defaultValue="funnel-health"
      className="w-full flex-1 flex flex-col justify-start"
    >
      <TabHeadings />
      <HydrationBoundary state={dehydrate(queryClient)}>
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
      </HydrationBoundary>
    </Tabs>
  );
};
