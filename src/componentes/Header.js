import React from 'react';
import logo from './../assets/images/logo.png';

const Header = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="!#"><img src={ logo } alt=""/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
          <li className="nav-item me-4">
            <a className="nav-link d-flex align-items-center" aria-current="page" href="!#"><i className="mx-1 fas fa-th"></i> Categorias</a>
          </li>
          <li className="nav-item me-4">
            <a className="nav-link d-flex align-items-center" href="!#"><i className="mx-1 far fa-money-bill-alt"></i> Vende con nosotros</a>
          </li>
          <li className="nav-item me-4">
            <a className="nav-link  d-flex align-items-center" href="!#"><i className="mx-1 fas fa-store-alt"></i> Ingresa a tu tienda</a>
          </li>
        </ul>
        <form className="d-flex me-2">
          <input className="form-control me-2" type="search" placeholder="buscar" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Buscar</button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item mx-1">
              <a className="nav-link" aria-current="page" href="!#"> <i className="far fa-user"></i> </a>
            </li>
            <li className="nav-item mx-1">
              <a className="nav-link" href="!#"><i className="far fa-heart"></i> </a>
            </li>
            <li className="nav-item mx-1">
              <a className="nav-link" href="!#"><i className="fas fa-shopping-cart"></i> </a>
            </li>
          </ul>
        </form>
        
      </div>
    </div>
  </nav>
  );
}

export default Header;
