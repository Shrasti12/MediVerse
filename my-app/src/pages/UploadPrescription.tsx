import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UploadPrescription.css";

interface FormData {
  empName: string;
  relation: string;
  state: string;
  district: string;
  hospital: string;
  doctor: string;
  doctorType: string;
  disease: string;
  receiptNo: string;
  date: string;
  prescriptionFile: File | null;
}

const UploadPrescription = () => {
  const initialState: FormData = {
    empName: "",
    relation: "",
    state: "",
    district: "",
    hospital: "",
    doctor: "",
    doctorType: "",
    disease: "",
    receiptNo: "",
    date: "",
    prescriptionFile: null,
  };

  const [formData, setFormData] = useState<FormData>(initialState);
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);

  // ✅ Fetch states on page load
  useEffect(() => {
  const fetchStates = async () => {
    try {
      const response = await axios.get(
        "http://localhost:60266/Employees/PresscriptionDetails.aspx/BindStateName"
      );
      console.log("States fetched:", response.data.d);
      setStates(response.data.d);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };
  fetchStates();
}, []);


  // ✅ Fetch districts when state is selected
  const handleStateChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = e.target.value;
    setFormData((prev) => ({ ...prev, state: selectedState }));

    try {
      const response = await axios.post(
        "http://localhost:60266/Employees/PresscriptionDetails.aspx/GetDistricts",
        JSON.stringify({ stateCode: parseInt(selectedState) }),
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Districts fetched:", response.data.d);
      setDistricts(response.data.d);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      prescriptionFile: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.prescriptionFile) {
      alert("Please upload a prescription PDF.");
      return;
    }
    setSubmittedData((prev) => [...prev, formData]);
    setFormData(initialState);
  };

  const handleClear = () => setFormData(initialState);
  const handleBack = () => setSubmittedData((prev) => prev.slice(0, -1));

  return (
    <div className="upload-page">
      <main className="upload-container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">Upload Prescription</h1>

            <fieldset>
              <legend>Employee Details</legend>
              <div className="grid-2">
                <input
                  type="text"
                  name="empName"
                  value={formData.empName}
                  onChange={handleChange}
                  placeholder="Employee Name"
                  required
                />
                <input type="text" placeholder="S.No" value="6" readOnly />
                <input type="text" placeholder="Attempts" value="1" readOnly />
                <select
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Relation</option>
                  <option value="self">Self</option>
                  <option value="spouse">Spouse</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="child">Child</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </fieldset>

            <fieldset>
              <legend>Hospital / Doctor</legend>
              <div className="grid-2">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleStateChange}
                  required
                >
                  <option value="">Select State</option>
                  {states.map((state: string, idx: number) => (
                    <option key={idx} value={idx + 1}>
                      {state}
                    </option>
                  ))}
                </select>

                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select District</option>
                  {districts.map((district: string, idx: number) => (
                    <option key={idx} value={district}>
                      {district}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  placeholder="Hospital Name*"
                  required
                />
                <input
                  type="text"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  placeholder="Doctor's Name"
                />
                <select
                  name="doctorType"
                  value={formData.doctorType}
                  onChange={handleChange}
                >
                  <option value="">Select Doctor Type</option>
                  <option value="Rites_consultant">RITES Consultant</option>
                  <option value="md_ms_mds">MD/MS/MDS</option>
                  <option value="mbbs_bams">MBBS/BAMS/BDS</option>
                  <option value="other">Other</option>
                </select>
                <select
                  name="disease"
                  value={formData.disease}
                  onChange={handleChange}
                >
                  <option value="">Select Disease</option>
                  <option value="cancer">Cancer</option>
                  <option value="covid">COVID</option>
                  <option value="kidney_failure">Kidney Failure</option>
                  <option value="heart_attack">Heart Attack</option>
                  <option value="hiv">HIV</option>
                  <option value="general">General</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </fieldset>

            <fieldset>
              <legend>Receipt Details</legend>
              <div className="grid-2">
                <input
                  type="text"
                  name="receiptNo"
                  value={formData.receiptNo}
                  onChange={handleChange}
                  placeholder="Receipt No"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <div className="upload-box">
                  <label className="upload-label">
                    Upload Prescription <span className="required">*</span>
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    required
                  />
                  <small className="upload-note">
                    (Only PDF files are accepted)
                  </small>
                </div>
              </div>
            </fieldset>

            <div className="btn-group">
              <button type="submit" className="submit-btn-U">
                Submit
              </button>
              <button
                type="button"
                className="submit-btn-U"
                onClick={handleBack}
                disabled={submittedData.length === 0}
              >
                Back
              </button>
              <button
                type="button"
                className="submit-btn-U"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {submittedData.length > 0 && (
          <div className="data-table">
            <h2>Submitted Data</h2>
            <table>
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Relation</th>
                  <th>State</th>
                  <th>District</th>
                  <th>Hospital</th>
                  <th>Doctor</th>
                  <th>Doctor Type</th>
                  <th>Disease</th>
                  <th>Receipt No</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.empName}</td>
                    <td>{data.relation}</td>
                    <td>{data.state}</td>
                    <td>{data.district}</td>
                    <td>{data.hospital}</td>
                    <td>{data.doctor}</td>
                    <td>{data.doctorType}</td>
                    <td>{data.disease}</td>
                    <td>{data.receiptNo}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default UploadPrescription;
