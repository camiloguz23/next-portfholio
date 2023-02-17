import React from "react";
import style from "./cube.module.scss";

type Style = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

interface Prop {
  setStyle: Style;
}

export default function Cube({ setStyle }: Prop) {
  return (
    <div className={style.wrap} style={setStyle}>
      <div className={style.cube}>
        <div className={style.up}></div>
        <div className={style.down}></div>
        <div className={style.lado1}></div>
        <div className={style.lado2}></div>
        <div className={style.lado3}></div>
        <div className={style.lado4}></div>
      </div>
    </div>
  );
}
