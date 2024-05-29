import React from "react"

const Heading=({title})=>{
    console.log("Heading component re-rendering....")
    return(
        <h2>{title}</h2>
    )
}
export default React.memo(Heading)