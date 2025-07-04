import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext'; // Import WishlistContext

export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext); // Get wishlistItems and removeFromWishlist

  // Check if the current product is already in the wishlist
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      console.log('Removed from wishlist:', product.name);
      // Optional: Add a toast notification for removal
      // toast.info(`${product.name} removed from your wishlist!`);
    } else {
      addToWishlist(product);
      console.log('Added to wishlist:', product.name);
      // Optional: Add a toast notification for addition
      // toast.success(`${product.name} added to your wishlist!`);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </Link>
        <div className="hover-buttons">
          <button
            onClick={() => addToCart(product)}
            className="btn cart-btn"
          >
            Add to Cart
          </button>
          <button
            onClick={handleWishlistClick}
            // Conditionally add a class for styling if in wishlist, or disable
            className={`btn wishlist-btn ${isInWishlist ? 'in-wishlist' : ''}`}
            // You can also disable the button if it's in the wishlist to prevent re-adding
            // disabled={isInWishlist}
          >
            {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
            {/* If you REALLY wanted a "counter" here, it would likely just be (1) for 'in wishlist' status */}
            {/* {isInWishlist ? 'In Wishlist (1)' : 'Add to Wishlist'} */}
          </button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">
          <Link to={`/product/${product.id}`} className="product-name-link">
            {product.name}
          </Link>
        </h3>
        <span className="product-price">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};