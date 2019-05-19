import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
    <div className="UserOutput">
        <p>This app is created by {props.username}</p>
        <p>Have a nice day!</p>
    </div>
    );
}

export default UserOutput;
