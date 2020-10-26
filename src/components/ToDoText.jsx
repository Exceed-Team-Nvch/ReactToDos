import React from 'react';
import { Cancel, Check, FiberPin } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { ToDoWrapper } from './ToDoWrapper.jsx';

export function ToDoText(props) {

    const {itemText, editText, focusOut, itemId} = props;
    const [editingTask, setEditingTask] = useState(false);
    const [val, setVal] = useState(itemText);


    function inputChange(input,inputKey) {
        input.focus();
        setVal(input.value);
    }
    function inputClick() {
        setEditingTask(true);
    }

    return (
        <div className="todo-text-wrapper">
           { !editingTask? <span className="todo-text" onDoubleClick={(evt) => inputClick(evt.target)}>{itemText}</span> :
           <div className="input-wrapper">
           <input  id={`input${itemId}`} onChange={(evt) => inputChange(evt.target,evt.key)} value={val} onKeyPress={(evt) => editText(evt.target,evt.key,evt.target.value,setEditingTask)} onBlur={evt => setEditingTask(false)}  className={`input-item`}/> 
           <Check fontSize="small" onClick={(evt) => {const elem = evt.target.previousElementSibling; editText(elem, 'Enter', elem.value, setEditingTask)}} color="primary" className={`icon`}/>
           <Cancel fontSize="small" color="secondary" className={`icon`} />
           </div>
                }
            
        </div>

    )
}