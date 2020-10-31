import React from 'react';

const input = (props) => {
    
    const inputStyle = {
            color: 'red'
    };

    return (
        <div className="Input" style={inputStyle}>
            <p>Enter your new Username:</p>
            <input type="text" onChange={props.changed} value={props.username}/>
        </div>
    )
};

export default input;