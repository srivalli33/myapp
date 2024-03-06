import React from "react";

export default function App6(props){
   
    return(
        <div style={{backgroundColor:'Silver'}}>
            Hello {props.name}.You are {props.age}
        </div>
    )
}
App6.defaultProps = {name:"Cathy",age:20}; 
  