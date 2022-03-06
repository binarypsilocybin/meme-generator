import React, {useState} from "react";
import memesData from "../memesData.js"



export default function Meme() {
    const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    function getMemes(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
        setMemeImage(url)
    }

    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button" onClick={getMemes}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image" alt=""/>
        </main>
    )

}