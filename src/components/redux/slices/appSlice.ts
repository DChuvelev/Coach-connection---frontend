import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LangChoice } from "../../../utils/models";
import { dbApi } from "../../../utils/api/DbApi";
import { LoginFormData, UserToRegister, ThunkStatus } from "./dbTypes";
import { Admin, Client, Coach, initialState } from "./appTypes";
export const registerUser = createAsyncThunk(
  "app/registerUser",
  async (arg, { getState, dispatch }) => {
    const state = getState() as RootState;
    const userToRegister = {
      email: state.app.registerFormValues.email,
      name: state.app.registerFormValues.name,
      password: state.app.registerFormValues.password,
      role: state.app.registerFormValues.role,
    };
    let resp;
    try {
      resp = await dbApi.registerUser(userToRegister);
    } catch (err) {
      return Promise.reject(err);
    }
    dispatch(
      setLoginFormValues({
        email: state.app.registerFormValues.email,
        password: state.app.registerFormValues.password,
        role: state.app.registerFormValues.role,
      })
    );
    dispatch(login());
    return resp;
  }
);

export const login = createAsyncThunk(
  "app/login",
  async (arg, { getState, dispatch }) => {
    const state = getState() as RootState;
    const userToLogin = {
      email: state.app.loginFormValues.email,
      password: state.app.loginFormValues.password,
      role: state.app.loginFormValues.role,
    };
    let resp: Client | Coach | Admin;
    try {
      resp = await dbApi.authorizeUser(userToLogin);
    } catch (err) {
      return Promise.reject(err);
    }
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
    resetAuthError: (state, action: PayloadAction) => {
      state.authStatus = "idle";
      state.error = "";
    },
    setAuthStatus: (state, action: PayloadAction<ThunkStatus>) => {
      state.authStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.authStatus = "loading";
        console.log(action);
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // state.authStatus = "succeeded";
        console.log(action);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.authStatus = "failed";
        state.error = action.error.message;
        console.log(action);
      })
      .addCase(login.pending, (state, action) => {
        state.authStatus = "loading";
        console.log(action);
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = "succeeded";
        state.loggedIn = true;
        console.log(action);
      })
      .addCase(login.rejected, (state, action) => {
        state.authStatus = "failed";
        state.error = action.error.message;
        console.log(action);
      });
  },
});

export default appSlice.reducer;
export const {
  changeLang,
  setRegisterFormValues,
  setLoginFormValues,
  resetAuthError,
  setAuthStatus,
} = appSlice.actions;
