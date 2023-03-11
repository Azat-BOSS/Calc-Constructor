import contStyle from "./cont.module.css"
import dragIcon from "../../assets/icons/dragIcon.svg"
import { FC } from "react";


export const RunTCont: FC = () => {
  return (  
    <div className={contStyle.cont}>
      <img src={dragIcon} alt="icon" className={contStyle.cont__icon}/>
      <span className={contStyle.cont__text__block}>
        <h5 className={contStyle.cont__uppertitle}>Перетащите сюда</h5>
        <p className={contStyle.cont__text}>любой элемент из левой панели</p>
      </span>
    </div>
  );
}