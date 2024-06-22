"use client";
import React from "react";

import { getAllJobs } from "@/actions/jobs/get-all-jobs";
import { BarListChart } from "@/components/complex/charts";
import { countJobStatuses } from "@/utils";
import { getAllApplications } from "@/actions/applications/get-all-applications";
import { countJobTitles } from "@/utils/applications/number-of-applicants-to-job";
import { getAllJobStatus } from "@/actions/jobs/get-all-job-status";
import { getAllJobForClientQuery } from "@/queries/jobs/get-all-jobs.query";
import { useSuspenseQuery } from "@tanstack/react-query";
import DashboardFilters from "../../filters/dashboard-filters/dashboard-filters";

export const DetailsDashboard = () => {
  const { data, isLoading, isError } = useSuspenseQuery(
    getAllJobForClientQuery
  );

  // const allJobs = await getAllJobs(2820575);
  // const allApplications = await getAllApplications(2820575);
  // const allJobOrderStatus = await getAllJobStatus(2820575);

  const jobStatusCounts = countJobStatuses(data);
  // const numberOfApplicants = countJobTitles(allApplications);

  return (
    <main>
      <DashboardFilters />
      <div className="flex flex-col gap-4">
        <BarListChart data={jobStatusCounts} title="Jobs Status" />
        {/* <BarListChart data={numberOfApplicants} title="Applicants To Jobs" /> */}
      </div>
    </main>
  );
};
