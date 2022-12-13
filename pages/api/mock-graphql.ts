import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { faker } from "@faker-js/faker";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import { join } from "path";
import getConfig from "next/config";
import { GraphQLScalarType } from "graphql";

import { MedicalProvider, Resolvers } from "lib/api/graphql/generated";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  // incoming
  parseValue(value) {
    if (typeof value !== "number") return;
    return new Date(value);
  },
  // outgoing
  serialize(value) {
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
  Date: dateScalar,
  Query: {
    currentTime: () => Date.now(),
  },
};

const generateSlotsFromTimeToTime = (
  startTime: number,
  endTime: number,
  interval: 900
) => {
  const slots = [];
  let lastTime = startTime;

  while (lastTime < endTime) {
    slots.push({
      start_time: lastTime,
    });
    lastTime += interval;
  }

  return slots;
};

const existingProviderMock: MedicalProvider = {
  id: faker.datatype.uuid(),
  name: "Dr. John Doe",
  available_slots: generateSlotsFromTimeToTime(1691938800, 1691964000, 900),
};

const createRandomProvider = (): MedicalProvider => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  available_slots: [
    {
      start_time: faker.date.past().getTime(),
    },
  ],
});

const mocks = {
  Date: () => faker.date.future().getTime(),
  Query: {
    providers: () => [
      existingProviderMock,
      createRandomProvider(),
      createRandomProvider(),
    ],
  },
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
