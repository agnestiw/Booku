import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Components/Layout';

// Theme colors - defined outside component for clarity or if used elsewhere
const colorPrimary = '#2A4A5C'; // Deep Cerulean Blue (sophisticated, trustworthy)
const colorSecondary = '#F8F4E3'; // Cosmic Latte (warm, paper-like)
const colorAccent = '#D9A404'; // Goldenrod for accents like ratings or special offers
const colorLightText = '#6B7280'; // Tailwind's gray-500 (good for readability)

// Tab definitions - can also be outside if static
const TABS_CONFIG = [
    { id: 'bookshelf', label: 'My Bookshelf' },
    // { id: 'reviews', label: 'My Reviews' },
    // { id: 'wishlist', label: 'Wishlist' },
    { id: 'orders', label: 'Order History' },
];

const books = [
    { title: 'Atomic Habbits', author: 'James Clear', url: '/Atomic-Habits',rating: '★★★★☆', img: 'https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786020633176_.Atomic_Habit.jpg' },
    { title: 'Harry Potter and the Prisoner of Azkaban', url: '/Atomic-Habits', author: 'J.K Rowling', rating: '★★★★☆', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630547330i/5.jpg' },
    { title: 'Naruto, Vol. 65', author: 'Mashashi Kimoto', url: '/Atomic-Habits', rating: '★★★★☆', img: 'https://i.pinimg.com/236x/ef/30/b4/ef30b47c2dc5bab0de16995124e5f3e9.jpg' },
    { title: 'Seporsi Mie Ayam Sebelum Mati', author: 'Brian Khrisna', url: '/Atomic-Habits', rating: '★★★★☆', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1736474633i/223441713.jpg' },
];


const Profile = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('bookshelf');

    return (
        <Layout>
            <div className={`min-h-screen bg-[${colorSecondary}] py-8 px-4 font-sans flex flex-col items-center`}>
                {/* Profile Card: Max width, centered, white background, rounded corners, shadow */}
                <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden">

                    {/* ====== Cover Image and Profile Picture Section ====== */}
                    <div className="relative">
                        {/* Cover image placeholder - themed for books */}
                        <img
                            src={`https://placehold.co/1200x350/${colorAccent.substring(1)}/${colorSecondary.substring(1)}?text=Explore+Your+Next+Read&font=montserrat`}
                            alt="Bookstore Cover"
                            className="w-full h-48 md:h-60 object-cover"
                            onError={(e) => e.target.src = `https://placehold.co/1200x350/cccccc/333333?text=Cover+Error`}
                        />
                        {/* Profile picture container: Positioned to overlap cover image */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                            <img
                                src="/anime1.jpg"
                                alt="Profile"
                                className="w-28 h-28 md:w-32 md:h-32 rounded-full border-[6px] border-white shadow-lg object-cover"
                                onError={(e) => e.target.src = `https://placehold.co/160x160/cccccc/333333?text=Error`}
                            />
                        </div>
                    </div>

                    {/* ====== User Information Section ====== */}
                    {/* Spacing to accommodate the overlapping profile picture */}
                    <div className="pt-20 pb-6 px-6 text-center">
                        <h1 className={`text-3xl font-bold text-[${colorPrimary}]`}>Agnesti Wulansari</h1>
                        <p className={`text-md text-[${colorLightText}] mt-1`}>Book Enthusiast & Reviewer | Gold Tier Member</p>
                        <p className="text-sm text-gray-500 mt-1">Joined November 2019 | Favorite Genre: Drama</p>

                        {/* User Bio - themed for books */}
                        <p className="mt-4 text-sm text-gray-700 max-w-lg mx-auto">
                            Passionate about discovering new authors and timeless classics. Always on the lookout for the next great story. Sharing my thoughts one book at a time.
                        </p>
                    </div>

                    {/* ====== Statistics Section - themed for books/e-commerce ====== */}
                    <div className={`flex flex-wrap justify-around items-center py-5 px-6 border-t border-b border-gray-200 bg-gray-50 sm:bg-transparent`}>
                        <div className="text-center p-2 min-w-[80px]">
                            <p className={`text-2xl font-bold text-[${colorPrimary}]`}>157</p>
                            <p className={`text-xs text-[${colorLightText}] uppercase tracking-wider`}>Books Read</p>
                        </div>
                        <div className="text-center p-2 min-w-[80px]">
                            <p className={`text-2xl font-bold text-[${colorPrimary}]`}>42</p>
                            <p className={`text-xs text-[${colorLightText}] uppercase tracking-wider`}>Reviews</p>
                        </div>
                        <div className="text-center p-2 min-w-[80px]">
                            <p className={`text-2xl font-bold text-[${colorPrimary}]`}>89</p>
                            <p className={`text-xs text-[${colorLightText}] uppercase tracking-wider`}>Wishlisted</p>
                        </div>
                        <div className="text-center p-2 min-w-[80px]">
                            <p className={`text-2xl font-bold text-[${colorPrimary}]`}>15</p>
                            <p className={`text-xs text-[${colorLightText}] uppercase tracking-wider`}>Authors Followed</p>
                        </div>
                    </div>

                    {/* ====== Action Buttons Section - themed for e-commerce ====== */}
                    <div className="py-6 px-6 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <NavLink to="/profile/agnesti-wulansari/edit"
                            className={`flex items-center justify-center bg-[${colorPrimary}] text-black px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-150 text-sm font-medium w-full sm:w-auto`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            Manage Account
                        </NavLink>
                        <NavLink to="/catalog"
                            className={`flex items-center justify-center bg-gray-200 text-[${colorPrimary}] px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-150 text-sm font-medium w-full sm:w-auto`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            Browse New Releases
                        </NavLink>
                        <button
                            className={`flex items-center justify-center bg-transparent text-[${colorLightText}] px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-150 text-sm font-medium w-full sm:w-auto border border-gray-300`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                            <span className="sm:hidden ml-2">More</span>
                        </button>
                    </div>

                    {/* ====== Tabs Navigation ====== */}
                    <div className="border-b border-gray-200">
                        <nav className="flex justify-center -mb-px space-x-2 sm:space-x-4 px-4" aria-label="Tabs">
                            {TABS_CONFIG.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`whitespace-nowrap py-4 px-3 sm:px-4 border-b-2 font-medium text-sm transition-colors duration-150
                  ${activeTab === tab.id
                                            ? `border-[${colorPrimary}] text-[${colorPrimary}]`
                                            : `border-transparent text-[${colorLightText}] hover:text-gray-700 hover:border-gray-300`
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* ====== Tab Content Area ====== */}
                    <div className="p-6 min-h-[250px]">
                        {activeTab === 'bookshelf' && (
                            <div>
                                <h3 className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}>
                                    My Bookshelf (Currently Reading)
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {books.map((book, i) => (
                                        <NavLink to={book.url}
                                            key={i}
                                            className={`p-3 bg-[${colorSecondary}] rounded-lg shadow-sm text-center`}
                                        >
                                            <img
                                                src={book.img}
                                                alt={book.title}
                                                className="w-full h-auto object-cover rounded mb-2 shadow"
                                            />
                                            <h4 className={`text-sm font-semibold text-[${colorPrimary}]`}>
                                                {book.title}
                                            </h4>
                                            <p className="text-xs text-gray-600">{book.author}</p>
                                            <div className={`mt-1 text-xs text-[${colorAccent}]`}>
                                                {book.rating}
                                            </div>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'reviews' && (
                            <div>
                                <h3 className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}>My Reviews</h3>
                                <div className="space-y-4">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className={`p-4 bg-[${colorSecondary}] rounded-lg shadow-sm`}>
                                            <h4 className={`font-semibold text-[${colorPrimary}]`}>Review for "The Great Novel {i + 1}"</h4>
                                            <div className={`mt-1 mb-2 text-sm text-[${colorAccent}]`}>★★★★★</div>
                                            <p className="text-xs text-gray-700">"This was an amazing read! Highly recommend to anyone interested in epic adventures. The character development was superb..."</p>
                                            <p className="text-xxs text-gray-500 mt-2">Reviewed on: {new Date(Date.now() - i * 1000 * 60 * 60 * 24 * 5).toLocaleDateString()}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'wishlist' && (
                            <div>
                                <h3 className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}>My Wishlist ({89} Books)</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className={`flex items-center p-3 bg-[${colorSecondary}] rounded-lg shadow-sm`}>
                                            <img src={`https://placehold.co/80x120/${colorLightText.substring(1)}/${colorSecondary.substring(1)}?text=Book&font=montserrat`} alt={`Wishlist Book ${i + 1}`} className="w-16 h-24 object-cover rounded mr-3 shadow" />
                                            <div>
                                                <h4 className={`font-semibold text-[${colorPrimary}] text-sm`}>Anticipated Book {i + 1}</h4>
                                                <p className="text-xs text-gray-600">Author X</p>
                                                <p className={`text-xs text-[${colorAccent}]`}>Releases: Q{i % 4 + 1} 2024</p>
                                                <button className={`mt-1 text-xs bg-[${colorPrimary}] text-white px-2 py-1 rounded hover:opacity-90`}>Notify Me</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'orders' && (
                            <div>
                                <h3 className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}>Order History</h3>
                                <div className="space-y-4">
                                    {[...Array(2)].map((_, i) => (
                                        <div key={i} className={`p-4 bg-[${colorSecondary}] rounded-lg shadow-sm`}>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className={`font-semibold text-[${colorPrimary}]`}>Order #ORD202400{123 - i}</h4>
                                                    <p className="text-xs text-gray-600">Date: {new Date(Date.now() - i * 1000 * 60 * 60 * 24 * 30).toLocaleDateString()} | Total: $ {(Math.random() * 50 + 20).toFixed(2)}</p>
                                                </div>
                                                <span className={`text-xs px-2 py-1 rounded-full ${i === 0 ? `bg-green-200 text-green-800` : `bg-blue-200 text-blue-800`}`}>
                                                    {i === 0 ? 'Delivered' : 'Shipped'}
                                                </span>
                                            </div>
                                            <div className="mt-2 border-t pt-2">
                                                <p className="text-xs text-gray-700">Items: "The Mystery of the Old Library", "Sci-Fi Adventures Vol. 3"</p>
                                                <button className={`mt-2 text-xs text-[${colorPrimary}] hover:underline`}>View Details</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;
