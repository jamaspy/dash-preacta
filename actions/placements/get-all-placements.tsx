"use server";

import { connectAndQuery } from "@/server";

export const getAllPlacements = async () => {
  try {
    const data = await connectAndQuery("SELECT * FROM ods.JobApplications");

    return data;
  } catch (error) {
    console.error("Fetch Placements Error", error);
    return [];
  }
};
