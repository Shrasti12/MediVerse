import './Dependent.css'; 
import { Link } from 'react-router-dom';

function Dependent() {
  return (
    <>
    <Link to="/" className="home-button">
        🏠 Home
      </Link>
      <h1>This is the Dependent details page</h1>
    </>
  );
}

export default Dependent;
