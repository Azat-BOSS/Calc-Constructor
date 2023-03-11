import { FC } from "react";
import screenStyle from "./screen.module.css"
import { createSelector } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../../services/store";


export const Screen: FC = () => {
  const screenSelector = createSelector(
    (state: RootState) => state.calcCompSlice.changeState,
    (state: RootState) => state.calcCompSlice.final,
    (state: RootState) => state.calcCompSlice.firstNum,
    (state: RootState) => state.calcCompSlice.secondNum,
    (state: RootState) => state.calcCompSlice.getResultState,
    (changeState, final, firstNum, secondNum, getResultState) => ({changeState, final, firstNum, secondNum, getResultState})
  )
  const {changeState, final, firstNum, secondNum, getResultState} = useAppSelector(screenSelector)

  return (  
    <div className={screenStyle.screen}>
      {!getResultState ? !changeState ? firstNum : secondNum : final}
    </div>
  );
}
