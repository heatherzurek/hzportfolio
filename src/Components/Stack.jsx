import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Stack() {
    return(
        <div class="techStack">
            <h2>Tech Stack</h2>
            <span>JavaScript</span> 
            <span>Node.js</span>
            <span>React</span>
            <span>C#</span>
            <span>.NET</span>
            <span>Go</span>
            <span>Angular</span>
            <span>TypeScript</span>
            <span>SQL</span>
            <span>Jest</span>
            <span>and always learning!</span>
            <p class="faChev"><FontAwesomeIcon icon={ faChevronDown } size="lg"/></p>
        </div>
    );
}