import * as Types from './generated';

import { api } from 'services/baseApi';
export type AddAvailabilitiesMutationVariables = Types.Exact<{
  medical_provider_id: Types.Scalars['ID'];
  start_time: Types.Scalars['Date'];
  end_time: Types.Scalars['Date'];
}>;


export type AddAvailabilitiesMutation = { __typename?: 'Mutation', add_availabilities?: { __typename?: 'MedicalProvider', id: string, available_slots: Array<{ __typename?: 'Slot', start_time: any }> } | null };


export const AddAvailabilitiesDocument = `
    mutation AddAvailabilities($medical_provider_id: ID!, $start_time: Date!, $end_time: Date!) {
  add_availabilities(
    medical_provider_id: $medical_provider_id
    start_time: $start_time
    end_time: $end_time
  ) {
    id
    available_slots {
      start_time
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    AddAvailabilities: build.mutation<AddAvailabilitiesMutation, AddAvailabilitiesMutationVariables>({
      query: (variables) => ({ document: AddAvailabilitiesDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useAddAvailabilitiesMutation } = injectedRtkApi;

