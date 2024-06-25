import React from "react";
import "../styles/Footer.scss";


export default function Footer(){
    return(
       <div className="footer-block"> 
            <h2>Mes réseaux sociaux :</h2>
            <div className="link-block">
              <a href="https://www.linkedin.com/in/alexandre-gauthe-ab454011a/" target="blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/diy32kbiz/image/upload/v1718962141/Linkedin-logo-on-transparent-Background-PNG-_um9dbm.png" alt="Icone de Linkedind" title="Linkedin"></img></a>
              <a href="https://viadeo.journaldunet.com/p/alexandre-gauthe-2582042" target="blank" rel="noopener noreferrer"><img src="https://res.cloudinary.com/diy32kbiz/image/upload/v1718962142/Logo_Viadeo_vfg45o.png" alt="Logo de Viadeo" title="Viadeo"></img></a>  
              <a href="https://github.com/AlexandreGauthe" target="blank" rel="noopener noreferrer" ><img src="https://res.cloudinary.com/diy32kbiz/image/upload/v1718962140/Github_x22u7s.png" alt="Logo de Github" title="Github"></img></a>  
            </div>
        </div>    
    )
}