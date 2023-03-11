import numStyle from "./num.module.css";
import { createSelector } from "@reduxjs/toolkit";
import { getFirstNumArr, getSecondNumArr, getResult } from "../../services/slices/calcCompSlice";
import { useAppDispatch, useAppSelector, RootState } from "../../services/store";
import { INumberBtn } from "../../utils/types/interface";
import { FC } from "react";

export const NumberBtn: FC<INumberBtn> = ({ sign, index }) => {
  const dispatch = useAppDispatch();

  const numberSelector = createSelector(
    (state: RootState) => state.switchSlice.isActive,
    (state: RootState) => state.calcCompSlice.changeState,
    (isActive, changeState) => ({ isActive, changeState})
  );

  const { isActive, changeState} = useAppSelector(numberSelector);

  const setFirstArrNum = (evt: React.MouseEvent<HTMLElement>):void => {
    dispatch(getFirstNumArr((evt.target as HTMLTextAreaElement).value));
    dispatch(getResult(false))
  };

  const setSecondArrNum = (evt: React.MouseEvent<HTMLElement>):void => {
    dispatch(getSecondNumArr((evt.target as HTMLTextAreaElement).value));
    dispatch(getResult(false))
  };
  return (
    <button
      onClick={(evt) => !isActive ? !changeState ? setFirstArrNum(evt) : setSecondArrNum(evt) : null}
      className={isActive ? numStyle.numBtn : numStyle.numBtn_active}
      value={sign}
    >
      {sign}
    </button>
  );
};
