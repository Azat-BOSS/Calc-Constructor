import conmodStyle from "./conmod.module.css"
import { TypeComp } from "../../utils/data/numData";
import { useDrop } from "react-dnd";
import { IRunTimeConstruct } from "../../utils/types/interface";
import { FC } from "react";

export const ConstructorModule: FC<IRunTimeConstruct> = ({children}) => {
  const [, drop] = useDrop({
    accept: [
      TypeComp.EqualButtons, 
      TypeComp.NumButtons, 
      TypeComp.ScreenCompon,
      TypeComp.SignsButtons
    ]
  })
  return (  
    <div className={conmodStyle.conMod} ref={drop}>
      {children}
    </div>
  );
}
 
