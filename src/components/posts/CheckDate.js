import React from 'react'

export const CheckDate = (props) => {
    const OriginalTimeStamp = <span className="single__originalTimeStamp">posted at {new Date(props.post.originalTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}  - </span>
    const EditedTimeStamp = <span className="single__editedTimeStamp">edited at {new Date(props.post.editedTimeStamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}  - </span>
    return (props.post.editedTimeStamp === 0 ? [OriginalTimeStamp] : [OriginalTimeStamp, EditedTimeStamp])
}