import * as Types from './generated';

import { api } from 'services/baseApi';
export type GetProvidersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProvidersQuery = { __typename?: 'Query', providers: Array<{ __typename?: 'MedicalProvider', id: string, name: string }> };


export const GetProvidersDocument = `
    query GetProviders {
  providers {
    id
    name
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetProviders: build.query<GetProvidersQuery, GetProvidersQueryVariables | void>({
      query: (variables) => ({ document: GetProvidersDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetProvidersQuery, useLazyGetProvidersQuery } = injectedRtkApi;

