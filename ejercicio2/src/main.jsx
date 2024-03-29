import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import './index.css';

const tasks = [
  { id: 1, text: 'Hacer la tarea de matemáticas', completed: false },
  { id: 2, text: 'Ir al supermercado', completed: true },
  { id: 3, text: 'Llamar a mamá', completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <TaskList tasks={tasks} />
  </React.StrictMode>,
  document.getElementById('root')
);
