import ebtnsStyle from "./ebtns.module.css";

import { useDrag } from "react-dnd";
import { EqualBtn } from "../../ui";
import { TypeComp, setStyleOpacity } from "../../utils/data/numData";
import { createSelector } from "@reduxjs/toolkit";
import { deleteComp } from "../../services/slices/dragCompSlice";
import { useMemo, FC } from "react";
import { useAppDispatch, useAppSelector, RootState } from "../../services/store";
import { IIdComp } from "../../utils/types/interface";

export const EqualBtns: FC<IIdComp> = ({id}) => {
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
    type: TypeComp.EqualButtons,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: {id},
  });

  const opacity = setStyleOpacity(isDragging)
  return (
    <div className={checkId ? ebtnsStyle.ebtns : ebtnsStyle.ebtns_disabled} 
    ref={isActive ? drag : null} style={{opacity}} 
    onDoubleClick={() => isActive ? dispatch(deleteComp(id)) : null}>
      <EqualBtn />
    </div>
  );
};
