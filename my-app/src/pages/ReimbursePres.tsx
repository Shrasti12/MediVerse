import React, { useState } from 'react';
import './UploadPrescription.css';

const ReimbursementWithPrescription: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    relation: '',
    disease: '',
    doctorType: '',
    hospitalName: '',
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Submit to backend logic here
  };

  const handleClear = () => {
    setFormData({
      name: '',
      age: '',
      relation: '',
      disease: '',
      doctorType: '',
      hospitalName: '',
      file: null,
    });
  };

  return (
    <div className="upload-container">
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter Age"
          onChange={handleChange}
          required
        />
        <select name="relation" value={formData.relation} onChange={handleChange} required>
          <option value="" disabled>Select Relation</option>
          <option value="father">Father</option>
          <option value="mother">Mother</option>
          <option value="sibling">Sibling</option>
          <option value="child">Child</option>
          <option value="self">Self</option>
          <option value="other">Other</option>
        </select>
        <select name="disease" value={formData.disease} onChange={handleChange} required>
          <option value="" disabled>Select Disease</option>
          <option value="cancer">Cancer</option>
          <option value="covid">COVID</option>
          <option value="kidney">Kidney Failure</option>
          <option value="heart">Heart Attack</option>
          <option value="hive">HIVE</option>
          <option value="general">General</option>
          <option value="other">Other</option>
        </select>
        <select name="doctorType" value={formData.doctorType} onChange={handleChange} required>
          <option value="" disabled>Select Doctor Type</option>
          <option value="rites">RITES Consultant</option>
          <option value="mdms">MD/MS/MDS</option>
          <option value="mbbs">MBBS/BAMS</option>
          <option value="bds">BDS</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          name="hospitalName"
          value={formData.hospitalName}
          placeholder="Enter Hospital Name"
          onChange={handleChange}
          required
        />
        <input type="file" accept=".pdf,.jpg,.png" onChange={handleFileChange} required />
        
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default ReimbursementWithPrescription;
