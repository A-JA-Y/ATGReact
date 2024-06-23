import React from "react";
import { FaBell, FaShoppingCart, FaSave, FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navcss.css";
import  logo from"./logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          // width="200"
          height="60"
          className="d-inline-block align-top"
          alt="Company Logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <input
            className="form-control mr-sm-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="searchBtn my-2 my-sm-0"
            type="submit"
          >
            <FaSearch />
          </button>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="exploreDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Explore
            </a>
            <div className="dropdown-menu" aria-labelledby="exploreDropdown">
              <a className="dropdown-item" href="#">
                Option 1
              </a>
              <a className="dropdown-item" href="#">
                Option 2
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="hobbiesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hobbies
            </a>
            <div className="dropdown-menu" aria-labelledby="hobbiesDropdown">
              <a className="dropdown-item" href="#">
                Option 1
              </a>
              <a className="dropdown-item" href="#">
                Option 2
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FaSave />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FaBell />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FaShoppingCart />
            </a>
          </li>
          <li className="nav-item">
            <button className="btn">Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
