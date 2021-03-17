import React from "react";
// set array as const, and then use for each func
//map function, use props for background color using a for each loop


export default (props) => (
    <div key={props.key}>
        <div backgroundcolor={props.color} >{props.value}</div>
        <div></div>
        <div></div>
    </div>
)