import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MAX_USERPIC_FILE_SIZE,
} from "./commonValues";

export type Translations = { en: string; ru: string };

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
      username_too_short: {
        ru: `Имя пользователя должно быть не короче ${MIN_PASSWORD_LENGTH} символов`,
        en: `Username should be at least ${MIN_PASSWORD_LENGTH} characters`,
      },
      username_too_long: {
        ru: `Имя пользователя должно быть не длиннее ${MAX_PASSWORD_LENGTH} символов`,
        en: `Username should be maximum ${MAX_PASSWORD_LENGTH} characters long`,
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
    as: {
      en: "as",
      ru: "как",
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
    resetSearch: {
      ru: "Сбросить поиск",
      en: "Reset search",
    },
  },
  header: {
    find_a_coach: {
      ru: "Подобрать коуча",
      en: "Choose a coach",
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
    role: {
      coach: {
        ru: "Коуч",
        en: "Coach",
      },
      client: {
        ru: "Клиент",
        en: "Client",
      },
      error: {
        ru: "Пожалуйста, выберите свою роль",
        en: "Please, choose your role",
      },
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
  profile: {
    generalInfo: {
      ru: "Общая информация",
      en: "General information",
    },
    gender: {
      ru: "Пол",
      en: "Gender",
    },
    genderTypes: {
      male: {
        ru: "Мужской",
        en: "Male",
      },
      female: {
        ru: "Женский",
        en: "Female",
      },
      nonbinary: {
        ru: "Небинарный",
        en: "Non-binary",
      },
      "": {
        ru: "",
        en: "",
      },
    },
    language: {
      ru: "Языки:",
      en: "Spoken languages",
    },
    languagesList: {
      ru: {
        ru: "Русский",
        en: "Russian",
      },
      en: {
        ru: "Английский",
        en: "English",
      },
      germ: {
        ru: "Немецкий",
        en: "German",
      },
      fr: {
        ru: "Французский",
        en: "French",
      },
      heb: {
        ru: "Иврит",
        en: "Hebrew",
      },
    },
    birthDate: {
      ru: "Дата рождения",
      en: "Your birth date",
    },
    age: {
      ru: "Возраст",
      en: "Age",
    },
    nameAndBirthday: {
      ru: "Имя и дата рождения:",
      en: "Your name and your birth date:",
    },
    about: {
      ru: "Пару слов о себе",
      en: "Tell about yourself",
    },
    aboutShort: {
      ru: "О себе",
      en: "About",
    },
    errors: {
      checkAtLeastOne: {
        ru: "Нужно выбрать хотя бы один вариант",
        en: "You should pick at least one option",
      },
    },
  },
  coach: {
    professionalInfo: {
      ru: "Профессиональные данные",
      en: "Professional information",
    },
    chooseSkills: {
      ru: "Сферы деятельности",
      en: "Fields of activity",
    },
    chooseSertification: {
      ru: "Сертификация",
      en: "Sertification",
    },
    choosePayment: {
      ru: "Способы вознаграждения",
      en: "Acceptable rewards",
    },
    describePaymentScheme: {
      ru: "Схема оплаты",
      en: "Payment scheeme",
    },
    skills: {
      goalSetting: {
        ru: "Постановка целей ",
        en: "Goal Setting",
      },
      personalEffectiveness: {
        ru: "Личная эффективность",
        en: "Personal Effectiveness",
      },
      motivation: {
        ru: "Мотивация",
        en: "Motivation",
      },
      timeManagement: {
        ru: "Управление временем",
        en: "Time Management",
      },
      selfConfidence: {
        ru: "Уверенность в себе ",
        en: "Self-Confidence",
      },
      productiveCommunication: {
        ru: "Продуктивное общение",
        en: "Productive Communication",
      },
      stressManagement: {
        ru: "Управление стрессом",
        en: "Stress Management",
      },
      decisionMaking: {
        ru: "Принятие решений",
        en: "Decision Making",
      },
      relationships: {
        ru: "Отношения",
        en: "Relationships",
      },
      personalDevelopment: {
        ru: "Личное развитие",
        en: "Personal Development",
      },
    },
    sert: {
      inTraining: {
        ru: "Начинающий коуч в обучении",
        en: "A beginner coach currently in training",
      },
      lev1: {
        ru: "Сертифицированный коуч Level 1 ICF",
        en: "Certified Coach Level 1 ICF",
      },
      lev2: {
        ru: "Сертифицированный коуч Level 2 ICF",
        en: "Certified Coach Level 2 ICF",
      },
      levFollowing: {
        ru: "Сертифицированный коуч уровня:",
        en: "Certified Coach at the following levels:",
      },
    },
    sertLevelList: {
      ACC: {
        ru: "Коуч ACC ICF",
        en: "ACC (Associate Certified Coach) ICF",
      },
      PCC: {
        ru: "Коуч PCC ICF",
        en: "PCC (Professional Certified Coach) ICF",
      },
      MCC: {
        ru: "Коуч МСС ICF",
        en: "MCC (Master Certified Coach) ICF",
      },
      PractRFPC: {
        ru: "Коуч практик ФПКиН",
        en: "Practitioner Coach RFPC",
      },
      ExpertRFPC: {
        ru: "Коуч эксперт ФПКиН",
        en: "Expert Coach RFPC",
      },
      MasterRFPC: {
        ru: "Коуч мастер ФПКиН",
        en: "Master Coach RFPC",
      },
    },
    paymentOptions: {
      free: {
        ru: "Бесценный опыт",
        en: "Experience",
      },
      feedback: {
        ru: "Отзыв",
        en: "Feedback",
      },
      donation: {
        ru: "Донат",
        en: "Donation",
      },
      money: {
        ru: "Деньги",
        en: "Money",
      },
    },
    status: {
      ru: "Статус:",
      en: "Status:",
    },
    statusChoise: {
      active: {
        ru: "Работаю",
        en: "Open to connection",
      },
      busy: {
        ru: "Сейчас занят",
        en: "Occupied",
      },
    },
  },
  appGlobal: {
    errorMessages: {
      serverNotResponding: {
        ru: "Сервер не отвечает. Попробуйте позже",
        en: "Server is not responding. Try later",
      },
      failedToUpdUserInfo: {
        ru: "Не удалось обновить пользовательскую информацию",
        en: "Failed to update user info",
      },
      failedToLoadPic: {
        ru: "Не удалась попытка загрузить изображение",
        en: "Failed to load picture to the server",
      },
      failedToLogin: {
        ru: "Ошибка входа",
        en: "Failed to login",
      },
      failedToRegister: {
        ru: "Ошибка регистрации",
        en: "Failed to register",
      },
    },
    doneMessages: {
      done: {
        ru: "Готово!",
        en: "Done!",
      },
      saved: {
        ru: "Сохранено",
        en: "Saved",
      },
      savedUserInfo: {
        ru: "Пользовательские данные сохранены",
        en: "User info saved",
      },
      ok: {
        ru: "ОК",
        en: "OK",
      },
      loginSuccess: {
        ru: "Удачный вход",
        en: "Login Successful",
      },
      registerAndLoginSuccess: {
        ru: "Удачная регистрация и вход",
        en: "Registration and login successful",
      },
      userPicUpdateSuccess: {
        ru: "Аватар обновлён",
        en: "Avatar updated",
      },
      loggedOut: {
        ru: "Выполнен выход",
        en: "Logged out successfully",
      },
    },
  },
  client: {
    main: {
      searchForCoachHeading: {
        ru: "Найди своего коуча:",
        en: "Search for your coach:",
      },
      ourCoaches: {
        ru: "Наши коучи:",
        en: "Our coaches:",
      },
    },
  },
};
