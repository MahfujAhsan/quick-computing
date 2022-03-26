import './QusAns.css';
import React from 'react';

const QusAns = () => {
    return (

        <div className='qusandans-container'>
            <div className='react-works'>
                <h4>How React Works</h4>
                <p>1. React is one of the most popular JavaScript Library. <br /> <br />
                    2. React allows us to effectively re-construct our DOM in JavaScript. <br /> <br />
                    3. JSX is one of The Core Concept of React, it allows us write like HTML code for cleanness, it's Called Syntactical Sugar.<br /> <br />
                    4. React Virtual DOM can efficiently rerender a specified part of our website. <br /> <br />
                    5. React Keys help us to find out every single component for efficiently rerendered. <br /> <br />
                    6. React has a declarative UI structure that really performance matters with react</p>
            </div>
            <div className='props-states'>
                <h4>Props</h4>
                <p>1. Props are used to pass data between React components.<br />
                2. Props can be used to set the internal state based on a prop value in the constructor.<br />
                3. It is Immutable (cannot be modified).<br />
                4. Props are read-only.</p>
                <h4>State</h4>
                <p>1. The state represents parts of an Application that can change.<br />
                2. The state is Mutable and It is local to the component only.<br />
                3. State is both read and write. <br />
                4. It is Mutable ( can be modified).</p>
            </div>
        </div>

    );
};

export default QusAns;