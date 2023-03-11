import { PayloadAction } from "@reduxjs/toolkit"

export type TSwitchState = {
  isActive: boolean
}

export type TDragState = {
  idArr: number[],
  componentsArr: any
}

export type TCalcState = {
  sign: string,
  firstNumArr: number[] | string[],
  secondNumArr: number[] | string[],
  firstNum: number,
  secondNum: number,
  changeState: boolean,
  getResultState: boolean,
  final: number | string
}