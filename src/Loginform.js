import React, { useState } from "react"
import {CalculatorApp} from "./CalculatorApp";
export const Loginform=()=>{
    const[data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:'',
    })
    const{username,email,password,confirmpassword}=data;
    const handler=(e)=>{
setData({...data,[e.target.name]:[e.target.value]})
    }
    const submithandler=(e)=>{
    
console.log(data);
    
    }
return(
    <div>
        <h1>Login form</h1>
        <form onSubmit={submithandler}>
        <input type="text" name="username" placeholder="enter username" value={username} onChange={handler}  /><br/>
        <input type="email" name="email" placeholder="enter email" value={email} onChange={handler} /><br/>
        <input type="password" name="password" placeholder="enter password" value={password} onChange={handler} /><br/>
        <input type="password" name="confirmpassword" placeholder="enter confirm password" value={confirmpassword} onChange={handler} /><br/>
<input type="submit" />
<CalculatorApp/>
</form>
    </div>
)
}