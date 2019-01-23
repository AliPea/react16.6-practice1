import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className="output">
      <p>{ props.userName }</p>
      <p>Give me a new username!</p>
      </div>
    );
};

export default userOutput;
