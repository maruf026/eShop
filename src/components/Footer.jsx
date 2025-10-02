// components/Footer.jsx
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">eShop</h3>
            <p className="text-gray-400 mb-4">
              Your trusted destination for premium electronics and accessories. Quality products at competitive prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition">
                <FiFacebook className="text-xl" />
              </a>
              
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition">
                <FiInstagram className="text-xl" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition">
                <FiYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
              <li><a href="#" className="hover:text-white transition">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Returns Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-xl mt-1 flex-shrink-0" />
                <span>123 Tech Street, Digital City, TC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-xl" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-xl" />
                <span>support@eshop.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              We accept:
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="bg-white px-3 py-1 rounded">
                <span className="text-blue-600 font-bold text-sm">VISA</span>
              </div>
              <div className="bg-white px-3 py-1 rounded">
                <span className="text-blue-700 font-bold text-sm">Mastercard</span>
              </div>
              <div className="bg-white px-3 py-1 rounded">
                <span className="text-blue-400 font-bold text-sm">PayPal</span>
              </div>
              <div className="bg-white px-3 py-1 rounded">
                <span className="text-purple-600 font-bold text-sm">Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2025 eShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
