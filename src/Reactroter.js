import React from "react";
import Home from "./Home.js";
import Dashboard from "./Dashboard.js";
import About from "./About.js";
import Navbar from './Navbar.js';
import { BrowserRouter,Route, Routes } from "react-router-dom";
const Reactroter=()=>{
    return(
        <div>
<h1>This is React-router-Dom</h1>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/dashboard/:name" element={<Dashboard/>} />
    
</Routes>
<Navbar/>
</BrowserRouter>
        </div>
        
    )
}
export default Reactroter