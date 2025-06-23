import React from "react";
import App from "../App";
import Layout from "../Components/Layout";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  
  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="bg-secondary py-8 md:py-16 lg:py-20 overflow-hidden lg:px-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="w-full md:w-1/2 mb-10 md:mb-0 lg:text-start text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                  Find Your
                  <br />
                  Next Book
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
                  Discover a world where every page brings a new adventure.
                  <br className="hidden sm:block" />
                  At Booku, we curate a diverse collection of books.
                </p>
                <div className="flex justify-center md:justify-start">
                  <a href="/register" className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg">
                    Explore Now <i className="fas fa-arrow-right ml-1" />
                  </a>
                </div>
              </div>
              {/* Book Display */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  {/* Circle Background */}
                  <div className="absolute inset-0 bg-light rounded-full" />
                  {/* Center Book */}
                  <img
                    src="https://brightspotcdn.byu.edu/dims4/default/841f0c6/2147483647/strip/true/crop/500x762+0+0/resize/500x762!/quality/90/?url=https%3A%2F%2Fbrigham-young-brightspot-us-east-2.s3.us-east-2.amazonaws.com%2F41%2F71%2Fd7d439b4fbd9ccee241416bf8d5c%2Fsorcerors-stone.jpg"
                    alt="Harry Potter : And The Sorcerer's Stone"
                    className="absolute h-48 sm:h-56 md:h-64 lg:h-72 shadow-lg rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all hover:scale-105"
                  />
                  {/* Left Book */}
                  <img
                    src="https://i.ebayimg.com/images/g/F5cAAOSwsP1f3uog/s-l1200.jpg"
                    alt="Naruto "
                    className="absolute h-48 sm:h-56 md:h-64 lg:h-72 shadow-lg rounded top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 -rotate-12 z-20 transition-all hover:rotate-3"
                  />
                  {/* Right Book */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/id/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg"
                    alt="The Almanack of Naval Ravikant"
                    className="absolute h-48 sm:h-56 md:h-64 lg:h-72 shadow-lg rounded top-1/2 right-[20%] translate-x-1/2 -translate-y-1/2 rotate-12 z-10 transition-all hover:rotate-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Authors Section */}
        <section className="py-8 border-b border-gray-200 overflow-x-auto lg:px-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-6 min-w-max md:min-w-0">
              <div className="flex items-center gap-3 text-light whitespace-nowrap">
                <img
                  src="https://brenebrown.com/wp-content/uploads/2021/11/Podcast-DTL-GuestCover-JamesClear-1.jpg"
                  alt="James Clear"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Latest from James clear</span>
                <i className="fas fa-chevron-right text-primary text-xs" />
              </div>
              <div className="flex items-center gap-3 text-light whitespace-nowrap">
                <img
                  src="https://www.toolshero.com/wp-content/uploads/2016/10/napoleon-hill-biography-toolshero.jpg"
                  alt="Napoleon Hill"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Latest from Napoleon Hill</span>
                <i className="fas fa-chevron-right text-primary text-xs" />
              </div>
              <div className="flex items-center gap-3 text-light whitespace-nowrap">
                <img
                  src="https://awsimages.detik.net.id/visual/2021/07/07/robert-kiyosaki-dok-basabaliorg_169.jpeg?w=650"
                  alt="Robert Kiyosaki"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Latest from Robert Kiyosaki</span>
                <i className="fas fa-chevron-right text-primary text-xs" />
              </div>
              <div className="flex items-center gap-3 text-light whitespace-nowrap">
                <img
                  src="https://www.speakersassociates.com/wp-content/uploads/2021/12/Brian-Tracy-Speaker.jpg"
                  alt="Brian Tracy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Latest from Brian Tracy</span>
                <i className="fas fa-chevron-right text-primary text-xs" />
              </div>
            </div>
          </div>
        </section>
        {/* Recommended Books Section */}
        <section className="py-8 md:py-10 border-b border-gray-200 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-medium">
                Recommended For You
              </h2>
              <a
                href="#"
                className="text-sm text-light flex items-center gap-1"
              >
                See all <i className="fas fa-chevron-right text-xs" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {/* Book Card 1 */}
              <a
                href="/Atomic-Habits"
                className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm"
              >
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://i0.wp.com/freedom.to/blog/wp-content/uploads/2018/10/Atomic_Habits-2.png?fit=1024%2C1012&ssl=1"
                    alt="Atomic Habits"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    Atomic Habits
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By : James Clear
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="text-xs sm:text-sm">4.9</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$32</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </a>
              {/* Book Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://harvilleandhelen.com/wp-content/uploads/2024/07/HTTWAAA-Cover-3D-Left-070124-663x1024.png"
                    alt="How to talk to anyone"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    How To Talk To Anyone
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By : Harville & Hellen
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="text-xs sm:text-sm">4.9</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$32</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://cdn.gramedia.com/uploads/items/9786020488608_Who-Moved-My-Cheese-Edisi-2019.jpg"
                    alt="Who Moved My Cheese"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    Who Moved My Cheese
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By : Spencer Johnson
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="text-xs sm:text-sm">4.9</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$32</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 4 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://bookpadho.com/wp-content/uploads/2025/02/1740040199.png"
                    alt="The Psychology of Money"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    The Psychology of Money
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By : Morgan Housel
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="text-xs sm:text-sm">4.9</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$32</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Categories Section */}
        <section className="py-8 md:py-10 border-b border-gray-200 overflow-x-auto lg:px-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-medium">Category</h2>
              <a
                href="#"
                className="text-sm text-light flex items-center gap-1"
              >
                See all <i className="fas fa-chevron-right text-xs" />
              </a>
            </div>
            <div className="flex flex-nowrap md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 min-w-max md:min-w-0">
              <div className="flex items-center gap-3 text-light whitespace-nowrap">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="https://brewminate.com/wp-content/uploads/2020/02/GeorgeThompsonTeachingHistory01.png"
                    alt="History"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded"
                  />
                </div>
                <span>History</span>
                <i className="fas fa-chevron-right text-primary text-xs" />
              </div>
              <div className="flex items-center gap-3 text-light whitespace-nowrap">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-children-book-illustration_23-2150837953.jpg?semt=ais_hybrid&w=740"
                    alt="Children's corner"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded"
                  />
                </div>
                <span>Children's corner</span>
                <i className="fas fa-chevron-right text-primary text-xs" />
              </div>
              <div className="flex items-center gap-3 text-light whitespace-nowrap">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="https://t3.ftcdn.net/jpg/06/25/93/98/360_F_625939867_HzeWF5BwM1S1SOeK0hu2WzErLm0cyo8E.jpg"
                    alt="Science fiction"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded"
                  />
                </div>
                <span>Science fiction</span>
                <i className="fas fa-chevron-right text-primary text-xs" />
              </div>
              <div className="flex items-center gap-3 text-light whitespace-nowrap">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaBym_L4wJi221Fomu4wO9M7eVmvXfdfXV9uqMPnnR_GqDkEVr"
                    alt="Self improvement"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded"
                  />
                </div>
                <span>Self improvement</span>
                <i className="fas fa-chevron-right text-primary text-xs" />
              </div>
              <div className="flex items-center gap-3 text-light whitespace-nowrap">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="https://newretro.net/cdn/shop/articles/DALL_E_2024-06-13_10.11.22_-_A_classic_1980s_comic_book_hero_team_wearing_vibrant_matching_costumes_standing_together_in_a_triumphant_pose_with_a_dramatic_cityscape_and_a_brigh.webp?v=1718262859"
                    alt="Comics"
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded"
                  />
                </div>
                <span>Comics</span>
                <i className="fas fa-chevron-right text-primary text-xs" />
              </div>
            </div>
          </div>
        </section>
        {/* Recently Added Section with Background Color */}
        <section className="py-8 md:py-10 border-b border-gray-200 bg-secondary lg:px-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-medium">
                Recently added
              </h2>
              <a
                href="#"
                className="text-sm text-light flex items-center gap-1"
              >
                See all <i className="fas fa-chevron-right text-xs" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {/* Book Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://sakshinarula.com/wp-content/uploads/2023/06/1687475864.png"
                    alt="House of Stars"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    House of Stars
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Sakshi Narula
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <span className="text-xs sm:text-sm">4.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://bookbins.b-cdn.net/wp-content/uploads/2024/04/The-Alchemist-Paulo-Coelho-Buy-Online-Bookbins-1.png"
                    alt="The Alchemist"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    The Alchemist
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Paulo Coelho
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="text-xs sm:text-sm">4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://i0.wp.com/femalescriblerian.com/wp-content/uploads/2013/04/the-night-circus.png?ssl=1"
                    alt="The Night Circus"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    The Night Circus
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By The Erin Morgenstern Goodreads
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <span className="text-xs sm:text-sm">4.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 4 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://mpd-biblio-covers.imgix.net/9781466861244.jpg"
                    alt="The Calculating Stars"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    The Calculating Stars
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Mary Robinette Kowal
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <span className="text-xs sm:text-sm">4.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Best Sellers Section */}
        <section className="py-8 md:py-10 border-b border-gray-200 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-medium">
                Best seller of all time
              </h2>
              <a
                href="#"
                className="text-sm text-light flex items-center gap-1"
              >
                See all <i className="fas fa-chevron-right text-xs" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {/* Book Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://inc.mizanstore.com/aassets/img/com_cart/produk/moon-edisi-inggris-bulan.jpg"
                    alt="Moon"
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    20% OFF
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    Moon
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Tere Liye
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="text-xs sm:text-sm">4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg"
                    alt="Laskar Pelangi"
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    15% OFF
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    Laskar Pelangi
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Andrea Hirata
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <span className="text-xs sm:text-sm">4.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png"
                    alt="RICH DAD"
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    10% OFF
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    RICH DAD
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Robert T. Kiyosaki
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="text-xs sm:text-sm">5.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 4 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://www.hachettebookgroup.com/wp-content/uploads/2024/03/9780761185680_3D.png?w=559"
                    alt="STEAL like an"
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    25% OFF
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    STEAL like an
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Austin Kleon
                  </p>
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <div className="text-yellow-400 text-xs sm:text-sm">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="text-xs sm:text-sm">4.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Promotions Section */}
        <section className="py-10 md:py-12 bg-white lg:px-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Comics Promo */}
              <div
                className="bg-gray-50 rounded-2xl p-6 shadow-sm"
                style={{
                  background: "linear-gradient(to right, #f5f5f5, #f0f0f0)",
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <h3 className="text-xl font-medium mb-2">
                    <span className="text-gray-700">Flat </span>
                    <span className="text-amber-700 font-semibold">
                      20% OFF
                    </span>
                    <span className="text-gray-700"> for comics books!</span>
                  </h3>
                  <div className="flex justify-end mt-4 mb-6">
                    <div className="relative h-36 w-full">
                      <img
                        src="https://static01.nyt.com/images/2020/05/04/arts/04marvel-item/merlin_171454440_6136d614-7b89-4b28-83a5-cf18d9c14a36-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                        alt="Comic book cover"
                        className="absolute right-24 top-2 h-32 w-24 object-cover rounded shadow-md transform -rotate-12 z-10"
                      />
                      <img
                        src="https://cdn.marvel.com/content/1x/avengers_annual_1.jpg"
                        alt="Comic book cover"
                        className="absolute right-16 top-0 h-32 w-24 object-cover rounded shadow-md transform -rotate-3 z-20"
                      />
                      <img
                        src="https://images-cdn.ubuy.co.in/63b7987fb53b3316ba3ce4a5-gcocl-tin-sign-venom-comic-book-wall-art.jpg"
                        alt="Comic book cover"
                        className="absolute right-8 top-1 h-32 w-24 object-cover rounded shadow-md transform rotate-6 z-30"
                      />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-gray-600 inline-flex items-center text-sm hover:text-gray-900 transition-colors border-b border-gray-300 pb-0.5 w-fit group"
                  >
                    View details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Science Fiction Promo */}
              <div
                className="bg-gray-50 rounded-2xl p-6 shadow-sm"
                style={{
                  background: "linear-gradient(to right, #f5f5f5, #f0f0f0)",
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <h3 className="text-xl font-medium mb-2">
                    <span className="text-gray-700">Flat </span>
                    <span className="text-amber-700 font-semibold">
                      25% OFF
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      for science fiction books!
                    </span>
                  </h3>
                  <div className="flex justify-end mt-4 mb-6">
                    <div className="relative h-36 w-full">
                      <img
                        src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1729180777-9781781087312__16267.1724038783.jpg?crop=1xw:1xh;center,top&resize=980:*"
                        alt="Science fiction book cover"
                        className="absolute right-24 top-2 h-32 w-24 object-cover rounded shadow-md transform -rotate-12 z-10"
                      />
                      <img
                        src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13635345/children_of_time.jpg?quality=90&strip=all&crop=0,0,100,100"
                        alt="Science fiction book cover"
                        className="absolute right-16 top-0 h-32 w-24 object-cover rounded shadow-md transform -rotate-3 z-20"
                      />
                      <img
                        src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23073543/shards_of_earth.jpeg?quality=90&strip=all&crop=0,0,100,100"
                        alt="Science fiction book cover"
                        className="absolute right-8 top-1 h-32 w-24 object-cover rounded shadow-md transform rotate-6 z-30"
                      />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-gray-600 inline-flex items-center text-sm hover:text-gray-900 transition-colors border-b border-gray-300 pb-0.5 w-fit group"
                  >
                    View details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Novels Promo */}
              <div
                className="bg-gray-50 rounded-2xl p-6 shadow-sm"
                style={{
                  background: "linear-gradient(to right, #f5f5f5, #f0f0f0)",
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <h3 className="text-xl font-medium mb-2">
                    <span className="text-gray-700">Flat </span>
                    <span className="text-amber-700 font-semibold">
                      15% OFF
                    </span>
                    <span className="text-gray-700"> for novels!</span>
                  </h3>
                  <div className="flex justify-end mt-4 mb-6">
                    <div className="relative h-36 w-full">
                      <img
                        src="https://s26162.pcdn.co/wp-content/uploads/2019/11/A1NfEjobJnL-691x1024.jpg"
                        alt="Novel book cover"
                        className="absolute right-24 top-2 h-32 w-24 object-cover rounded shadow-md transform -rotate-12 z-10"
                      />
                      <img
                        src="https://cdn1.bookmanager.com/i/m.php?b=gpSpF5NUuGT6wqnoG8NLpw&cb=1711202227"
                        alt="Novel book cover"
                        className="absolute right-16 top-0 h-32 w-24 object-cover rounded shadow-md transform -rotate-3 z-20"
                      />
                      <img
                        src="https://m.media-amazon.com/images/I/71wM1-tqvHL._AC_UF1000,1000_QL80_.jpg"
                        alt="Novel book cover"
                        className="absolute right-8 top-1 h-32 w-24 object-cover rounded shadow-md transform rotate-6 z-30"
                      />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-gray-600 inline-flex items-center text-sm hover:text-gray-900 transition-colors border-b border-gray-300 pb-0.5 w-fit group"
                  >
                    View details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="pt-0 pb-8 md:pb-10 border-b border-gray-200 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-medium">Services</h2>
              {/* <a href="#" class="text-sm text-light flex items-center gap-1"
      >See all <i class="fas fa-chevron-right text-xs"></i
    ></a> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-truck" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Free shipping</h4>
                  <p className="text-sm text-light">For orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-money-bill-wave" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Cash on delivery</h4>
                  <p className="text-sm text-light">Pay when you receive</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-headset" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">24/7 online supports</h4>
                  <p className="text-sm text-light">Customer service</p>
                </div>
              </div>
              <div className="flex items-center gap-4 col-span-full lg:col-start-4 lg:justify-self-end">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-undo" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Money back guarantee</h4>
                  <p className="text-sm text-light">Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular This Month Section with Background Color */}
        <section className="py-8 md:py-10 border-b border-gray-200 bg-secondary lg:px-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl sm:text-2xl font-medium">
                Popular this month
              </h2>
              <a
                href="#"
                className="text-sm text-light flex items-center gap-1"
              >
                See all <i className="fas fa-chevron-right text-xs" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {/* Book Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://m.media-amazon.com/images/I/61a5dCqyQRL._AC_UF1000,1000_QL80_.jpg"
                    alt="Embrace Change for Success"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    Embrace Change for Success
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Dale Carnegie
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://m.media-amazon.com/images/I/71Kvtv3PHDL._UF1000,1000_QL80_.jpg"
                    alt="The fear of failure"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    The fear of failure
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Mark Manson
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://brightspotcdn.byu.edu/dims4/default/841f0c6/2147483647/strip/true/crop/500x762+0+0/resize/500x762!/quality/90/?url=https%3A%2F%2Fbrigham-young-brightspot-us-east-2.s3.us-east-2.amazonaws.com%2F41%2F71%2Fd7d439b4fbd9ccee241416bf8d5c%2Fsorcerors-stone.jpg"
                    alt="Harry Potter"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    Harry Potter
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Mark Manson
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              {/* Book Card 4 */}
              <div className="bg-white rounded-lg overflow-hidden transition-transform hover:-translate-y-1 shadow-sm">
                <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden relative">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1734472583i/48751243.jpg"
                    alt="Finding your Life Purpose"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 line-clamp-1">
                    Finding your Life Purpose
                  </h3>
                  <p className="text-xs sm:text-sm text-light mb-2 line-clamp-1">
                    By Mark Manson
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm sm:text-base">$35</span>
                    <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-8 md:py-10 border-b border-gray-200 lg:px-24">
          <div className="container text-center mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-medium mb-6">
              Our happy customers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm relative">
                <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                  <i className="fas fa-times" />
                </button>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/young-ginger-woman-wearing-denim-overalls_273609-19806.jpg?semt=ais_hybrid&w=740"
                    alt="Savannah Nguyen"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">
                      Savannah Nguyen
                    </h4>
                    <p className="text-xs sm:text-sm text-light">
                      @savannah.nguyen
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  "This book was an absolute page-turner! I couldn't put it
                  down. The plot was engaging, the characters were relatable,
                  and the ending was amazing."
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm relative">
                <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                  <i className="fas fa-times" />
                </button>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/front-view-man-road-trip_23-2148783487.jpg?semt=ais_hybrid&w=740"
                    alt="Devon Lane"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">
                      Devon Lane
                    </h4>
                    <p className="text-xs sm:text-sm text-light">@devon.lane</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  "This book was an absolute page-turner! I couldn't put it
                  down. The plot was engaging, the characters were relatable,
                  and the ending was amazing."
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm relative sm:col-span-2 md:col-span-1">
                <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                  <i className="fas fa-times" />
                </button>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/blonde-woman-wearing-big-hat-casual-t-shirt_273609-19941.jpg?semt=ais_hybrid&w=740"
                    alt="Jane Cooper"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">
                      Jane Cooper
                    </h4>
                    <p className="text-xs sm:text-sm text-light">
                      @jane.cooper
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  "This book was an absolute page-turner! I couldn't put it
                  down. The plot was engaging, the characters were relatable,
                  and the ending was amazing."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
