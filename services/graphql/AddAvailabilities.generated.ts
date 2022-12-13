import * as Types from './generated';

import { api } from 'services/baseApi';
export type AddAvailabilitiesMutationVariables = Types.Exact<{
  medicalProviderId: Types.Scalars['ID'];
  startTime: Types.Scalars['Date'];
  endTime: Types.Scalars['Date'];
}>;


export type AddAvailabilitiesMutation = { __typename?: 'Mutation', addAvailabilities?: { __typename?: 'MedicalProvider', id: string, availableSlots: Array<{ __typename?: 'Slot', startTime: any }> } | null };


export const AddAvailabilitiesDocument = `
    mutation AddAvailabilities($medicalProviderId: ID!, $startTime: Date!, $endTime: Date!) {
  addAvailabilities: add_availabilities(
    medical_provider_id: $medicalProviderId
    start_time: $startTime
    end_time: $endTime
  ) {
    id
    availableSlots: available_slots {
      startTime: start_time
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

