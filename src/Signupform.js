import React, { useState } from "react";

import { Loginform } from "./Loginform";
 const Signupform=()=>{
    const[data,setData]=useState(
        {
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
        });

        const{username,email,password,confirmpassword}=data;

    const changehandler=e=>{
      
        setData({ ...data, [e.target.name]: e.target.value });

    }
    const submithandle=e=>{
        e.preventDefault();
        if(username.length <= 5){
            alert("username must have more than 4 characters");
        }
      
     else if(password !== confirmpassword){
            alert("passwords not match")
        } 
        else{
        console.log(data);
        }
        
     
    }
    return(
        <div>
            <h1>This is Signupform</h1>
            <form onSubmit={submithandle}>
            <input type="text" name="username" placeholder="enter name" value={username} onChange={changehandler} /><br/>
            <input type="email" name="email" placeholder="enter email" value={email} onChange={changehandler}/><br/>
            <input type="password" name="password" placeholder="enter password" value={password} onChange={changehandler} /><br/>
            
            <input type="password" name="confirmpassword" placeholder="enter confirm password" value={confirmpassword} onChange={changehandler} /><br/>
            {password!==confirmpassword ? <p style={{color:'red'}}>password not match</p>: null}
            <input type="submit" />
            </form>
<Loginform/>
        </div>
    )
}
export default Signupform