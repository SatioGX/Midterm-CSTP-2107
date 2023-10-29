import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Welcome to Fake Store</h1>
      <p>Your one-stop destination for amazing products.</p>


      <Link to="/ProductList" className="btn-productList">
        Take Me to the Store
      </Link>
      <div className="carousel-container">
        <Carousel style={{ height: '300px', width: '300px' }}>
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="d-block w-100 h-100 carousel-image"
                style={{ objectFit: 'contain' }}
              />
              <Carousel.Caption>
                <h3 style={{ color: 'black' }}>{product.title}</h3>
                <p style={{ color: 'black' }}>${product.price.toFixed(2)}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Homepage;