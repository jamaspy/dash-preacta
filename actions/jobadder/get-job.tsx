"use server";

import { GET_REQUEST } from "@/utils/jobadder/get-request";

export const getJob = async (id: string) => {
  try {
    const data = await fetch(
      `${process.env.JOBADDER_BASE_URL}/companies/2820575/jobs/${id}`,
      GET_REQUEST
    );
    const jobs = await data.json();
    return jobs.items;
  } catch (error) {
    console.error("Fetch Jobs Error", error);
    return [];
  }
};
