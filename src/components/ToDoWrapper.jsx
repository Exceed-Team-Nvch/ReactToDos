import React from 'react';
import { useState } from 'react';
import { ToDoBottomBar } from './ToDoBottomBar';
import { ToDoInput } from './ToDoInput';
import { ToDoItem } from './ToDoItem';


export function ToDoWrapper()  {

    const [id,setId] = useState(0);
    const [tasks, setTasks] = useState([]);

    function addItem(text,key,input) {
        if (key === 'Enter' &&  text) 
        {
            setTasks(tasks.concat([{ text, completed: false, id: id }]));
            setId(id + 1);
            input.value = '';
        }
    }
    function changeComplete(curItem,curElem) {
        setTasks(tasks.map((task) => { 
            if (task.id === parseInt(curItem.id,10)) {
                task.completed = !task.completed;
                curElem.classList.toggle('visible');
                return task;
            } 
            return task;          
        }));
    }
    function deleteItem(item) {
        setTasks(tasks.filter(task => task.id !== parseInt(item.id)));
    }
    function showAll() {
        setTasks(tasks.map(task => {
            let item = document.getElementById(task.id);
            item.style.display = 'block';
            return task;
        }));
    }
    function showActive() {
        setTasks(tasks.map(task => {
            let item = document.getElementById(task.id);
            item.style.display = task.completed ? 'none': 'block';
            return task;
        }));
    }
    function showComp () {
        setTasks(tasks.map(task => {
            let item = document.getElementById(task.id);
            item.style.display = task.completed ? 'block': 'none';
            return task;
        }));
    }
    function deleteComp() {
        setTasks(tasks.filter(task => !task.completed ));
    }
    function focusText(itemText, obj) {
            itemText.textContent = '';
            console.log(itemText.children);
    }
    return (

        <div className="todo-wrapper" >
            <ToDoInput addItem={addItem} /> 
            {tasks.map((item) => (
                <ToDoItem  id={item.id} deleteItem={deleteItem} key={item.id} itemText={item.text} changeComplete={changeComplete} focusText={focusText}/>          
            )
            )}
            <ToDoBottomBar showAll={showAll} showActive={showActive} showComp={showComp} deleteComp={deleteComp}/>
        </div>

    )
};