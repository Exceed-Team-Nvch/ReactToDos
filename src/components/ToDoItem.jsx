import React from 'react';
import { Circle } from './Circle';
import { ToDoText } from './ToDoText';
import { CancelIcon } from './CancelIcon';

export function ToDoItem(props) {

    const {itemText, changeComplete, deleteItem, editText, completed, cancelEditText, id: itemId} = props;
    return (
        <div className="todo-item" id={props.id}>
            <Circle changeComplete={changeComplete} completed={completed} id={itemId}/>
            <ToDoText  itemText={itemText} cancelEditText={cancelEditText} editText={editText} itemId={itemId} />
            <CancelIcon  deleteItem={deleteItem}/>
        </div>
    )

};