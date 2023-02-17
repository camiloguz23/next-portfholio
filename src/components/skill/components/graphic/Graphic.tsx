import React from "react";
import style from "./Graphic.module.scss";

type Prop = {
  rol: string;
};

const Graphic = ({ rol }: Prop) => {
  const isRol = (): boolean => rol === "frontend";
  return (
    <div className={style.contentGraphic}>
      <div
        className={`${style.line1} ${isRol() ? style.frontend : style.backend}`}
      ></div>
      <div
        className={`${style.line2} ${isRol() ? style.frontend : style.backend}`}
      ></div>
      <div
        className={`${style.line3} ${isRol() ? style.frontend : style.backend}`}
      ></div>
      <div
        className={`${style.line4} ${isRol() ? style.frontend : style.backend}`}
      ></div>
    </div>
  );
};

export default Graphic;
