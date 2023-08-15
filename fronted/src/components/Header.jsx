import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/stackoverflow.png";
import axios from "axios";

const Header = () => {
  const [d, setD] = useState(false);
  const [name, setName] = useState([]);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.post(`http://localhost:3000/auth`).then((res) => {
      if (res.data.Status === "Success") {
        setD(true);
        setName(res.data.name);
      } else {
        setD(false);
      }
    });
  });
  const logout = () => {
    axios.post(`http://localhost:3000/logout`).then((res) => {
      if (res.data.Status === "Success") {
        alert("logged out");
        window.location.reload();
        localStorage.clear();
      } else {
        alert("oops try again");
      }
    });
  };
  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary navbar-bg-dark ">
      <div className="container-fluid ">
        <div
          className="collapse"
          id="navbarToggleExternalContent"
          data-bs-theme="dark"
        >
          <div className="bg-dark p-4">
            <h5 className="text-body-emphasis h4">Collapsed content</h5>
            <span className="text-body-secondary">
              Toggleable via the navbar brand.
            </span>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mt-5 fw-bold text-primary"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
            <li className="nav-item">
              <a href="/">
                <img src={logo} alt="logo" className="logo mb-5" />
              </a>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/contact">
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/question">
                Question
              </Link>
            </li>
            <li className="nav-item "></li>
          </ul>

          <form className="d-flex mb-5 " role="search">
            <input
              className="form-control me-2 search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <em className="ri-search-line fs-3 "></em>
          </form>
          {d ? (
            <div className="endbtn mb-5">
              <p className="text-capitalize fw-bold">{name}</p>
              <button className="l" onClick={logout}>
                {" "}
                Logout
              </button>
            </div>
          ) : (
            <div className="endbtn mb-5">
              <Link to="/login">
                <button className="s"> Login</button>
              </Link>
              <Link to="/signup">
                {" "}
                <button className="l">Signup</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
