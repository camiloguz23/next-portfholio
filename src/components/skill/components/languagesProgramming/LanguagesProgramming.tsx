import React, { useState } from "react";
import style from "./languagesProgramming.module.scss";
import Image from "next/image";

type Prop = {
  onRol: (rol: string) => void;
};

type listLanguages = {
  name: string;
  icon: string;
};

interface language {
  [key: string]: listLanguages[];
}

const LanguagesProgramming = ({ onRol }: Prop) => {
  const [selected, isSelected] = useState("frontend");

  const isSelectedBtn = (type: string, selected: string) => {
    return selected === type;
  };

  const setListLanguages = (rol: string) => {
    const listLanguages: language = {
      frontend: [
        { name: "HTML", icon: "/img/html.svg" },
        { name: "Sass", icon: "/img/sass.svg" },
        { name: "React", icon: "/img/react.svg" },
        { name: "Angular", icon: "/img/angular.svg" },
        { name: "Next JS", icon: "/img/next.svg" },
        { name: "Git", icon: "/img/git.svg" },
      ],
      backend: [
        { name: "Node JS", icon:"/img/node.svg" },
        { name: "MySQL", icon: "/img/mysql.svg" },
        { name: "MongoDB", icon: "/img/mongoDB.svg" },
        { name: "Git", icon: "/img/git.svg" },
      ],
    };

    return listLanguages[rol] || [];
  };

  return (
    <div className={style.languages}>
      <div className={style.TypeRol}>
        <button
          className={`${style.btn} ${style.Frontend} ${
            isSelectedBtn("frontend", selected) && style.selected
          }`}
          onClick={() => {
            isSelected("frontend");
            onRol("frontend");
          }}
        >
          Frontend
        </button>
        <button
          className={`${style.btn} ${style.Backend} ${
            isSelectedBtn("backend", selected) && style.selected
          }`}
          onClick={() => {
            isSelected("backend");
            onRol("backend");
          }}
        >
          Backend
        </button>
      </div>
      <div className={style.listLanguages}>
        {setListLanguages(selected).map((item, index) => (
          <div className={style.contentLanguage} key={index}>
            <Image
              className={style.icon}
              src={item.icon}
              alt={`icon from ${item.name}`}
              priority={true}
              width={30}
              height={30}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesProgramming;
