import { LangChoice } from "../../../utils/models";
import { loginFormDefaultData } from "../../LoginModal/LoginModalTypes";
import { registerFormDefaultData } from "../../RegisterModal/RegisterModalTypes";
import { LoginFormData, UserToRegister, ThunkStatus, Role } from "./dbTypes";

interface User {
  role: Role;
  name: string;
  avatar: string;
  email: string;
}

export interface Client extends User {}
export interface Coach extends User {}
export interface Admin extends User {}

export interface AppState {
  lang: LangChoice;
  loggedIn: boolean;
  currentUser: Client | Coach | Admin;
  loginFormValues: LoginFormData;
  registerFormValues: UserToRegister;
  authStatus: ThunkStatus;
  error: string | undefined;
}

export const initialState: AppState = {
  lang: LangChoice.En,
  loggedIn: false,
  currentUser: {
    role: "",
    name: "",
    avatar: "",
    email: "",
  },
  loginFormValues: loginFormDefaultData,
  registerFormValues: registerFormDefaultData,
  authStatus: "idle",
  error: "",
};
