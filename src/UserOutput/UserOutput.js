import React from 'react';
import './UserOutput.css';

const userInput = (props) => {
    return(
        <div className='UserOutput'> 
            <p>User name: {props.userName}</p>
        </div>
    ) 
}

export default userInput;