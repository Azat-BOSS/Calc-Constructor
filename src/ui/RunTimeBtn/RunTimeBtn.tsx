import rTime from "./time.module.css"
import { createSelector } from "@reduxjs/toolkit"
import { changeActive } from "../../services/slices/switchSlice"
import { FC } from "react"
import { RootState, useAppDispatch, useAppSelector } from "../../services/store"

export const RunTimeBtn: FC = () => {
  const dispatch = useAppDispatch()
  const runTimeSelector = createSelector(
    (state: RootState) => state.switchSlice.isActive,
    (isActive) => ({isActive})
  )

  const {isActive} = useAppSelector(runTimeSelector)
  return (  
    <button className={!isActive ? rTime.rTimeBtn_active : rTime.rTimeBtn} onClick={() => dispatch(changeActive(false))}>
      Runtime
    </button>
  );
}
 
