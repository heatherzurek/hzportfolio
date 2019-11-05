import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Writing() {
    return(
        <div>
            <h2>Writing</h2>
            <a href="https://dev.to/heatherzurek/the-job-search-woes-and-how-to-say-i-can-learn-that-big">The job search woes and how to say "I can learn that!"</a>
            <p class="faChev"><FontAwesomeIcon icon={ faChevronDown } size="lg"/></p>
        </div>
    )
}