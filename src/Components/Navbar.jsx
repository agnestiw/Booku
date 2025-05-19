import React from "react";

const Navbar = () => {
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
            >
              <i className="fas fa-bars text-xl" />
            </button>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
              <li>
                <a href="/" className="text-primary">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/catalog"
                  className="text-light hover:text-primary transition-colors"
                >
                  Catalog
                </a>
              </li>
              <li>
                <a
                  href="/wishlist"
                  className="text-light hover:text-primary transition-colors"
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  href="/article"
                  className="text-light hover:text-primary transition-colors"
                >
                  Article
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-light hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
            {/* Desktop Right Icons */}
            <div className="hidden md:flex items-center gap-5">
              <div className="flex items-center gap-2 text-light cursor-pointer">
                <i className="fas fa-search" />
                <span>Search</span>
              </div>
              <a href="/cart" className="flex items-center gap-4">
                <i className="fas fa-shopping-cart text-light" />
              </a>
              <div>
                <img
                  src="/assets/Kim_Jennie.png"
                  alt="User profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
            {/* Mobile Right Icons */}
            <a href="/cart" className="flex md:hidden items-center gap-4">
              <i className="fas fa-shopping-cart text-light" />
            </a>
          </div>
        </nav>
        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="/index"
                className="text-light hover:text-primary transition-colors block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/catalog"
                className="text-light hover:text-primary transition-colors block"
              >
                Catalog
              </a>
            </li>
            <li>
              <a
                href="/wishlist"
                className="text-light hover:text-primary transition-colors block"
              >
                Wishlist
              </a>
            </li>
            <li>
              <a
                href="/article"
                className="text-light hover:text-primary transition-colors block"
              >
                Article
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-light hover:text-primary transition-colors block"
              >
                About
              </a>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <div>
              <img
                src="/assets/Kim_Jennie.png"
                alt="User profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
