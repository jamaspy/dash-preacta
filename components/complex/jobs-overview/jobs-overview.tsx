"use client";
import { Job } from "@/models/job.model";
import React from "react";
import { JobSelect } from "@/components/complex/job-select";
import { getJobApplications } from "@/actions/jobadder/get-job-applications";

export const JobsOverview = ({ jobs }: { jobs: Job[] }) => {
  const [selectedJob, setSelectedJob] = React.useState<string>("");
  const jobData = jobs.find((job) => job.jobId.toString() === selectedJob);

  return (
    <section className="min-h-[88vh] w-full bg-slate-200 p-4">
      <JobSelect jobs={jobs} selectJob={setSelectedJob} />
      <div className="mt-4">
        {jobData ? (
          <div>
            <h2 className="text-xl font-bold">{jobData.jobTitle}</h2>
            <p className="text-md">
              <span className="font-semibold">Status:</span>{" "}
              {jobData.status.name}
            </p>
            <p className="text-md">
              <span className="font-semibold">Location:</span>{" "}
              {jobData.location.name}
            </p>
          </div>
        ) : (
          <p>Select a job to view details</p>
        )}
      </div>
    </section>
  );
};
