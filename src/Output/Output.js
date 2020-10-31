import React from 'react';
import './Output.css'

const output = (props) => {
    return (
        <div className="Output">
            <p>The username you entered is: {props.username}</p>
            <p>This is another paragraph.</p>
        </div>
    )
};

export default output;
