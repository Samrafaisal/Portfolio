import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand" to="/Home">
              <span class="navbar-brand mb-0 h1">Samra Faisal</span>
              <div style={{ fontSize: "10px" }}>
                Web developer | Bachelors in CS
              </div>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/SkEd">
                    Skills & Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/RCV">
                    Resume/CV
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </>
    );
  }
}
