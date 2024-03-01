import { useState } from "react";

const Cta = () => {
  const [showTable, setShowTable] = useState(false);

  const handleShowTable = () => {
    setShowTable(!showTable);
  };

  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Grocery Prediction</h3>
            <p>
              Get insights into grocery trends and predictions to optimize stock
              management and customer satisfaction.
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <button className="cta-btn align-middle" onClick={handleShowTable}>
              Show Prediction Table
            </button>
          </div>
        </div>
        {showTable && (
          <div className="row mt-4">
            <div className="col">
              {/* Insert your table component here */}
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Predicted Demand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product 1</td>

                    <td>120</td>
                  </tr>
                  <tr>
                    <td>Product 2</td>

                    <td>90</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cta;
