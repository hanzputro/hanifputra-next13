import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: API_URL,
});
