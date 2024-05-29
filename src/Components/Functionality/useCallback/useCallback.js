import { useCallback, useState } from "react"
import TodosViewer from "./todos"
import Heading from "./heading"



const UseCallbackExample=()=>{
    const [todos,setTodos]=useState(["9am class timings"])

    const [salary,setSalary]=useState(1000)


    const addTodoFn=useCallback(()=>{
        setTodos([...todos,"1pm lunch time"])
    },[todos])

    const salaryIncrement=()=>{
        setSalary(salary+1000)
    }

    return(
        <>
              <Heading  title={"Salary details"} />
                <h3>{salary}</h3>
                <button onClick={salaryIncrement} >Increment salary</button>


                <Heading  title={"Todo details"} />
        <TodosViewer  todos={todos}  addTodoFn={addTodoFn} />


        </>
    )
}
export default UseCallbackExample