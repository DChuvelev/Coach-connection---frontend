import React, { useContext } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "react-hook-form";
import { translations } from "../../utils/constants/translations";
import { CurrentLanguageContext } from "../../context/CurrentLanguageContext";
import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from "../../utils/constants/commonValues";

export default function LoginModal({ formInfo, activeModal, onClose, isBusy }) {
  const { currentLanguage } = useContext(CurrentLanguageContext);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: formInfo.formValues.email,
      password: formInfo.formValues.password,
    },
  });

  const formValues = watch();

  return (
    <ModalWithForm
      formInfo={{ ...formInfo, onSubmit: handleSubmit(formInfo.handleSubmit) }}
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
}
