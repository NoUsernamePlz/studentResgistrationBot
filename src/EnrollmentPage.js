import React from 'react';

import './App.css';

import { Link } from 'react-router-dom';


const EnrollmentPage = () => {
  return (
    <div className="enrollment-page">
      <h1>Enter into Student Info System</h1>
      <Link to={"/chatbot"}>
      <button>Enroll Now!</button>
      </Link>
      

    </div>
  );
};

export default EnrollmentPage;
