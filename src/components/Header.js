import React from "react";
import imageMeme from "../images/Troll Face.png"

export default function Header(){
    return(
        <nav>
                <img src={imageMeme} className="nav--image" alt="" />
                <h2 className="nav--title">Meme Generator</h2>
                <p className="nav--subtitle">React Course - Project 3</p>
        </nav>
    )
}