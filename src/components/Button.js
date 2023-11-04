import React from 'react';
import FileUpload from './FileUpload'; // Adjust the path to match the actual location of FileUpload.js


function Button(props) {
  return (
    <div>
      
      <button onClick={props.onClick} className='Btn'>
        {props.label}
      </button>

    </div>
  );
}

export default Button;
