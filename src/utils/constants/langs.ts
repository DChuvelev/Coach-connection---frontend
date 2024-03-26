import ruFlag from "../../images/flags/ru.svg";
import enFlag from "../../images/flags/gb.svg";
import { LangChoice } from "../models";
export const langs: {id: LangChoice, name:string, flag: any}[] = [
  {
    id: LangChoice.Ru,
    name: "Русский",
    flag: ruFlag,
  },
  {
    id: LangChoice.En,
    name: "English",
    flag: enFlag,
  },
];
