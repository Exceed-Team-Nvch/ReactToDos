import React from 'react';



 export function ToDoInput(props) {
    
    const addItem = props.addItem;

    return (
        <input className="todo-input" id="todo-input" onKeyPress={({ target: {value}, key, currentTarget}) => addItem(value, key, currentTarget)} /> 
    )
}