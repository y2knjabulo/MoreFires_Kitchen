import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">FastFood App</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
        <Link className="nav-link" to="/signin">Sign In</Link>
        <Link className="nav-link" to="/register">Register</Link>
        <Link className="nav-link" to="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
