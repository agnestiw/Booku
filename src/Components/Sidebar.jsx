import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define base and active class names for NavLink
  const baseLinkClass = "flex items-center gap-3 px-4 py-3 rounded-lg transition";
  const activeLinkClasses = "bg-primary bg-opacity-20 text-white"; // Styles for active link
  const inactiveLinkClasses = "text-gray-300 hover:bg-gray-700"; // Styles for inactive link

  // Navigation items data
  // Note: Adjusted 'to' paths for typical React Router setup
  const navItems = [
    { to: "/admin/dashboard", icon: "fas fa-tachometer-alt", label: "Dashboard" },
    { to: "/admin/products", icon: "fas fa-book", label: "Products" },
    { to: "/admin/articles", icon: "fas fa-newspaper", label: "Articles" },
    { to: "/admin/transactions", icon: "fas fa-shopping-cart", label: "Transactions" },
    { to: "/admin/users", icon: "fas fa-users", label: "Users" },
    { to: "/admin/discounts", icon: "fas fa-tag", label: "Discounts" },
    { to: "/admin/reports", icon: "fas fa-chart-bar", label: "Reports" },
    { to: "/admin/settings", icon: "fas fa-cog", label: "Settings" },
  ];

  return (
    <aside className="bg-dark text-white w-full md:w-64 md:min-h-screen md:fixed z-20"> {/* Added z-index for mobile */}
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center">
          <span className="text-xl font-bold text-primary">Booku Admin</span>
        </div>
        <button
          id="mobile-menu-button"
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu} // Add click handler
        >
          {/* Toggle icon based on state */}
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
        </button>
      </div>

      {/* Sidebar Content */}
      {/* Toggle visibility based on state for mobile, md:block keeps it visible on medium+ screens */}
      <div id="sidebar-content" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block p-4`}>
        <div className="mb-8 mt-4 md:mt-0"> {/* Adjusted margin for mobile */}
          <div className="text-xl font-bold text-primary mb-6 hidden md:block">
            Booku Admin
          </div>
          <div className="flex items-center mb-4">
            <img
              src="/Kim_Jennie.png"
              alt="Admin"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="font-medium">Hanna</div>
              <div className="text-xs text-gray-400">Administrator</div>
            </div>
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  // NavLink's className prop can take a function to conditionally apply classes
                  className={({ isActive }) =>
                    `${baseLinkClass} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
                  }
                  onClick={() => { if (isMobileMenuOpen) toggleMobileMenu(); }} // Optionally close menu on mobile nav click
                >
                  <i className={item.icon} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8 pt-6 border-t border-gray-700">
          {/* Assuming this is also a NavLink or similar */}
          <NavLink
            to="/" // Example path, adjust as needed
            className={({ isActive }) =>
              `${baseLinkClass} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
            onClick={() => { if (isMobileMenuOpen) toggleMobileMenu(); }}
          >
            <i className="fas fa-sign-out-alt" />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;