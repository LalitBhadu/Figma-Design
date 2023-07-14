import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src="Logo.PNG" alt="" href="/" height={"60px"} />
          </a>

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
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <strong> Filters</strong>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          About
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <h6>About US</h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <h5>Blog</h5>
                </a>
              </li>
              <form action="" className="btn">
                <button type="button" className="btn btn-outline-success">
                  <h6>Earning Calculator</h6>
                </button>
              </form>
            </ul>
            <form className="d-flex">
              <button type="button" className="btn btn-outline-dark">
                <a href="login">Login</a>
              </button>
            </form>
            <form className="d-flex">
              <button type="button" className="btn btn-success">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
