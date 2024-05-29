import React, { createContext, useReducer, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/home-screen'
import AboutScreen from '../screens/about-screen'
import SettingScreen from '../screens/setting-screen'
import BlogScreen from '../screens/blog-screen'
import InvalidScreen from '../screens/invalid-screen'
// import { type } from '@testing-library/user-event/dist/type'
import ProductDetail from '../screens/product-detailscreen'


export const userInfo=createContext()
export const themeInfo=createContext()


const initialState={
  count:0,
  name:"sai",
  designation:"",
  subjects:["react","angular"]
}


const reducerFn = (state,action)=>{

  switch(action.type){
    case "INCREMENT":
      return {...state,count:state.count+1}
      case "DECREMENT":
        return {...state,count:state.count-1}
        case "CHANGE_NAME":
          return {...state,name:"vijay"}
          case "ADD_SUBJECT":
            return {...state,subjects:[...state.subjects,action.payload]}
    default :
    return state
  }

}



function NavigationStack() {

  const[username,setUserName]=useState({
    name:"ram",
    age:22,
    salary:1000
  })
  const[darkMode,setDarkMode]=useState(true)
  const [count,setCount]=useState(0)

  const[currentState,dispatch]=useReducer(reducerFn,initialState)


  const handleDarkLightModes=()=>{
    setDarkMode(!darkMode)
  }

  const handleIncrement =()=>{
    dispatch({
      type:"INCREMENT"
    })
    dispatch({
      type:"CHANGE_NAME"
    })

  }

  const handleDecrement =()=>{
    dispatch({
      type:"DECREMENT"
    })

  }

  const handleChangeName=()=>{
    dispatch({
      type:"CHANGE_NAME"
    })

  }

  const subjectAdd=(subject)=>{
    dispatch({
      type:"ADD_SUBJECT",
      payload:subject
    })
  }

 
  const incrementCounter =(value=1)=>{
    setCount(count+value)
  }


  return (
  <>



<themeInfo.Provider    value={
  {
    darkMode,
    handleDarkLightModes,
    incrementCounter,
    count,
    currentState,
    handleIncrement,
    handleDecrement,
    handleChangeName,
    subjectAdd
  }
}    >
  <userInfo.Provider    value={username}  >

  <BrowserRouter>
  <Routes>
    <Route   path='/'  Component={HomeScreen}  />
    <Route   path='/about'  Component={AboutScreen}  />
    

    <Route   path='/settings'  Component={SettingScreen}  />
    <Route   path='/blog'  Component={BlogScreen}  />


    <Route path="/:brand/:productID"  Component={ProductDetail} />

    <Route   path='*'  Component={InvalidScreen}  />
  </Routes>
  </BrowserRouter>
      
  </userInfo.Provider>
  </themeInfo.Provider>

  
  </>
  )
}

export default NavigationStack