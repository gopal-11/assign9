import { useEffect, useState } from 'react';
import './App.css';
import YourSolution from './Solution/YourSolution';

const APIURL = 'http://localhost:3001/api/products';

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState([0]);

  // handle page change
  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  // fetch products on basis of page number
  const fetchProducts = () => {
    fetch(`${APIURL}?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(data.totalPages - 1);
      });
  };

  // dervie columns from product object
  const getColumns = () => {
    let columns = [];
    let product = products[0];

    for (let key in product) {
      columns.push(key);
    }

    return columns;
  };

  useEffect(() => {
    fetchProducts();
  }, [pageNumber]);

  return (
    <div className="App">
      <YourSolution
        columns={getColumns()}
        rows={products}
        page={pageNumber}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
