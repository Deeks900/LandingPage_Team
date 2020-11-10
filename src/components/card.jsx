import React from "react";
function Card(props){
    return(
        <div className = "card">
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
        <img 
         className = "image"
         src = {props.img}
         alt = {props.alt}
         ></img>
         </div> 
    );

}
export default Card;