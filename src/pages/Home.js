import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import FileUpload from '../components/FileUpload';
import Dashboard from '../pages/Dashboard';
import SuccessCard from '../components/SuccessCard';
import FailedCard from '../components/FailedCard';

const Home = () => {
  const [isSuitable, setIsSuitable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleCard = () => {
    setIsSuitable(!isSuitable);
  };

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='container'>
      {/* Add your component content here */}
      {/* <p>My Home page</p> */}
      <FileUpload /> {/* Rendering the FileUpload component */}
      <Button label="Submit" onClick={toggleCard} />
      <br></br>
      <br></br>
      {isLoading ? (
        <Dashboard />
      ) : (
        isSuitable ? <Dashboard isSuitable={isSuitable} /> : <FailedCard isSuitable={isSuitable} />
      )}
    </div>
  );
};

export default Home;