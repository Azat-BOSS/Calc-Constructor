import { useMemo, FC } from "react";
import { Screen } from "../../ui";
import scompStyle from "./scomp.module.css"
import { TypeComp, setStyleOpacity} from "../../utils/data/numData";
import { useDrag } from "react-dnd";
import { createSelector } from "@reduxjs/toolkit";
import { deleteComp } from "../../services/slices/dragCompSlice";
import { IIdComp } from "../../utils/types/interface";
import { RootState, useAppDispatch, useAppSelector } from "../../services/store";

export const ScreenComp: FC<IIdComp> = ({id}) => {
  const dispatch = useAppDispatch()

  const isActiveSelector = createSelector(
    (state: RootState)=> state.switchSlice.isActive,
    (state: RootState)=> state.dragCompSlice.componentsArr,
    (isActive, componentsArr) => ({isActive, componentsArr})
  )
  const {isActive, componentsArr} = useAppSelector(isActiveSelector)

  const checkId = useMemo(() => {
    return componentsArr.some((item: any) => item.id === id)
  }, [componentsArr, id])  

  const [{ isDragging }, drag] = useDrag({
    type: TypeComp.ScreenCompon,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: {id},
  });

  const opacity = setStyleOpacity(isDragging)

  return (  
    <div className={checkId ? scompStyle.screenComp : scompStyle.screenComp_disabled} 
      ref={isActive ? drag : null} 
      style={{opacity}}
      onDoubleClick={() => isActive ? dispatch(deleteComp(id)) : null}>
      <Screen/>
    </div>
  );
}
 
