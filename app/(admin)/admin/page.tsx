import AdminForm from "@/components/complex/admin/admin-form/admin-form";
import { getAllClientsQuery } from "@/queries/clients/get-all-clients.query";
import { getAllUsersQuery } from "@/queries/users/get-all-users.query";

import { getQueryClient } from "@/react-query/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

const AdminPage = async () => {
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery(getAllClientsQuery),
    queryClient.prefetchQuery(getAllUsersQuery),
  ]);
  return (
    <main className="shadow-md p-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl w-full h-full flex-1 mx-auto flex flex-col max-w-3xl">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AdminForm />
      </HydrationBoundary>
    </main>
  );
};

export default AdminPage;
