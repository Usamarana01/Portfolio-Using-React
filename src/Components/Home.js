import React from "react";
import NavBar from "./Navbar";
import im from '../icons/char1.jpg'
import insta from '../icons/icons8-instagram-24.png'
import twit from '../icons/icons8-twitter-30.png'
import git from '../icons/icons8-github-30.png'
import linkdin from '../icons/icons8-linkedin-circled-30.png'
import Footer from "./Footer";
export default function Home (){
    return(
        <>
         <NavBar/>
         <div>
      <div class="welcome">
        <h1>Welcome!</h1>
      </div>
      <div class="pic"> 
      <img src={im} alt="Picture" />
      </div>
      <div class="links">
        <a href="https://instagram.com/learnwithusama?igshid=YmMyMTA2M2Y=">
          <img src={insta} alt="" />
        </a>
        <a href="https://twitter.com/UsamaRajput01?t=GSzlm-NdXuZW-Hbhr9RSKg&s=09">
          <img src={twit} alt="" />
        </a>
        <a href="https://github.com/Usamarana01">
          <img src={git} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-usama-0307aa1ba">
          <img src={linkdin} alt="" />
        </a>
      </div>
      <div class="intro">
        <p>
          Hello, I am a front-end developer and data analyst with a passion for
          creating intuitive and visually appealing web experiences. Currently
          pursuing a degree in Computer Science from COMSATS Abbottabad, I have
          developed a strong foundation in programming and data analysis.
          <br />
          <br />
          Additionally, I am a content creator with a keen eye for detail and a
          flair for writing. With my diverse skill set, I am able to bring a
          unique perspective to every project I work on, and I am always eager
          to learn and grow as a professional.
        </p>
      </div>
    </div>
         <Footer/>

        </>
    );
}