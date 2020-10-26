import React from 'react';
import { Circle } from './Circle';
import { ToDoText } from './ToDoText';
import { CancelIcon } from './CancelIcon';

export function ToDoItem(props) {


    const {itemText, changeComplete, deleteItem, focusText, editText, focusOut,completed,visibility} = props;
    const itemId = props.id;
    return (
        <div className="todo-item" id={props.id}>
            <Circle changeComplete={changeComplete} completed={completed} />
            <ToDoText  itemText={itemText} focusText={focusText} visibility={visibility} editText={editText} itemId={itemId} focusOut={focusOut}/>
            <CancelIcon  deleteItem={deleteItem}/>
        </div>
    )

};