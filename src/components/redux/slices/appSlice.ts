import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LangChoice } from "../../../utils/models";
import { dbApi } from "../../../utils/api/DbApi";
import { UserToRegister, thunkStatus } from "./dbTypes";
import { registerFormDefaultData } from "../../RegisterModal/RegisterModalTypes";
import {
  LoginFormData,
  loginFormDefaultData,
} from "../../LoginModal/LoginModalTypes";

interface AppState {
  lang: LangChoice;
  loggedIn: boolean;
  currentUser: {
    name: string;
    avatar: string;
    email: string;
  };
  loginFormValues: LoginFormData;
  registerFormValues: UserToRegister;
  status: thunkStatus;
  error: string | null;
}

const initialState: AppState = {
  lang: LangChoice.En,
  loggedIn: false,
  currentUser: {
    name: "",
    avatar: "",
    email: "",
  },
  loginFormValues: loginFormDefaultData,
  registerFormValues: registerFormDefaultData,
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk(
  "app/registerUser",
  async (arg, { getState }) => {
    const state = getState() as RootState;
    console.log(state.app.registerFormValues);
    console.log(arg);
    const resp = await dbApi.registerUser();
    return resp;
  }
);

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
    setRegisterFormValues: (state, action: PayloadAction<UserToRegister>) => {
      state.registerFormValues = action.payload;
    },
    setLoginFormValues: (state, action: PayloadAction<LoginFormData>) => {
      state.loginFormValues = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state, action) => {
      state.status = "loading";
      console.log(state.status);
    });
  },
});

export default appSlice.reducer;
export const { changeLang, setRegisterFormValues, setLoginFormValues } =
  appSlice.actions;
