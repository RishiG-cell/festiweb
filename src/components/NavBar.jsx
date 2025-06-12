import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG";
const NavBar = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} />
      </Link>
      <h1>Festiweb</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/festival">Festi</Link>
        <Link to="/ticketcart">Tickets</Link>
        <Link to="/add-your-festi">Your Festi</Link>
      </nav>
    </div>
  );
};

export default NavBar;
