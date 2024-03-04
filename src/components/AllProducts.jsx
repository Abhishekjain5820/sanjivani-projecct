import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState(null);
  const [prediction, setPrediction] = useState(0);
  const [showPrediction, setShowPrediction] = useState(false);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const fetchProducts = async (page) => {
    try {
      const limit = itemsPerPage;
      const offset = page * itemsPerPage;
      const response = await axios.get("http://127.0.0.1:8000/inventory", {
        params: {
          limit: limit,
          offset: offset,
        },
      });
      setProducts(response.data);
    } catch (error) {
      setError("Failed to fetch products");
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductCount = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/all_inventory");
      setProductCount(response.data.length);
    } catch (error) {
      setError("Failed to fetch product count");
      console.error("Error fetching product count:", error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
    fetchProductCount();
  }, [currentPage]);

  const handlePrediction = async (productId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/prediction/${productId}`
      );
      setPrediction(response.data.prediction);
      setShowPrediction(true);
    } catch (error) {
      setError("Failed to fetch prediction");
      console.error("Error fetching prediction:", error);
    }
  };

  const handleClick = async (productId) => {
    navigate(`/products/${productId}`);
  };

  const totalPages = Math.ceil(productCount / itemsPerPage);

  return (
    <div className="container">
      {error && <p>Error fetching data: {error}</p>}
      <h2 className="mt-4 mb-3">Major Products</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Month</th>
            <th>Year</th>
            <th>GP Index</th>
            <th>PLU Number</th>
            <th>Item Name</th>
            <th>Net Quantity</th>
            <th>Opening Stock</th>
            <th>Closing Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.month}</td>
              <td>{product.year}</td>
              <td>{product.gp_index}</td>
              <td>{product.pluno}</td>
              <td>{product.item_name}</td>
              <td>{product.net_qty}</td>
              <td>{product.opening_stock}</td>
              <td>{product.closing_stock}</td>
              <td>
                <Link to={`/products/${product.pluno}`}>
                  <button className="btn btn-primary">
                    Prediction
                  </button>
                </Link>
              </td>
              <td>{showPrediction && prediction}</td> {/* Display prediction when showPrediction is true */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {/* Render page numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages - 1 ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AllProducts;
