export interface FormInfo {
  formType: string;
  name: string;
  btnTxt: string;
  redirBtnTxt: string;
  btnTxtTypeBusy: string;
}

export interface FormCallbacks {
  handleSubmit: () => void;
  handleRedir: () => void;
}

export const defaultFormInfo: FormInfo = {
  formType: "",
  name: "",
  btnTxt: "",
  redirBtnTxt: "",
  btnTxtTypeBusy: "",
};

export interface Props<T> {
  formInfo: FormInfo;
  formCallbacks: FormCallbacks;
  formValues: T;
  activeModal: string;
  onClose: () => void;
  isBusy: boolean;
}
