import { GraphQLClient } from "graphql-request";

export default new GraphQLClient(process.env.API_ENDPOINT!, {
  // @ts-ignore
  headers: {
    Authorization: process.env.PERMANENT_AUTH_TOKEN
      ? `Bearer ${process.env.PERMANENT_AUTH_TOKEN}`
      : undefined,
  },
});
