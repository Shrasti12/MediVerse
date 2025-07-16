// import { useState } from "react";
import "./UpdateDependent.css";
import { Link } from "react-router-dom";

function UpdateDependent() {
  return (
    <>
      <div className="Dependent-container">
        <h1 className="DependentHeading">
          ADD NEW DEPENDENT/CHANGE DEPENDANT STATUS
        </h1>
        <Link to="/" className="home-button">
          🏠 Home
        </Link>
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
        <form className="Dependent-Form">
          <label>
            Dependent Name*:
            <input type="text" required placeholder="Enter name"></input>
          </label>
          <label>
            Gender:
            <select>
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
            <input type="Date" required></input>
          </label>
          <label>
            Relation:
            <select>
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
            Attachement*:
            <input type="file" required />
          </label>
          <label>
            Reason:
            <select>
              <option value="">--Select--</option>
              <option value="G">Change Gender</option>
              <option value="DOB">Change Date of Birth</option>
              <option value="R">Change relation</option>
              <option value="N">Change in name</option>
              <option value="A">Change Status active</option>
            </select>
          </label>
          <label>(Please Attach Self & Dependant Declaration Form)</label>
        </form>
        <ul className="button-list" >
          <li>
            <button>Change Request</button>
            <button>Inactive</button>
            <button>Clear</button>
            <button>Back</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UpdateDependent;
