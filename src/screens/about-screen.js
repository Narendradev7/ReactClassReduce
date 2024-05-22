
import React, { useContext } from "react"
import NavBar from "../Components/Functionality/navBar/navBar"
import { ThemeInfo } from "../navigation/navigation-stack"

function AboutScreen() {
    const {count}=useContext(ThemeInfo)
    return (
      <div>
            <NavBar/>
          <h2>Wellcome to AboutScreen current Count {count} </h2>
      </div>
    )
  }

export default AboutScreen