// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar";
import AppRoutes from "./Routes/AppRoutes";
// import Header from "./components/Header";
import "./components/Banner.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
