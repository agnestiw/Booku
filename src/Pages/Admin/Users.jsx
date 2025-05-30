import React from "react";
import LayoutAdmin from "../../Components/LayoutAdmin";

const Users = () => {
  return (
    <LayoutAdmin>
      <main className="flex-1 md:ml-64 min-h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm py-4 px-6 hidden md:block">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-dark">Manage Users</h1>
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
        {/* Users Content */}
        <div className="p-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold md:hidden">Manage Users</h2>
              <p className="text-gray-500">
                Manage customer accounts, permissions, and user activities.
              </p>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2">
              <i className="fas fa-plus" />
              <span>Add New User</span>
            </button>
          </div>
          {/* User Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Users</p>
                  <h3 className="text-2xl font-bold">2,847</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>12.5% from last month</span>
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="fas fa-users text-blue-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Active Users</p>
                  <h3 className="text-2xl font-bold">2,156</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>8.3% from last month</span>
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <i className="fas fa-user-check text-green-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">New This Month</p>
                  <h3 className="text-2xl font-bold">324</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>15.2% from last month</span>
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="fas fa-user-plus text-purple-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Suspended</p>
                  <h3 className="text-2xl font-bold">23</h3>
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-down mr-1" />
                    <span>2.1% from last month</span>
                  </p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <i className="fas fa-user-slash text-red-500 text-xl" />
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
                    placeholder="Search users by name, email, or ID..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value>All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                  <option value="pending">Pending Verification</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value>All Roles</option>
                  <option value="customer">Customer</option>
                  <option value="premium">Premium Customer</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  <i className="fas fa-filter" />
                  <span className="ml-2">More Filters</span>
                </button>
              </div>
            </div>
          </div>
          {/* Users Table */}
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
                  <i className="fas fa-ban" />
                  <span className="ml-1">Suspend</span>
                </button>
                <button className="text-gray-500 hover:text-primary px-2 py-1 rounded hover:bg-gray-100">
                  <i className="fas fa-envelope" />
                  <span className="ml-1">Send Email</span>
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
                    <th className="p-4 font-medium">User</th>
                    <th className="p-4 font-medium">Email</th>
                    <th className="p-4 font-medium">Role</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Orders</th>
                    <th className="p-4 font-medium">Total Spent</th>
                    <th className="p-4 font-medium">Join Date</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* User 1 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium">Sarah Johnson</h4>
                          <p className="text-sm text-gray-500">ID: #USR-001</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">sarah.johnson@email.com</td>
                    <td className="p-4">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                        Premium Customer
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Active
                      </span>
                    </td>
                    <td className="p-4">24</td>
                    <td className="p-4">$567.89</td>
                    <td className="p-4">Jan 15, 2023</td>
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
                          title="Edit User"
                        >
                          <i className="fas fa-edit" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Message"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          title="Suspend User"
                        >
                          <i className="fas fa-ban" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* User 2 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium">Michael Chen</h4>
                          <p className="text-sm text-gray-500">ID: #USR-002</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">michael.chen@email.com</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        Customer
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Active
                      </span>
                    </td>
                    <td className="p-4">12</td>
                    <td className="p-4">$234.56</td>
                    <td className="p-4">Feb 20, 2023</td>
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
                          title="Edit User"
                        >
                          <i className="fas fa-edit" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Message"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          title="Suspend User"
                        >
                          <i className="fas fa-ban" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* User 3 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium">Emily Rodriguez</h4>
                          <p className="text-sm text-gray-500">ID: #USR-003</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">emily.rodriguez@email.com</td>
                    <td className="p-4">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                        Admin
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Active
                      </span>
                    </td>
                    <td className="p-4">8</td>
                    <td className="p-4">$156.78</td>
                    <td className="p-4">Mar 10, 2023</td>
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
                          title="Edit User"
                        >
                          <i className="fas fa-edit" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Message"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-gray-400"
                          title="Cannot suspend admin"
                          disabled
                        >
                          <i className="fas fa-ban" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* User 4 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium">David Thompson</h4>
                          <p className="text-sm text-gray-500">ID: #USR-004</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">david.thompson@email.com</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        Customer
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                        Pending
                      </span>
                    </td>
                    <td className="p-4">0</td>
                    <td className="p-4">$0.00</td>
                    <td className="p-4">May 22, 2025</td>
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
                          title="Approve User"
                        >
                          <i className="fas fa-check" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Message"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          title="Reject User"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* User 5 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium">Lisa Park</h4>
                          <p className="text-sm text-gray-500">ID: #USR-005</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">lisa.park@email.com</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        Customer
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                        Suspended
                      </span>
                    </td>
                    <td className="p-4">3</td>
                    <td className="p-4">$89.45</td>
                    <td className="p-4">Apr 5, 2025</td>
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
                          title="Reactivate User"
                        >
                          <i className="fas fa-user-check" />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Send Message"
                        >
                          <i className="fas fa-envelope" />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          title="Delete User"
                        >
                          <i className="fas fa-trash-alt" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                Showing 1 to 5 of 2,847 users
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
                  285
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold">Recent User Activity</h3>
              <a href="#" className="text-primary hover:underline text-sm">
                View All
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <img
                  src="/placeholder.svg?height=30&width=30"
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm">
                    <strong>Sarah Johnson</strong> made a purchase of $45.99
                  </p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <img
                  src="/placeholder.svg?height=30&width=30"
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm">
                    <strong>Michael Chen</strong> updated profile information
                  </p>
                  <p className="text-xs text-gray-500">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <img
                  src="/placeholder.svg?height=30&width=30"
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm">
                    <strong>David Thompson</strong> registered a new account
                  </p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <img
                  src="/placeholder.svg?height=30&width=30"
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm">
                    <strong>Lisa Park</strong> account was suspended
                  </p>
                  <p className="text-xs text-gray-500">3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutAdmin>
  );
};

export default Users;
