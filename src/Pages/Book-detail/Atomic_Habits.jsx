import React, { useState, useEffect } from "react"; // Menambahkan useState dan useEffect
import Layout from "../../Components/Layout";
// Pastikan Font Awesome sudah ter-setup di proyek Anda
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Contoh jika Anda mengimpornya

const Atomic_Habbit = () => {
  // --- STATE MANAGEMENT ---

  // 1. State untuk Mobile Menu Toggle (Jika ini dikelola di sini, bukan di Layout)
  // Diasumsikan Layout mungkin sudah menangani ini. Jika tidak, Anda bisa mengaktifkannya.
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. State untuk Fungsionalitas Tab Detail Buku
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const bookTabs = [
    { id: "description-tab", title: "Description" },
    { id: "details-tab", title: "Details" },
    { id: "reviews-tab", title: "Reviews (124)" }, // Angka review bisa dinamis jika perlu
  ];

  // 3. State untuk Pemilih Kuantitas Buku Utama
  const [mainBookQuantity, setMainBookQuantity] = useState(1);

  // 4. State untuk Wishlist Buku Utama
  const [isMainBookWishlisted, setIsMainBookWishlisted] = useState(false);

  // 5. State untuk "You May Also Like" items (wishlist dan identifikasi)
  const initialRecommendedBooks = [
    {
      id: "book1",
      name: "The Psychology of Money",
      author: "By Morgan Housel",
      rating: 5.0,
      price: "$15.99",
      oldPrice: "$19.99",
      imgSrc:
        "https://bookpadho.com/wp-content/uploads/2025/02/1740040199.png",
      isWishlisted: false,
      stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star"],
    },
    {
      id: "book2",
      name: "Deep Work",
      author: "By Cal Newport",
      rating: 4.0,
      price: "$14.99",
      oldPrice: null,
      imgSrc:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/VN/TG/LW/147952517/new-product.jpeg",
      isWishlisted: false,
      stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"],
    },
    {
      id: "book3",
      name: "Thinking, Fast and Slow",
      author: "By Daniel Kahneman",
      rating: 4.7,
      price: "$16.99",
      oldPrice: "$19.99",
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
      isWishlisted: false,
      discount: "15% OFF",
      stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star-half-alt"],
    },
    {
      id: "book4",
      name: "Moon",
      author: "By tere Liye",
      rating: 4.0,
      price: "$13.99",
      oldPrice: null,
      imgSrc:
        "https://inc.mizanstore.com/aassets/img/com_cart/produk/moon-edisi-inggris-bulan.jpg",
      isWishlisted: false,
      stars: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "far fa-star"],
    },
  ];
  const [recommendedBooks, setRecommendedBooks] = useState(initialRecommendedBooks);


  // --- EVENT HANDLERS ---

  // 1. Handler untuk Mobile Menu Toggle
  // const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // 2. Handler untuk Klik Tab Detail Buku
  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  // 3. Handler untuk Pemilih Kuantitas Buku Utama
  const decrementMainBookQuantity = () => {
    setMainBookQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const incrementMainBookQuantity = () => {
    setMainBookQuantity((prevQuantity) => prevQuantity + 1);
  };

  // 4. Handler untuk Toggle Wishlist Buku Utama
  const toggleMainBookWishlist = () => {
    setIsMainBookWishlisted(!isMainBookWishlisted);
  };

  // 5. Handler untuk Tambah ke Keranjang
  const handleAddToCart = (bookName) => {
    alert(`${bookName} added to cart!`);
    // Di aplikasi nyata, Anda akan menambahkan logika untuk memperbarui state keranjang belanja.
  };

  // 6. Handler untuk toggle wishlist item di "You May Also Like"
  const toggleRecommendedBookWishlist = (bookId) => {
    setRecommendedBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === bookId ? { ...book, isWishlisted: !book.isWishlisted } : book
      )
    );
  };

  // Catatan: Untuk navigasi seperti breadcrumbs (Home, Catalog),
  // di aplikasi React umumnya menggunakan <Link> dari react-router-dom, bukan <a>.

  return (
    <Layout>

      <div>
        {/* Breadcrumb */}
        <div className="bg-white py-4 border-b border-gray-100 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <a href="/" className="text-gray-500 hover:text-primary">
                Home
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <a
                href="/catalog"
                className="text-gray-500 hover:text-primary"
              >
                Catalog
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <a href="#" className="text-gray-500 hover:text-primary">
                Self-Improvement
              </a>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-primary">Atomic Habits</span>
            </div>
          </div>
        </div>
        {/* Book Detail Section */}
        <section className="py-8 md:py-12 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Book Image */}
                <div className="md:w-1/3 lg:w-1/4 p-6 md:p-8 flex justify-center">
                  <div className="relative">
                    <img
                      src="https://i0.wp.com/freedom.to/blog/wp-content/uploads/2018/10/Atomic_Habits-2.png?fit=1024%2C1012&ssl=1"
                      alt="Atomic Habits"
                      className="w-full max-w-xs rounded-md shadow-md"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
                      BESTSELLER
                    </div>
                  </div>
                </div>
                {/* Book Info */}
                <div className="md:w-2/3 lg:w-3/4 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                    <div className="mb-6 lg:mb-0 lg:pr-8">
                      <h1 className="text-2xl md:text-3xl font-bold mb-2">
                        Atomic Habits
                      </h1>
                      <p className="text-gray-600 mb-3">
                        By{" "}
                        <a href="#" className="text-primary hover:underline">
                          James Clear
                        </a>
                      </p>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center">
                          <div className="text-yellow-400 flex">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                          </div>
                          <span className="ml-2 text-gray-600">4.8</span>
                        </div>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600">2,453 reviews</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600">1.2M+ readers</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          Self-Improvement
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          Productivity
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          Psychology
                        </span>
                      </div>
                      <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed">
                          No matter your goals,{" "}
                          <span className="font-medium">Atomic Habits</span>{" "}
                          offers a proven framework for improving—every day.
                          James Clear, one of the world's leading experts on
                          habit formation, reveals practical strategies that
                          will teach you exactly how to form good habits, break
                          bad ones, and master the tiny behaviors that lead to
                          remarkable results.
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg lg:min-w-[280px]">
                      <div className="mb-4">
                        <div className="flex items-baseline">
                          <span className="text-2xl font-bold">$18.99</span>
                          <span className="text-gray-400 text-sm line-through ml-2">
                            $24.99
                          </span>
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded ml-2">
                            24% OFF
                          </span>
                        </div>
                        <p className="text-green-600 text-sm mt-1">In Stock</p>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600">Quantity:</span>
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={decrementMainBookQuantity}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border-l border-r border-gray-300 w-10 text-center">
                              {mainBookQuantity}
                            </span>
                            <button
                              onClick={incrementMainBookQuantity}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <button
                          onClick={() => handleAddToCart("Atomic Habits")}
                          className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2"
                        >
                          <i className="fas fa-shopping-cart" />
                          Add to Cart
                        </button>
                        <button
                          onClick={toggleMainBookWishlist}
                          className={`w-full border py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 ${
                            isMainBookWishlisted
                              ? "bg-primary text-white border-primary"
                              : "border-primary text-primary hover:bg-primary hover:text-white"
                          }`}
                        >
                          <i
                            className={`fa-heart ${
                              isMainBookWishlisted ? "fas" : "far"
                            }`}
                          />
                          {isMainBookWishlisted
                            ? "Added to Wishlist"
                            : "Add to Wishlist"}
                        </button>
                        <button className="w-full border border-gray-300 text-gray-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
                          <i className="fas fa-share-alt" />
                          Share
                        </button>
                      </div>
                      <div className="mt-6 space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <i className="fas fa-truck" />
                          <span>Free shipping on orders over $35</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <i className="fas fa-undo" />
                          <span>30-day return policy</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <i className="fas fa-shield-alt" />
                          <span>Secure checkout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Book Details Tabs */}
        <section className="py-8 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="flex flex-wrap">
                  {bookTabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(index)}
                      className={`tab-button px-6 py-4 font-medium ${
                        activeTabIndex === index
                          ? "text-primary border-b-2 border-primary"
                          : "text-gray-500 hover:text-primary"
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-8">
                {/* Description Tab Content */}
                <div id="description-tab" className={`tab-content ${ activeTabIndex === 0 ? "" : "hidden"}`}>
                  <h2 className="text-xl font-bold mb-4">About the Book</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      If you're having trouble changing your habits, the problem
                      isn't you. The problem is your system. Bad habits repeat
                      themselves again and again not because you don't want to
                      change, but because you have the wrong system for change.
                      You do not rise to the level of your goals. You fall to
                      the level of your systems. Here, you'll get a proven
                      system that can take you to new heights.
                    </p>
                    <p>
                      Clear is known for his ability to distill complex topics
                      into simple behaviors that can be easily applied to daily
                      life and work. Here, he draws on the most proven ideas
                      from biology, psychology, and neuroscience to create an
                      easy-to-understand guide for making good habits inevitable
                      and bad habits impossible. Along the way, readers will be
                      inspired and entertained with true stories from Olympic
                      gold medalists, award-winning artists, business leaders,
                      life-saving physicians, and star comedians who have used
                      the science of small habits to master their craft and
                      vault to the top of their field.
                    </p>
                    <p>Learn how to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Make time for new habits (even when life gets crazy)
                      </li>
                      <li>Overcome a lack of motivation and willpower</li>
                      <li>Design your environment to make success easier</li>
                      <li>Get back on track when you fall off course</li>
                      <li>And much more</li>
                    </ul>
                    <p>
                      Atomic Habits will reshape the way you think about
                      progress and success, and give you the tools and
                      strategies you need to transform your habits—whether you
                      are a team looking to win a championship, an organization
                      hoping to redefine an industry, or simply an individual
                      who wishes to quit smoking, lose weight, reduce stress, or
                      achieve any other goal.
                    </p>
                  </div>
                </div>
                {/* Details Tab Content */}
                <div id="details-tab" className={`tab-content ${activeTabIndex === 1 ? "" : "hidden"}`}>
                  <h2 className="text-xl font-bold mb-4">Book Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <table className="w-full text-gray-700">
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">Title</td>
                            <td className="py-3">
                              Atomic Habits: An Easy &amp; Proven Way to Build
                              Good Habits &amp; Break Bad Ones
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">Author</td>
                            <td className="py-3">James Clear</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">Publisher</td>
                            <td className="py-3">Avery</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">
                              Publication Date
                            </td>
                            <td className="py-3">October 16, 2018</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">Language</td>
                            <td className="py-3">English</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <table className="w-full text-gray-700">
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">Pages</td>
                            <td className="py-3">320</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">ISBN-10</td>
                            <td className="py-3">0735211299</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">ISBN-13</td>
                            <td className="py-3">978-0735211292</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">Dimensions</td>
                            <td className="py-3">6.3 x 1.1 x 9.3 inches</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 font-medium">Weight</td>
                            <td className="py-3">1.1 pounds</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Reviews Tab Content */}
                <div id="reviews-tab" className={`tab-content ${activeTabIndex === 2 ? "" : "hidden"}`}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <h2 className="text-xl font-bold mb-4">
                        Customer Reviews
                      </h2>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-4xl font-bold text-primary">
                            4.8
                          </div>
                          <div>
                            <div className="text-yellow-400 flex mb-1">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half-alt" />
                            </div>
                            <div className="text-sm text-gray-600">
                              Based on 2,453 reviews
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-gray-600 w-8">5★</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "85%" }}
                              />
                            </div>
                            <div className="text-sm text-gray-600 w-8">85%</div>
                          </div>
                          {/* ... other star ratings ... */}
                           <div className="flex items-center gap-2">
                            <div className="text-sm text-gray-600 w-8">4★</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "10%" }}
                              />
                            </div>
                            <div className="text-sm text-gray-600 w-8">10%</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-gray-600 w-8">3★</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "3%" }}
                              />
                            </div>
                            <div className="text-sm text-gray-600 w-8">3%</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-gray-600 w-8">2★</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "1%" }}
                              />
                            </div>
                            <div className="text-sm text-gray-600 w-8">1%</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-gray-600 w-8">1★</div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "1%" }}
                              />
                            </div>
                            <div className="text-sm text-gray-600 w-8">1%</div>
                          </div>
                        </div>
                        <button className="w-full mt-6 border border-primary text-primary py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition">
                          Write a Review
                        </button>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold">Recent Reviews</h3>
                        <select className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>Most Recent</option>
                          <option>Highest Rated</option>
                          <option>Lowest Rated</option>
                        </select>
                      </div>
                      <div className="space-y-6">
                        {/* Review 1 (Contoh, data ini bisa dinamis) */}
                        <div className="border-b border-gray-100 pb-6">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                              <img
                                src="https://img.freepik.com/free-photo/young-boy-showing-gun-gesture-near-head-white-t-shirt-floral-shirt-cap-looking-serious_176474-61410.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                                alt="Reviewer"
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <div className="font-medium">
                                  Michael Johnson
                                </div>
                                <div className="text-sm text-gray-500">
                                  May 10, 2025
                                </div>
                              </div>
                            </div>
                            <div className="text-yellow-400 flex">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <h4 className="font-medium mb-2">
                            Life-changing book on habits
                          </h4>
                          <p className="text-gray-700">
                            This book has completely changed how I approach
                            habit formation...
                          </p>
                          {/* ... sisa review ... */}
                        </div>
                        {/* Review 2 */}
                        {/* ... struktur review serupa ... */}
                        {/* Review 3 */}
                        {/* ... struktur review serupa ... */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Author Section */}
        <section className="py-8 lg:px-24">
          {/* ... (Konten tidak berubah signifikan untuk interaktivitas ini) ... */}
           <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 md:p-8">
              <h2 className="text-xl font-bold mb-6">About the Author</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 lg:w-1/5">
                  <img
                    src="https://brenebrown.com/wp-content/uploads/2021/11/Podcast-DTL-GuestCover-JamesClear-1.jpg"
                    alt="James Clear"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-3/4 lg:w-4/5">
                  <h3 className="text-lg font-bold mb-3">James Clear</h3>
                  <p className="text-gray-700 mb-4">
                    James Clear is a writer and speaker focused on habits,
                    decision making, and continuous improvement...
                  </p>
                  {/* ... sisa info author ... */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* You May Also Like */}
        <section className="py-12 lg:px-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {recommendedBooks.map((book) => (
                <div key={book.id} className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                  <div className="relative">
                    <img
                      src={book.imgSrc}
                      alt={book.name}
                      className="w-full h-[180px] sm:h-[220px] object-cover lg:object-contain md:object-contain"
                    />
                    <button
                      onClick={() => toggleRecommendedBookWishlist(book.id)}
                      className={`absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm ${
                        book.isWishlisted ? "text-red-500" : "hover:text-primary"
                      }`}
                      aria-label={book.isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <i className={`fa-heart ${book.isWishlisted ? "fas" : "far"}`} />
                    </button>
                    {book.discount && (
                       <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                         {book.discount}
                       </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-base mb-1 line-clamp-1">
                      {book.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 line-clamp-1"> {/* text-light tidak ada di Tailwind default, ganti ke text-gray-500 */}
                      {book.author}
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="text-yellow-400 text-sm">
                        {book.stars.map((starClass, idx) => (
                           <i key={idx} className={starClass} />
                        ))}
                      </div>
                      <span className="text-sm">{book.rating.toFixed(1)}</span>
                    </div>
                    <div className="lg:flex justify-between items-center">
                      <div>
                        <span className="font-bold">{book.price}</span>
                        {book.oldPrice && (
                          <span className="text-gray-400 text-sm line-through ml-1">
                            {book.oldPrice}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => handleAddToCart(book.name)}
                        className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-opacity-90"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Atomic_Habbit;