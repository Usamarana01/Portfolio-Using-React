import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(){
    return (
        <>
        <nav class="desktop-nav" >
         <div ><h1>Muhammad Usama</h1></div>
        <div class="desktop-nav-items">
         <ul class="desktop-menu">
                <Link aria-current="page" class="item active" to="/Home"><li>Home</li></Link>
                <Link class="item" to="/projects"><li>Projects</li></Link>
                <Link class="item" to="/Skills"><li>Skills</li></Link>
                <Link class="item" to="/Contact"><li>Contact Us</li></Link>
            </ul></div>
        </nav>
        </>
    );
}