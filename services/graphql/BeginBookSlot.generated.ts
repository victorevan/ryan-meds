import * as Types from './generated';

import { api } from 'services/baseApi';
export type BeginBookSlotMutationVariables = Types.Exact<{
  slot: Types.Scalars['Date'];
  medicalPatientId: Types.Scalars['ID'];
  medicalProviderId: Types.Scalars['ID'];
}>;


export type BeginBookSlotMutation = { __typename?: 'Mutation', beginBookSlot: { __typename?: 'MedicalBooking', id: string, status: Types.Status, startTime: number, providerId: string, patientId: string, expiresAt?: any | null } };


export const BeginBookSlotDocument = `
    mutation BeginBookSlot($slot: Date!, $medicalPatientId: ID!, $medicalProviderId: ID!) {
  beginBookSlot: begin_book_slot(
    slot: $slot
    medical_patient_id: $medicalPatientId
    medical_provider_id: $medicalProviderId
  ) {
    id
    startTime: start_time
    providerId: provider_id
    patientId: patient_id
    expiresAt: expires_at
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

