import React  from "react";
import NavBar from "./Navbar";
import im from '../icons/char1.jpg'
import insta from '../icons/icons8-instagram-24.png'
import twit from '../icons/icons8-twitter-30.png'
import git from '../icons/icons8-github-30.png'
import linkdin from '../icons/icons8-linkedin-circled-30.png'
import Footer from "./Footer";
export default function Contact(){
    return (
        <>
        <NavBar/>
        <h1 style={{textAlign: 'center'}}>Contact Us</h1>
           <div class="contact">
            <ul class="b">
                <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=usamarj1011@gmail.com&tf=1"><li>Email</li></a>
                 <a href="https://www.linkedin.com/in/muhammad-usama-0307aa1ba"><li>linkedin</li></a>
                <a href="https://github.com/Usamarana01"><li>Github</li></a>
                <a href="https://instagram.com/learnwithusama?igshid=YmMyMTA2M2Y="><li>Instagram</li></a>
                <a href="https://twitter.com/UsamaRajput01?t=GSzlm-NdXuZW-Hbhr9RSKg&s=09"><li>Twitter</li></a>
            </ul>
        </div>
<Footer/>
        </>
    );
}