import React, { useContext, useState, useEffect } from 'react'
import { NewTask } from './NewTask'
import { TaskCard } from './TaskCard'
import { TaskContext } from './TasksProvider'

export const TaskList = (props) => {
    const { task, getTask, deleteTask, addTask } = useContext(TaskContext)

    useEffect(() => {
        getTask()
    }, [])

    const taskDelete = (taskId) => {
        deleteTask(taskId)
    }

    const taskAdd = (name) => {
       addTask({
           name: name,
           complete: false,
           dueDate: new Date(Date.now()).toLocaleDateString([], {year: '2-digit', month:'2-digit', day:'2-digit'}),
           userId: + localStorage.getItem("activeUser")
       })
    }
    return (
        <section className="taskContainer">
            <h2>Tasks</h2>
            <NewTask key={task.id} taskEntered={taskAdd}/>
            {
                task.map(task => {
                    return <TaskCard key={task.id} name={task.name} delete={taskDelete.bind(this, task.id)} dateDue={task.dueDate}/>
                })
            }
        </section>
    )
}