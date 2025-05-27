import React from "react";
import Layout from "../../Components/Layout";

const Article_detail_1 = () => {
  return (
    <Layout>
      <div>
        {/* Article Hero Section */}
        <section className="py-8 md:py-12 bg-secondary lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Home
                </a>
                <i className="fas fa-chevron-right text-xs text-gray-400" />
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Articles
                </a>
                <i className="fas fa-chevron-right text-xs text-gray-400" />
                <span className="text-sm text-primary">
                  The Power of Reading
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                The Power of Reading: How Books Shape Our Lives
              </h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/horizontal-shot-indifferent-confused-lady-keeps-hands-crossed-purses-lips-feels-uncertain_273609-18790.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-gray-600">By Sarah Johnson</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <i className="far fa-calendar" />
                  <span>May 10, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <i className="far fa-clock" />
                  <span>8 min read</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Reading
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Books
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Self-Improvement
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Article Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D12AQEMGhFwdcwqzQ/article-cover_image-shrink_720_1280/B4DZWIRAgiG8AM-/0/1741747915632?e=2147483647&v=beta&t=avhUmFCIHsb3976UTSOMaDdOTJ8P3l8ABHGR7lrsWFY"
                  alt="The Power of Reading"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Article Content */}
        <section className="py-8 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  In a world dominated by digital screens and constant
                  notifications, the simple act of reading a book has become a
                  powerful form of resistance and self-care. Books offer us a
                  unique opportunity to disconnect from the noise of everyday
                  life and immerse ourselves in different worlds, perspectives,
                  and ideas.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">
                  The Cognitive Benefits of Reading
                </h2>
                <p className="mb-6">
                  Research has consistently shown that reading regularly has
                  significant cognitive benefits. When we read, we're engaging
                  multiple areas of our brain simultaneously, strengthening
                  neural connections and improving overall brain function. Some
                  of the key cognitive benefits include:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Improved vocabulary and language skills</li>
                  <li>Enhanced concentration and focus</li>
                  <li>Better memory retention</li>
                  <li>Increased analytical thinking abilities</li>
                  <li>Delayed cognitive decline in older adults</li>
                </ul>
                <p className="mb-6">
                  A study published in the journal <em>Neurology</em> found that
                  people who engaged in mentally stimulating activities like
                  reading throughout their lives had a 32% lower rate of
                  cognitive decline compared to those who didn't. This suggests
                  that reading isn't just enjoyable—it's an investment in your
                  long-term brain health.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic my-8">
                  "A reader lives a thousand lives before he dies. The man who
                  never reads lives only one." — George R.R. Martin
                </blockquote>
                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Empathy and Emotional Intelligence
                </h2>
                <p className="mb-6">
                  Perhaps one of the most profound impacts of reading fiction is
                  its ability to increase empathy. When we read stories about
                  characters different from ourselves, we're practicing the
                  mental skill of putting ourselves in someone else's shoes.
                  This translates to real-world empathy and emotional
                  intelligence.
                </p>
                <p className="mb-6">
                  A 2013 study published in <em>Science</em> found that reading
                  literary fiction improves readers' ability to understand
                  others' mental states and emotions. This "theory of mind" is
                  crucial for navigating complex social relationships and
                  building meaningful connections with others.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Stress Reduction and Mental Health
                </h2>
                <p className="mb-6">
                  In our high-stress world, reading offers a valuable escape. A
                  2009 study at the University of Sussex found that reading can
                  reduce stress levels by up to 68%. It works better and faster
                  than other relaxation methods, such as listening to music or
                  going for a walk.
                </p>
                <p className="mb-6">
                  The act of being fully immersed in a book—what psychologists
                  call "deep reading"—creates a meditative state that's similar
                  to mindfulness practice. This state of flow can lower heart
                  rate and ease muscle tension, providing both immediate and
                  long-term stress relief.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Building a Reading Habit
                </h2>
                <p className="mb-6">
                  Despite the clear benefits, many people struggle to make
                  reading a regular habit. Here are some practical tips to
                  incorporate more reading into your life:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>
                    Start small: Even 15-20 minutes per day can make a
                    difference
                  </li>
                  <li>Always carry a book (or e-reader) with you</li>
                  <li>Replace some social media time with reading</li>
                  <li>Join a book club for accountability and discussion</li>
                  <li>Create a comfortable reading environment at home</li>
                  <li>
                    Explore different genres to find what truly engages you
                  </li>
                </ol>
                <p className="mb-6">
                  Remember that reading shouldn't feel like a chore. The goal is
                  to find books that captivate you and make you eager to return
                  to their pages.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="mb-6">
                  In a digital age that often prioritizes speed and brevity, the
                  slow, deep engagement of reading a book offers a powerful
                  counterbalance. Books don't just entertain us—they shape our
                  thinking, expand our empathy, reduce our stress, and
                  potentially even protect our cognitive health as we age.
                </p>
                <p className="mb-6">
                  So the next time you're deciding how to spend your free time,
                  consider reaching for a book. Your brain—and your future
                  self—will thank you.
                </p>
              </div>
              {/* Share Buttons */}
              <div className="border-t border-b border-gray-200 py-6 my-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Share this article:</span>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition"
                      >
                        <i className="fab fa-pinterest" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-primary">
                      <i className="far fa-bookmark" />
                      <span>Save</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-primary">
                      <i className="far fa-comment" />
                      <span>Comment</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Author Bio */}
              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  <img
                    src="https://img.freepik.com/free-photo/horizontal-shot-indifferent-confused-lady-keeps-hands-crossed-purses-lips-feels-uncertain_273609-18790.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                    alt="Sarah Johnson"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                    <p className="text-gray-600 mb-4">
                      Sarah is a literary critic and writer with over 10 years
                      of experience in the publishing industry. She holds a
                      Master's degree in English Literature from Columbia
                      University and is passionate about making literature
                      accessible to everyone.
                    </p>
                    <div className="flex gap-3">
                      <a href="#" className="text-gray-600 hover:text-primary">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        <i className="fas fa-globe" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Comments Section */}
        <section className="py-8 bg-gray-50 lg:px-24">
          <div className="container mx-auto px-4">
            <div className=" mx-auto">
              <h2 className="text-2xl font-bold mb-6">Comments (12)</h2>
              {/* Comment Form */}
              <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Leave a comment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-600 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-gray-600 mb-1">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={""}
                  />
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition">
                  Post Comment
                </button>
              </div>
              {/* Comments List */}
              <div className="space-y-6">
                {/* Comment 1 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://img.freepik.com/free-photo/young-man-sitting-chair-with-book-marble-background-high-quality-photo_114579-35604.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">Michael Thompson</h4>
                        <p className="text-sm text-gray-500">
                          May 11, 2025 at 9:30 AM
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fas fa-ellipsis-v" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">
                    This article really resonated with me. I've been trying to
                    build a reading habit for years, and the tips you shared are
                    practical and doable. I especially like the idea of
                    replacing some social media time with reading. Going to try
                    that starting today!
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                      <i className="far fa-thumbs-up" />
                      <span>24</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                      <i className="far fa-comment" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
                {/* Comment 2 with Reply */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://img.freepik.com/free-photo/woman-portrait-walking-street_1328-3257.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">Emily Rodriguez</h4>
                        <p className="text-sm text-gray-500">
                          May 10, 2025 at 4:15 PM
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fas fa-ellipsis-v" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">
                    I love the quote from George R.R. Martin! It perfectly
                    captures why reading is so valuable. I've found that reading
                    fiction has definitely increased my empathy and
                    understanding of different perspectives.
                  </p>
                  <div className="flex items-center gap-4 text-sm mb-6">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                      <i className="far fa-thumbs-up" />
                      <span>18</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                      <i className="far fa-comment" />
                      <span>Reply</span>
                    </button>
                  </div>
                  {/* Reply */}
                  <div className="ml-6 pl-6 border-l-2 border-gray-200">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://img.freepik.com/free-photo/horizontal-shot-indifferent-confused-lady-keeps-hands-crossed-purses-lips-feels-uncertain_273609-18790.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740"
                          alt="Author"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium">
                            Sarah Johnson{" "}
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded ml-2">
                              Author
                            </span>
                          </h4>
                          <p className="text-sm text-gray-500">
                            May 10, 2025 at 5:30 PM
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Thank you, Emily! That quote is one of my favorites too.
                      It's amazing how books can transport us to different
                      worlds and help us understand experiences we might never
                      have in our own lives.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                        <i className="far fa-thumbs-up" />
                        <span>9</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                        <i className="far fa-comment" />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Comment 3 */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://img.freepik.com/free-photo/young-male-holding-book-sleeveless-hoodie-looking-confident-front-view_176474-64791.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">David Chen</h4>
                        <p className="text-sm text-gray-500">
                          May 10, 2025 at 11:45 AM
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fas fa-ellipsis-v" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">
                    I was surprised to learn about the cognitive benefits of
                    reading, especially the statistic about 32% lower cognitive
                    decline. That's a compelling reason to make reading a
                    priority! Do you have any book recommendations for someone
                    who's trying to get back into reading after a long break?
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                      <i className="far fa-thumbs-up" />
                      <span>12</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                      <i className="far fa-comment" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <button className="text-primary hover:underline">
                    Load More Comments
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Related Articles */}
        <section className="py-12 lg:px-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Article 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src="https://awsimages.detik.net.id/community/media/visual/2023/04/06/novel_169.jpeg?w=1200"
                    alt="Article"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded">
                    Reading
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    10 Classic Novels Everyone Should Read At Least Once
                  </h3>
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
                    <span className="text-sm text-gray-500">Apr 28, 2025</span>
                  </div>
                </div>
              </div>
              {/* Article 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src="https://media.istockphoto.com/id/1402835350/photo/pensive-relaxed-african-american-woman-reading-a-book-at-home-drinking-coffee-sitting-on-the.jpg?s=612x612&w=0&k=20&c=aw9R68ENkPNqEQqQKcPqIlwAefRSQnymCifEjKd-4aE="
                    alt="Article"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    Productivity
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    How to Create a Perfect Reading Environment at Home
                  </h3>
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
                    <span className="text-sm text-gray-500">May 5, 2025</span>
                  </div>
                </div>
              </div>
              {/* Article 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src="https://kidsreadnow.org/wp-content/uploads/2020/11/bigstock-happy-loving-family-pretty-yo-364803322.jpg"
                    alt="Article"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Education
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    Reading to Children: Why It's More Important Than Ever
                  </h3>
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
                    <span className="text-sm text-gray-500">May 2, 2025</span>
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

export default Article_detail_1;
