import React from 'react';

export function Circle(props) {

    const changeComplete = props.changeComplete;
    let style;
    (props.completed)? style = 'visible' :  style = '' ;
    return (
        <div className="circle" onClick={evt => changeComplete(evt.currentTarget.parentElement, evt.currentTarget.firstElementChild)}>
            <span className={`check-icon ${style}`} ></span>
        </div>
    )
}