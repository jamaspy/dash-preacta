"use server";

import { GET_REQUEST } from "@/utils/jobadder/get-request";

export const getJobSubmissions = async (id: number) => {
  try {
    const data = await fetch(
      `${process.env.JOBADDER_BASE_URL}/jobs/${id}/submissions`,
      GET_REQUEST
    );
    const jobs = await data.json();
    return jobs.items;
  } catch (error) {
    console.error("Fetch Jobs Error", error);
    return [];
  }
};
