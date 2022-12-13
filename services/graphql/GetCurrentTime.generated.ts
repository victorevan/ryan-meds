import * as Types from './generated';

import { api } from 'services/baseApi';
export type GetCurrentTimeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCurrentTimeQuery = { __typename?: 'Query', currentTime: any };


export const GetCurrentTimeDocument = `
    query GetCurrentTime {
  currentTime: current_time
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetCurrentTime: build.query<GetCurrentTimeQuery, GetCurrentTimeQueryVariables | void>({
      query: (variables) => ({ document: GetCurrentTimeDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetCurrentTimeQuery, useLazyGetCurrentTimeQuery } = injectedRtkApi;

