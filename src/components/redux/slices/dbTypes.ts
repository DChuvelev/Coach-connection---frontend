export type Role = "client" | "coach" | "admin" | "";

export interface UserToRegister extends Record<string, unknown> {
  role: Role;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  userpic: FileList | undefined;
}

export interface LoginFormData extends Record<string, unknown> {
  role: Role;
  email: string;
  password: string;
}

export interface Client {
  id: string;
  name: string;
}

export interface ClientChild extends Client {}

export type ThunkStatus = "idle" | "loading" | "succeeded" | "failed";
