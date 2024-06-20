import { Job } from "@/models/job.model";

export function countJobStatuses(
  jobs: Job[]
): { name: string; value: number }[] {
  const statusCounts = jobs.reduce((acc, job) => {
    acc[job.JoborderStatus] = (acc[job.JoborderStatus] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  return Object.entries(statusCounts).map(([name, value]) => ({
    name,
    value,
  }));
}
