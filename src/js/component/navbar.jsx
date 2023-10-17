import React  from "react";
import { Link } from "react-router-dom";
import logoImageUrl from "../../img/logo.png";

export const Navbar = () => {
    return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
        </button>
        <a className="nav-brand" href="/">
          <img
            className="d-inline-block logo "
            src={logoImageUrl}
            alt="Logo"
            width="120"
            height="120"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  h4 gap-4">
            <li className="nav-item">
              <a className="nav-link" href="#Inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Servicios">Servicios</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#Contacto">Contacto</a>
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