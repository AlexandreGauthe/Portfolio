//Page d'accueil //

import React from "react";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import About from "../../components/About";
import Projet from "../../components/Projet";
import {Contact} from "../../components/Contact"
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="home_block">
      <Header/>
      <Intro />
      <About />
      <Projet />
      <Contact />
      <Footer />
    </div>  
  );
}


