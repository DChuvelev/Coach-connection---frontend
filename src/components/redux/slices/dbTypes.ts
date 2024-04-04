export interface UserToRegister extends Record<string, unknown> {
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  userpic: FileList | undefined;
}

export interface Client {
  id: string;
  name: string;
}

export type thunkStatus = "idle" | "loading" | "succeeded" | "failed";
