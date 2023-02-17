import React from "react";
import style from "./modal.module.scss";
import { Company } from "../../model/timeLine.model";

type Prop = {
  company: Company;
  onClick: () => void;
};

function Modal({ company, onClick }: Prop) {
  return (
    <div className={style.modal} onClick={onClick}>
      <span className={style.rol}>
        <b className={style.nameCompany}>{company.name}</b>
      </span>
      <span className={style.rol}>
        <b>Rol:</b> {company.rol}
      </span>
      <span className={style.rol}>
        <b>Experiencia</b>
      </span>
      <p className={style.description}>{company.description}</p>
    </div>
  );
}

export default Modal;
