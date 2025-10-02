// components/Navbar.jsx
import React, { useState } from 'react';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown, FiHeart, FiPhone } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);

  const categories = [
    { 
      name: 'Smartphone', 
      href: '/smartphone',
      subcategories: [
        { name: 'iPhone', href: '/smartphone/iphone' },
        { name: 'Samsung', href: '/smartphone/samsung' },
        { name: 'Xiaomi', href: '/smartphone/xiaomi' },
        { name: 'OnePlus', href: '/smartphone/oneplus' }
      ] 
    },
    { 
      name: 'Laptop', 
      href: '/laptop',
      subcategories: [
        { name: 'MacBook', href: '/laptop/macbook' },
        { name: 'Dell', href: '/laptop/dell' },
        { name: 'HP', href: '/laptop/hp' },
        { name: 'Lenovo', href: '/laptop/lenovo' }
      ] 
    },
    { 
      name: 'Smartwatch', 
      href: '/smartwatch',
      subcategories: [
        { name: 'Apple Watch', href: '/smartwatch/apple' },
        { name: 'Samsung Watch', href: '/smartwatch/samsung' },
        { name: 'Fitbit', href: '/smartwatch/fitbit' }
      ] 
    },
    { 
      name: 'Accessories', 
      href: '/accessories',
      subcategories: [
        { name: 'Cases', href: '/accessories/cases' },
        { name: 'Chargers', href: '/accessories/chargers' },
        { name: 'Headphones', href: '/accessories/headphones' },
        { name: 'Cables', href: '/accessories/cables' }
      ] 
    },
    { 
      name: 'Tablets', 
      href: '/tablets',
      subcategories: [
        { name: 'iPad', href: '/tablets/ipad' },
        { name: 'Samsung Tab', href: '/tablets/samsung' },
        { name: 'Android Tablets', href: '/tablets/android' }
      ] 
    },
    { 
      name: 'Audio', 
      href: '/audio',
      subcategories: [
        { name: 'Earbuds', href: '/audio/earbuds' },
        { name: 'Headphones', href: '/audio/headphones' },
        { name: 'Speakers', href: '/audio/speakers' }
      ] 
    }
  ];

  const toggleMobileCategory = (index) => {
    setOpenMobileCategory(openMobileCategory === index ? null : index);
  };

  const {cart} =useCart()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar with Announcement & Quick Links */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <FiPhone className="text-sm" />
              <span>+1 (555) 123-4567</span>
            </div>
            <p className="font-medium">🎉 Free shipping on orders over $50!</p>
            <div className="hidden md:flex items-center gap-4">
              <a href="/track-order" className="hover:underline">Track Order</a>
              <a href="/help" className="hover:underline">Help</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img 
                className="h-10 md:h-12 w-auto object-contain" 
                src={logo} 
                alt="eShop Logo" 
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-orange-600 font-medium transition">
                Home
              </a>
              <a href="/products" className="text-gray-700 hover:text-orange-600 font-medium transition">
                All Products
              </a>
             
              <a href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition">
                About Us
              </a>
              <a href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition">
                Contact
              </a>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-3 md:gap-5">
              {/* Wishlist - Hidden on small mobile */}
              <a 
                href="/wishlist" 
                className="hidden sm:flex flex-col items-center group"
              >
                <div className="relative">
                  <FiHeart className="text-xl md:text-2xl text-gray-700 group-hover:text-orange-600 transition" />
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    2
                  </span>
                </div>
                <span className="hidden md:block text-xs text-gray-600 mt-1">Wishlist</span>
              </a>

              {/* Account */}
              <Link to="/admin" className="flex flex-col items-center group">
                <FiUser className="text-xl md:text-2xl text-gray-700 group-hover:text-orange-600 transition" />
                <span className="hidden md:block text-xs text-gray-600 mt-1">Account</span>
              </Link>

              {/* Cart */}
              <Link to="/cart" className="flex flex-col items-center group relative">
                <div className="relative">
                  <FiShoppingCart className="text-xl md:text-2xl text-gray-700 group-hover:text-orange-600 transition" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cart.length}
                  </span>
                </div>
                <span className="hidden md:block text-xs text-gray-600 mt-1">Cart</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-2xl text-gray-700 ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Bar - Desktop Only */}
      <div className="hidden lg:block bg-gray-50">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-6 xl:gap-8 py-3">
            {categories.map((category, index) => (
              <li key={index} className="relative group">
                <a
                  href={category.href}
                  className="flex items-center gap-1.5 text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                >
                  {category.name}
                  <FiChevronDown className="text-sm group-hover:rotate-180 transition-transform duration-300" />
                </a>

                {/* Dropdown Menu */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-xl rounded-lg py-2 min-w-[200px] border border-gray-100">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase">Browse {category.name}</p>
                    </div>
                    {category.subcategories.map((sub, subIndex) => (
                      <a
                        key={subIndex}
                        href={sub.href}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <a
                        href={category.href}
                        className="block px-4 py-2 text-orange-600 hover:bg-orange-50 font-medium text-sm"
                      >
                        View All →
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-orange-600 to-orange-500">
          <div className="flex items-center gap-3">
            <img src={logo} alt="eShop" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">Menu</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-2xl hover:rotate-90 transition-transform duration-300"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="overflow-y-auto h-[calc(100vh-73px)]">
          {/* Quick Links */}
          <div className="border-b bg-gray-50 p-4">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="/account"
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-orange-500 hover:text-orange-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiUser className="text-lg" />
                <span className="text-sm font-medium">Account</span>
              </a>
              <a
                href="/wishlist"
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-orange-500 hover:text-orange-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHeart className="text-lg" />
                <span className="text-sm font-medium">Wishlist</span>
              </a>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-3 px-2">Main Menu</p>
            <div className="space-y-1 mb-4">
              <a
                href="/"
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/products"
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </a>
              <a
                href="/deals"
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Hot Deals 🔥
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="border-t">
            <div className="p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3 px-2">Categories</p>
              <ul className="space-y-1">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => toggleMobileCategory(index)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition font-medium text-gray-700"
                    >
                      <span>{category.name}</span>
                      <FiChevronDown
                        className={`transition-transform duration-300 ${
                          openMobileCategory === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Subcategories */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openMobileCategory === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="bg-gray-50 rounded-lg my-1 py-2">
                        {category.subcategories.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={sub.href}
                              className="block px-8 py-2.5 text-gray-600 hover:text-orange-600 hover:bg-white transition"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                        <li className="border-t border-gray-200 mt-1 pt-1">
                          <a
                            href={category.href}
                            className="block px-8 py-2 text-orange-600 hover:bg-white font-medium text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            View All {category.name} →
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t p-4 bg-gray-50">
            <div className="space-y-2">
              <a
                href="/about"
                className="block px-4 py-2 text-gray-600 hover:text-orange-600 transition text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block px-4 py-2 text-gray-600 hover:text-orange-600 transition text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/track-order"
                className="block px-4 py-2 text-gray-600 hover:text-orange-600 transition text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Track Order
              </a>
              <a
                href="/help"
                className="block px-4 py-2 text-gray-600 hover:text-orange-600 transition text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;


