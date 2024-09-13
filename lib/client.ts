import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = process.env.API_URL;

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: API_URL,
});
