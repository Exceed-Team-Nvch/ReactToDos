import React from "react";
import { useState, useEffect } from "react";
import { ToDoBottomBar } from "./ToDoBottomBar";
import { ToDoInput } from "./ToDoInput";
import { ToDoItem } from "./ToDoItem";

export function ToDoWrapper() {
  const [id, setId] = useState(0);

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addItem(text) {
    setTasks(tasks.concat([{ text, completed: false, id: id }]));
    setId(id + 1);
  }

  useEffect(() => {
    const taskes = JSON.parse(localStorage.getItem("tasks"));
    setId(JSON.parse(localStorage.getItem("id")));
    if (taskes) {
      setTasks(taskes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, id]);

  function changeComplete(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === parseInt(id, 10)) {
          task.completed = !task.completed;
          return task;
        }
        return task;
      })
    );
  }

  function deleteItem(item) {
    setTasks(tasks.filter((task) => task.id !== parseInt(item.id)));
  }
  
  function showAll() {
    setFilter("all");
  }

  function showActive() {
    setFilter("active");
  }

  function showComp() {
    setFilter("completed");
  }

  function deleteComp() {
    setTasks(tasks.filter((task) => !task.completed));
    setFilter("all");
  }

  function editText(itemInputValue, id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.text = itemInputValue;
        }
        return task;
      })
    );
  }

  function filterTasks() {
    switch (filter) {
      case "all":
        return tasks;
      case "completed":
        return tasks.filter((task) => task.completed);
      case "active":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }

  return (
    <div className="todo-wrapper">
      <ToDoInput addItem={addItem} />
      {filterTasks().map((item) => {
        return (
          <ToDoItem
            id={item.id}
            key={item.id}
            deleteItem={deleteItem}
            itemText={item.text}
            completed={item.completed}
            changeComplete={changeComplete}
            editText={editText}
          />
        );
      })}
      <ToDoBottomBar
        showAll={showAll}
        showActive={showActive}
        showComp={showComp}
        deleteComp={deleteComp}
      />
    </div>
  );
}
