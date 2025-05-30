import React from "react";

const Login = () => {
  return (
    <div>
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <i className="fas fa-book-open text-primary text-2xl" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-2">
                Welcome Back!
              </h1>
              <p className="text-light">Sign in to your Booku account</p>
            </div>
            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <i className="fab fa-google text-red-500" />
                <span className="font-medium text-gray-700">
                  Continue with Google
                </span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <i className="fab fa-facebook text-blue-600" />
                <span className="font-medium text-gray-700">
                  Continue with Facebook
                </span>
              </button>
            </div>
            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with email
                </span>
              </div>
            </div>
            {/* Login Form */}
            <form id="loginForm" className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                  <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <p className="text-red-500 text-sm mt-1 hidden" id="emailError">
                  Please enter a valid email address
                </p>
              </div>
              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full py-3 pl-12 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your password"
                  />
                  <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <button
                    type="button"
                    id="togglePassword"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <i className="fas fa-eye" id="eyeIcon" />
                  </button>
                </div>
                <p
                  className="text-red-500 text-sm mt-1 hidden"
                  id="passwordError"
                >
                  Password must be at least 6 characters
                </p>
              </div>
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                  id="forgotPasswordLink"
                >
                  Forgot password?
                </a>
              </div>
              {/* Submit Button */}
              <div className="w-full">
                <a
                  href="/admin/dashboard"
                  className="block w-full bg-primary text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Sign In</span>
                </a>
              </div>
            </form>
            {/* Sign Up Link */}
            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Don't have an account?
                <a
                  href="/register"
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Create account
                </a>
              </p>
            </div>
          </div>
          {/* Additional Links */}
          <div className="text-center mt-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </main>
      {/* Forgot Password Modal */}
      <div
        id="forgotPasswordModal"
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 hidden z-50"
      >
        <div className="bg-white rounded-2xl p-6 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <i className="fas fa-key text-primary" />
            </div>
            <h2 className="text-xl font-bold text-dark mb-2">Reset Password</h2>
            <p className="text-gray-600 text-sm">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
          </div>
          <form id="forgotPasswordForm">
            <div className="mb-6">
              <label
                htmlFor="resetEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="resetEmail"
                  name="resetEmail"
                  required
                  className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                />
                <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                id="cancelReset"
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
