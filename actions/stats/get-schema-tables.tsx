"use server";

import { connectAndQuery } from "@/server";

export const getSchemaTables = async () => {
  try {
    const data = await connectAndQuery(
      "SELECT * FROM INFORMATION_SCHEMA.tables"
    );

    return data;
  } catch (error) {
    console.error("Fetch Stats Error", error);
    return [];
  }
};
