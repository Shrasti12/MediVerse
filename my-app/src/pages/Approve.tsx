import React, { useState } from "react";
import "./UploadPrescription.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/sideBar";

const Approve: React.FC = () => {
  const [formData, setFormData] = useState({
    employeeNo: "",
    amountClaimed: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleApprove = () => {
    console.log("Approved:", formData);
  };

  const handleReject = () => {
    console.log("Rejected:", formData);
  };

  const handleClear = () => {
    setFormData({
      employeeNo: "",
      amountClaimed: "",
    });
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="main-container">
      {/* <aside className="sidebar">
        <h2 className="sidebar-title">MediVerse</h2>
        <nav className="sidebar-nav">
          <Link to="/" className="nav-item">
            <i className="fa fa-home"></i> Home
          </Link>
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
        <form className="form-section">
          <h1 className="heading">Approve Claim - SBU Head</h1>

          <label>
            Employee No:
            <input
              type="text"
              name="employeeNo"
              value={formData.employeeNo}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Available amount for Reimbursement:
            <input type="text" value="0" readOnly />
          </label>

          <label>
            Amount Claimed:
            <input
              type="text"
              name="amountClaimed"
              value={formData.amountClaimed}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Total claimed amount till now:
            <input type="text" value="0" readOnly />
          </label>

          <div className="btn-group" style={{ marginTop: "2rem" }}>
            <button type="button" className="submit-btn-U" onClick={handleApprove}>
              Approve
            </button>
            <button type="button" className="submit-btn-U" onClick={handleReject}>
              Reject
            </button>
            <button type="button" className="submit-btn-U" onClick={handleClear}>
              Clear
            </button>
            <button type="button" className="submit-btn-U" onClick={handleBack}>
              Back
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Approve;
