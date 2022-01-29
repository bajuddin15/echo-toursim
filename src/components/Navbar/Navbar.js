import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm navbar-fixed-top">
        <div class="container-fluid px-5">
          <a class="navbar-brand fw-bold fs-3" href="#">
            ApnaGaon
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item me-5">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textTransform: "capitalize" }}>
                  Home
                </a>
              </li>
              <li class="nav-item me-5">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textTransform: "capitalize" }}>
                  Destination
                </a>
              </li>
              <li class="nav-item me-5">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textTransform: "capitalize" }}>
                  Virtual Tours
                </a>
              </li>

              <li class="nav-item me-5">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textTransform: "capitalize" }}>
                  Events
                </a>
              </li>
              <li class="nav-item me-5">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textTransform: "capitalize" }}>
                  Shop
                </a>
              </li>
              <li class="nav-item me-5">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textTransform: "capitalize" }}>
                  History Labs
                </a>
              </li>
              <li class="nav-item me-5">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textTransform: "capitalize" }}>
                  Stories
                </a>
              </li>
              <li class="nav-item me-5">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textTransform: "capitalize" }}>
                  Booking
                </a>
              </li>

              <li class="nav-item me-5">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ textTransform: "capitalize" }}>
                  About
                </a>
              </li>
            </ul>

            <div className="buttons">
              <a className="btn btn-dark me-2">
                <i className="fas fa-sign-in-alt me-1"></i> Login
              </a>
              <a className="btn btn-dark ms-1">
                <i className="fa fa-user-plus me-1"></i> Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
