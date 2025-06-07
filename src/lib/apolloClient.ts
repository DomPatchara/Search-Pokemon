import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
    cache: new InMemoryCache(), // เก็บไว้ใน Ram
});

export default client;