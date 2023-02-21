import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

let tasks1 = [
  {id: 1, title: "CSS", isDone: true},
  {id: 2, title: "JS", isDone: true},
  {id: 3, title: "React", isDone: false},
]

let tasks2 = [
  {id: 1, title: "Milk", isDone: false},
  {id: 2, title: "Butter", isDone: true},
  {id: 3, title: "Beer", isDone: false},
]

let tasks3 = [
  {id: 1, title: "Avatar", isDone: false},
  {id: 2, title: "Titanic", isDone: true},
  {id: 3, title: "Terminator", isDone: false},
]

function App() {
  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="What to buy" tasks={tasks2}  />
      <Todolist title="Movies"  tasks={tasks3}  />
    </div>
  );
}

export default App;
