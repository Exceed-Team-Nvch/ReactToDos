import React from 'react';

export const CancelIcon = ({ deleteItem }) => (
        <span className="cancel-icon" onClick={evt => deleteItem(evt.target.parentElement)}></span>
)