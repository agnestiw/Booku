import React, { useState, useEffect, useRef } from "react";
import LayoutAdmin from "../../Components/LayoutAdmin";

// Available genres for selection
const ALL_USER_GENRES = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Science Fiction",
  "Fantasy",
  "Romance",
  "Historical Fiction",
  "Contemporary",
  "Dystopian",
  "Young Adult",
  "Biography",
  "Autobiography",
  "History",
  "Science",
  "Psychology",
  "Self-Help",
  "Business",
  "Travel",
  "Poetry",
  "Humor",
  "Comics",
];

// Initial user data
const initialUsersData = [
  {
    id: "USR-001",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    role: "Premium Customer",
    roleType: "premium-customer",
    status: "Active",
    orders: 24,
    totalSpent: "$567.89",
    joinDate: "Jan 15, 2023",
    avatar: "https://placehold.co/40x40/E9E9E9/B0B0B0?text=SJ",
    selected: false,
  },
  {
    id: "USR-002",
    name: "Michael Chen",
    email: "michael.chen@email.com",
    role: "Customer",
    roleType: "customer",
    status: "Active",
    orders: 12,
    totalSpent: "$234.56",
    joinDate: "Feb 20, 2023",
    avatar: "https://placehold.co/40x40/E9E9E9/B0B0B0?text=MC",
    selected: false,
  },
  {
    id: "USR-003",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    role: "Admin",
    roleType: "administrator",
    status: "Active",
    orders: 8,
    totalSpent: "$156.78",
    joinDate: "Mar 10, 2023",
    avatar: "https://placehold.co/40x40/E9E9E9/B0B0B0?text=ER",
    selected: false,
  },
  {
    id: "USR-004",
    name: "David Thompson",
    email: "david.thompson@email.com",
    role: "Customer",
    roleType: "customer",
    status: "Pending",
    orders: 0,
    totalSpent: "$0.00",
    joinDate: "May 22, 2025",
    avatar: "https://placehold.co/40x40/E9E9E9/B0B0B0?text=DT",
    selected: false,
  },
  {
    id: "USR-005",
    name: "Lisa Park",
    email: "lisa.park@email.com",
    role: "Customer",
    roleType: "customer",
    status: "Suspended",
    orders: 3,
    totalSpent: "$89.45",
    joinDate: "Apr 5, 2025",
    avatar: "https://placehold.co/40x40/E9E9E9/B0B0B0?text=LP",
    selected: false,
  },
];

// Initial state for Add New User form
const initialAddUserFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  username: "",
  role: "",
  password: "",
  confirmPassword: "",
  status: "active",
  emailVerified: false,
  streetAddress: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  bio: "",
  profilePicture: null,
  coverImage: null,
  favoriteGenres: [],
  language: "en",
  newsletterSubscription: true,
  newReleaseNotifications: false,
  promotionalOffers: false,
  accountActivityAlerts: true,
  twoFactorAuth: false,
  loginAlerts: true,
  adminNotes: "",
};

const Users = () => {
  const [users, setUsers] = useState(initialUsersData);
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [addUserFormData, setAddUserFormData] = useState(
    initialAddUserFormState
  );
  const [addUserFormErrors, setAddUserFormErrors] = useState({});
  const [showFormPassword, setShowFormPassword] = useState(false);
  const [showFormConfirmPassword, setShowFormConfirmPassword] = useState(false);

  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const coverImageInputRef = useRef(null);

  const [confirmationModalState, setConfirmationModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: null,
    confirmText: "Confirm",
    cancelText: "Cancel",
    showCancelButton: true,
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsersToDisplay = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  useEffect(() => {
    if (showAddUserForm) {
      setAddUserFormData(initialAddUserFormState);
      setAddUserFormErrors({});
      setShowFormPassword(false);
      setShowFormConfirmPassword(false);
      setProfilePicturePreview(null);
      setCoverImagePreview(null);
      if (coverImageInputRef.current) coverImageInputRef.current.value = "";
      const profilePicInput = document.getElementById(
        "modalProfilePictureInput"
      );
      if (profilePicInput) profilePicInput.value = "";
    }
  }, [showAddUserForm]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
    else if (users.length === 0 && currentPage !== 1) setCurrentPage(1);
    setIsSelectAllChecked(
      currentUsersToDisplay.length > 0 &&
        currentUsersToDisplay.every((user) => user.selected)
    );
  }, [currentUsersToDisplay, users, currentPage, totalPages]);

  const openConfirmationModal = (config) =>
    setConfirmationModalState({ ...config, isOpen: true });
  const closeConfirmationModal = () =>
    setConfirmationModalState({
      isOpen: false,
      title: "",
      message: "",
      onConfirm: null,
    });
  const handleConfirmAction = () => {
    if (confirmationModalState.onConfirm) confirmationModalState.onConfirm();
    closeConfirmationModal();
  };

  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    setUsers((prevUsers) => {
      const displayedUserIds = currentUsersToDisplay.map((du) => du.id);
      return prevUsers.map((user) =>
        displayedUserIds.includes(user.id)
          ? { ...user, selected: checked }
          : user
      );
    });
  };

  const handleUserCheckboxChange = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, selected: !user.selected } : user
      )
    );
  };

  const handleUserAction = (actionTitle, userName, userId) => {
    const user = users.find((u) => u.id === userId);
    if (!user) return;
    const actions = {
      "View Details": () =>
        openConfirmationModal({
          title: "View User Details",
          message: `Details for ${userName} (ID: ${userId}). Role: ${user.role}, Status: ${user.status}. (Full details page would open here).`,
          showCancelButton: false,
          confirmText: "OK",
        }),
      "Edit User": () =>
        openConfirmationModal({
          title: "Edit User",
          message: `Edit form for ${userName} would open here.`,
          showCancelButton: false,
          confirmText: "OK",
        }),
      "Send Message": () =>
        openConfirmationModal({
          title: "Send Message",
          message: `Compose message to ${userName}.`,
          showCancelButton: false,
          confirmText: "OK",
        }),
      "Suspend User": () =>
        openConfirmationModal({
          title: "Confirm Suspension",
          message: `Are you sure you want to suspend ${userName}?`,
          confirmText: "Suspend",
          onConfirm: () => {
            setUsers((prev) =>
              prev.map((u) =>
                u.id === userId
                  ? { ...u, status: "Suspended", selected: false }
                  : u
              )
            );
            openConfirmationModal({
              title: "Success",
              message: `${userName} suspended.`,
              showCancelButton: false,
              confirmText: "OK",
            });
          },
        }),
      "Approve User": () =>
        openConfirmationModal({
          title: "Confirm Approval",
          message: `Approve account for ${userName}?`,
          confirmText: "Approve",
          onConfirm: () => {
            setUsers((prev) =>
              prev.map((u) =>
                u.id === userId
                  ? { ...u, status: "Active", selected: false }
                  : u
              )
            );
            openConfirmationModal({
              title: "Success",
              message: `${userName} approved.`,
              showCancelButton: false,
              confirmText: "OK",
            });
          },
        }),
      "Reject User": () =>
        openConfirmationModal({
          title: "Confirm Rejection",
          message: `Reject account for ${userName}? This will remove the user.`,
          confirmText: "Reject",
          onConfirm: () => {
            setUsers((prev) => prev.filter((u) => u.id !== userId));
            openConfirmationModal({
              title: "Success",
              message: `User ${userName} rejected.`,
              showCancelButton: false,
              confirmText: "OK",
            });
          },
        }),
      "Reactivate User": () =>
        openConfirmationModal({
          title: "Confirm Reactivation",
          message: `Reactivate account for ${userName}?`,
          confirmText: "Reactivate",
          onConfirm: () => {
            setUsers((prev) =>
              prev.map((u) =>
                u.id === userId
                  ? { ...u, status: "Active", selected: false }
                  : u
              )
            );
            openConfirmationModal({
              title: "Success",
              message: `User ${userName} reactivated.`,
              showCancelButton: false,
              confirmText: "OK",
            });
          },
        }),
      "Delete User": () =>
        openConfirmationModal({
          title: "Confirm Deletion",
          message: `Permanently delete ${userName}? This cannot be undone.`,
          confirmText: "Delete Permanently",
          onConfirm: () => {
            setUsers((prev) => prev.filter((u) => u.id !== userId));
            openConfirmationModal({
              title: "Success",
              message: `${userName} deleted.`,
              showCancelButton: false,
              confirmText: "OK",
            });
          },
        }),
    };
    if (actions[actionTitle]) actions[actionTitle]();
  };

  const handleBulkAction = (actionType) => {
    const selectedUserObjects = users.filter((user) => user.selected);
    if (selectedUserObjects.length === 0) {
      openConfirmationModal({
        title: "No Users Selected",
        message: "Please select users first.",
        showCancelButton: false,
        confirmText: "OK",
      });
      return;
    }
    if (actionType === "Suspend") {
      openConfirmationModal({
        title: "Confirm Bulk Suspension",
        message: `Suspend ${selectedUserObjects.length} selected user(s)?`,
        confirmText: "Suspend Selected",
        onConfirm: () => {
          setUsers((prev) =>
            prev.map((u) =>
              u.selected ? { ...u, status: "Suspended", selected: false } : u
            )
          );
          openConfirmationModal({
            title: "Success",
            message: `${selectedUserObjects.length} user(s) suspended.`,
            showCancelButton: false,
            confirmText: "OK",
          });
        },
      });
    } else if (actionType === "Send Email") {
      openConfirmationModal({
        title: "Send Bulk Email",
        message: `Email compose form for ${selectedUserObjects.length} users would open.`,
        showCancelButton: false,
        confirmText: "OK",
      });
    } else if (actionType === "Export") {
      openConfirmationModal({
        title: "Export Users",
        message: `Exporting data for ${selectedUserObjects.length} users.`,
        showCancelButton: false,
        confirmText: "OK",
      });
    }
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  const handleAddUserFormChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setAddUserFormData((prev) => ({ ...prev, [name]: file }));
      if (name === "profilePicture" && file)
        setProfilePicturePreview(URL.createObjectURL(file));
      if (name === "coverImage" && file)
        setCoverImagePreview(URL.createObjectURL(file));
    } else {
      setAddUserFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
    if (addUserFormErrors[name])
      setAddUserFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const removeProfilePicture = () => {
    setAddUserFormData((prev) => ({ ...prev, profilePicture: null }));
    setProfilePicturePreview(null);
    const input = document.getElementById("modalProfilePictureInput");
    if (input) input.value = "";
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAddUserFormData((prev) => ({ ...prev, coverImage: file }));
      setCoverImagePreview(URL.createObjectURL(file));
    }
  };

  const triggerCoverImageUpload = () => {
    if (coverImageInputRef.current) coverImageInputRef.current.click();
  };

  const removeCoverImage = (e) => {
    e.stopPropagation();
    setAddUserFormData((prev) => ({ ...prev, coverImage: null }));
    setCoverImagePreview(null);
    if (coverImageInputRef.current) coverImageInputRef.current.value = "";
  };

  const handleGenreChange = (genre) => {
    setAddUserFormData((prev) => {
      const newGenres = prev.favoriteGenres.includes(genre)
        ? prev.favoriteGenres.filter((g) => g !== genre)
        : [...prev.favoriteGenres, genre];
      return { ...prev, favoriteGenres: newGenres };
    });
  };

  const validateAddUserForm = () => {
    const errors = {};
    if (!addUserFormData.firstName.trim())
      errors.firstName = "First name is required.";
    if (!addUserFormData.lastName.trim())
      errors.lastName = "Last name is required.";
    if (!addUserFormData.email.trim()) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(addUserFormData.email))
      errors.email = "Email is invalid.";
    if (!addUserFormData.username.trim())
      errors.username = "Username is required.";
    if (!addUserFormData.role) errors.role = "User role is required.";
    if (!addUserFormData.password) errors.password = "Password is required.";
    else if (addUserFormData.password.length < 6)
      errors.password = "Password must be at least 6 characters.";
    if (addUserFormData.password !== addUserFormData.confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    setAddUserFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddUserFormSubmit = (e) => {
    e.preventDefault();
    if (!validateAddUserForm()) {
      openConfirmationModal({
        title: "Validation Error",
        message: "Please fill all required fields and ensure passwords match.",
        showCancelButton: false,
        confirmText: "OK",
      });
      return;
    }
    let roleType = addUserFormData.role.toLowerCase().replace(/\s+/g, "-");
    const newUser = {
      id: `USR-${String(Date.now()).slice(-3)}${Math.floor(
        Math.random() * 100
      )}`,
      name: `${addUserFormData.firstName} ${addUserFormData.lastName}`,
      email: addUserFormData.email,
      username: addUserFormData.username,
      role: addUserFormData.role
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      roleType: roleType,
      status:
        addUserFormData.status.charAt(0).toUpperCase() +
        addUserFormData.status.slice(1),
      orders: 0,
      totalSpent: "$0.00",
      joinDate: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      avatar:
        profilePicturePreview ||
        `https://placehold.co/40x40/E9E9E9/B0B0B0?text=${addUserFormData.firstName.charAt(
          0
        )}${addUserFormData.lastName.charAt(0)}`,
      selected: false,
      coverImageUrl: coverImagePreview,
      favoriteGenres: addUserFormData.favoriteGenres,
      communicationPreferences: {
        newsletter: addUserFormData.newsletterSubscription,
        newReleases: addUserFormData.newReleaseNotifications,
        promotions: addUserFormData.promotionalOffers,
        accountAlerts: addUserFormData.accountActivityAlerts,
      },
      phone: addUserFormData.phone,
      dateOfBirth: addUserFormData.dateOfBirth,
      gender: addUserFormData.gender,
      address: {
        street: addUserFormData.streetAddress,
        city: addUserFormData.city,
        state: addUserFormData.state,
        postalCode: addUserFormData.postalCode,
        country: addUserFormData.country,
      },
      bio: addUserFormData.bio,
      languagePreference: addUserFormData.language,
      security: {
        twoFactorEnabled: addUserFormData.twoFactorAuth,
        loginAlertsEnabled: addUserFormData.loginAlerts,
      },
      adminNotes: addUserFormData.adminNotes,
      emailVerified: addUserFormData.emailVerified,
    };
    setUsers((prevUsers) => [newUser, ...prevUsers]);
    if (
      totalPages === 0 ||
      (users.length % itemsPerPage === 0 && users.length > 0)
    )
      setCurrentPage(1);
    else if (indexOfFirstItem === 0 && currentPage !== 1) setCurrentPage(1);
    setShowAddUserForm(false);
    openConfirmationModal({
      title: "User Created",
      message: `User "${newUser.name}" created successfully.`,
      showCancelButton: false,
      confirmText: "OK",
    });
  };

  const firstItemNumber = users.length > 0 ? indexOfFirstItem + 1 : 0;
  const lastItemNumber = Math.min(indexOfLastItem, users.length);
  const getStatusBadgeClass = (status) =>
    ({
      active: "bg-green-100 text-green-700",
      pending: "bg-yellow-100 text-yellow-700",
      suspended: "bg-red-100 text-red-700",
    }[status.toLowerCase()] || "bg-gray-100 text-gray-700");
  const getRoleBadgeClass = (roleType) =>
    ({
      premium: "bg-purple-100 text-purple-700",
      "premium-customer": "bg-purple-100 text-purple-700",
      customer: "bg-blue-100 text-blue-700",
      admin: "bg-red-100 text-red-700",
      administrator: "bg-red-100 text-red-700",
      editor: "bg-indigo-100 text-indigo-700",
      moderator: "bg-pink-100 text-pink-700",
      "super-admin": "bg-black text-white",
    }[roleType] || "bg-gray-100 text-gray-700");
  const renderPaginationButtons = () => {
    /* ... (pagination logic remains the same) ... */
    const pageButtons = [];
    pageButtons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || totalPages === 0}
        className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center shadow-sm"
      >
        <i className="fas fa-chevron-left" />
      </button>
    );
    let startPage, endPage;
    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }
    if (totalPages > 0) {
      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-4 py-2 border-t border-b border-gray-300 ${
              currentPage === i
                ? "bg-primary text-white border-primary font-semibold z-10"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } shadow-sm`}
          >
            {i}
          </button>
        );
      }
    }
    pageButtons.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center shadow-sm"
      >
        <i className="fas fa-chevron-right" />
      </button>
    );
    return pageButtons;
  };

  return (
    <LayoutAdmin>
      <main className="flex-1 md:ml-64 min-h-screen">
        <header className="bg-white shadow-sm py-4 px-6 hidden md:block">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-dark">Manage Users</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-64"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                  <i className="fas fa-bell text-gray-500" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
              <div className="relative">
                <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                  <i className="fas fa-envelope text-gray-500" />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    5
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold md:hidden">Manage Users</h2>
              <p className="text-gray-500">
                Oversee user accounts, set permissions, and monitor activities.
              </p>
            </div>
            <button
              onClick={() => setShowAddUserForm(true)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2"
            >
              <i className="fas fa-plus" />
              <span>Add New User</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Users</p>
                  <h3 className="text-2xl font-bold">{users.length}</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>12.5%</span>
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="fas fa-users text-blue-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Active Users</p>
                  <h3 className="text-2xl font-bold">
                    {users.filter((u) => u.status === "Active").length}
                  </h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>8.3%</span>
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <i className="fas fa-user-check text-green-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">New This Month</p>
                  <h3 className="text-2xl font-bold">
                    {
                      users.filter(
                        (u) =>
                          new Date(u.joinDate) >=
                          new Date(
                            new Date().getFullYear(),
                            new Date().getMonth(),
                            1
                          )
                      ).length
                    }
                  </h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>15.2%</span>
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="fas fa-user-plus text-purple-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Suspended</p>
                  <h3 className="text-2xl font-bold">
                    {users.filter((u) => u.status === "Suspended").length}
                  </h3>
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-down mr-1" />
                    <span>2.1%</span>
                  </p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <i className="fas fa-user-slash text-red-500 text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search users by name, email, or ID..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Suspended">Suspended</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">All Roles</option>
                  <option value="customer">Customer</option>
                  <option value="premium-customer">Premium Customer</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="moderator">Moderator</option>
                </select>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  <i className="fas fa-filter" />
                  <span className="ml-2">More Filters</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3 rounded text-primary focus:ring-primary"
                  checked={isSelectAllChecked}
                  onChange={handleSelectAllChange}
                  disabled={currentUsersToDisplay.length === 0}
                />
                <span className="text-gray-500 text-sm">Select All</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-gray-500 hover:text-primary px-2 py-1 rounded hover:bg-gray-100"
                  onClick={() => handleBulkAction("Suspend")}
                >
                  <i className="fas fa-ban" />
                  <span className="ml-1">Suspend</span>
                </button>
                <button
                  className="text-gray-500 hover:text-primary px-2 py-1 rounded hover:bg-gray-100"
                  onClick={() => handleBulkAction("Send Email")}
                >
                  <i className="fas fa-envelope" />
                  <span className="ml-1">Send Email</span>
                </button>
                <button
                  className="text-gray-500 hover:text-primary px-2 py-1 rounded hover:bg-gray-100"
                  onClick={() => handleBulkAction("Export")}
                >
                  <i className="fas fa-download" />
                  <span className="ml-1">Export</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b border-gray-200 bg-gray-50">
                    <th className="p-4 font-medium w-12">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                        checked={isSelectAllChecked}
                        onChange={handleSelectAllChange}
                        disabled={currentUsersToDisplay.length === 0}
                      />
                    </th>
                    <th className="p-4 font-medium">User</th>
                    <th className="p-4 font-medium">Email</th>
                    <th className="p-4 font-medium">Role</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Orders</th>
                    <th className="p-4 font-medium">Total Spent</th>
                    <th className="p-4 font-medium">Join Date</th>
                    <th className="p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsersToDisplay.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="p-4">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary"
                          checked={user.selected}
                          onChange={() => handleUserCheckboxChange(user.id)}
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={user.avatar}
                            alt="User"
                            className="w-10 h-10 rounded-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://placehold.co/40x40/E9E9E9/B0B0B0?text=NA";
                            }}
                          />
                          <div className="min-w-0">
                            <h4 className="font-medium truncate">
                              {user.name}
                            </h4>
                            <p className="text-sm text-gray-500 truncate">
                              ID: {user.id}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 truncate max-w-xs">{user.email}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded text-xs ${getRoleBadgeClass(
                            user.roleType
                          )}`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded text-xs ${getStatusBadgeClass(
                            user.status
                          )}`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4">{user.orders}</td>
                      <td className="p-4">{user.totalSpent}</td>
                      <td className="p-4">{user.joinDate}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            className="text-blue-500 hover:text-blue-700"
                            title="View Details"
                            onClick={() =>
                              handleUserAction(
                                "View Details",
                                user.name,
                                user.id
                              )
                            }
                          >
                            <i className="fas fa-eye" />
                          </button>
                          {user.status === "Pending" && (
                            <>
                              <button
                                className="text-green-500 hover:text-green-700"
                                title="Approve User"
                                onClick={() =>
                                  handleUserAction(
                                    "Approve User",
                                    user.name,
                                    user.id
                                  )
                                }
                              >
                                <i className="fas fa-check" />
                              </button>
                              <button
                                className="text-yellow-500 hover:text-yellow-700"
                                title="Send Message"
                                onClick={() =>
                                  handleUserAction(
                                    "Send Message",
                                    user.name,
                                    user.id
                                  )
                                }
                              >
                                <i className="fas fa-envelope" />
                              </button>
                              <button
                                className="text-red-500 hover:text-red-700"
                                title="Reject User"
                                onClick={() =>
                                  handleUserAction(
                                    "Reject User",
                                    user.name,
                                    user.id
                                  )
                                }
                              >
                                <i className="fas fa-times" />
                              </button>
                            </>
                          )}
                          {user.status === "Suspended" && (
                            <>
                              <button
                                className="text-green-500 hover:text-green-700"
                                title="Reactivate User"
                                onClick={() =>
                                  handleUserAction(
                                    "Reactivate User",
                                    user.name,
                                    user.id
                                  )
                                }
                              >
                                <i className="fas fa-user-check" />
                              </button>
                              <button
                                className="text-yellow-500 hover:text-yellow-700"
                                title="Send Message"
                                onClick={() =>
                                  handleUserAction(
                                    "Send Message",
                                    user.name,
                                    user.id
                                  )
                                }
                              >
                                <i className="fas fa-envelope" />
                              </button>
                              <button
                                className="text-red-500 hover:text-red-700"
                                title="Delete User"
                                onClick={() =>
                                  handleUserAction(
                                    "Delete User",
                                    user.name,
                                    user.id
                                  )
                                }
                              >
                                <i className="fas fa-trash-alt" />
                              </button>
                            </>
                          )}
                          {user.status !== "Pending" &&
                            user.status !== "Suspended" && (
                              <>
                                <button
                                  className="text-green-500 hover:text-green-700"
                                  title="Edit User"
                                  onClick={() =>
                                    handleUserAction(
                                      "Edit User",
                                      user.name,
                                      user.id
                                    )
                                  }
                                >
                                  <i className="fas fa-edit" />
                                </button>
                                <button
                                  className="text-yellow-500 hover:text-yellow-700"
                                  title="Send Message"
                                  onClick={() =>
                                    handleUserAction(
                                      "Send Message",
                                      user.name,
                                      user.id
                                    )
                                  }
                                >
                                  <i className="fas fa-envelope" />
                                </button>
                                <button
                                  className={`${
                                    user.roleType === "admin" ||
                                    user.roleType === "super-admin"
                                      ? "text-gray-400 cursor-not-allowed"
                                      : "text-red-500 hover:text-red-700"
                                  }`}
                                  title={
                                    user.roleType === "admin" ||
                                    user.roleType === "super-admin"
                                      ? "Cannot suspend admin"
                                      : "Suspend User"
                                  }
                                  disabled={
                                    user.roleType === "admin" ||
                                    user.roleType === "super-admin"
                                  }
                                  onClick={() =>
                                    user.roleType !== "admin" &&
                                    user.roleType !== "super-admin" &&
                                    handleUserAction(
                                      "Suspend User",
                                      user.name,
                                      user.id
                                    )
                                  }
                                >
                                  <i className="fas fa-ban" />
                                </button>
                              </>
                            )}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {currentUsersToDisplay.length === 0 && users.length > 0 && (
                    <tr>
                      <td colSpan="9" className="p-4 text-center text-gray-500">
                        No users on this page.
                      </td>
                    </tr>
                  )}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan="9" className="p-4 text-center text-gray-500">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                {users.length > 0
                  ? `Showing ${firstItemNumber} to ${lastItemNumber} of ${users.length} users`
                  : "No users to show"}
              </div>
              {users.length > 0 && totalPages > 0 && (
                <div
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  {renderPaginationButtons()}
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-dark">
                Recent User Activity
              </h3>
              <a href="#" className="text-primary hover:underline text-sm">
                View All
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <img
                  src="https://placehold.co/30x30/E9E9E9/B0B0B0?text=SJ"
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm">
                    <strong>Sarah Johnson</strong> made a purchase of $45.99
                  </p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <img
                  src="https://placehold.co/30x30/E9E9E9/B0B0B0?text=MC"
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm">
                    <strong>Michael Chen</strong> updated profile information
                  </p>
                  <p className="text-xs text-gray-500">15 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showAddUserForm && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl z-10">
              <h1 className="text-2xl font-bold text-dark">Add New User</h1>
              <button
                onClick={() => setShowAddUserForm(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="overflow-y-auto flex-grow">
              <form
                id="addUserModalForm"
                className="p-6 lg:p-8"
                onSubmit={handleAddUserFormSubmit}
                noValidate
              >
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                    <i className="fas fa-user text-primary mr-3" />
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <label
                        htmlFor="modalFirstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="modalFirstName"
                        name="firstName"
                        required
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          addUserFormErrors.firstName
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-primary"
                        }`}
                        placeholder="Enter first name"
                        value={addUserFormData.firstName}
                        onChange={handleAddUserFormChange}
                      />
                      {addUserFormErrors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {addUserFormErrors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="modalLastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="modalLastName"
                        name="lastName"
                        required
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          addUserFormErrors.lastName
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-primary"
                        }`}
                        placeholder="Enter last name"
                        value={addUserFormData.lastName}
                        onChange={handleAddUserFormChange}
                      />
                      {addUserFormErrors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {addUserFormErrors.lastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="modalEmail"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="modalEmail"
                        name="email"
                        required
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          addUserFormErrors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-primary"
                        }`}
                        placeholder="user@example.com"
                        value={addUserFormData.email}
                        onChange={handleAddUserFormChange}
                      />
                      {addUserFormErrors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {addUserFormErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="modalPhone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="modalPhone"
                        name="phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+1 (555) 123-4567"
                        value={addUserFormData.phone}
                        onChange={handleAddUserFormChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="modalDateOfBirth"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="modalDateOfBirth"
                        name="dateOfBirth"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={addUserFormData.dateOfBirth}
                        onChange={handleAddUserFormChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="modalGender"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Gender
                      </label>
                      <select
                        id="modalGender"
                        name="gender"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={addUserFormData.gender}
                        onChange={handleAddUserFormChange}
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">
                          Prefer not to say
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                    <i className="fas fa-key text-primary mr-3" />
                    Account Information
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <label
                        htmlFor="modalUsername"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Username *
                      </label>
                      <input
                        type="text"
                        id="modalUsername"
                        name="username"
                        required
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          addUserFormErrors.username
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-primary"
                        }`}
                        placeholder="Enter username"
                        value={addUserFormData.username}
                        onChange={handleAddUserFormChange}
                      />
                      {addUserFormErrors.username && (
                        <p className="text-red-500 text-xs mt-1">
                          {addUserFormErrors.username}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="modalRole"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        User Role *
                      </label>
                      <select
                        id="modalRole"
                        name="role"
                        required
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
                          addUserFormErrors.role
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-primary"
                        }`}
                        value={addUserFormData.role}
                        onChange={handleAddUserFormChange}
                      >
                        <option value="">Select role</option>
                        <option value="customer">Customer</option>
                        <option value="premium-customer">
                          Premium Customer
                        </option>
                        <option value="editor">Editor</option>
                        <option value="moderator">Moderator</option>
                        <option value="administrator">Administrator</option>
                        <option value="super-admin">Super Administrator</option>
                      </select>
                      {addUserFormErrors.role && (
                        <p className="text-red-500 text-xs mt-1">
                          {addUserFormErrors.role}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="modalPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showFormPassword ? "text" : "password"}
                          id="modalPassword"
                          name="password"
                          required
                          className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                            addUserFormErrors.password
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-primary"
                          }`}
                          placeholder="Create password"
                          value={addUserFormData.password}
                          onChange={handleAddUserFormChange}
                        />
                        <button
                          type="button"
                          onClick={() => setShowFormPassword(!showFormPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                          <i
                            className={`fas ${
                              showFormPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                        </button>
                      </div>
                      {addUserFormErrors.password && (
                        <p className="text-red-500 text-xs mt-1">
                          {addUserFormErrors.password}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="modalConfirmPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showFormConfirmPassword ? "text" : "password"}
                          id="modalConfirmPassword"
                          name="confirmPassword"
                          required
                          className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                            addUserFormErrors.confirmPassword
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-primary"
                          }`}
                          placeholder="Confirm password"
                          value={addUserFormData.confirmPassword}
                          onChange={handleAddUserFormChange}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowFormConfirmPassword(!showFormConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                          <i
                            className={`fas ${
                              showFormConfirmPassword
                                ? "fa-eye-slash"
                                : "fa-eye"
                            }`}
                          />
                        </button>
                      </div>
                      {addUserFormErrors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">
                          {addUserFormErrors.confirmPassword}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="modalStatus"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Account Status
                      </label>
                      <select
                        id="modalStatus"
                        name="status"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={addUserFormData.status}
                        onChange={handleAddUserFormChange}
                      >
                        <option value="active">Active</option>
                        <option value="pending">Pending Verification</option>
                        <option value="inactive">Inactive</option>
                        <option value="suspended">Suspended</option>
                      </select>
                    </div>
                    <div className="flex items-center pt-6">
                      <input
                        type="checkbox"
                        id="modalEmailVerified"
                        name="emailVerified"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        checked={addUserFormData.emailVerified}
                        onChange={handleAddUserFormChange}
                      />
                      <label
                        htmlFor="modalEmailVerified"
                        className="ml-2 text-sm text-gray-700"
                      >
                        Email Verified
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-3" />
                    Address Information
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="lg:col-span-2">
                      <label
                        htmlFor="modalStreetAddress"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="modalStreetAddress"
                        name="streetAddress"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter street address"
                        value={addUserFormData.streetAddress}
                        onChange={handleAddUserFormChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="modalCity"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="modalCity"
                        name="city"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter city"
                        value={addUserFormData.city}
                        onChange={handleAddUserFormChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="modalState"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        State/Province
                      </label>
                      <input
                        type="text"
                        id="modalState"
                        name="state"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter state/province"
                        value={addUserFormData.state}
                        onChange={handleAddUserFormChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="modalPostalCode"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="modalPostalCode"
                        name="postalCode"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter postal code"
                        value={addUserFormData.postalCode}
                        onChange={handleAddUserFormChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="modalCountry"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Country
                      </label>
                      <select
                        id="modalCountry"
                        name="country"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={addUserFormData.country}
                        onChange={handleAddUserFormChange}
                      >
                        <option value="">Select country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="ID">Indonesia</option>
                        <option value="GB">United Kingdom</option>
                        <option value="AU">Australia</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                    <i className="fas fa-id-card text-primary mr-3" />
                    Profile Information
                  </h2>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Picture
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-300">
                        {profilePicturePreview ? (
                          <img
                            src={profilePicturePreview}
                            alt="Profile Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <i className="fas fa-user text-gray-400 text-3xl" />
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="modalProfilePictureInput"
                          className="cursor-pointer bg-white text-primary px-4 py-2 rounded-lg border border-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                        >
                          Upload Picture
                        </label>
                        <input
                          type="file"
                          id="modalProfilePictureInput"
                          name="profilePicture"
                          accept="image/*"
                          className="hidden"
                          onChange={handleAddUserFormChange}
                        />
                        {profilePicturePreview && (
                          <button
                            type="button"
                            onClick={removeProfilePicture}
                            className="ml-3 text-xs text-red-500 hover:text-red-700 transition-colors"
                          >
                            Remove
                          </button>
                        )}
                        <p className="text-xs text-gray-500 mt-2.5">
                          PNG, JPG, GIF up to 2MB
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Cover Image Section */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Image (Optional)
                    </label>
                    {coverImagePreview ? (
                      <div className="relative group">
                        <img
                          src={coverImagePreview}
                          alt="Cover Preview"
                          className="w-full h-40 md:h-48 object-cover rounded-lg border border-gray-300"
                          onError={(e) => {
                            e.target.onerror = null;
                            setCoverImagePreview(null);
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity duration-300 rounded-lg cursor-pointer"
                          onClick={triggerCoverImageUpload}
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerCoverImageUpload();
                            }}
                            className="bg-white text-gray-700 px-3 py-1.5 rounded-md shadow-md hover:bg-gray-50 transition-opacity duration-150 text-xs font-medium opacity-0 group-hover:opacity-100 border border-gray-300"
                          >
                            Change Cover
                          </button>
                          <button
                            type="button"
                            onClick={removeCoverImage}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all text-xs"
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="w-full h-40 md:h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:border-primary transition-colors"
                        onClick={triggerCoverImageUpload}
                      >
                        <svg
                          className="w-10 h-10 text-gray-400 mb-2"
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
                        <p className="text-gray-500 font-medium text-sm">
                          Click to upload or drag & drop
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PNG, JPG, GIF up to 5MB. Recommended: 1200x300px
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={coverImageInputRef}
                      name="coverImage"
                      onChange={handleCoverImageChange}
                      accept="image/*"
                      className="hidden"
                      id="coverImageModalInput"
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="lg:col-span-2">
                      <label
                        htmlFor="modalBio"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Bio
                      </label>
                      <textarea
                        id="modalBio"
                        name="bio"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us a bit about the user..."
                        value={addUserFormData.bio}
                        onChange={handleAddUserFormChange}
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor="modalLanguageUser"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Language Preference
                      </label>
                      <select
                        id="modalLanguageUser"
                        name="language"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={addUserFormData.language}
                        onChange={handleAddUserFormChange}
                      >
                        <option value="en">English</option>
                        <option value="id">Indonesian</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Favorite Genres Section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                    <i className="fas fa-heart text-primary mr-3" />
                    Favorite Genres
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {ALL_USER_GENRES.map((genre) => (
                      <label
                        key={genre}
                        className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700 hover:text-primary transition-colors p-2 border border-gray-200 rounded-md hover:border-primary"
                      >
                        <input
                          type="checkbox"
                          checked={addUserFormData.favoriteGenres.includes(
                            genre
                          )}
                          onChange={() => handleGenreChange(genre)}
                          className="h-4 w-4 rounded text-primary border-gray-300 focus:ring-primary focus:ring-offset-0"
                        />
                        <span>{genre}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Communication Preferences Section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                    <i className="fas fa-bullhorn text-primary mr-3" />
                    Communication Preferences
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        key: "newsletterSubscription",
                        label: "Receive monthly newsletter",
                      },
                      {
                        key: "newReleaseNotifications",
                        label: "Get notified about new releases",
                      },
                      {
                        key: "promotionalOffers",
                        label: "Receive promotional offers and discounts",
                      },
                      {
                        key: "accountActivityAlerts",
                        label:
                          "Important account activity alerts (Recommended)",
                      },
                    ].map((pref) => (
                      <label
                        key={pref.key}
                        className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700"
                      >
                        <input
                          type="checkbox"
                          name={pref.key}
                          checked={addUserFormData[pref.key]}
                          onChange={handleAddUserFormChange}
                          className="h-4 w-4 rounded text-primary border-gray-300 focus:ring-primary focus:ring-offset-0"
                        />
                        <span>{pref.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Security Settings Section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                    <i className="fas fa-shield-alt text-primary mr-3" />
                    Security Settings
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="twoFactorAuth"
                        checked={addUserFormData.twoFactorAuth}
                        onChange={handleAddUserFormChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span>Enable Two-Factor Authentication (2FA)</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="loginAlerts"
                        checked={addUserFormData.loginAlerts}
                        onChange={handleAddUserFormChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span>Receive login alerts for unrecognized devices</span>
                    </label>
                  </div>
                </div>
                {/* Admin Notes Section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                    <i className="fas fa-sticky-note text-primary mr-3" />
                    Admin Notes (Internal)
                  </h2>
                  <div>
                    <label htmlFor="modalAdminNotes" className="sr-only">
                      Admin Notes
                    </label>
                    <textarea
                      id="modalAdminNotes"
                      name="adminNotes"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Add internal notes about this user..."
                      value={addUserFormData.adminNotes}
                      onChange={handleAddUserFormChange}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl sticky bottom-0 z-10">
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddUserForm(false)}
                  className="order-3 sm:order-1 w-full sm:w-auto px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="addUserModalForm"
                  className="order-1 sm:order-3 w-full sm:w-auto bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  Create User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {confirmationModalState.isOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-[70]">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {confirmationModalState.title}
            </h3>
            <p className="text-gray-700 mb-6">
              {confirmationModalState.message}
            </p>
            <div className="flex justify-end gap-3">
              {confirmationModalState.showCancelButton && (
                <button
                  onClick={closeConfirmationModal}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                >
                  {confirmationModalState.cancelText}
                </button>
              )}
              <button
                onClick={handleConfirmAction}
                className={`px-4 py-2 rounded-lg text-white transition ${
                  confirmationModalState.confirmText
                    .toLowerCase()
                    .includes("delete") ||
                  confirmationModalState.confirmText
                    .toLowerCase()
                    .includes("suspend") ||
                  confirmationModalState.confirmText
                    .toLowerCase()
                    .includes("reject")
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-primary hover:bg-opacity-90"
                }`}
              >
                {confirmationModalState.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}
    </LayoutAdmin>
  );
};

export default Users;
