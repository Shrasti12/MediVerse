import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sideBar";
interface PageProps {
  empno: string | null;
  employeeData: any;
}

const Layout: React.FC<PageProps> = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={`upload-page ${darkMode ? "dark" : ""}`}>
      <Sidebar />
      <main className="upload-container">
        <header style={{ padding: "1rem", textAlign: "right" }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              borderRadius: "8px",
              border: "none",
              backgroundColor: darkMode ? "#0284c7" : "#00cfe8",
              color: "white",
              fontWeight: "600",
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
