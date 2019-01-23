import React from 'react';

const userInput = (props) => {
  const myStyle = {
    margin: 'auto',
    width: '47%',
    padding: '12px 20px',
    border: '1px solid gray',
    display: 'block'
  };

  return <input
  type="text"
  style={myStyle}
  onChange={props.changed}
  value={props.currentUserName}
  />;
}

export default userInput;
