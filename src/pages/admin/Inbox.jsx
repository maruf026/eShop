import React, { useState, useEffect } from 'react';
import {
  FaPlus,
  FaInbox,
  FaStar,
  FaPaperPlane,
  FaFileAlt,
  FaExclamationTriangle,
  FaArchive,
  FaTrash,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisV,
  FaBars,
  FaTimes
} from 'react-icons/fa';


const Inbox = () => {
  const [users, setUsers] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('Inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;


  // Fetch users data from DummyJSON API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();


        const emailData = data.users.map((user, index) => ({
          id: user.id,
          sender: `${user.firstName} ${user.lastName}`,
          subject: getEmailSubject(index),
          preview: getEmailPreview(index),
          time: getEmailTime(index),
          isStarred: [3, 6, 8].includes(index),
          isRead: Math.random() > 0.4,
          label: getEmailLabel(index),
          avatar: user.image,
          email: user.email,
        }));


        setUsers(emailData);
        setFilteredEmails(emailData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };


    fetchUsers();
  }, []);


  // Reset to page 1 whenever searchTerm or users change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, users]);


  const getEmailSubject = (index) => {
    const subjects = [
      'Our Bachelor of Commerce program is ACBSP-accredited.',
      'Get Best Advertiser In Your Side Pocket',
      'Vacation Home Rental Success',
      'Free Classifieds Using Them To Promote Your Stuff Online',
      'Enhance Your Brand Potential With Giant Advertising Blimps',
      'Always Look On The Bright Side Of Life',
      'Curling Irons Are As Individual As The Women Who Use Them',
      'Our Bachelor of Commerce program is ACBSP-accredited.',
      'Get Best Advertiser In Your Side Pocket',
      'Free Classifieds Using Them To Promote Your Stuff Online',
      'Enhance Your Brand Potential With Giant Advertising Blimps',
      'Vacation Home Rental Success'
    ];
    return subjects[index % subjects.length];
  };


  const getEmailPreview = () => '';
  const getEmailTime = (index) => {
    const times = ['8:38 AM', '8:13 AM', '7:52 PM', '7:52 PM', '4:13 PM', '3:52 PM', '2:30 PM', '8:38 AM', '8:13 AM', '7:52 PM', '4:13 PM', '7:52 PM'];
    return times[index % times.length];
  };
  const getEmailLabel = (index) => {
    const labels = ['Primary', 'Work', 'Friends', '', 'Social', 'Friends', '', 'Primary', 'Work', '', 'Social', 'Friends'];
    return labels[index % labels.length];
  };


  const sidebarItems = [
    { name: 'Inbox', icon: FaInbox, count: 1253, active: selectedLabel === 'Inbox' },
    { name: 'Starred', icon: FaStar, count: 245, active: selectedLabel === 'Starred' },
    { name: 'Sent', icon: FaPaperPlane, count: 24532, active: selectedLabel === 'Sent' },
    { name: 'Draft', icon: FaFileAlt, count: 9, active: selectedLabel === 'Draft' },
    { name: 'Spam', icon: FaExclamationTriangle, count: 14, active: selectedLabel === 'Spam' },
    { name: 'Important', icon: FaArchive, count: 18, active: selectedLabel === 'Important' },
    { name: 'Bin', icon: FaTrash, count: 9, active: selectedLabel === 'Bin' }
  ];


  const labelColors = {
    'Primary': 'bg-green-100 text-green-800',
    'Work': 'bg-orange-100 text-orange-800',
    'Social': 'bg-blue-100 text-blue-800',
    'Friends': 'bg-pink-100 text-pink-800'
  };


  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
    setSidebarOpen(false);
  };


  const handleDeleteEmail = (emailId, event) => {
    event.stopPropagation();
    const updatedUsers = users.filter(email => email.id !== emailId);
    const updatedFiltered = filteredEmails.filter(email => email.id !== emailId);


    setUsers(updatedUsers);
    setFilteredEmails(updatedFiltered);


    if (selectedEmail && selectedEmail.id === emailId) {
      setSelectedEmail(null);
    }
  };


  const handleSidebarItemClick = (itemName) => {
    setSelectedLabel(itemName);
    setSidebarOpen(false);
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 transition-colors duration-200">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }


  // Pagination calculations
  const totalPages = Math.ceil(filteredEmails.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentEmails = filteredEmails.slice(startIndex, endIndex);


  return (
    <div className="flex h-screen bg-gray-100">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      {/* Sidebar */}
      <div
        className={`fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 w-60 h-full bg-white border-gray-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:block`}
      >
        <div className="lg:hidden p-4 border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>


        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-medium text-gray-900 mb-4">Inbox</h1>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200">
            <FaPlus className="text-xs" />
            Compose
          </button>
        </div>


        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">My Email</p>
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleSidebarItemClick(item.name)}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-sm transition-colors duration-200 ${
                    item.active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <IconComponent className="text-xs" />
                    <span>{item.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{item.count}</span>
                </button>
              );
            })}
          </div>


          <div className="mt-6">
            <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wider">Label</p>
            <div className="space-y-1">
              {['Primary', 'Social', 'Work', 'Friends'].map((label) => (
                <button
                  key={label}
                  className="w-full flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors duration-200"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      label === 'Primary'
                        ? 'bg-green-500'
                        : label === 'Social'
                        ? 'bg-blue-500'
                        : label === 'Work'
                        ? 'bg-orange-500'
                        : 'bg-pink-500'
                    }`}
                  ></div>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>


          <button className="w-full mt-3 text-blue-600 hover:bg-blue-50 px-2 py-1.5 rounded text-sm flex items-center gap-2 transition-colors duration-200">
            <FaPlus className="text-xs" />
            Create New Label
          </button>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="lg:hidden bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              <FaBars className="text-lg" />
            </button>
            <h1 className="text-lg font-medium text-gray-900">Inbox</h1>
            <div className="w-10"></div>
          </div>
        </div>


        <div className="flex-1 bg-white border border-blue-400 m-3 lg:m-6 rounded transition-colors duration-200">
          {/* Search Header */}
          <div className="border-b border-gray-200 p-3 lg:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search mail"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 transition-all duration-200"
                  />
                </div>
              </div>


              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200">
                  <FaArchive className="text-sm" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200">
                  <FaTrash className="text-sm" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200">
                  <FaEllipsisV className="text-sm" />
                </button>
              </div>
            </div>
          </div>


          {/* Email List with Pagination */}
          <div className="flex-1 overflow-y-auto">
            <div>
              {currentEmails.map((email) => (
                <div
                  key={email.id}
                  onClick={() => handleEmailSelect(email)}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>


                  <button className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                    <FaStar
                      className={`text-sm ${
                        email.isStarred
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>


                  <div className="flex-shrink-0 w-20 sm:w-32">
                    <p
                      className={`text-xs sm:text-sm truncate ${
                        !email.isRead
                          ? 'font-medium text-gray-900'
                          : 'text-gray-700'
                      }`}
                    >
                      {email.sender}
                    </p>
                  </div>


                  {email.label && (
                    <div className="flex-shrink-0 hidden sm:block">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          labelColors[email.label] ||
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {email.label}
                      </span>
                    </div>
                  )}


                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xs sm:text-sm truncate ${
                        !email.isRead
                          ? 'font-medium text-gray-900'
                          : 'text-gray-700'
                      }`}
                    >
                      {email.subject}
                    </p>
                  </div>


                  <div className="flex-shrink-0 text-right">
                    <p className="text-xs text-gray-500">{email.time}</p>
                  </div>


                  <div className="flex-shrink-0">
                    <button
                      onClick={(e) => handleDeleteEmail(email.id, e)}
                      className="p-1.5 text-red-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors duration-200"
                      title="Delete email"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>
                </div>
              ))}
            </div>


            {filteredEmails.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16">
                <FaInbox className="text-6xl text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {searchTerm ? 'No emails found' : 'Your inbox is empty'}
                </h3>
                <p className="text-gray-500">
                  {searchTerm
                    ? 'Try adjusting your search terms'
                    : 'You have no emails in your inbox'}
                </p>
              </div>
            )}


            {/* Pagination Footer */}
            {filteredEmails.length > 0 && (
              <div className="border-t border-gray-200 px-3 lg:px-4 py-3 bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-sm text-gray-500 text-center sm:text-left">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredEmails.length)} of{' '}
                    {filteredEmails.length}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors duration-200 disabled:opacity-40"
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>
                    <p className="text-sm text-gray-700">
                      Page {currentPage} of {totalPages}
                    </p>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                      className="p-1.5 text-gray-600 hover:bg-gray-200 rounded transition-colors duration-200 disabled:opacity-40"
                    >
                      <FaChevronRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Inbox;
