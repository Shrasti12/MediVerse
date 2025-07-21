// src/components/Sidebar.tsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"; // Reuse your existing CSS

const Sidebar = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">MediVerse</h2>

      <nav className="sidebar-nav">
        <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
          Home
        </Link>

        <div className="dropdown">
          <button onClick={toggleDropdown} className="nav-item dropdown-toggle">
            Pages <span className={`arrow ${isDropdownOpen ? "up" : "down"}`}>▼</span>
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/new-claim" className={`nav-item ${location.pathname === "/new-claim" ? "active" : ""}`}>
                New Claim
              </Link>
              <Link to="/track-status" className={`nav-item ${location.pathname === "/track-status" ? "active" : ""}`}>
                Track Status
              </Link>
              <Link to="/settings" className={`nav-item ${location.pathname === "/settings" ? "active" : ""}`}>
                Settings
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
