import * as Types from './generated';

import { api } from 'services/baseApi';
export type HelloWorldQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HelloWorldQuery = { __typename?: 'Query', hello?: string | null };


export const HelloWorldDocument = `
    query HelloWorld {
  hello
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    HelloWorld: build.query<HelloWorldQuery, HelloWorldQueryVariables | void>({
      query: (variables) => ({ document: HelloWorldDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useHelloWorldQuery, useLazyHelloWorldQuery } = injectedRtkApi;

