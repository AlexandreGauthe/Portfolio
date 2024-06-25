// Page sur laquelle sera affiché le projet choisi sur la page d'acceuil //

import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projets from "../../data/data.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import "../../styles/Selectedproject.scss";

export default function Projet(){
    const [selectedPicture, setSelectedPicture] = useState(0);
    const  { projetid } = useParams();
    const navigate = useNavigate();
    const selectedProject = projets.find((projet) => projet.id === projetid);
    
    useEffect(() =>{ 
        if (!selectedProject){
            navigate("/error");
        }else {
            document.title = `${selectedProject.title}`;
            }},[selectedProject,navigate]);
    
    if(!selectedProject) {return null;};

    const {title,description,pictures,technologies,link,points,diffculties,solutions,alt} = selectedProject;
    const points_list = points.map((point) => <li>{point}</li>);
    const diffculties_list = diffculties.map((diffculty) => <li>{diffculty}</li>);
    const solutions_list = solutions.map((solution) => <li>{solution}</li>);
    const technologies_list = technologies.map((technologie) => <img src={technologie} alt={alt[selectedPicture]} title={alt[selectedPicture]}/>)
    
    const nextPictOnClick = (event) =>{
        selectedPicture <= pictures.length -2 ? setSelectedPicture(selectedPicture + 1) : setSelectedPicture(0);
    }
    const prevPictOnclick = (event) =>{
        selectedPicture >=  1 ? setSelectedPicture(selectedPicture - 1) : setSelectedPicture(selectedPicture + pictures.length -1)
    } 
    return (
        <div>
           <Header style={{position:"static"}}/>
           <div className="main_box">
                <h2 id="title">{title} :</h2>
                <div className="slider_box">
                    <Slider src={pictures[selectedPicture]} alt={title} count={pictures.length === 1 ? null :`${selectedPicture +1} / ${pictures.length}`} nextOnClick={nextPictOnClick} style={pictures.length===1 ?{display:"none"} : null} prevOnClick={prevPictOnclick}/>
                </div>
            </div>    
            <p className="description">{description}</p>
            <div className="project_text_block">
                <h2 className="project_subtitle">Caractéristiques du projet</h2>
                <div className="project_boards">
                    <div className="main_points">
                        <h3>Points principaux du projet :</h3>
                        <ul>{points_list}</ul>
                    </div>
                    <div className="difficulties">
                        <h3>Difficultés du projet :</h3>
                        <ul>{diffculties_list}</ul>
                    </div>
                    <div className="solutions">
                        <h3>Solutions employées :</h3>
                        <ul>{solutions_list}</ul>
                    </div>
                </div>
                <div className="technos">
                    <h3>Technologies utilisées :</h3>
                    <div className="technos__logos">
                        {technologies_list}
                    </div>   
                </div>
                <div className="project-link">
                    <a id="github_link" href={link} target="blank">Lien vers le projet</a>  
                </div>
            </div>
            <Footer />
        </div>
    )
}