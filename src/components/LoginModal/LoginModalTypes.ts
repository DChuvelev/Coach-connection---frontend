import { FormInfo, FormCallbacks } from "../ModalWithForm/ModalWithFormTypes";

export interface Props {
  formInfo: FormInfo;
  formCallbacks: FormCallbacks;
  activeModal: string;
  onClose: () => void;
  isBusy: boolean;
}

export interface LoginFormData extends Record<string, unknown> {
  email: string;
  password: string;
}

export const loginFormDefaultData: LoginFormData = {
  email: "",
  password: "",
};
