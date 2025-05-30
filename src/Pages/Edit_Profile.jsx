import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Components/Layout';

// Re-using theme colors from the Profile component for consistency
const colorPrimary = '#2A4A5C'; // Deep Cerulean Blue
const colorSecondary = '#F8F4E3'; // Cosmic Latte
const colorAccent = '#D9A404'; // Goldenrod
const colorLightText = '#6B7280'; // Tailwind's gray-500

// Sample genres for multi-select/checkboxes
const ALL_GENRES = [
    "Fantasy", "Science Fiction", "Mystery", "Thriller", "Romance",
    "Historical Fiction", "Contemporary", "Horror", "Young Adult", "Non-Fiction"
];

const Edit_Profile = () => {
    // State for form fields
    const [fullName, setFullName] = useState('Agnesti Wulansari');
    const [username, setUsername] = useState('anxtww');
    const [email, setEmail] = useState('agnesti@gmail.com'); // Assuming email is not directly editable
    const [bio, setBio] = useState('Passionate about discovering new authors and timeless classics. Always on the lookout for the next great story. Sharing my thoughts one book at a time.');
    const [favoriteGenres, setFavoriteGenres] = useState(['Fantasy', 'Science Fiction']);
    const [newsletter, setNewsletter] = useState(true);
    const [newReleaseNotifications, setNewReleaseNotifications] = useState(true);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handler for genre selection
    const handleGenreChange = (genre) => {
        setFavoriteGenres(prevGenres =>
            prevGenres.includes(genre)
                ? prevGenres.filter(g => g !== genre)
                : [...prevGenres, genre]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            fullName,
            username,
            bio,
            favoriteGenres,
            newsletter,
            newReleaseNotifications,
            // Password fields should be handled with care, usually sent to a backend
        });
        alert('Profile changes saved');
    };

    return (
        <Layout>
            <div className={`min-h-screen bg-[${colorSecondary}] py-8 px-4 font-sans flex flex-col items-center`}>
                <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-10">
                    <NavLink to="/profile/agnesti-wulansari" className="hover:underline"> Back</NavLink>
                    <h2 className={`text-3xl font-bold text-[${colorPrimary}] mb-8 text-center md:text-left mt-5`}>Edit Your Profile</h2>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* --- Profile Picture and Basic Info Section (Desktop: Left Column) --- */}
                        <div className="md:grid md:grid-cols-3 md:gap-10">
                            <div className="md:col-span-1 space-y-6 mb-8 md:mb-0">
                                <div className="text-center">
                                    <img
                                        src={`https://placehold.co/160x160/${colorSecondary.substring(1)}/${colorPrimary.substring(1)}?text=AR&font=montserrat`}
                                        alt="Profile"
                                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover mx-auto"
                                        onError={(e) => e.target.src = `https://placehold.co/160x160/cccccc/333333?text=Error`}
                                    />
                                    <button
                                        type="button"
                                        className={`mt-4 text-sm bg-[${colorPrimary}] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-150`}
                                    >
                                        Upload New Picture
                                    </button>
                                </div>
                                <div>
                                    <label htmlFor="email" className={`block text-sm font-medium text-[${colorLightText}] mb-1`}>Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        readOnly
                                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-sm"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Email cannot be changed through this form.</p>
                                </div>
                            </div>

                            {/* --- Detailed Information Section (Desktop: Right Column) --- */}
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <label htmlFor="fullName" className={`block text-sm font-medium text-[${colorLightText}] mb-1`}>Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${colorAccent}] focus:border-[${colorAccent}] text-sm`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username" className={`block text-sm font-medium text-[${colorLightText}] mb-1`}>Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${colorAccent}] focus:border-[${colorAccent}] text-sm`}
                                        placeholder="Choose a username"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="bio" className={`block text-sm font-medium text-[${colorLightText}] mb-1`}>Your Bio</label>
                                    <textarea
                                        id="bio"
                                        rows="4"
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                        className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${colorAccent}] focus:border-[${colorAccent}] text-sm`}
                                        placeholder="Tell us a bit about your reading journey..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* --- Favorite Genres Section --- */}
                        <div className="border-t border-gray-200 pt-8">
                            <h3 className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}>Favorite Genres</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {ALL_GENRES.map((genre) => (
                                    <label key={genre} className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700">
                                        <input
                                            type="checkbox"
                                            checked={favoriteGenres.includes(genre)}
                                            onChange={() => handleGenreChange(genre)}
                                            className={`h-4 w-4 rounded text-[${colorPrimary}] border-gray-300 focus:ring-[${colorAccent}]`}
                                        />
                                        <span>{genre}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* --- Communication Preferences Section --- */}
                        <div className="border-t border-gray-200 pt-8">
                            <h3 className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}>Communication Preferences</h3>
                            <div className="space-y-3">
                                <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={newsletter}
                                        onChange={(e) => setNewsletter(e.target.checked)}
                                        className={`h-4 w-4 rounded text-[${colorPrimary}] border-gray-300 focus:ring-[${colorAccent}]`}
                                    />
                                    <span>Receive monthly newsletter</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={newReleaseNotifications}
                                        onChange={(e) => setNewReleaseNotifications(e.target.checked)}
                                        className={`h-4 w-4 rounded text-[${colorPrimary}] border-gray-300 focus:ring-[${colorAccent}]`}
                                    />
                                    <span>Get notified about new releases in your favorite genres</span>
                                </label>
                            </div>
                        </div>

                        {/* --- Change Password Section --- */}
                        <div className="border-t border-gray-200 pt-8">
                            <h3 className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}>Change Password</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                                <div>
                                    <label htmlFor="currentPassword" className={`block text-sm font-medium text-[${colorLightText}] mb-1`}>Current Password</label>
                                    <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${colorAccent}] focus:border-[${colorAccent}] text-sm`} />
                                </div>
                                <div>
                                    <label htmlFor="newPassword" className={`block text-sm font-medium text-[${colorLightText}] mb-1`}>New Password</label>
                                    <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${colorAccent}] focus:border-[${colorAccent}] text-sm`} />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className={`block text-sm font-medium text-[${colorLightText}] mb-1`}>Confirm New Password</label>
                                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${colorAccent}] focus:border-[${colorAccent}] text-sm`} />
                                </div>
                            </div>
                            {newPassword && confirmPassword && newPassword !== confirmPassword && (
                                <p className="text-xs text-red-500 mt-2">New passwords do not match.</p>
                            )}
                        </div>

                        {/* --- Action Buttons --- */}
                        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                            <button
                                type="button"
                                onClick={() => alert('Changes cancelled.')} // Replace with actual cancel logic (e.g., redirect or reset form)
                                className={`px-6 py-3 rounded-lg border border-gray-300 text-[${colorLightText}] hover:bg-gray-100 transition-colors duration-150 text-sm font-medium w-full sm:w-auto`}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={`bg-[${colorAccent}] text-black px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-150 text-sm font-medium w-full sm:w-auto`}
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Edit_Profile;
