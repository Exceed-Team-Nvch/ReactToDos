import React from 'react';

export function ToDoText(props) {

    const {itemText, focusText} = props;

    return (
        <span className="todo-text" onDoubleClick={(evt) => focusText(evt.target)}>{itemText} <input className="visually-hidden input-item"/></span>
    )
}