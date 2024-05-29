import axios from "axios"
import { useEffect, useState } from "react"


const useAxios = (endPoint) =>{
 const[data,setData]=useState([])
 const[loading,setLoading]=useState(false)
 const[error,setError]=useState(null)

 useEffect(()=>{
    fetchData()
 },[])

 const fetchData=async()=>{
    try{
        setLoading(true)
   const response = await axios.get(endPoint)
   if(response.status===200){
    setData(response.data) 
   }
}catch(err){
    console.error(err)
    setError(err)
}finally{
    setLoading(false)

}
}

return [data,loading,error]

}

export default useAxios