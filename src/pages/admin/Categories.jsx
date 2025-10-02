// Categories.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiEdit, 
  FiTrash2, 
  FiPlus, 
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiAlertCircle,
  FiTag,
  FiToggleLeft,
  FiToggleRight,
  FiLayers,
  FiStar,
  FiEye,
  FiEyeOff
} from 'react-icons/fi';

const Categories = () => {
  const navigate = useNavigate();

  // Sample category data (Replace with actual API data)
  const [categories] = useState([
    {
      id: 1,
      name: 'Electronics',
      slug: 'electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80',
      parentCategory: null,
      productsCount: 156,
      isActive: true,
      isFeatured: true,
      displayOrder: 1,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Smartphones',
      slug: 'smartphones',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
      parentCategory: 'Electronics',
      productsCount: 89,
      isActive: true,
      isFeatured: true,
      displayOrder: 2,
      createdAt: '2024-01-16'
    },
    {
      id: 3,
      name: 'Fashion',
      slug: 'fashion',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
      parentCategory: null,
      productsCount: 234,
      isActive: true,
      isFeatured: false,
      displayOrder: 3,
      createdAt: '2024-01-20'
    },
    {
      id: 4,
      name: 'Laptops',
      slug: 'laptops',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
      parentCategory: 'Electronics',
      productsCount: 45,
      isActive: true,
      isFeatured: false,
      displayOrder: 4,
      createdAt: '2024-02-01'
    },
    {
      id: 5,
      name: 'Home & Garden',
      slug: 'home-garden',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&q=80',
      parentCategory: null,
      productsCount: 178,
      isActive: false,
      isFeatured: false,
      displayOrder: 5,
      createdAt: '2024-02-10'
    },
    {
      id: 6,
      name: 'Headphones',
      slug: 'headphones',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
      parentCategory: 'Electronics',
      productsCount: 67,
      isActive: true,
      isFeatured: true,
      displayOrder: 6,
      createdAt: '2024-02-15'
    },
    {
      id: 7,
      name: 'Sports & Outdoors',
      slug: 'sports-outdoors',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80',
      parentCategory: null,
      productsCount: 112,
      isActive: true,
      isFeatured: false,
      displayOrder: 7,
      createdAt: '2024-02-20'
    },
    {
      id: 8,
      name: 'Cameras',
      slug: 'cameras',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80',
      parentCategory: 'Electronics',
      productsCount: 34,
      isActive: true,
      isFeatured: false,
      displayOrder: 8,
      createdAt: '2024-03-01'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterFeatured, setFilterFeatured] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Filter categories
  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.slug.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === '' || 
                         (filterStatus === 'active' && category.isActive) ||
                         (filterStatus === 'inactive' && !category.isActive);
    
    const matchesFeatured = filterFeatured === '' ||
                           (filterFeatured === 'featured' && category.isFeatured) ||
                           (filterFeatured === 'notFeatured' && !category.isFeatured);
    
    return matchesSearch && matchesStatus && matchesFeatured;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  // Handle actions
  const handleEdit = (id) => {
    console.log('Edit category:', id);
    // Navigate to edit page
    navigate(`/admin/edit-category/${id}`);
  };

  const handleDelete = (category) => {
    setSelectedCategory(category);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log('Delete category:', selectedCategory.id);
    setShowDeleteModal(false);
    setSelectedCategory(null);
    // Add your delete API call here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Categories</h1>
          <p className="text-gray-600 mt-1">Manage your product categories</p>
        </div>
        <button
          onClick={() => navigate('/admin/add-category')}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-sm"
        >
          <FiPlus size={20} />
          Add Category
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Categories</p>
              <p className="text-2xl font-bold text-gray-800">{categories.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FiTag className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-emerald-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active</p>
              <p className="text-2xl font-bold text-gray-800">
                {categories.filter(c => c.isActive).length}
              </p>
            </div>
            <div className="bg-emerald-100 p-3 rounded-lg">
              <FiEye className="text-emerald-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Featured</p>
              <p className="text-2xl font-bold text-gray-800">
                {categories.filter(c => c.isFeatured).length}
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <FiStar className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Products</p>
              <p className="text-2xl font-bold text-gray-800">
                {categories.reduce((sum, c) => sum + c.productsCount, 0)}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <FiLayers className="text-purple-600" size={24} />
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
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          {/* Featured Filter */}
          <select
            value={filterFeatured}
            onChange={(e) => setFilterFeatured(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          >
            <option value="">All Categories</option>
            <option value="featured">Featured Only</option>
            <option value="notFeatured">Not Featured</option>
          </select>
        </div>
      </div>

      {/* Categories Grid - Mobile & Tablet View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
        {currentCategories.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
            <div className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                {category.isActive && (
                  <span className="px-2 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                    Active
                  </span>
                )}
                {category.isFeatured && (
                  <span className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <FiStar size={12} /> Featured
                  </span>
                )}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
              {category.parentCategory && (
                <p className="text-xs text-gray-500 mb-2">Parent: {category.parentCategory}</p>
              )}
              <p className="text-sm text-gray-600 mb-3">
                {category.productsCount} Products
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(category.id)}
                  className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition flex items-center justify-center gap-2"
                >
                  <FiEdit size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category)}
                  className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Table - Desktop View */}
      <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Parent
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Featured
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentCategories.map(category => (
                <tr key={category.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{category.name}</p>
                        <p className="text-xs text-gray-500">/{category.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {category.parentCategory ? (
                      <span className="inline-flex px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {category.parentCategory}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">{category.productsCount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700 font-medium">{category.displayOrder}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${
                      category.isActive 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.isActive ? <FiEye size={14} /> : <FiEyeOff size={14} />}
                      {category.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {category.isFeatured ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                        <FiStar size={14} />
                        Featured
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleEdit(category.id)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Edit"
                      >
                        <FiEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(category)}
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
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredCategories.length)} of {filteredCategories.length} categories
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
                <h3 className="text-lg font-semibold text-gray-900">Delete Category</h3>
                <p className="text-sm text-gray-600">This action cannot be undone</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-2">
              Are you sure you want to delete <span className="font-semibold">{selectedCategory?.name}</span>?
            </p>
            
            {selectedCategory?.productsCount > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4 flex items-start gap-2">
                <FiAlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                <p className="text-sm text-yellow-800">
                  This category contains {selectedCategory.productsCount} products. They will be uncategorized.
                </p>
              </div>
            )}
            
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
      {filteredCategories.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <FiTag className="mx-auto text-gray-400 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No categories found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setFilterStatus('');
              setFilterFeatured('');
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

export default Categories;
