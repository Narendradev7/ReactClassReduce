import React, { useContext } from "react"
import NavBar from "../Components/Functionality/navBar/navBar"
import { themeInfo } from "../navigation/navigation-stack"

function SettingScreen() {

    const  {
      handleDarkLightModes,
      incrementCounter
  
    }=useContext(themeInfo)
  
  
    const handleModes=()=>{
      // Control the state which is created globally 
      handleDarkLightModes()
  
    }
  
    const handleIncrement=()=>{
      incrementCounter(10)
  
    }
    return (
      <div>
               <NavBar/>
          <h2>Wellcome to SettingScreen</h2>
          <button onClick={handleModes}  >Click to enable/disable dark mode</button>
          <button onClick={handleIncrement} >Count increment</button>
      </div>
    )
  }
  
  export default SettingScreen