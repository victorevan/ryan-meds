import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";

const storeConfig: ConfigureStoreOptions = {
  reducer: {
    hello: () => "Hello world!",
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
};

const store = configureStore(storeConfig);

export default store;
