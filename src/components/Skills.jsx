const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <img
              src="assets/img/training_ins_valsura.webp"
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <h3>Training Excellence at INS Valsura</h3>
            <p className="fst-italic">
              INS Valsura, a beacon of training, shapes naval personnel with
              precision and dedication.
            </p>
            <p>
              INS Valsura offers a comprehensive training program covering
              various aspects of naval operations. From electrical and weapon
              engineering to leadership development, the curriculum ensures
              proficiency in maritime operations.
            </p>
            <p>
              The training at INS Valsura blends theoretical knowledge with
              practical exercises, simulating real-world scenarios encountered
              at sea. Through state-of-the-art facilities and experienced
              instructors, trainees acquire skills essential for operating and
              maintaining advanced naval equipment.
            </p>
            <p>
              With a focus on discipline, teamwork, and adaptability, INS
              Valsura prepares naval personnel to face challenges with
              confidence and expertise, ensuring readiness for safeguarding
              maritime interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
