"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Job } from "./models";

export const JobsDetailsColumns: ColumnDef<Job>[] = [
  {
    accessorKey: "jobTitle",
    header: "job Title",
  },
  {
    accessorKey: "talentPool",
    header: "Talent Pool",
  },
  {
    accessorKey: "preScreening",
    header: "Pre-Screening",
  },
  {
    accessorKey: "connected",
    header: "Connected",
  },
  {
    accessorKey: "screening",
    header: "Screening",
  },
  {
    accessorKey: "submissions",
    header: "Submissions",
  },
  {
    accessorKey: "interview_1",
    header: "Interview 1",
  },
  {
    accessorKey: "interview_2",
    header: "Interview 2",
  },
  {
    accessorKey: "interview_final",
    header: "Interview Final",
  },
  {
    accessorKey: "offer",
    header: "Offer",
  },
];
