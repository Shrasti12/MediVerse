import React, { useState } from 'react'; // to manage form data 
import './UploadPrescription.css';
import { Link  } from 'react-router-dom';

const UploadPrescription = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    patientId: '',
    date: '',
    prescriptionFile: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // this fn runs when the input changes 
    const { name, value, files } = e.target; 
    if (name === 'prescriptionFile' && files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();// prevents the deafult form submission 
    alert('Form submitted!');
    console.log(formData);
  };

  return (
    <div className="upload-page">
      <Link to="/" className="home-button">
        🏠 Home
      </Link>
      <div className="form-card">
        <h2 className="form-title">Upload Prescription</h2>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="patientId" placeholder="Patient ID / Policy Number" value={formData.patientId} onChange={handleChange} required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <input type="file" name="prescriptionFile" accept="image/*" onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadPrescription;
