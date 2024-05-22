import React from 'react'
import { useNavigate } from 'react-router-dom'


function InvalidScreen() {

    const navigate = useNavigate()

    const navigateToMainScreen=()=>{
            navigate("/")
    }

  return (
    <div>
<h3>Hey you lost, please check your direction</h3>

<button onClick={navigateToMainScreen} >Back to home
</button>

    </div>
  )
}

export default InvalidScreen