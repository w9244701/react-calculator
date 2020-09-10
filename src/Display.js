import React from 'react';

function Display(props) {
    return (
        <div class="display">
            <div class="result" >
                <span class="operator">{props.operator}</span>
                {props.result}</div>
        </div>
    )
}

export default Display;
