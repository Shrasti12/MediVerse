import './HospitalList.css'; 
import { Link } from 'react-router-dom';

function HospitalList() {
  return (
    <>
    <Link to="/" className="home-button">
        🏠 Home
      </Link>
      <h1>This is the Hospital list page</h1>
    </>
  );
}

export default HospitalList;
