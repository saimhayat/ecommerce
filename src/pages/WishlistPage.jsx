import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Wishlist.css'; // Correct path as it's in the same directory as WishlistPage.jsx

export const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCartFromWishlist = (product) => {
    addToCart(product);
    removeFromWishlist(product.id); // Optional: Remove from wishlist after adding to cart
    alert(`${product.name} has been added to your cart!`);
  };

  if (wishlistItems.length === 0) {
    return (
      // Added 'empty-wishlist-content' class here
      <div className="container py-8 text-center empty-wishlist-content">
        <h2 className="text-3xl font-bold mb-8">Your Wishlist is Empty</h2>
        <p className="text-lg mb-8">Start adding your favorite items!</p>
        <Link to="/" className="btn cart-btn">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Your Wishlist</h1>

      <div className="wishlist-grid mb-8">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item product-card">
            <Link to={`/product/${item.id}`} className="wishlist-item-image-wrapper">
              <img src={item.image} alt={item.name} className="wishlist-item-image product-image" />
            </Link>
            <div className="wishlist-item-details product-info">
              <h3 className="product-name">
                <Link to={`/product/${item.id}`} className="product-name-link">
                  {item.name}
                </Link>
              </h3>
              <p className="product-price">${item.price.toFixed(2)}</p>
              <div className="wishlist-item-actions">
                <button
                  onClick={() => handleAddToCartFromWishlist(item)}
                  className="btn cart-btn"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="btn wishlist-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button onClick={clearWishlist} className="btn clear-wishlist-btn">
          Clear Wishlist
        </button>
      </div>
    </div>
  );
};