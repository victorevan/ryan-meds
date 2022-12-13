import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { faker } from "@faker-js/faker";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import { join } from "path";
import getConfig from "next/config";
import { GraphQLScalarType } from "graphql";

import {
  MedicalProvider,
  Resolvers,
  SlotWithProvider,
} from "lib/api/graphql/generated";
import { Slot } from "../../services/graphql/generated";

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

const generateSlotsFromTimeToTime = (
  startTime: number,
  endTime: number,
  interval: 900
): Slot[] => {
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

const createRandomProvider = (): MedicalProvider => {
  const futureStartTime = faker.date.future().getTime();
  // work for 4 hours
  const futureEndTime = futureStartTime + 14400;

  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    available_slots: generateSlotsFromTimeToTime(
      futureStartTime,
      futureEndTime,
      900
    ),
  };
};

const fakeProviders = [
  existingProviderMock,
  createRandomProvider(),
  createRandomProvider(),
];

const fakeAvailableSlots = fakeProviders.reduce(
  (acc: Array<SlotWithProvider>, currProvider) => {
    const slotsWithProvider = currProvider.available_slots.map((slot) => ({
      start_time: slot.start_time,
      provider_id: currProvider.id,
    }));

    acc.push(...slotsWithProvider);
    return acc;
  },
  []
);

const resolvers: Resolvers = {
  Date: dateScalar,
  Query: {
    current_time: () => Date.now(),
  },
};

const mocks = {
  Date: () => 1691938800,
  Query: {
    providers: () => fakeProviders,
    available_slots: () => fakeAvailableSlots,
  },
  Mutation: {
    confirm_slot: () => ({
      id: faker.datatype.uuid(),
      start_time: 1691938800,
      provider_id: faker.datatype.uuid(),
      patient_id: faker.datatype.uuid(),
      expires_at: 1691938800,
      status: "CONFIRMED",
    }),
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
