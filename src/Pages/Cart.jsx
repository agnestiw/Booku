import React from "react";
import Layout from "../Components/Layout";

const Cart = () => {
  return (
    <Layout>
        {/* Cart Header */}
        <section className="py-8 md:py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Shopping Cart
              </h1>
              <p className="text-gray-600">
                Review your items and proceed to checkout.
              </p>
            </div>
          </div>
        </section>
        {/* Cart Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="lg:w-2/3">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Cart Items (3)</h2>
                        <button className="text-gray-500 hover:text-primary text-sm">
                          Clear Cart
                        </button>
                      </div>
                      {/* Cart Item 1 */}
                      <div className="border-b border-gray-100 pb-6 mb-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="sm:w-1/4 md:w-1/5">
                            <img
                              src="https://i0.wp.com/freedom.to/blog/wp-content/uploads/2018/10/Atomic_Habits-2.png?fit=1024%2C1012&ssl=1"
                              alt="Atomic Habits"
                              className="w-full h-40 sm:h-auto object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                              <div>
                                <h3 className="font-bold text-lg mb-1">
                                  Atomic Habits
                                </h3>
                                <p className="text-gray-600 mb-2">
                                  By James Clear
                                </p>
                                <p className="text-sm text-gray-500 mb-2">
                                  Paperback
                                </p>
                                <div className="flex items-center gap-3 mb-4">
                                  <span className="text-green-600 text-sm">
                                    In Stock
                                  </span>
                                  <span className="bg-primary text-white text-xs px-2 py-1 rounded">
                                    BESTSELLER
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-start sm:items-end gap-2">
                                <span className="font-bold text-lg">
                                  $18.99
                                </span>
                              </div>
                            </div>
                            <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                              <div className="flex items-center">
                                <span className="text-gray-600 mr-3">Qty:</span>
                                <div className="flex items-center border border-gray-300 rounded">
                                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                                    -
                                  </button>
                                  <span className="px-3 py-1 border-l border-r border-gray-300">
                                    1
                                  </span>
                                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <button className="text-gray-500 hover:text-primary flex items-center gap-1">
                                  <i className="far fa-heart" />
                                  <span>Save for Later</span>
                                </button>
                                <button className="text-gray-500 hover:text-red-500 flex items-center gap-1">
                                  <i className="far fa-trash-alt" />
                                  <span>Remove</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Cart Item 2 */}
                      <div className="border-b border-gray-100 pb-6 mb-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="sm:w-1/4 md:w-1/5">
                            <img
                              src="https://bookpadho.com/wp-content/uploads/2025/02/1740040199.png"
                              alt="The Psychology of Money"
                              className="w-full h-40 sm:h-auto object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                              <div>
                                <h3 className="font-bold text-lg mb-1">
                                  The Psychology of Money
                                </h3>
                                <p className="text-gray-600 mb-2">
                                  By Morgan Housel
                                </p>
                                <p className="text-sm text-gray-500 mb-2">
                                  Paperback
                                </p>
                                <div className="flex items-center gap-3 mb-4">
                                  <span className="text-green-600 text-sm">
                                    In Stock
                                  </span>
                                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                                    20% OFF
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-start sm:items-end gap-2">
                                <div>
                                  <span className="font-bold text-lg">
                                    $15.99
                                  </span>
                                  <span className="text-gray-400 text-sm line-through ml-1">
                                    $19.99
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                              <div className="flex items-center">
                                <span className="text-gray-600 mr-3">Qty:</span>
                                <div className="flex items-center border border-gray-300 rounded">
                                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                                    -
                                  </button>
                                  <span className="px-3 py-1 border-l border-r border-gray-300">
                                    2
                                  </span>
                                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <button className="text-gray-500 hover:text-primary flex items-center gap-1">
                                  <i className="far fa-heart" />
                                  <span>Save for Later</span>
                                </button>
                                <button className="text-gray-500 hover:text-red-500 flex items-center gap-1">
                                  <i className="far fa-trash-alt" />
                                  <span>Remove</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Cart Item 3 */}
                      <div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="sm:w-1/4 md:w-1/5">
                            <img
                              src="https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png"
                              alt="Sapiens"
                              className="w-full h-40 sm:h-auto object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                              <div>
                                <h3 className="font-bold text-lg mb-1">
                                  Sapiens: A Brief History of Humankind
                                </h3>
                                <p className="text-gray-600 mb-2">
                                  By Yuval Noah Harari
                                </p>
                                <p className="text-sm text-gray-500 mb-2">
                                  Paperback
                                </p>
                                <div className="flex items-center gap-3 mb-4">
                                  <span className="text-green-600 text-sm">
                                    In Stock
                                  </span>
                                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                                    23% OFF
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-start sm:items-end gap-2">
                                <div>
                                  <span className="font-bold text-lg">
                                    $12.99
                                  </span>
                                  <span className="text-gray-400 text-sm line-through ml-1">
                                    $16.99
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                              <div className="flex items-center">
                                <span className="text-gray-600 mr-3">Qty:</span>
                                <div className="flex items-center border border-gray-300 rounded">
                                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                                    -
                                  </button>
                                  <span className="px-3 py-1 border-l border-r border-gray-300">
                                    1
                                  </span>
                                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <button className="text-gray-500 hover:text-primary flex items-center gap-1">
                                  <i className="far fa-heart" />
                                  <span>Save for Later</span>
                                </button>
                                <button className="text-gray-500 hover:text-red-500 flex items-center gap-1">
                                  <i className="far fa-trash-alt" />
                                  <span>Remove</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Saved for Later */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-6">
                        Saved for Later (1)
                      </h2>
                      {/* Saved Item */}
                      <div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="sm:w-1/4 md:w-1/5">
                            <img
                              src="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                              alt="Rich Dad Poor Dad"
                              className="w-full h-40 sm:h-auto object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                              <div>
                                <h3 className="font-bold text-lg mb-1">
                                  Rich Dad Poor Dad
                                </h3>
                                <p className="text-gray-600 mb-2">
                                  By Robert Kiyosaki
                                </p>
                                <p className="text-sm text-gray-500 mb-2">
                                  Paperback
                                </p>
                                <div className="flex items-center gap-3 mb-4">
                                  <span className="text-green-600 text-sm">
                                    In Stock
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-start sm:items-end gap-2">
                                <span className="font-bold text-lg">
                                  $14.99
                                </span>
                              </div>
                            </div>
                            <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                              <div className="flex items-center">
                                <span className="text-gray-600 mr-3">Qty:</span>
                                <div className="flex items-center border border-gray-300 rounded">
                                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                                    -
                                  </button>
                                  <span className="px-3 py-1 border-l border-r border-gray-300">
                                    1
                                  </span>
                                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <button className="text-primary hover:text-primary-dark flex items-center gap-1">
                                  <i className="fas fa-shopping-cart" />
                                  <span>Move to Cart</span>
                                </button>
                                <button className="text-gray-500 hover:text-red-500 flex items-center gap-1">
                                  <i className="far fa-trash-alt" />
                                  <span>Remove</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Order Summary */}
                <div className="lg:w-1/3">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Subtotal (4 items)
                          </span>
                          <span>$47.97</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Shipping</span>
                          <span>$4.99</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tax</span>
                          <span>$3.84</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Discount</span>
                          <span className="text-green-600">-$10.00</span>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                          <span>Total</span>
                          <span>$46.80</span>
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <input
                            type="checkbox"
                            id="gift-wrap"
                            className="rounded text-primary focus:ring-primary"
                          />
                          <label htmlFor="gift-wrap" className="text-gray-600">
                            Add gift wrapping for $2.99
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="gift-message"
                            className="rounded text-primary focus:ring-primary"
                          />
                          <label
                            htmlFor="gift-message"
                            className="text-gray-600"
                          >
                            Add gift message
                          </label>
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Promo code"
                            className="flex-grow py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition">
                            Apply
                          </button>
                        </div>
                      </div>
                      <a href="/transaction" className="w-full block text-center border bg-primary border-gray-300 text-white py-3 px-4 rounded-lg">
                         Proceed to Checkout
                      </a>
                      <a
                        href="catalog.html"
                        className="w-full block text-center border border-gray-300 text-gray-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition"
                      >
                        Continue Shopping
                      </a>
                      <div className="mt-6 space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <i className="fas fa-lock" />
                          <span>Secure checkout</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <i className="fas fa-truck" />
                          <span>Free shipping on orders over $35</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <i className="fas fa-undo" />
                          <span>30-day return policy</span>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-medium">Payment Methods</span>
                        </div>
                        <div className="flex gap-2">
                          <img
                            src="https://maxsi.id/images/logo/shopeepay.webp"
                            alt="Shopeepay"
                            className="h-8 w-auto"
                          />
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Logo_Gopay.svg/2118px-Logo_Gopay.svg.png"
                            alt="Gopay"
                            className="h-8 w-auto"
                          />
                          <img
                            src="https://www.linkqu.id/wp-content/uploads/2021/07/filedownload.png"
                            alt="Dana"
                            className="h-8 w-auto"
                          />
                          <img
                            src="https://images.seeklogo.com/logo-png/39/1/quick-response-code-indonesia-standard-qris-logo-png_seeklogo-391791.png"
                            alt="Qris"
                            className="h-8 w-auto"
                          />
                          <img
                            src="https://i.pinimg.com/736x/29/61/0b/29610b7dbf7e4ea5070626923a12cba8.jpg"
                            alt="BCA"
                            className="h-8 w-auto"
                          />
                          <img
                            src="https://images.seeklogo.com/logo-png/45/1/bri-logo-png_seeklogo-457200.png"
                            alt="BRI"
                            className="h-8 w-auto"
                          />
                          <img
                            src="https://companieslogo.com/img/orig/BBNI.JK-69fac82a.png?t=1720244490"
                            alt="BNI"
                            className="h-8 w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Recently Viewed */}
        <section className="py-12 bg-white lg:px-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Recently Viewed
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Book 1 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="relative">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg"
                    alt="Thinking, Fast and Slow"
                    className="w-full h-[180px] sm:h-[220px] object-contain"
                  />
                  <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                    <i className="far fa-heart" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1 line-clamp-1">
                    Thinking, Fast and Slow
                  </h3>
                  <p className="text-sm text-light mb-2 line-clamp-1">
                    By Daniel Kahneman
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
              {/* Book 2 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="relative">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2023/3/VN/TG/LW/147952517/new-product.jpeg"
                    alt="Deep Work"
                    className="w-full h-[180px] sm:h-[220px] object-contain"
                  />
                  <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                    <i className="far fa-heart" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1 line-clamp-1">
                    Deep Work
                  </h3>
                  <p className="text-sm text-light mb-2 line-clamp-1">
                    By Cal Newport
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
                    <span className="font-bold">$14.99</span>
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
                    src="https://kadribooks.com/cdn/shop/files/Dune_by_Frank_Herbert.webp?v=1733459866"
                    alt="Dune"
                    className="w-full h-[180px] sm:h-[220px] object-contain"
                  />
                  <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                    <i className="far fa-heart" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1 line-clamp-1">
                    Dune
                  </h3>
                  <p className="text-sm text-light mb-2 line-clamp-1">
                    By Frank Herbert
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
                    <span className="font-bold">$12.99</span>
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
                    src="https://images.squarespace-cdn.com/content/v1/6398d94cae7504477c095dde/1670972384359-1W08K5N4XZ6IAPLD3YOX/Coel_The%2BAlchemist_3D.png?format=2500w"
                    alt="The Alchemist"
                    className="w-full h-[180px] sm:h-[220px] object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:text-primary">
                    <i className="far fa-heart" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1 line-clamp-1">
                    The Alchemist
                  </h3>
                  <p className="text-sm text-light mb-2 line-clamp-1">
                    By Paulo Coelho
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="text-yellow-400 text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="text-sm">4.6</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">$11.99</span>
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

export default Cart;
