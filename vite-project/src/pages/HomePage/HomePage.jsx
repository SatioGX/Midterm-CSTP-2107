import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function Homepage() {
  return (
    <div className="container">
          <h1>Welcome to Fake Store</h1>
          <p>Your one-stop destination for amazing products.</p>
          <Link to="/ProductList" className="btn-productList">
            Take Me to the Store
          </Link>
    </div>
  );
}

export default Homepage;