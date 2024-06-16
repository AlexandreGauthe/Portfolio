import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projets from "../../data/data.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Projet(){
    const [selectedPicture, setSelectedPicture] = useState(0);
    const  { projetid } = useParams();
    const navigate = useNavigate();
    const selectedProject = projets.find((projet) => projet.id === projetid);
    useEffect(() =>{ if (!selectedProject){
        navigate("/error");}
        else {
            document.title = `Kasa -${selectedProject.title}`;}},[selectedProject,navigate]);
    if(!selectedProject) {return null;}
    const {title,description,pictures,technologies,link} = selectedProject;
    const nextPictOnClick = (event) =>{
        selectedPicture <= pictures.length -2 ? setSelectedPicture(selectedPicture + 1) : setSelectedPicture(0);
        }
    const prevPictOnclick = (event) =>{
        selectedPicture >=  1 ? setSelectedPicture(selectedPicture - 1) : setSelectedPicture(selectedPicture + pictures.length -1)
        } 
    return (
        <div>
           <Header />
           <Footer />
        </div>
    )
}