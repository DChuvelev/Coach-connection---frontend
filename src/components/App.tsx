import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { LangMenu } from "./LangMenu/LangMenu";
import { RegisterModal } from "./RegisterModal/RegisterModal";
import { LoginModal } from "./LoginModal/LoginModal";
// import { gptApi } from "../utils/api/GptApi";
import { translations } from "../utils/constants/translations";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  setLoginFormValues,
  setRegisterFormValues,
} from "./redux/slices/appSlice";
import { registerUser } from "./redux/slices/appSlice";
import { FormInfo, defaultFormInfo } from "./ModalWithForm/ModalWithFormTypes";
import { loginFormDefaultData } from "./LoginModal/LoginModalTypes";
import { registerFormDefaultData } from "./RegisterModal/RegisterModalTypes";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [formInfo, setFormInfo] = useState<FormInfo>(defaultFormInfo);
  const currentLanguage = useAppSelector((state) => state.app.lang);
  const dispatch = useAppDispatch();
  const [isBusy, setIsBusy] = useState(false);

  //---------------------- Common functions -----------------------------

  // const handleSubmit = (request) => {
  //   setIsBusy(true);
  //   return request().then(handleModalClose).catch(alert).finally(() => {
  //     setIsBusy(false);
  //   })
  // }

  //--------------------- Modals ----------------------------------
  const resetFormsData = () => {
    dispatch(setLoginFormValues(loginFormDefaultData));
    dispatch(setRegisterFormValues(registerFormDefaultData));
  };
  const handleOpenLangMenu = () => {
    setActiveModal("lang-menu");
  };

  const handleModalClose = () => {
    resetFormsData();
    setActiveModal("");
  };

  const handleFindCoach = () => {
    //   console.log('Ask GPT');
    //   gptApi.askGpt([{
    //     "role": "user",
    //     "text": "Расскажи каой-нибудь анекдот"
    //   }])
    //   .then((res) => {
    //     console.log(res);
    //   }).catch((err) => {
    //     console.error(err);
    //   })
  };

  //-------------------------- User login -------------------------------

  // const handleLogin = (userInfo) => {
  //   const {token, ...otherUserInfo} = userInfo;
  //   setCurrentUser(otherUserInfo);
  //   localStorage.setItem('jwt', token);
  //   setLoggedIn(true);
  // }

  const handleOpenLoginModal = () => {
    setActiveModal("form");
    setFormInfo({
      formType: "login",
      name: translations.header.login[currentLanguage],
      btnTxt: translations.header.login[currentLanguage],
      redirBtnTxt: `${
        translations.common.or[currentLanguage]
      } ${translations.header.register[currentLanguage].toLowerCase()}`,
      btnTxtTypeBusy: translations.login.logging[currentLanguage],
    });
  };

  const handleSubmitLogin = () => {
    // handleSubmit(() => {
    //   return dbApi.authorizeUser({ email, password }).then((res) => {
    //     handleLogin(res);
    //   })
    // })
  };

  const handleRedirectFromLoginToRegister = () => {
    // const newRegisterFormValues: UserToRegister = {
    //   ...registerFormDefaultData,
    // };
    // Object.assign(newRegisterFormValues, registerFormValues);
    // Object.assign(newRegisterFormValues, loginFormValues);
    // dispatch(setRegisterFormValues(newRegisterFormValues));
    handleOpenRegisterModal();
  };

  //------------------------- User logout --------------------------

  // const logout = () => {
  //   localStorage.removeItem('jwt');
  //   setLoggedIn(false);
  //   setCurrentUser({
  //     name: '',
  //     email: '',
  //     avatar: '',
  //     _id: ''
  //   });
  //   history.push('/');
  //   handleModalClose();
  // }

  // const handleLogout = () => {
  //   setActiveModal('confirm-logout');
  // }

  //---------------------------- User registration ------------------------------

  const handleOpenRegisterModal = () => {
    setActiveModal("form");
    setFormInfo({
      formType: "register",
      name: translations.header.register[currentLanguage],
      btnTxt: translations.header.register[currentLanguage],
      redirBtnTxt: `${
        translations.common.or[currentLanguage]
      } ${translations.header.login[currentLanguage].toLowerCase()}`,
      btnTxtTypeBusy: translations.common.saving[currentLanguage],
    });
  };

  const handleSubmitRegister = () => {
    dispatch(registerUser());
    // var userpicFile = new FormData;
    // if (userpic.item && userpic.item(0)) {
    //   console.log(userpic.item(0));
    //   userpicFile.append("avatar", userpic.item(0));
    //   console.log(userpicFile);
    // } else {
    //   console.log('No file');
    // }
    // console.log('Check Success');
    // handleSubmit(() => {
    //   return dbApi.registerUser({ email, name, password, role, userpicFile }).then(() => {
    //     return dbApi.authorizeUser({ email, password }).then((res) => {
    //       handleLogin(res);
    //     })
    //   })
    // })
  };

  const handleRedirectFromRegisterToLogin = () => {
    // const newLoginFormValues: LoginFormData = { ...loginFormDefaultData };
    // Object.assign(newLoginFormValues, loginFormValues);
    // Object.assign(newLoginFormValues, registerFormValues);
    // dispatch(setLoginFormValues(newLoginFormValues));
    handleOpenLoginModal();
  };

  return (
    <>
      <div className="App">
        <Header
          handleOpenLangMenu={handleOpenLangMenu}
          handleFindCoach={handleFindCoach}
          handleRegister={handleOpenRegisterModal}
          handleLogin={handleOpenLoginModal}
        />
        <Main />
        <Footer />
        {activeModal === "lang-menu" && (
          <LangMenu
            activeModal={activeModal}
            onClose={handleModalClose}
            handleClose={handleModalClose}
          />
        )}
        {activeModal === "form" && formInfo!.formType === "register" && (
          <RegisterModal
            formInfo={formInfo}
            formCallbacks={{
              handleSubmit: handleSubmitRegister,
              handleRedir: handleRedirectFromRegisterToLogin,
            }}
            activeModal={activeModal}
            onClose={handleModalClose}
            isBusy={isBusy}
          />
        )}
        {activeModal === "form" && formInfo.formType === "login" && (
          <LoginModal
            formInfo={formInfo}
            formCallbacks={{
              handleSubmit: handleSubmitLogin,
              handleRedir: handleRedirectFromLoginToRegister,
            }}
            activeModal={activeModal}
            onClose={handleModalClose}
            isBusy={isBusy}
          />
        )}
      </div>
    </>
  );
}

export default App;
