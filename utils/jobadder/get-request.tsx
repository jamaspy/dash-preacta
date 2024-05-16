export const GET_REQUEST = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.JOBADDER_API_ACCESS_TOKEN}`,
  },
};
