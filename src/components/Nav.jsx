import React from 'react';
import { Link } from 'react-router-dom';
import Posts from './Posts'

function Nav() {

    return (
        <ul className="nav" >
            <li className="nav-item">
                <Link className="nav-link active" to="/home">Home </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Posts" > Posts</Link>
            </li>

        </ul>
    )
};

export default Nav