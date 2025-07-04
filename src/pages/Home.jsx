import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products'; // Your product data
import { useState, useEffect } from 'react'; // Import useState and useEffect

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Home = () => {
  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All' categories

  // State for sorting
  const [sortOption, setSortOption] = useState('none'); // Default no specific sorting

  // State to hold the products that will be displayed after filtering and sorting
  const [displayedProducts, setDisplayedProducts] = useState([]);

  // Derive unique categories from your products data
  // Using a Set ensures uniqueness, then convert back to an array
  const uniqueCategories = ['All', ...new Set(products.map(p => p.category))];

  // useEffect hook to apply filtering and sorting whenever dependencies change
  useEffect(() => {
    let filtered = products;

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = products.filter(product => product.category === selectedCategory);
    }

    // Apply sorting
    let sorted = [...filtered]; // Create a shallow copy to avoid mutating the original array
    if (sortOption === 'priceAsc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'nameAsc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    // You can add more sort options (e.g., 'nameDesc', 'idAsc', etc.) here

    setDisplayedProducts(sorted);
  }, [selectedCategory, sortOption, products]); // Dependencies: re-run when these change

  const bannerImages = [
    {
      id: 1,
      src: "https://bonanzasatrangi.com/cdn/shop/files/web_8df9a74f-a55b-42ef-9c23-08e033141d4c.webp?v=1750143962&width=5000",
      alt: "Welcome to ShopEasy",
      title: "Welcome to ShopEasy",
      subtitle: "Discover amazing products at unbeatable prices",
      link: "/shop"
    },
    {
      id: 2,
      src: "https://bonanzasatrangi.com/cdn/shop/files/HeroBanner_Web_2aba27aa-4a4b-44d4-948b-87ca148a1112.webp?v=1750066466",
      alt: "New Arrivals",
      title: "New Arrivals",
      subtitle: "Stay ahead with the latest trends",
      link: "/shop"
    },
    {
      id: 3,
      src: "https://bonanzasatrangi.com/cdn/shop/files/Sale_1.webp?v=1749633390&width=2000",
      alt: "Limited Time Offers",
      title: "Limited Time Offers",
      subtitle: "Don't miss out on incredible deals",
      link: "/shop"
    },
  ];

  return (
    <div>
      {/* Hero Section - Swiper */}
      <div className="hero-swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect="slide"
        >
          {bannerImages.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="hero-slide" style={{ backgroundImage: `url(${banner.src})` }}>
                {/* Banner content */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* All Products Section */}
      <div className="container all-products-section">
        <h2 className="section-title">Our Products</h2>

        {/* Category and Sort Components */}
        <div className="filters-and-sort-container">
          {/* Category Filter */}
          <div className="filter-group">
            <label htmlFor="category-select" className="filter-label">Category:</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {uniqueCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Sort Option */}
          <div className="filter-group">
            <label htmlFor="sort-select" className="filter-label">Sort by:</label>
            <select
              id="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="filter-select"
            >
              <option value="none">Default</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="nameAsc">Name: A-Z</option>
              {/* Add more sort options as needed */}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {displayedProducts.length > 0 ? (
            displayedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="no-products-message">No products found for the selected criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};