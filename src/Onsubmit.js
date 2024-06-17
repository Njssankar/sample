import React, { useState } from 'react';

import Mapfunction from './Mapfunction.js';
const Onsubmit=()=>{
    const[data,setData]=useState({
        username:'',
        password:''
    });
    const{username,password}=data;

    const handler=e=>{
     setData({...data,[e.target.name]:[e.target.value]})
    }
    const submithandler=e=>{
        console.log(data);
    }
return(
    <div>
        <h1>Onsubmit</h1>
        <form onSubmit={submithandler}>
        <input type="text" placeholder="enter name" name="username" value={username} onChange={handler} /><br/>
        <input type='password' placeholder="enter password" name="password" value={password} onChange={handler} /><br/>
        <input type='submit' />
        <br/>
        </form>
        <Mapfunction/>
    </div>
)
}
export default Onsubmit