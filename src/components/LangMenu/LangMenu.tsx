import React from "react";
import "./LangMenu.css";
import { langs } from "../../utils/constants/langs";

import Modal from "../Modal/Modal";
import { LangChoice } from "../../utils/models";
interface Props {
  handleChangeLang: (lang: LangChoice) => void;
  activeModal: string;
  onClose: () => void;
}
export const LangMenu: React.FC<Props> = ({
  handleChangeLang,
  activeModal,
  onClose,
}) => {
  return (
    <Modal activeModal={activeModal} onClose={onClose}>
      <div>
        {langs.map((lang, idx) => {
          return (
            <button
              key={idx}
              className="lang-menu__item"
              onClick={() => {
                handleChangeLang(lang.id);
              }}
            >
              <img src={lang.flag} className="lang-menu__flag" />
              <p className="lang-menu__lang-name">{lang.name}</p>
            </button>
          );
        })}
      </div>
    </Modal>
  );
};
