import React from "react";
import Layout from "../Components/Layout";

const Wishlist = () => {
  return (
    <Layout>
      {/* Wishlist Header */}
      <section className="py-8 md:py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Wishlist</h1>
            <p className="text-gray-600">
              Keep track of all the books you want to read in the future.
            </p>
          </div>
        </div>
      </section>
      {/* Wishlist Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Wishlist Stats */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-8 mx-auto lg:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">8</p>
                <p className="text-gray-600 text-sm">Books in Wishlist</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">3</p>
                <p className="text-gray-600 text-sm">On Sale</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">2</p>
                <p className="text-gray-600 text-sm">Recently Added</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">
                  $156.92
                </p>
                <p className="text-gray-600 text-sm">Total Value</p>
              </div>
            </div>
          </div>
          {/* Wishlist Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 mx-auto lg:px-24 ">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Date Added: Newest First</option>
                <option>Date Added: Oldest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex-1 sm:flex-none">
                Add All to Cart
              </button>
              <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition flex-1 sm:flex-none">
                Clear Wishlist
              </button>
            </div>
          </div>
          {/* Wishlist Items */}
          <div className="lg:px-24">
            {/* Item 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 md:w-1/5">
                  <img
                    src="https://i0.wp.com/freedom.to/blog/wp-content/uploads/2018/10/Atomic_Habits-2.png?fit=1024%2C1012&ssl=1"
                    alt="Atomic Habits"
                    className="w-full h-[200px] sm:h-[220px] object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">Atomic Habits</h3>
                      <p className="text-gray-600 mb-2">By James Clear</p>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="text-yellow-400 text-sm">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                        <span className="text-sm text-gray-600">
                          4.8 (2.4k reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 hidden md:block">
                        Tiny Changes, Remarkable Results. No matter your goals,
                        Atomic Habits offers a proven framework for
                        improving--every day.
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="font-bold text-lg">$18.99</span>
                      <span className="text-green-600 text-sm">In Stock</span>
                      <span className="bg-primary text-white text-xs px-2 py-1 rounded">
                        BESTSELLER
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 border-t border-gray-100">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex-1">
                      Add to Cart
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition flex-1">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 md:w-1/5">
                  <img
                    src="https://bookpadho.com/wp-content/uploads/2025/02/1740040199.png"
                    alt="The Psychology of Money"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        The Psychology of Money
                      </h3>
                      <p className="text-gray-600 mb-2">By Morgan Housel</p>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="text-yellow-400 text-sm">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="text-sm text-gray-600">
                          5.0 (1.8k reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 hidden md:block">
                        Timeless lessons on wealth, greed, and happiness doing
                        well with money isn't necessarily about what you know.
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div>
                        <span className="font-bold text-lg">$15.99</span>
                        <span className="text-gray-400 text-sm line-through ml-1">
                          $19.99
                        </span>
                      </div>
                      <span className="text-green-600 text-sm">In Stock</span>
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        20% OFF
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 border-t border-gray-100">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex-1">
                      Add to Cart
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition flex-1">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 md:w-1/5">
                  <img
                    src="https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png"
                    alt="Sapiens"
                    className="w-full h-[200px] sm:h-[220px] object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Sapiens: A Brief History of Humankind
                      </h3>
                      <p className="text-gray-600 mb-2">By Yuval Noah Harari</p>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="text-yellow-400 text-sm">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <span className="text-sm text-gray-600">
                          4.0 (1.2k reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 hidden md:block">
                        How Homo sapiens became Earth's dominant species,
                        exploring the ways in which biology and history have
                        defined us.
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div>
                        <span className="font-bold text-lg">$12.99</span>
                        <span className="text-gray-400 text-sm line-through ml-1">
                          $16.99
                        </span>
                      </div>
                      <span className="text-green-600 text-sm">In Stock</span>
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        23% OFF
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 border-t border-gray-100">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex-1">
                      Add to Cart
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition flex-1">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 md:w-1/5">
                  <img
                    src="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    alt="Rich Dad Poor Dad"
                    className="w-full h-[200px] sm:h-[220px] object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Rich Dad Poor Dad
                      </h3>
                      <p className="text-gray-600 mb-2">By Robert Kiyosaki</p>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="text-yellow-400 text-sm">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                        <span className="text-sm text-gray-600">
                          4.5 (3.2k reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 hidden md:block">
                        What the rich teach their kids about money that the poor
                        and middle class do not.
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="font-bold text-lg">$14.99</span>
                      <span className="text-green-600 text-sm">In Stock</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 border-t border-gray-100">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex-1">
                      Add to Cart
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition flex-1">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 md:w-1/5">
                  <img
                    src="https://harvilleandhelen.com/wp-content/uploads/2024/07/HTTWAAA-Cover-3D-Left-070124-663x1024.png"
                    alt="How To Talk To Anyone"
                    className="w-full h-[200px] sm:h-[220px] object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        How To Talk To Anyone
                      </h3>
                      <p className="text-gray-600 mb-2">By Harville & Hellen</p>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="text-yellow-400 text-sm">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <span className="text-sm text-gray-600">
                          4.0 (5.6k reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 hidden md:block">
                        What it boils down to is a more skillful way of dealing
                        with people.
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="font-bold text-lg">$13.99</span>
                      <span className="text-green-600 text-sm">In Stock</span>
                      <span className="bg-primary text-white text-xs px-2 py-1 rounded">
                        BESTSELLER
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 border-t border-gray-100">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex-1">
                      Add to Cart
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition flex-1">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 6 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 md:w-1/5">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg"
                    alt="Thinking, Fast and Slow"
                    className="w-full h-[200px] sm:h-[220px] object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Thinking, Fast and Slow
                      </h3>
                      <p className="text-gray-600 mb-2">By Daniel Kahneman</p>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="text-yellow-400 text-sm">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                        <span className="text-sm text-gray-600">
                          4.7 (2.1k reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 hidden md:block">
                        A groundbreaking tour of the mind explaining the two
                        systems that drive the way we think and make choices.
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div>
                        <span className="font-bold text-lg">$16.99</span>
                        <span className="text-gray-400 text-sm line-through ml-1">
                          $19.99
                        </span>
                      </div>
                      <span className="text-green-600 text-sm">In Stock</span>
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        15% OFF
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 border-t border-gray-100">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex-1">
                      Add to Cart
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition flex-1">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 7 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 md:w-1/5">
                  <img
                    src="https://kadribooks.com/cdn/shop/files/Dune_by_Frank_Herbert.webp?v=1733459866"
                    alt="Dune"
                    className="w-full h-[200px] sm:h-[220px] object-contain"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">Dune</h3>
                      <p className="text-gray-600 mb-2">By Frank Herbert</p>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="text-yellow-400 text-sm">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="text-sm text-gray-600">
                          5.0 (4.3k reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 hidden md:block">
                        Set on the desert planet Arrakis, Dune is the story of
                        the boy Paul Atreides, heir to a noble family tasked
                        with ruling an inhospitable world.
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="font-bold text-lg">$12.99</span>
                      <span className="text-green-600 text-sm">In Stock</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 border-t border-gray-100">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex-1">
                      Add to Cart
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition flex-1">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 8 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 md:w-1/5">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/6398d94cae7504477c095dde/1670972384359-1W08K5N4XZ6IAPLD3YOX/Coel_The%2BAlchemist_3D.png?format=2500w"
                    alt="The Alchemist"
                    className="w-full h-[200px] sm:h-[220px] object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">The Alchemist</h3>
                      <p className="text-gray-600 mb-2">By Paulo Coelho</p>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="text-yellow-400 text-sm">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                        <span className="text-sm text-gray-600">
                          4.6 (7.8k reviews)
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 hidden md:block">
                        A fable about following your dream and listening to your
                        heart, this story has inspired millions around the
                        world.
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="font-bold text-lg">$11.99</span>
                      <span className="text-green-600 text-sm">In Stock</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 border-t border-gray-100">
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition flex-1">
                      Add to Cart
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition flex-1">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empty Wishlist State (Hidden by default) */}
      <section id="empty-wishlist" className="py-12 hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="text-gray-300 text-7xl mb-6">
              <i className="far fa-heart" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">
              Browse our catalog and add books you'd like to read in the future.
            </p>
            <a
              href="catalog.html"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition inline-block"
            >
              Browse Catalog
            </a>
          </div>
        </div>
      </section>
      
      {/* Recommended Books */}
      <section className="pt-10 mb-8 sm:pt-16 pb-5 lg:px-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Book 1 */}
            <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
              <div className="relative">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1417492522i/23645640.jpg"
                  alt="Koala Kumal"
                  className="w-full h-[180px] sm:h-[220px] object-contain"
                />
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                  <i className="far fa-heart" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-base mb-1 line-clamp-1">
                  Koala Kumal
                </h3>
                <p className="text-sm text-light mb-2 line-clamp-1">
                  By Raditya Dika
                </p>
                <div className="flex items-center gap-1 mb-3">
                  <div className="text-yellow-400 text-sm">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text-sm">5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">$9.99</span>
                  <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* Book 2 */}
            <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
              <div className="relative">
                <img
                  src="https://cdn1.bookmanager.com/i/m.php?b=Wbq2YtVPObbUtgwnJz8beA&cb=1705096643"
                  alt="The Great Gatsby"
                  className="w-full h-[180px] sm:h-[220px] object-contain"
                />
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                  <i className="far fa-heart" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-base mb-1 line-clamp-1">
                  The Great Gatsby
                </h3>
                <p className="text-sm text-light mb-2 line-clamp-1">
                  By F. Scott Fitzgerald
                </p>
                <div className="flex items-center gap-1 mb-3">
                  <div className="text-yellow-400 text-sm">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </div>
                  <span className="text-sm">4.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">$8.99</span>
                  <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* Book 3 */}
            <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
              <div className="relative">
                <img
                  src="https://cdn.gramedia.com/uploads/items/_4121.jpg"
                  alt="Pride and Prejudice"
                  className="w-full h-[180px] sm:h-[220px] object-contain"
                />
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                  <i className="far fa-heart" />
                </button>
                <div className="absolute bottom-0 left-0 bg-blue-500 text-white text-xs px-2 py-1">
                  NEW
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-base mb-1 line-clamp-1">
                  Pride and Prejudice
                </h3>
                <p className="text-sm text-light mb-2 line-clamp-1">
                  By Jane Austen
                </p>
                <div className="flex items-center gap-1 mb-3">
                  <div className="text-yellow-400 text-sm">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <span className="text-sm">4.7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">$7.99</span>
                  <button className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* Book 4 */}
            <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
              <div className="relative">
                <img
                  src="https://inc.mizanstore.com/aassets/img/com_cart/produk/moon-edisi-inggris-bulan.jpg"
                  alt="Moon"
                  className="w-full h-[180px] sm:h-[220px] object-contain"
                />
                <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                  <i className="far fa-heart" />
                </button>
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  10% OFF
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-base mb-1 line-clamp-1">
                  Moon
                </h3>
                <p className="text-sm text-light mb-2 line-clamp-1">
                  By Tere Liye
                </p>
                <div className="flex items-center gap-1 mb-3">
                  <div className="text-yellow-400 text-sm">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <span className="text-sm">4.8</span>
                </div>
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Wishlist;
