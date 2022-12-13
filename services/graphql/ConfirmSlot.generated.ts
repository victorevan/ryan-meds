import * as Types from './generated';

import { api } from 'services/baseApi';
export type ConfirmSlotMutationVariables = Types.Exact<{
  booking_id: Types.Scalars['ID'];
}>;


export type ConfirmSlotMutation = { __typename?: 'Mutation', confirm_slot?: { __typename?: 'MedicalBooking', id: string, start_time: number, status: Types.Status } | null };


export const ConfirmSlotDocument = `
    mutation ConfirmSlot($booking_id: ID!) {
  confirm_slot(booking_id: $booking_id) {
    id
    start_time
    status
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    ConfirmSlot: build.mutation<ConfirmSlotMutation, ConfirmSlotMutationVariables>({
      query: (variables) => ({ document: ConfirmSlotDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useConfirmSlotMutation } = injectedRtkApi;

