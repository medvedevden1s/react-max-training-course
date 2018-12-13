import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid red'
    }

    return <input type="text"
                  style={style /* inline style */} 
                  onChange={props.changed /* onChange provided by React */}
                  value={props.currentName /* two way binding */}
            />;
}

export default userInput;