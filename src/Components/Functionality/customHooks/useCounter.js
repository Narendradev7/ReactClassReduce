import { useState } from "react"


const useCounter =(initial=1,scale=1)=>{
  
    const [value,setValue]=useState(initial)


    const increment=()=>{
        setValue(value+scale)
    }

    const decrement=()=>{
        setValue(value-scale)
    }

    const reset=()=>{
        setValue(0)
    }


    return [value,increment,decrement,reset]
   



}

export default useCounter