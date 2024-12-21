import React from 'react';
import './css/Button.css';

function Button({ desc, id }) {
    return (
        <button className="btn" id={id}>{desc}</button>
    );
}

function ButtonAction({ btnColor, symbol, text }) {
    return (
        <button className={`btn btn-${btnColor}`}><i className={`bi bi-${symbol}`}></i> {text}</button>
    );
}

export { Button, ButtonAction };