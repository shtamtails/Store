import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://test-store-endpoint.herokuapp.com/api",
  cache: new InMemoryCache(),
});
