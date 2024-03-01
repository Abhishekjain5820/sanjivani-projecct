const WhyUs = () => {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>
                INS Valsura: <strong>Why It Exists</strong>
              </h3>
              <p>
                INS Valsura, nestled in Jamnagar, Gujarat, stands as the epitome
                of excellence in naval training since its inception. Its raison
                d'être lies in shaping adept naval personnel versed in
                electrical and weapon engineering. The institution molds
                leaders, ensuring readiness for complex naval operations.
              </p>
            </div>
            <div className="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> Honing Expertise in Naval Engineering{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-1"
                    className="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      INS Valsura meticulously cultivates knowledge in naval
                      engineering, ensuring mastery in operating and maintaining
                      sophisticated naval equipment.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#accordion-list-2"
                  >
                    <span>02</span> Fostering Leadership and Discipline{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-2"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Beyond technical skills, INS Valsura instills leadership
                      qualities and discipline, crucial for effective naval
                      operations in challenging environments.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#accordion-list-3"
                  >
                    <span>03</span> Ensuring Operational Readiness{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-3"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      INS Valsura's mission extends to ensuring the Indian
                      Navy's operational readiness, aligning with its commitment
                      to safeguarding maritime interests with precision and
                      expertise.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style={{ backgroundImage: 'url("assets/img/meatpop10.jpg")' }}
            data-aos="zoom-in"
            data-aos-delay={150}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
