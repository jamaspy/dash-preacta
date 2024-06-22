import { JobApplication } from "@/models/application.model";

export function countJobTitles(
  applications: JobApplication[]
): { name: string; value: number }[] {
  const titleCounts = applications.reduce((acc, application) => {
    acc[application.JobTitle] = (acc[application.JobTitle] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  return Object.entries(titleCounts).map(([name, value]) => ({ name, value }));
}
