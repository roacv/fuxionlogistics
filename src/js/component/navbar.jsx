import React from "react";
import { Link } from "react-router-dom";
import logoImageUrl from "../../img/logo.png";

export const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="nav-brand" to="/">
          <img
            className="d-inline-block "
            src={logoImageUrl}
            alt="Logo"
            width="150"
            height="150"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0  h4 gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-item ms-5 mx-2 ms-lg-0">
              {/* <Link className="nav-link" to=""> */}
              {/* <CarShopping/> */}
              {/* </Link> */}
        </div>
      </div>
    </nav>
  );
};