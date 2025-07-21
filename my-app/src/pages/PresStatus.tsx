 
import "./UploadPrescription.css";
import { Link, useNavigate } from "react-router-dom";

function PresStatus() {
  const navigate = useNavigate(); // ✅ Hook to navigate

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form logic here if any
  };

  const handleBack = () => {
    navigate("/"); // ✅ Navigates to home page
  };

  return (
    <div className="upload-page">
      <aside className="sidebar">
        <h2 className="sidebar-title">MediVerse</h2>

        <nav className="sidebar-nav">
          <button className="nav-item">
            <i className="fa fa-plus-circle"></i>
            <Link to="/" className="home-button">
              Home
            </Link>
          </button>

          <button className="nav-item active">
            <i className="fa fa-plus-circle"></i> New Claim
          </button>
          <button className="nav-item">
            <i className="fa fa-check-circle"></i> Track Status
          </button>
          <button className="nav-item">
            <i className="fa fa-cog"></i> Settings
          </button>
        </nav>
      </aside>

      <main className="upload-container">
       
        <div className="form-table-wrapper">
          <form className="form-section" onSubmit={handleSubmit}>
            <h1 className="heading">Status of Prescription(s) Uploaded</h1>
           

            <div className="btn-group" style={{ marginTop: "2rem" }}>
              <button
                onClick={() => window.open("/path/to/file.pdf", "_blank")}
                type="button"
                className="submit-btn-U"
              >
                View Report
              </button>

              <button
                type="button"
                className="submit-btn-U"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default PresStatus;
