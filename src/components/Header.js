// Composant d'en tête présent dans toutes les pages //
import React from "react";
import { Anchor} from "antd";
import { Link } from "react-router-dom";
import "../styles/Header.scss"
export default function Header(){

const {Link} = Anchor; 
    return (
        <header>
            <h1> Alexandre Gauthe</h1>
            <nav className="menu">
                <Anchor>
                    <Link href="#accueil">Accueil</Link>
                    <Link href="#about">A propos</Link>
                    <Link href="#projet">Projets</Link>
                    <Link href="#contact">Contact</Link>
                </Anchor>

            </nav>
        </header>    
    )
}