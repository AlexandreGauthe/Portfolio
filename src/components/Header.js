// Composant d'en tête présent dans toutes les pages //
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss"
export default function Header(){


    return (
        <header>
            <div className="logo">
                <h1> Alexandre Gauthe</h1>
            </div>    
            <nav className="menu">
                <Link className="menu__link" href="#accueil" to="#accueil">Accueil</Link>
                <Link  className="menu__link" to="#about">A propos</Link>
                <Link  className="menu__link" to="#projet">Projets</Link>
                <Link  className="menu__link" to="#contact">Contact</Link>
            </nav>
        </header>    
    )
}