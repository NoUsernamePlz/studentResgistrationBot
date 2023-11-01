import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

const ThankYouPage = () => {
  // Get the current location object
  const location = useLocation();
  
  // Parse the search string of the URL to extract query parameters
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const age = params.get('age');
  
  console.log(name);

  return (
    <div className="thank-you-page">
      <h1>Your name {name} aged {age} has been added to the student system.<br></br> You may now exit.</h1>
    </div>
  );
};

export default ThankYouPage;
