import React from 'react';

export function CancelIcon(props) {

    const deleteItem = props.deleteItem; 

    return (
        <span className="cancel-icon" onClick={evt => deleteItem(evt.target.parentElement)}></span>
    )
}