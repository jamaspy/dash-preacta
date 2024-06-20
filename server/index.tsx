import sql from "mssql";
import { config } from "./config";

export async function connectAndQuery(queryString: string) {
  console.log("Starting...");
  try {
    const poolConnection = await sql.connect(config as sql.config);

    console.log("Reading rows from the Table...");

    const resultSet = await poolConnection.request().query(queryString);

    const { recordset } = resultSet;

    poolConnection.close();

    console.log("Connection closed...");

    return recordset;
  } catch (err) {
    console.error("CONNECTION ERROR:", err);
  }
}
