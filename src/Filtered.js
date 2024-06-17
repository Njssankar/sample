import React from "react";
import Signupform from "./Signupform";
// import { Login } from "./Login";
export const Filtered=()=>{
    const num=[10,20,30,40,50,60,44,43,42]
    const fil=num.filter(nu=>nu>40)
  //  const names=['james','john','july','karthik','rajesh','joshna'];
   // const filtered=names.filter(item=>item.includes('j'));
    return(
        <div>
            <h1>Filter</h1>
            {
               // filtered.map(item=><li>{item}</li>)
                fil.map(nu=><li>{nu}</li>)
            }
            <Signupform/>
        </div>
    )
}
