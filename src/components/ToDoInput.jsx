import React from "react";
import { useState } from "react";

export function ToDoInput(props) {
  const [value, setValue] = useState('');
  const addItem = props.addItem;

  function editInput(input) {
    setValue(input.value);
  }

  function keyPressing(value, key, currentTarget) {
    if (key === "Enter" && value) {
      addItem(value, key, currentTarget);
      setValue('');
    }
  }

  return (
    <input
      className="todo-input"
      id="todo-input"
      value={value}
      onChange={(evt) => editInput(evt.target)}
      onKeyPress={({ target: { value }, key, currentTarget }) =>
        keyPressing(value, key, currentTarget)
      }
    />
  );
}
