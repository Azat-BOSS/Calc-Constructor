export interface IRunTimeConstruct {
  children: 
  | React.ReactNode 
  | React.ReactChild 
  | null 
  | undefined
}

export interface IIdComp {
  id: number
}

export interface INumberBtn  {
  sign: number | string,
  index: number
}

export type ISwitchSlice = {
  isActive: boolean
}


