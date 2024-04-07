import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clientsSlice";
import appReducer from "./slices/appSlice";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  reducer: {
    // coaches: coachesReducer,
    clients: clientsReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // isSerializable: () => true,
        ignoredActions: ["app/setRegisterFormValues"],
        // ignoredActionPaths: [],
        ignoredPaths: ["app.registerFormValues"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
