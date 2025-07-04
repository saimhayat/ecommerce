import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import Login from './pages/Login';
import { SearchPage } from './pages/SearchPage';
import CheckoutPage from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage'; // Import WishlistPage

import './styles.css';

// ✅ Import Toast support
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'theme-dark' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Wrap the entire application with WishlistProvider first, then CartProvider
    // This order is important if WishlistPage (which is inside WishlistProvider) needs CartContext
    <WishlistProvider>
      <CartProvider>
        <Router>
          <div className="app-container">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/wishlist" element={<WishlistPage />} /> {/* New Wishlist Route */}
              </Routes>
            </main>
            <Footer />
          </div>

          {/* ✅ Toast container for app-wide notifications */}
          <ToastContainer position="top-center" autoClose={1500} />
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;