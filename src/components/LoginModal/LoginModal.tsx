import React from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "react-hook-form";
import { translations } from "../../utils/constants/translations";
import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from "../../utils/constants/commonValues";
import { LoginFormData, Props } from "./LoginModalTypes";
import { useAppSelector } from "../redux/hooks";
import { useAppDispatch } from "../redux/hooks";
import {
  setLoginFormValues,
  setRegisterFormValues,
} from "../redux/slices/appSlice";

export const LoginModal: React.FC<Props> = ({
  formInfo,
  formCallbacks,
  activeModal,
  onClose,
  isBusy,
}) => {
  const currentLanguage = useAppSelector((state) => state.app.lang);
  const loginFormValues = useAppSelector((state) => state.app.loginFormValues);
  const registerFormValues = useAppSelector(
    (state) => state.app.registerFormValues
  );
  const dispatch = useAppDispatch();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: loginFormValues,
  });

  const handleSubmitLogin = () => {
    dispatch(setLoginFormValues(formValues));
    formCallbacks.handleSubmit();
  };

  const handleRedir = () => {
    dispatch(setLoginFormValues(formValues));
    dispatch(
      setRegisterFormValues({
        ...registerFormValues,
        email: formValues.email,
        password: formValues.password,
      })
    );
    formCallbacks.handleRedir();
  };

  const formValues = watch();

  return (
    <ModalWithForm
      formInfo={formInfo}
      formCallbacks={{
        handleRedir,
        handleSubmit: handleSubmit(handleSubmitLogin),
      }}
      activeModal={activeModal}
      onClose={onClose}
      isBusy={isBusy}
      formValues={formValues}
    >
      <fieldset className="login__input-fieldset">
        <div className="login__input-field">
          <input
            className="login__input"
            type="text"
            id="user-email"
            placeholder={translations.common.email[currentLanguage]}
            {...register("email", {
              required:
                translations.common.errors.required_field[currentLanguage],
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message:
                  translations.common.errors.field_not_valid[currentLanguage],
              },
            })}
          />
          {errors.email && (
            <p className="login__error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="login__input-field">
          <input
            className="login__input"
            type="password"
            id="user-password"
            placeholder={translations.common.password[currentLanguage]}
            {...register("password", {
              minLength: {
                value: MIN_PASSWORD_LENGTH,
                message:
                  translations.common.errors.password_too_short[
                    currentLanguage
                  ],
              },
              maxLength: {
                value: MAX_PASSWORD_LENGTH,
                message:
                  translations.common.errors.password_too_long[currentLanguage],
              },
              required:
                translations.common.errors.required_field[currentLanguage],
            })}
          />
          {errors.password && (
            <p className="login__error-message">{errors.password.message}</p>
          )}
        </div>
      </fieldset>
    </ModalWithForm>
  );
};
