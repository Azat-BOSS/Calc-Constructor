const signsArr: string[] = ["/", "x", "-", "+"]
const numArr: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."]
const TypeComp = {
  "EqualButtons": "EqualBtns",
  "NumButtons": "NumBtns",
  "ScreenCompon": "ScreenComp",
  "SignsButtons": "SignsButtons"
}
const setStyleOpacity = (isDragging: any): string => {
  const opacity = isDragging ? ".4" : ""
  return opacity
}

export {
  numArr, 
  signsArr, 
  TypeComp, 
  setStyleOpacity
}