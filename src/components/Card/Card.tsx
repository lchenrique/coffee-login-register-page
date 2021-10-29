import React, { ReactNode } from "react";
import style from "./style.module.scss";

interface ICardProps {
  children: ReactNode;
}

function Card({ children }: ICardProps) {
  return <div className={style.card}>{children}</div>;
}

export default Card;
