import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSwitchState } from "../../utils/types/type";

const initialState: TSwitchState= {
  isActive:true
}

const switchSlice = createSlice({
  name: "switchSlice/slice",
  initialState,
  reducers: {
    changeActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload
    }
  }
})

export const {changeActive} = switchSlice.actions
export default switchSlice.reducer