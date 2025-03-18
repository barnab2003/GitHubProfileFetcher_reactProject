import React, { useState, useEffect } from "react";
import List from "./List";

const Input = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? newTask : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setNewTask("");
    }
  };

  return (
    <>
      <div className="taskinputcontainer">
        <form onSubmit={submitHandler}>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            placeholder="Add a new task"
          />
          <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
        </form>
      </div>
      <List tasks={tasks} setTasks={setTasks} setEditIndex={setEditIndex} setNewTask={setNewTask} />
    </>
  );
};

export default Input;

