import React, { useState } from 'react'

export const NewTask = (props) => {

    const [taskEntered, setTaskEntered] = useState('')

return (
    <div className="ui form taskInput">

        <div className="inline field">
            <label>Add Task</label>
            <input type="test" placeholder="Your task..." value={taskEntered} 
            onChange={event => setTaskEntered(event.target.value)} />

             <i onClick={props.taskEntered.bind(this, taskEntered)}className="plus icon addTask"></i>
            
        </div>

    </div>
    )
}