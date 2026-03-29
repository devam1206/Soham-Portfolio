import React, { useState, useRef, useEffect } from "react";
import { Command, Link as LinkIcon, Mail, User, GraduationCap, Briefcase, BookOpen } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "About me", path: "/" },
  { name: "Education & Experience", path: "/education-experience" },
  { name: "Projects", path: "/projects" },
  { name: "Patents & Papers", path: "/publications" },
  { name: "Contact", path: "/contact" },
];

const navLinkClass = ({ isActive }) =>
  `text-sm tracking-wide px-3 py-1.5 rounded-md transition-colors duration-200 ${
    isActive
      ? "text-foreground bg-surface border border-border"
      : "text-muted-foreground hover:text-foreground hover:bg-surface/80"
  }`;

const Popup = ({ showPopup, popupRef, onClose }) => {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [copyNotification, setCopyNotification] = useState(false);

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
    if (action === "copyLink") {
      navigator.clipboard.writeText("https://soham-desai.vercel.app/");
      setCopyNotification(true);
      setTimeout(() => setCopyNotification(false), 5000);
    } else if (path) {
      window.location.href = path;
    }
    onClose();
  };

  const generalItems = [
    { icon: <LinkIcon className="w-5 h-5 mr-3 shrink-0" />, label: "Copy link", action: "copyLink" },
    { icon: <Mail className="w-5 h-5 mr-3 shrink-0" />, label: "Send email", path: "/contact" },
  ];

  const navigationItems = [
    { icon: <User className="w-5 h-5 mr-3 shrink-0" />, label: "About me", path: "/" },
    {
      icon: <GraduationCap className="w-5 h-5 mr-3 shrink-0" />,
      label: "Education & Experience",
      path: "/education-experience",
    },
    { icon: <Briefcase className="w-5 h-5 mr-3 shrink-0" />, label: "Projects", path: "/projects" },
    { icon: <BookOpen className="w-5 h-5 mr-3 shrink-0" />, label: "Patents & Papers", path: "/publications" },
    { icon: <Mail className="w-5 h-5 mr-3 shrink-0" />, label: "Contact", path: "/contact" },
  ];

  const filteredGeneralItems = generalItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNavigationItems = navigationItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const allFilteredItems = [...filteredGeneralItems, ...filteredNavigationItems];

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < allFilteredItems.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > -1 ? prev - 1 : prev));
    } else if (e.key === "Enter" && selectedIndex !== -1) {
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
      <div className={`fixed inset-0 flex items-center justify-center z-[9998] ${showPopup ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px]" aria-hidden="true" />
        <div
          ref={popupRef}
          className="relative bg-surface text-foreground rounded-lg border border-border shadow-xl w-11/12 sm:w-3/4 md:w-1/3 h-2/3 z-[9999] flex flex-col overflow-hidden"
        >
          <div className="p-4 border-b border-border">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search commands…"
              className="w-full p-3 bg-background text-foreground rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-accent text-base placeholder:text-muted-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="px-2 py-2 overflow-y-auto flex-1">
            {filteredGeneralItems.length > 0 && (
              <>
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 pt-1">
                  General
                </h3>
                <ul className="py-1">
                  {filteredGeneralItems.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center px-4 py-2.5 text-base rounded-md cursor-pointer ${
                        selectedIndex === index ? "bg-surface-elevated" : "hover:bg-surface-elevated/80"
                      }`}
                      onClick={() => handleOptionClick(item.action, item.path)}
                    >
                      {item.icon} {item.label}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {filteredNavigationItems.length > 0 && (
              <>
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 pt-2">
                  Go to
                </h3>
                <ul className="py-1">
                  {filteredNavigationItems.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center px-4 py-2.5 text-base rounded-md cursor-pointer ${
                        selectedIndex === index + filteredGeneralItems.length
                          ? "bg-surface-elevated"
                          : "hover:bg-surface-elevated/80"
                      }`}
                      onClick={() => handleOptionClick(null, item.path)}
                    >
                      {item.icon}
                      <Link to={item.path} className="text-foreground hover:text-accent transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {filteredGeneralItems.length === 0 && filteredNavigationItems.length === 0 && (
              <div className="text-muted-foreground text-center py-8 text-sm">
                No results for &ldquo;{searchQuery}&rdquo;
              </div>
            )}
          </div>
        </div>
      </div>

      {copyNotification && (
        <div className="fixed bottom-4 right-4 bg-surface text-foreground px-4 py-2 rounded-md border border-border text-sm shadow-lg z-[10000]">
          Link copied to clipboard
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

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      const backdrop = event.target.classList?.contains?.("bg-black");
      if (event.target.classList.contains("bg-black") || event.target.getAttribute("aria-hidden")) {
        setShowPopup(false);
      }
    }
  };

  useEffect(() => {
    if (!showPopup) return;
    const onMouseDown = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [showPopup]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        event.stopPropagation();
        setShowPopup((prev) => !prev);
      } else if (event.key === "Escape") {
        setShowPopup(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  return (
    <header className="w-full py-4 px-6 md:px-12 text-foreground relative border-b border-border/80">
      <div className="max-w-7xl mx-auto">
        <div className="md:hidden">
          <Link
            to="/"
            className="absolute left-6 font-display text-2xl font-semibold text-accent hover:text-accent-hover transition-colors"
            aria-label="About"
          >
            S
          </Link>
          <button
            type="button"
            className="absolute right-6 text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-surface transition-colors"
            onClick={togglePopup}
            aria-label="Open command palette"
          >
            <Command className="w-5 h-5" />
          </button>
          <Popup showPopup={showPopup} popupRef={popupRef} onClose={() => setShowPopup(false)} />
          <div className="w-full overflow-x-auto pt-12">
            <nav className="flex gap-2 px-2 pb-1">
              {navItems.map((item) => (
                <NavLink key={item.name} to={item.path} end={item.path === "/"} className={navLinkClass}>
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <Link
            to="/"
            className="absolute left-12 font-display text-2xl font-semibold text-accent hover:text-accent-hover transition-colors"
            aria-label="About"
          >
            S
          </Link>

          <nav className="flex gap-2">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} end={item.path === "/"} className={navLinkClass}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="absolute right-12 text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-surface transition-colors"
            onClick={togglePopup}
            aria-label="Open command palette"
          >
            <Command className="w-5 h-5" />
          </button>
          <Popup showPopup={showPopup} popupRef={popupRef} onClose={() => setShowPopup(false)} />
        </div>
      </div>
    </header>
  );
}
