import React from 'react';
import Button from '@material-ui/core/Button';

export function ToDoBottomBar(props) {

    const {showAll, showActive, showComp, deleteComp} = props;

    return (
        <div className="todo-bottom-bar">
        <Button  className="btn btn-category" id="btn-all" onClick={showAll}>all</Button>
        <Button  className="btn btn-category" id="btn-active" onClick={showActive}>active</Button>
        <Button  className="btn btn-category" id="btn-completed" onClick={evt => showComp(evt)}>completed</Button>
        <Button  className="btn clear-btn" id='clear-btn' onClick={evt => deleteComp(evt)} >clear completed</Button>
        </div>
    )
}