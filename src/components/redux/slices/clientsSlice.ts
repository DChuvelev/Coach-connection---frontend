import { createSlice } from "@reduxjs/toolkit";
import { Client, ClientChild, ThunkStatus } from "./dbTypes";

interface ClientsState {
  clientsList: Client[];
  status: ThunkStatus;
  error: string | null;
}

const initialState: ClientsState = {
  clientsList: [],
  status: "idle",
  error: null,
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    test: (state, action) => {
      console.log(state.status);
    },
  },
});

export default clientsSlice.reducer;
export const {} = clientsSlice.actions;
