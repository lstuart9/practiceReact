import React from 'react'
import heart from '../../static/heart.jpg'


export default() =>  (
    <div >

        <div className="topnav">
            <a className="active" href="#These">These</a>
            <a href="#Dont">Dont</a>
            <a href="#Go">Go</a>
            <a href="#Anywhere">Anywhere</a>
        </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightblue"}}>
                <h1>Howdy there don't break</h1>
                <img src={heart} alt={"heart"} style={{width: 150, height: 100}}/>
                <h2>This is an example body paragraph, the rest will be filled with gibberish
                        kdsnfjjdshfndsjnfjnsdnfndsjfnjksdjfsaf
                        sdfsdfsfsdaffsdfhgisdhfjkdjshfkjsdfdsbfdsbndslfnpnsdkfhsaj
                        njkdbfjkasbfnmksdlanfmkdslanfm,sl
                        hjiwohrjeopjakfophjkelpgjnkelpw</h2>
            </div>
        </div>
)


