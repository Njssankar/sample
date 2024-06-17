import React from "react";

import Mapind from "./Mapind.js";
const Mapfunction=()=>{
  const  arr=["react","html","css"]
    return(
        <div>
<h1>THis is Mapfunction</h1>
{
arr.map((value,index) => <li key={index}>{value}</li>)
}
<Mapind/>
        </div>
    )
}
export default Mapfunction