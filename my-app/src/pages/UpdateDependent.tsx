import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./UploadPrescription.css";
import Sidebar from "../components/sideBar";

interface DependentFormData {
  dependentName: string;
  gender: string;
  dob: string;
  relation: string;
  attachment: File | null;
  reason: string;
}

const UpdateDependent = () => {
  const initialState: DependentFormData = {
    dependentName: "",
    gender: "",
    dob: "",
    relation: "self",
    attachment: null,
    reason: "",
  };

  const [formData, setFormData] = useState<DependentFormData>(initialState);
  const [submittedData, setSubmittedData] = useState<DependentFormData[]>([]);

  // Handle form input changes (except file)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input separately
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({
      ...prev,
      attachment: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation: require dependentName and dob and attachment
    if (
      !formData.dependentName.trim() ||
      !formData.dob ||
      !formData.attachment
    ) {
      alert("Please fill all required fields and upload attachment.");
      return;
    }

    setSubmittedData((prev) => [...prev, formData]);
    setFormData(initialState);
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  const handleBack = () => {
    setSubmittedData((prev) => prev.slice(0, -1));
  };

  return (
    <div className="upload-page">
      {/* <aside className="sidebar">
        <h2 className="sidebar-title">MediVerse</h2>

        <nav className="sidebar-nav">
          <button className="nav-item">
            <i className="fa fa-plus-circle"></i>
            <Link to="/" className="home-button">
              Home
            </Link>
          </button>

          <button className="nav-item active">
            <i className="fa fa-plus-circle"></i> New Claim
          </button>
          <button className="nav-item">
            <i className="fa fa-check-circle"></i> Track Status
          </button>
          <button className="nav-item">
            <i className="fa fa-cog"></i> Settings
          </button>
        </nav>
      </aside> */}
      <Sidebar/>

      <main className="upload-container">
        <div className="form-table-wrapper">
          <form className="form-section" onSubmit={handleSubmit}>
            <h1 className="heading">
              ADD NEW DEPENDENT/CHANGE DEPENDANT STATUS
            </h1>

            <p
              style={{
                marginBottom: "1.5rem",
                textAlign: "center",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Enter details for SELF first then proceed for other Relations.
            </p>

            <label>
              Dependent Name*:
              <input
                type="text"
                name="dependentName"
                required
                placeholder="Enter name"
                value={formData.dependentName}
                onChange={handleChange}
              />
            </label>

            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Please select one…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Non-Binary</option>
                <option value="other">Other</option>
                <option value="Prefer not to answer">Perfer not to Answer</option>
              </select>
            </label>

            <label>
              Date of Birth*:
              <input
                type="date"
                name="dob"
                required
                value={formData.dob}
                onChange={handleChange}
              />
            </label>

            <label>
              Relation:
              <select
                name="relation"
                value={formData.relation}
                onChange={handleChange}
              >
                <option value="self">Self</option>
                <option value="H">Husband</option>
                <option value="W">Wife</option>
                <option value="D">Daughter</option>
                <option value="S">Son</option>
                <option value="M">Mother</option>
                <option value="F">Father</option>
                <option value="B">Brother</option>
                <option value="S">Sister</option>
              </select>
            </label>

            <label>
              Attachment*:
              <input
                type="file"
                name="attachment"
                required
                onChange={handleFileChange}
                accept=".pdf,.jpg,.png"
              />
            </label>
             <label>(Please Attach Self & Dependant Declaration Form)</label>

            <label>
              Reason:
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              >
                <option value="">--Select--</option>
                <option value="G">Change Gender</option>
                <option value="DOB">Change Date of Birth</option>
                <option value="R">Change relation</option>
                <option value="N">Change in name</option>
                <option value="A">Change Status active</option>
              </select>
            </label>

            {/* <label>(Please Attach Self & Dependant Declaration Form)</label> */}

            <div className="btn-group" style={{ marginTop: "2rem" }}>
              <button type="submit" className="submit-btn-U">
                Change Request
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

          {submittedData.length > 0 && (
            <div className="data-table">
              <h2>Submitted Dependents</h2>
              <table>
                <thead>
                  <tr>
                    <th>Dependent Name</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                    <th>Relation</th>
                    <th>Attachment</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.dependentName}</td>
                      <td>{data.gender}</td>
                      <td>{data.dob}</td>
                      <td>{data.relation}</td>
                      <td>{data.attachment ? data.attachment.name : "No file"}</td>
                      <td>{data.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UpdateDependent;
