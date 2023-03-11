import { FC } from "react";
import equalStyle from "./equal.module.css"
import {resetSecondNum, resetFirstNum, changeState, getResult, finalResult } from "../../services/slices/calcCompSlice";
import { RootState, useAppDispatch, useAppSelector } from "../../services/store";
import { createSelector } from "@reduxjs/toolkit";

export const EqualBtn: FC = () => {
  const dispatch = useAppDispatch()

  const equalSelector = createSelector(
    (state: RootState) => state.switchSlice.isActive,
    (isActive) => ({isActive})
  )

  const {isActive} = useAppSelector(equalSelector)
    
  const getReset = ():void => {
    dispatch(finalResult())
    dispatch(resetFirstNum())
    dispatch(resetSecondNum())
    dispatch(changeState(false))
    dispatch(getResult(true))
  }
  return (  
    <button className={isActive ? equalStyle.equalBtn : equalStyle.equalBtn_active} onClick={() => getReset()}>
      =
    </button>
  );
}
 
