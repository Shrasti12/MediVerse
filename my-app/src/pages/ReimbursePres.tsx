import React, { useState } from "react";
import "./UploadPrescription.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/sideBar";

interface ReimburseData {
  empName: string;
  financialYear: string;
  prescriptionNo: string;
  slNo: string;
  totalEligibility: string;
  previousBalance: string;
  amountClaimed: string;
  balanceAmount: string;
  amountBeingClaimed: string;
  disease: string;
  declarationAccepted: boolean;
}

const ReimburseWithPrescription = () => {
  const initialState: ReimburseData = {
    empName: "",
    financialYear: "",
    prescriptionNo: "",
    slNo: "0",
    totalEligibility: "",
    previousBalance: "",
    amountClaimed: "",
    balanceAmount: "",
    amountBeingClaimed: "",
    disease: "",
    declarationAccepted: false,
  };

  const [formData, setFormData] = useState<ReimburseData>(initialState);
  const [submitted, setSubmitted] = useState<ReimburseData[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.declarationAccepted) {
      setSubmitted((prev) => [...prev, formData]);
      setFormData(initialState);
    } else {
      alert("Please accept the declaration before submitting.");
    }
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  return (
    <div className="upload-page">
      {/* <aside className="sidebar">
        <h2 className="sidebar-title">MediVerse</h2>
        <nav className="sidebar-nav">
          <Link to="/" className="nav-item">
                       Home
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
        <form className="form-section" onSubmit={handleSubmit}>
          <h1 className="heading">Reimbursement with Prescription</h1>
          <p className="instruction">
            Enter Consultation Fee, Lab/Path test charges and Medicine cost
            related to one Prescription at a time in chronological order.
          </p>

          <fieldset>
            <legend>Employee Details</legend>
            <div className="grid-2">
              <input
                type="text"
                name="empName"
                value={formData.empName}
                onChange={handleChange}
                placeholder="Employee Name*"
                required
              />

              {/* Financial Year Dropdown */}
              <select
                name="financialYear"
                value={formData.financialYear}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Financial Year*
                </option>
                {Array.from({ length: 5 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={`${year}-${year + 1}`}>
                      {year}-{year + 1}
                    </option>
                  );
                })}
              </select>

              <input
                type="text"
                name="prescriptionNo"
                value={formData.prescriptionNo}
                onChange={handleChange}
                placeholder="Prescription Sl. No*"
                required
              />

              <input type="text" name="slNo" value={formData.slNo} readOnly />
            </div>
          </fieldset>

          <fieldset>
            <legend>Claim Details</legend>
            <div className="grid-2">
              <input
                type="text"
                name="totalEligibility"
                value={formData.totalEligibility}
                onChange={handleChange}
                placeholder="Total Eligibility Amount*"
                required
              />
              <input
                type="text"
                name="previousBalance"
                value={formData.previousBalance}
                onChange={handleChange}
                placeholder="Previous Balance*"
                required
              />
              <input
                type="text"
                name="amountClaimed"
                value={formData.amountClaimed}
                onChange={handleChange}
                placeholder="Amount Claimed up to now*"
                required
              />
              <input
                type="text"
                name="balanceAmount"
                value={formData.balanceAmount}
                onChange={handleChange}
                placeholder="Balance Amount*"
                required
              />
              <input
                type="text"
                name="amountBeingClaimed"
                value={formData.amountBeingClaimed}
                onChange={handleChange}
                placeholder="Amount Being Claimed*"
                required
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Disease Info</legend>
            <div className="grid-2">
              <select
                name="disease"
                value={formData.disease}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Disease
                </option>
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
            <legend>Declaration</legend>
            <p className="declaration-text">
              I certify that the expenses are genuine and being claimed only for
              my dependent family members as defined in RITES Medical Attendance
              Rules. I accept that in case any claim is found to be improper/
              false/ non-permissible under the rules at any point of time, I
              shall be liable for recovery of the amount besides Disciplinary
              action as deemed fit.
            </p>
            <label>
              <input
                type="checkbox"
                name="declarationAccepted"
                checked={formData.declarationAccepted}
                onChange={handleChange}
              />{" "}
              I agree
            </label>
          </fieldset>

          <div className="btn-group">
            <button type="submit" className="submit-btn-U">
              Submit
            </button>
            <button type="button" className="submit-btn-U">
              Modify
            </button>
            <button type="submit" className="submit-btn-U">
              Print Preview{" "}
            </button>
            <button type="submit" className="submit-btn-U">
              Back
            </button>
            <button type="reset" className="submit-btn-U" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>

        {/* {submitted.length > 0 && (
          <div className="data-table">
            <h2>Submitted Reimbursements</h2>
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Year</th>
                  <th>Prescription No</th>
                  <th>Total Eligibility</th>
                  <th>Previous Bal</th>
                  <th>Claimed</th>
                  <th>Balance</th>
                  <th>Claiming</th>
                  <th>Disease</th>
                </tr>
              </thead>
              <tbody>
                {submitted.map((data, index) => (
                  <tr key={index}>
                    <td>{data.empName}</td>
                    <td>{data.financialYear}</td>
                    <td>{data.prescriptionNo}</td>
                    <td>{data.totalEligibility}</td>
                    <td>{data.previousBalance}</td>
                    <td>{data.amountClaimed}</td>
                    <td>{data.balanceAmount}</td>
                    <td>{data.amountBeingClaimed}</td>
                    <td>{data.disease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}
      </main>
    </div>
  );
};

export default ReimburseWithPrescription;
