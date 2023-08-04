const React = require("react");
const Layout = require("./Layout");

function Navbar() {
  return (
    <div > 
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/top/list">
                  Top list
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth/register">
                  Register
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search"></form>
          </div>
        </div>
      </nav>
    </div>
  );
}

module.exports = Navbar;
