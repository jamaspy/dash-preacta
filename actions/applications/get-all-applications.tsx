"use server";

import { JobApplication } from "@/models/applications.model";
import { connectAndQuery } from "@/server";

export const getAllApplications = async (companyId: number) => {
  try {
    console.log("I RAN JOBS ALL APPLICATIONS");

    const data: JobApplication[] | undefined = await connectAndQuery(
      `SELECT * FROM ods.jobapplications WHERE CompanyID=${companyId}`
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
