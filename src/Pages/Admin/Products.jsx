import React from "react";
import LayoutAdmin from "../../Components/LayoutAdmin";

const Products = () => {
  return (
    <LayoutAdmin>
      <main className="flex-1 md:ml-64 min-h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm py-4 px-6 hidden md:block">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-dark">Manage Products</h1>
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
        {/* Products Content */}
        <div className="p-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold md:hidden">Manage Products</h2>
              <p className="text-gray-500">
                Manage your book inventory, add new products, and update
                existing ones.
              </p>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2">
              <i className="fas fa-plus" />
              <span>Add New Product</span>
            </button>
          </div>
          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value>All Categories</option>
                  <option value="self-improvement">Self-Improvement</option>
                  <option value="fiction">Fiction</option>
                  <option value="business">Business</option>
                  <option value="science">Science</option>
                  <option value="biography">Biography</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value>All Status</option>
                  <option value="in-stock">In Stock</option>
                  <option value="low-stock">Low Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  <i className="fas fa-filter" />
                  <span className="ml-2">More Filters</span>
                </button>
              </div>
            </div>
          </div>
          {/* Products Table */}
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
                  <i className="fas fa-trash-alt" />
                  <span className="ml-1">Delete</span>
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
                    <th className="p-4 font-medium">Product</th>
                    <th className="p-4 font-medium">SKU</th>
                    <th className="p-4 font-medium">Category</th>
                    <th className="p-4 font-medium">Price</th>
                    <th className="p-4 font-medium">Stock</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Product 1 */}
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
                          src="https://i0.wp.com/freedom.to/blog/wp-content/uploads/2018/10/Atomic_Habits-2.png?fit=1024%2C1012&ssl=1"
                          alt="Book"
                          className="w-10 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">Atomic Habits</h4>
                          <p className="text-sm text-gray-500">James Clear</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">BK-001245</td>
                    <td className="p-4">Self-Improvement</td>
                    <td className="p-4">$18.99</td>
                    <td className="p-4">245</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        In Stock
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Product 2 */}
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
                          src="https://bookpadho.com/wp-content/uploads/2025/02/1740040199.png"
                          alt="Book"
                          className="w-10 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            The Psychology of Money
                          </h4>
                          <p className="text-sm text-gray-500">Morgan Housel</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">BK-001246</td>
                    <td className="p-4">Business</td>
                    <td className="p-4">$15.99</td>
                    <td className="p-4">198</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        In Stock
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Product 3 */}
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
                          src="https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png"
                          alt="Book"
                          className="w-10 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            Sapiens: A Brief History of Humankind
                          </h4>
                          <p className="text-sm text-gray-500">
                            Yuval Noah Harari
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">BK-001247</td>
                    <td className="p-4">Science</td>
                    <td className="p-4">$12.99</td>
                    <td className="p-4">187</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        In Stock
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Product 4 */}
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
                          src="/placeholder.svg?height=60&width=45"
                          alt="Book"
                          className="w-10 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">Deep Work</h4>
                          <p className="text-sm text-gray-500">Cal Newport</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">BK-001248</td>
                    <td className="p-4">Self-Improvement</td>
                    <td className="p-4">$14.99</td>
                    <td className="p-4">156</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        In Stock
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Product 5 */}
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
                          src="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                          alt="Book"
                          className="w-10 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">Rich Dad Poor Dad</h4>
                          <p className="text-sm text-gray-500">
                            Robert Kiyosaki
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">BK-001249</td>
                    <td className="p-4">Business</td>
                    <td className="p-4">$14.99</td>
                    <td className="p-4">0</td>
                    <td className="p-4">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                        Out of Stock
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Product 6 */}
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
                          src="/placeholder.svg?height=60&width=45"
                          alt="Book"
                          className="w-10 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            The Subtle Art of Not Giving a F*ck
                          </h4>
                          <p className="text-sm text-gray-500">Mark Manson</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">BK-001250</td>
                    <td className="p-4">Self-Improvement</td>
                    <td className="p-4">$13.99</td>
                    <td className="p-4">12</td>
                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                        Low Stock
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Product 7 */}
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
                          src="/placeholder.svg?height=60&width=45"
                          alt="Book"
                          className="w-10 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            Thinking, Fast and Slow
                          </h4>
                          <p className="text-sm text-gray-500">
                            Daniel Kahneman
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">BK-001251</td>
                    <td className="p-4">Psychology</td>
                    <td className="p-4">$16.99</td>
                    <td className="p-4">89</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        In Stock
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Product 8 */}
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
                          src="/placeholder.svg?height=60&width=45"
                          alt="Book"
                          className="w-10 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">Dune</h4>
                          <p className="text-sm text-gray-500">Frank Herbert</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">BK-001252</td>
                    <td className="p-4">Fiction</td>
                    <td className="p-4">$12.99</td>
                    <td className="p-4">67</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        In Stock
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                Showing 1 to 8 of 856 products
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
                  107
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
          {/* Product Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Products</p>
                  <h3 className="text-2xl font-bold">856</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>4.2% from last month</span>
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="fas fa-book text-purple-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Low Stock Items</p>
                  <h3 className="text-2xl font-bold">24</h3>
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>12.5% from last month</span>
                  </p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <i className="fas fa-exclamation-triangle text-yellow-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Out of Stock</p>
                  <h3 className="text-2xl font-bold">12</h3>
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>3.7% from last month</span>
                  </p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <i className="fas fa-times-circle text-red-500 text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutAdmin>
  );
};

export default Products;
