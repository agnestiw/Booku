import React from "react";
import Layout from "../Components/Layout";

const Transaction = () => {
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
              <a href="cart.html" className="text-gray-500 hover:text-primary">
                Cart
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-primary">Checkout</span>
            </div>
          </div>
        </div> */}
        {/* Checkout Header */}
        <section className="py-8 md:py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Checkout</h1>
              <p className="text-gray-600">
                Complete your order and get your books delivered to your
                doorstep.
              </p>
            </div>
          </div>
        </section>
        {/* Checkout Steps */}
        <section className="py-6 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  {/* Step 1 */}
                  <div className="flex items-center">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <span className="ml-2 text-primary font-medium hidden sm:inline">
                      Shipping
                    </span>
                  </div>
                  {/* Connector */}
                  <div className="w-8 md:w-16 h-0.5 bg-primary mx-2 md:mx-4" />
                  {/* Step 2 */}
                  <div className="flex items-center">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <span className="ml-2 text-primary font-medium hidden sm:inline">
                      Payment
                    </span>
                  </div>
                  {/* Connector */}
                  <div className="w-8 md:w-16 h-0.5 bg-gray-300 mx-2 md:mx-4" />
                  {/* Step 3 */}
                  <div className="flex items-center">
                    <div className="bg-gray-300 text-gray-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <span className="ml-2 text-gray-500 hidden sm:inline">
                      Confirmation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Checkout Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Checkout Form */}
                <div className="lg:w-2/3">
                  {/* Shipping Information */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-bold mb-6">
                      Shipping Information
                    </h2>
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="123 Main Street"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="New York"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            State *
                          </label>
                          <select
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          >
                            <option value>Select State</option>
                            <option value="NY">New York</option>
                            <option value="CA">California</option>
                            <option value="TX">Texas</option>
                            <option value="FL">Florida</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder={10001}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Country *
                        </label>
                        <select
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        >
                          <option value>Select Country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded text-primary focus:ring-primary mr-2"
                          />
                          <span className="text-gray-700 text-sm">
                            Save this address for future orders
                          </span>
                        </label>
                      </div>
                    </form>
                  </div>
                  {/* Shipping Method */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-bold mb-6">Shipping Method</h2>
                    <div className="space-y-4">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="shipping"
                          defaultValue="standard"
                          className="text-primary focus:ring-primary mr-4"
                          defaultChecked
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">Standard Shipping</h3>
                              <p className="text-gray-500 text-sm">
                                5-7 business days
                              </p>
                            </div>
                            <span className="font-medium">$4.99</span>
                          </div>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="shipping"
                          defaultValue="express"
                          className="text-primary focus:ring-primary mr-4"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">Express Shipping</h3>
                              <p className="text-gray-500 text-sm">
                                2-3 business days
                              </p>
                            </div>
                            <span className="font-medium">$9.99</span>
                          </div>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="shipping"
                          defaultValue="overnight"
                          className="text-primary focus:ring-primary mr-4"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">
                                Overnight Shipping
                              </h3>
                              <p className="text-gray-500 text-sm">
                                Next business day
                              </p>
                            </div>
                            <span className="font-medium">$19.99</span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  {/* Payment Method */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-bold mb-6">Payment Method</h2>
                    <div className="space-y-4 mb-6">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          defaultValue="card"
                          className="text-primary focus:ring-primary mr-4"
                          defaultChecked
                        />
                        <div className="flex items-center">
                          <i className="fas fa-credit-card text-gray-500 mr-3" />
                          <span>Credit/Debit Card</span>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          defaultValue="paypal"
                          className="text-primary focus:ring-primary mr-4"
                        />
                        <div className="flex items-center">
                          <i className="fab fa-paypal text-blue-500 mr-3" />
                          <span>PayPal</span>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          defaultValue="apple"
                          className="text-primary focus:ring-primary mr-4"
                        />
                        <div className="flex items-center">
                          <i className="fab fa-apple text-gray-700 mr-3" />
                          <span>Apple Pay</span>
                        </div>
                      </label>
                    </div>
                    {/* Credit Card Form */}
                    <div id="card-form" className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder={123}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* Special Instructions */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-bold mb-6">
                      Special Instructions
                    </h2>
                    <textarea
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      rows={4}
                      placeholder="Any special delivery instructions or notes..."
                      defaultValue={""}
                    />
                  </div>
                </div>
                {/* Order Summary */}
                <div className="lg:w-1/3">
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    {/* Order Items */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://i0.wp.com/freedom.to/blog/wp-content/uploads/2018/10/Atomic_Habits-2.png?fit=1024%2C1012&ssl=1"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">Atomic Habits</h3>
                          <p className="text-gray-500 text-xs">James Clear</p>
                          <p className="text-gray-500 text-xs">Qty: 1</p>
                        </div>
                        <span className="font-medium">$18.99</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://bookpadho.com/wp-content/uploads/2025/02/1740040199.png"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">
                            The Psychology of Money
                          </h3>
                          <p className="text-gray-500 text-xs">Morgan Housel</p>
                          <p className="text-gray-500 text-xs">Qty: 2</p>
                        </div>
                        <span className="font-medium">$31.98</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png"
                          alt="Book"
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">Sapiens</h3>
                          <p className="text-gray-500 text-xs">
                            Yuval Noah Harari
                          </p>
                          <p className="text-gray-500 text-xs">Qty: 1</p>
                        </div>
                        <span className="font-medium">$12.99</span>
                      </div>
                    </div>
                    {/* Promo Code */}
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
                    {/* Order Totals */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>$63.96</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>$4.99</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        <span>$5.52</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Discount</span>
                        <span className="text-green-600">-$5.00</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>$69.47</span>
                      </div>
                    </div>
                    {/* Place Order Button */}
                    <button className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition mb-4 font-medium">
                      Place Order
                    </button>
                    {/* Security Info */}
                    <div className="text-center text-sm text-gray-500">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <i className="fas fa-lock" />
                        <span>Secure 256-bit SSL encryption</span>
                      </div>
                      <p>Your payment information is safe and secure</p>
                    </div>
                    {/* Payment Methods */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
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
        </section>
      </div>
    </Layout>
  );
};

export default Transaction;
