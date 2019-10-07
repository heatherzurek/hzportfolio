import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    return(
        <div>
            <h2>Projects</h2>
            <div class="projectBg">
            <h3><a href="https://npsclone.firebaseapp.com/">National Park Service Clone</a></h3>
            <p class="paraFormat">This site allows you to see a list of the States and their co-ordinating national parks, in the future you
                will be able to route to different pages in additional to the state and national parks page to learn more
                about the national park.</p> 
                <p class="stackFormat">Stack: <span class="highlight-2">Angular, TypeScript, HTML, CSS</span></p>
                <a href="https://github.com/heatherzurek/angular-nps-clone">View Code</a>
            </div>
            <div class="projectBg">
            <h3><a href="https://github.com/heatherzurek/pupster">Pupster</a></h3>
            <p class="paraFormat">A web application that uses a quiz to query shelter pet profiles from a relational database and return
                matches to users. Created on a four person team, my contributions included UI/UX, Database Calls and MVC
                logic.</p>
                <p class="stackFormat">Stack: <span class="highlight-2">C#, .NET, mySQL, HTML, CSS</span></p>
                <a href="https://github.com/heatherzurek/pupster">View Code</a>
            </div>
            <div class="projectBg">
           <h3><a href="https://heatherzurek.github.io/wanderlist-camping/">Wanderlist</a></h3>
            <p class="paraFormat">A web application that helps the user pack for camping trips based on terrain and season. It allows the user
                to choose the time of year, where they'll be going and it will suggest packing lists based on their
                selections. Created on a three person team, my contributions included UI/UX, and JavaScript logic.</p>
                <p class="stackFormat">Stack: <span class="highlight-2">JavaScript, jQuery, HTML, CSS</span></p>
                <a href="https://github.com/heatherzurek/wanderlist-camping">View Code</a>
            </div>
            <div class="projectBg">
            <h3><a href="https://settlers-ofcatan.firebaseapp.com/">Settlers of Catan</a></h3>
            <p class="paraFormat">A functional webbased multi-player game, based on the board game Settlers of Catan. Group porject with 4 team
                mates, done in 3 days. My contribution was mainly design and CSS focused.</p>
                <p class="stackFormat">Stack: <span class="highlight-2">Angular, JavaScript, HTML, CSS</span></p>
                <a href="https://github.com/heatherzurek/settlers-of-catan">View Code</a>
            </div>
            <div class="projectBg">
            <h3><a href="https://warm-er.firebaseapp.com/#/">Warmer</a></h3>
            <p class="paraFormat">An educational mobile first app that allows the user to learn about different causes of climate change and be
                able to track their impact on the environment.</p>
                <p class="stackFormat">Stack: <span class="highlight-2">React, Node.js, HTML, CSS, Material</span></p>
                <p><a href="https://github.com/heatherzurek/warmer">View Code</a></p>
            </div>
            <p>You can view more on my <a href="www.github.com/heatherzurek">Github</a></p>
            <p class="faChev"><FontAwesomeIcon icon={ faChevronDown } size="lg"/></p>
        </div>
    );
}