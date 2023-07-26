import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
import whr from '../icons/icons8-geography-50.png'
import pp from '../icons/portpro.png'
import da from '../icons/dataanalysis.png'
export default function Projects(){
    return(
        <>
        <NavBar/>
        <div class="project-item">
        <h1>Projects</h1>
        <h2>More projects coming soon.</h2>
        </div>

        <Cards name="World Happiness Report" href="https://github.com/Usamarana01" img={whr} />
        <Cards name="Professinal Portfolio" href="https://github.com/Usamarana01" img={pp} />
        <Cards name="Data Analysis" href="https://github.com/Usamarana01" img={da} />
        <Footer/>

        </>
    );
}