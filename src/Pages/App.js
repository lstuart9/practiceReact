import React from 'react'
import Flex from '../Components/flexers'

export default() =>  (
    <div >

        <div className="topnav">
            <a className="active" href="App">These</a>
            <a href="Flex">Don't</a>
            <a href="#Go">Go</a>
            <a href="#Anywhere">Anywhere</a>
        </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightblue"}}>
                <h1>Howdy there don't break</h1>
                <img src={'https://i.imgur.com/SxPDCQi.jpg'} alt={"heart"} style={{width: 150, height: 100}}/>
                <h2>This is an example body paragraph, the rest will be filled with gibberish
                        kdsnfjjdshfndsjnfjnsdnfndsjfnjksdjfsaf
                        sdfsdfsfsdaffsdfhgisdhfjkdjshfkjsdfdsbfdsbndslfnpnsdkfhsaj
                        njkdbfjkasbfnmksdlanfmkdslanfm,sl
                        hjiwohrjeopjakfophjkelpgjnkelpw</h2>
            </div>
        <div className='flex' style={{display: 'flex', justifyContent: "center"}}> <Flex boxes={boxes} /> </div>


        </div>

)
let boxes = [
    <div> style = {{width: 300, height: 300, display: 'flex', backgroundColor: 'pink'}} 1</div>,
    <div> style = {{width: 300, height: 300, display: 'flex', backgroundColor: 'purple'}} 2</div>,
    <div> style = {{width: 300, height: 300, display: 'flex', backgroundColor: 'coral'}} 3</div>,
    <div> style = {{width: 300, height: 300, display: 'flex', backgroundColor: 'navy'}} 4</div>,
    <div> style = {{width: 300, height: 300, display: 'flex', backgroundColor: 'mint'}} 5</div>
]


