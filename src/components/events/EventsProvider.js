import React, { useState, createContext } from "react"

export const EventContext = createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([]) 

    const getEvents = (userId) => {
        return fetch(`http://localhost:8088/events?userId=${userId}`)
            .then(res => res.json())
            .then(setEvents)
    }
    
    const addEvents = eventEntry => {
        return fetch('http://localhost:8088/events'),
         {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventEntry)
        })
    }
   
    return (
        <EventContext.Provider value={{
            events, getEvents, addEvents
        }}>
            {props.children}
        </EventContext.Provider>
    )

}