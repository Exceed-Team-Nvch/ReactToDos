import React from 'react';

export function ToDoBottomBar(props) {

    const showAll = props.showAll;
    const showActive = props.showActive;
    const showComp = props.showComp;
    const deleteComp = props.deleteComp;
    return (
        <div className="todo-bottom-bar">
        <button className="btn btn-category" id="btn-all" onClick={showAll}>all</button>
        <button className="btn btn-category" id="btn-active" onClick={showActive}>active</button>
        <button className="btn btn-category" id="btn-completed" onClick={evt => showComp(evt)}>completed</button>
        <button className="btn clear-btn" id='clear-btn' onClick={evt => deleteComp(evt)} >clear completed</button>
        </div>
    )
}