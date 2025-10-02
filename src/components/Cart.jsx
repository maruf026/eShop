// pages/Cart.jsx
import React, { useState } from 'react';
import { Link, Links } from 'react-router-dom';
import { 
  FiTrash2, 
  FiPlus, 
  FiMinus, 
  FiShoppingBag, 
  FiArrowRight,
  FiTag,
  FiTruck,
  FiShield,
  FiHeart
} from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';


const Cart = () => {
  const { cart, setCart } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  // Coupon codes
  const validCoupons = {
    'SAVE10': { discount: 10, type: 'percentage' },
    'SAVE50': { discount: 50, type: 'fixed' },
    'FREESHIP': { discount: 0, type: 'shipping' }
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 50 || appliedCoupon?.type === 'shipping' ? 0 : 15;
  const discount = appliedCoupon 
    ? appliedCoupon.type === 'percentage' 
      ? (subtotal * appliedCoupon.discount) / 100 
      : appliedCoupon.discount
    : 0;
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal - discount + tax + shippingCost;

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Move to wishlist
  const moveToWishlist = (id) => {
    // In real app, this would add to wishlist
    removeItem(id);
  };

  // Apply coupon
  const applyCoupon = () => {
    const code = couponCode.toUpperCase();
    if (validCoupons[code]) {
      setAppliedCoupon({ code, ...validCoupons[code] });
      setCouponError('');
      setCouponCode('');
    } else {
      setCouponError('Invalid coupon code');
      setAppliedCoupon(null);
    }
  };

  // Remove coupon
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-1">{cart.length} items in your cart</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {cart.length === 0 ? (
          // Empty Cart
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <FiShoppingBag className="mx-auto text-gray-400 mb-4" size={64} />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Continue Shopping
              <FiArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-4">
              {/* Free Shipping Progress Bar */}
              {subtotal < 50 && (
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">
                      Add <span className="text-orange-600 font-bold">${(50 - subtotal).toFixed(2)}</span> more for free shipping!
                    </p>
                    <FiTruck className="text-orange-600" size={20} />
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-orange-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Cart Items */}
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full sm:w-32 h-32 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-xs text-gray-500">{item.brand}</p>
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.color && (
                              <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                Color: {item.color}
                              </span>
                            )}
                            {item.storage && (
                              <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                {item.storage}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600 transition"
                          title="Remove item"
                        >
                          <FiTrash2 size={20} />
                        </button>
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                        <div className="flex items-center gap-4">
                          {/* Quantity Selector */}
                          <div className="flex items-center border-2 border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-2 hover:bg-gray-100 transition"
                              disabled={item.quantity <= 1}
                            >
                              <FiMinus size={16} />
                            </button>
                            <span className="px-4 py-2 font-semibold border-x-2 border-gray-300 min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-2 hover:bg-gray-100 transition"
                            >
                              <FiPlus size={16} />
                            </button>
                          </div>

                          {/* Move to Wishlist */}
                          <button
                            onClick={() => moveToWishlist(item.id)}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition"
                          >
                            <FiHeart size={16} />
                            <span className="hidden sm:inline">Save for later</span>
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-2xl font-bold text-orange-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>

                      {/* Stock Status */}
                      {item.inStock ? (
                        <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                          In Stock
                        </p>
                      ) : (
                        <p className="text-sm text-red-600 mt-2">Out of Stock</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping Button - Mobile */}
              <Link
                to="/products"
                className="lg:hidden flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FiTag className="inline mr-2" />
                    Coupon Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                      disabled={appliedCoupon !== null}
                    />
                    {appliedCoupon ? (
                      <button
                        onClick={removeCoupon}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={applyCoupon}
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                  {couponError && (
                    <p className="text-red-500 text-sm mt-2">{couponError}</p>
                  )}
                  {appliedCoupon && (
                    <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                      ✓ Coupon "{appliedCoupon.code}" applied!
                    </p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({cart.length} items)</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span className="font-semibold">-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shippingCost === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Tax (8%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-orange-600">${total.toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <Link to='/checkout'>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition mb-3 flex items-center justify-center gap-2">
                  Proceed to Checkout
                  <FiArrowRight />
                </button>
                </Link>

                {/* Continue Shopping - Desktop */}
                <Link
                  to="/products"
                  className="hidden lg:block w-full text-center bg-white text-gray-700 border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Continue Shopping
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FiShield className="text-green-600" size={20} />
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FiTruck className="text-orange-600" size={20} />
                    <span>Free shipping on orders over $50</span>
                  </div>
                </div>

                {/* Accepted Payment Methods */}
                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-gray-500 mb-3">We accept:</p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="bg-gray-100 px-3 py-2 rounded text-xs font-semibold text-gray-700">
                      VISA
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded text-xs font-semibold text-gray-700">
                      Mastercard
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded text-xs font-semibold text-gray-700">
                      PayPal
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded text-xs font-semibold text-gray-700">
                      Apple Pay
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
