// Composant de la partie A propos //
import React from "react";
import "../styles/About.scss";

export default function About(){
    return(
        <div id="about">
            <h2>A propos</h2>
            <p>Autodidacte en développement web et passionné d’informatique depuis toujours. 
                J’ai décidé de me reconvertir afin de faire de ma passion mon métier. Si vous recherchez un développeur à l’écoute, 
                rigoureux et passionné, alors ne cherchez plus !  Je vous accompagnerai tout au long du processus de développement 
                de votre projet et ce jusqu’à sa mise en service. </p>
            <h2> Compétences </h2>
            <div className="competences">
                <h3>Sites web & applications</h3> 
                <p>    
                    Réalisations de sites ou application web modernes, performants et répondant au mieux aux besoins UI & UX 
                </p>
                <h3>Accessibilité et SEO</h3>
                <p>
                    L’accessibilité sera toujours dans mes priorités de développement, votre projet sera donc optimisé en ce sens 
                    ainsi que son référencement SEO afin d’apparaître au mieux dans les moteurs de recherches
                </p>
                <h3>Technologies utilisées </h3>
                <p>
                    Html 5 Css3/Sass JS
                    React Node.js express mongoDB
                </p>
            </div>        
        </div>    
    )
}