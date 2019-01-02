import React from 'react';

const Display = props => {
  const stringResult = props.input;
  if (props.error.length === 0) {
    return <p>{stringResult}</p>;
  } else
    return (
      <>
        <p>{stringResult}</p>
        <p>{props.error}</p>
      </>
    );
};

export default Display;
