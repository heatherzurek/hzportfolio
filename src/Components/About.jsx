import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return(
        <div>
            <h2 class="aboutSection">About</h2>
            <p class="paraFormat">My pronouns are <span class="highlight">she/her</span>. I'm a <span class="highlight">.NET Technical Support Engineer</span>, with a background in C#, .NET, JavaScript, Node.js, and React. I work closely with .NET frameworks and SQL, but have an excitement and passion for frontend development. I enjoy discovering new technologies, and there is never a shortage of things to learn. I am based in the beautiful <span class="highlight">Pacific Northwest</span>, where I spend my summers hiking, camping, and exploring National Parks with my husband, and my spring/fall/winters trying to stay dry by staying inside and watching tv shows, programming or playing games(console or board!).</p>
            <p class="faChev"><FontAwesomeIcon icon={ faChevronDown } size="lg"/></p>
        </div>
    );
}