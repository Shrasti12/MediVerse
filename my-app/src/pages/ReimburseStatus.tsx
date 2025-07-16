import './ReimburseStatus.css'; 
import { Link } from 'react-router-dom';

function ReimburseStatus() {
  return (
    <>
    <Link to="/" className="home-button">
        🏠 Home
      </Link>
      <h1>This is the Reimbursement status page</h1>
    </>
  );
}

export default ReimburseStatus;
