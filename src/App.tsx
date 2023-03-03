import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterTypeValues = 'all' | 'completed' | 'actives'

function App() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    {id: v1(), title: "CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "React", isDone: false},
    {id: v1(), title: "Redux", isDone: false},
  ]);
  
  let [filter, setFilter] = useState<FilterTypeValues>('all');

  function changeFilter(value: FilterTypeValues) {
    setFilter(value);
  }

  function removeTask(id: string) {
    let resultTask = tasks.filter(t => t.id !== id);
    setTasks(resultTask);  
  } 

  function addTask(newTaskTitle: string) {
    let newTask = {id: v1(), title: newTaskTitle, isDone: false};
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  let taskForList = tasks

  if(filter === 'completed') {
    taskForList = tasks.filter(t => t.isDone === true);
  } else if (filter === 'actives') {
    taskForList = tasks.filter(t => t.isDone !== true);
  } else if (filter === 'all') {
    taskForList = tasks
  }

  return (
    <div className="App">
      <Todolist 
        title="What to learn"
        tasks={taskForList}
        removeTask = {removeTask}
        changeFilter = {changeFilter}
        addTask = {addTask}/>     
    </div>
  );
}

export default App;
