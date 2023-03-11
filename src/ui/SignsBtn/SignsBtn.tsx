import signStyle from "./sign.module.css"
import { createSelector } from "@reduxjs/toolkit"
import { changeState } from "../../services/slices/calcCompSlice"
import { getSign } from "../../services/slices/calcCompSlice"
import { FC } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../services/store"


export const SignsBtn: FC<any> = ({sign}) => {
  const dispatch = useAppDispatch()

  const signsSelector = createSelector(
    (state: RootState )=> state.switchSlice.isActive,
    (isActive) => ({isActive})
  )
  const {isActive} = useAppSelector(signsSelector)

  const getAndChange = (evt: any):void => {
    dispatch(changeState(true))
    dispatch(getSign(evt.target.value))
  }

  return (  
    <button 
      className={isActive ? signStyle.signBtn : signStyle.signBtn_active}
      onClick={(evt) => !isActive ? getAndChange(evt) : null}
      value={sign}>
      {sign}
    </button>
  );
}
