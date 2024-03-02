const Navbar = () => {
  return (
    <>
      <header id="header" style={{ backgroundColor: "#111B69" }}>
        <div className="container d-flex align-items-center">
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#cta">
                  Predicton
                </a>
              </li>
              {/* <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link   scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li> */}
              <li></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
