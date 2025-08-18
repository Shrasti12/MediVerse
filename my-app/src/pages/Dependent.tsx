import "./UploadPrescription.css";
import { useNavigate } from "react-router-dom";

interface PageProps {
  empno: string | null;
  employeeData: any;
}

const Dependent: React.FC<PageProps> = ({  }) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form logic here if any
  };

  const handleBack = () => {
    navigate("/"); 
  };

  return (
    <div className="upload-page">
      <main className="upload-container">
        <form className="form-section" onSubmit={handleSubmit}>
          <h1 className="heading">DEPENDENT DETAILS</h1>

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
      </main>
    </div>
  );
};

export default Dependent;
