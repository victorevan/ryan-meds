import * as Types from './generated';

import { api } from 'services/baseApi';
export type BeginBookSlotMutationVariables = Types.Exact<{
  slot: Types.Scalars['Date'];
  medical_patient_id: Types.Scalars['ID'];
  medical_provider_id: Types.Scalars['ID'];
}>;


export type BeginBookSlotMutation = { __typename?: 'Mutation', begin_book_slot: { __typename?: 'MedicalBooking', id: string, start_time: number, provider_id: string, patient_id: string, expires_at?: any | null, status: Types.Status } };


export const BeginBookSlotDocument = `
    mutation BeginBookSlot($slot: Date!, $medical_patient_id: ID!, $medical_provider_id: ID!) {
  begin_book_slot(
    slot: $slot
    medical_patient_id: $medical_patient_id
    medical_provider_id: $medical_provider_id
  ) {
    id
    start_time
    provider_id
    patient_id
    expires_at
    status
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    BeginBookSlot: build.mutation<BeginBookSlotMutation, BeginBookSlotMutationVariables>({
      query: (variables) => ({ document: BeginBookSlotDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useBeginBookSlotMutation } = injectedRtkApi;

