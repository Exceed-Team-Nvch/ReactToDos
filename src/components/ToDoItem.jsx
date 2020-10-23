import React from 'react';
import { Circle } from './Circle';
import { ToDoText } from './ToDoText';
import { CancelIcon } from './CancelIcon';

export function ToDoItem(props) {


    const {itemText, changeComplete, deleteItem, focusText} = props;

    return (
        <div className="todo-item" id={props.id}>
            <Circle changeComplete={changeComplete} />
            <ToDoText  itemText={itemText} focusText={focusText} />
            <CancelIcon  deleteItem={deleteItem}/>
        </div>
    )

};