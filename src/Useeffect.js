import React, { useState,useEffect } from "react";
import Onchange from "./Onchange";
const Useeffect=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
console.log("Clicked successfully");
    },[count])
    
    return(
        <div>
<h1>This is Useeffect: After executing the return statement the useeffect execute once.</h1>
<h1>You clicked {count} Times</h1>
<button onClick={()=>{
    setCount(count+1)
}}>On click</button>
<Onchange />
        </div>
    )
}
export default Useeffect