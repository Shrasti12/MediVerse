import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Your custom CSS

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (section: string) => {
    setOpenDropdown((prev) => (prev === section ? "" : section));
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">MediVerse</h2>
      <nav className="sidebar-nav">
        <Link to="/" className="nav-item">
          Home
        </Link>

        <div className="nav-group">
          <button
            className="nav-item"
            onClick={() => toggleDropdown("Medical Reimbursement")}
          >
            <i className="fa fa-plus-circle"></i> Medical Reimbursement
          </button>
          {openDropdown === "Medical Reimbursement" && (
            <div className="dropdown-content">
              <Link to="/upload" className="dropdown-link">
                Upload Prescription
              </Link>
              <Link to="/reimbursement/with" className="dropdown-link">
                Reimbursement with Prescription
              </Link>
              <Link to="/reimbursement/without" className="dropdown-link">
                Reimbursement without Prescription
              </Link>
            </div>
          )}
        </div>

        <div className="nav-group">
          <button
            className="nav-item"
            onClick={() => toggleDropdown("dependent")}
          >
            <Link to="/update/dependent" className="update">
              Update Dependent Details
            </Link>
          </button>
          {/* {openDropdown === 'track' && (
            <div className="dropdown-content">
              <Link to="/dependent" className="dropdown-link">Pending</Link>
              <Link to="/track/approved" className="dropdown-link">Approved</Link>
            </div>
          )} */}
        </div>

        <div className="nav-group">
          <button
            className="nav-item"
            onClick={() => toggleDropdown("Validation")}
          >
            <i className="fa fa-cog"></i> Validation
          </button>
          {openDropdown === "Validation" && (
            <div className="dropdown-content">
              <Link to="/approve" className="dropdown-link">
                Approve Employee medical Reimbursement Claim
              </Link>
              {/* <Link to="/settings/security" className="dropdown-link">Security</Link> */}
            </div>
          )}
        </div>

        <div className="nav-group">
          <button
            className="nav-item"
            onClick={() => toggleDropdown("Reports")}
          >
            <i className="fa fa-cog"></i> Reports
          </button>
          {openDropdown === "Reports" && (
            <div className="dropdown-content">
              <Link to="/dependent" className="dropdown-link">
                Employee Dependent Status{" "}
              </Link>
              <Link to="/PresStatus" className="dropdown-link">
                Prescription Status
              </Link>
              <Link to="/ReimburseStatus" className="dropdown-link">
                {" "}
                Medical Reimbursement Status{" "}
              </Link>
              <Link to="/ReimburseReport" className="dropdown-link">
                Reimbursement Report
              </Link>
              <Link to="/reimburs/report/nopres" className="dropdown-link">
                Medical Reimbursement report without prescription{" "}
              </Link>
              <Link to="/HospitalList" className="dropdown-link">
                Hospital List
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
