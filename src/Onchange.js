import React, { useState } from "react"

import Onsubmit from "./Onsubmit.js"
const Onchange=()=>{
    const[user,setUser]=useState("")
    const handler=e=>{
        setUser(e.target.value)
    }
return(
    <div>
        <h1>This is Onchange</h1>
        <center>
<input type="text" placeholder="name" name={user} onChange={handler}/>

{user}

</center>
<Onsubmit/>
    </div>
)
}
export default Onchange