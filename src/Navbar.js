import React from "react";
import './san.css';
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div>
            <h3>This is navbar</h3>
            <div className="nav">
            <ul>
             <Link to="">  <li> Home </li></Link>
             <Link to="/dashboard"> <li> Dashboard</li></Link>
             <Link to="/about"> <li> About</li></Link>
            </ul>
            </div>
        </div>
    )
}
export default Navbar