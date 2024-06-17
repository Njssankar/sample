import React,{ Component } from "react";
import './Count.js'
import Count from "./Count.js";
class Property extends Component{
    render(){
        return(
            <div>This is class {this.props.rew}
       <Count />
            </div>
        )
    }
}
export default Property