import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LangChoice } from "../../../utils/models";

interface AppState {
  lang: LangChoice;
  loggedIn: boolean;
  currentUser: {
    name: string;
    avatar: string;
    email: string;
  };
}

const initialState: AppState = {
  lang: LangChoice.En,
  loggedIn: false,
  currentUser: {
    name: "",
    avatar: "",
    email: "",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<LangChoice>) => {
      state.lang = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { changeLang } = appSlice.actions;
