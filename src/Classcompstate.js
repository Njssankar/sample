import React, { Component } from "react";
import Property from "./Property";
class Classcompstate extends Component{
    state={
        name:"sankar",
    }
    render(){
        return(
            <div>
                <h1>this is state in class component  {this.state.name}</h1>
               <Property rew={this.state.name}/>
            </div>
        )
    }
}
export default Classcompstate