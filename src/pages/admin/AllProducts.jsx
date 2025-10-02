// AllProducts.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiEdit, 
  FiTrash2, 
  FiEye, 
  FiPlus, 
  FiSearch,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiMoreVertical,
  FiPackage,
  FiAlertCircle
} from 'react-icons/fi';

const AllProducts = () => {
  const navigate = useNavigate();

  // Sample product data (Replace with actual API data)
  const [products] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "Smartphone",
      brand: "Apple",
      price: 1199,
      originalPrice: 1299,
      rating: 4.8,
      inStock: true,
      sku: "IPH15PM-256-BLK",
      image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&q=80",
      stock: 45,
      sales: 234
    },
    {
      id: 2,
      name: "MacBook Pro 16",
      category: "Laptop",
      brand: "Apple",
      price: 2499,
      originalPrice: 2699,
      rating: 4.9,
      inStock: true,
      sku: "MBP16-512-SLV",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
      stock: 23,
      sales: 156
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      category: "Smartphone",
      brand: "Samsung",
      price: 1199,
      originalPrice: 1299,
      rating: 4.7,
      inStock: true,
      sku: "SGS24U-256-BLK",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
      stock: 67,
      sales: 189
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      brand: "Sony",
      price: 399,
      originalPrice: 449,
      rating: 4.8,
      inStock: true,
      sku: "SNY-WH1000XM5-BLK",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80",
      stock: 89,
      sales: 456
    },
    {
      id: 5,
      name: "iPad Pro 12.9",
      category: "Tablet",
      brand: "Apple",
      price: 1099,
      originalPrice: 1199,
      rating: 4.7,
      inStock: false,
      sku: "IPD-PRO-12.9-SLV",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
      stock: 0,
      sales: 123
    },
    {
      id: 6,
      name: "Dell XPS 15",
      category: "Laptop",
      brand: "Dell",
      price: 1799,
      originalPrice: 1999,
      rating: 4.6,
      inStock: true,
      sku: "DELL-XPS15-512",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80",
      stock: 34,
      sales: 98
    },
    {
      id: 7,
      name: "Canon EOS R6",
      category: "Camera",
      brand: "Canon",
      price: 2499,
      originalPrice: 2699,
      rating: 4.9,
      inStock: true,
      sku: "CAN-EOSR6-BDY",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
      stock: 12,
      sales: 67
    },
    {
      id: 8,
      name: "Apple Watch Series 9",
      category: "Smartwatch",
      brand: "Apple",
      price: 429,
      originalPrice: 499,
      rating: 4.8,
      inStock: true,
      sku: "AW-S9-45MM-GPS",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
      stock: 78,
      sales: 312
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStock, setFilterStock] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === '' || filterCategory === 'All' || product.category === filterCategory;
    
    const matchesStock = filterStock === '' || 
                        (filterStock === 'inStock' && product.inStock) ||
                        (filterStock === 'outOfStock' && !product.inStock);
    
    return matchesSearch && matchesCategory && matchesStock;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handle actions
  const handleView = (id) => {
    console.log('View product:', id);
    // Navigate to product detail page
  };

  const handleEdit = (id) => {
    console.log('Edit product:', id);
    // Navigate to edit page
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log('Delete product:', selectedProduct.id);
    setShowDeleteModal(false);
    setSelectedProduct(null);
    // Add your delete API call here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">All Products</h1>
          <p className="text-gray-600 mt-1">Manage your product inventory</p>
        </div>
        <button
          onClick={() => navigate('/admin/add-product')}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-sm"
        >
          <FiPlus size={20} />
          Add Product
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Products</p>
              <p className="text-2xl font-bold text-gray-800">{products.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FiPackage className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-emerald-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">In Stock</p>
              <p className="text-2xl font-bold text-gray-800">
                {products.filter(p => p.inStock).length}
              </p>
            </div>
            <div className="bg-emerald-100 p-3 rounded-lg">
              <FiPackage className="text-emerald-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Out of Stock</p>
              <p className="text-2xl font-bold text-gray-800">
                {products.filter(p => !p.inStock).length}
              </p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <FiAlertCircle className="text-red-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Categories</p>
              <p className="text-2xl font-bold text-gray-800">
                {new Set(products.map(p => p.category)).size}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <FiFilter className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          >
            {categories.map(cat => (
              <option key={cat} value={cat === 'All' ? '' : cat}>{cat}</option>
            ))}
          </select>

          {/* Stock Filter */}
          <select
            value={filterStock}
            onChange={(e) => setFilterStock(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          >
            <option value="">All Stock Status</option>
            <option value="inStock">In Stock</option>
            <option value="outOfStock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Products Grid - Mobile View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
        {currentProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                product.inStock ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.brand} • {product.category}</p>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <span>Stock: {product.stock}</span>
                <span>Sales: {product.sales}</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleView(product.id)}
                  className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition flex items-center justify-center gap-2"
                >
                  <FiEye size={16} />
                  View
                </button>
                <button
                  onClick={() => handleEdit(product.id)}
                  className="flex-1 px-3 py-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition flex items-center justify-center gap-2"
                >
                  <FiEdit size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product)}
                  className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Products Table - Desktop View */}
      <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Sales
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentProducts.map(product => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.brand}</p>
                        <p className="text-xs text-gray-400 mt-0.5">SKU: {product.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">${product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">${product.originalPrice}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700 font-medium">{product.stock}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700 font-medium">{product.sales}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                      product.inStock 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleView(product.id)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="View"
                      >
                        <FiEye size={18} />
                      </button>
                      <button
                        onClick={() => handleEdit(product.id)}
                        className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                        title="Edit"
                      >
                        <FiEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(product)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredProducts.length)} of {filteredProducts.length} products
            </p>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <FiChevronLeft size={20} />
              </button>
              
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded-lg transition ${
                      currentPage === index + 1
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <FiAlertCircle className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Delete Product</h3>
                <p className="text-sm text-gray-600">This action cannot be undone</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete <span className="font-semibold">{selectedProduct?.name}</span>?
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <FiPackage className="mx-auto text-gray-400 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setFilterCategory('');
              setFilterStock('');
            }}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
