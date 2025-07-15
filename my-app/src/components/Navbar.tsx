import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className="logo">RITES</div>
      <div className="Tagline">Reimbursements Made Effortless</div>

      <ul className="nav-links">
        <li className="dropdown1">
          <span className="dropbtn">Medical Reimbursement ▾</span>
          <ul className="dropdown-menu1">
            <li>
              <Link to="/upload">Upload Prescription</Link>
            </li>
            <li>
              <Link to="/reimbursement/with">Reimburse With Prescription</Link>
            </li>
            <li>
              <Link to="/reimbursement/without">
                Reimburse Without Prescription
              </Link>
            </li>
          </ul>
        </li>
        <li className="Update">
          <Link to="Update/dependent">Update Dependent Details</Link>
        </li>
        <li className="dropdown2">
          <span className="dropbtn">Validation ▾</span>
          <ul className="dropdown-menu2">
            <li>
              <Link to="/approve">
                Approve Employee Medical Reimbursement Claim{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown3">
          <span className="dropbtn">Reports ▾</span>
          <ul className="dropdown-menu3">
            <li>
              <Link to="/Dependent">Employee Dependent Status </Link>
            </li>
            <li>
              <Link to="/PresStatus">Prescription Status </Link>
            </li>
            <li>
              <Link to="/ReimburseStatus">Medical Reimbursement Status </Link>
            </li>
            <li>
              <Link to="/ReImburseReport">Reimbursement Report </Link>
            </li>
            <li>
              <Link to="/reimburs/report/nopres">
                Medical Reimbursement without prescription{" "}
              </Link>
            </li>
            <li>
              <Link to="/HospitalList">Hospital List </Link>
            </li>
          </ul>
        </li>
      </ul>

      <div className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <span className="search-icon">🔍</span>
      </div>
    </nav>
  );
};

export default Navbar;
