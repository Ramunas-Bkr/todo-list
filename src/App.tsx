import React, { useState } from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterTypeValues = 'all' | 'completed' | 'actives'

function App() {  
  function removeTask(id: number) {
    let resultTask = tasks.filter(t => t.id !== id);
    setTasks(resultTask);  
  }     
 
  let [tasks, setTasks] = useState<Array<TaskType>>([
    {id: 1, title: "CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: false},
  ]);

  let [filter, setFilter] = useState<FilterTypeValues>('all');

  function changeFilter(value: FilterTypeValues) {
    setFilter(value);
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
        changeFilter = {changeFilter} />     
    </div>
  );
}

export default App;
