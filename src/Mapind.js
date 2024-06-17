import React from "react"
import {Filtered} from "./Filtered.js"
const Mapind=()=>{
    const arr=[
        {
            id:1,
            title:"react js",
        },{
            id:2,
            title:"vue js",
        },{
id:3,
title:"springboot"
        }
    ]
    return(
        <div>
<h1>Map index</h1>
{
    arr.map((value)=><li key={value.id}>{value.id}  </li>)
}
<Filtered/>
        </div>
    )
}
export default Mapind