"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Job } from "@/models/job.model";

interface JobSelectProps {
  jobs: Job[];
  selectJob: Dispatch<SetStateAction<string>>;
}

export const JobSelect = ({ jobs, selectJob }: JobSelectProps) => {
  return (
    <Select onValueChange={(e) => selectJob(e)}>
      <SelectTrigger className="max-w-md">
        <SelectValue placeholder="Select a job" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a job</SelectLabel>
          {jobs.map((job: Job) => (
            <SelectItem key={job.jobId} value={job.jobId.toString()}>
              {job.jobTitle}{" "}
              <span className="text-slate-700">[{job.jobId}]</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
