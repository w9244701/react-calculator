import React from 'react';

function Button(props) {

    return (
        <div className="button" onClick={() => props.handclick(props.value)}><span>{props.name}</span></div>
    )
}


export default Button;