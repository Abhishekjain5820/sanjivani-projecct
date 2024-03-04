import axios from "axios";
import { useState } from "react";

const Cta = () => {
  const [showTable, setShowTable] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [predictedDemand, setPredictedDemand] = useState(null);

  const monthMap = {
    January: "1",
    February: "2",
    March: "3",
    April: "4",
    May: "5",
    June: "6",
    July: "7",
    August: "8", // Corrected spelling of August
    September: "9", // Corrected spelling of September
    October: "10",
    November: "11",
    December: "12", // Corrected spelling of December
    // Add other months as needed
  };

  const handleShowTable = () => {
    setShowTable(!showTable);
  };

  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value);
    console.log(selectedMonth);
  };

  const handleFetchPrediction = () => {
    // Make an API request to fetch prediction using selectedMonth
    axios
      .post("/api/prediction", { month: selectedMonth })
      .then((response) => {
        // Handle the response
        setPredictedDemand(response.data.predictedDemand);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching prediction:", error);
      });
  };

  return (
    <section
      id="cta"
      className="cta"
      style={{
        background:
          "linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(/assets/img/supermarket.jpg) fixed center center",
        backgroundSize: "cover",
        padding: "120px 0",
      }}
    >
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>CSD INVENTORY PREDICTION</h3>
            <p>
              Get insights into grocery trends and predictions to optimize stock
              management and customer satisfaction.
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <button
              className="cta-btn align-middle"
              onClick={handleShowTable}
              style={{ border: "2px solid #47b2e4", background: "#47b2e4" }}
            >
              Show Prediction Table
            </button>
          </div>
        </div>
        {showTable && (
          <div className="row mt-4">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="monthSelect" className="form-label">
                  Select Month:
                </label>
                <select
                  className="form-select"
                  id="monthSelect"
                  value={selectedMonth}
                  onChange={handleChangeMonth}
                >
                  <option value="">Select Month</option>
                  {Object.keys(monthMap).map((month) => (
                    <option key={month} value={monthMap[month]}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="btn btn-primary"
                onClick={handleFetchPrediction}
              >
                Fetch Prediction
              </button>
              {predictedDemand !== null && (
                <p>Predicted Demand: {predictedDemand}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cta;
