// Dashboard.jsx
import React from 'react';
import { 
  FiTrendingUp, 
  FiShoppingBag, 
  FiCalendar, 
  FiShoppingCart,
  FiUsers,
  FiStar,
  FiRefreshCw,
  FiUserPlus
} from 'react-icons/fi';

const Dashboard = () => {
  // Stats data
  const stats = [
    {
      label: 'Total Views',
      value: '596,929',
      icon: <FiTrendingUp className="text-gray-400" size={24} />,
      borderColor: 'border-blue-500'
    },
    {
      label: 'Monthly Views',
      value: '0',
      icon: <FiCalendar className="text-gray-400" size={24} />,
      borderColor: 'border-emerald-500'
    },
    {
      label: 'Weekly Views',
      value: '0',
      icon: <FiCalendar className="text-gray-400" size={24} />,
      borderColor: 'border-purple-500'
    }
  ];

  const orderStats = [
    {
      label: 'Total Orders',
      value: '39',
      icon: <FiShoppingCart className="text-gray-400" size={24} />,
      borderColor: 'border-yellow-500'
    },
    {
      label: 'Monthly Orders',
      value: '0',
      icon: <FiShoppingBag className="text-gray-400" size={24} />,
      borderColor: 'border-red-500'
    },
    {
      label: 'Weekly Orders',
      value: '0',
      icon: <FiShoppingBag className="text-gray-400" size={24} />,
      borderColor: 'border-gray-500'
    }
  ];

  const additionalStats = [
    {
      label: 'Total Products',
      value: '17',
      icon: <FiShoppingBag className="text-gray-400" size={24} />,
      borderColor: 'border-gray-400'
    },
    {
      label: 'Trending Products',
      value: '17',
      icon: <FiStar className="text-gray-400" size={24} />,
      borderColor: 'border-emerald-500'
    },
    {
      label: 'Promotional Products',
      value: '0',
      icon: <FiRefreshCw className="text-gray-400" size={24} />,
      borderColor: 'border-red-500'
    }
  ];

  const userStats = [
    {
      label: 'Total Customers',
      value: '17',
      icon: <FiUsers className="text-gray-400" size={24} />,
      borderColor: 'border-gray-400'
    },
    {
      label: 'Total Vendors',
      value: '8',
      icon: <FiUsers className="text-gray-400" size={24} />,
      borderColor: 'border-blue-500'
    },
    {
      label: 'Total Sub-Vendors',
      value: '5',
      icon: <FiUserPlus className="text-gray-400" size={24} />,
      borderColor: 'border-yellow-500'
    }
  ];

  // Chart data representation
  const monthlyData = [
    { month: 'January', value: 150000 },
    { month: 'February', value: 10000 },
    { month: 'March', value: 5000 },
    { month: 'April', value: 420000 },
    { month: 'May', value: 8000 },
    { month: 'June', value: 3000 },
    { month: 'July', value: 0 },
  ];

  const statusData = [
    { label: 'Pending', percentage: '66.7%', color: 'bg-blue-600' },
    { label: 'Shipped', percentage: '12.8%', color: 'bg-teal-500' },
    { label: 'Delivered', percentage: '12.8%', color: 'bg-green-500' },
    { label: 'Cancelled', percentage: '2.6%', color: 'bg-rose-500' },
    { label: 'Returned', percentage: '5.1%', color: 'bg-red-600' }
  ];

  const maxValue = Math.max(...monthlyData.map(d => d.value));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      </div>

      {/* Views Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg p-6 border-l-4 ${stat.borderColor} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Orders Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orderStats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg p-6 border-l-4 ${stat.borderColor} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Products & Promotional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {additionalStats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg p-6 border-l-4 ${stat.borderColor} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Users Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userStats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg p-6 border-l-4 ${stat.borderColor} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Overview Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-blue-600 mb-6">Monthly Overview</h2>
          
          <div className="relative h-80">
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
              <span>600,000</span>
              <span>400,000</span>
              <span>200,000</span>
              <span>0</span>
            </div>
            
            <div className="ml-16 h-full flex items-end justify-around border-b border-gray-200">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1 mx-1">
                  <div className="w-full flex items-end justify-center h-full pb-8">
                    {data.value > 0 && (
                      <div 
                        className="w-full max-w-[60px] bg-blue-600 rounded-t-lg transition-all hover:bg-blue-700"
                        style={{ height: `${(data.value / maxValue) * 100}%` }}
                      ></div>
                    )}
                    {data.value === 0 && (
                      <div className="w-full max-w-[60px] h-2 bg-gray-200 rounded"></div>
                    )}
                  </div>
                  <span className="text-xs text-gray-600 mt-2 text-center">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Status Distribution */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-blue-600 mb-6">Order Status Distribution</h2>
          
          {/* Donut Chart Representation */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                {/* Pending - Blue */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="20"
                  strokeDasharray="167.5 251.2"
                  strokeDashoffset="0"
                />
                {/* Shipped - Teal */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="20"
                  strokeDasharray="32.2 251.2"
                  strokeDashoffset="-167.5"
                />
                {/* Delivered - Green */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="20"
                  strokeDasharray="32.2 251.2"
                  strokeDashoffset="-199.7"
                />
                {/* Cancelled - Rose */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="20"
                  strokeDasharray="6.5 251.2"
                  strokeDashoffset="-231.9"
                />
                {/* Returned - Red */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="20"
                  strokeDasharray="12.8 251.2"
                  strokeDashoffset="-238.4"
                />
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {statusData.map((status, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${status.color}`}></div>
                  <span className="text-sm text-gray-700">{status.label}</span>
                </div>
                <span className="text-sm font-medium text-gray-600">{status.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
