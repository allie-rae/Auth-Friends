import React from 'react';

const FriendCard = (props) => {
    return (
        <div className="friendCard">
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age} years old</p>
            <p>{props.friend.email}</p>
        </div>
    )
}

export default FriendCard;