import constrStyle from "./constr.module.css"
import { changeActive } from "../../services/slices/switchSlice";
import { createSelector } from "@reduxjs/toolkit";
import { FC } from "react";
import { useAppDispatch, useAppSelector, RootState } from "../../services/store";

export const ConstrBtn: FC = () => {
  const dispatch = useAppDispatch()
  const switchSelector = createSelector(
    (state: RootState) => state.switchSlice.isActive,
    (isActive) => ({isActive})
  )
  const {isActive} = useAppSelector(switchSelector)

  return (  
    <button className={isActive ? constrStyle.constrBtn_active : constrStyle.constrBtn} 
      onClick={() => dispatch(changeActive(true))}>
      Constructor
    </button>
  );
}
 
