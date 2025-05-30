import React from "react";
import LayoutAdmin from "../../Components/LayoutAdmin";

const Transactions = () => {
  return (
    <LayoutAdmin>
      <main className="flex-1 md:ml-64 min-h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm py-4 px-6 hidden md:block">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-dark">Manage Transactions</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                  <i className="fas fa-bell text-gray-500" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
              <div className="relative">
                <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                  <i className="fas fa-envelope text-gray-500" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    5
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* Transactions Content */}
        <div className="p-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold md:hidden">
                Manage Transactions
              </h2>
              <p className="text-gray-500">
                Monitor and manage all customer transactions and orders.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                <i className="fas fa-download" />
                <span>Export Report</span>
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2">
                <i className="fas fa-plus" />
                <span>Manual Order</span>
              </button>
            </div>
          </div>
          {/* Transaction Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
                  <h3 className="text-2xl font-bold">$124,567</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>15.3% from last month</span>
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <i className="fas fa-dollar-sign text-green-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Orders</p>
                  <h3 className="text-2xl font-bold">1,847</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>8.7% from last month</span>
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="fas fa-shopping-cart text-blue-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Pending Orders</p>
                  <h3 className="text-2xl font-bold">47</h3>
                  <p className="text-yellow-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-clock mr-1" />
                    <span>Needs attention</span>
                  </p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <i className="fas fa-clock text-yellow-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Average Order</p>
                  <h3 className="text-2xl font-bold">$67.45</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>3.2% from last month</span>
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="fas fa-chart-line text-purple-500 text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by order ID, customer name, or email..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value>All Status</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="refunded">Refunded</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value>All Time</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="last-7-days">Last 7 Days</option>
                  <option value="last-30-days">Last 30 Days</option>
                  <option value="this-month">This Month</option>
                  <option value="last-month">Last Month</option>
                </select>
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition whitespace-nowrap">
                  <i className="fas fa-filter" />
                  <span className="ml-2">More Filters</span>
                </button>
              </div>
            </div>
          </div>
          {/* Transactions Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3 rounded text-primary focus:ring-primary"
                />
                <span className="text-gray-500 text-sm">Select All</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-gray-500 hover:text-primary px-2 py-1 rounded hover:bg-gray-100">
                  <i className="fas fa-edit" />
                  <span className="ml-1">Bulk Update</span>
                </button>
                <button className="text-gray-500 hover:text-primary px-2 py-1 rounded hover:bg-gray-100">
                  <i className="fas fa-envelope" />
                  <span className="ml-1">Send Notification</span>
                </button>
                <button className="text-gray-500 hover:text-primary px-2 py-1 rounded hover:bg-gray-100">
                  <i className="fas fa-download" />
                  <span className="ml-1">Export</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b border-gray-200 bg-gray-50">
                    <th className="p-4 font-medium w-12">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </th>
                    <th className="p-4 font-medium">Order ID</th>
                    <th className="p-4 font-medium">Customer</th>
                    <th className="p-4 font-medium">Items</th>
                    <th className="p-4 font-medium">Amount</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Payment</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Transaction 1 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">#ORD-7352</span>
                        <p className="text-xs text-gray-500">
                          Express Shipping
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-sm">Sarah Johnson</h4>
                          <p className="text-xs text-gray-500">
                            sarah.j@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">3 items</span>
                        <p className="text-xs text-gray-500">
                          Atomic Habits, Psychology of Money...
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">$89.97</span>
                        <p className="text-xs text-gray-500">
                          + $9.99 shipping
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Delivered
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">Visa ****4567</span>
                        <p className="text-xs text-gray-500">Paid</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">May 20, 2025</span>
                        <p className="text-xs text-gray-500">2:30 PM</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          title="View Details"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          className="text-green-500 hover:text-green-700"
                          title="Print Invoice"
                        >
                          <i className="fas fa-print" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Email"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          title="Refund"
                        >
                          <i className="fas fa-undo" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Transaction 2 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">#ORD-7298</span>
                        <p className="text-xs text-gray-500">
                          Standard Shipping
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-sm">Michael Chen</h4>
                          <p className="text-xs text-gray-500">
                            michael.c@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">2 items</span>
                        <p className="text-xs text-gray-500">
                          Deep Work, Thinking Fast...
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">$67.98</span>
                        <p className="text-xs text-gray-500">
                          + $4.99 shipping
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        Shipped
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">PayPal</span>
                        <p className="text-xs text-gray-500">Paid</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">May 18, 2025</span>
                        <p className="text-xs text-gray-500">10:15 AM</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          title="View Details"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          className="text-purple-500 hover:text-purple-700"
                          title="Track Package"
                        >
                          <i className="fas fa-truck" />
                        </button>
                        <button
                          className="text-green-500 hover:text-green-700"
                          title="Print Invoice"
                        >
                          <i className="fas fa-print" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Email"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          title="Cancel Order"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Transaction 3 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">#ORD-7245</span>
                        <p className="text-xs text-gray-500">
                          Standard Shipping
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-sm">
                            Emily Rodriguez
                          </h4>
                          <p className="text-xs text-gray-500">
                            emily.r@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">2 items</span>
                        <p className="text-xs text-gray-500">
                          Rich Dad Poor Dad, Alchemist
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">$45.98</span>
                        <p className="text-xs text-gray-500">
                          + $4.99 shipping
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                        Processing
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">Visa ****1234</span>
                        <p className="text-xs text-gray-500">Paid</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">May 15, 2025</span>
                        <p className="text-xs text-gray-500">4:45 PM</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          title="View Details"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          className="text-green-500 hover:text-green-700"
                          title="Mark as Shipped"
                        >
                          <i className="fas fa-shipping-fast" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Email"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          title="Cancel Order"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Transaction 4 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">#ORD-7189</span>
                        <p className="text-xs text-gray-500">
                          Express Shipping
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-sm">
                            David Thompson
                          </h4>
                          <p className="text-xs text-gray-500">
                            david.t@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">2 items</span>
                        <p className="text-xs text-gray-500">Dune, 1984</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium text-gray-500">
                          $29.98
                        </span>
                        <p className="text-xs text-red-500">Refunded</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                        Cancelled
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">Visa ****9876</span>
                        <p className="text-xs text-red-500">Refunded</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">May 10, 2025</span>
                        <p className="text-xs text-gray-500">11:20 AM</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          title="View Details"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          className="text-green-500 hover:text-green-700"
                          title="View Refund"
                        >
                          <i className="fas fa-receipt" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Email"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-gray-400"
                          title="Order Cancelled"
                          disabled
                        >
                          <i className="fas fa-ban" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Transaction 5 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">#ORD-7156</span>
                        <p className="text-xs text-gray-500">
                          Standard Shipping
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-sm">Lisa Park</h4>
                          <p className="text-xs text-gray-500">
                            lisa.p@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">1 item</span>
                        <p className="text-xs text-gray-500">
                          The Subtle Art of Not Giving...
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium">$18.99</span>
                        <p className="text-xs text-gray-500">
                          + $4.99 shipping
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        Pending
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">PayPal</span>
                        <p className="text-xs text-yellow-500">Pending</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="text-sm">May 22, 2025</span>
                        <p className="text-xs text-gray-500">9:30 AM</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          title="View Details"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          className="text-green-500 hover:text-green-700"
                          title="Confirm Payment"
                        >
                          <i className="fas fa-check" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Email"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          title="Cancel Order"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                Showing 1 to 5 of 1,847 transactions
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  disabled
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <button className="px-3 py-1 rounded bg-primary text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  ...
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  185
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Recent Transaction Activity</h3>
                <a href="#" className="text-primary hover:underline text-sm">
                  View All
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm">
                      <strong>Order #ORD-7352</strong> was delivered to Sarah
                      Johnson
                    </p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                  <span className="text-green-600 text-sm font-medium">
                    $89.97
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm">
                      <strong>Order #ORD-7298</strong> shipped to Michael Chen
                    </p>
                    <p className="text-xs text-gray-500">15 minutes ago</p>
                  </div>
                  <span className="text-blue-600 text-sm font-medium">
                    $67.98
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm">
                      <strong>Order #ORD-7245</strong> is being processed
                    </p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                  <span className="text-yellow-600 text-sm font-medium">
                    $45.98
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm">
                      <strong>Order #ORD-7189</strong> was cancelled and
                      refunded
                    </p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                  <span className="text-red-600 text-sm font-medium">
                    -$29.98
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm">
                      <strong>Order #ORD-7156</strong> payment is pending
                    </p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                  <span className="text-purple-600 text-sm font-medium">
                    $18.99
                  </span>
                </div>
              </div>
            </div>
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-primary text-white p-4 rounded-lg hover:bg-opacity-90 transition flex items-center gap-3">
                  <i className="fas fa-plus text-xl" />
                  <div className="text-left">
                    <div className="font-medium">Create Manual Order</div>
                    <div className="text-sm opacity-90">
                      Add order for walk-in customers
                    </div>
                  </div>
                </button>
                <button className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-opacity-90 transition flex items-center gap-3">
                  <i className="fas fa-shipping-fast text-xl" />
                  <div className="text-left">
                    <div className="font-medium">Bulk Ship Orders</div>
                    <div className="text-sm opacity-90">
                      Process multiple shipments
                    </div>
                  </div>
                </button>
                <button className="w-full bg-green-500 text-white p-4 rounded-lg hover:bg-opacity-90 transition flex items-center gap-3">
                  <i className="fas fa-download text-xl" />
                  <div className="text-left">
                    <div className="font-medium">Export Reports</div>
                    <div className="text-sm opacity-90">
                      Download transaction data
                    </div>
                  </div>
                </button>
                <button className="w-full bg-yellow-500 text-white p-4 rounded-lg hover:bg-opacity-90 transition flex items-center gap-3">
                  <i className="fas fa-envelope text-xl" />
                  <div className="text-left">
                    <div className="font-medium">Send Notifications</div>
                    <div className="text-sm opacity-90">
                      Bulk email to customers
                    </div>
                  </div>
                </button>
                <button className="w-full bg-purple-500 text-white p-4 rounded-lg hover:bg-opacity-90 transition flex items-center gap-3">
                  <i className="fas fa-chart-bar text-xl" />
                  <div className="text-left">
                    <div className="font-medium">View Analytics</div>
                    <div className="text-sm opacity-90">
                      Detailed sales reports
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutAdmin>
  );
};
export default Transactions;
