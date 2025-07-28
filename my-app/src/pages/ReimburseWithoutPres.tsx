import React, { useState } from "react";

import "./UploadPrescription.css";
// import Sidebar from "../components/sideBar";

interface ReimburseFormData {
  empName: string;
  financialYear: string;
  reimbursementType: string;
  eligibleAmount: string;
  availableAmount: string;
  approvedAmount: string;
  pendingAmount: string;
  claimAmount: string;
  declaration: boolean;
}

const ReimbursementWithoutPrescription = () => {
  const initialState: ReimburseFormData = {
    empName: "",
    financialYear: "",
    reimbursementType: "",
    eligibleAmount: "",
    availableAmount: "",
    approvedAmount: "",
    pendingAmount: "",
    claimAmount: "",
    declaration: false,
  };

  const [formData, setFormData] = useState<ReimburseFormData>(initialState);
  const [submittedData, setSubmittedData] = useState<ReimburseFormData[]>([]);

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
    setSubmittedData((prev) => [...prev, formData]);
    setFormData(initialState);
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  const handleBack = () => {
    setSubmittedData((prev) => prev.slice(0, -1));
  };

  const currentYear = new Date().getFullYear();
  const financialYears = Array.from({ length: 5 }, (_, i) => {
    const start = currentYear - i - 1;
    const end = currentYear - i;
    return `${start}-${end.toString().slice(2)}`;
  });

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
      {/* <Sidebar/> */}

      

      <main className="upload-container">
        <form className="form-section" onSubmit={handleSubmit}>
          <h1 className="heading">Reimbursement (No Prescription)</h1>

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
              <select
                name="financialYear"
                value={formData.financialYear}
                onChange={handleChange}
                required
              >
                <option value="">Select Financial Year</option>
                {financialYears.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </fieldset>

          <fieldset>
            <legend>Reimbursement Info</legend>
            <div className="grid-2">
              <select
                name="reimbursementType"
                value={formData.reimbursementType}
                onChange={handleChange}
                required
              >
                <option value="">Select Reimbursement Type</option>
                <option value="medicine">Medicine</option>
                <option value="equipment">Medicine Equipments</option>
                <option value="pathology">Pathology Test</option>
                <option value="others">Others</option>
              </select>

              <input
                type="number"
                name="eligibleAmount"
                value={formData.eligibleAmount}
                onChange={handleChange}
                placeholder="Eligible Amount"
                required
              />

              <input
                type="number"
                name="availableAmount"
                value={formData.availableAmount}
                onChange={handleChange}
                placeholder="Available amount for Reimbursement"
                required
              />

              <input
                type="number"
                name="approvedAmount"
                value={formData.approvedAmount}
                onChange={handleChange}
                placeholder="Amount approved up to now"
                required
              />

              <input
                type="number"
                name="pendingAmount"
                value={formData.pendingAmount}
                onChange={handleChange}
                placeholder="Claim submitted but not approved"
                required
              />

              <input
                type="number"
                name="claimAmount"
                value={formData.claimAmount}
                onChange={handleChange}
                placeholder="Amount being claimed"
                required
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Declaration</legend>
            <label className="declaration">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
              />
              <span>
                I certify that the expenses are genuine and being claimed only for my dependent
                family members as defined in RITES Medical Attendance Rules. I accept that in case
                any claim is found to be improper / false / non-permissible under the rules at any
                point of time, I shall be liable for recovery of the amount besides Disciplinary
                action as deemed fit.
              </span>
            </label>
          </fieldset>

          <div className="btn-group">
            <button
              type="submit"
              className="submit-btn-U"
              disabled={!formData.declaration}
            >
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

        {submittedData.length > 0 && (
          <div className="data-table">
            <h2>Submitted Data</h2>
            <table>
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Financial Year</th>
                  <th>Reimbursement Type</th>
                  <th>Eligible Amount</th>
                  <th>Available</th>
                  <th>Approved</th>
                  <th>Pending</th>
                  <th>Claimed</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.empName}</td>
                    <td>{data.financialYear}</td>
                    <td>{data.reimbursementType}</td>
                    <td>{data.eligibleAmount}</td>
                    <td>{data.availableAmount}</td>
                    <td>{data.approvedAmount}</td>
                    <td>{data.pendingAmount}</td>
                    <td>{data.claimAmount}</td>
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

export default ReimbursementWithoutPrescription;
