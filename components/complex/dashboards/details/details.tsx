"use client";
import { getJobApplications } from "@/actions/jobadder/get-job-applications";
import { getAllJobs } from "@/actions/jobadder/get-jobs";
import { TabsContent } from "@/components/ui/tabs";
import {
  Application,
  ApplicationStatusName,
} from "@/models/applications.model";
import type { Job } from "@/models/job.model";

import React from "react";
import { AreaChart, BarList } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 22",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 22",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 22",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 22",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 22",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 22",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 22",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 22",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 22",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 22",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 22",
    SolarPanels: 3239,
    Inverters: 3736,
  },
];

const datahero = [
  { name: "/home", value: 456 },
  { name: "/imprint", value: 351 },
  { name: "/cancellation", value: 51 },
];

const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export const DetailsDashboard = () => {
  // const allJobs = await getAllJobs(process.env.LEO_AI_COMPANY_ID as string);
  // const allJobIds = allJobs.map((job: Job) => job.jobId);
  // const allJobTitles = allJobs.map((job: Job) => job.jobTitle);
  // const allApplications = await Promise.all(
  //   allJobIds.map((id: number) => getJobApplications(id))
  // );
  // const options = Object.values(ApplicationStatusName);

  // const filterApplications = (
  //   filteredApplications: { jobTitle: string; applications: Application[] }[]
  // ) => {
  //   return filteredApplications.map(({ jobTitle, applications }) => {
  //     const statusCounts: { [statusName: string]: number } = {};
  //     applications.forEach((application) => {
  //       const statusName = application.status?.name || "Unknown";
  //       if (!statusCounts[statusName]) {
  //         statusCounts[statusName] = 0;
  //       }
  //       statusCounts[statusName] += 1;
  //     });
  //     return {
  //       jobTitle,
  //       statusCounts,
  //     };
  //   });
  // };

  // const filteredApplications = allApplications.map((response, index) => {
  //   console.log("JAMES", response);
  //   return {
  //     jobTitle: allJobTitles[index],
  //     applications: response,
  //   };
  // });

  // const applicationStatusCounts = filterApplications(filteredApplications);

  return (
    <TabsContent
      value="details"
      className="bg-slate-100 dark:bg-slate-800 flex-1 min-h-[600px] w-full rounded-md p-4 flex flex-col gap-2"
    >
      <div className="flex-1 h-full w-full border rounded-md p-2 bg-slate-200">
        <AreaChart
          className="h-80"
          data={chartdata}
          index="date"
          categories={["SolarPanels", "Inverters"]}
          // colors={["indigo", "rose"]}
          valueFormatter={dataFormatter}
          yAxisWidth={60}
          onValueChange={(v) => console.log(v)}
        />
      </div>
      <div className="flex-1 h-full w-full border rounded-md p-2 bg-slate-200">
        <BarList data={datahero} className="mx-auto max-w-sm" />
        <BarList data={datahero} className="mx-auto max-w-sm" />
      </div>
    </TabsContent>
  );
};
