import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function Links(){
    return(
        <div>
            <a href="mailto:heather.zurek@gmail.com"><FontAwesomeIcon icon={ faEnvelope }/></a> <a href="http://www.twitter.com/sleepywifi"><FontAwesomeIcon icon={ faTwitter }/></a> <a href="http://www.github.com/heatherzurek"><FontAwesomeIcon icon={ faGithubAlt }/></a> <a href="http://www.linkedin.com/in/heatherzurek"><FontAwesomeIcon icon={ faLinkedin }/></a>
        <hr/>
        </div>
    );
}