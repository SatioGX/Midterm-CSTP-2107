import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [productId]);

  if (!product) {
    return <p>Could not fetch product</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-detail">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-detail">
        <h1>{product.title}</h1>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
