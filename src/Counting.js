import React, { useState } from "react";
import Useeffect from "./Useeffect";
 const Counting=()=>{
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>The count is {count}</h1>
            <button onClick={()=>setCount(count+1)}>click me</button>
            <Useeffect />
        </div>
    )
}
export default Counting