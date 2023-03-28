import { useEffect, useState } from "react"

const useStudent =()=>{
    const [students,setStudents] =useState([])
    useEffect(()=>{
        fetch('https://studentcollectionserver.onrender.com/student')
        .then(res =>res.json())
        .then(data =>setStudents(data))
    },[])
    return [students,setStudents]
}
export default useStudent