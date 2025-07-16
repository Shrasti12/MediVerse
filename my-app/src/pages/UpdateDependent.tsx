import './UpdateDependent.css'; 
import { Link } from 'react-router-dom';

function UpdateDependent() {
  return (
    <>
    <Link to="/" className="home-button">
        🏠 Home
      </Link>
      <h1>This is the Update Dependent details page</h1>
    </>
  );
}

export default UpdateDependent;
