// components/FeaturedProducts.jsx
import React from 'react';
import { FiShoppingCart, FiHeart, FiEye, FiStar } from 'react-icons/fi';
import products from '../data\'/products';

const FeaturedProducts = () => {


  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Featured Products
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Check out our latest and most popular products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0,8).map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-xl transition duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-50">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                
                {/* Badge */}
                <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-semibold px-2 py-1 rounded`}>
                  {product.badge}
                </span>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition">
                    <FiHeart />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition">
                    <FiEye />
                  </button>
                </div>

                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <span className="absolute bottom-3 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <FiStar
                        key={index}
                        className={index < Math.floor(product.rating) ? 'fill-current' : ''}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-orange-600">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2">
                  <FiShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
