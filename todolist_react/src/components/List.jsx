import React from 'react'

const List = ({ tasks, setTasks, setEditIndex, setNewTask }) => {
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };
  return (
<div className="tasklist">
    <ul>
    {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <div>
              <button className="editbtn" onClick={() => editTask(index)}>Edit</button>
              <button className="deletebtn" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
        
    </ul>
</div>
  )
}

export default List
