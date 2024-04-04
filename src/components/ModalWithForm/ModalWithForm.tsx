import React, { PropsWithChildren } from "react";
import "./ModalWithForm.css";
import { Modal } from "../Modal/Modal";
import { Props } from "./ModalWithFormTypes";
const ModalWithForm = <T,>({
  children,
  formInfo,
  formCallbacks,
  activeModal,
  onClose,
  isBusy,
}: PropsWithChildren<Props<T>>) => {
  const handleRedir = () => {
    formCallbacks.handleRedir();
  };

  return (
    <Modal activeModal={activeModal} onClose={onClose}>
      <form
        className="modal__form"
        onSubmit={formCallbacks.handleSubmit}
        name={formInfo.formType}
      >
        <h2 className="modal__form-title">{formInfo.name}</h2>
        {children}
        <div className="modal__buttons">
          <button type="submit" className="modal__submit-btn">
            {isBusy ? formInfo.btnTxtTypeBusy : formInfo.btnTxt}
          </button>
          {formInfo.redirBtnTxt && (
            <button
              className="modal__redir-btn"
              type="button"
              onClick={handleRedir}
            >
              {formInfo.redirBtnTxt}
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default ModalWithForm;
