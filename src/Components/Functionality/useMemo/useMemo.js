import { useMemo, useState } from "react"


const UseMemoExample =()=>{
    const [counter1,setCounter1]=useState(1)
    const [counter2,setCounter2]=useState(1)

    const changeCounter1=()=>{
        setCounter1(counter1+1)
    }

    const changeCounter2=()=>{
        setCounter2(counter2+1)
    }

    const checkEven= useMemo(()=>{
        console.log("checking even ......")
        for(let i=0;i<10000;i++){
            
        }
        return counter1%2===0? "EVEN":"ODD"
    },[counter1])

    return(
        <>
        <h2>Use memo example</h2>
        <h1>Current counter 1 value ---- {counter1}   {checkEven}</h1>
        <h1>Current counter 2 value ---- {counter2}</h1>
    
        <button onClick={changeCounter1} >Change counter 1</button>
        <button onClick={changeCounter2}>Change counter 2</button>
        </>
    )
}

export default UseMemoExample