import React from 'react';

export function Circle(props) {

    const changeComplete = props.changeComplete;
    const id = props.id

    return (
        <div className="circle" onClick={evt => changeComplete(id)}>
            <span className={`check-icon ${(props.completed) ? 'visible' : '' }`} ></span>
        </div>
    )
}