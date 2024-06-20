"use server";

import { GET_REQUEST } from "@/utils/jobadder/get-request";

export const getJobApplications = async (id: number) => {
  try {
    const data = await fetch(
      `${process.env.JOBADDER_BASE_URL}/jobs/${id}/applications`,
      GET_REQUEST
    );
    const jobs = await data.json();
    return jobs.items;
  } catch (error) {
    console.error("Fetch Jobs Error", error);
    return [];
  }
};
