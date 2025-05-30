import React from "react";
// Import Link jika Anda menggunakan React Router untuk navigasi
// import { Link } from 'react-router-dom';

const Register = () => {
  // Fungsi placeholder untuk menangani klik tombol kembali
  // Dalam aplikasi nyata, ini akan menangani navigasi, misalnya:
  // import { useHistory } from 'react-router-dom';
  // const history = useHistory();
  // const handleBack = () => history.goBack();
  const handleBack = () => {
    console.log("Back button clicked");
    // Implementasikan logika navigasi Anda di sini
    // Contoh: window.history.back();
    // Atau jika menggunakan React Router: history.push('/previous-page');
  };

  return (
    <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="w-full max-w-md">
        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 relative">
          {" "}
          {/* Ditambahkan relative untuk positioning ikon kembali */}
          {/* Tombol Kembali */}
          <a href="/"
            onClick={handleBack}
            className="absolute top-6 left-6 sm:top-8 sm:left-8 text-gray-500 hover:text-primary transition-colors focus:outline-none"
            aria-label="Go back"
          >
            <i className="fas fa-arrow-left text-xl" />
          </a>
          {/* Header */}
          <div className="text-center mb-8 pt-8 sm:pt-0">
            {" "}
            {/* Ditambahkan padding top untuk memberi ruang pada ikon kembali di mobile */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <i className="fas fa-user-plus text-primary text-2xl" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-2">
              Join Booku!
            </h1>
            <p className="text-light">
              Create your account and start your reading journey
            </p>
          </div>
          {/* Social Registration */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="fab fa-google text-red-500" />
              <span className="font-medium text-gray-700">
                Sign up with Google
              </span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="fab fa-facebook text-blue-600" />
              <span className="font-medium text-gray-700">
                Sign up with Facebook
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
                Or create account with email
              </span>
            </div>
          </div>
          {/* Registration Form */}
          <form id="registerForm" className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                  <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <p
                  className="text-red-500 text-sm mt-1 hidden"
                  id="firstNameError"
                >
                  First name is required
                </p>
              </div>
              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                  <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <p
                  className="text-red-500 text-sm mt-1 hidden"
                  id="lastNameError"
                >
                  Last name is required
                </p>
              </div>
            </div>
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
                  placeholder="john.doe@example.com"
                />
                <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <p className="text-red-500 text-sm mt-1 hidden" id="emailError">
                Please enter a valid email address
              </p>
            </div>
            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
                <i className="fas fa-phone absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <p className="text-red-500 text-sm mt-1 hidden" id="phoneError">
                Please enter a valid phone number
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
                  placeholder="Create a strong password"
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
              {/* Password Strength Indicator */}
              <div className="mt-2">
                <div className="flex gap-1 mb-2">
                  <div
                    className="h-1 flex-1 bg-gray-200 rounded"
                    id="strength1"
                  />
                  <div
                    className="h-1 flex-1 bg-gray-200 rounded"
                    id="strength2"
                  />
                  <div
                    className="h-1 flex-1 bg-gray-200 rounded"
                    id="strength3"
                  />
                  <div
                    className="h-1 flex-1 bg-gray-200 rounded"
                    id="strength4"
                  />
                </div>
                <p className="text-xs text-gray-500" id="passwordStrength">
                  Password strength: Weak
                </p>
              </div>
              <p
                className="text-red-500 text-sm mt-1 hidden"
                id="passwordError"
              >
                Password must be at least 8 characters
              </p>
            </div>
            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Confirm your password"
                />
                <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <p
                className="text-red-500 text-sm mt-1 hidden"
                id="confirmPasswordError"
              >
                Passwords do not match
              </p>
            </div>
            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Date of Birth
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                  className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
                <i className="fas fa-calendar absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <p className="text-red-500 text-sm mt-1 hidden" id="dobError">
                You must be at least 13 years old
              </p>
            </div>
            {/* Terms and Conditions */}
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  required
                  className="mt-1 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
                />
                <span className="text-sm text-gray-600">
                  I agree to the
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeMarketing"
                  className="mt-1 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
                />
                <span className="text-sm text-gray-600">
                  I would like to receive marketing emails about new books,
                  offers, and updates
                </span>
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              id="registerButton"
            >
              <span id="registerButtonText">Create Account</span>
            </button>
          </form>
          {/* Sign In Link */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Already have an account?
              <a
                href="/login" // Pertimbangkan menggunakan <Link to="/login"> jika menggunakan React Router
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Sign in here
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
  );
};

export default Register;
