// import axios from "axios"
import React, { useEffect, useState } from "react"
// import { checkArrayLengthExists, checkObjectEmpty } from "../../../utills/functions"
import ImageComponent from "../image/image"
import { Link } from "react-router-dom"
import useAxios from "../customHooks/useAxios"
// import CircleSpinner from "../spinners/Circle-Spinners"
import Loader from "react-loader-spinner"


const UseEffect1 =()=>{

    const[todos,loading,error]=useAxios("https://dummyjson.com/products")
    



    if(loading){
        return Loader
    }

    if(error){
        return <h2>Something went wrong</h2>
    }




    return(
        <>
        <h2>Use Effect example</h2>

        
            <>
            {
                todos.products?.map(eachTodo=>{
                    console.log(eachTodo)
                    return(
                        <React.Fragment key={eachTodo.id}>
                        <h3>{eachTodo.title}</h3>
                        <ImageComponent  src={eachTodo.thumbnail}   />
                        <button>

                            <Link     to={`/${eachTodo.brand}/${eachTodo.id}`}    >
                            Click to view product
                            </Link>
                        </button>
                        </React.Fragment>
                    )
                })

            }
            </>
           

        </>
    )
}
export default UseEffect1