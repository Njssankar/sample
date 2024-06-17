import React, { useEffect, useState } from "react";
import { Axioss } from "./Axioss";
export const Fetching=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/todos').then(
    response=>response.json().then(json=>setData(json))

)
    },[])
    return(
        <div>
            <h1>This is Fetching </h1>
            {
            data.map(item => <li key={item.id}>{item.title}</li>
              
            )
}
<Axioss/>
        </div>
    )
}
//'https://jsonplaceholder.typicode.com/todos'