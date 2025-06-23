import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../Components/Layout"; // Pastikan path ini benar

// Re-using theme colors from the Profile component for consistency
const colorPrimary = "#2A4A5C"; // Deep Cerulean Blue
const colorSecondary = "#F8F4E3"; // Cosmic Latte
const colorAccent = "#D9A404"; // Goldenrod
const colorLightText = "#6B7280"; // Tailwind's gray-500

// Sample genres for multi-select/checkboxes
const ALL_GENRES = [
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Historical Fiction",
  "Contemporary",
  "Horror",
  "Young Adult",
  "Non-Fiction",
];

// URL untuk placeholder awal atau jika tidak ada gambar.
// Anda bisa menggantinya dengan null jika ingin logika yang berbeda.
const INITIAL_COVER_IMAGE_PLACEHOLDER =
  "https://placehold.co/1200x350/E0E0E0/B0B0B0?text=No+Cover+Image&font=roboto";

const Edit_Profile = () => {
  // State for form fields
  const [fullName, setFullName] = useState("Agnesti Wulansari");
  const [username, setUsername] = useState("anxtww");
  const [email, setEmail] = useState("agnesti@gmail.com");
  const [bio, setBio] = useState(
    "Passionate about discovering new authors and timeless classics. Always on the lookout for the next great story. Sharing my thoughts one book at a time."
  );
  const [favoriteGenres, setFavoriteGenres] = useState([
    "Fantasy",
    "Science Fiction",
  ]);
  const [newsletter, setNewsletter] = useState(true);
  const [newReleaseNotifications, setNewReleaseNotifications] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for profile picture
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState(
    `https://placehold.co/160x160/${colorSecondary.substring(
      1
    )}/${colorPrimary.substring(1)}?text=AR&font=montserrat`
  );

  // State for cover image
  const [coverImage, setCoverImage] = useState(null); // File object
  const [coverImageUrl, setCoverImageUrl] = useState(
    INITIAL_COVER_IMAGE_PLACEHOLDER
  ); // URL untuk ditampilkan

  // Refs for file inputs
  const profilePictureInputRef = useRef(null);
  const coverImageInputRef = useRef(null);

  // Handler for profile picture selection
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePictureUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler for cover image selection
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler for genre selection
  const handleGenreChange = (genre) => {
    setFavoriteGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data to submit:", {
      fullName,
      username,
      bio,
      favoriteGenres,
      newsletter,
      newReleaseNotifications,
    });

    if (profilePicture) {
      console.log("New profile picture selected:", profilePicture.name);
      // Logika unggah file profil
    }

    if (coverImage) {
      console.log("New cover image selected:", coverImage.name);
      // Logika unggah file sampul
    }

    const modal = document.getElementById("successModal");
    if (modal) modal.classList.remove("hidden");
    setTimeout(() => {
      if (modal) modal.classList.add("hidden");
    }, 3000);
  };

  // Fungsi untuk memicu klik pada input file sampul
  const triggerCoverImageUpload = () => {
    if (coverImageInputRef.current) {
      coverImageInputRef.current.click();
    }
  };

  return (
    <Layout>
      <div
        className={`min-h-screen bg-[${colorSecondary}] py-8 px-4 font-sans flex flex-col items-center`}
      >
        <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-10">
          <NavLink
            to="/profile/agnesti-wulansari"
            className="text-sm text-blue-600 hover:underline mb-6 block"
          >
            &larr; Back to Profile
          </NavLink>
          <h2
            className={`text-3xl font-bold text-[${colorPrimary}] mb-8 text-center md:text-left`}
          >
            Edit Your Profile
          </h2>

          {/* --- Cover Image Section --- */}
          <div className="mb-8">
            <label
              className={`block text-lg font-semibold text-[${colorPrimary}] mb-3`}
            >
              Cover Image
            </label>
            {coverImageUrl &&
            coverImageUrl !== INITIAL_COVER_IMAGE_PLACEHOLDER ? (
              // Tampilkan gambar jika ada dan bukan placeholder awal
              <div className="relative group">
                <img
                  src={coverImageUrl}
                  alt="Bookstore Cover"
                  className="w-full h-48 md:h-60 object-cover rounded-lg border border-gray-300"
                  onError={(e) => {
                    // Jika ada error saat memuat gambar yang dipilih, kembali ke placeholder
                    console.error("Error loading cover image:", e);
                    setCoverImageUrl(INITIAL_COVER_IMAGE_PLACEHOLDER);
                  }}
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-300 rounded-lg cursor-pointer"
                  onClick={triggerCoverImageUpload} // Klik pada overlay juga membuka file dialog
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerCoverImageUpload();
                    }} // Hindari propagasi agar tidak memicu onClick parent dua kali
                    className={`bg-[${colorAccent}] text-black px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-150 text-sm font-medium opacity-0 group-hover:opacity-100`}
                  >
                    Change Cover Image
                  </button>
                </div>
              </div>
            ) : (
              // Tampilkan placeholder kustom jika tidak ada gambar atau gambar adalah placeholder awal
              <div
                className="w-full h-48 md:h-60 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:border-gray-400 transition-colors"
                onClick={triggerCoverImageUpload}
              >
                <svg
                  className="w-12 h-12 text-gray-400 mb-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l-3 3m3-3l3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.338 0 4.5 4.5 0 01-1.41 8.775H6.75z"
                  />
                </svg>
                <p className="text-gray-500 font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>
            )}
            <input
              type="file"
              ref={coverImageInputRef}
              onChange={handleCoverImageChange}
              accept="image/*"
              className="hidden"
              id="coverImageInput"
            />
            <p className="text-xs text-gray-500 mt-2">
              Recommended size: 1200x350 pixels.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* --- Profile Picture and Basic Info Section --- */}
            <div className="md:grid md:grid-cols-3 md:gap-10">
              <div className="md:col-span-1 space-y-6 mb-8 md:mb-0">
                <div className="text-center">
                  <label
                    htmlFor="profilePictureInput"
                    className={`block text-sm font-medium text-[${colorPrimary}] mb-2`}
                  >
                    Profile Picture
                  </label>
                  <img
                    src={profilePictureUrl}
                    alt="Profile"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover mx-auto cursor-pointer"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/160x160/E0E0E0/B0B0B0?text=Error&font=montserrat`;
                      e.target.alt = "Error loading profile picture";
                    }}
                    onClick={() =>
                      profilePictureInputRef.current &&
                      profilePictureInputRef.current.click()
                    }
                  />
                  <input
                    type="file"
                    ref={profilePictureInputRef}
                    onChange={handleProfilePictureChange}
                    accept="image/*"
                    className="hidden"
                    id="profilePictureInput"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      profilePictureInputRef.current &&
                      profilePictureInputRef.current.click()
                    }
                    className={`mt-4 text-sm bg-[${colorPrimary}] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-150`}
                  >
                    Upload New Picture
                  </button>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium text-[${colorLightText}] mb-1`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Email cannot be changed through this form.
                  </p>
                </div>
              </div>

              {/* --- Detailed Information Section --- */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className={`block text-sm font-medium text-[${colorLightText}] mb-1`}
                  >
                    Full Name
                  </label>
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
                  <label
                    htmlFor="username"
                    className={`block text-sm font-medium text-[${colorLightText}] mb-1`}
                  >
                    Username
                  </label>
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
                  <label
                    htmlFor="bio"
                    className={`block text-sm font-medium text-[${colorLightText}] mb-1`}
                  >
                    Your Bio
                  </label>
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
              <h3
                className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}
              >
                Favorite Genres
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {ALL_GENRES.map((genre) => (
                  <label
                    key={genre}
                    className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700 hover:text-[${colorPrimary}] transition-colors"
                  >
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
              <h3
                className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}
              >
                Communication Preferences
              </h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700 hover:text-[${colorPrimary}] transition-colors">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className={`h-4 w-4 rounded text-[${colorPrimary}] border-gray-300 focus:ring-[${colorAccent}]`}
                  />
                  <span>Receive monthly newsletter</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700 hover:text-[${colorPrimary}] transition-colors">
                  <input
                    type="checkbox"
                    checked={newReleaseNotifications}
                    onChange={(e) =>
                      setNewReleaseNotifications(e.target.checked)
                    }
                    className={`h-4 w-4 rounded text-[${colorPrimary}] border-gray-300 focus:ring-[${colorAccent}]`}
                  />
                  <span>
                    Get notified about new releases in your favorite genres
                  </span>
                </label>
              </div>
            </div>

            {/* --- Change Password Section --- */}
            <div className="border-t border-gray-200 pt-8">
              <h3
                className={`text-xl font-semibold text-[${colorPrimary}] mb-4`}
              >
                Change Password
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                <div>
                  <label
                    htmlFor="currentPassword"
                    className={`block text-sm font-medium text-[${colorLightText}] mb-1`}
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${colorAccent}] focus:border-[${colorAccent}] text-sm`}
                    autoComplete="current-password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="newPassword"
                    className={`block text-sm font-medium text-[${colorLightText}] mb-1`}
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${colorAccent}] focus:border-[${colorAccent}] text-sm`}
                    autoComplete="new-password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className={`block text-sm font-medium text-[${colorLightText}] mb-1`}
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-[${colorAccent}] focus:border-[${colorAccent}] text-sm`}
                    autoComplete="new-password"
                  />
                </div>
              </div>
              {newPassword &&
                confirmPassword &&
                newPassword !== confirmPassword && (
                  <p className="text-xs text-red-500 mt-2">
                    New passwords do not match.
                  </p>
                )}
            </div>

            {/* --- Action Buttons --- */}
            <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
              <NavLink to="/profile/agnesti-wulansari">
                <button
                  type="button"
                  className={`px-6 py-3 rounded-lg border border-gray-300 text-[${colorLightText}] hover:bg-gray-50 transition-colors duration-150 text-sm font-medium w-full sm:w-auto`}
                >
                  Cancel
                </button>
              </NavLink>
              <NavLink to="/profile/agnesti-wulansari">
                <button
                  type="button"
                  className={`bg-[${colorAccent}] text-black px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-150 text-sm font-medium w-full sm:w-auto`}
                >
                  Save Changes
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      {/* Success Modal */}
      {/* <div id="successModal" className="hidden fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full items-center justify-center z-50">
        <div className={`bg-white p-8 rounded-lg shadow-xl text-center border-t-4 border-[${colorAccent}]`}>
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h3 className={`text-2xl font-semibold text-[${colorPrimary}] mb-2`}>Success!</h3>
          <p className={`text-[${colorLightText}]`}>Your profile changes have been saved.</p>
        </div>
      </div> */}
    </Layout>
  );
};

export default Edit_Profile;
