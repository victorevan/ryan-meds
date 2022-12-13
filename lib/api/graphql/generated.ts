import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MedicalBooking: ResolverTypeWrapper<MedicalBooking>;
  MedicalPatient: ResolverTypeWrapper<MedicalPatient>;
  MedicalProvider: ResolverTypeWrapper<MedicalProvider>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Slot: ResolverTypeWrapper<Slot>;
  SlotWithProvider: ResolverTypeWrapper<SlotWithProvider>;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  MedicalBooking: MedicalBooking;
  MedicalPatient: MedicalPatient;
  MedicalProvider: MedicalProvider;
  Mutation: {};
  Query: {};
  Slot: Slot;
  SlotWithProvider: SlotWithProvider;
  String: Scalars['String'];
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MedicalBookingResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedicalBooking'] = ResolversParentTypes['MedicalBooking']> = {
  expires_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  patient_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  provider_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  start_time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedicalPatientResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedicalPatient'] = ResolversParentTypes['MedicalPatient']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedicalProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedicalProvider'] = ResolversParentTypes['MedicalProvider']> = {
  available_slots?: Resolver<Array<ResolversTypes['Slot']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  add_availabilities?: Resolver<Maybe<ResolversTypes['MedicalProvider']>, ParentType, ContextType, RequireFields<MutationAdd_AvailabilitiesArgs, 'end_time' | 'medical_provider_id' | 'start_time'>>;
  begin_book_slot?: Resolver<ResolversTypes['MedicalBooking'], ParentType, ContextType, RequireFields<MutationBegin_Book_SlotArgs, 'medical_patient_id' | 'medical_provider_id' | 'slot'>>;
  confirm_slot?: Resolver<Maybe<ResolversTypes['MedicalBooking']>, ParentType, ContextType, RequireFields<MutationConfirm_SlotArgs, 'booking_id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  available_slots?: Resolver<Array<ResolversTypes['SlotWithProvider']>, ParentType, ContextType>;
  currentTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  providers?: Resolver<Array<ResolversTypes['MedicalProvider']>, ParentType, ContextType>;
};

export type SlotResolvers<ContextType = any, ParentType extends ResolversParentTypes['Slot'] = ResolversParentTypes['Slot']> = {
  start_time?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlotWithProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['SlotWithProvider'] = ResolversParentTypes['SlotWithProvider']> = {
  provider_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  start_time?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  MedicalBooking?: MedicalBookingResolvers<ContextType>;
  MedicalPatient?: MedicalPatientResolvers<ContextType>;
  MedicalProvider?: MedicalProviderResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Slot?: SlotResolvers<ContextType>;
  SlotWithProvider?: SlotWithProviderResolvers<ContextType>;
};

