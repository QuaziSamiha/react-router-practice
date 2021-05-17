import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const { name, email, id } = props.friend;

    // two ways to navigate dynamic route 
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
 
    return (
        <div className='friendStyle'>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>

            {/* create route parameter and read from route parameter */}
            {/* <p>id: <Link to='/friend'>show detail about {id}</Link></p> */}

            {/* make dynamic */}
            {/* <p>id: <Link to={`/friend/${id}`}>show detail about {id}</Link></p> */}

            {/*  two ways to navigate dynamic route */}

            <Link to={`/friend/${id}`}>
                <button className='btn btn-success'>show detail about of {id}</button>
            </Link>

            <br /> <br />
            <button onClick={() => handleClick(id)} className='btn btn-danger'>click me</button>
        </div>
    );
};

export default Friend;