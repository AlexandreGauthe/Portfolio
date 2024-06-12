// Composant qui présentera les différents projets //
import React from "react";
import "../styles/Projet.scss"
import Card from "./Card";
export default function Projet(){
    return(
        <div id="projet">
            <div className="Part-title">
                <h2> Projets </h2>
            </div> 
            <div className="cards_block">
              <Card />  
            </div>   
        </div>
    )
}