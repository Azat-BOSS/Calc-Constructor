import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCalcState } from "../../utils/types/type";

const initialState: TCalcState = {
  sign: "",
  firstNumArr: [],
  secondNumArr: [],
  firstNum: 0,
  secondNum: 0,
  changeState: false,
  getResultState: false,
  final: 0
}


const calcCompSlice = createSlice({
  name: "switchSlice/slice",
  initialState,
  reducers: {
    getSign: (state, action: PayloadAction<string>) => {
      state.sign = action.payload;
    },
    getFirstNumArr: (state, action: PayloadAction<any>) => {
      state.firstNumArr = [...state.firstNumArr, action.payload];
      state.firstNum = +state.firstNumArr.join("")
    },
    getSecondNumArr: (state, action: PayloadAction<any>) => {
      state.secondNumArr = [...state.secondNumArr, action.payload];
      state.secondNum = +state.secondNumArr.join("")
    },
    changeState: (state, action: PayloadAction<boolean>) => {
      state.changeState = action.payload;
    },
    getResult: (state, action: PayloadAction<boolean>) => {
      state.getResultState = action.payload;
    },
    resetFirstNum: (state) => {
      state.firstNumArr = [];
      state.firstNum = 0
    },
    resetSecondNum: (state) => {
      state.secondNumArr = [];
      state.secondNum = 0
    },
    finalResult: (state) => {
      switch (state.sign) {
        case "+":
          state.final = state.firstNum + state.secondNum
          break;
        case "-":
          state.final = state.firstNum - state.secondNum
          break;
        case "x":
          state.final = state.firstNum * state.secondNum
          break;
        case "/":
          if(state.secondNum === 0) {
            state.final = "Не определено"
          } else {
            state.final = state.firstNum / state.secondNum
          }
          break;
        default:
          break;
      }
    }
  },
});

export const {
  getSign,
  getFirstNumArr,
  getSecondNumArr,
  changeState,
  getResult,
  resetFirstNum,
  resetSecondNum,
  finalResult
} = calcCompSlice.actions;
export default calcCompSlice.reducer;
