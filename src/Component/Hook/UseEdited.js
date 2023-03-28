import { useEffect, useState } from 'react';

const UseEdited =id => {
    const [edit,setEdit] = useState({})
    useEffect(()=>{
        const url = `https://studentcollectionserver.onrender.com/student/${id}`
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then (data =>setEdit(data))
    },[id])
    
    return [edit,setEdit]
};

export default UseEdited;