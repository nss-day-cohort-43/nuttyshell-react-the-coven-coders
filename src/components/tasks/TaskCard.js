import React from 'react'
import 'semantic-ui-react'
import './Task.css'



export const TaskCard = (props) => {
return(
    <div className="ui for">
        <div className="inline field">
            <div className="ui checkbox taskCheckbox">

                <input checked={"true"}type="checkbox" tabIndex="0" className="hidden" />
                <label>{props.name}</label>
            </div>
            <i className="edit icon editTask"></i>
            <i onClick={props.delete} className="trash icon deleteTask"></i>
            <span className="dateDue">- {props.dateDue}</span>
        </div>
    </div>
  
    )
}