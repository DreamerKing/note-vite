import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  concat,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { IS_LOGGED_IN } from "#/gql/query";

const uri = import.meta.env.VITE_API_URL;
const cache = new InMemoryCache();
cache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
});

const link = new HttpLink({ uri });

const setAuthorizationLink = setContext(
  ({ headers = {} }, previousContext) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem("token"),
    },
  }),
);

const client = new ApolloClient({
  uri,
  cache,
  link: concat(setAuthorizationLink, link),
  headers: {
    authorization: localStorage.getItem("token"),
  },
  resolvers: {},
  connectToDevTools: true,
});

// client.onResetStore(() => cache.writeData({ data }))

export default client;
