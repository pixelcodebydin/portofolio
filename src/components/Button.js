import React from 'react';
import './css/Button.css';

function Button({ desc, id }) {
    return (
        <button className="btn" id={id}>{desc}</button>
    );
}

export default Button;