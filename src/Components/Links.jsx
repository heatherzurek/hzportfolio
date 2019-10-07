import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function Links(){
    return(
        <div class="links">
            <a href="mailto:heather.zurek@gmail.com"><FontAwesomeIcon icon={ faEnvelope } size="lg"/></a> <a href="http://www.twitter.com/sleepywifi"><FontAwesomeIcon icon={ faTwitter } size="lg"/></a> <a href="http://www.github.com/heatherzurek"><FontAwesomeIcon icon={ faGithubAlt } size="lg"/></a> <a href="http://www.linkedin.com/in/heatherzurek"><FontAwesomeIcon icon={ faLinkedin } size="lg"/></a>
        </div>
    );
}