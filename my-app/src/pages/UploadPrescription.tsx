import React, { useState } from 'react'; // to manage form data 
import './UploadPrescription.css';
import { Link } from 'react-router-dom';

function UploadPrescription(){
  

  return (
    <>
    <div className="Upload-container">
        <h1 className="UploadHeading">
          Upload Prescription
        </h1>
        <Link to="/" className="home-button">
          🏠 Home
        </Link>
    </div></>
  )
      
};

export default UploadPrescription;
