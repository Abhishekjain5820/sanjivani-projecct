import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AllProducts() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // Start currentPage from 0
  const [error, setError] = useState(null);
  const itemsPerPage = 10; // Number of items to display per page
  const navigate = useNavigate();

  const fetchProducts = async (page) => {
    try {
      const limit = itemsPerPage; // Set limit to itemsPerPage
      const offset = page * itemsPerPage; // Calculate offset based on page number and itemsPerPage
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
      setProductCount(response.data.length); // Calculate the length of the products list
    } catch (error) {
      setError("Failed to fetch product count");
      console.error("Error fetching product count:", error);
    }
  };
  //console.log(currentPage)
  useEffect(() => {
    fetchProducts(currentPage);
    fetchProductCount();
  }, [currentPage]);

  const handleViewMore = (productId) => {
    navigate(`/product/${productId}`);
  };

  const totalPages = Math.ceil(productCount / itemsPerPage);
  console.log(productCount);

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
            {/* <th>Action</th> */}
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
              {/* <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleViewMore(product.id)}
                >
                  View More
                </button>
              </td> */}
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
