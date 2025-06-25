import React, { useEffect, useRef } from "react";
import LayoutAdmin from "../../Components/LayoutAdmin";
import Chart from 'chart.js/auto'; // Import Chart.js

const Dashboard = () => {
  // Refs for chart canvases
  const salesChartRef = useRef(null);
  const categoriesChartRef = useRef(null);

  // Refs for chart instances to destroy them on component unmount
  const salesChartInstance = useRef(null);
  const categoriesChartInstance = useRef(null);

  // Effect for Sales Chart
  useEffect(() => {
    if (salesChartRef.current) {
      // Destroy previous chart instance if it exists
      if (salesChartInstance.current) {
        salesChartInstance.current.destroy();
      }

      const salesCtx = salesChartRef.current.getContext('2d');
      salesChartInstance.current = new Chart(salesCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Sample Data
          datasets: [{
            label: 'Sales',
            data: [1200, 1900, 1500, 2500, 2200, 3000, 2800], // Sample Data
            backgroundColor: 'rgba(176, 125, 72, 0.1)',
            borderColor: '#B07D48', // A brown color, you can change primary
            borderWidth: 2,
            tension: 0.4,
            fill: true,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Important for canvas with fixed height
          plugins: {
            legend: {
              display: false, // Hides the legend (label: 'Sales')
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                borderDash: [2, 4], // Dashed grid lines for Y-axis
                drawBorder: false,
              },
            },
            x: {
              grid: {
                display: false, // No grid lines for X-axis
              },
            },
          },
        },
      });
    }

    // Cleanup function to destroy chart on component unmount
    return () => {
      if (salesChartInstance.current) {
        salesChartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Effect for Categories Chart
  useEffect(() => {
    if (categoriesChartRef.current) {
      // Destroy previous chart instance if it exists
      if (categoriesChartInstance.current) {
        categoriesChartInstance.current.destroy();
      }

      const categoriesCtx = categoriesChartRef.current.getContext('2d');
      categoriesChartInstance.current = new Chart(categoriesCtx, {
        type: 'doughnut',
        data: {
          labels: ['Self-Improvement', 'Fiction', 'Business', 'Science', 'Biography'], // Sample Data
          datasets: [{
            data: [35, 25, 20, 10, 10], // Sample Data
            backgroundColor: [
              '#B07D48', // Brown
              '#4C6EF5', // Blue
              '#38B2AC', // Teal
              '#ED8936', // Orange
              '#9F7AEA', // Purple
            ],
            borderWidth: 0, // No border for doughnut segments
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Important for canvas with fixed height
          plugins: {
            legend: {
              position: 'right', // Legend on the right side
            },
          },
          cutout: '70%', // Makes it a doughnut chart
        },
      });
    }

    // Cleanup function to destroy chart on component unmount
    return () => {
      if (categoriesChartInstance.current) {
        categoriesChartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array

  return (
    <LayoutAdmin>
      <main className="flex-1 md:ml-64 min-h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm py-4 px-6 hidden md:block">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-dark">Dashboard</h1>
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
        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Sales */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Sales</p>
                  <h3 className="text-2xl font-bold">$24,589</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>12.5% from last month</span>
                  </p>
                </div>
                <div className="border-orange-400 bg-opacity-10 p-3 rounded-lg">
                  <i className="fas fa-dollar-sign text-primary text-xl" />
                </div>
              </div>
            </div>
            {/* Total Orders */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Orders</p>
                  <h3 className="text-2xl font-bold">1,243</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>8.3% from last month</span>
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="fas fa-shopping-bag text-blue-500 text-xl" />
                </div>
              </div>
            </div>
            {/* Total Products */}
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
            {/* Total Customers */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Customers</p>
                  <h3 className="text-2xl font-bold">3,652</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>9.1% from last month</span>
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <i className="fas fa-users text-green-500 text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Sales Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Sales Overview</h3>
                <select className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
              {/* Canvas for Sales Chart */}
              <div style={{ height: '300px' }}> {/* Added wrapper for sizing */}
                <canvas id="salesChart" ref={salesChartRef} />
              </div>
            </div>
            {/* Top Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Top Categories</h3>
                <select className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
              {/* Canvas for Categories Chart */}
              <div style={{ height: '300px' }}> {/* Added wrapper for sizing */}
                <canvas id="categoriesChart" ref={categoriesChartRef} />
              </div>
            </div>
          </div>
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold">Recent Orders</h3>
              <a href="#" className="text-primary hover:underline text-sm">
                View All
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
                    <th className="pb-3 font-medium">Order ID</th>
                    <th className="pb-3 font-medium">Customer</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">#ORD-7352</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span>Sarah Johnson</span>
                      </div>
                    </td>
                    <td className="py-3">May 20, 2025</td>
                    <td className="py-3">$125.99</td>
                    <td className="py-3">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Completed
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-primary hover:text-primary-dark">
                        <i className="fas fa-eye" />
                      </button>
                    </td>
                  </tr>
                  {/* ... other table rows ... */}
                  <tr className="border-b border-gray-100">
                    <td className="py-3">#ORD-7351</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span>Michael Brown</span>
                      </div>
                    </td>
                    <td className="py-3">May 20, 2025</td>
                    <td className="py-3">$89.99</td>
                    <td className="py-3">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        Processing
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-primary hover:text-primary-dark">
                        <i className="fas fa-eye" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">#ORD-7350</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span>Emily Rodriguez</span>
                      </div>
                    </td>
                    <td className="py-3">May 19, 2025</td>
                    <td className="py-3">$212.50</td>
                    <td className="py-3">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Completed
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-primary hover:text-primary-dark">
                        <i className="fas fa-eye" />
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">#ORD-7349</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span>David Thompson</span>
                      </div>
                    </td>
                    <td className="py-3">May 19, 2025</td>
                    <td className="py-3">$45.99</td>
                    <td className="py-3">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                        Pending
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-primary hover:text-primary-dark">
                        <i className="fas fa-eye" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">#ORD-7348</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Customer"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span>Jennifer Lee</span>
                      </div>
                    </td>
                    <td className="py-3">May 18, 2025</td>
                    <td className="py-3">$78.50</td>
                    <td className="py-3">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                        Cancelled
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-primary hover:text-primary-dark">
                        <i className="fas fa-eye" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Quick Stats */}
          {/* ... rest of your component ... */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Top Selling Books */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Top Selling Books</h3>
                <a href="#" className="text-primary hover:underline text-sm">
                  View All
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=60&width=45"
                    alt="Book"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Atomic Habits</h4>
                    <p className="text-sm text-gray-500">James Clear</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">245</p>
                    <p className="text-sm text-gray-500">Sold</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=60&width=45"
                    alt="Book"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">The Psychology of Money</h4>
                    <p className="text-sm text-gray-500">Morgan Housel</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">198</p>
                    <p className="text-sm text-gray-500">Sold</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=60&width=45"
                    alt="Book"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Sapiens</h4>
                    <p className="text-sm text-gray-500">Yuval Noah Harari</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">187</p>
                    <p className="text-sm text-gray-500">Sold</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=60&width=45"
                    alt="Book"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Deep Work</h4>
                    <p className="text-sm text-gray-500">Cal Newport</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">156</p>
                    <p className="text-sm text-gray-500">Sold</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Recent Reviews</h3>
                <a href="#" className="text-primary hover:underline text-sm">
                  View All
                </a>
              </div>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Customer"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="font-medium">Michael Johnson</span>
                    </div>
                    <div className="text-yellow-400 flex">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    This book has completely changed how I approach habit
                    formation. Highly recommended!
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    For: Atomic Habits
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Customer"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="font-medium">Sarah Williams</span>
                    </div>
                    <div className="text-yellow-400 flex">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Great insights about money and psychology. Very practical
                    advice that anyone can apply.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    For: The Psychology of Money
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg?height=30&width=30"
                        alt="Customer"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="font-medium">David Chen</span>
                    </div>
                    <div className="text-yellow-400 flex">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    A fascinating journey through human history. Well-researched
                    and thought-provoking.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">For: Sapiens</p>
                </div>
              </div>
            </div>
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Recent Activity</h3>
                <a href="#" className="text-primary hover:underline text-sm">
                  View All
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-blue-100 text-blue-500 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-shopping-cart" />
                  </div>
                  <div>
                    <p className="text-sm">
                      New order <span className="font-medium">#ORD-7352</span>{" "}
                      from <span className="font-medium">Sarah Johnson</span>
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-green-100 text-green-500 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user-plus" />
                  </div>
                  <div>
                    <p className="text-sm">
                      New customer{" "}
                      <span className="font-medium">Robert Wilson</span>{" "}
                      registered
                    </p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-yellow-100 text-yellow-500 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-star" />
                  </div>
                  <div>
                    <p className="text-sm">
                      New review for{" "}
                      <span className="font-medium">Atomic Habits</span>
                    </p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-purple-100 text-purple-500 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-box" />
                  </div>
                  <div>
                    <p className="text-sm">
                      Product <span className="font-medium">Deep Work</span> is
                      now back in stock
                    </p>
                    <p className="text-xs text-gray-500">8 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-red-100 text-red-500 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-times" />
                  </div>
                  <div>
                    <p className="text-sm">
                      Order <span className="font-medium">#ORD-7348</span> has
                      been cancelled
                    </p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutAdmin>
  );
};

export default Dashboard;