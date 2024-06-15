import React from "react";
import "../styles/Footer.scss";


export default function Footer(){
    return(
       <div className="footer-block"> 
            <h2>Mes réseaux sociaux :</h2>
            <div className="link-block">
              <a href="https://www.linkedin.com/in/alexandre-gauthe-ab454011a/" target="blank" rel="noopener noreferrer"><img src="https://onedrive.live.com/embed?resid=91F849ED5F05CE92%2121705&authkey=%21AJihHSr15tZ4QN4&width=300&height=300" alt="Icone de Linkedind" title="Linkedin"></img></a>
              <a href="https://viadeo.journaldunet.com/p/alexandre-gauthe-2582042" target="blank" rel="noopener noreferrer"><img src="https://onedrive.live.com/embed?resid=91F849ED5F05CE92%2121707&authkey=%21ABpWoiaVo69DL2w&width=300&height=298" alt="Logo de Viadeo" title="Viadeo"></img></a>  
              <a href="https://github.com/AlexandreGauthe" target="blank" rel="noopener noreferrer" ><img src="https://onedrive.live.com/embed?resid=91F849ED5F05CE92%2121706&authkey=%21AEZeTRrLxfP9obY&width=300&height=300" alt="Logo de Github" title="Github"></img></a>  
            </div>
        </div>    
    )
}