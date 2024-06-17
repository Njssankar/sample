import React,{useState} from 'react';
import Counting from './Counting';
const Count=()=>{
const[count,setCount]=useState(0);
return(
    <div>
<h1>count is {count} </h1>

{ /*<button onClick={()=>console.log("clicked")}>Click</button> */}

<h1 onClick={()=>console.log("clicked")}>Click</h1>
<button onClick={()=>setCount(count+1)}>click me</button>
<Counting />
</div>
)
}
export default Count