// Composant formulaire de contact //
import React from "react";
import emailjs from '@emailjs/browser';
import "../styles/Contact.scss";
import {useRef} from 'react';
import { useState } from "react";

export const Contact = () => {
	const [currentClass, setCurrentClass] = useState("success");
    const form = useRef();
	const sendEmail = (e) => {
    	e.preventDefault();
		emailjs.sendForm("service_rpo3a7l", "template_fem8t6w", form.current, {
        publicKey: "ANms_DPE-cDgWZ9SB",
      })
	  	if(currentClass === "success"){
			setCurrentClass("success--show")
			setTimeout(() => {
				setCurrentClass("success");
				}, 5000);
		}else{
				setCurrentClass("success");
			}
	e.target.reset();
  };
  
	return(
        <div id="contact">
	        <div className="container">
		        <h2 className="form_title">Une question ou une demande de devis ?</h2>
			    <p className="form_text"> N’hésitez pas à m’écrire via le formulaire ci-dessous :</p>
				<div className="form-container">
			        <form  ref={form} onSubmit={sendEmail}>
				        <label aria-label="Entrez votre nom">Nom</label>
				        <input required type="text" pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$" name="user_name"  id="user_name"/>
                        <label aria-label="Entrez votre prénom">Prénom</label>
				        <input required type="text" pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$" name="user_first_name"id="user_first_name"/>
						<label aria-label="Entrez votre numéro de téléphone">Téléphone</label>
						<input required type="tel" pattern="[0-9]+" name="phone" id="phone"/>
				        <label aria-label="Entrez votre adresse mail">Email</label>
				        <input required type="email" name="email" id="email" />
				        <label aria-label="Entrez votre message">Message</label>
				        <textarea required name="message" id="message" cols="30" rows="10"></textarea>
				        <input className="button" type="submit" aria-label="Cliquez pour envoyer" value="Envoyer"/>
						<span className={currentClass} >Merci, votre message à bien été envoyé, je vous répondrai au plus vite !</span>
					</form>
		        </div>
	        </div>
        </div>
    )
}

=======
// Composant formulaire de contact //
import React from "react";
import emailjs from '@emailjs/browser';
import "../styles/Contact.scss";
import {useRef} from 'react';
import { useState } from "react";

export const Contact = () => {
	const [currentClass, setCurrentClass] = useState("success");
    const form = useRef();
	const sendEmail = (e) => {
    	e.preventDefault();
		emailjs.sendForm("service_rpo3a7l", "template_fem8t6w", form.current, {
        publicKey: "ANms_DPE-cDgWZ9SB",
      })
	  	if(currentClass === "success"){
			setCurrentClass("success--show")
			setTimeout(() => {
				setCurrentClass("success");
				}, 5000);
		}else{
				setCurrentClass("success");
			}
	e.target.reset();
  };
  
	return(
        <div id="contact">
	        <div className="container">
		        <h2 className="form_title">Une question ou une demande de devis ?</h2>
			    <p className="form_text"> N’hésitez pas à m’écrire via le formulaire ci-dessous :</p>
				<div className="form-container">
			        <form  ref={form} onSubmit={sendEmail}>
				        <label aria-label="Entrez votre nom">Nom</label>
				        <input required type="text" pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$" name="user_name"  id="user_name"/>
                        <label aria-label="Entrez votre prénom">Prénom</label>
				        <input required type="text" pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\- ]+$" name="user_first_name"id="user_first_name"/>
						<label aria-label="Entrez votre numéro de téléphone">Téléphone</label>
						<input required type="tel" pattern="[0-9]+" name="phone" id="phone"/>
				        <label aria-label="Entrez votre adresse mail">Email</label>
				        <input required type="email" name="email" id="email" />
				        <label aria-label="Entrez votre message">Message</label>
				        <textarea required name="message" id="message" cols="30" rows="10"></textarea>
				        <input className="button" type="submit" aria-label="Cliquez pour envoyer" value="Envoyer"/>
						<span className={currentClass} >Merci, votre message à bien été envoyé, je vous répondrai au plus vite !</span>
					</form>
		        </div>
	        </div>
        </div>
    )
}

>>>>>>> 88ce0644c25ffe97d006f1970f6d96d053270a1f
