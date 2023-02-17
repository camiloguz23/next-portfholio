import Link from "next/link";
import React from "react";
import style from "./links.module.scss";

type Prop = {
  name: string;
  path: string;
};

function Links({ name, path }: Prop) {
  return (
    <Link className={style.link} href={path}>
      {name}
    </Link>
  );
}

export default Links;
