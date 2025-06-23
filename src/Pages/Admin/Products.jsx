import React, { useState, useEffect, useRef } from "react"; // Tambahkan useRef
import LayoutAdmin from "../../Components/LayoutAdmin";

// Initial product data (assuming unique IDs and adding a 'checked' property)
const initialProducts = [
  {
    id: 1,
    name: "Atomic Habits",
    author: "James Clear",
    sku: "BK-001245",
    category: "Self-Improvement",
    price: "$18.99",
    stock: 245,
    status: "In Stock",
    imageUrl:
      "https://i0.wp.com/freedom.to/blog/wp-content/uploads/2018/10/Atomic_Habits-2.png?fit=1024%2C1012&ssl=1",
    checked: false,
    description: "An easy & proven way to build good habits & break bad ones.",
    publisher: "Penguin Random House",
    publicationDate: "2018-10-16",
    isbn: "978-0735211292",
    format: "Hardcover",
    language: "English",
    tags: "self-help, habits, productivity",
  },
  {
    id: 2,
    name: "The Psychology of Money",
    author: "Morgan Housel",
    sku: "BK-001246",
    category: "Business",
    price: "$15.99",
    stock: 198,
    status: "In Stock",
    imageUrl: "https://bookpadho.com/wp-content/uploads/2025/02/1740040199.png",
    checked: false,
    description: "Timeless lessons on wealth, greed, and happiness.",
    publisher: "Harriman House",
    publicationDate: "2020-09-08",
    isbn: "978-0857197689",
    format: "Paperback",
    language: "English",
    tags: "finance, psychology, investing",
  },
  {
    id: 3,
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    sku: "BK-001247",
    category: "Science",
    price: "$12.99",
    stock: 187,
    status: "In Stock",
    imageUrl: "https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png",
    checked: false,
    description:
      "A critically acclaimed book that explores the history of humankind from the Stone Age to the present day.",
    publisher: "Harvill Secker",
    publicationDate: "2011-02-10",
    isbn: "978-0062316097",
    format: "Paperback",
    language: "English",
    tags: "history, anthropology, non-fiction",
  },
  {
    id: 4,
    name: "Deep Work",
    author: "Cal Newport",
    sku: "BK-001248",
    category: "Self-Improvement",
    price: "$14.99",
    stock: 156,
    status: "In Stock",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/VN/TG/LW/147952517/new-product.jpeg",
    checked: false,
    description: "Rules for focused success in a distracted world.",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    isbn: "978-1455586691",
    format: "Hardcover",
    language: "English",
    tags: "productivity, focus, self-help",
  },
  {
    id: 5,
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    sku: "BK-001249",
    category: "Business",
    price: "$14.99",
    stock: 0,
    status: "Out of Stock",
    imageUrl:
      "https://www.richdad.com/MediaLibrary/RichDad/Images/3d-books/2020/front-covers/3d-front-RDPD.png",
    checked: false,
    description:
      "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    publisher: "Plata Publishing",
    publicationDate: "2017-04-11", // 20th Anniversary Edition
    isbn: "978-1612680194",
    format: "Paperback",
    language: "English",
    tags: "finance, personal finance, investing",
  },
  {
    id: 6,
    name: "Moon",
    author: "Tere Liye",
    sku: "BK-001250",
    category: "Self-Improvement",
    price: "$13.99",
    stock: 12,
    status: "Low Stock",
    imageUrl:
      "https://inc.mizanstore.com/aassets/img/com_cart/produk/moon-edisi-inggris-bulan.jpg",
    checked: false,
    description: "A Counterintuitive Approach to Living a Good Life.",
    publisher: "HarperOne",
    publicationDate: "2016-09-13",
    isbn: "978-0062457714",
    format: "Paperback",
    language: "English",
    tags: "self-help, motivation, psychology",
  },
  {
    id: 7,
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    sku: "BK-001251",
    category: "Psychology",
    price: "$16.99",
    stock: 89,
    status: "In Stock",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
    checked: false,
    description:
      "A Nobel laureate explains the two systems that drive the way we think.",
    publisher: "Farrar, Straus and Giroux",
    publicationDate: "2011-10-25",
    isbn: "978-0374533557",
    format: "Paperback",
    language: "English",
    tags: "psychology, decision-making, behavioral economics",
  },
  {
    id: 8,
    name: "Dune",
    author: "Frank Herbert",
    sku: "BK-001252",
    category: "Fiction",
    price: "$12.99",
    stock: 67,
    status: "In Stock",
    imageUrl:
      "https://kadribooks.com/cdn/shop/files/Dune_by_Frank_Herbert.webp?v=1733459866",
    checked: false,
    description:
      "A science fiction masterpiece set in the distant future amidst a feudal interstellar society.",
    publisher: "Ace Books",
    publicationDate: "1965-08-01", // Original publication
    isbn: "978-0441172719", // A common paperback edition
    format: "Paperback",
    language: "English",
    tags: "science fiction, classic, epic",
  },
];

// --- AddProductForm Component (UPDATED) ---
const AddProductForm = ({ onClose, onAddProduct, onSaveDraft, openModal }) => {
  const initialFormData = {
    title: "",
    author: "",
    isbn: "",
    publisher: "",
    publicationDate: "",
    description: "",
    category: "",
    language: "English",
    format: "",
    tags: "",
    pages: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    price: "",
    comparePrice: "",
    stock: "",
    sku: "",
    lowStockAlert: "5",
    trackQuantity: true,
    status: "active", // Default status 'active' (untuk publish) atau 'draft'
    visibility: "public",
    featured: false,
    allowReviews: true,
    mainImage: null,
    additionalImages: [], // Ini akan menyimpan objek File
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [additionalImagesPreview, setAdditionalImagesPreview] = useState([]); // Ini menyimpan URL preview
  const [isMainDragging, setIsMainDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const MAX_ADDITIONAL_IMAGES = 8;
  const DESCRIPTION_MAX_LENGTH = 500;

  const mainImageUploadRef = useRef(null); // Ref for main image drop zone

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "mainImage") {
      if (files && files[0]) {
        setFormData((prev) => ({ ...prev, mainImage: files[0] }));
        setMainImagePreview(URL.createObjectURL(files[0]));
        if (formErrors.mainImage)
          setFormErrors((prev) => ({ ...prev, mainImage: "" }));
      }
    } else if (name === "description") {
      let descValue = value;
      if (descValue.length > DESCRIPTION_MAX_LENGTH) {
        descValue = descValue.substring(0, DESCRIPTION_MAX_LENGTH);
      }
      setFormData((prev) => ({ ...prev, [name]: descValue }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

    if (formErrors[name] && name !== "mainImage") {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errors = { ...formErrors };
    const requiredFields = [
      "title",
      "author",
      "isbn",
      "category",
      "format",
      "price",
      "stock",
    ];

    if (requiredFields.includes(name) && !value.trim()) {
      errors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required.`;
    } else {
      delete errors[name]; // Clear error if valid or not a required field for this check
    }

    if (name === "isbn" && value.trim()) {
      const isbnPattern =
        /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
      if (!isbnPattern.test(value.replace(/[- ]/g, ""))) {
        errors.isbn = "Please enter a valid ISBN format.";
      } else {
        delete errors.isbn;
      }
    }
    setFormErrors(errors);

    // Auto-generate SKU on blur of title or author
    if (
      (name === "title" || name === "author") &&
      formData.title.trim() &&
      formData.author.trim() &&
      !formData.sku
    ) {
      generateSKUInternal(
        name === "title" ? value : formData.title,
        name === "author" ? value : formData.author
      );
    }
  };

  const generateSKUInternal = (title, author) => {
    const titleTrimmed = title.trim();
    const authorTrimmed = author.trim();
    if (titleTrimmed && authorTrimmed) {
      // Check if SKU is still empty in current formData
      const titlePart = titleTrimmed
        .substring(0, 3)
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
      const authorPart = authorTrimmed
        .substring(0, 3)
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
      const randomPart = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0");
      setFormData((prev) => ({
        ...prev,
        sku: `${titlePart}${authorPart}${randomPart}`,
      }));
    }
  };

  const handleMainImageDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMainDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0] && files[0].type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, mainImage: files[0] }));
      setMainImagePreview(URL.createObjectURL(files[0]));
      if (formErrors.mainImage)
        setFormErrors((prev) => ({ ...prev, mainImage: "" }));
    }
  };

  const handleAdditionalFileChange = (index, file) => {
    if (file && file.type.startsWith("image/")) {
      const newAdditionalImages = [...formData.additionalImages];
      const newPreviews = [...additionalImagesPreview];

      newAdditionalImages[index] = file;
      newPreviews[index] = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        additionalImages: newAdditionalImages,
      }));
      setAdditionalImagesPreview(newPreviews);
    }
  };

  const addImageSlot = () => {
    if (additionalImagesPreview.length < MAX_ADDITIONAL_IMAGES) {
      setAdditionalImagesPreview((prev) => [...prev, null]);
      setFormData((prev) => ({
        ...prev,
        additionalImages: [...prev.additionalImages, null],
      }));
    }
  };

  const removeMainImage = () => {
    setFormData((prev) => ({ ...prev, mainImage: null }));
    setMainImagePreview(null);
    const mainImageInput = document.getElementById("mainImageModalInput");
    if (mainImageInput) mainImageInput.value = "";
  };

  const removeAdditionalImage = (index) => {
    const newAdditionalImages = formData.additionalImages.filter(
      (_, i) => i !== index
    );
    const newPreviews = additionalImagesPreview.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, additionalImages: newAdditionalImages }));
    setAdditionalImagesPreview(newPreviews);
    // Reset file input if necessary, though typically not needed when managing files via state
    const fileInput = document.getElementById(
      `additionalImageModalInput-${index}`
    );
    if (fileInput) fileInput.value = "";
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title.trim()) errors.title = "Book title is required";
    if (!formData.author.trim()) errors.author = "Author name is required";

    if (!formData.isbn.trim()) {
      errors.isbn = "ISBN is required";
    } else {
      const isbnPattern =
        /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
      if (!isbnPattern.test(formData.isbn.replace(/[- ]/g, ""))) {
        errors.isbn = "Please enter a valid ISBN format.";
      }
    }

    if (!formData.category) errors.category = "Please select a category";
    if (!formData.format) errors.format = "Please select a format";
    if (!formData.price || parseFloat(formData.price) <= 0)
      errors.price = "Valid price is required";
    if (formData.stock === "" || parseInt(formData.stock) < 0)
      errors.stock = "Valid stock quantity is required";
    if (!formData.mainImage && !mainImagePreview)
      // Check if mainImage (File object) exists
      errors.mainImage = "Main product image is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      openModal({
        title: "Validation Error",
        message: "Please fill in all required fields correctly.",
        showCancelButton: false,
        confirmText: "OK",
      });
      return;
    }
    setIsSubmitting(true);
    // Simulate API call for adding product
    // In a real app, onAddProduct would likely be an async function
    try {
      await onAddProduct({ ...formData, status: "active" }); // Ensure status is 'active' for direct add
    } catch (error) {
      openModal({
        title: "Error",
        message: "Failed to add product. Please try again.",
        showCancelButton: false,
        confirmText: "OK",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDraft = async () => {
    // Basic validation, can be less strict than full submission
    if (!formData.title.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        title: "Book title is required to save a draft.",
      }));
      openModal({
        title: "Cannot Save Draft",
        message: "Book title is required to save a draft.",
        showCancelButton: false,
        confirmText: "OK",
      });
      return;
    }
    setIsSavingDraft(true);
    const draftData = { ...formData, status: "draft" };
    // In a real app, onSaveDraft would likely be an async function
    try {
      if (onSaveDraft) {
        // Check if onSaveDraft prop is provided
        await onSaveDraft(draftData);
      } else {
        // Fallback if onSaveDraft is not implemented in parent:
        console.log(
          "Draft data (no actual save function provided):",
          draftData
        );
        openModal({
          title: "Save as Draft",
          message:
            "Product data logged as draft (actual save functionality pending parent implementation).",
          showCancelButton: false,
          confirmText: "OK",
        });
        onClose(); // Close the form as per original behavior
      }
    } catch (error) {
      openModal({
        title: "Error",
        message: "Failed to save draft. Please try again.",
        showCancelButton: false,
        confirmText: "OK",
      });
    } finally {
      setIsSavingDraft(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-dark">Add New Product</h1>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              disabled={isSubmitting || isSavingDraft}
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-600">
            Create a new book listing for your store. Fields marked with * are
            required.
          </p>
        </div>

        {/* Scrollable Form Content */}
        <div className="overflow-y-auto flex-grow">
          <form
            id="addProductFormInModal"
            className="p-6 lg:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Basic Information Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                <i className="fas fa-info-circle text-primary mr-2" />
                Basic Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
                <div className="lg:col-span-2">
                  <label
                    htmlFor="titleModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Book Title *
                  </label>
                  <input
                    type="text"
                    id="titleModal"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      formErrors.title
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                    placeholder="Enter book title"
                  />
                  {formErrors.title && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.title}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="authorModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Author *
                  </label>
                  <input
                    type="text"
                    id="authorModal"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      formErrors.author
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                    placeholder="Enter author name"
                  />
                  {formErrors.author && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.author}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="isbnModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    ISBN *
                  </label>
                  <input
                    type="text"
                    id="isbnModal"
                    name="isbn"
                    value={formData.isbn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      formErrors.isbn
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                    placeholder="978-0-123456-78-9"
                  />
                  {formErrors.isbn && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.isbn}
                    </p>
                  )}
                </div>
                {/* ... other basic info fields ... */}
                <div>
                  <label
                    htmlFor="publisherModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Publisher
                  </label>
                  <input
                    type="text"
                    id="publisherModal"
                    name="publisher"
                    value={formData.publisher}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      formErrors.publisher
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                    placeholder="Enter publisher name"
                  />
                  {formErrors.publisher && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.publisher}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="publicationDateModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Publication Date
                  </label>
                  <input
                    type="date"
                    id="publicationDateModal"
                    name="publicationDate"
                    value={formData.publicationDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      formErrors.publicationDate
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                  />
                  {formErrors.publicationDate && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.publicationDate}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-2">
                  <label
                    htmlFor="descriptionModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="descriptionModal"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={3}
                    maxLength={DESCRIPTION_MAX_LENGTH}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="Enter book description..."
                  ></textarea>
                  <p
                    className={`text-xs mt-1 ${
                      formData.description.length >= DESCRIPTION_MAX_LENGTH
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {formData.description.length}/{DESCRIPTION_MAX_LENGTH}{" "}
                    characters
                  </p>
                </div>
              </div>
            </div>

            {/* Category and Classification */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                <i className="fas fa-tags text-primary mr-2" />
                Category & Classification
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-4">
                <div>
                  <label
                    htmlFor="categoryModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category *
                  </label>
                  <select
                    id="categoryModal"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
                      formErrors.category
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                  >
                    <option value="">Select category</option>
                    <option value="Self-Improvement">Self-Improvement</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Business">Business</option>
                    <option value="Science">Science</option>
                    <option value="Biography">Biography</option>
                    <option value="History">History</option>
                    <option value="Psychology">Psychology</option>
                  </select>
                  {formErrors.category && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.category}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="languageModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Language
                  </label>
                  <select
                    id="languageModal"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white"
                  >
                    <option value="English">English</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="formatModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Format *
                  </label>
                  <select
                    id="formatModal"
                    name="format"
                    value={formData.format}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
                      formErrors.format
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                  >
                    <option value="">Select format</option>
                    <option value="Hardcover">Hardcover</option>
                    <option value="Paperback">Paperback</option>
                    <option value="E-book">E-book</option>
                    <option value="Audiobook">Audiobook</option>
                  </select>
                  {formErrors.format && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.format}
                    </p>
                  )}
                </div>
                <div className="lg:col-span-3">
                  <label
                    htmlFor="tagsModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tagsModal"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="e.g., adventure, bestseller, programming"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate multiple tags with commas
                  </p>
                </div>
              </div>
            </div>

            {/* Physical Details */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                <i className="fas fa-ruler text-primary mr-2" /> Physical
                Details
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-4">
                <div>
                  <label
                    htmlFor="pagesModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pages
                  </label>
                  <input
                    type="number"
                    id="pagesModal"
                    name="pages"
                    value={formData.pages}
                    onChange={handleChange}
                    min={1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label
                    htmlFor="weightModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Weight (g)
                  </label>
                  <input
                    type="number"
                    id="weightModal"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    min={0}
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0.0"
                  />
                </div>
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dimensions (cm)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="number"
                      id="lengthModal"
                      name="length"
                      value={formData.length}
                      onChange={handleChange}
                      min={0}
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="L"
                    />
                    <input
                      type="number"
                      id="widthModal"
                      name="width"
                      value={formData.width}
                      onChange={handleChange}
                      min={0}
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="W"
                    />
                    <input
                      type="number"
                      id="heightModal"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      min={0}
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="H"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing and Inventory */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                <i className="fas fa-dollar-sign text-primary mr-2" /> Pricing &
                Inventory
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-4">
                <div>
                  <label
                    htmlFor="priceModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    id="priceModal"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    min={0}
                    step="0.01"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      formErrors.price
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                    placeholder="0.00"
                  />
                  {formErrors.price && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.price}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="comparePriceModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Compare at Price ($)
                  </label>
                  <input
                    type="number"
                    id="comparePriceModal"
                    name="comparePrice"
                    value={formData.comparePrice}
                    onChange={handleChange}
                    min={0}
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label
                    htmlFor="stockModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Stock Quantity *
                  </label>
                  <input
                    type="number"
                    id="stockModal"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    min={0}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      formErrors.stock
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-primary"
                    }`}
                    placeholder="0"
                  />
                  {formErrors.stock && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.stock}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="skuModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    SKU
                  </label>
                  <input
                    type="text"
                    id="skuModal"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Auto-generated or enter SKU"
                  />
                  {formErrors.sku && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.sku}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lowStockAlertModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Low Stock Alert
                  </label>
                  <input
                    type="number"
                    id="lowStockAlertModal"
                    name="lowStockAlert"
                    value={formData.lowStockAlert}
                    onChange={handleChange}
                    min={0}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="5"
                  />
                </div>
                <div className="flex items-center pt-5">
                  <input
                    type="checkbox"
                    id="trackQuantityModal"
                    name="trackQuantity"
                    checked={formData.trackQuantity}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="trackQuantityModal"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Track quantity
                  </label>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                <i className="fas fa-images text-primary mr-2" />
                Product Images
              </h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Main Product Image *
                </label>
                <div
                  ref={mainImageUploadRef}
                  onDrop={handleMainImageDrop}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsMainDragging(true);
                  }}
                  onDragLeave={(e) => {
                    e.preventDefault();
                    setIsMainDragging(false);
                  }}
                  className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer
                    ${
                      isMainDragging
                        ? "border-primary bg-primary/10"
                        : "hover:border-primary"
                    }
                    ${
                      formErrors.mainImage
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  onClick={() =>
                    document.getElementById("mainImageModalInput").click()
                  } // Trigger file input on click
                >
                  {mainImagePreview ? (
                    <div className="relative group">
                      <img
                        src={mainImagePreview}
                        alt="Main preview"
                        className="mx-auto max-h-40 rounded-md mb-2 object-contain"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeMainImage();
                        }}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center opacity-75 group-hover:opacity-100 transition-opacity text-xs"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  ) : (
                    <div>
                      {" "}
                      {/* Removed label for direct click on div */}
                      <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                      <p className="text-gray-600 text-sm mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  )}
                  <input
                    type="file"
                    id="mainImageModalInput"
                    name="mainImage" // Keep name for handleChange if used, though direct set is fine too
                    accept="image/*"
                    onChange={handleChange} // Use general handleChange
                    className="hidden"
                  />
                </div>
                {formErrors.mainImage && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.mainImage}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Images (Max {MAX_ADDITIONAL_IMAGES})
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {additionalImagesPreview.map((previewUrl, index) => (
                    <div
                      key={index}
                      className="border border-dashed border-gray-300 rounded-lg p-2 text-center relative group aspect-square flex items-center justify-center"
                    >
                      {previewUrl ? (
                        <>
                          <img
                            src={previewUrl}
                            alt={`Preview ${index + 1}`}
                            className="max-h-full max-w-full object-contain rounded-md"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeAdditionalImage(index);
                            }}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center opacity-75 group-hover:opacity-100 transition-opacity text-xs"
                          >
                            <i className="fas fa-times text-xs"></i>
                          </button>
                        </>
                      ) : (
                        <label
                          htmlFor={`additionalImageModalInput-${index}`}
                          className="cursor-pointer flex flex-col items-center justify-center h-full w-full"
                        >
                          <i className="fas fa-plus text-gray-400 text-xl"></i>
                          <span className="text-xs text-gray-500 mt-1">
                            Add Image
                          </span>
                        </label>
                      )}
                      <input
                        type="file"
                        id={`additionalImageModalInput-${index}`}
                        accept="image/*"
                        onChange={(e) =>
                          handleAdditionalFileChange(index, e.target.files[0])
                        }
                        className="hidden"
                      />
                    </div>
                  ))}
                  {additionalImagesPreview.length < MAX_ADDITIONAL_IMAGES && (
                    <button
                      type="button"
                      onClick={addImageSlot}
                      className="border-2 border-dashed border-gray-300 rounded-lg p-2 text-center hover:border-primary transition-colors flex flex-col items-center justify-center aspect-square text-gray-500 hover:text-primary"
                    >
                      <i className="fas fa-plus-circle text-2xl"></i>
                      <span className="text-xs mt-1">Add Slot</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Status and Visibility */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-dark mb-4 flex items-center">
                <i className="fas fa-eye text-primary mr-2" /> Status &
                Visibility
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <label
                    htmlFor="statusModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Product Status
                  </label>
                  <select
                    id="statusModal"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option value="active">Active (Publish)</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="visibilityModal"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Visibility
                  </label>
                  <select
                    id="visibilityModal"
                    name="visibility"
                    value={formData.visibility}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option value="public">Public</option>
                    <option value="private">Private (Hidden)</option>
                    <option value="password">Password Protected</option>
                  </select>
                </div>
                <div className="flex items-center pt-2">
                  <input
                    type="checkbox"
                    id="featuredModal"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="featuredModal"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Featured Product
                  </label>
                </div>
                <div className="flex items-center pt-2">
                  <input
                    type="checkbox"
                    id="allowReviewsModal"
                    name="allowReviews"
                    checked={formData.allowReviews}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="allowReviewsModal"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Allow Customer Reviews
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Modal Footer / Form Actions */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting || isSavingDraft}
              className="order-3 sm:order-1 w-full sm:w-auto px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveDraft}
              disabled={isSubmitting || isSavingDraft}
              className="order-2 sm:order-2 w-full sm:w-auto bg-gray-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:bg-gray-400"
            >
              {isSavingDraft ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2" />
                  Saving Draft...
                </>
              ) : (
                "Save as Draft"
              )}
            </button>
            <button
              type="submit"
              form="addProductFormInModal"
              disabled={isSubmitting || isSavingDraft}
              className="order-1 sm:order-3 w-full sm:w-auto bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:bg-blue-300"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2" />
                  Adding Product...
                </>
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Products Component (Minor adjustments for onSaveDraft and example product data) ---
const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectAll, setSelectAll] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: null,
    confirmText: "Confirm",
    cancelText: "Cancel",
    showCancelButton: true,
  });
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setSelectAll(products.every((p) => p.checked));
    } else {
      setSelectAll(false);
    }
  }, [products]);

  const handleSelectAll = () => {
    const newSelectAllState = !selectAll;
    setSelectAll(newSelectAllState);
    setProducts(products.map((p) => ({ ...p, checked: newSelectAllState })));
  };

  const handleProductCheck = (productId) => {
    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, checked: !p.checked } : p
      )
    );
  };

  const openModal = ({
    title,
    message,
    onConfirm,
    confirmText = "Confirm",
    cancelText = "Cancel",
    showCancelButton = true,
  }) => {
    setModalState({
      isOpen: true,
      title,
      message,
      onConfirm,
      confirmText,
      cancelText,
      showCancelButton,
    });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, title: "", message: "", onConfirm: null });
  };

  const handleModalConfirm = () => {
    if (modalState.onConfirm) {
      modalState.onConfirm();
    }
    closeModal();
  };

  const handleDeleteProduct = (productId) => {
    const productToDelete = products.find((p) => p.id === productId);
    openModal({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete "${productToDelete?.name}"?`,
      onConfirm: () => {
        setProducts(products.filter((p) => p.id !== productId));
        openModal({
          title: "Success",
          message: `Product "${productToDelete?.name}" has been deleted.`,
          showCancelButton: false,
          confirmText: "OK",
        });
      },
      confirmText: "Delete",
    });
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((p) => p.id === productId);
    // In a real app, you might open the AddProductForm pre-filled with productToEdit data
    // For now, let's simulate opening the form with existing data.
    // This would require passing initialData to AddProductForm and handling an 'editMode'.
    openModal({
      title: "Edit Product",
      message: `Edit form for "${productToEdit?.name}" would open here. (Functionality to prefill form for edit not fully implemented in this example, but you would pass product data to the form component).`,
      showCancelButton: false,
      confirmText: "OK",
    });
    // Example:
    // 1. Add an 'editingProduct' state to Products component.
    // 2. Set 'editingProduct' here.
    // 3. Pass 'editingProduct' to AddProductForm.
    // 4. AddProductForm useEffect watches for 'editingProduct' prop to prefill its formData.
    // 5. Change "Add Product" button text to "Update Product" and change onSubmit handler.
  };

  const handleViewProduct = (productId) => {
    const productToView = products.find((p) => p.id === productId);
    // Create a more detailed message for viewing
    let message = `Details for "${productToView?.name}":\n`;
    message += `SKU: ${productToView?.sku}\n`;
    message += `Price: ${productToView?.price}\n`;
    message += `Stock: ${productToView?.stock}\n`;
    message += `Category: ${productToView?.category}\n`;
    message += `ISBN: ${productToView?.isbn}\n`;
    message += `Description: ${
      productToView?.description?.substring(0, 100) +
      (productToView?.description?.length > 100 ? "..." : "")
    }\n`;
    // ... add more fields as needed

    openModal({
      title: `View Product: ${productToView?.name}`,
      message: <pre className="whitespace-pre-wrap text-sm">{message}</pre>, // Use pre for formatting
      showCancelButton: false,
      confirmText: "Close",
    });
  };

  const handleDeleteSelected = () => {
    const selectedProducts = products.filter((p) => p.checked);
    if (selectedProducts.length === 0) {
      openModal({
        title: "No Selection",
        message: "Please select products to delete.",
        showCancelButton: false,
        confirmText: "OK",
      });
      return;
    }
    openModal({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete ${selectedProducts.length} selected product(s)?`,
      onConfirm: () => {
        setProducts(products.filter((p) => !p.checked));
        openModal({
          title: "Success",
          message: `${selectedProducts.length} product(s) have been deleted.`,
          showCancelButton: false,
          confirmText: "OK",
        });
      },
      confirmText: "Delete Selected",
    });
  };

  const toggleAddProductForm = () => {
    setShowAddProductForm(!showAddProductForm);
  };

  const handleAddProductToList = (newProductData) => {
    // This function is called when AddProductForm submits successfully
    // It simulates adding the product and then gives feedback.
    // In a real app, this would likely involve an API call.
    return new Promise((resolve) => {
      // Return a promise to allow AddProductForm to await
      console.log("Adding product:", newProductData);
      // Simulate API delay
      setTimeout(() => {
        const productToAdd = {
          ...newProductData, // formData from AddProductForm
          id: Date.now(), // Simple unique ID
          checked: false,
          name: newProductData.title, // ensure name is set from title
          // Derive imageUrl from mainImage File object
          imageUrl:
            newProductData.mainImage && newProductData.mainImage instanceof File
              ? URL.createObjectURL(newProductData.mainImage)
              : "https://placehold.co/45x60/E9E9E9/B0B0B0?text=New+Book",
          // Price might already be a number, ensure it's formatted for display if needed
          price:
            typeof newProductData.price === "number"
              ? `$${newProductData.price.toFixed(2)}`
              : `$${parseFloat(newProductData.price || 0).toFixed(2)}`,
          stock: parseInt(newProductData.stock, 10) || 0,
          // Determine status based on stock and lowStockAlert, but also respect explicitly set status from form
          status:
            newProductData.status === "draft"
              ? "Draft"
              : parseInt(newProductData.stock, 10) === 0
              ? "Out of Stock"
              : parseInt(newProductData.stock, 10) <
                (parseInt(newProductData.lowStockAlert, 10) || 5)
              ? "Low Stock"
              : "In Stock",
        };
        setProducts((prevProducts) => [productToAdd, ...prevProducts]);
        setShowAddProductForm(false); // Close the form
        openModal({
          title: "Success",
          message: `Product "${productToAdd.name}" added successfully!`,
          showCancelButton: false,
          confirmText: "OK",
        });
        resolve(); // Resolve the promise
      }, 1500); // Simulate 1.5 second API call
    });
  };

  const handleSaveProductDraftToList = (draftData) => {
    // This function is called when AddProductForm saves a draft
    return new Promise((resolve) => {
      console.log("Saving draft:", draftData);
      setTimeout(() => {
        const productToSaveAsDraft = {
          ...draftData,
          id: draftData.id || Date.now(), // Use existing ID if editing, or new if creating
          checked: false,
          name: draftData.title,
          imageUrl:
            draftData.mainImage && draftData.mainImage instanceof File
              ? URL.createObjectURL(draftData.mainImage)
              : draftData.imageUrl ||
                "https://placehold.co/45x60/E9E9E9/B0B0B0?text=Draft",
          price:
            typeof draftData.price === "number"
              ? `$${draftData.price.toFixed(2)}`
              : `$${parseFloat(draftData.price || 0).toFixed(2)}`,
          stock: parseInt(draftData.stock, 10) || 0,
          status: "Draft", // Explicitly set status to Draft
        };

        // If editing an existing draft, update it. Otherwise, add new.
        setProducts((prevProducts) => {
          const existingIndex = prevProducts.findIndex(
            (p) => p.id === productToSaveAsDraft.id
          );
          if (existingIndex > -1) {
            const updatedProducts = [...prevProducts];
            updatedProducts[existingIndex] = productToSaveAsDraft;
            return updatedProducts;
          }
          return [productToSaveAsDraft, ...prevProducts];
        });

        setShowAddProductForm(false); // Close the form
        openModal({
          title: "Draft Saved",
          message: `Product "${productToSaveAsDraft.name}" saved as draft!`,
          showCancelButton: false,
          confirmText: "OK",
        });
        resolve();
      }, 1000);
    });
  };

  return (
    <LayoutAdmin>
      <main className="flex-1 md:ml-64 min-h-screen bg-gray-100">
        {" "}
        {/* Added bg-gray-100 */}
        {/* Top Header */}
        <header className="bg-white shadow-sm py-4 px-6 hidden md:block sticky top-0 z-40">
          {" "}
          {/* Made sticky */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-dark">Manage Products</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                  <i className="fas fa-bell text-gray-500 text-lg" />{" "}
                  {/* Increased size */}
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>{" "}
                  {/* Ping style */}
                </button>
              </div>
              <div className="relative">
                <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                  <i className="fas fa-user-circle text-gray-500 text-2xl" />{" "}
                  {/* Profile icon */}
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* Products Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-dark md:hidden">
                Manage Products
              </h2>{" "}
              {/* Adjusted for mobile */}
              <p className="text-gray-600 text-sm">
                {" "}
                {/* Darker gray */}
                Manage your book inventory, add new products, and update
                existing ones.
              </p>
            </div>
            <button
              onClick={toggleAddProductForm}
              className="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <i className="fas fa-plus" />
              <span>Add New Product</span>
            </button>
          </div>
          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            {" "}
            {/* Enhanced shadow */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products by name, author, SKU, ISBN..."
                    className="w-full py-2.5 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <select className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">All Categories</option>
                  {/* Dynamically populate categories from products or a predefined list */}
                  {[...new Set(products.map((p) => p.category))].map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <select className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">All Status</option>
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Draft">Draft</option>
                </select>
                <button className="w-full sm:w-auto bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition flex items-center justify-center">
                  <i className="fas fa-filter mr-2" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>
          {/* Products Table */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-6">
            {" "}
            {/* Enhanced shadow */}
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50">
              {" "}
              {/* Light bg for header actions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="selectAllProductsTable"
                  className="mr-3 h-4 w-4 rounded text-primary focus:ring-primary border-gray-300"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  disabled={products.length === 0}
                />
                <label
                  htmlFor="selectAllProductsTable"
                  className="text-gray-600 text-sm cursor-pointer"
                >
                  Select All
                </label>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="text-red-500 hover:text-red-700 px-3 py-1.5 rounded hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent text-sm flex items-center gap-1.5"
                  onClick={handleDeleteSelected}
                  disabled={!products.some((p) => p.checked)}
                >
                  <i className="fas fa-trash-alt" />
                  <span>Delete Selected</span>
                </button>
                <button className="text-blue-500 hover:text-blue-700 px-3 py-1.5 rounded hover:bg-blue-50 text-sm flex items-center gap-1.5">
                  <i className="fas fa-download" />
                  <span>Export</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                {" "}
                {/* min-w for better responsiveness */}
                <thead className="bg-gray-100">
                  <tr className="text-left text-gray-600 text-xs uppercase tracking-wider">
                    {" "}
                    {/* Adjusted header style */}
                    <th className="p-4 font-semibold w-12">
                      <input
                        type="checkbox"
                        aria-label="Select all products in table"
                        className="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        disabled={products.length === 0}
                      />
                    </th>
                    <th className="p-4 font-semibold">Product</th>
                    <th className="p-4 font-semibold">SKU</th>
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Price</th>
                    <th className="p-4 font-semibold">Stock</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {" "}
                  {/* Added divide for rows */}
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className={`hover:bg-gray-50 transition-colors ${
                        product.checked ? "bg-blue-50" : ""
                      }`}
                    >
                      <td className="p-4">
                        <input
                          type="checkbox"
                          aria-label={`Select product ${product.name}`}
                          className="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300"
                          checked={product.checked}
                          onChange={() => handleProductCheck(product.id)}
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-10 h-14 object-cover rounded-md shadow-sm" // Slightly larger, added shadow
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://placehold.co/40x56/E9E9E9/B0B0B0?text=N/A"; // Adjusted placeholder
                            }}
                          />
                          <div>
                            <h4 className="font-medium text-sm text-dark whitespace-nowrap">
                              {product.name}
                            </h4>
                            <p className="text-xs text-gray-500 whitespace-nowrap">
                              {product.author}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        {product.sku}
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        {product.category}
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        {product.price}
                      </td>
                      <td className="p-4 text-sm text-gray-700 text-center">
                        {product.stock}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            product.status === "In Stock"
                              ? "bg-green-100 text-green-700"
                              : product.status === "Low Stock"
                              ? "bg-yellow-100 text-yellow-700"
                              : product.status === "Out of Stock"
                              ? "bg-red-100 text-red-700"
                              : product.status === "Draft"
                              ? "bg-gray-200 text-gray-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-3 justify-center items-center">
                          {" "}
                          {/* Centered actions */}
                          <button
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                            onClick={() => handleEditProduct(product.id)}
                            aria-label={`Edit ${product.name}`}
                            title="Edit Product"
                          >
                            <i className="fas fa-edit text-base"></i>{" "}
                            {/* Slightly larger icon */}
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700 transition-colors"
                            onClick={() => handleDeleteProduct(product.id)}
                            aria-label={`Delete ${product.name}`}
                            title="Delete Product"
                          >
                            <i className="fas fa-trash-alt text-base"></i>
                          </button>
                          <button
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                            onClick={() => handleViewProduct(product.id)}
                            aria-label={`View ${product.name}`}
                            title="View Product"
                          >
                            <i className="fas fa-eye text-base"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr>
                      <td colSpan="8" className="p-8 text-center text-gray-500">
                        {" "}
                        {/* Increased padding */}
                        <i className="fas fa-box-open text-3xl mb-2 text-gray-400"></i>
                        <p>No products found.</p>
                        <p className="text-sm mt-1">
                          Try adding a new product or adjusting your filters.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            {products.length > 0 && (
              <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-gray-600 text-sm">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">{products.length}</span> of{" "}
                  <span className="font-medium">{products.length}</span> results
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-1.5 rounded border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center"
                    disabled 
                  >
                    <i className="fas fa-chevron-left text-xs mr-1.5" />{" "}
                    Previous
                  </button>
                  <button className="px-3 py-1.5 rounded bg-primary text-white text-sm font-medium">
                    1
                  </button>
                  {/* Add more page numbers if implementing full pagination */}
                  <button
                    className="px-3 py-1.5 rounded border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center"
                    disabled
                  >
                    Next <i className="fas fa-chevron-right text-xs ml-1.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Product Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {" "}
            {/* Changed to 4 cols for more stats */}
            {[
              {
                title: "Total Products",
                value: products.length,
                icon: "fa-book",
                color: "purple",
                trend: "+4.2%",
                trendColor: "text-green-500",
              },
              {
                title: "Active Listings",
                value: products.filter(
                  (p) => p.status !== "Draft" && p.status !== "Archived"
                ).length,
                icon: "fa-store",
                color: "blue",
                trend: "+10",
                trendColor: "text-green-500",
              },
              {
                title: "Low Stock Items",
                value: products.filter((p) => p.status === "Low Stock").length,
                icon: "fa-exclamation-triangle",
                color: "yellow",
                trend: "+12.5%",
                trendColor: "text-red-500",
              },
              {
                title: "Out of Stock",
                value: products.filter((p) => p.status === "Out of Stock")
                  .length,
                icon: "fa-times-circle",
                color: "red",
                trend: "-2",
                trendColor: "text-green-500",
              },
            ].map((stat) => (
              <div
                key={stat.title}
                className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                    <h3 className="text-3xl font-bold text-dark">
                      {stat.value}
                    </h3>
                    {stat.trend && (
                      <p
                        className={`text-sm mt-2 flex items-center ${stat.trendColor}`}
                      >
                        <i
                          className={`fas ${
                            stat.trend.startsWith("+")
                              ? "fa-arrow-up"
                              : "fa-arrow-down"
                          } mr-1`}
                        />
                        <span>{stat.trend} from last month</span>
                      </p>
                    )}
                  </div>
                  <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                    <i
                      className={`fas ${stat.icon} text-${stat.color}-500 text-xl`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal for confirmations/messages */}
      {modalState.isOpen && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md transform transition-all scale-100 opacity-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-dark">
                {modalState.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>
            <div className="text-gray-700 mb-6 text-sm">
              {modalState.message}
            </div>{" "}
            {/* Ensure message content is wrapped */}
            <div className="flex justify-end gap-3">
              {modalState.showCancelButton && (
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium"
                >
                  {modalState.cancelText}
                </button>
              )}
              <button
                onClick={handleModalConfirm}
                className={`px-4 py-2 rounded-lg text-white transition font-medium ${
                  modalState.confirmText.toLowerCase().includes("delete")
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-primary hover:bg-opacity-90"
                }`}
              >
                {modalState.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddProductForm && (
        <AddProductForm
          onClose={toggleAddProductForm}
          onAddProduct={handleAddProductToList}
          onSaveDraft={handleSaveProductDraftToList} // Pass the new handler
          openModal={openModal}
        />
      )}
    </LayoutAdmin>
  );
};

export default Products;
