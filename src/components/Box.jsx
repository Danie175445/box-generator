import React from "react";

const Box = ({color}) =>{
    const boxstyle ={
        height: '20px',
        border: "2px solid purple",
        backgroundColor: color
    };
    return(
        <div style={boxstyle}>
        </div>
    )
}
export default Box