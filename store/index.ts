import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { api } from "services/baseApi";

const storeConfig: ConfigureStoreOptions = {
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
};

const store = configureStore(storeConfig);

export default store;
