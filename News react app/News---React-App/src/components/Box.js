import React from 'react';



const Box = (props) => {
    return (
    <div className={props.classBox}>   
        
        <img id="Image" src={props.image} alt="" ALIGN="Left" VSPACE="5px" HSPACE="5px" />
        <br/>
        <br/>
        <h2>{props.heading}</h2>
           
    </div>
  
     )
}


export default Box;