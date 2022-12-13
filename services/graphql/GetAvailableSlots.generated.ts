import * as Types from './generated';

import { api } from 'services/baseApi';
export type GetAvailableSlotsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAvailableSlotsQuery = { __typename?: 'Query', availableSlots: Array<{ __typename?: 'SlotWithProvider', startTime: any, providerId: string }> };


export const GetAvailableSlotsDocument = `
    query GetAvailableSlots {
  availableSlots: available_slots {
    startTime: start_time
    providerId: provider_id
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

