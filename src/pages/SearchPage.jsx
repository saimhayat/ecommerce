// src/pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import '../styles.css';
import { ProductCard } from '../components/ProductCard';

// Import your dummy products from products.js
// Adjust the path below based on where your products.js file is located
import { products } from '../data/products'; // Assuming products.js is in src/data/

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // Load products from your DUMMY_PRODUCTS array
  useEffect(() => {
    setAllProducts(products);
    setFilteredProducts(products); // Initialize filtered products with all products
  }, []); // Empty dependency array means this runs only once on mount

  // This useEffect handles filtering and sorting whenever dependencies change
  useEffect(() => {
    let currentProducts = [...allProducts]; // Start with a copy of all products

    // 1. Filter by Search Term
    if (searchTerm) {
      currentProducts = currentProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Filter by Category
    if (selectedCategory) {
      currentProducts = currentProducts.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 3. Sort Products
    if (selectedSort) {
      currentProducts.sort((a, b) => {
        if (selectedSort === 'price-asc') {
          return a.price - b.price;
        } else if (selectedSort === 'price-desc') {
          return b.bprice - a.price; // Corrected: b.price - a.price for descending
        } else if (selectedSort === 'name-asc') {
          return a.name.localeCompare(b.name);
        }
        return 0; // No sort or unknown sort
      });
    }

    setFilteredProducts(currentProducts);
  }, [searchTerm, selectedCategory, selectedSort, allProducts]); // Dependencies for re-running filter/sort

  // Extract unique categories for the dropdown from allProducts
  // This will dynamically get categories from your 50 products
  const categories = [...new Set(allProducts.map(p => p.category))];

  return (
    <div className="main-content-page search-page-container">
      <h1 className="page-title">Search Products</h1>
      <p className="page-description">Find exactly what you're looking for!</p>

      <div className="search-controls-wrapper">
        <div className="search-bar-and-input">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input-page"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="search-filters-page">
          <div className="search-filter-item-page">
            <i className="bi bi-grid-fill filter-icon-page"></i>
            <select
              className="filter-select-page"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
              ))}
            </select>
          </div>

          <div className="search-filter-item-page">
            <i className="bi bi-sort-alpha-down filter-icon-page"></i>
            <select
              className="filter-select-page"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value="">Default Sort</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
            </select>
          </div>
        </div>
      </div>

      <div className="search-results-area product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products-message">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};