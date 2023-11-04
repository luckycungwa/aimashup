import React from 'react';
import Button from '../components/Button';
import FileUpload from '../components/fileUpload';

const Home = () => {
  
  return (
    <div>
      {/* Add your component content here */}
      <p>My Home page</p>
      <FileUpload />
      <Button label="Upload" />  
    </div>
  );
};

export default Home;
