import './PresStatus.css'; 
import { Link } from 'react-router-dom';

function PresStatus() {
  return (
    <>
    <Link to="/" className="home-button">
        🏠 Home
      </Link>
      <h1>This is the prescription status page</h1>
    </>
  );
}

export default PresStatus;
