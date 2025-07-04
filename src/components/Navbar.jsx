// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext'; // Import WishlistContext
import logo from '../assets/ZappyMartLogo.png';

function Navbar({ theme, toggleTheme }) {
  const { cart } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext); // Use WishlistContext

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length; // Get count of wishlist items

  return (
    <nav className="navbar">
      {/* Left Section: Logo & Brand */}
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Zappy Mart Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Center Section: Main Navigation Links */}
      <div className="navbar-center">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/services" className="navbar-link">Services</Link>
        <Link to="/contact" className="navbar-link">Contact Us</Link>
      </div>

      {/* Right Section: Search, Login, Wishlist, Cart, & Theme Toggle */}
      <div className="navbar-right">
        {/* Search Icon - Now a Link to the Search Page */}
        <Link to="/search" className="navbar-link">
          <i className="bi bi-search nav-icon"></i>
        </Link>

        {/* Login Icon (existing) */}
        <Link to="/Login" className="navbar-link">
          <i className="bi bi-person-circle nav-icon"></i>
        </Link>

        {/* Wishlist Link (NEW) */}
        <Link to="/wishlist" className="navbar-wishlist-link">
          {/* Using Bootstrap Icons for consistency, assuming you have it setup */}
          <i className="bi bi-heart-fill nav-icon"></i> {/* Heart icon for wishlist */}
          {wishlistItemCount > 0 && (
            <span className="cart-count wishlist-count"> {/* Reusing cart-count class, add wishlist-count for specific styling if needed */}
              {wishlistItemCount}
            </span>
          )}
        </Link>

        {/* Cart Link (existing) */}
        <Link to="/cart" className="navbar-cart-link">
          <svg xmlns="http://www.w3.org/2000/svg" className="cart-icon nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartItemCount > 0 && (
            <span className="cart-count">
              {cartItemCount}
            </span>
          )}
        </Link>

        {/* Theme Toggle Button (existing) */}
        <button onClick={toggleTheme} className="theme-toggle-btn nav-icon-btn">
          {theme === 'light' ? (
            <i className="bi bi-moon-fill theme-icon"></i>
          ) : (
            <i className="bi bi-sun-fill theme-icon"></i>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;