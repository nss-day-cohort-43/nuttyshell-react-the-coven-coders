// Created by Sam Edwards
import React from 'react'

export const FriendCard = props => (
    <div className="friend__card">
        <span className="friend__name">{props.props}</span>
        <button className="friend__delete">✘</button>
    </div>
)
