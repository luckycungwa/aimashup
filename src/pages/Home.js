import React from 'react';
import Button from '../components/Button'; // Importing the Button component
import FileUpload from '../components/FileUpload'; // Importing the FileUpload component

const Home = () => {
  
  return (
    <div className='container'>
      {/* Add your component content here */}
      {/* <p>My Home page</p> */}
      <FileUpload /> {/* Rendering the FileUpload component */}
      <Button label="Upload" /> {/* Rendering the Button component with a label prop */}
    </div>
  );
};
 
export default Home;
