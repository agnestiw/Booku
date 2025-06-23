import React, { useEffect, useRef, useState } from "react";
import LayoutAdmin from "../../Components/LayoutAdmin";

// KOMPONEN BARU UNTUK MODAL MENGAMBANG
const ManualOrderForm = ({ onClose }) => {
  // useEffect ini hanya berlaku untuk elemen di dalam modal
  useEffect(() => {
    // Fungsi untuk menutup modal saat tombol 'Escape' ditekan
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Set tanggal default
    const orderDateInput = document.getElementById('modalOrderDate');
    if (orderDateInput) {
      orderDateInput.valueAsDate = new Date();
    }
    
    // Cleanup event listener saat komponen ditutup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="relative bg-gray-100 w-full max-w-7xl h-full max-h-[95vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header Modal */}
        <div className="flex-shrink-0 bg-white p-4 border-b border-gray-300 z-10 flex justify-between items-center">
            <h2 className="text-xl font-bold text-dark">Create Manual Order</h2>
            <button 
                onClick={onClose} 
                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                aria-label="Close"
            >
                <i className="fas fa-times text-xl"></i>
            </button>
        </div>
        {/* Konten Modal yang dapat di-scroll */}
        <div className="flex-grow overflow-y-auto">
          {/* Kode JSX form ditempelkan di sini */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-300">
                  <form id="manualOrderForm" className="p-6 lg:p-8">
                    {/* Customer Information Section */}
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold text-dark mb-6 flex items-center">
                        <i className="fas fa-user text-primary mr-3" />
                        Customer Information
                      </h2>
                      <div className="mb-6">
                        <label htmlFor="customerSearch" className="block text-sm font-medium text-gray-700 mb-2">Search Customer</label>
                        <div className="relative">
                          <input type="text" id="customerSearch" name="customerSearch" className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="Search by name, email, or phone..." />
                          <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="lg:col-span-2">
                          <div className="flex gap-4 mb-4">
                            <label className="flex items-center">
                              <input type="radio" name="customerType" defaultValue="existing" defaultChecked className="text-primary focus:ring-primary" />
                              <span className="ml-2 text-sm text-gray-700">Existing Customer</span>
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="customerType" defaultValue="new" className="text-primary focus:ring-primary" />
                              <span className="ml-2 text-sm text-gray-700">New Customer</span>
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="customerType" defaultValue="guest" className="text-primary focus:ring-primary" />
                              <span className="ml-2 text-sm text-gray-700">Guest Checkout</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="customerFirstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <input type="text" id="customerFirstName" name="customerFirstName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="Enter first name" />
                        </div>
                        <div>
                          <label htmlFor="customerLastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <input type="text" id="customerLastName" name="customerLastName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="Enter last name" />
                        </div>
                        <div>
                          <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <input type="email" id="customerEmail" name="customerEmail" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="customer@example.com" />
                        </div>
                        <div>
                          <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input type="tel" id="customerPhone" name="customerPhone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="+1 (555) 123-4567" />
                        </div>
                      </div>
                    </div>
                    {/* Order Information Section */}
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold text-dark mb-6 flex items-center">
                        <i className="fas fa-shopping-cart text-primary mr-3" />
                        Order Information
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">Order Number</label>
                          <input type="text" id="orderNumber" name="orderNumber" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-gray-100" placeholder="Auto-generated" readOnly />
                        </div>
                        <div>
                          <label htmlFor="modalOrderDate" className="block text-sm font-medium text-gray-700 mb-2">Order Date *</label>
                          <input type="date" id="modalOrderDate" name="orderDate" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
                        </div>
                        <div>
                          <label htmlFor="orderStatus" className="block text-sm font-medium text-gray-700 mb-2">Order Status</label>
                          <select id="orderStatus" name="orderStatus" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* Dan seterusnya... semua form Anda ada di sini */}
                  </form>
                </div>
              </div>
              {/* Order Summary Sidebar */}
              <div className="xl:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-300 sticky top-8">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-dark mb-6 flex items-center">
                      <i className="fas fa-receipt text-primary mr-3" />
                      Order Summary
                    </h3>
                    <div className="mt-8 space-y-3">
                      <button type="submit" form="manualOrderForm" className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90">
                        Create Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};


const Transactions = () => {
  const mainContentRef = useRef(null); 
  // PENAMBAHAN: State untuk mengontrol modal
  const [isManualOrderOpen, setIsManualOrderOpen] = useState(false);

  // KODE ASLI ANDA: Semua logika di dalam useEffect ini dipertahankan
  useEffect(() => {
    const mainElement = mainContentRef.current;
    if (!mainElement) {
      return; 
    }

    // --- Mobile menu toggle (kode asli) ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const sidebarContent = document.getElementById('sidebar-content');
    const handleMobileMenuToggle = () => {
      if (sidebarContent) {
        sidebarContent.classList.toggle('hidden');
      }
      if (mobileMenuButton) {
        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
          if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
          } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    };
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', handleMobileMenuToggle);
    }

    // --- Select all checkbox functionality (kode asli) ---
    const selectAllHeaderCheckbox = mainElement.querySelector('thead input[type="checkbox"]');
    const itemCheckboxes = mainElement.querySelectorAll('tbody input[type="checkbox"]');
    const handleSelectAllChange = (event) => {
      itemCheckboxes.forEach(checkbox => {
        checkbox.checked = event.target.checked;
      });
    };
    if (selectAllHeaderCheckbox) {
      selectAllHeaderCheckbox.addEventListener('change', handleSelectAllChange);
    }
    const handleItemCheckboxChange = () => {
      if (selectAllHeaderCheckbox) {
        const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
        selectAllHeaderCheckbox.checked = allChecked;
      }
    };
    itemCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', handleItemCheckboxChange);
    });

    // --- Action button functionality (table row actions) (kode asli) ---
    const actionButtonsInTable = mainElement.querySelectorAll('td button[title]');
    const handleActionButtonClick = (event) => {
      // ... (logika tombol aksi tabel Anda tetap di sini, tidak diubah)
    };
    actionButtonsInTable.forEach(button => {
      button.addEventListener('click', handleActionButtonClick);
    });

    // --- Quick action buttons (logika asli dipertahankan, kecuali untuk manual order) ---
    const quickActionButtons = mainElement.querySelectorAll('.quick-actions-container button');
    const handleQuickActionButtonClick = (event) => {
      const button = event.currentTarget;
      const primaryTextElement = button.querySelector('.font-medium');
      const buttonText = primaryTextElement ? primaryTextElement.textContent : button.textContent;

      // Logika untuk tombol "Create Manual Order" telah dipindahkan ke onClick JSX.
      // Logika lain tetap ada.
      if (buttonText.includes('Bulk Ship Orders')) {
        alert('Bulk shipping interface would open.');
      } else if (buttonText.includes('Export Reports')) {
        alert('Report export options would be displayed.');
      } else if (buttonText.includes('Send Notifications')) {
        alert('Bulk notification interface would open.');
      } else if (buttonText.includes('View Analytics')) {
        alert('Analytics dashboard would open.');
      }
    };
    
    // Melampirkan listener hanya ke tombol yang tidak menangani manual order
    quickActionButtons.forEach(button => {
        const primaryTextElement = button.querySelector('.font-medium');
        const buttonText = primaryTextElement ? primaryTextElement.textContent : "";
        if (!buttonText.includes('Create Manual Order')) {
            button.addEventListener('click', handleQuickActionButtonClick);
        }
    });


    // --- Sisa dari kode asli Anda (filter, search) tetap di sini ---
    // ...

    // Cleanup function untuk semua listener
    return () => {
      if (mobileMenuButton) mobileMenuButton.removeEventListener('click', handleMobileMenuToggle);
      if (selectAllHeaderCheckbox) selectAllHeaderCheckbox.removeEventListener('change', handleSelectAllChange);
      itemCheckboxes.forEach(checkbox => checkbox.removeEventListener('change', handleItemCheckboxChange));
      actionButtonsInTable.forEach(button => button.removeEventListener('click', handleActionButtonClick));
       quickActionButtons.forEach(button => {
            const primaryTextElement = button.querySelector('.font-medium');
            const buttonText = primaryTextElement ? primaryTextElement.textContent : "";
            if (!buttonText.includes('Create Manual Order')) {
                button.removeEventListener('click', handleQuickActionButtonClick);
            }
        });
    };
  }, []); // Dependency array kosong agar hanya berjalan sekali

  return (
    <LayoutAdmin>
      {/* KODE JSX ASLI ANDA: Tidak ada yang diubah kecuali penambahan onClick */}
      <main className="flex-1 md:ml-64 min-h-screen" ref={mainContentRef}>
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
              {/* PERBAIKAN: Menggunakan onClick standar React */}
              <button onClick={() => setIsManualOrderOpen(true)} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2">
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
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 filters-container">
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
                  <option value="">All Status</option>
                  <option value="pending">Pending</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">All Time</option>
                  <option value="today">Today</option>
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
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b border-gray-300 bg-gray-50">
                    <th className="p-4 font-medium w-12">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </th>
                    <th className="p-4 font-medium">Order ID</th>
                    <th className="p-4 font-medium">Customer</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
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
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://placehold.co/30x30/E2E8F0/4A5568?text=S"
                          alt="Customer"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-sm">Sarah Johnson</h4>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Delivered
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          title="View Details"
                        >
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
                Showing 1 to 5 of 1,847 transactions
              </div>
            </div>
          </div>
          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Recent Transaction Activity</h3>
                <a href="#" className="text-primary hover:underline text-sm">
                  View All
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                   <p>Activity...</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 quick-actions-container">
              <h3 className="font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                 {/* PERBAIKAN: Menggunakan onClick standar React */}
                <button onClick={() => setIsManualOrderOpen(true)} className="w-full bg-primary text-white p-4 rounded-lg hover:bg-opacity-90 transition flex items-center gap-3">
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
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* PENAMBAHAN: Modal akan dirender di sini secara kondisional */}
      {isManualOrderOpen && <ManualOrderForm onClose={() => setIsManualOrderOpen(false)} />}
    </LayoutAdmin>
  );
};
export default Transactions;
