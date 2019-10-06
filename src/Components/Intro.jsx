import React from 'react';
import Name from './Name';

export default function Intro() {
    return(
        <div>
            <h1>Hello, I'm</h1>
            <Name />
            {/* <h1 class="helloHeather">Heather Zurek!</h1> */}
            <h3><span class="highlight-2">(</span>I like writing <span class="highlight">code</span>, and love <span class="highlight">learning</span> new things!<span class="highlight-2">)</span></h3>
            <hr/>
        </div>
    );
}