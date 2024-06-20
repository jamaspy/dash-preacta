export const config = {
  user: process.env.SQL_SERVER_USER,
  password: process.env.SQL_SERVER_PASSWORD,
  server: process.env.SQL_SERVER_HOST,
  database: process.env.SQL_SERVER_DATABASE,
  port: 1433,
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
};
