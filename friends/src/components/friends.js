import React, { useState, useEffect } from 'react';
import { axiousWithAuth } from "../authorization/axiosWithAuth";
import Friend from './friend';

function Friends() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiousWithAuth()
            .get("/api/friends")
            .then(res => setFriends(res.data))
            .catch(err => alert('Error getting friends list \n' + err));
        
    }, [])

        return(
            <div>
                <h1>Friends</h1>
                <ul>
                    {friends.map((friend) => {
                        return (<Friend key={friend.id} friend={friend}></Friend>)
                    })}
                </ul>
            </div>
        );
}

export default Friends;