import { FC } from "react";
import { RunTCont } from "../../ui";
import rtimeStyle from "./rtime.module.css"

export const RTimeComp: FC = () => {
  return (  
    <div className={rtimeStyle.rtime}>
      <RunTCont/>
    </div>
  );
}
 
