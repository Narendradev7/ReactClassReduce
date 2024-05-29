
import React, { useContext } from "react"
import NavBar from "../Components/Functionality/navBar/navBar"
import { themeInfo } from "../navigation/navigation-stack"

function AboutScreen() {
    const {count}=useContext(themeInfo)
    return (
      <div>
            <NavBar/>
          <h2>Welcome to AboutScreen current Count {count} </h2>
      </div>
    )
  }

export default AboutScreen