import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Client {
  id: number;
  name: string;
}

interface ClientsState {
  clientsList: Client[];
}

const initialState: ClientsState = {
  clientsList: [],
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.clientsList.push({
        id: state.clientsList.length,
        name: action.payload.name,
      });
    },
  },
});

export default clientsSlice.reducer;
export const { addPerson } = clientsSlice.actions;
