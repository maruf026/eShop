// AddCategory.jsx
import React, { useState } from 'react';
import { 
  FiUpload, 
  FiX, 
  FiSave,
  FiImage,
  FiAlertCircle,
  FiToggleLeft,
  FiToggleRight
} from 'react-icons/fi';

const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    parentCategory: '',
    description: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    isActive: true,
    isFeatured: false,
    displayOrder: '',
  });

  const [categoryImage, setCategoryImage] = useState(null);
  const [categoryIcon, setCategoryIcon] = useState(null);

  // Sample parent categories (Replace with actual API data)
  const parentCategories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Fashion' },
    { id: 3, name: 'Home & Garden' },
    { id: 4, name: 'Sports & Outdoors' },
    { id: 5, name: 'Books' },
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Auto-generate slug from name
    if (name === 'name') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  // Handle image upload
  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (type === 'image') {
        setCategoryImage(imageUrl);
      } else {
        setCategoryIcon(imageUrl);
      }
    }
  };

  // Remove image
  const removeImage = (type) => {
    if (type === 'image') {
      setCategoryImage(null);
    } else {
      setCategoryIcon(null);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryData = {
      ...formData,
      image: categoryImage,
      icon: categoryIcon,
    };
    console.log('Category Data:', categoryData);
    // Add your API call here
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Add New Category</h1>
        <p className="text-gray-600 mt-2">Create a new category for your products</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-6 bg-blue-600 mr-3 rounded"></span>
            Basic Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="e.g., Smartphones"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50"
                placeholder="Auto-generated from name"
                required
              />
              <p className="text-xs text-gray-500 mt-1">URL-friendly version of the category name</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Parent Category
              </label>
              <select
                name="parentCategory"
                value={formData.parentCategory}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              >
                <option value="">None (Top Level Category)</option>
                {parentCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">Leave empty for main category</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Order
              </label>
              <input
                type="number"
                name="displayOrder"
                value={formData.displayOrder}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="0"
                min="0"
              />
              <p className="text-xs text-gray-500 mt-1">Lower numbers appear first</p>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Enter category description..."
            ></textarea>
          </div>
        </div>

        {/* Category Images */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-6 bg-emerald-600 mr-3 rounded"></span>
            Category Images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Category Image
              </label>
              
              {!categoryImage ? (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                  <div className="flex flex-col items-center justify-center py-6">
                    <FiImage className="text-4xl text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 font-medium">Upload Category Image</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'image')}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={categoryImage}
                    alt="Category"
                    className="w-full h-48 object-cover rounded-lg border-2 border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage('image')}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
                  >
                    <FiX size={16} />
                  </button>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-2">Recommended size: 800x600px</p>
            </div>

            {/* Category Icon */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Category Icon
              </label>
              
              {!categoryIcon ? (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                  <div className="flex flex-col items-center justify-center py-6">
                    <FiUpload className="text-4xl text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 font-medium">Upload Category Icon</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, SVG up to 1MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'icon')}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative">
                  <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-gray-200">
                    <img
                      src={categoryIcon}
                      alt="Category Icon"
                      className="max-w-full max-h-full object-contain p-4"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage('icon')}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
                  >
                    <FiX size={16} />
                  </button>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-2">Recommended size: 128x128px</p>
            </div>
          </div>
        </div>

        {/* SEO Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-6 bg-purple-600 mr-3 rounded"></span>
            SEO Settings
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Title
              </label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter SEO title"
                maxLength="60"
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.metaTitle.length}/60 characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description
              </label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Enter SEO description"
                maxLength="160"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                {formData.metaDescription.length}/160 characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Keywords
              </label>
              <input
                type="text"
                name="metaKeywords"
                value={formData.metaKeywords}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="keyword1, keyword2, keyword3"
              />
              <p className="text-xs text-gray-500 mt-1">
                Separate keywords with commas
              </p>
            </div>
          </div>
        </div>

        {/* Status Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-6 bg-orange-600 mr-3 rounded"></span>
            Status Settings
          </h2>

          <div className="space-y-4">
            {/* Active Status */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">Active Status</h3>
                <p className="text-xs text-gray-600">
                  Make this category visible to customers
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, isActive: !prev.isActive }))}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  formData.isActive ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    formData.isActive ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Featured Status */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">Featured Category</h3>
                <p className="text-xs text-gray-600">
                  Display this category in featured sections
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, isFeatured: !prev.isFeatured }))}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  formData.isFeatured ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    formData.isFeatured ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <FiAlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="text-sm font-semibold text-blue-900 mb-1">Category Guidelines</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Use clear and descriptive category names</li>
              <li>• Keep category hierarchy logical and organized</li>
              <li>• Upload high-quality images for better user experience</li>
              <li>• Optimize meta tags for better search engine visibility</li>
            </ul>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2"
            >
              <FiSave />
              Save Category
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
