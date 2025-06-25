import React from "react";
import Layout from "../Components/Layout";

const Article = () => {
  return (
    <Layout>
      {/* Articles Hero Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Booku Articles &amp; Blog
            </h1>
            <p className="text-gray-600 mb-8">
              Discover insights, tips, and stories from the world of books and
              reading.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto lg:px-24">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D12AQEMGhFwdcwqzQ/article-cover_image-shrink_720_1280/B4DZWIRAgiG8AM-/0/1741747915632?e=2147483647&v=beta&t=avhUmFCIHsb3976UTSOMaDdOTJ8P3l8ABHGR7lrsWFY"
                    alt="The Power of Reading"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-primary bg-opacity-10 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    The Power of Reading: How Books Shape Our Lives
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    In a world dominated by digital screens and constant
                    notifications, the simple act of reading a book has become a
                    powerful form of resistance and self-care. Books offer us a
                    unique opportunity to disconnect from the noise of everyday
                    life and immerse ourselves in different worlds,
                    perspectives, and ideas.
                  </p>
                  <div className="flex flex-col items-start gap-2 mb-6 md:flex-row md:items-center md:gap-4">
                    {/* Grup Penulis */}
                    <div className="flex mb-4 md:mb-0 lg:mb-0 items-center gap-2">
                      <img
                        src="https://img.freepik.com/free-photo/horizontal-shot-indifferent-confused-lady-keeps-hands-crossed-purses-lips-feels-uncertain_273609-18790.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                        alt="Author"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="text-gray-600">Sarah Johnson</span>
                    </div>
                    {/* Div baru untuk membungkus Tanggal dan Waktu Baca */}
                    <div className="flex flex-row items-center gap-4">
                      {/* Grup Tanggal */}
                      <div className="flex items-center gap-2 text-gray-600">
                        <i className="far fa-calendar" />
                        <span>May 10, 2025</span>
                      </div>
                      {/* Grup Waktu Baca */}
                      <div className="flex items-center gap-2 text-gray-600">
                        <i className="far fa-clock" />
                        <span>8 min read</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/The-Power-of-Reading-How-Books-Shape-Our-Lives"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    Read Article <i className="fas fa-arrow-right text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Article Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto lg:px-24">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href="#"
                className="bg-secondary hover:bg-primary hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
              >
                All Topics
              </a>
              <a
                href="#"
                className="bg-white hover:bg-primary hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
              >
                Reading
              </a>
              <a
                href="#"
                className="bg-white hover:bg-primary hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
              >
                Book Reviews
              </a>
              <a
                href="#"
                className="bg-white hover:bg-primary hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
              >
                Author Spotlights
              </a>
              <a
                href="#"
                className="bg-white hover:bg-primary hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
              >
                Literary Analysis
              </a>
              <a
                href="#"
                className="bg-white hover:bg-primary hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
              >
                Writing Tips
              </a>
              <a
                href="#"
                className="bg-white hover:bg-primary hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
              >
                Book Recommendations
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Articles */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto lg:px-24">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Latest Articles</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Trending</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Article Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <a href="article.html" className="block">
                  <img
                    src="https://awsimages.detik.net.id/community/media/visual/2023/04/06/novel_169.jpeg?w=1200"
                    alt="10 Classic Novels Everyone Should Read"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
                      Reading
                    </span>
                    <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded text-xs">
                      Classics
                    </span>
                  </div>
                  <a href="article.html" className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      10 Classic Novels Everyone Should Read At Least Once
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    From Jane Austen to Fyodor Dostoevsky, these timeless works
                    have shaped literature and continue to captivate readers
                    centuries after they were written.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-standing-emotionless-white-wall_141793-30769.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                        alt="Author"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        Robert Williams
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="far fa-calendar" />
                      <span>Apr 28, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <a href="article.html" className="block">
                  <img
                    src="https://media.istockphoto.com/id/1402835350/photo/pensive-relaxed-african-american-woman-reading-a-book-at-home-drinking-coffee-sitting-on-the.jpg?s=612x612&w=0&k=20&c=aw9R68ENkPNqEQqQKcPqIlwAefRSQnymCifEjKd-4aE="
                    alt="How to Create a Perfect Reading Environment"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                      Productivity
                    </span>
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                      Lifestyle
                    </span>
                  </div>
                  <a href="article.html" className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      How to Create a Perfect Reading Environment at Home
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Transform any space into a cozy reading nook with these
                    practical tips on lighting, furniture, and ambiance to
                    enhance your reading experience.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://img.freepik.com/free-photo/pleased-young-caucasian-party-woman-wearing-party-hat-looking-up-isolated-pink-wall_141793-111244.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                        alt="Author"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        Jennifer Lee
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="far fa-calendar" />
                      <span>May 5, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <a href="article.html" className="block">
                  <img
                    src="https://www.brighthorizons.com/-/media/bh-new/enews-images/widen-180906-b2e-3444-reading-with-kids-1155x867.ashx?as=1"
                    alt="Reading to Children"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
                      Education
                    </span>
                    <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs">
                      Parenting
                    </span>
                  </div>
                  <a href="article.html" className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      Reading to Children: Why It's More Important Than Ever
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    In the digital age, reading aloud to children provides
                    crucial developmental benefits and creates lasting bonds.
                    Here's how to make the most of storytime.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://img.freepik.com/free-photo/closeup-portrait-young-confident-man_114579-79066.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                        alt="Author"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        Marcus Johnson
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="far fa-calendar" />
                      <span>May 2, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article Card 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <a href="article.html" className="block">
                  <img
                    src="https://spines.com/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-15-18.29.27-A-simpler-conceptual-image-showing-Digital-vs-Physical-Book-Distribution.-The-left-side-features-a-sleek-minimalistic-setting-with-a-single-e-reade.webp"
                    alt="Digital vs Physical Books"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded text-xs">
                      Technology
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
                      Reading
                    </span>
                  </div>
                  <a href="article.html" className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      Digital vs Physical Books: Finding Your Perfect Reading
                      Format
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    The debate between e-books and physical books continues. We
                    explore the pros and cons of each format to help you decide
                    which is right for different reading situations.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://img.freepik.com/free-photo/young-girl-with-pleasant-appearance-standing-against-pink-wall-dresses-denim-jacket-white-shirt_176532-10387.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                        alt="Author"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">Alicia Chen</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="far fa-calendar" />
                      <span>Apr 25, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article Card 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <a href="article.html" className="block">
                  <img
                    src="https://i0.wp.com/candidcover.net/wp-content/uploads/thumb2-summer-travel-seascape-mood-concept-book-on-the-beach-pebbles.jpg?resize=620%2C388&ssl=1"
                    alt="Summer Reading List"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                      Book Lists
                    </span>
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-xs">
                      Seasonal
                    </span>
                  </div>
                  <a href="article.html" className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      Summer 2025 Reading List: Beach Reads and Beyond
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    From page-turning thrillers to thought-provoking literary
                    fiction, here are our top picks for your summer reading
                    list, perfect for the beach, backyard, or anywhere your
                    travels take you.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://img.freepik.com/free-photo/charming-young-woman-with-silk-scarf-her-head_343059-1073.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                        alt="Author"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        Emily Rodriguez
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="far fa-calendar" />
                      <span>Apr 20, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Article Card 6 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <a href="article.html" className="block">
                  <img
                    src="https://www.eourmart.com/cdn/shop/products/AtomicHabits2.png?v=1662789339&width=1445"
                    alt="Interview with Author"
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded text-xs">
                      Author Spotlight
                    </span>
                    <span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded text-xs">
                      Interview
                    </span>
                  </div>
                  <a href="article.html" className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      In Conversation with Bestselling Author James Clear
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    We sat down with James Clear, author of "Atomic Habits," to
                    discuss his writing process, the science of habit formation,
                    and what he's reading now.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://img.freepik.com/free-photo/feeling-happy-astonished-something-unbelievable_1194-413886.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                        alt="Author"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        David Thompson
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="far fa-calendar" />
                      <span>Apr 15, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Load More Button */}
            <div className="text-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Topics Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mx-auto lg:px-24">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Popular Topics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Topic 1 */}
              <a
                href="#"
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-book text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Book Reviews</h3>
                <p className="text-gray-600 text-sm">42 articles</p>
              </a>
              {/* Topic 2 */}
              <a
                href="#"
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Self-Improvement</h3>
                <p className="text-gray-600 text-sm">38 articles</p>
              </a>
              {/* Topic 3 */}
              <a
                href="#"
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-pen-fancy text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">Author Spotlights</h3>
                <p className="text-gray-600 text-sm">27 articles</p>
              </a>
              {/* Topic 4 */}
              <a
                href="#"
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-child text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Children's Books</h3>
                <p className="text-gray-600 text-sm">19 articles</p>
              </a>
              {/* Topic 5 */}
              <a
                href="#"
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-list text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">Book Lists</h3>
                <p className="text-gray-600 text-sm">31 articles</p>
              </a>
              {/* Topic 6 */}
              <a
                href="#"
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-pink-600" />
                </div>
                <h3 className="font-bold mb-2">Romance</h3>
                <p className="text-gray-600 text-sm">24 articles</p>
              </a>
              {/* Topic 7 */}
              <a
                href="#"
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-rocket text-indigo-600" />
                </div>
                <h3 className="font-bold mb-2">Science Fiction</h3>
                <p className="text-gray-600 text-sm">22 articles</p>
              </a>
              {/* Topic 8 */}
              <a
                href="#"
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-brain text-orange-600" />
                </div>
                <h3 className="font-bold mb-2">Psychology</h3>
                <p className="text-gray-600 text-sm">18 articles</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Editor's Picks */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto lg:px-24">
            <h2 className="text-2xl font-bold mb-8">Editor's Picks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Editor's Pick 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col sm:flex-row">
                <div className="sm:w-2/5">
                  <img
                    src="https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2010/7/14/1279123444685/slow-reading-006.jpg?width=465&dpr=1&s=none&crop=none"
                    alt="The Art of Slow Reading"
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-3/5">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded mb-3 inline-block">
                    Editor's Choice
                  </span>
                  <a href="article.html" className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      The Art of Slow Reading in a Fast-Paced World
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Rediscover the pleasure of deep reading and how it can
                    improve comprehension, retention, and enjoyment of
                    literature.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://img.freepik.com/free-photo/young-man-green-shirt-wearing-glasses-looking-front-confused-with-raised-arms-standing-white-wall_141793-71839.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                        alt="Author"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        Michael Brown
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="far fa-calendar" />
                      <span>Apr 10, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Editor's Pick 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col sm:flex-row">
                <div className="sm:w-2/5">
                  <img
                    src="https://thephiladelphiacitizen.org/wp-content/uploads/2022/06/Indie-Bookshops-Header.jpg"
                    alt="Bookstores Revival"
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-3/5">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded mb-3 inline-block">
                    Editor's Choice
                  </span>
                  <a href="article.html" className="block">
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      The Surprising Revival of Independent Bookstores
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Despite predictions of their demise, independent bookstores
                    are thriving. We explore the reasons behind this unexpected
                    renaissance.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://img.freepik.com/free-photo/amused-surprised-girl-pouting-impressed_176420-25891.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                        alt="Author"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        Sophia Martinez
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="far fa-calendar" />
                      <span>Apr 5, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Article;
