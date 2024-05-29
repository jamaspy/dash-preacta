import { getJobApplications } from "@/actions/jobadder/get-job-applications";
import { getJobSubmissions } from "@/actions/jobadder/get-job-submissions";
import { getAllJobs } from "@/actions/jobadder/get-jobs";
import { TabsContent } from "@/components/ui/tabs";
import {
  Application,
  ApplicationStatusName,
} from "@/models/applications.model";
import type { Job } from "@/models/job.model";

import React from "react";

export const DetailsDashboard = async () => {
  const allJobs = await getAllJobs(process.env.LEO_AI_COMPANY_ID as string);
  const allJobIds = allJobs.map((job: Job) => job.jobId);
  const allJobTitles = allJobs.map((job: Job) => job.jobTitle);
  const allApplications = await Promise.all(
    allJobIds.map((id: number) => getJobApplications(id))
  );
  const options = Object.values(ApplicationStatusName);

  const filterApplications = (
    filteredApplications: { jobTitle: string; applications: Application[] }[]
  ) => {
    return filteredApplications.map(({ jobTitle, applications }) => {
      const statusCounts: { [statusName: string]: number } = {};
      applications.forEach((application) => {
        const statusName = application.status?.name || "Unknown";
        if (!statusCounts[statusName]) {
          statusCounts[statusName] = 0;
        }
        statusCounts[statusName] += 1;
      });
      return {
        jobTitle,
        statusCounts,
      };
    });
  };

  const filteredApplications = allApplications.map((response, index) => {
    console.log("JAMES", response);
    return {
      jobTitle: allJobTitles[index],
      applications: response,
    };
  });

  const applicationStatusCounts = filterApplications(filteredApplications);

  return (
    <TabsContent
      value="details"
      className="bg-slate-100 dark:bg-slate-800 flex-1 min-h-[600px] w-full rounded-md p-4 flex flex-col gap-2"
    >
      <div className="flex-1 h-full w-full border rounded-md p-2 bg-slate-200">
        Table 1
      </div>
      <div className="flex-1 h-full w-full border rounded-md p-2 bg-slate-200">
        Table 2
      </div>
    </TabsContent>
  );
};
