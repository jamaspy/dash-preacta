"use server";

import { Client } from "@/models/client.model";
import { connectAndQuery } from "@/server";
import { orderBy } from "lodash";
export const getAllClients = async () => {
  try {
    console.log("I RAN JOBS ALL CLIENTS");

    const data: Client[] | undefined = await connectAndQuery(
      `SELECT * FROM ods.client`
    );

    if (!data) {
      return [];
    }
    const sortedClients = orderBy(
      data,
      [(client) => client.Name.toLowerCase()],
      ["asc"]
    );
    return sortedClients;
  } catch (error) {
    console.error("Fetch Clients Error", error);
    return [];
  }
};
