// Composant formulaire de contact //
import React from "react";
import emailjs from '@emailjs/browser';
import "../styles/Contact.scss";
import {useRef} from 'react';

export const Contact = () => {
	const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rpo3a7l", "template_fem8t6w", form.current, {
        publicKey: "ANms_DPE-cDgWZ9SB",
      })
      .then(
        (result) => {
		  console.log(result.text);
          console.log("Mail envoyé");
        },
        (error) => {
		  console.log(error.text);	
        },
      );
  };
    return(
        <div id="contact">
	        <div className="container">
		        <h2 className="form_title">Une question ou une demande de devis ?</h2>
			    <p className="form_text"> N’hésitez pas à m’écrire via le formulaire ci-dessous :</p>
				<div className="form-container">
			        <form  ref={form} onSubmit={sendEmail}>
				        <label aria-label="Entrez votre nom">Nom</label>
				        <input type="text" name="user_name" id="user_name"/>
                        <label aria-label="Entrez votre prénom">Prénom</label>
				        <input type="text" name="user_first_name" id="user_first_name"/>
						<label aria-label="Entrez votre numéro de téléphone">Téléphone</label>
						<input type="tel" name="phone" id="phone"/>
				        <label aria-label="Entrez votre adresse mail">Email</label>
				        <input type="email" name="email" id="email"/>
				        <label aria-label="Entrez votre message">Message</label>
				        <textarea name="message" id="message" cols="30" rows="10"></textarea>
				        <input className="button" type="submit" aria-label="Cliquez pour envoyer" value="Envoyer"/>
					</form>
		        </div>
	        </div>
        </div>
    )
}

