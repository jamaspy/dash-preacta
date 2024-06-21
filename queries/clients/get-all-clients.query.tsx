import { getAllClients } from "@/actions/clients/get-all-clients";
import { queryOptions } from "@tanstack/react-query";

export const getAllClientsQuery = queryOptions({
  queryKey: ["allClients"],
  queryFn: async () => {
    const response = await getAllClients();
    return response;
  },
});
