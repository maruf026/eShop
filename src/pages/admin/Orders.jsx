import React, { useState, useEffect } from 'react';

// Dummy Orders Data
const dummyOrders = [
  {
    _id: '1',
    orderId: 'ORD-2025-001',
    customer: {
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567'
    },
    items: [
      {
        name: 'Wireless Headphones',
        quantity: 1,
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop'
      },
      {
        name: 'Phone Case',
        quantity: 2,
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 129.97,
    shipping: 10.00,
    tax: 14.00,
    totalAmount: 153.97,
    status: 'delivered',
    shippingAddress: {
      fullAddress: '123 Main St, New York, NY 10001'
    },
    createdAt: '2025-09-15T10:30:00Z'
  },
  {
    _id: '2',
    orderId: 'ORD-2025-002',
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 234-5678'
    },
    items: [
      {
        name: 'Laptop Stand',
        quantity: 1,
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 45.99,
    shipping: 8.00,
    tax: 5.40,
    totalAmount: 59.39,
    status: 'shipped',
    shippingAddress: {
      fullAddress: '456 Oak Ave, Los Angeles, CA 90001'
    },
    createdAt: '2025-09-20T14:20:00Z'
  },
  {
    _id: '3',
    orderId: 'ORD-2025-003',
    customer: {
      name: 'Michael Brown',
      email: 'michael.b@email.com',
      phone: '+1 (555) 345-6789'
    },
    items: [
      {
        name: 'Smartwatch',
        quantity: 1,
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop'
      },
      {
        name: 'Watch Band',
        quantity: 2,
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1617625802912-cad62503ad6b?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 259.97,
    shipping: 12.00,
    tax: 27.20,
    totalAmount: 299.17,
    status: 'processing',
    shippingAddress: {
      fullAddress: '789 Pine Rd, Chicago, IL 60601'
    },
    createdAt: '2025-09-28T09:15:00Z'
  },
  {
    _id: '4',
    orderId: 'ORD-2025-004',
    customer: {
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 (555) 456-7890'
    },
    items: [
      {
        name: 'Bluetooth Speaker',
        quantity: 1,
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop'
      },
      {
        name: 'USB Cable',
        quantity: 3,
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1591290619762-aa4e4e1b5a5f?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 109.96,
    shipping: 10.00,
    tax: 12.00,
    totalAmount: 131.96,
    status: 'pending',
    shippingAddress: {
      fullAddress: '321 Elm St, Houston, TX 77001'
    },
    createdAt: '2025-10-01T16:45:00Z'
  },
  {
    _id: '5',
    orderId: 'ORD-2025-005',
    customer: {
      name: 'David Wilson',
      email: 'david.w@email.com',
      phone: '+1 (555) 567-8901'
    },
    items: [
      {
        name: 'Gaming Mouse',
        quantity: 1,
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=150&h=150&fit=crop'
      },
      {
        name: 'Mouse Pad',
        quantity: 1,
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=150&h=150&fit=crop'
      },
      {
        name: 'Keyboard',
        quantity: 1,
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 164.97,
    shipping: 12.00,
    tax: 17.70,
    totalAmount: 194.67,
    status: 'delivered',
    shippingAddress: {
      fullAddress: '654 Maple Dr, Phoenix, AZ 85001'
    },
    createdAt: '2025-09-10T11:30:00Z'
  },
  {
    _id: '6',
    orderId: 'ORD-2025-006',
    customer: {
      name: 'Jessica Martinez',
      email: 'jessica.m@email.com',
      phone: '+1 (555) 678-9012'
    },
    items: [
      {
        name: 'Wireless Earbuds',
        quantity: 2,
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 99.98,
    shipping: 10.00,
    tax: 11.00,
    totalAmount: 120.98,
    status: 'cancelled',
    shippingAddress: {
      fullAddress: '987 Cedar Ln, Philadelphia, PA 19101'
    },
    createdAt: '2025-09-25T13:20:00Z'
  },
  {
    _id: '7',
    orderId: 'ORD-2025-007',
    customer: {
      name: 'Robert Taylor',
      email: 'robert.t@email.com',
      phone: '+1 (555) 789-0123'
    },
    items: [
      {
        name: 'Laptop Backpack',
        quantity: 1,
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop'
      },
      {
        name: 'Water Bottle',
        quantity: 1,
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 94.98,
    shipping: 10.00,
    tax: 10.50,
    totalAmount: 115.48,
    status: 'shipped',
    shippingAddress: {
      fullAddress: '147 Birch Ave, San Antonio, TX 78201'
    },
    createdAt: '2025-09-30T08:00:00Z'
  },
  {
    _id: '8',
    orderId: 'ORD-2025-008',
    customer: {
      name: 'Amanda Anderson',
      email: 'amanda.a@email.com',
      phone: '+1 (555) 890-1234'
    },
    items: [
      {
        name: 'Desk Lamp',
        quantity: 1,
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 39.99,
    shipping: 8.00,
    tax: 4.80,
    totalAmount: 52.79,
    status: 'processing',
    shippingAddress: {
      fullAddress: '258 Walnut St, San Diego, CA 92101'
    },
    createdAt: '2025-10-02T10:10:00Z'
  },
  {
    _id: '9',
    orderId: 'ORD-2025-009',
    customer: {
      name: 'Christopher Lee',
      email: 'chris.lee@email.com',
      phone: '+1 (555) 901-2345'
    },
    items: [
      {
        name: 'Fitness Tracker',
        quantity: 1,
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=150&h=150&fit=crop'
      },
      {
        name: 'Yoga Mat',
        quantity: 1,
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 164.98,
    shipping: 10.00,
    tax: 17.50,
    totalAmount: 192.48,
    status: 'delivered',
    shippingAddress: {
      fullAddress: '369 Spruce Rd, Dallas, TX 75201'
    },
    createdAt: '2025-09-05T15:25:00Z'
  },
  {
    _id: '10',
    orderId: 'ORD-2025-010',
    customer: {
      name: 'Michelle White',
      email: 'michelle.w@email.com',
      phone: '+1 (555) 012-3456'
    },
    items: [
      {
        name: 'Coffee Maker',
        quantity: 1,
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=150&h=150&fit=crop'
      },
      {
        name: 'Coffee Beans',
        quantity: 2,
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=150&h=150&fit=crop'
      }
    ],
    subtotal: 121.97,
    shipping: 10.00,
    tax: 13.20,
    totalAmount: 145.17,
    status: 'pending',
    shippingAddress: {
      fullAddress: '741 Ash Blvd, San Jose, CA 95101'
    },
    createdAt: '2025-10-02T12:30:00Z'
  }
];

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // Simulate loading data
  useEffect(() => {
    const loadOrders = () => {
      setTimeout(() => {
        setOrders(dummyOrders);
        setLoading(false);
      }, 800);
    };
    loadOrders();
  }, []);

  // Filter and search logic
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer?.email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filterStatus === 'all' || order.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  // Status badge styling
  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status?.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Update order status (simulated)
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
    
    if (selectedOrder && selectedOrder._id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  // Refresh orders (simulated)
  const refreshOrders = () => {
    setLoading(true);
    setTimeout(() => {
      setOrders([...dummyOrders]);
      setLoading(false);
    }, 500);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Orders Management</h1>
        <p className="text-gray-600">View and manage all customer orders</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by Order ID, Customer Name, or Email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>

          {/* Refresh Button */}
          <button
            onClick={refreshOrders}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-sm text-gray-500 mb-1">Total Orders</p>
          <p className="text-2xl font-bold text-gray-800">{orders.length}</p>
        </div>
        <div className="bg-yellow-50 rounded-lg shadow-md p-4">
          <p className="text-sm text-yellow-700 mb-1">Pending</p>
          <p className="text-2xl font-bold text-yellow-800">
            {orders.filter(o => o.status === 'pending').length}
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg shadow-md p-4">
          <p className="text-sm text-blue-700 mb-1">Processing</p>
          <p className="text-2xl font-bold text-blue-800">
            {orders.filter(o => o.status === 'processing').length}
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg shadow-md p-4">
          <p className="text-sm text-purple-700 mb-1">Shipped</p>
          <p className="text-2xl font-bold text-purple-800">
            {orders.filter(o => o.status === 'shipped').length}
          </p>
        </div>
        <div className="bg-green-50 rounded-lg shadow-md p-4">
          <p className="text-sm text-green-700 mb-1">Delivered</p>
          <p className="text-2xl font-bold text-green-800">
            {orders.filter(o => o.status === 'delivered').length}
          </p>
        </div>
      </div>

      {/* Orders Table - Desktop View */}
      <div className="hidden lg:block bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                    No orders found
                  </td>
                </tr>
              ) : (
                currentOrders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{order.orderId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.customer?.name}</div>
                      <div className="text-sm text-gray-500">{order.customer?.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(order.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.items.length} item(s)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {formatCurrency(order.totalAmount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-blue-600 hover:text-blue-900 font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Orders Cards - Mobile View */}
      <div className="lg:hidden space-y-4">
        {currentOrders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center text-gray-500">
            No orders found
          </div>
        ) : (
          currentOrders.map((order) => (
            <div key={order._id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-semibold text-gray-900">#{order.orderId}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-3">
                <div>
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="font-medium text-gray-900">{order.customer?.name}</p>
                  <p className="text-sm text-gray-600">{order.customer?.email}</p>
                </div>
                
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="text-sm text-gray-900">{formatDate(order.createdAt)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="font-semibold text-gray-900">{formatCurrency(order.totalAmount)}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Items</p>
                  <p className="text-sm text-gray-900">{order.items.length} item(s)</p>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedOrder(order)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {filteredOrders.length > ordersPerPage && (
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            Showing {indexOfFirstOrder + 1} to {Math.min(indexOfLastOrder, filteredOrders.length)} of {filteredOrders.length} orders
          </p>
          
          <div className="flex gap-2 flex-wrap justify-center">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            
            {[...Array(Math.min(totalPages, 5))].map((_, index) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = index + 1;
              } else if (currentPage <= 3) {
                pageNum = index + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + index;
              } else {
                pageNum = currentPage - 2 + index;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === pageNum
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="p-6">
              {/* Order Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-semibold text-gray-900">#{selectedOrder.orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Order Date</p>
                  <p className="text-gray-900">{formatDate(selectedOrder.createdAt)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedOrder.status)}`}>
                    {selectedOrder.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className="text-xl font-bold text-gray-900">{formatCurrency(selectedOrder.totalAmount)}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Customer Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="text-gray-900">{selectedOrder.customer?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">{selectedOrder.customer?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900">{selectedOrder.customer?.phone || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-900">{selectedOrder.shippingAddress?.fullAddress || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Order Items</h3>
                <div className="space-y-3">
                  {selectedOrder.items?.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <div className="flex gap-4 flex-1">
                        {item.image && (
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          <p className="text-sm text-gray-500">{formatCurrency(item.price)} each</p>
                        </div>
                      </div>
                      <p className="font-semibold text-gray-900">{formatCurrency(item.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">{formatCurrency(selectedOrder.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">{formatCurrency(selectedOrder.shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">{formatCurrency(selectedOrder.tax)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2">
                    <span>Total</span>
                    <span>{formatCurrency(selectedOrder.totalAmount)}</span>
                  </div>
                </div>
              </div>

              {/* Update Status */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Update Order Status</p>
                <div className="flex flex-wrap gap-2">
                  {['pending', 'processing', 'shipped', 'delivered', 'cancelled'].map(status => (
                    <button
                      key={status}
                      onClick={() => updateOrderStatus(selectedOrder._id, status)}
                      disabled={selectedOrder.status === status}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedOrder.status === status
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;

