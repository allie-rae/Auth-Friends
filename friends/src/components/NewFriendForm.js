import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const NewFriendForm = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    console.log("friendform", newFriend)

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => {
                console.log("newfriendform res.data", res.data);
                setNewFriend({
                    newFriend: res.data
                })
                setNewFriend({
                    name: '',
                    age: '',
                    email: ''
                })
                props.setIsFetching(!props.isFetching)
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                placeholder="Name"
                value={newFriend.name}
                onChange={handleChange}
                className="friendInput"
            />
            <input
                name="age"
                placeholder="Age"
                value={newFriend.age}
                onChange={handleChange}
                className="friendInput"
            />
            <input
                name="email"
                placeholder="Email"
                value={newFriend.email}
                onChange={handleChange}
                className="friendInput"
            />
            <button className="friendInput">Add Friend</button>
        </form>
    )
}

export default NewFriendForm;