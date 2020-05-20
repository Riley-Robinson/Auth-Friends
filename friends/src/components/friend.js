import React, { useState, useeffect} from 'react';
import{ axiosWithAuth } from '../authorization/axiosWithAuth';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

    function Friend (props) {

        const [friend, setfriend] = userState({});
        
            useEffect(() => {
                setfriend(props.friend);
            }, [props.friend])

            function unfriend(){
                axiosWithAuth()
                .delete(`/api/friends/${friends.id}`)
                .then(res => alert('Deleted Friend'))
                .catch(err => alert('Error Deleting Friend'))
                .finally(() => window.location.reload())
            }

            return(
                <div>
                    <p>{friend.name}</p>
                    <p>Email: {props.friend.email}</p>
                    <p>Age: {props.friend.age}</p>
                    <button onClick={unfriend}>Unfriend</button>
                    <Link to={{pathname:"/updatefriend", updateProps: {...friend}}}>Update Friend</Link> 
                </div>
            );
    }

    export default Friend;