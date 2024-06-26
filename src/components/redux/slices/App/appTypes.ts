import { translations } from "../../../../utils/constants/translations";
import { LangChoice } from "../../../../utils/models";
import { loginFormDefaultData } from "../../../LoginModal/LoginModalTypes";
import { registerFormDefaultData } from "../../../RegisterModal/RegisterModalTypes";
import {
  LoginFormData,
  UserToRegister,
  ThunkStatus,
  Role,
  statusType,
} from "../generalTypes";

export type Gender = "male" | "female" | "nonbinary" | "";

export interface User {
  _id: string;
  role: Role;
  name: string;
  avatar: string;
  email: string;
  gender: Gender;
  birthDate: string;
  languages: Array<string>;
  about: string;
}

export interface Client extends User {}

export interface Coach extends User {
  skills: Array<string>;
  paymentOptions: Array<string>;
  paymentScheme: string;
  sertification: string;
  sertificationLevel: Array<string>;
  status: string;
}
export interface Admin extends User {}

export type CurrentUser = Client | Coach | Admin;

export type AppErrorMessages =
  keyof typeof translations.appGlobal.errorMessages;

export type AppDoneMessages = keyof typeof translations.appGlobal.doneMessages;

export interface AppState {
  lang: LangChoice;
  loggedIn: boolean;
  currentUser: CurrentUser;
  loginFormValues: LoginFormData;
  registerFormValues: UserToRegister;
  authStatus: ThunkStatus;
  authMessage: string | undefined;
  appStatus: statusType;
  errorMessage: AppErrorMessages | undefined;
  doneMessage: AppDoneMessages | undefined;
}

export const defaultUser: CurrentUser = {
  _id: "",
  role: "",
  name: "",
  avatar: "",
  email: "",
  gender: "",
  birthDate: "1980-01-01",
  languages: ["English"],
  about: "",
  skills: [],
  paymentOptions: [],
  paymentScheme: "",
  sertification: "inTraining",
  sertificationLevel: [],
  status: "active",
};

export const initialState: AppState = {
  lang: LangChoice.En,
  loggedIn: false,
  currentUser: defaultUser,
  loginFormValues: loginFormDefaultData,
  registerFormValues: registerFormDefaultData,
  authStatus: "idle",
  authMessage: undefined,
  appStatus: "starting",
  errorMessage: undefined,
  doneMessage: undefined,
};
