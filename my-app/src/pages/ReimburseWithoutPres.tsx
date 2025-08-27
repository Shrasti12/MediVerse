import React, { useEffect, useState } from "react";
import "./UploadPrescription.css";
import axios from "axios";

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

interface PageProps {
  empno: string | null;
  employeeData: any;
}
interface ReImbTypeModel {
  Code: string;
  Name: string;
}
interface MedicineEntry {
  dependent: string;
  receiptNo: string;
  receiptDate: string;
  claimAmount: string;
  attachment: File | null;
}

const ReimbursementWithoutPrescription: React.FC<PageProps> = ({ empno, employeeData }) => {
  const initialState: ReimburseFormData = {
    empName: empno ? employeeData?.EmpName || "" : "",
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
  const [reimbTypes, setReimbTypes] = useState<ReImbTypeModel[]>([]);
  const [medicineEntries, setMedicineEntries] = useState<MedicineEntry[]>([]);

  // ---------------- Medicine Handlers ----------------
  const handleMedicineChange = (index: number, field: keyof MedicineEntry, value: any) => {
    setMedicineEntries((prev) =>
      prev.map((entry, i) =>
        i === index ? { ...entry, [field]: value } : entry
      )
    );
  };

  const addMedicineRow = () => {
    setMedicineEntries((prev) => [
      ...prev,
      { dependent: "", receiptNo: "", receiptDate: "", claimAmount: "", attachment: null }
    ]);
  };

  const removeMedicineRow = (index: number) => {
    setMedicineEntries((prev) => prev.filter((_, i) => i !== index));
  };
 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  useEffect(() => {
    const fetchReimbTypes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:60266/WS/ReImbWithoutPres.asmx/GetReImbType",
          { headers: { "Content-Type": "application/json" } }
        );

        let data = response.data?.d ?? response.data;

        if (typeof data === "string") {
          data = JSON.parse(data);
        }

        if (Array.isArray(data)) {
          setReimbTypes(data);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching reimbursement types:", error);
      }
    };

    fetchReimbTypes();
  }, []);

  return (
    <div className="upload-page">
      <main className="upload-container">
        <form className="form-section" onSubmit={handleSubmit}>
          <h1 className="heading">Reimbursement (No Prescription)</h1>

          <fieldset>
            <legend>Employee Details</legend>
            <div className="grid-2">
              <input
                type="text"
                name="empName"
                value={initialState.empName}
                onChange={handleChange}
                placeholder="Employee Name*"
                required
                autoComplete="off"
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
                {reimbTypes.map((reimb) => (
                  <option key={reimb.Code} value={reimb.Code}>
                    {reimb.Name}
                  </option>
                ))}
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

        {/* -------- Medicine Section -------- */}
        {formData.reimbursementType === "Medicine" && (
          <div className="extra-section">
            <h2>Medicine Claim Details</h2>
            <button type="button" className="submit-btn-U" onClick={addMedicineRow}>
              + Add Receipt
            </button>

            {medicineEntries.length > 0 && (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Select Dependent</th>
                    <th>Receipt No</th>
                    <th>Receipt Date</th>
                    <th>Claim Amount</th>
                    <th>Attachment (PDF &lt; 2MB)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {medicineEntries.map((entry, index) => (
                    <tr key={index}>
                      <td>
                        <select
                          value={entry.dependent}
                          onChange={(e) =>
                            handleMedicineChange(index, "dependent", e.target.value)
                          }
                          required
                        >
                          <option value="">Select</option>
                          <option value="self">Self</option>
                          <option value="spouse">Spouse</option>
                          <option value="child">Child</option>
                          <option value="parent">Parent</option>
                        </select>
                      </td>

                      <td>
                        <input
                          type="text"
                          value={entry.receiptNo}
                          onChange={(e) =>
                            handleMedicineChange(index, "receiptNo", e.target.value)
                          }
                          required
                        />
                      </td>

                      <td>
                        <input
                          type="date"
                          value={entry.receiptDate}
                          onChange={(e) =>
                            handleMedicineChange(index, "receiptDate", e.target.value)
                          }
                          required
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          value={entry.claimAmount}
                          onChange={(e) =>
                            handleMedicineChange(index, "claimAmount", e.target.value)
                          }
                          required
                        />
                      </td>

                      <td>
                        <input
                          type="file"
                          accept="application/pdf"
                          onChange={(e) =>
                            handleMedicineChange(index, "attachment", e.target.files?.[0] || null)
                          }
                          required
                        />
                      </td>

                      <td>
                        <button
                          type="button"
                          className="submit-btn-U"
                          onClick={() => removeMedicineRow(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
        {/* ---------------------------------- */}

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
