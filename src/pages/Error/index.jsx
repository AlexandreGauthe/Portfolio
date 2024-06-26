// Pages vers laquelle sera redirigé l'utilisateur en cas d'url ou ressources inexistante//

import React from "react";
import "../../styles/Error.scss";
import { Link } from "react-router-dom";

export default function Error(){
    return (
        <div className="error_block">
                <p className="error_message"> Désolé la page ou la ressource demandée n'existe pas ...</p>
                <Link className="error__link" to="/Portfolio">Retourner à la page d'accueil</Link>
        </div>
    )
}