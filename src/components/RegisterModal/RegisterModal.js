import React, { createRef, useContext } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "react-hook-form";
import { translations } from "../../utils/constants/translations";
import { CurrentLanguageContext } from "../../context/CurrentLanguageContext";
import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
  MAX_USERPIC_FILE_SIZE,
} from "../../utils/constants/commonValues";
import downloadIcon from "../../images/download.svg";

export default function RegisterModal({
  formInfo,
  activeModal,
  onClose,
  isBusy,
}) {
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
      confirmPassword: "",
      name: "",
      userpic: "",
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
      <fieldset className="register__input-fieldset">
        <div className="register__input-field">
          <div className="register__toggle-switch">
            <label className="register__switch-btn-container">
              <input
                type="radio"
                value="coach"
                {...register("role", {
                  required: translations.register.role.error[currentLanguage],
                })}
              />
              <span className="register__switch-btn">
                {translations.register.role.coach[currentLanguage]}
              </span>
            </label>
            <label className="register__switch-btn-container">
              <input
                type="radio"
                // name="role"
                value="client"
                {...register("role", {
                  required: translations.register.role.error[currentLanguage],
                })}
              />
              <span className="register__switch-btn">
                {translations.register.role.client[currentLanguage]}
              </span>
            </label>
          </div>
          {errors.role && (
            <p className="register__error-message">{errors.role.message}</p>
          )}
        </div>
        <div className="register__input-field">
          <input
            type="text"
            className="register__input"
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
            <p className="register__error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="register__input-field">
          {/* <label className='register__field-label' htmlFor='user-password'>Password</label> */}
          <input
            type="password"
            className="register__input"
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
            <p className="register__error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="register__input-field">
          {/* <label className='register__field-label' htmlFor='confirm-password'>Confirm password</label> */}
          <input
            type="password"
            className="register__input"
            id="confirm-password"
            placeholder={translations.common.confirm_password[currentLanguage]}
            {...register("confirmPassword", {
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
              validate: {
                passwordsMatch: (val, formVals) =>
                  val === formVals.password || "Passwords should match",
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="register__error-message">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="register__input-field">
          {/* <label className='register__field-label' htmlFor='user-name'>Name</label> */}
          <input
            type="text"
            className="register__input"
            id="user-name"
            placeholder={translations.common.name[currentLanguage]}
            {...register("name", {
              minLength: {
                value: "1",
                message: "User name should be at least 1 character",
              },
              maxLength: {
                value: "30",
                message: "User name should be maximum 30 characters long",
              },
              required:
                translations.common.errors.required_field[currentLanguage],
            })}
          />
          {errors.name && (
            <p className="register__error-message">{errors.name.message}</p>
          )}
        </div>
        <div className="register__input-field">
          <div className="register__input-field_type_file">
            <label className="register__file-label" htmlFor="user-pic">
              <img src={downloadIcon} className="register__file-icon" />
              <p className="register__file-label-txt">
                {translations.common.download_avatar[currentLanguage]}
              </p>
              <input
                type="file"
                className="register__input_type_file"
                id="user-pic"
                placeholder=""
                {...register("userpic", {
                  validate: {
                    fileSize: (val) => {
                      if (val.item && val.item(0)) {
                        return (
                          val.item(0).size < MAX_USERPIC_FILE_SIZE ||
                          translations.common.errors.userpic_file_too_big[
                            currentLanguage
                          ]
                        );
                      } else {
                        return true;
                      }
                    },
                  },
                })}
              />
            </label>
            <p className="register__filename">
              {formValues.userpic.item && formValues.userpic.item(0)
                ? formValues.userpic.item(0).name
                : translations.common.file_not_loaded[currentLanguage]}
            </p>
          </div>
          {errors.userpic && (
            <p className="register__error-message">{errors.userpic.message}</p>
          )}
        </div>
      </fieldset>
    </ModalWithForm>
  );
}
