import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clientsSlice";
import appReducer from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    // coaches: coachesReducer,
    clients: clientsReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
