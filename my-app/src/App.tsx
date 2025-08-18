import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import axios from "axios";
import "./App.css";
import "./components/Banner.css";

function App() {
  const [empNo, setEmpNo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [employeeData, setEmployeeData] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const empNoParam = params.get("empNo");

    if (!empNoParam) {
      setError("Employee number is required in the URL. Example: ?empNo=13574");
      return;
    }

    if (!/^\d+$/.test(empNoParam)) {
      setError("Invalid Employee number format.");
      return;
    }

    setEmpNo(empNoParam);

    axios
      
      .get(`http://localhost:60266/WS/StateService.asmx/GetEmployeeDetails?EmpNo={empNoParam}`)

      .then((res) => setEmployeeData(res.data))
      .catch((err) => {
        setError("Failed to fetch employee data from backend.");
        console.error(err);
      });
  }, []);

  if (error) return <div style={{ padding: "20px", color: "red" }}>{error}</div>;
  if (!employeeData) return <div style={{ padding: "20px" }}>Loading employee data...</div>;

  return (
    <BrowserRouter>
      <AppRoutes empno={empNo} employeeData={employeeData} />
    </BrowserRouter>
  );
}

export default App;
