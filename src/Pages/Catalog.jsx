import React from "react";
import Layout from "../Components/Layout";

const Catalog = () => {
  return (
    <Layout>
      {/* Catalog Banner */}
      <section className="bg-secondary py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Book Catalog
            </h1>
            <p className="text-gray-600 mb-6">
              Discover our extensive collection of books across various genres
              and authors.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for books, authors, or ISBN..."
                className="w-full py-3 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Main Catalog Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                id="filter-toggle"
                className="w-full bg-white py-3 px-4 rounded-lg border border-gray-200 flex justify-between items-center"
              >
                <span className="font-medium">Filters</span>
                <i className="fas fa-filter text-primary" />
              </button>
            </div>
            {/* Sidebar Filters */}
            <div
              id="filter-sidebar"
              className="hidden lg:block lg:w-1/4 xl:w-1/5 space-y-6"
            >
              {/* Categories */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="fiction"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="fiction" className="text-gray-700">
                      Fiction
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(124)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="non-fiction"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="non-fiction" className="text-gray-700">
                      Non-Fiction
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(87)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="sci-fi"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="sci-fi" className="text-gray-700">
                      Science Fiction
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(65)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="mystery"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="mystery" className="text-gray-700">
                      Mystery &amp; Thriller
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(43)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="biography"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="biography" className="text-gray-700">
                      Biography
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(32)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="self-help"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="self-help" className="text-gray-700">
                      Self-Help
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(78)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="romance"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="romance" className="text-gray-700">
                      Romance
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(54)</span>
                  </div>
                </div>
                <button className="text-primary text-sm mt-3 hover:underline">
                  Show more
                </button>
              </div>
              {/* Price Range */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      defaultValue={50}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">$0</span>
                      <span className="text-sm text-gray-600">$100</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1/2">
                      <label className="text-sm text-gray-600 block mb-1">
                        Min
                      </label>
                      <input
                        type="number"
                        placeholder="$0"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-sm text-gray-600 block mb-1">
                        Max
                      </label>
                      <input
                        type="number"
                        placeholder="$100"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <button className="bg-primary text-white py-2 px-4 rounded w-full hover:bg-opacity-90 transition">
                    Apply
                  </button>
                </div>
              </div>
              {/* Ratings */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4">Ratings</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="5-star"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="5-star"
                      className="text-gray-700 flex items-center"
                    >
                      <div className="text-yellow-400 flex">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="ml-2">5.0</span>
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(42)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="4-star"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="4-star"
                      className="text-gray-700 flex items-center"
                    >
                      <div className="text-yellow-400 flex">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <span className="ml-2">4.0 &amp; up</span>
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(125)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="3-star"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="3-star"
                      className="text-gray-700 flex items-center"
                    >
                      <div className="text-yellow-400 flex">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <span className="ml-2">3.0 &amp; up</span>
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(89)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="2-star"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor="2-star"
                      className="text-gray-700 flex items-center"
                    >
                      <div className="text-yellow-400 flex">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <span className="ml-2">2.0 &amp; up</span>
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(45)</span>
                  </div>
                </div>
              </div>
              {/* Authors */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4">Popular Authors</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="author1"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="author1" className="text-gray-700">
                      James Clear
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(18)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="author2"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="author2" className="text-gray-700">
                      Mark Manson
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(12)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="author3"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="author3" className="text-gray-700">
                      Robert Kiyosaki
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(9)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="author4"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="author4" className="text-gray-700">
                      Morgan Housel
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(7)</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="author5"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="author5" className="text-gray-700">
                      Yuval Noah Harari
                    </label>
                    <span className="ml-auto text-gray-500 text-sm">(5)</span>
                  </div>
                </div>
                <button className="text-primary text-sm mt-3 hover:underline">
                  Show more
                </button>
              </div>
              {/* Clear Filters Button */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition">
                  Clear All Filters
                </button>
              </div>
            </div>
            {/* Main Content */}
            <div className="lg:w-3/4 xl:w-4/5">
              {/* Sort and View Options */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Sort by:</span>
                  <select className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                    <option>Rating</option>
                  </select>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2 hidden sm:inline">
                      View:
                    </span>
                    <button className="p-2 bg-primary text-white rounded-l">
                      <i className="fas fa-th-large" />
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-r">
                      <i className="fas fa-list" />
                    </button>
                  </div>
                  <span className="text-gray-600 ml-auto sm:ml-4">
                    Showing 1-12 of 483 books
                  </span>
                </div>
              </div>
              {/* Book Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {/* Book Card 1 */}
                <a
                  href="/detail-book1.html"
                  className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm"
                >
                  <div className="relative">
                    <img
                      src="/assets/Atomic_Habits.png"
                      alt="Atomic Habits"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-primary text-white text-xs px-2 py-1">
                      BESTSELLER
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                      <span className="text-sm">4.8 (2.4k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      Atomic Habits
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By James Clear
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold">$18.99</span>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </a>
                {/* Book Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/assets/psychology_of_money.png"
                      alt="The Psychology of Money"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="text-sm">5.0 (1.8k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      The Psychology of Money
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By Morgan Housel
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold">$15.99</span>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 3 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/assets/sapiens.jpg"
                      alt="Sapiens"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      20% OFF
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <span className="text-sm">4.0 (1.2k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      Sapiens: A Brief History of Humankind
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By Yuval Noah Harari
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <span className="font-bold">$12.99</span>
                        <span className="text-gray-400 text-sm line-through ml-1">
                          $16.99
                        </span>
                      </div>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 4 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/assets/Rich Dad Book.png"
                      alt="Rich Dad Poor Dad"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                      <span className="text-sm">4.5 (3.2k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      Rich Dad Poor Dad
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By Robert Kiyosaki
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold">$14.99</span>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 5 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=220&width=170"
                      alt="The Subtle Art of Not Giving"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-primary text-white text-xs px-2 py-1">
                      BESTSELLER
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <span className="text-sm">4.0 (5.6k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      The Subtle Art of Not Giving
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By Mark Manson
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$13.99</span>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 6 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=220&width=170"
                      alt="Thinking, Fast and Slow"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      15% OFF
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                      <span className="text-sm">4.7 (2.1k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      Thinking, Fast and Slow
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By Daniel Kahneman
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold">$16.99</span>
                        <span className="text-gray-400 text-sm line-through ml-1">
                          $19.99
                        </span>
                      </div>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 7 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=220&width=170"
                      alt="Dune"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="text-sm">5.0 (4.3k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      Dune
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By Frank Herbert
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$12.99</span>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 8 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=220&width=170"
                      alt="The Alchemist"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                      <span className="text-sm">4.6 (7.8k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      The Alchemist
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By Paulo Coelho
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$11.99</span>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 9 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=220&width=170"
                      alt="To Kill a Mockingbird"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      10% OFF
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                      <span className="text-sm">4.8 (9.2k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      To Kill a Mockingbird
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By Harper Lee
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold">$10.79</span>
                        <span className="text-gray-400 text-sm line-through ml-1">
                          $11.99
                        </span>
                      </div>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 10 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=220&width=170"
                      alt={1984}
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="text-sm">5.0 (6.5k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      1984
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By George Orwell
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$9.99</span>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 11 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=220&width=170"
                      alt="The Great Gatsby"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <span className="text-sm">4.0 (5.1k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      The Great Gatsby
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By F. Scott Fitzgerald
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$8.99</span>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Book Card 12 */}
                <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=220&width=170"
                      alt="Pride and Prejudice"
                      className="w-full max-h-64 object-contain p-4 mx-auto"
                    />
                    <div className="absolute top-2 right-2">
                      <button className="bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                        <i className="far fa-heart" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-blue-500 text-white text-xs px-2 py-1">
                      NEW
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="text-yellow-400 text-sm">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                      <span className="text-sm">4.7 (3.9k)</span>
                    </div>
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      Pride and Prejudice
                    </h3>
                    <p className="text-sm text-light mb-2 line-clamp-1">
                      By Jane Austen
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$7.99</span>
                      <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-1">
                  <a
                    href="#"
                    className="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    <i className="fas fa-chevron-left" />
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 rounded bg-primary text-white"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <span className="px-4 py-2 text-gray-600">...</span>
                  <a
                    href="#"
                    className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    12
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    <i className="fas fa-chevron-right" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;
