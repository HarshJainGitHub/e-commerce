import React, { Component } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
export default class NavBar extends Component {

  constructor(props){
    super(props);
    console.log(this.props.isLoggedIn);
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <div className="container-fluid">
            <span className="navbar-brand">
              DreamCart
            </span>
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                { !this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link" exact="true">
                      Login
                    </NavLink>
                  </li>) : ""
                }
                { this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link">
                      Dashboard
                    </NavLink>
                  </li>
                ) : "" }
                { this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink to="/customers" className="nav-link">
                      Customers
                    </NavLink>
                  </li>
                ) : "" }
                { this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <NavLink to="/cart" className="nav-link">
                      Shopping Cart
                    </NavLink>
                  </li>
                ) : "" }
                { this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <a href="/" className="nav-link" onClick={this.onLogoutClick}>
                      Logout
                    </a>
                  </li>
                ) : "" }
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

  onLogoutClick = (event) => {
    event.preventDefault();
    this.props.updateIsLoggedInStatus(false);
  };
}
