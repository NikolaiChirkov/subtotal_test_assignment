import { configureStore } from "@reduxjs/toolkit";
import { launchesApi } from "./services/launches/launchesAPI";
import { launchesSlice } from "./modules/launches/launchesSlice";

export const store = configureStore({
  reducer: {
    launches: launchesSlice.reducer,
    [launchesApi.reducerPath]: launchesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(launchesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
