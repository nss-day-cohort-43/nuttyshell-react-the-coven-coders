import React, { useState, createContext } from 'react'

export const TaskContext = createContext()

export const TasksProvider = (props) => {
    const [task, setTask] = useState([])

    const getTask = () => {
        return fetch("http://localhost:8088/tasks")
        .then(response => response.json())
        .then(setTask)
    }

    const addTask = (task) => {
        fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(getTask)
    }
    
    const deleteTask = (taskId) => {
        fetch(`http://localhost:8088/tasks/${taskId}`, {
            method:"DELETE"
        })
        .then(getTask)
    }

    return (
    <TaskContext.Provider value={{
        task, getTask, addTask, deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
    )
    
}