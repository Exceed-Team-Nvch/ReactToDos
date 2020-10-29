import React from "react";
import { useState, useEffect } from "react";
import { ToDoBottomBar } from "./ToDoBottomBar";
import { ToDoInput } from "./ToDoInput";
import { ToDoItem } from "./ToDoItem";
import axios from 'axios';

export function ToDoWrapper() {


  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [linkApi, setlinkApi] = useState('https://simple-api-todo.herokuapp.com/api/todo');


  function addItem(text) {
    const task = { text , isDone: false};
    axios.post( linkApi, task ).then((res) => {
      setTasks(tasks.concat([{ text, isDone: false, _id: res.data.data._id }]));  
      }
    );
    
  }

  useEffect(() => { 
    const fetchData = async () => {
      const result = await axios(
        linkApi,
      );
      setTasks(result.data.data);
    };
    fetchData();
  }, []);

  function changeComplete(id) {
    
    axios.put(`${linkApi}/${id}`).then((res) => {
      setTasks(tasks.map((task) => {
         if (task._id === id) {
           task.isDone = !task.isDone;
         }
         return task;
      }))
    });
  }

  function deleteItem(item) {
    axios.delete(`${linkApi}/${item.id}`).then((res) => {
      setTasks(tasks.filter((task) => task._id !== item.id));
    });
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
    setTasks(tasks.filter((task) => { 
      if (task.isDone) {
        axios.delete(`${linkApi}/${task._id}`);
      } else {
        return task;
      }
    }));
    setFilter("all");
  }

  function editText(itemInputValue, id) {
    setTasks(
      tasks.map((task) => {
        if (task._id === id) {
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
        return tasks.filter((task) => task.isDone);
      case "active":
        return tasks.filter((task) => !task.isDone);
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
            id={item._id}
            key={item._id}
            deleteItem={deleteItem}
            itemText={item.text}
            completed={item.isDone}
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
