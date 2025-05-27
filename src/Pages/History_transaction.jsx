import React from "react";
import Layout from "../Components/Layout";

const History_transaction = () => {
  return (
    <Layout>
      <div>
        {/* Breadcrumb */}
        {/* <div className="bg-white py-4 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <a href="index.html" className="text-gray-500 hover:text-primary">
                Home
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <a href="#" className="text-gray-500 hover:text-primary">
                My Account
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-primary">My Orders</span>
            </div>
          </div>
        </div> */}
        {/* Page Header */}
        <section className="py-8 md:py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    My Orders
                  </h1>
                  <p className="text-gray-600">
                    Track and manage all your book orders in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Filters */}
        <section className="py-4 pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search your orders..."
                        className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value>All Orders</option>
                      <option value="delivered">Delivered</option>
                      <option value="shipped">Shipped</option>
                      <option value="processing">Processing</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value>All Time</option>
                      <option value="last-month">Last Month</option>
                      <option value="last-3-months">Last 3 Months</option>
                      <option value="this-year">This Year</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Orders List */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-6">
                {/* Order 1 - Recent Order */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 md:p-6">
                    {/* Order Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg">Order #7352</h3>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            Delivered
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          Ordered on May 20, 2025 • Delivered on May 23, 2025
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-primary">
                          $89.97
                        </div>
                        <p className="text-gray-500 text-sm">3 items</p>
                      </div>
                    </div>
                    {/* Order Items */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src="https://i0.wp.com/freedom.to/blog/wp-content/uploads/2018/10/Atomic_Habits-2.png?fit=1024%2C1012&ssl=1"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">Atomic Habits</h4>
                          <p className="text-gray-500 text-sm">
                            by James Clear
                          </p>
                          <p className="text-gray-500 text-sm">Quantity: 1</p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">$18.99</div>
                          <button className="text-primary text-sm hover:underline">
                            Write Review
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src="https://bookpadho.com/wp-content/uploads/2025/02/1740040199.png"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">
                            The Psychology of Money
                          </h4>
                          <p className="text-gray-500 text-sm">
                            by Morgan Housel
                          </p>
                          <p className="text-gray-500 text-sm">Quantity: 2</p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">$31.98</div>
                          <button className="text-primary text-sm hover:underline">
                            Write Review
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src="https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">Sapiens</h4>
                          <p className="text-gray-500 text-sm">
                            by Yuval Noah Harari
                          </p>
                          <p className="text-gray-500 text-sm">Quantity: 1</p>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">$12.99</div>
                          <button className="text-primary text-sm hover:underline">
                            Write Review
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Delivery Info */}
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-check-circle text-green-500 text-xl" />
                        <div>
                          <h5 className="font-medium text-green-700">
                            Order Delivered Successfully!
                          </h5>
                          <p className="text-green-600 text-sm">
                            Delivered to 123 Main Street, New York, NY 10001 on
                            May 23, 2025
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2">
                        <i className="fas fa-redo" />
                        <span>Buy Again</span>
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                        <i className="fas fa-download" />
                        <span>Download Invoice</span>
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                        <i className="fas fa-headset" />
                        <span>Get Help</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Order 2 - Shipped Order */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 md:p-6">
                    {/* Order Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg">Order #7298</h3>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            Shipped
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          Ordered on May 18, 2025 • Expected delivery: May 25,
                          2025
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-primary">
                          $67.98
                        </div>
                        <p className="text-gray-500 text-sm">2 items</p>
                      </div>
                    </div>
                    {/* Order Items */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src="https://5.imimg.com/data5/SELLER/Default/2023/3/VN/TG/LW/147952517/new-product.jpeg"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">Deep Work</h4>
                          <p className="text-gray-500 text-sm">
                            by Cal Newport
                          </p>
                          <p className="text-gray-500 text-sm">Quantity: 1</p>
                        </div>
                        <div className="font-medium">$14.99</div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">
                            Thinking, Fast and Slow
                          </h4>
                          <p className="text-gray-500 text-sm">
                            by Daniel Kahneman
                          </p>
                          <p className="text-gray-500 text-sm">Quantity: 1</p>
                        </div>
                        <div className="font-medium">$16.99</div>
                      </div>
                    </div>
                    {/* Shipping Progress */}
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <i className="fas fa-truck text-blue-500 text-xl" />
                        <div>
                          <h5 className="font-medium text-blue-700">
                            Your order is on the way!
                          </h5>
                          <p className="text-blue-600 text-sm">
                            Tracking: UPS1234567890
                          </p>
                        </div>
                      </div>
                      {/* Progress Steps */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                            <i className="fas fa-check" />
                          </div>
                          <span className="text-xs text-blue-600 mt-1">
                            Ordered
                          </span>
                        </div>
                        <div className="flex-1 h-1 bg-blue-500 mx-2" />
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                            <i className="fas fa-check" />
                          </div>
                          <span className="text-xs text-blue-600 mt-1">
                            Packed
                          </span>
                        </div>
                        <div className="flex-1 h-1 bg-blue-500 mx-2" />
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                            <i className="fas fa-truck" />
                          </div>
                          <span className="text-xs text-blue-600 mt-1">
                            Shipped
                          </span>
                        </div>
                        <div className="flex-1 h-1 bg-gray-300 mx-2" />
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm">
                            <i className="fas fa-home" />
                          </div>
                          <span className="text-xs text-gray-500 mt-1">
                            Delivered
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2">
                        <i className="fas fa-truck" />
                        <span>Track Package</span>
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                        <i className="fas fa-download" />
                        <span>Download Invoice</span>
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                        <i className="fas fa-headset" />
                        <span>Get Help</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Order 3 - Processing Order */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 md:p-6">
                    {/* Order Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg">Order #7245</h3>
                          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                            Processing
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          Ordered on May 15, 2025 • Estimated delivery: May 22,
                          2025
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-primary">
                          $45.98
                        </div>
                        <p className="text-gray-500 text-sm">2 items</p>
                      </div>
                    </div>
                    {/* Order Items */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">Rich Dad Poor Dad</h4>
                          <p className="text-gray-500 text-sm">
                            by Robert Kiyosaki
                          </p>
                          <p className="text-gray-500 text-sm">Quantity: 1</p>
                        </div>
                        <div className="font-medium">$14.99</div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src="https://images.squarespace-cdn.com/content/v1/6398d94cae7504477c095dde/1670972384359-1W08K5N4XZ6IAPLD3YOX/Coel_The%2BAlchemist_3D.png?format=2500w"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">The Alchemist</h4>
                          <p className="text-gray-500 text-sm">
                            by Paulo Coelho
                          </p>
                          <p className="text-gray-500 text-sm">Quantity: 1</p>
                        </div>
                        <div className="font-medium">$11.99</div>
                      </div>
                    </div>
                    {/* Processing Info */}
                    <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-clock text-yellow-500 text-xl" />
                        <div>
                          <h5 className="font-medium text-yellow-700">
                            We're preparing your order
                          </h5>
                          <p className="text-yellow-600 text-sm">
                            Your books are being carefully packed and will ship
                            soon. You'll receive tracking information once
                            shipped.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                      <button className="border border-red-300 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition flex items-center justify-center gap-2">
                        <i className="fas fa-times" />
                        <span>Cancel Order</span>
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                        <i className="fas fa-edit" />
                        <span>Modify Order</span>
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                        <i className="fas fa-headset" />
                        <span>Get Help</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Order 4 - Cancelled Order */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden opacity-75">
                  <div className="p-4 md:p-6">
                    {/* Order Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg text-gray-600">
                            Order #7189
                          </h3>
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                            Cancelled
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          Ordered on May 10, 2025 • Cancelled on May 11, 2025
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-gray-500">
                          $29.98
                        </div>
                        <p className="text-gray-500 text-sm">2 items</p>
                      </div>
                    </div>
                    {/* Order Items */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src="https://kadribooks.com/cdn/shop/files/Dune_by_Frank_Herbert.webp?v=1733459866"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded grayscale"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-600">Dune</h4>
                          <p className="text-gray-500 text-sm">
                            by Frank Herbert
                          </p>
                          <p className="text-gray-500 text-sm">Quantity: 1</p>
                        </div>
                        <div className="font-medium text-gray-500">$14.99</div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src="https://inc.mizanstore.com/aassets/img/com_cart/produk/moon-edisi-inggris-bulan.jpg"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded grayscale"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-600">Moon</h4>
                          <p className="text-gray-500 text-sm">
                            by Tere Liye
                          </p>
                          <p className="text-gray-500 text-sm">Quantity: 1</p>
                        </div>
                        <div className="font-medium text-gray-500">$12.99</div>
                      </div>
                    </div>
                    {/* Cancellation Info */}
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center gap-3">
                        <i className="fas fa-times-circle text-red-500 text-xl" />
                        <div>
                          <h5 className="font-medium text-red-700">
                            Order Cancelled
                          </h5>
                          <p className="text-red-600 text-sm">
                            You cancelled this order on May 11, 2025. Refund of
                            $29.98 has been processed to your original payment
                            method.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2">
                        <i className="fas fa-redo" />
                        <span>Order Again</span>
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                        <i className="fas fa-receipt" />
                        <span>View Refund Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Load More Button */}
              <div className="text-center mt-8">
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                  Load More Orders
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default History_transaction;
