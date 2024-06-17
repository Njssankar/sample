import React,{useEffect, useState} from "react";
import axios from 'axios';

import Reactroter from "./Reactroter";
export const Axioss=()=>{
    const[data,setData]=useState([]);
  useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/todos").then(response=>setData(response.data))
 },[])   
    return(
        <div>
            <h1>This is Axios</h1>
            {
                data.map((item)=><li key={item.id}>{item.title}</li>)
            }
<Reactroter/>
        </div>
    )
}