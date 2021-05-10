import React from "react";
import styles from "./flexers.module.scss";

// set array as const, and then use for each func
//map function, use props for background color using a for each loop


export default (props) => (
    <div className={styles.boxy} id={props.id} style={{backgroundColor:props.color}}>

        <div >
            {props.value}</div>
        <div></div>
        <div></div>
        </div>
)