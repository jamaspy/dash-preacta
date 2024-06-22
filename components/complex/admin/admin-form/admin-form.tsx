"use client";

import { updateUsersCompanyId } from "@/actions/users/update-users-company-id";
import { Label } from "@/components/ui/label";
import { SearchSelect } from "@/components/ui/search-select";
import { getAllClientsQuery } from "@/queries/clients/get-all-clients.query";
import { getAllUsersQuery } from "@/queries/users/get-all-users.query";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { toast } from "sonner";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const AdminForm = () => {
  const queryClient = useQueryClient();
  const [companyId, setCompanyId] = useState<number>(0);
  const [userId, setUserId] = useState<string>("");

  // Mutations
  const mutation = useMutation({
    mutationFn: async () => updateUsersCompanyId(userId, +companyId),
    onSuccess: (e) => {
      toast.success("ClientId has been added to user.");

      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["allUsers"] });
    },
  });

  const {
    data: clientData,
    isLoading: clientIsLoading,
    isError: clientIsError,
  } = useSuspenseQuery(getAllClientsQuery);

  const {
    data: userData,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useSuspenseQuery(getAllUsersQuery);

  if (clientIsLoading || userIsLoading) {
    return <div>Loading...</div>;
  }

  if (clientIsError || userIsError) {
    return <div>Error...</div>;
  }
  const clientOptions = clientData.map((client) => ({
    label: `${client.Name} ${client.City !== null ? `(${client.City})` : ""}`,
    value: client.CompanyId.toString(),
  }));

  const userOptions = userData.map((user) => ({
    label: `${user.name} | ${user.email}`,
    value: user.id.toString(),
  }));

  return (
    <div className="flex flex-row items-center justify-center gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label>Select your user</Label>
          <SearchSelect
            options={userOptions}
            onChange={(e) => setUserId(e.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Select there company</Label>
          <SearchSelect
            options={clientOptions}
            onChange={(e) => setCompanyId(e.value)}
          />
        </div>
        <Button onClick={() => mutation.mutate()}>Update</Button>
      </div>
      <div className="flex flex-col h-full justify-between">
        UserId: {userId}
        <br />
        CompanyId: {companyId}
      </div>
    </div>
  );
};

export default AdminForm;
