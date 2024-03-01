const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>INS Valsura</h3>
              <p>
                Naval Base <br />
                Jamnagar, Gujarat <br />
                India <br />
                <br />
                <strong>Phone:</strong> +91 XXXXXXXXXX <br />
                <strong>Email:</strong> info@insvalsura.in <br />
              </p>
            </div>
            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Training Programs</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Facilities</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Events</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom clearfix">
        <div className="credits">
          © {new Date().getFullYear()} INS Valsura. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
