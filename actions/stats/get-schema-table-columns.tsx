import { connectAndQuery } from "@/server";

export const getSchemaTablesColumns = async (tableName: string) => {
  try {
    const data = await connectAndQuery(
      `
      SELECT * FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = ${tableName}
      `
    );

    return data;
  } catch (error) {
    console.error("Fetch Stats Error", error);
    return [];
  }
};
