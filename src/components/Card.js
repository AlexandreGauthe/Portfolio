// Composant qui récupère et affiche les différents travaux sous formes de card //
import React from "react";
import "../styles/Card.scss"
import projets from "../data/data.json";
import { Link } from "react-router-dom";

export default function Card(props){
    return (
        projets.map((projet) =>( 
            <div className="cards" key={projet.id} imageid={projet.id}>
                <p className="card-title">{projet.title}</p>
                <Link  className="cards__link" to={`/projet/${projet.id}`}><img className="card-image" src={projet.cover} alt={projet.title}></img></Link>
            </div>
        ))
    )
}