import sbtnStyle from "./sbtn.module.css"
import { ConstrBtn, RunTimeBtn } from "../../ui";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../services/store";
import { useAppSelector } from "../../services/store";
import { FC } from "react";

export const SwitchButton: FC = () => {
  const switchSelector = createSelector(
    (state: RootState) => state.switchSlice.isActive,
    (isActive) => ({isActive})
  )
  const {isActive} = useAppSelector(switchSelector)

  return (  
    <div className={isActive ? sbtnStyle.sBtn_active : sbtnStyle.sBtn}>
      <RunTimeBtn/>
      <ConstrBtn/>
    </div>
  );
}
 
