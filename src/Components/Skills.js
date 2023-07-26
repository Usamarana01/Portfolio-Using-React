import React from 'react';
import NavBar from "./Navbar";
import im from '../icons/char1.jpg'
import insta from '../icons/icons8-instagram-24.png'
import twit from '../icons/icons8-twitter-30.png'
import git from '../icons/icons8-github-30.png'
import linkdin from '../icons/icons8-linkedin-circled-30.png'
import Footer from "./Footer";
import skillPic from '../icons/person4.png'


export default function Skills()
{
 return(
    <>
    <NavBar/>
    <h1 style={{textAlign: 'center'}}> Skills</h1>
    <div class="pic">
        <img src={skillPic} alt="Picture"/>
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
            <p>I have learned a lot of skills as a student of computer science and then as a frontend developer and I am always learning something new to add a new skill to the list.<br/><br/></p>
            <div class="skills">
                <ul>
                    <li>C</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>R</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>React Js</li>
                    <li>Node js</li>
                    <li> Express js</li>
                    <li>MongoDB</li>
                    <li>Data Structure</li>
                </ul>
            </div>
            <p class=""><br/><br/>
                I also learned different skills that used in data Analysis. <br/><br/>
            </p>
            <div class="skills">
                <ul>
                    <li>Spreadsheets</li>
                    <li>Data Cleaning</li>
                    <li>Data Gathering</li>
                    <li>R</li>
                    <li>Tableau</li>
                    <li>SQL</li>
                    
                </ul>
            </div>
       <div/>

    
    </div>
    <Footer/>
    </>
 );   
    
}