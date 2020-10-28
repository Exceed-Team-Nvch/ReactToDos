import React from 'react';

export function Circle(props) {

    const changeComplete = props.changeComplete;

    return (
        <div className="circle" onClick={evt => changeComplete(evt.currentTarget.parentElement.id)}>
            <span className={`check-icon ${(props.completed) ? 'visible' : '' }`} ></span>
        </div>
    )
}