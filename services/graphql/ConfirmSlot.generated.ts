import * as Types from './generated';

import { api } from 'services/baseApi';
export type ConfirmSlotMutationVariables = Types.Exact<{
  bookingId: Types.Scalars['ID'];
}>;


export type ConfirmSlotMutation = { __typename?: 'Mutation', confirmSlot?: { __typename?: 'MedicalBooking', id: string, status: Types.Status, startTime: number } | null };


export const ConfirmSlotDocument = `
    mutation ConfirmSlot($bookingId: ID!) {
  confirmSlot: confirm_slot(booking_id: $bookingId) {
    id
    startTime: start_time
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

