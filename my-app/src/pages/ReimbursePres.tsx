import React, { useEffect, useState } from "react";
import "./UploadPrescription.css";
import axios from "axios";

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
      // Submit your form logic here
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
  const [formData, setFormData] = useState<ReimburseData>(initialState);
  const [diseases, setDiseases] = useState<string[]>([]);
  const [employeeNames, setEmployeeNames] = useState<Employee[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  // Fetch diseases once on component mount
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

    fetchDiseases();
  }, []);

  interface Employee {
    Id: number;
    Name: string;
  }
  // Fetch employee names with debounce on searchTerm change
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setEmployeeNames([]);
      return;
    }

    const fetchEmployeeNames = async () => {
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

    const debounceId = setTimeout(fetchEmployeeNames, 300);
    return () => clearTimeout(debounceId);
  }, [searchTerm]);


  const [selectedEmpId, setSelectedEmpId] = useState<number | null>(null);

    // const [, setError] = useState<string | null>(null);

    // Auto-fetch eligible amount when empName changes
useEffect(() => {
  const selectedEmployee = employeeNames.find(emp => emp.Name === formData.empName);
  if (!selectedEmployee) {
    setFormData(prev => ({ ...prev, totalEligibility: "" }));
    return;
  }

  const fetchEligibleAmount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:60266/WS/StateService.asmx/GetEligibleAmount",
        {
          params: { EmpNo: selectedEmployee.Id },
          headers: { "Content-Type": "application/json; charset=utf-8" },
        }
      );

      let amount = 0;
      if (response.data && typeof response.data.d === "number") {
        amount = response.data.d;
      } else if (response.data && typeof response.data.d === "string") {
        amount = parseFloat(response.data.d);
      }

      setFormData(prev => ({ ...prev, totalEligibility: amount.toString() }));
    } catch (error) {
      console.error("Failed to fetch eligible amount", error);
      setFormData(prev => ({ ...prev, totalEligibility: "" }));
    }
  };

  fetchEligibleAmount();
}, [formData.empName, employeeNames]);


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
                value={formData.empName}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, empName: e.target.value }));
                  setSearchTerm(e.target.value);
                }}
                placeholder="Search Employee Name*"
                autoComplete="off"
                required
              />
              {/* {employeeNames.length > 0 && (
                <ul
                  className="dropdown-list"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    background: "white",
                    border: "1px solid #ccc",
                    maxHeight: "150px",
                    overflowY: "auto",
                    zIndex: 1000,
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                  }}
                >
                  {employeeNames.map((Employee, index) => (
                    <li
                      key={`${Employee.Id}-${index}`}
                      style={{ padding: "8px", cursor: "pointer" }}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          empName: Employee.Name,
                        }));
                        setEmployeeNames([]);
                        setSearchTerm(Employee.Name);
                      }}
                    >
                      {Employee.Name}
                    </li>
                  ))}
                </ul>
              )} */}

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
            </div>
          </fieldset>

          <fieldset>
            <legend>Claim Details</legend>
            <div className="grid-2">
              <input
                type="text"
                name="totalEligibility"
                value={formData.totalEligibility}
                placeholder="Total Eligibility Amount*"
                readOnly
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

          <div className="grid-3">
            
          </div>
        </form>
      </main>
    </div>
  );
};

export default ReimburseWithPrescription;
