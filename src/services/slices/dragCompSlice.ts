import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TDragState } from "../../utils/types/type";

const initialState: TDragState = {
  idArr: [],
  componentsArr: []
}

const dragCompSlice = createSlice({
  name: "dragCompSlice/slice",
  initialState,
  reducers: {
    getIds: (state, action: PayloadAction<number>) => {
      state.idArr = [...state.idArr, action.payload]
    },
    getDropCompon: (state, action: PayloadAction<any>) => {
      state.componentsArr = action.payload
    },
    deleteComp: (state, action: PayloadAction<any | number>) => {
      state.componentsArr = state.componentsArr.filter((item: any) => item.id !== action.payload)
      state.idArr = state.idArr.filter(id => id !== action.payload)
    }
  }
})

export const {getIds, deleteComp, getDropCompon} = dragCompSlice.actions
export default dragCompSlice.reducer