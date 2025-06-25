import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // 1. Tambahkan state untuk mengontrol visibilitas menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Buat fungsi untuk toggle state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 border-b border-gray-200 sticky top-0 bg-white z-50 lg:px-24">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between w-full">
          {/* Left: Logo */}
          <div className="text-2xl font-bold text-primary">Booku</div>

          {/* Right: Menus & Icons */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-button"
              className="md:hidden text-gray-500 focus:outline-none"
              // 3. Tambahkan event onClick untuk memanggil fungsi toggle
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-xl" />
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
              {[
                { to: "/", label: "Home", end: true },
                { to: "/catalog", label: "Catalog" },
                { to: "/wishlist", label: "Wishlist" },
                { to: "/article", label: "Article" },
                { to: "/about", label: "About" },
              ].map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold"
                        : "text-light hover:text-primary transition-colors"
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Right Icons */}
            <div className="hidden md:flex items-center gap-5">
              <div className="flex items-center gap-2 text-light cursor-pointer">
                <i className="fas fa-search" />
                <span>Search</span>
              </div>
              <NavLink to="/cart" className="flex items-center gap-4">
                <i className="fas fa-shopping-cart text-light" />
              </NavLink>
              <a href="/profile/agnesti-wulansari">
                <img
                  src="/anime1.jpg"
                  alt="User profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </a>
            </div>

            {/* Mobile Right Icons */}
            <NavLink to="/cart" className="flex md:hidden items-center gap-4">
              <i className="fas fa-shopping-cart text-light" />
            </NavLink>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {/* 4. Gunakan state untuk menampilkan atau menyembunyikan menu */}
        <div
          id="mobile-menu"
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 pb-4`}
        >
          <ul className="flex flex-col gap-4">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/catalog", label: "Catalog" },
              { to: "/wishlist", label: "Wishlist" },
              { to: "/article", label: "Article" },
              { to: "/about", label: "About" },
            ].map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setIsMobileMenuOpen(false)} // Opsional: tutup menu setelah link diklik
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold block"
                      : "text-light hover:text-primary transition-colors block"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a href="/profile/agnesti-wulansari">
              <img
                src="https://i.pinimg.com/736x/d4/5e/77/d45e7768a551280b6597d3cb5caa589b.jpg"
                alt="User profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;