export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type MedicalBooking = {
  __typename?: 'MedicalBooking';
  expires_at?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  patient_id: Scalars['ID'];
  provider_id: Scalars['ID'];
  start_time: Scalars['Int'];
  status: Status;
};

export type MedicalPatient = {
  __typename?: 'MedicalPatient';
  id: Scalars['ID'];
};

export type MedicalProvider = {
  __typename?: 'MedicalProvider';
  available_slots: Array<Slot>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  add_availabilities?: Maybe<MedicalProvider>;
  begin_book_slot: MedicalBooking;
  confirm_slot?: Maybe<MedicalBooking>;
};


export type MutationAdd_AvailabilitiesArgs = {
  end_time: Scalars['Date'];
  medical_provider_id: Scalars['ID'];
  start_time: Scalars['Date'];
};


export type MutationBegin_Book_SlotArgs = {
  medical_patient_id: Scalars['ID'];
  medical_provider_id: Scalars['ID'];
  slot: Scalars['Date'];
};


export type MutationConfirm_SlotArgs = {
  booking_id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  available_slots: Array<SlotWithProvider>;
  currentTime: Scalars['Date'];
  providers: Array<MedicalProvider>;
};

export type Slot = {
  __typename?: 'Slot';
  start_time: Scalars['Date'];
};

export type SlotWithProvider = {
  __typename?: 'SlotWithProvider';
  provider_id: Scalars['ID'];
  start_time: Scalars['Date'];
};

export enum Status {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Expired = 'EXPIRED',
  Pending = 'PENDING'
}
