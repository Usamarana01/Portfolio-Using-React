import React from "react";
export default function Cards(props){
 return(
 <>
<div class="project-item">
        <div class="projects">
            <div class="project">
                <p>{props.name}</p>
                <a href={props.href}><img src={props.img} alt=""/></a>
            </div>
        
            <div class="project">
                <p>{props.name}</p>
                <a href={props.href}><img src={props.img} alt=""/></a>
            </div>
            <div class="project">
                <p>{props.name}</p>
                <a href={props.href}><img src={props.img} alt=""/></a>
            </div>
        </div></div>

 </>
 );

}