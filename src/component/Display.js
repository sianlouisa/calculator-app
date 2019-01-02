import React from 'react';

const Display = props => {
  if (props.error.length === 0) {
    return <p>{props.input}</p>;
  } else
    return (
      <>
        <p>{props.input}</p>
        <p>{props.error}</p>
      </>
    );
};

export default Display;
