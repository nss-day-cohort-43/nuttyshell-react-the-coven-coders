import React, { useContext, useState, useEffect } from 'react'
import { TaskCard } from './TaskCard'
import { TaskContext } from './TasksProvider'

export const TaskList = (props) => {
    const { task, getTask } = useContext(TaskContext)

    useEffect(() => {
        getTask()
    }, [])

    return (
        <div className="taskContainer">
            {
                task.map(task => {
                    return <TaskCard key={task.id} name={task.name} />
                })
            }
        </div>
    )
}