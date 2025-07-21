import React from "react";
import "./sidebar.css";
import Sidebar from "./sideBar";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "250px", width: "100%", padding: "2rem" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
