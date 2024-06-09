// Composant formulaire de contact //
import React from "react";
import "../styles/Contact.scss";

export default function Contact(){
    return(
        <div id="contact">
	        <div className="container">
		        <div className="form-container">
			        <h2>Une question ? Une demande de devis ?</h2>
			        <p> N’hésitez pas à m’écrire via le formulaire ci-dessous :</p>
			        <form action="#" method="post">
				        <label for="nom" aria-label="Entrez votre nom">Nom</label>
				        <input type="text" name="nom" id="nom"/>
                        <label for="prenom" aria-label="Entrez votre prénom">Nom</label>
				        <input type="text" name="prenom" id="prenom"/>
				        <label for="email" aria-label="Entrez votre adresse mail">Email</label>
				        <input type="email" name="email" id="email"/>
				        <label for="message" aria-label="Entrez votre message">Message</label>
				        <textarea name="message" id="message" cols="30" rows="10"></textarea>
				        <input type="submit" aria-label="Cliquez pour envoyer" value="Envoyer"/>
			        </form>
		        </div>
	        </div>
        </div>
    )
}