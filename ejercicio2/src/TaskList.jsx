import React from 'react';

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;