import { combineReducers, configureStore } from "@reduxjs/toolkit";
import switchSlice from "./slices/switchSlice";
import calcCompSlice from "./slices/calcCompSlice";
import dragCompSlice from "./slices/dragCompSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducers = combineReducers({
  switchSlice: switchSlice,
  calcCompSlice: calcCompSlice,
  dragCompSlice: dragCompSlice
})

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
})


export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {store}