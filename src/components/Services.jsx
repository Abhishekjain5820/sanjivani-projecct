const Services = () => {
  return (
    <section id="csd" className="csd section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Canteen Service Department</h2>
          <p>
            Providing essential services for the well-being of naval personnel.
          </p>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-dish" />
              </div>
              <h4>
                <a href="#">Food Services</a>
              </h4>
              <p>
                Offering nutritious and delicious meals to cater to diverse dietary needs.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-coffee" />
              </div>
              <h4>
                <a href="#">Beverage Services</a>
              </h4>
              <p>
                Providing a variety of beverages to keep naval personnel refreshed.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-money" />
              </div>
              <h4>
                <a href="#">Retail Services</a>
              </h4>
              <p>
                Offering retail products including daily essentials and convenience items.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay={400}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-wallet" />
              </div>
              <h4>
                <a href="#">Payment Services</a>
              </h4>
              <p>
                Facilitating secure and efficient payment transactions for purchases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Services;
