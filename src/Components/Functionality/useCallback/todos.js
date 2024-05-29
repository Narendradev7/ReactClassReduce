import React from "react"



const TodosViewer = ({todos,addTodoFn}) => {
    console.log("TodoViewer rendering......")
    // const{todos}=props
    return(
        <>
        <h2>Todo list</h2>
        <button onClick={addTodoFn} >Add todo</button>
        {
            todos.map((eachTodo,index)=>{
                return(
                    <React.Fragment key={index} >
                    <h3>{eachTodo}</h3>
                    </React.Fragment>
                )
            }
        )
        }
        
        </>
    )
}
export default React.memo(TodosViewer)