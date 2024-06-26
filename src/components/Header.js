// Composant d'en tête présent dans toutes les pages //
import React from "react";
import { HashLink} from 'react-router-hash-link';
import "../styles/Header.scss"
export default function Header(props){
    return (
        <header style = {props.style}>
            <div className="logo">
                <h1>Alexandre Gauthe</h1>
            </div>    
            <nav className="menu">
                <HashLink  className="menu__link" href="https://AlexandreGauthe.github.io/Portfolio" to="#accueil">Accueil</HashLink>
                <HashLink  className="menu__link" href="https://AlexandreGauthe.github.io/Portfolio" to="#about">A propos</HashLink>
                <HashLink  className="menu__link" href="https://AlexandreGauthe.github.io/Portfolio" to="#projet">Projets</HashLink>
                <HashLink  className="menu__link" href="https://AlexandreGauthe.github.io/Portfolio" to="#contact">Contact</HashLink>
            </nav>
        </header>    
    )
}