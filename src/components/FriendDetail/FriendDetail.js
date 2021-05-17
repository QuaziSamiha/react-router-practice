import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    //create route parameter and read from route parameter 
    const { friendId } = useParams();

    // two ways to navigate dynamic route
    const [friend, setFriend] = useState({}); // initial value empty object
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <div>
            {/* <h3>this is friend detail component</h3> */}

            {/* create route parameter and read from route parameter  */}
            <h3>this is friend detail component : {friendId}</h3>

            {/*  two ways to navigate dynamic route */}
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
            <p>phone: {friend.phone}</p>
            <p>website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;