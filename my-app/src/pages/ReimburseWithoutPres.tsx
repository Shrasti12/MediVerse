import React, { useState } from 'react';
import './ReimburseWithoutPres.css';
import { Link } from 'react-router-dom';

function ReimbursementWithoutPrescription() {
  const [, setReimbursementType] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    
    <div className="reimburse-no-container">
      <Link to="/" className="home-button">
        🏠 Home
      </Link>
      <h1 className="heading">Reimbursement (No Prescription)</h1>

      <form className="reimburse-no-form">
        <label>
          Employee Name:
          <input type="text" value="Shrasti Agrawal" readOnly />
        </label>

        <label>
          Financial Year:
          <select>
            <option value="">Select</option>
            <option>2023-24</option>
            <option>2024-25</option>
            <option>2025-26</option>
          </select>
        </label>

        <label>
          Reimbursement Type:
          <select onChange={(e) => setReimbursementType(e.target.value)}>
            <option value="">Select</option>
            <option>Medicine</option>
            <option>Medicine Equipments</option>
            <option>Pathology Test</option>
            <option>Others</option>
          </select>
        </label>

        <label>Eligible amount for:
          <input type="number" placeholder="Enter eligible amount" />
        </label>

        <label>Available amount for Reimbursement:
          <input type="number" placeholder="Enter available amount" />
        </label>

        <label>Amount approved up to now:
          <input type="number" placeholder="Enter approved amount" />
        </label>

        <label>Claim submitted but not approved:
          <input type="number" placeholder="Enter pending amount" />
        </label>

        <label>Amount being claimed:
          <input type="number" placeholder="Enter claim amount" />
        </label>

        <label className="declaration">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span>
            I certify that the expenses are genuine and being claimed only for my dependent family members as defined in RITES Medical Attendance Rules. I accept that in case any claim is found to be improper/false/non-permissible under the rules at any point of time, I shall be liable for recovery of the amount besides Disciplinary action as deemed fit.
          </span>
        </label>

        <button type="submit" disabled={!isChecked}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReimbursementWithoutPrescription;
