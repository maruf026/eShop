import { useState } from "react";
import {
  FiBarChart2,
  FiBell,
  FiBox,
  FiChevronDown,
  FiChevronRight,
  FiMail,
  FiMenu,
  FiPackage,
  FiSearch,
  FiSettings,
  FiShoppingCart,
  FiTag,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import favicon from "../assets/favicon.png";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Changed to track which submenu is open

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const menuItems = [
    {
      name: "Products",
      path: "/products",
      icon: <FiPackage />,
      hasSubmenu: true,
      submenu: [
        { name: "Add Product", path: "/admin/add-product" },
        { name: "All Products", path: "/admin/all-products" },
      ],
    },
    
    {
      name: "Categories",
      path: "/categories",
      icon: <FiTag />,
      hasSubmenu: true,
      submenu: [
        { name: "Add Category", path: "/admin/add-category" },
        { name: "Manage Category", path: "/admin/categories" },
      ],
    },
    { name: "Orders", path: "/admin/orders", icon: <FiShoppingCart />, badge: "2" },
    { name: "Customers", path: "/admin/customers", icon: <FiUsers /> },
    
    { name: "Coupons", path: "/admin/coupons", icon: <FiTag /> },
    { name: "Inbox", path: "/admin/inbox", icon: <FiMail /> },
    // { name: "Inventory", path: "/admin/inventory", icon: <FiBox /> },
  ];

  const settingsItems = [
    {
      name: "Personal Settings",
      path: "/admin/personal-settings",
      icon: <FiSettings />,
    },
    { name: "Global Settings", path: "/admin/global-settings", icon: <FiSettings /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#1a1f37] text-gray-300 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-col`}
      >
        {/* Logo */}
        <Link to='/admin'>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <img className="w-15 h-15" src={favicon} alt="" />
            <span className="text-xl font-bold text-white">eShop</span>
          </div>
          <button
            onClick={closeSidebar}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <FiX size={24} />
          </button>
        </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.hasSubmenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:bg-[#252b42] transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      {openSubmenu === item.name ? (
                        <FiChevronDown />
                      ) : (
                        <FiChevronRight />
                      )}
                    </button>
                    <div
                      className={`ml-8 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                        openSubmenu === item.name
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          onClick={closeSidebar}
                          className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg text-sm transition-colors ${
                              isActive
                                ? "bg-[#252b42] text-white"
                                : "text-gray-400 hover:bg-[#252b42] hover:text-white"
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-[#252b42] text-white"
                          : "text-gray-300 hover:bg-[#252b42] hover:text-white"
                      }`
                    }
                    end={item.path === "/"}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Settings Section */}
          <div className="mt-8">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Settings
            </h3>
            <div className="space-y-1">
              {settingsItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#252b42] text-white"
                        : "text-gray-300 hover:bg-[#252b42] hover:text-white"
                    }`
                  }
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Grow Business CTA */}
        {/* <div className="p-4 m-4 bg-blue-600 rounded-lg">
          <h4 className="text-white font-semibold mb-2">Grow Business</h4>
          <p className="text-blue-100 text-sm mb-3">Explore our marketing solutions</p>
          <button className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm">
            Read More
          </button>
        </div> */}
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                <FiMenu size={24} />
              </button>
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-64">
                <FiSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm w-full text-gray-700"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative text-gray-600 hover:text-gray-900">
                <FiBell size={20} />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
                  AR
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  Abdur Rahman
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-8">
          <ScrollRestoration />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

