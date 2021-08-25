import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PingResolver } from "./resolvers/ping";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ProductResolver } from "./resolvers/productResolver";
import { UserResolver } from "./resolvers/userResolver";
import joiful from 'joiful'
import { ArgumentValidationError } from "./validations/error";

async function Startup() {
  const app = express();
  const server = new ApolloServer({

   


    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      
      resolvers: [PingResolver, ProductResolver, UserResolver],
      
    }),
    
    
    
  });
  await server.start();
  server.applyMiddleware({ app });
  return app;
}

export default Startup;
