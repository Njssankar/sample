import React, { useState } from 'react';
import { Fetching } from './Fetching';
export const CalculatorApp=()=>{
    const[data,setData]=useState(" ");
    const[result,setResult]=useState(0);
    const handler=e=>{
       setData(e.target.value);
    }
return(
    <div>
        <h1>This is Calculator App</h1>
        <input type='text' placeholder='enter numbers' name="data" value={data}  onChange={handler}/><br/><br/>
        <button onClick={ () =>{setResult(eval(data))}}>Result</button>
        
        <h4>Result is : {result} </h4>
        <Fetching/>
    </div>
)
}