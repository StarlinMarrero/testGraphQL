import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, Resolver } from "type-graphql";
import { PingResolver } from "./resolvers/ping";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ProductResolver } from "./resolvers/productResolver";

async function Startup() {
  const app = express();
  const server = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      validate: false,
      resolvers: [PingResolver, ProductResolver],
    }),
  });
  await server.start();
  server.applyMiddleware({ app });
  return app;
}

export default Startup;
