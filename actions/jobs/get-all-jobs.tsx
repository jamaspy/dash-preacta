"use server";

import { Job } from "@/models/job.model";
import { connectAndQuery } from "@/server";

export const getAllJobs = async (companyId: number) => {
  try {
    console.log("I RAN JOBS ALL JOBS");

    const data: Job[] | undefined = await connectAndQuery(
      `SELECT * FROM ods.job WHERE CompanyId = ${companyId}`
    );

    if (!data) {
      return [];
    }

    return data;
  } catch (error) {
    console.error("Fetch Placements Error", error);
    return [];
  }
};
