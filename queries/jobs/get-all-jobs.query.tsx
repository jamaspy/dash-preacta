import { getAllJobs } from "@/actions/jobs/get-all-jobs";
import { queryOptions } from "@tanstack/react-query";

export const getAllJobForClientQuery = queryOptions({
  queryKey: ["allJobs"],
  queryFn: async () => {
    const response = await getAllJobs(2820575);
    return response;
  },
});
