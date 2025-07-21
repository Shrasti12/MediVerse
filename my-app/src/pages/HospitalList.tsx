import "./UploadPrescription.css";
import { City, State } from "country-state-city";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function HospitalList() {
  const navigate = useNavigate();

  const [selectedState, setSelectedState] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  // Load states on mount
  useEffect(() => {
    const indianStates = State.getStatesOfCountry("IN");
    setStates(indianStates);
  }, []);

  // Load cities when state changes
  useEffect(() => {
    if (selectedState) {
      const cityList = City.getCitiesOfState("IN", selectedState.isoCode);
      setCities(cityList);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = states.find((s) => s.name === e.target.value);
    setSelectedState(state);
    setSelectedCity(""); // Reset city when state changes
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Selected State:", selectedState?.name);
    console.log("Selected City:", selectedCity);
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
            <h1 className="heading">Hospital Master</h1>

            <div className="form-group" style={{ margin: "1.5rem 0" }}>
              <label htmlFor="state" style={{ marginRight: "1rem" }}>
                Select State:
              </label>
              <select
                name="state"
                id="state"
                className="form-input"
                value={selectedState?.name || ""}
                onChange={handleStateChange}
              >
                <option value="" disabled>
                  -- Select State --
                </option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>

              <label htmlFor="city" style={{ margin: "0 1rem" }}>
                Select City:
              </label>
              <select
                name="city"
                id="city"
                className="form-input"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">-- Select City --</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

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
              <button type="reset" className="submit-btn-U">
                Clear
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default HospitalList;
