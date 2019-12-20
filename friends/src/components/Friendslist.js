import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './FriendCard'
import NewFriendForm from './NewFriendForm';

const Friendslist = () => {

    const [allFriends, setAllFriends] = useState({ friends: [] })
    const [isFetching, setIsFetching] = useState(false)

    const getFriends = () => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                setAllFriends({
                    friends: res.data
                })
                console.log("res.data in friendsList", res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getFriends()
    }, [isFetching])

    console.log("friendslist", allFriends)

    return (
        <>
            <h1>Friends:</h1>
            <NewFriendForm isFetching={isFetching} setIsFetching={setIsFetching} />
            {allFriends.friends.map(friend => {
                return <FriendCard friend={friend} key={friend.id} />
            })}
        </>
    )
}

export default Friendslist;