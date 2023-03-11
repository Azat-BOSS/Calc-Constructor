import sbtnsStyle from "./sbtns.module.css"
import { SignsBtn } from "../../ui";
import { signsArr, TypeComp, setStyleOpacity } from "../../utils/data/numData";
import { useDrag } from "react-dnd";
import { deleteComp } from "../../services/slices/dragCompSlice";
import { createSelector } from "@reduxjs/toolkit";
import { useMemo, FC } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../services/store";
import { IIdComp } from "../../utils/types/interface";

export const SignsBtns: FC<IIdComp> = ({ id }) => {
  const dispatch = useAppDispatch()

  const isActiveSelector = createSelector(
    (state: RootState) => state.switchSlice.isActive,
    (state: RootState) => state.dragCompSlice.componentsArr,
    (isActive, componentsArr) => ({isActive, componentsArr})
  )
  const {isActive, componentsArr} = useAppSelector(isActiveSelector)

  const checkId = useMemo(() => {
    return componentsArr.some((item: any) => item.id === id)
  }, [componentsArr, id])  

  const [{ isDragging }, drag] = useDrag({
    type: TypeComp.SignsButtons,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: {id},
  });

  const opacity = setStyleOpacity(isDragging)
  return (  
    <div className={checkId ? sbtnsStyle.sBtns : sbtnsStyle.sBtns_disabled} 
         ref={isActive ? drag : null} style={{opacity}} 
         onDoubleClick={() => isActive ? dispatch(deleteComp(id)) : null}>
      {signsArr?.map((item, index) => (
        <SignsBtn sign={item} key={index}/>
      ))}
    </div>
  );
}
 