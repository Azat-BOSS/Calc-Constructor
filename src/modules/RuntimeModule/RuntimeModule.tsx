import { useMemo, FC, ReactNode } from "react";
import runStyle from "./runtime.module.css"
import { useDrop } from "react-dnd";
import { TypeComp } from "../../utils/data/numData";
import { RTimeComp } from "../../components";
import { SwitchButton } from "../../components";

import { getIds } from "../../services/slices/dragCompSlice";
import { useDispatch } from "react-redux";

import { IRunTimeConstruct } from "../../utils/types/interface";

export const RuntimeModule: FC<IRunTimeConstruct> = ({children}) => {
  const dispatch = useDispatch()
  
  const [{isOver}, drop] = useDrop({
    accept: [
      TypeComp.EqualButtons, 
      TypeComp.NumButtons, 
      TypeComp.ScreenCompon,
      TypeComp.SignsButtons
    ],
    drop: (item: any) => dispatch(getIds(item.id)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })
  
  const background: string = isOver ? "#F0F9FF" : ""

  const checkChildren = useMemo(() => {
    const boolChildren = (children as ReactNode[]).filter((i: any) => i.constructor.name === "Object")
    return boolChildren.length > 0
  }, [children])

  return (  
    <div className={runStyle.runMod}>
      <div className={runStyle.runMod__upper}>
        <SwitchButton/>
      </div>
      <div 
        className={!checkChildren ? runStyle.runMod__container : runStyle.runMod__container_active}
        style={{background}}
        ref={drop}>
      {!checkChildren ? <RTimeComp/> : children}
      </div>
    </div>  
  );
}


 
