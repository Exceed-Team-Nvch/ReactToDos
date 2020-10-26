import React from 'react';
import { useState , useEffect } from 'react';
import { ToDoBottomBar } from './ToDoBottomBar';
import { ToDoInput } from './ToDoInput';
import { ToDoItem } from './ToDoItem';



export function ToDoWrapper()  {

    const [id,setId] = useState(() => {

        if (localStorage.getItem('id')) {
            return  JSON.parse(localStorage.getItem('id'));
        } else {
            return 0;
        }
    });

    const [tasks, setTasks] = useState(() => {
        if (localStorage.getItem('tasks')) {
           return  JSON.parse(localStorage.getItem('tasks'));
        } else {
            return [];
        }
    });
    const [editingTask, setEditingTask] = useState({ id: 1, text: 2});

        function addItem(text,key,input) {
        if (key === 'Enter' &&  text) 
        {   
            setTasks(tasks.concat([{ text, completed: false, id: id }]));
            setId(id + 1);
            input.value = '';
        }
    }

    useEffect(() => {

        localStorage.setItem('id', JSON.stringify(id));
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }, [tasks, id]);

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
        localStorage.setItem('tasks', JSON.stringify(tasks));
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


    function editText (editItem,key,value,setEditingTask) {
       
        if (key === 'Enter') 
        {
            if (value) {
                setTasks(tasks.map((task) => {
                    if (`input${task.id}` == editItem.id ) {
                          task.text = value;
                          setEditingTask(false);
                          return task;
                    } else {
                        return task;
                    }
                  }));    
            } else {
                setEditingTask(false);
            }          
        } 
    }

    function focusOut (editItem) {
        
    }

    return (

        <div className="todo-wrapper" >
            <ToDoInput addItem={addItem} /> 
            {tasks.map((item) => (
                <ToDoItem  id={item.id} deleteItem={deleteItem} key={item.id} itemText={item.text} completed={item.completed} changeComplete={changeComplete}  editText={editText} focusOut={focusOut}/>          
            )
            )}
            <ToDoBottomBar showAll={showAll} showActive={showActive} showComp={showComp} deleteComp={deleteComp}/>
        </div>

    )
};