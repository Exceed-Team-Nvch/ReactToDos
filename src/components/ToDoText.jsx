import React from "react";
import { Cancel, Check } from "@material-ui/icons";
import { useState } from "react";

export function ToDoText(props) {

  const { itemText, editText, itemId } = props;
  const [editingTask, setEditingTask] = useState(false);
  const [val, setVal] = useState(itemText);

  function inputChange(input) {
    setVal(input.value);
  }

  function inputClick(input) {
    setEditingTask(true);
    if (!input.value) {
      setVal(itemText);
    }
  }

  function editTask(key, val, itemId) {
    if (key === "Enter") {
      if (val) {
        editText(val, itemId);
        setEditingTask(false);
      }
    }
  }

  function cancelEditTask() {
    setEditingTask(false);
  }

  return (
    <div className="todo-text-wrapper">
      {!editingTask ? (
        <span
          className="todo-text"
          onDoubleClick={(evt) => inputClick(evt.target)}
        >
          {itemText}
        </span>
      ) : (
        <div className="input-wrapper">
          <input
            onChange={(evt) => inputChange(evt.target, evt.key)}
            value={val}
            onKeyPress={(evt) => editTask(evt.key, val, itemId)}
            className="input-item"
          />
          <Check
            fontSize="small"
            onClick={() => {
              editTask("Enter", val, itemId);
            }}
            color="primary"
            className="icon"
          />
          <Cancel
            fontSize="small"
            onClick={() => cancelEditTask()}
            color="secondary"
            className="icon"
          />
        </div>
      )}
    </div>
  );
}
