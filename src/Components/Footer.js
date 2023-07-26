import React from "react";
import im from '../icons/char1.jpg'
import insta from '../icons/whiteinstaicon.png'
import twit from '../icons/whitetwitericon.png'
import git from '../icons/whitegiticon.png'
import linkdin from '../icons/whitelinkedinicon.png'
export default function Footer(){
    return (
        <>
        <footer>
        <p class="p1">2023 © All right Reserved.<br/>Muhammad Usama</p>
        
        <div id="f-links" style={{color:'#fff'}}>
            <a href="https://instagram.com/learnwithusama?igshid=YmMyMTA2M2Y="><img src={insta} alt=""/></a> 
            <a href="https://twitter.com/UsamaRajput01?t=GSzlm-NdXuZW-Hbhr9RSKg&s=09"><img src={twit} alt=""/></a> 
            <a href="https://github.com/Usamarana01"><img src={git} alt=""/></a> 
            <a href="https://www.linkedin.com/in/muhammad-usama-0307aa1ba"><img src={linkdin} alt=""/></a> 
            </div>
    </footer>
        </>
    );
}