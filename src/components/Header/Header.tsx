import React, { useContext } from "react";
import logoPath from "../../images/header-logo.svg";
import langIcon from "../../images/langicon.svg";
import CleverAvatar from "../CleverAvatar/CleverAvatar";
import "./Header.css";
import { Link } from "react-router-dom";
import { translations } from "../../utils/constants/translations";
import { useAppSelector } from "../redux/hooks";
import { store } from "../redux/store";

interface Props {
  handleFindCoach: () => void;
  handleRegister: () => void;
  handleLogin: () => void;
  handleOpenLangMenu: () => void;
}

const Header: React.FC<Props> = ({
  handleFindCoach,
  handleRegister,
  handleLogin,
  handleOpenLangMenu,
}) => {
  const currentLanguage = useAppSelector((store) => store.app.lang);
  const loggedIn = useAppSelector((store) => store.app.loggedIn);
  const currentUser = useAppSelector((store) => store.app.currentUser);
  return (
    <header className="header">
      <ul className="header__menu">
        <li>
          <Link to="/">
            <img src={logoPath} className="header__logo" alt="WTWR logo" />
          </Link>
        </li>

        {!loggedIn && (
          <>
            <li className="header__btn-container">
              <button
                className="header__menu-item-btn"
                onClick={handleFindCoach}
              >
                {translations.header.find_a_coach[currentLanguage]}
              </button>
            </li>
            <li className="header__btn-container">
              <button className="header__menu-item-btn" onClick={handleLogin}>
                {translations.header.login[currentLanguage]}
              </button>
            </li>
            <li className="header__btn-container">
              <button
                className="header__menu-item-btn"
                onClick={handleRegister}
              >
                {translations.header.register[currentLanguage]}
              </button>
            </li>
          </>
        )}

        {loggedIn && (
          <>
            <li className="header__user-name">
              <Link className="header__link" to="/profile">
                {currentUser.name}
              </Link>
            </li>

            <li>
              <Link to="/profile">
                <CleverAvatar
                  avatar={currentUser.avatar}
                  name={currentUser.name}
                ></CleverAvatar>
              </Link>
            </li>
          </>
        )}
        <li className="header__btn-container">
          <button
            className="header__menu-item-lang"
            onClick={handleOpenLangMenu}
          >
            <img className="header__menu-item-lang-icon" src={langIcon} />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
