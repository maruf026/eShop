// pages/ProductDetail.jsx
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data'/products";

import {
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiMinus,
  FiPlus,
  FiRefreshCw,
  FiShare2,
  FiShield,
  FiShoppingCart,
  FiStar,
  FiTruck,
} from "react-icons/fi";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // const [selectedColor, setSelectedColor] = useState("Space Black");
  // const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [activeTab, setActiveTab] = useState("description");

  const { id } = useParams(); // get id from URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-20">Product not found</h2>;
  }

  // Related products
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  // Reviews data
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      date: "September 15, 2025",
      comment:
        "Absolutely amazing phone! The camera quality is outstanding and the battery lasts all day. Best iPhone yet!",
      verified: true,
    },
    {
      id: 2,
      name: "Sarah Smith",
      rating: 5,
      date: "September 10, 2025",
      comment:
        "The titanium build feels premium and the A17 Pro chip is incredibly fast. Worth every penny!",
      verified: true,
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 4,
      date: "September 5, 2025",
      comment:
        "Great phone overall. Only complaint is the price, but the features justify it. Camera is phenomenal.",
      verified: true,
    },
  ];

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageNavigation = (direction) => {
    if (direction === "next") {
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    } else {
      setSelectedImage(
        (prev) => (prev - 1 + product.images.length) % product.images.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-orange-600">
              Home
            </a>
            <span>/</span>
            <a href="/products" className="hover:text-orange-600">
              Products
            </a>
            <span>/</span>
            <a
              href={`/category/${product.category.toLowerCase()}`}
              className="hover:text-orange-600"
            >
              {product.category}
            </a>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Discount Badge */}
              {product.originalPrice > product.price && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                  -
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </div>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={() => handleImageNavigation("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                onClick={() => handleImageNavigation("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative bg-white rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === index
                      ? "border-orange-600"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <FiStar
                        key={index}
                        className={
                          index < Math.floor(product.rating)
                            ? "fill-current"
                            : ""
                        }
                        size={18}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {product.rating}
                  </span>
                </div>
                <a href="#reviews" className="text-orange-600 hover:underline">
                  ({product.reviews} Reviews)
                </a>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold text-orange-600">
                  ${product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {product.inStock ? (
                  <>
                    <FiCheck className="text-green-600" />
                    <span className="text-green-600 font-medium">In Stock</span>
                  </>
                ) : (
                  <span className="text-red-600 font-medium">Out of Stock</span>
                )}
                <span className="text-gray-500 text-sm ml-4">
                  SKU: {product.sku}
                </span>
              </div>

              {/* Short Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            {/* <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Color: <span className="text-gray-900">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-10 h-10 rounded-full border-2 transition ${
                      selectedColor === color.name
                        ? "border-orange-600 scale-110"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor === color.name && (
                      <FiCheck
                        className="absolute inset-0 m-auto text-white"
                        size={20}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Storage Selection
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Storage:{" "}
                <span className="text-gray-900">{selectedStorage}</span>
              </label>
              <div className="flex items-center gap-3 flex-wrap">
                {product.storage.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`px-6 py-2.5 border-2 rounded-lg font-medium transition ${
                      selectedStorage === storage
                        ? "border-orange-600 bg-orange-50 text-orange-600"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <FiMinus />
                  </button>
                  <span className="px-6 py-2 font-semibold border-x-2 border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2">
                <FiShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 transition">
                <FiHeart size={24} />
              </button>
              <button className="bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 transition">
                <FiShare2 size={24} />
              </button>
            </div>

            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Buy Now
            </button>

            {/* Features Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FiTruck className="text-orange-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Free Delivery</p>
                  <p className="text-xs text-gray-500">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FiShield className="text-orange-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-sm">2 Year Warranty</p>
                  <p className="text-xs text-gray-500">Official warranty</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <FiRefreshCw className="text-orange-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-sm">30-Day Returns</p>
                  <p className="text-xs text-gray-500">Money back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-md mb-12">
          {/* Tab Headers */}
          <div className="border-b">
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-4 font-semibold border-b-2 transition ${
                  activeTab === "description"
                    ? "border-orange-600 text-orange-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("specifications")}
                className={`py-4 font-semibold border-b-2 transition ${
                  activeTab === "specifications"
                    ? "border-orange-600 text-orange-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 font-semibold border-b-2 transition ${
                  activeTab === "reviews"
                    ? "border-orange-600 text-orange-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "description" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Product Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FiCheck className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex border-b border-gray-200 py-3"
                      >
                        <span className="font-semibold text-gray-700 w-1/2">
                          {key}
                        </span>
                        <span className="text-gray-600 w-1/2">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div id="reviews" className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Customer Reviews
                  </h3>
                  <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6 last:border-0"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-semibold text-gray-900">
                              {review.name}
                            </span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center text-yellow-400">
                              {[...Array(5)].map((_, index) => (
                                <FiStar
                                  key={index}
                                  className={
                                    index < review.rating ? "fill-current" : ""
                                  }
                                  size={14}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link to={`/products/${item.id}`}
                key={item.id}
                href={`/product/${item.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition"
              >
                <div className="relative overflow-hidden bg-gray-50">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, index) => (
                        <FiStar
                          key={index}
                          className={
                            index < Math.floor(item.rating)
                              ? "fill-current"
                              : ""
                          }
                          size={12}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">{item.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-orange-600">
                    ${item.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
