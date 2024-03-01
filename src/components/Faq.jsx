const Faq = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Explore common queries about INS Valsura's training programs and facilities.
          </p>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-1"
              >
                What kind of training programs does INS Valsura offer?
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-1"
                className="collapse show"
                data-bs-parent=".faq-list"
              >
                <p>
                  INS Valsura offers comprehensive training in naval engineering, electrical systems, weapon systems, and leadership development to prepare personnel for various roles in the Indian Navy.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed"
              >
                How can I enroll in training programs at INS Valsura?
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-2"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Enrollment procedures for training programs at INS Valsura are conducted through the Indian Navy's official channels. Applicants must meet the eligibility criteria and undergo a selection process.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
              >
                Does INS Valsura provide accommodation for trainees?
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Yes, INS Valsura provides accommodation facilities for trainees, ensuring a comfortable stay during their training period.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
              >
                Are there recreational facilities available at INS Valsura?
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-4"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Yes, INS Valsura offers various recreational facilities, including sports complexes, libraries, and social clubs, to ensure a balanced lifestyle for personnel.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={500}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-5"
                className="collapsed"
              >
                How can I get in touch with INS Valsura for further inquiries?
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-5"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  For further inquiries or assistance, you can contact INS Valsura's administration office via phone or email. Visit the official website for contact details.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
