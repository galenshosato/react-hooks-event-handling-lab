// Code Keypad Component Here

import React from "react";

function passChange(event) {
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={passChange} />
        </div>
    )
}

export default Keypad;