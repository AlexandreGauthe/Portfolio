import React from "react";
import "../styles/Footer.scss";

export default function Footer(){
    return(
       <div className="footer-block"> 
            <h2>Réseaux sociaux :</h2>
            <ul className="link-block">
                <li>Linkedin</li>
                <li>Facebook</li>
                <li>Twitter/X</li>
                <li>Instagram</li>
            </ul>
        </div>    
    )
}