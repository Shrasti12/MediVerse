import React, { useEffect, useState } from "react";
import "./UploadPrescription.css";
import axios from "axios";

interface ReimburseData {
  EmpName: string;
  financialYear: string;
  prescriptionNo: string;
  slNo: string;
  totalEligibility: string;
  previousBalance: string;
  amountClaimed: string;
  amountBeingClaimed: string;
  disease: string;
  declarationAccepted: boolean;
}
interface PageProps {
  empno: string | null;
  employeeData: any;
}

const ReimburseWithPrescription: React.FC<PageProps> = ({
  empno,
  employeeData,
}) => {
  const initialState: ReimburseData = {
    EmpName: empno ? employeeData?.EmpName || "" : "",
    financialYear: "",
    prescriptionNo: "",
    slNo: "0",
    totalEligibility: employeeData?.AmtEligible,
    previousBalance: employeeData?.AmtBalance,
    amountClaimed: employeeData?.AmtApproved,
    amountBeingClaimed: "",
    disease: "",
    declarationAccepted: false,
  };

  const [formData, setFormData] = useState<ReimburseData>(initialState);
  const [diseases, setDiseases] = useState<string[]>([]);
  const [, setEmployeeNames] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [financialYear, setFinancialYear] = useState<string[]>([]);

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
      // Submit logic
      setFormData(initialState);
    } else {
      alert("Please accept the declaration before submitting.");
    }
  };

  const handleClear = () => {
    setFormData(initialState);
    setEmployeeNames([]);
    setSearchTerm("");
  };

  interface Employee {
    Id: number;
    Name: string;
  }

  // ✅ Merged useEffect for fetching diseases + employee names
  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const response = await axios.get(
          "http://localhost:60266/WS/StateService.asmx/GetDiseases",
          { headers: { "Content-Type": "application/json" } }
        );
        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.d;
        if (Array.isArray(data)) {
          setDiseases(data);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching diseases:", error);
      }
    };

    const fetchFinYear = async () => {
      try {
        const response = await axios.get(
          "http://localhost:60266/WS/StateService.asmx/GetFinYear",
          { headers: { "Content-Type": "application/json" } }
        );
        if (Array.isArray(response.data)) {
          setFinancialYear(response.data);
        } else if (response.data.d && Array.isArray(response.data.d)) {
          setFinancialYear(response.data.d);
        } else {
          setFinancialYear([]);
        }
      } catch (error) {
        console.error("Error fetching doctor types:", error);
        setFinancialYear([]);
      }
    };

    const fetchEmployeeNames = async () => {
      if (searchTerm.trim() === "") {
        setEmployeeNames([]);
        return;
      }
      try {
        const response = await axios.get(
          "http://localhost:60266/WS/StateService.asmx/GetEmployeeNames",
          {
            params: { prefix: searchTerm },
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = response.data?.d || response.data;
        if (Array.isArray(data)) {
          setEmployeeNames(data);
        } else {
          setEmployeeNames([]);
        }
      } catch (error) {
        console.error("Error fetching employee names:", error);
      }
    };

    // Run once on mount → diseases
    fetchDiseases();
    // fetchFinYear();

    // Run whenever searchTerm changes → debounce employee search
    if (searchTerm.trim() !== "") {
      const debounceId = setTimeout(fetchEmployeeNames, 300);
      return () => clearTimeout(debounceId);
    } else {
      setEmployeeNames([]);
    }
  }, [searchTerm]);
  // run only once on mount


  return (
    <div className="upload-page">
      <main className="upload-container">
        <form className="form-section" onSubmit={handleSubmit}>
          <h1 className="heading">Reimbursement with Prescription</h1>
          <p className="instruction">
            Enter Consultation Fee, Lab/Path test charges and Medicine cost
            related to one Prescription at a time in chronological order.
          </p>

          <fieldset>
            <legend>Employee Details</legend>
            <div className="grid-2" style={{ position: "relative" }}>
              <input
                type="text"
                name="empName"
                value={initialState.EmpName}
                placeholder="Search Employee Name*"
                autoComplete="off"
                required
              />
              <select
                name="financialYear"
                value={formData.financialYear} 
                onChange={handleChange}
              >
                <option value="">Select Financial Year</option>
                {financialYear.map((financialYear, index) => (
                  <option key={index} value={financialYear}>
                    {financialYear}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          <fieldset>
            <legend>Claim Details</legend>
            <div className="grid-2">
              <div className="form-group">
                <label htmlFor="totalEligibility">Total Eligibility</label>
                <input
                  type="text"
                  id="totalEligibility"
                  name="totalEligibility"
                  value={formData.totalEligibility}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="previousBalance">Previous Balance</label>
                <input
                  type="text"
                  id="previousBalance"
                  name="previousBalance"
                  value={formData.previousBalance}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amountClaimed">Amount Claimed upto now</label>
                <input
                  type="text"
                  id="amountClaimed"
                  name="amountClaimed"
                  value={formData.amountClaimed}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amountBeingClaimed">Amount Being Claimed</label>
                <input
                  type="text"
                  id="amountBeingClaimed"
                  name="amountBeingClaimed"
                  value={formData.amountBeingClaimed}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Disease Info</legend>
            <div className="grid-2">
              <select
                name="disease"
                value={formData.disease}
                onChange={handleChange}
              >
                <option value="">Select Disease</option>
                {diseases.map((disease, index) => (
                  <option key={index} value={disease}>
                    {disease}
                  </option>
                ))}
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
              Print Preview
            </button>
            <button type="submit" className="submit-btn-U">
              Back
            </button>
            <button type="reset" className="submit-btn-U" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ReimburseWithPrescription;
