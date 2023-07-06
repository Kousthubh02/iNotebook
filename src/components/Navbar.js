import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();

  let location = useLocation();
const Handlelogout=()=>{
  localStorage.removeItem('token');
  navigate('/login');
}
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              iNotebook
            </Link>
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
              {!localStorage.getItem('token') ? (
                <form className="d-flex" role="search">
                  <Link to="/login" className="btn btn-outline-primary mx-2" type="submit">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-outline-success mx-2" type="submit">
                    SignUp
                  </Link>
                </form>
              ) : (
                <button className="btn btn-outline-primary mx-2" onClick={Handlelogout}>Logout</button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
