import './UploadPrescription.css'; 
import { useState } from 'react';
import Sidebar from "../components/sideBar";

import { Link, useNavigate } from "react-router-dom";

function ReimburseStatus() {
  const navigate = useNavigate(); // ✅ Hook to navigate

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form logic here if any
  };
  
  const [financialYear, setFinancialYear] = useState("");


  const handleBack = () => {
    navigate("/"); 
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
            <h1 className="heading">Employee Reimbursement Status</h1>
             <div className="form-group" style={{ margin: "1.5rem 0" }}>
              <label htmlFor="financialYear" style={{ marginRight: "1rem" }}>
                Select Financial Year:
              </label>
              <select
                id="financialYear"
                value={financialYear}
                onChange={(e) => setFinancialYear(e.target.value)}
                className="dropdown"
              >
                <option value="">-- Select Year --</option>
                <option value="2023-2024">2023-2024</option>
                <option value="2022-2023">2022-2023</option>
                <option value="2021-2022">2021-2022</option>
              </select>
            </div>
            

            <div className="btn-group" style={{ marginTop: "2rem" }}>
              <button
                onClick={() => window.open("/path/to/file.pdf", "_blank")}
                type="button"
                className="submit-btn-U"
              >
                View Report
              </button>

              <button
                type="button"
                className="submit-btn-U"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}



export default ReimburseStatus;
