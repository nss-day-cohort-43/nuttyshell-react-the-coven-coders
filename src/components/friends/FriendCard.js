// Created by Sam Edwards
import React from 'react'

export const FriendCard = props => {
    debugger
    return <>
    <div className="friend__card">
        <span class="friend__name">{props.props}</span>
        <button className="friend__delete">✘</button>
    </div>
    </>
}
