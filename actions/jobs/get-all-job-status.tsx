"use server";

import { Job } from "@/models/job.model";
import { connectAndQuery } from "@/server";

export const getAllJobStatus = async (companyId: number) => {
  try {
    console.log("I RAN JOBS ALL JOBS Status");

    const data: Job[] | undefined = await connectAndQuery(
      `SELECT TOP 5 * FROM dw.DW_JA_JobOrders`
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
