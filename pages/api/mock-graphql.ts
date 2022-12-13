import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import { join } from "path";
import getConfig from "next/config";
import { GraphQLScalarType } from "graphql";

import { Resolvers } from "lib/api/graphql/generated";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  // incoming
  parseValue(value) {
    console.log("parseValue", value);
    if (typeof value !== "number") return;
    return new Date(value);
  },
  // outgoing
  serialize(value) {
    console.log("serialize", value);
    if (typeof value !== "number") return;
    return new Date(value).valueOf();
  },
});

const { serverRuntimeConfig } = getConfig();
const schemaPath = join(serverRuntimeConfig.PROJECT_ROOT, "./schema.graphql");
const typeDefs = readFileSync(schemaPath, {
  encoding: "utf-8",
});

const resolvers: Resolvers = {
  Query: {
    currentTime: () => Date.now(),
  },
  Date: dateScalar,
};

const mocks = {
  Date: () => Date.now(),
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
    mocks,
    preserveResolvers: true,
  }),
});

export default startServerAndCreateNextHandler(server);
