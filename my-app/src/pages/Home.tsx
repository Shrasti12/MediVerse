// import { Sidebar } from "lucide-react";

// import Header from "../components/Header";
// import Navbar from "../components/Navbar";

import Sidebar from "../components/sideBar";
import Dashboard from "../components/minimal-dashboard";
interface PageProps {
  empno: string | null;
  employeeData: any;
}
function Home({ empno, employeeData }: PageProps) {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <Dashboard />

      {/* Example usage */}
      <div style={{ padding: "10px" }}>
        Employee No: {empno} <br />
        Employee Name: {employeeData?.name || "Loading..."}
      </div>
    </>
  );
}

export default Home;
