import React from 'react'
import 'semantic-ui-react'

export const TaskCard = (props) => (

    <div className="ui for">
        <div className="inline field">
            <div className="ui checkbox">
                <input checked={"true"}type="checkbox" tabIndex="0" className="hidden" />
                <label>{props.name}</label>
            </div>
        </div>
    </div>
  
)