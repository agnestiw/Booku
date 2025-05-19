import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-10 sm:pt-16 pb-5 lg:px-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-10">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-primary mb-4">
              Booku
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 leading-relaxed">
              A publishing company that specializes in making books accessible
              to its customers with a reasonable price.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300"
              >
                <i className="fab fa-facebook-f text-xs sm:text-sm" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300"
              >
                <i className="fab fa-instagram text-xs sm:text-sm" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300"
              >
                <i className="fab fa-twitter text-xs sm:text-sm" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-base sm:text-lg mb-4 sm:mb-5">
              MENU
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-primary"
                >
                  Online support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-primary"
                >
                  Our services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-primary"
                >
                  Our articles
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base sm:text-lg mb-4 sm:mb-5">
              SECURITY
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-primary"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-600 hover:text-primary"
                >
                  Terms &amp; conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base sm:text-lg mb-4 sm:mb-5">
              GET IN TOUCH
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                <i className="fas fa-map-marker-alt" /> Address: Dallas,
                Delaware 10299
              </p>
              <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                <i className="fas fa-envelope" /> Email: booku@gmail.com
              </p>
              <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                <i className="fas fa-phone" /> Phone: (671) 555-0110
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4 sm:pt-5 text-center text-xs sm:text-sm text-gray-600">
          <p>Copyright © 2025 Booku All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
