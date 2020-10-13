import React from "react"

export const EventHTML = ({ event }) => (
    <section className="singleEvent">
        <div>Event: { event.name }</div>
        <div>Date: { event.date }, { event.time }</div>
        <div>Location: { event.locationName }</div>
    </section>
)