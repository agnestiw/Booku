import React from "react";
import Layout from "../Components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                About Booku
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We believe that every book has the power to transform lives.
                Since our founding, we've been dedicated to making quality
                literature accessible to everyone, fostering a community of
                passionate readers around the world.
              </p>
            </div>
          </div>
        </section>
        {/* Our Story Section */}
        <section className="py-12 md:py-16 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Founded in 2018, Booku began as a small independent
                      bookstore with a simple mission: to connect readers with
                      the books they love at prices they can afford. What
                      started as a passion project by a group of book
                      enthusiasts has grown into a thriving online community.
                    </p>
                    <p>
                      Our founders, avid readers themselves, noticed that many
                      people were priced out of enjoying quality literature.
                      They set out to change that by partnering directly with
                      publishers and authors to offer books at reasonable prices
                      without compromising on quality.
                    </p>
                    <p>
                      Today, we're proud to serve over 100,000 readers
                      worldwide, offering everything from bestselling novels to
                      hidden literary gems. Our curated selection ensures that
                      every book in our catalog meets our high standards for
                      quality and value.
                    </p>
                  </div>
                </div>
                <div className="order-first lg:order-last">
                  <img
                    src="https://www.thatssotampa.com/wp-content/uploads/2023/04/BITDB-1024x637.png"
                    alt="Our Story"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mission & Vision Section */}
        <section className="py-12 md:py-16 bg-white lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Mission &amp; Vision
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We're driven by the belief that reading should be accessible
                  to everyone, regardless of their budget or location.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission */}
                <div className="bg-secondary p-8 rounded-lg">
                  <div className="text-primary mb-4">
                    <i className="fas fa-bullseye text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To make quality books accessible to readers everywhere by
                    offering carefully curated literature at affordable prices,
                    while building a community that celebrates the
                    transformative power of reading.
                  </p>
                </div>
                {/* Vision */}
                <div className="bg-secondary p-8 rounded-lg">
                  <div className="text-primary mb-4">
                    <i className="fas fa-eye text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become the world's most trusted destination for book
                    lovers, where every reader can discover their next favorite
                    book and connect with a global community of fellow
                    bibliophiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-12 md:py-16 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Values
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  These core values guide everything we do, from selecting books
                  to serving our customers.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Value 1 */}
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                   <i className="fas fa-heart text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">
                    Passion for Reading
                  </h3>
                  <p className="text-gray-600">
                    We're readers first, business people second. Our love for
                    books drives every decision we make.
                  </p>
                </div>
                {/* Value 2 */}
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-handshake text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Accessibility</h3>
                  <p className="text-gray-600">
                    Quality literature should be available to everyone,
                    regardless of their economic situation.
                  </p>
                </div>
                {/* Value 3 */}
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Community</h3>
                  <p className="text-gray-600">
                    We believe in the power of shared reading experiences and
                    building connections through books.
                  </p>
                </div>
                {/* Value 4 */}
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-star text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Quality</h3>
                  <p className="text-gray-600">
                    We carefully curate our selection to ensure every book meets
                    our high standards for content and value.
                  </p>
                </div>
                {/* Value 5 */}
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-lightbulb text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously evolve our platform and services to better
                    serve our reading community.
                  </p>
                </div>
                {/* Value 6 */}
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-leaf text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">Sustainability</h3>
                  <p className="text-gray-600">
                    We're committed to environmentally responsible practices in
                    all aspects of our business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="py-12 md:py-16 bg-white lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Meet Our Team
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Behind Booku is a passionate team of book lovers, tech
                  enthusiasts, and customer service experts dedicated to
                  bringing you the best reading experience.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="text-center">
                  <img
                    src="https://img.freepik.com/free-photo/businesswoman-restaurant_1157-9055.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                    alt="Sarah Johnson"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-primary mb-2">Founder &amp; CEO</p>
                  <p className="text-gray-600 text-sm mb-4">
                    A literature graduate with 15 years in publishing. Sarah's
                    vision drives our mission to make books accessible to all.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
                {/* Team Member 2 */}
                <div className="text-center">
                  <img
                    src="https://img.freepik.com/free-photo/handsome-man-sitting-reading-room_23-2147860520.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                    alt="Michael Chen"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-1">Michael Chen</h3>
                  <p className="text-primary mb-2">Head of Technology</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Former software engineer at major tech companies. Michael
                    ensures our platform delivers the best user experience.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-github" />
                    </a>
                  </div>
                </div>
                {/* Team Member 3 */}
                <div className="text-center">
                  <img
                    src="https://img.freepik.com/free-photo/woman-portrait-walking-street_1328-3257.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                    alt="Emily Rodriguez"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-1">Emily Rodriguez</h3>
                  <p className="text-primary mb-2">Head of Curation</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Former librarian and book critic. Emily handpicks every book
                    in our catalog to ensure quality and diversity.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                {/* Team Member 4 */}
                <div className="text-center">
                  <img
                    src="https://img.freepik.com/free-photo/young-male-model-reading_23-2148760687.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                    alt="David Thompson"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-1">David Thompson</h3>
                  <p className="text-primary mb-2">Customer Success Manager</p>
                  <p className="text-gray-600 text-sm mb-4">
                    With a background in customer service and a love for books,
                    David ensures every customer has an amazing experience.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
                {/* Team Member 5 */}
                <div className="text-center">
                  <img
                    src="https://img.freepik.com/free-photo/young-japanese-woman-portrait_23-2148870791.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                    alt="Lisa Park"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-1">Lisa Park</h3>
                  <p className="text-primary mb-2">Marketing Director</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Creative marketer with a passion for storytelling. Lisa
                    helps connect readers with their perfect next book.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                {/* Team Member 6 */}
                <div className="text-center">
                  <img
                    src="https://img.freepik.com/free-photo/man-reading-book-outdoors-front-view_23-2149659087.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_items_boosted&w=740"
                    alt="James Wilson"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-1">James Wilson</h3>
                  <p className="text-primary mb-2">Operations Manager</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Logistics expert who ensures your books arrive quickly and
                    safely. James keeps our operations running smoothly.
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                      <i className="fab fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Statistics Section */}
        <section className="py-12 md:py-16 bg-primary text-white lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Impact in Numbers
                </h2>
                <p className="text-primary-100 max-w-3xl mx-auto">
                  These numbers represent the amazing community we've built
                  together and the impact we're making in the world of reading.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    100K+
                  </div>
                  <div className="text-primary-100">Happy Readers</div>
                </div>
                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    50K+
                  </div>
                  <div className="text-primary-100">Books Sold</div>
                </div>
                {/* Stat 3 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">5K+</div>
                  <div className="text-primary-100">Book Titles</div>
                </div>
                {/* Stat 4 */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                  <div className="text-primary-100">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Awards & Recognition Section */}
        <section className="py-12 md:py-16 bg-white lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Awards &amp; Recognition
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We're honored to be recognized by industry leaders and our
                  community for our commitment to making reading accessible.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Award 1 */}
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-primary mb-4">
                    <i className="fas fa-trophy text-3xl" />
                  </div>
                  <h3 className="font-bold mb-2">Best Online Bookstore 2024</h3>
                  <p className="text-gray-600 text-sm">
                    Readers' Choice Awards
                  </p>
                </div>
                {/* Award 2 */}
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-primary mb-4">
                    <i className="fas fa-medal text-3xl" />
                  </div>
                  <h3 className="font-bold mb-2">Innovation in Publishing</h3>
                  <p className="text-gray-600 text-sm">BookTech Awards 2023</p>
                </div>
                {/* Award 3 */}
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-primary mb-4">
                    <i className="fas fa-star text-3xl" />
                  </div>
                  <h3 className="font-bold mb-2">
                    Customer Service Excellence
                  </h3>
                  <p className="text-gray-600 text-sm">
                    E-commerce Excellence Awards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact CTA Section */}
        <section className="py-12 md:py-16 bg-gray-50 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our mission, want to partner with us, or
                just want to say hello? We'd love to hear from you. Our team is
                always excited to connect with fellow book lovers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition"
                >
                  Join Our Team
                </a>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Info 1 */}
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-map-marker-alt text-white" />
                  </div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <p className="text-gray-600 text-sm">
                    Dallas, Delaware 10299
                  </p>
                </div>
                {/* Contact Info 2 */}
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-envelope text-white" />
                  </div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-gray-600 text-sm">hello@booku.com</p>
                </div>
                {/* Contact Info 3 */}
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-phone text-white" />
                  </div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-gray-600 text-sm">(671) 555-0110</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter Section */}
        <section className="py-12 lg:px-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest book recommendations, company updates, and
                reading tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
