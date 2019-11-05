import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import pupster from './Images/pupster.png';
import catan from './Images/catan.png';
import npsclone from './Images/npsclone.png';
import wanderlist1 from './Images/wanderlist1.png';
import wanderlist2 from './Images/wanderlist2.png';

export default function Projects() {
    return(
        <div>
            <h2>Projects</h2>
        <div class="projSection"> 
            <div class="projectBg">
            <img src={npsclone} alt="national park clone website screenshot"/>
            <p class="paraFormat">This site allows you to see a list of the States and their co-ordinating national parks, in the future you
                will be able to route to different pages in additional to the state and national parks page to learn more
                about the national park.</p> 
                <p class="stackFormat">Stack: <span class="highlight-2">Angular, TypeScript, HTML, CSS</span></p>
                <a href="https://github.com/heatherzurek/angular-nps-clone">View Code</a> | <a href="https://npsclone.firebaseapp.com/">View Deployed Site</a>
            </div>
            <div class="projectBg">
            <img src={pupster} alt="dog background"/>
            <p class="paraFormat">A web application that uses a quiz to query shelter pet profiles from a relational database and return
                matches to users. Created on a four person team, my contributions included UI/UX, Database Calls and MVC
                logic.</p>
                <p class="stackFormat">Stack: <span class="highlight-2">C#, .NET, mySQL, HTML, CSS</span></p>
                <a href="https://github.com/heatherzurek/pupster">View Code</a>
            </div>
            <div class="projectBg">
           <img src={wanderlist1} alt="screenshot of website"/>
           <img src={wanderlist2} alt="screenshot of website"/>
                <p class="paraFormat">A web application that helps the user pack for camping trips based on terrain and season. It allows the user
                to choose the time of year, where they'll be going and it will suggest packing lists based on their
                selections. Created on a three person team, my contributions included UI/UX, and JavaScript logic.</p>
                <p class="stackFormat">Stack: <span class="highlight-2">JavaScript, jQuery, HTML, CSS</span></p>
                <a href="https://github.com/heatherzurek/wanderlist-camping">View Code</a> | <a href="https://heatherzurek.github.io/wanderlist-camping/">View Deployed Site</a>

            </div>
            <div class="projectBg">
            <h3><a href="https://settlers-ofcatan.firebaseapp.com/">Settlers of Catan</a></h3>
            <img src={catan} alt="photo of catan game"/>
            <p class="paraFormat">A functional webbased multi-player game, based on the board game Settlers of Catan. Group porject with 4 team
                mates, done in 3 days. My contribution was mainly design and CSS focused.</p>
                <p class="stackFormat">Stack: <span class="highlight-2">Angular, JavaScript, HTML, CSS</span></p>
                <a href="https://github.com/heatherzurek/settlers-of-catan">View Code</a>
            </div>
            {/* <div class="projectBg">
            <h3><a href="https://warm-er.firebaseapp.com/#/">Warmer</a></h3>
            <p class="paraFormat">An educational mobile first app that allows the user to learn about different causes of climate change and be
                able to track their impact on the environment.</p>
                <p class="stackFormat">Stack: <span class="highlight-2">React, Node.js, HTML, CSS, Material</span></p>
                <p><a href="https://github.com/heatherzurek/warmer">View Code</a></p>
            </div> */}
            </div>
            <p>You can view more on my <a href="www.github.com/heatherzurek">Github</a></p>
            <p class="faChev"><FontAwesomeIcon icon={ faChevronDown } size="lg"/></p>
        </div>
    );
}