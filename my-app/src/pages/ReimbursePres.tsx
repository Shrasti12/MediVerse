import { useState } from "react";
import "./ReimbursePres.css";
import { Link } from "react-router-dom";

function ReimbursementWithPrescription() {
  const [selectedDisease, setSelectedDisease] = useState("");
  const [otherDisease, setOtherDisease] = useState("");
  const [prescriptionCount] = useState(1); // replace with actual count if available

  return (
    <div className="reimburse-container">
      <Link to="/" className="home-button">
        🏠 Home
      </Link>

      <h1 className="heading">Reimbursement With Prescription</h1>
      <p style={{ marginBottom: "1.5rem", textAlign: "center", color: "#333" }}>
        Enter Consultation Fee, Lab/Path test charges and Medicine cost related
        to one Prescription at a time in chronological order.
      </p>

      <form className="reimburse-form">
        <label>
          Employee Name:
          <input type="text" />
        </label>

        <label>
          Financial Year:
          <select>
            <option>2023-24</option>
            <option>2024-25</option>
            <option>2025-26</option>
          </select>
        </label>

        <label>
          Prescription Sl.No:
          <input type="number" value={prescriptionCount + 1} readOnly />
        </label>

        {/* <label>Total Eligibility Amount:
          <input type="text" value="₹ Fund Available" readOnly />
        </label> */}

        <label>
          Previous Balance:
          <input type="number" placeholder="₹ Fund Available" />
        </label>

        <label>
          Amount Claimed up to now:
          <input type="number" placeholder="₹ Total Claimed" />
        </label>

        <label>
          Balance Amount:
          <input type="number" placeholder="₹ Balance Left" />
        </label>

        <label>
          Amount Being Claimed:
          <input type="number" placeholder="Enter amount" />
        </label>

        <label>
          Disease:
          <select onChange={(e) => setSelectedDisease(e.target.value)}>
            <option value="">Select</option>
            <option value="Fever">Fever</option>
            <option value="Infection">Infection</option>
            <option value="Surgery">Surgery</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {selectedDisease === "Other" && (
          <label>
            Specify Disease:
            <input
              type="text"
              value={otherDisease}
              onChange={(e) => setOtherDisease(e.target.value)}
              placeholder="Enter disease name"
            />
          </label>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReimbursementWithPrescription;
