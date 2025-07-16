import './ReportWithoutPres.css'; 
import { Link } from 'react-router-dom';

function ReportWithoutPres() {
  return (
    <>
    <Link to="/" className="home-button">
        🏠 Home
      </Link>
      <h1>This is the Reimbursement Report without prescription page</h1>
    </>
  );
}

export default ReportWithoutPres;
