const UpperNavbar = () => {
  return (
    <>
      <header id="header">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <img
              src="assets/img/INS_Valsura_Crest.png"
              className="img-fluid animated"
              alt=""
            />
            <a
              href="index.html"
              className="logo-title"
              style={{ color: "#2E297B" }}
            >
              INS Valsura
            </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto">
                  <img
                    src="assets/img/logo-valsura.png"
                    alt="Home"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li>
                <a className="nav-link scrollto">
                  <img
                    src="assets/img/g20-logo.jpg"
                    alt="About"
                    className="img-fluid"
                  />
                </a>
              </li>
              {/* ... repeat for other sections ... */}
              <li>
                <a className="nav-link scrollto">
                  <img
                    src="assets/img/navy-logo.png"
                    alt="Contact"
                    className="img-fluid"
                  />
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default UpperNavbar;
