import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Initialize wishlist state from localStorage or an empty array
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const storedWishlist = localStorage.getItem('wishlistItems');
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    } catch (error) {
      console.error("Failed to load wishlist from localStorage:", error);
      return []; // Return an empty array if there's an error parsing
    }
  });

  // Save wishlist to localStorage whenever the wishlist state changes
  useEffect(() => {
    try {
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    } catch (error) {
      console.error("Failed to save wishlist to localStorage:", error);
    }
  }, [wishlistItems]); // The effect runs whenever 'wishlistItems' state changes

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      // Check if item already exists in wishlist
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If it exists, you might want to do nothing or alert the user
        console.log('Item already in wishlist:', product.name);
        return prevItems; // No change
      }
      // If it doesn't exist, add it
      return [...prevItems, product]; // Add the entire product object
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};