import React, { useState } from "react";
import './TodoList.css'

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState([]);

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  }
  function addTask() {
    if(newTask.trim() !== ""){
    setTasks([...tasks,newTask]);
    setNewTask("");}
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i)=>
    i !==index);
    setTasks(updatedTasks);
    
  }

  function moveTaskUp(index) {
    if(index > 0){
        const updatedTasks =[...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = 
        [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks)

    }
  } //

  function moveTaskDown(index) {

    if(index < tasks.length - 1){
        const updatedTasks =[...tasks];
        [updatedTasks[index], updatedTasks[index +1]] = 
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks)

    }
  }
  return (
    <div className="to-do-list">
      <h1>ToDoRodo</h1>
      <div>
        <input 
        type="text"
        placeholder="Enter a task.."
        value={newTask}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        
       
        
        />
          
        <button 
        className="add-button"
        onClick={addTask}
     
        
        >
            Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index)=>
        <li key={index} >
            <span className="text"> {task} </span>
              <button
              className="delete-button"
              onClick={()=> deleteTask(index)}  >
              Delete
              </button>
              <button
              className="move-button"
              onClick={()=> moveTaskUp(index)}  >
             UP
              </button>
              <button
              className="move-button"
              onClick={()=> moveTaskDown(index)}  >
              Down
              </button>
             </li>
        )}
      </ol>
    </div>
  );
};

export default TodoList;
