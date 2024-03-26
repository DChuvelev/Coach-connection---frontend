import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
  MAX_USERPIC_FILE_SIZE,
} from "./commonValues";

export const translations = {
  common: {
    errors: {
      required_field: {
        ru: "Это поле обязательно",
        en: "This is a required field",
      },
      field_not_valid: {
        ru: "Поле заполнено неверно",
        en: "Field is not valid",
      },
      password_too_short: {
        ru: `Пароль должен быть не короче ${MIN_PASSWORD_LENGTH} символов`,
        en: `Password should be at least ${MIN_PASSWORD_LENGTH} characters`,
      },
      password_too_long: {
        ru: `Пароль должен быть не длиннее ${MAX_PASSWORD_LENGTH} символов`,
        en: `Password should be maximum ${MAX_PASSWORD_LENGTH} characters long`,
      },
      userpic_file_too_big: {
        ru: `Размер файла не должен превышать ${Math.floor(
          MAX_USERPIC_FILE_SIZE / 1000
        )} килобайт`,
        en: `Maximum file size is ${Math.floor(
          MAX_USERPIC_FILE_SIZE / 1000
        )}kB`,
      },
    },
    or: {
      en: "or",
      ru: "или",
    },
    name: {
      ru: "Имя",
      en: "Name",
    },
    password: {
      ru: "Пароль",
      en: "Password",
    },
    confirm_password: {
      ru: "Подтвердите пароль",
      en: "Confirm password",
    },
    email: {
      ru: "Адрес электронной почты",
      en: "User email",
    },
    saving: {
      ru: "Сохранение...",
      en: "Saving...",
    },
    download_avatar: {
      ru: "Загрузить аватар",
      en: "Download avatar",
    },
    file_not_loaded: {
      ru: "Файл ещё не загружен",
      en: "File not loaded",
    },
    file_loaded: {
      ru: "Загружен файл: ",
      en: "File loaded: ",
    },
  },
  header: {
    find_a_coach: {
      ru: "Найти коуча",
      en: "Find a coach",
    },
    login: {
      ru: "Войти",
      en: "Sign in",
    },
    register: {
      ru: "Зарегистрироваться",
      en: "Sign up",
    },
  },
  footer: {
    developed: {
      ru: "Разработано Дмитрием Чувелёвым",
      en: "Developed by Dmitry Chuvelev",
    },
  },
  login: {
    logging: {
      ru: "Вход...",
      en: "Logging in...",
    },
  },
  register: {
    role: {
      coach: {
        ru: "Я коуч",
        en: "I'm a coach",
      },
      client: {
        ru: "Ищу коуча",
        en: "Looking for a coach",
      },
      error: {
        ru: "Пожалуйста, выберите свою роль",
        en: "Please, choose your role",
      },
    },
  },
};
