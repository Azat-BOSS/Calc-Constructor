import numBtnStyle from "./numbtn.module.css"
import { NumberBtn } from "../../ui/NumberBtn/NumberBtn";
import { numArr } from "../../utils/data/numData";
import { useDrag } from "react-dnd";
import { TypeComp, setStyleOpacity } from "../../utils/data/numData";
import { createSelector } from "@reduxjs/toolkit";
import { deleteComp } from "../../services/slices/dragCompSlice";
import { useMemo, FC } from "react";
import { IIdComp } from "../../utils/types/interface";
import { RootState, useAppDispatch, useAppSelector } from "../../services/store";

export const NumBtns: FC<IIdComp> = ({id}) => {
  const dispatch = useAppDispatch()
  
  const isActiveSelector = createSelector(
    (state: RootState) => state.switchSlice.isActive,
    (state: RootState) => state.dragCompSlice.componentsArr,
    (isActive, componentsArr) => ({isActive, componentsArr})
  )
  const {isActive, componentsArr} = useAppSelector(isActiveSelector)

  const checkId = useMemo(() => {
    return componentsArr.some((item: any)=> item.id === id)
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
    <div 
      className={checkId ? numBtnStyle.numBtns : numBtnStyle.numBtns_disabled} 
      ref={isActive ? drag : null} style={{opacity}}
      onDoubleClick={() => isActive ? dispatch(deleteComp(id)) : null}>
      {numArr?.map((item, index) => (
        <NumberBtn sign={item} key={index} index={index}/>
      ))}
    </div>
  );
}
 
