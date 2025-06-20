"use client";

import { ApolloProvider } from "@apollo/client";
import client from '../lib/apolloClient'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
