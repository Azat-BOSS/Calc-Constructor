import { useState, useMemo, FC, Key } from "react";
import calcStyle from "./calc.module.css"
import { createSelector } from "@reduxjs/toolkit";
import { ConstructorModule, RuntimeModule } from "../../modules";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { EqualBtns, NumBtns, ScreenComp, SignsBtns } from "../../components";
import { getDropCompon } from "../../services/slices/dragCompSlice";
import { useAppDispatch, useAppSelector } from "../../services/store";

const Calculator: FC = () => {
  const dispatch = useAppDispatch()
  const switchSelector = createSelector(
    (state: any) => state.dragCompSlice.idArr,
    (state: any) => state.dragCompSlice.componentsArr,
    (state: any) => state.switchSlice.isActive,
    (idArr, componentsArr, isActive) => ({idArr, componentsArr, isActive})
  )

  const {idArr, componentsArr, isActive} = useAppSelector(switchSelector)

  const [isScreen] = useState<boolean>(true)
  const [isSigns] = useState<boolean>(true)
  const [isNum] = useState<boolean>(true)
  const [isEqual] = useState<boolean>(true)

  const Screen = <ScreenComp id={0}/>
  const SignsButtons = <SignsBtns id={1}/>
  const NumButtons = <NumBtns id={2}/>
  const Equal = <EqualBtns id={3}/>

  const [components] = useState([
    {
      id: 0,
      component: <ScreenComp id={0}/>
    },
    {
      id: 1,
      component: <SignsBtns id={1}/>
    },
    {
      id: 2,
      component: <NumBtns id={2}/>
    },
    {
      id: 3,
      component: <EqualBtns id={3}/>
    },
  ])

  useMemo(() => {
    let set = new Set()
    let crnComp
    let componentsArr
    idArr.map((id: Number) => {
      crnComp = components.find(item => item.id === id)
      set.add(crnComp)
      componentsArr = Array.from(set)
      return dispatch(getDropCompon(componentsArr))
    })
  }, [components, idArr, dispatch])


  return (  
    <DndProvider backend={HTML5Backend}>
      <div className={calcStyle.calc}>
        <div className={isActive ? calcStyle.calc__container : calcStyle.calc__container_disabled}>

          {isActive ? (
          <ConstructorModule>
            {isScreen && Screen}
            {isSigns && SignsButtons}
            {isNum && NumButtons}
            {isEqual && Equal}
          </ConstructorModule>
          ) : null}

          <RuntimeModule>
            {componentsArr?.map((comp: any, index: Key | null | undefined) => (
              <li key={index}>{comp.component}</li>
            ))}
          </RuntimeModule>
        </div>
      </div>
    </DndProvider>
  );
}
 
export default Calculator;