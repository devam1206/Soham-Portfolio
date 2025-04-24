import React, { useState, useRef, useEffect } from "react";
import { Command, Link as LinkIcon, Mail, Code, Home, User, FileText, Briefcase, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Publications", path: "/publications" },
  { name: "CV", path: "/cv"},
  { name: "Contact", path: "/contact"},
];

const Popup = ({ showPopup, popupRef, onClose }) => {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [copyNotification, setCopyNotification] = useState(false); // State for the notification

  useEffect(() => {
    if (showPopup && inputRef.current) {
      inputRef.current.focus();
      setSelectedIndex(-1);
    }
  }, [showPopup]);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchQuery]);

  const handleOptionClick = (action, path) => {
    if (action === 'copyLink') {
      navigator.clipboard.writeText('https://soham-desai.vercel.app/');
      setCopyNotification(true); // Show the notification
      setTimeout(() => setCopyNotification(false), 5000); // Hide after 5 seconds
    } else if (action === 'viewSource') {
      window.open('https://github.com/devam1206/Soham-Portfolio', '_blank');
    } else if (path) {
      window.location.href = path; // Navigate to the specified path
    }
    onClose();
  };

  const generalItems = [
    { icon: <LinkIcon className="w-5 h-5 mr-3" />, label: 'Copy Link', action: 'copyLink' },
    { icon: <Mail className="w-5 h-5 mr-3" />, label: 'Send Email', path:'/contact' },
    { icon: <Code className="w-5 h-5 mr-3" />, label: 'View Source', action: 'viewSource' }
  ];

  const navigationItems = [
    { icon: <Home className="w-5 h-5 mr-3" />, label: 'Home', path: '/' },
    { icon: <User className="w-5 h-5 mr-3" />, label: 'About', path: '/about' },
    { icon: <Briefcase className="w-5 h-5 mr-3" />, label: 'Projects', path: '/projects' },
    { icon: <BookOpen className="w-5 h-5 mr-3" />, label: 'Publications', path: '/publications' },
    { icon: <FileText className="w-5 h-5 mr-3" />, label: 'CV', path: '/cv' }
  ];

  const filteredGeneralItems = generalItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNavigationItems = navigationItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const allFilteredItems = [...filteredGeneralItems, ...filteredNavigationItems];

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < allFilteredItems.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > -1 ? prev - 1 : prev);
    } else if (e.key === 'Enter' && selectedIndex !== -1) {
      e.preventDefault();
      const selectedItem = allFilteredItems[selectedIndex];
      if (selectedItem.action) {
        handleOptionClick(selectedItem.action);
      } else if (selectedItem.path) {
        handleOptionClick(null, selectedItem.path);
      }
      onClose();
    }
  };

  return (
    <>
      <div className={`fixed inset-0 flex items-center justify-center ${showPopup ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div
          ref={popupRef}
          className="bg-gray-800 text-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/3 h-2/3 z-[9999] backdrop-filter backdrop-blur-md flex flex-col"
        >
          <div className="p-4 border-b border-gray-700">
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Type a command or search..." 
              className="w-full p-3 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 text-base" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="px-4 py-2 overflow-y-auto flex-1">
            {filteredGeneralItems.length > 0 && (
              <>
                <h3 className="text-base font-semibold text-gray-400 px-4">GENERAL</h3>
                <ul className="py-2">
                  {filteredGeneralItems.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center px-4 py-3 text-base hover:bg-gray-700 cursor-pointer ${
                        selectedIndex === index ? 'bg-gray-700' : ''
                      }`}
                      onClick={() => handleOptionClick(item.action, item.path)} // Pass both action and path
                    >
                      {item.icon} {item.label}
                    </li>
                  ))}
                </ul>
              </>
            )}
            
            {filteredNavigationItems.length > 0 && (
              <>
                <h3 className="text-base font-semibold text-gray-400 px-4 pt-2">GO TO</h3>
                <ul className="py-2">
                  {filteredNavigationItems.map((item, index) => (
                    <li 
                      key={index} 
                      className={`flex items-center px-4 py-3 text-base hover:bg-gray-700 cursor-pointer ${
                        selectedIndex === index + filteredGeneralItems.length ? 'bg-gray-700' : ''
                      }`}
                      onClick={() => handleOptionClick(null, item.path)}
                    >
                      {item.icon} <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {filteredGeneralItems.length === 0 && filteredNavigationItems.length === 0 && (
              <div className="text-gray-400 text-center py-8">
                No results found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notification Popup */}
      {copyNotification && (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded shadow-lg">
          Link copied to clipboard!
        </div>
      )}
    </>
  );
};

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Ctrl+K is pressed
      if (event.ctrlKey && event.key.toLowerCase() === 'k') {
        event.preventDefault(); // Prevent browser default behavior
        event.stopPropagation(); // Stop event from bubbling
        setShowPopup(prev => !prev);
      }
      // Check if Escape is pressed
      else if (event.key === 'Escape') {
        setShowPopup(false);
      }
    };

    // Add event listener to document
    document.addEventListener('keydown', handleKeyDown, true); // Use capture phase

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  return (
    <header className="w-full py-4 px-6 md:px-12 text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <Link to="/" className="absolute left-6 text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            S
          </Link>
          <div className="absolute right-6 text-slate-400 hover:text-white hover:bg-white/10 transition-colors" onClick={togglePopup}>
            <Command className="w-5 h-5" />
          </div>
          <Popup showPopup={showPopup} popupRef={popupRef} onClose={handleClosePopup} />
          <div className="w-full overflow-x-auto pt-12">
            <nav className="flex gap-6 text-sm tracking-widest px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-slate-400 hover:text-white hover:bg-gray-700 px-3 py-1 rounded transition-all duration-200"
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center">
          <Link to="/" className="absolute left-12 text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            S
          </Link>

          <nav className="flex gap-6 text-sm tracking-widest">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-400 hover:text-white hover:bg-gray-700 px-3 py-1 rounded transition-all duration-200"
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="absolute right-12 text-slate-400 hover:text-white hover:bg-white/10 transition-colors" onClick={togglePopup}>
            <Command className="w-5 h-5" />
          </div>
          <Popup showPopup={showPopup} popupRef={popupRef} onClose={handleClosePopup} />
        </div>
      </div>
    </header>
  );
}