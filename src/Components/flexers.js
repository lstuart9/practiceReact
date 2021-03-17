import React from "react";
// set array as const, and then use for each func
//map function, use props for background color using a for each loop
const Flex = ({boxes}) => (
    <>
        {boxes.map(box => (
        <div className="box" key={box.call}> {box.call} </div>
            ))}
    </>

);

export default Flex;