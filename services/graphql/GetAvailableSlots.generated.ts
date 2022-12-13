import * as Types from './generated';

import { api } from 'services/baseApi';
export type GetAvailableSlotsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAvailableSlotsQuery = { __typename?: 'Query', available_slots: Array<{ __typename?: 'SlotWithProvider', start_time: any, provider_id: string }> };


export const GetAvailableSlotsDocument = `
    query GetAvailableSlots {
  available_slots {
    start_time
    provider_id
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetAvailableSlots: build.query<GetAvailableSlotsQuery, GetAvailableSlotsQueryVariables | void>({
      query: (variables) => ({ document: GetAvailableSlotsDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetAvailableSlotsQuery, useLazyGetAvailableSlotsQuery } = injectedRtkApi;

