import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sideBar";

const Layout: React.FC = () => {
  return (
    <div className="upload-page">
      <Sidebar />
      <main className="upload-container">
        <Outlet /> {/* This will render the current page content */}
      </main>
    </div>
  );
};

export default Layout;
