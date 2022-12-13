import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import { resolve, join } from "path";
import getConfig from "next/config";

import { QueryResolvers, Resolvers } from "lib/api/graphql/generated";

const { serverRuntimeConfig } = getConfig();
const schemaPath = join(serverRuntimeConfig.PROJECT_ROOT, "./schema.graphql");
const typeDefs = readFileSync(schemaPath, {
  encoding: "utf-8",
});

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    hello: () => "Hello world!",
  },
});

export default startServerAndCreateNextHandler(server);
