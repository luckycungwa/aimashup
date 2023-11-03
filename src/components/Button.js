import React from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick} className='Btn'>
      {props.label}
    </button>
  );
}

export default Button;
