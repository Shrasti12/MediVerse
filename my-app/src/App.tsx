import  { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import axios from "axios";
import "./App.css";
import "./components/Banner.css";

function App() {
  const [empNo, setEmpNo] = useState<string | null>(null);
  const [employeeData, setEmployeeData] = useState<any>(null);

  useEffect(() => {
    
    const params = new URLSearchParams(window.location.search);
    const emp = params.get("empNo");
    setEmpNo(emp);

    if (emp) {
      // Fetch employee data from WebMethod
      axios
        .get(
          `http://localhost:60266/WS/StateService.asmx/GetEmployeeDetails?empNo=${emp}`
        )
        .then((res) => {
          // Assuming your WebMethod returns an array
          const data = Array.isArray(res.data) ? res.data[0] : res.data?.d;
          setEmployeeData(data);
        })
        .catch((err) => {
          console.error("Failed to fetch employee data", err);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes empno={empNo} employeeData={employeeData} />
    </BrowserRouter>
  );
}

export default App;
