import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = [
    { id: 1, name: "Burger", price: 50 },
    { id: 2, name: "Pizza", price: 80 },
  ];

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5>{product.name}</h5>
                <p>R {product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
