import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UploadPrescription.css";
import Sidebar from "../components/sideBar";

interface FormData {
  empName: string;
  relation: string;
  state: string;
  district: string;
  hospital: string;
  doctor: string;
  doctorType: string;
  disease: string;
  receiptNo: string;
  date: string;
  prescriptionFile: File | null;
}

interface PageProps {
  empno: string | null;
  employeeData: any;
}

const UploadPrescription: React.FC<PageProps> = ({ empno, employeeData }) => {
  const initialState: FormData = {
    empName: empno ? employeeData?.EmpName || "" : "",
    relation: "",
    state: "",
    district: "",
    hospital: "",
    doctor: "",
    doctorType: "",
    disease: "",
    receiptNo: "",
    date: "",
    prescriptionFile: null,
  };

  const [states, setStates] = useState<State[]>([]);
  const [formData, setFormData] = useState<FormData>(initialState);
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);
  const [selectedState, setSelectedState] = useState<number | null>(null);
  const [districts, setDistricts] = useState<District[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [diseases, setDiseases] = useState<string[]>([]);
  const [doctorTypes, setDoctorTypes] = useState<DoctorType[]>([]);

  interface State {
    Id: number;
    Name: string;
  }
  interface District {
    Id: number;
    Name: string;
  }
  interface Hospital {
    Id: number;
    Name: string;
  }
  interface DoctorType {
    Id: number;
    Name: string;
  }

  useEffect(() => {
    // 1. Handle employeeData change
    if (employeeData) {
      setFormData({
        empName: employeeData.Name || "",
        relation: employeeData.Relation || "",
        state: employeeData.State || "",
        district: employeeData.District || "",
        hospital: employeeData.Hospital || "",
        doctor: employeeData.Doctor || "",
        doctorType: employeeData.DoctorType || "",
        disease: employeeData.Disease || "",
        receiptNo: "",
        date: "",
        prescriptionFile: null,
      });
    }

    // 2. Fetch states
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:60266/WS/StateService.asmx/GetStates?x=test",
          { headers: { "Content-Type": "application/json" } }
        );
        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.d;
        setStates(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error loading states:", error);
        setStates([]);
      }
    };

    // 3. Fetch districts (depends on selectedState)
    const fetchDistricts = async () => {
      if (!selectedState) return;
      try {
        const response = await axios.get(
          `http://localhost:60266/WS/StateService.asmx/GetDistricts?stateCode=${selectedState}`,
          { headers: { "Content-Type": "application/json" } }
        );
        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.d;
        setDistricts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching districts:", error);
        setDistricts([]);
      }
    };

    // 4. Fetch hospitals (depends on selectedDistrict & selectedState)
    const fetchHospitals = async () => {
      if (!selectedDistrict || !selectedState) return;
      try {
        const response = await axios.get(
          `http://localhost:60266/WS/StateService.asmx/GetHospitals?districtCode=${selectedDistrict}&stateCode=${selectedState}`,
          { headers: { "Content-Type": "application/json" } }
        );
        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.d;
        setHospitals(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
        setHospitals([]);
      }
    };

    // 5. Fetch diseases
    const fetchDiseases = async () => {
      try {
        const response = await axios.get(
          "http://localhost:60266/WS/StateService.asmx/GetDiseases",
          { headers: { "Content-Type": "application/json" } }
        );
        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.d;
        if (Array.isArray(data)) setDiseases(data);
      } catch (error) {
        console.error("Error fetching diseases:", error);
      }
    };

    // 6. Fetch doctor types
    const fetchDoctorTypes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:60266/WS/StateService.asmx/GetDoctorTypes",
          { headers: { Accept: "application/json" } }
        );
        if (Array.isArray(response.data)) {
          setDoctorTypes(response.data);
        } else if (response.data.d && Array.isArray(response.data.d)) {
          setDoctorTypes(response.data.d);
        } else {
          setDoctorTypes([]);
        }
      } catch (error) {
        console.error("Error fetching doctor types:", error);
        setDoctorTypes([]);
      }
    };

    // Call functions
    fetchStates();
    fetchDiseases();
    fetchDoctorTypes();
    fetchDistricts();
    fetchHospitals();
  }, [employeeData, selectedState, selectedDistrict]);

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const stateId = parseInt(event.target.value);
    setSelectedState(stateId);
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const districtId = parseInt(event.target.value);
    setSelectedDistrict(districtId);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      prescriptionFile: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.prescriptionFile) {
      alert("Please upload a prescription PDF.");
      return;
    }
    setSubmittedData((prev) => [...prev, formData]);
    setFormData(initialState);
  };

  const handleClear = () => setFormData(initialState);
  const handleBack = () => setSubmittedData((prev) => prev.slice(0, -1));

  console.log("Selected hospital:", formData.hospital);

  return (
    <div className="upload-page">
      <main className="upload-container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">Upload Prescription</h1>

            <fieldset>
              <legend>Employee Details</legend>
              <div className="grid-2">
                <input
                  type="text"
                  name="empName"
                  value={formData.empName}
                  onChange={handleChange}
                  placeholder="Employee Name"
                  required
                />
                <select
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Relation</option>
                  <option value="self">Self</option>
                  <option value="spouse">Spouse</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="child">Child</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </fieldset>

            <fieldset>
              <legend>Hospital / Doctor</legend>
              <div className="grid-2">
                <select
                  name="state"
                  value={formData.state}
                  onChange={(e) => {
                    const selectedStateCode = e.target.value;
                    setFormData({
                      ...formData,
                      state: selectedStateCode,
                      district: "",
                    });
                    setSelectedState(Number(selectedStateCode));
                  }}
                  required
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.Id} value={state.Id}>
                      {state.Name}
                    </option>
                  ))}
                </select>
                <select
                  name="district"
                  value={formData.district}
                  onChange={(e) => {
                    const selectedDistrictName = e.target.value;
                    setFormData({
                      ...formData,
                      district: selectedDistrictName,
                    });
                    setSelectedDistrict(Number(selectedDistrictName));
                  }}
                  required
                >
                  <option value="">Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district.Id}>
                      {district.Name}
                    </option>
                  ))}
                </select>

                <select
                  name="hospital"
                  value={formData.hospital}
                  onChange={(e) =>
                    setFormData({ ...formData, hospital: e.target.value })
                  }
                  required
                >
                  <option value="">Select Hospital</option>
                  {hospitals.map((hospital, index) => (
                    <option key={index} value={hospital.Name}>
                      {hospital.Name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  placeholder="Doctor's Name"
                />
                <select
                  name="doctorType"
                  value={formData.doctorType}
                  onChange={handleChange}
                >
                  <option value="">Select Doctor Type</option>
                  {doctorTypes.map((doctorType) => (
                    <option key={doctorType.Id} value={doctorType.Id}>
                      {doctorType.Name}
                    </option>
                  ))}
                </select>

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
              <legend>Receipt Details</legend>
              <div className="grid-2">
                <input
                  type="text"
                  name="receiptNo"
                  value={formData.receiptNo}
                  onChange={handleChange}
                  placeholder="Receipt No"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <div className="upload-box">
                  <label className="upload-label">
                    Upload Prescription <span className="required">*</span>
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    required
                  />
                  <small className="upload-note">
                    (Only PDF files are accepted)
                  </small>
                </div>
              </div>
            </fieldset>

            <div className="btn-group">
              <button type="submit" className="submit-btn-U">
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
        </div>

        {submittedData.length > 0 && (
          <div className="data-table">
            <h2>Submitted Data</h2>
            <table>
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Relation</th>
                  <th>State</th>
                  <th>District</th>
                  <th>Hospital</th>
                  <th>Doctor</th>
                  <th>Doctor Type</th>
                  <th>Disease</th>
                  <th>Receipt No</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.empName}</td>
                    <td>{data.relation}</td>
                    <td>{data.state}</td>
                    <td>{data.district}</td>
                    <td>{data.hospital}</td>
                    <td>{data.doctor}</td>
                    <td>{data.doctorType}</td>
                    <td>{data.disease}</td>
                    <td>{data.receiptNo}</td>
                    <td>{data.date}</td>
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

export default UploadPrescription;
