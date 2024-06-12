// Composant d'introduction //
import React from "react";
import "../styles/Intro.scss"
import myPic from "../assets/moi.jpg"
export default function Intro(){
    return(
        <div id="accueil">
            <img src={myPic} alt="Photo de Alexandre Gauthe"/>
            <div className="intro_block">
                <h2>Bonjour et bienvenue</h2>
                <p className="typing">Je suis Alexandre Gauthe développeur web front-end</p>
            </div>    
        </div>    
    )
}