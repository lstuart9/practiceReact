import React from 'react'
import Flexers from '../Components/flexers'

const boxes = [
    { id: 'one', value: "Box 1", color: "pink" },
    { id: 'two', value: "Box 2", color: "navy" },
    { id: 'three', value: "Box 3", color: "orange" },
    { id: 'four', value: "Box 4", color: "green" },
    { id: 'five', value: "Box 5", color: "teal"},

]




export default () => (
    <div >

                <div className="topnav">
                    <a className="active" href="App">These</a>
                    <a href="Flex">Don't</a>
                    <a href="#Go">Go</a>
                    <a href="#Anywhere">Anywhere</a>
                </div>



                <div className="header" >
                <h1>Howdy there don't break</h1>
                <img src={'https://i.imgur.com/SxPDCQi.jpg%27%7D'} alt={"heart"} style={{ width: 150, height: 100 }} />
                <h2>This is an example body paragraph, the rest will be filled with gibberish
                kdsnfjjdshfndsjnfjnsdnfndsjfnjksdjfsaf
                sdfsdfsfsdaffsdfhgisdhfjkdjshfkjsdfdsbfdsbndslfnpnsdkfhsaj
                njkdbfjkasbfnmksdlanfmkdslanfm,sl
                hjiwohrjeopjakfophjkelpgjnkelpw </h2>
                </div>




            <div className="boxContainer">
            {boxes.map((boxProps) => (
                <Flexers id={boxProps.id} value={boxProps.value} color={boxProps.color} />
                    )
                )

            }

            </div>









    </div>

                )