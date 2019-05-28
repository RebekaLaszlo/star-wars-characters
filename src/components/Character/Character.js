import React from 'react';

const character = (props) => (
    <button className="btn btn-outline-secondary mr-4 mt-3" onClick={props.onClick}>{props.name}</button>
);

export default character;
