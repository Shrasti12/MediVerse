import "./ReimbursePres.css";
import { Link } from 'react-router-dom';

function Approve() {
  return (
    <>
      <Link to="/" className="home-button">
        🏠 Home
      </Link>
      <h1>This is the approve page</h1>
    </>
  );
}

export default Approve;
