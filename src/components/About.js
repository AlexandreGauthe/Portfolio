// Composant de la partie A propos //
import React from "react";
import Slider from "./Slider";
import { useState } from "react";
import { useEffect } from "react";
import slides from "../data/slides.json";
import "../styles/About.scss";

export default function About(){
  const listSlides = slides.map(slide=>[slide.title]);
  const slidesContent = slides.map(slide=>[slide.content]);
  const slidesLogos = slides.map(slide=>[slide.logos]);
  const slidesAlt = slides.map(slide=>[slide.alt]);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const nextSlideOnClick = (event) =>{
    selectedSlide <= listSlides.length -2 ? setSelectedSlide(selectedSlide + 1) : setSelectedSlide(0)
  };
    const prevSlideOnclick = (event) =>{
    selectedSlide >=  1 ? setSelectedSlide(selectedSlide - 1) : setSelectedSlide(selectedSlide + listSlides.length -1)
  };
  useEffect(() =>{
    const timeId = setTimeout(()=>{
      selectedSlide <= 1 && selectedSlide < 3? setSelectedSlide(selectedSlide + 1) : setSelectedSlide(0)
    },5000);
    return () => {
      clearTimeout(timeId);
    }
  },[selectedSlide]);

  return(
    <div id="about">
      <h2>A propos</h2>
      <p className="about-text">Autodidacte en développement web et passionné d’informatique depuis toujours. 
      J’ai décidé de me reconvertir afin de faire de ma passion mon métier. Si vous recherchez un développeur à l’écoute, 
      rigoureux et passionné, alors ne cherchez plus !  Je vous accompagnerai tout au long du processus de développement 
      de votre projet et ce jusqu’à sa mise en service. </p>
      <h2> Compétences </h2>
      <Slider  name={listSlides[selectedSlide]} content={slidesContent[selectedSlide]}  src={slidesLogos[selectedSlide]}  alt={slidesAlt[selectedSlide]} title={slidesAlt[selectedSlide]} nextOnClick={nextSlideOnClick} style={listSlides.length===1 ?{display:"none"} : null} prevOnClick={prevSlideOnclick} />
    </div>            
    )
}