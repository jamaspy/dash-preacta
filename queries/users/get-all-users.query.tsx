import { getAllUsers } from "@/actions/users/get-all-users";
import { queryOptions } from "@tanstack/react-query";

export const getAllUsersQuery = queryOptions({
  queryKey: ["allUsers"],
  queryFn: async () => {
    const response = await getAllUsers();
    return response;
  },
});
