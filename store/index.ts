import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { api as availableSlotsApi } from "services/graphql/GetAvailableSlots.generated";
import { api as providersApi } from "services/graphql/GetProviders.generated";

const storeConfig: ConfigureStoreOptions = {
  reducer: {
    [availableSlotsApi.reducerPath]: availableSlotsApi.reducer,
    [providersApi.reducerPath]: providersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(availableSlotsApi.middleware)
      .concat(providersApi.middleware),
};

const store = configureStore(storeConfig);

export default store;
