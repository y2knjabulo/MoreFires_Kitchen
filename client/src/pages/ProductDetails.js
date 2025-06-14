import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="container mt-4">
      <h2>Product Details - #{id}</h2>
      <p>Description of product #{id}</p>
      <button className="btn btn-success">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
