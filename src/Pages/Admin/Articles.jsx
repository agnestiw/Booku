import React, { useState, useEffect, useRef, useCallback } from "react";
import LayoutAdmin from "../../Components/LayoutAdmin";

// --- AddArticleForm Component (Modal) ---
const AddArticleForm = ({ onClose, onAddArticle, onSaveDraft, openModal, editingArticle }) => {
  const initialFormData = {
    title: "",
    slug: "",
    author: "",
    publishDate: "",
    excerpt: "",
    content: "",
    category: "",
    readingLevel: "intermediate",
    tags: "",
    relatedBooks: "",
    featuredImage: null,
    imageAlt: "",
    metaTitle: "",
    metaDescription: "",
    focusKeyword: "",
    status: "draft",
    visibility: "public",
    featured: false,
    allowComments: true,
    sendNewsletter: false,
    enableSocialShare: true,
    authorImageURL: "",
    authorBio: "",
    authorTwitterURL: "",
    authorLinkedInURL: "",
    authorWebsiteURL: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [featuredImagePreview, setFeaturedImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [autoSaveStatus, setAutoSaveStatus] = useState("");

  const EXCERPT_MAX_LENGTH = 200;
  const AUTHOR_BIO_MAX_LENGTH = 300;
  const META_TITLE_MAX_LENGTH = 70;
  const META_DESC_MAX_LENGTH = 160;
  const AUTO_SAVE_INTERVAL = 3000;

  const imageUploadRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const autoSaveTimeoutRef = useRef(null);

  useEffect(() => {
    if (editingArticle) {
      setFormData({
        title: editingArticle.title || "",
        slug: editingArticle.slug || "",
        author: editingArticle.authorName || "",
        publishDate: editingArticle.publishDate ? new Date(editingArticle.publishDate).toISOString().slice(0,16) : "",
        excerpt: editingArticle.excerpt || "",
        content: editingArticle.content || "",
        category: editingArticle.category || "",
        readingLevel: editingArticle.readingLevel || "intermediate",
        tags: Array.isArray(editingArticle.tags) ? editingArticle.tags.join(", ") : editingArticle.tags || "",
        relatedBooks: editingArticle.relatedBooks || "",
        featuredImage: null,
        imageAlt: editingArticle.imageAlt || "",
        metaTitle: editingArticle.metaTitle || "",
        metaDescription: editingArticle.metaDescription || "",
        focusKeyword: editingArticle.focusKeyword || "",
        status: editingArticle.status?.toLowerCase() || "draft",
        visibility: editingArticle.visibility || "public",
        featured: editingArticle.featured || false,
        allowComments: editingArticle.allowComments !== undefined ? editingArticle.allowComments : true,
        sendNewsletter: editingArticle.sendNewsletter || false,
        enableSocialShare: editingArticle.enableSocialShare !== undefined ? editingArticle.enableSocialShare : true,
        authorImageURL: editingArticle.authorImage || "",
        authorBio: editingArticle.authorBio || "",
        authorTwitterURL: editingArticle.authorTwitterURL || "",
        authorLinkedInURL: editingArticle.authorLinkedInURL || "",
        authorWebsiteURL: editingArticle.authorWebsiteURL || "",
      });
      if (editingArticle.featuredImage && typeof editingArticle.featuredImage === 'string') {
        setFeaturedImagePreview(editingArticle.featuredImage);
      }
      const words = (editingArticle.content || "").trim().split(/\s+/).filter(Boolean).length;
      setWordCount(words);
      setReadingTime(Math.ceil(words / 200));
      setAutoSaveStatus("");
    } else {
      setFormData(initialFormData);
      setFeaturedImagePreview(null);
      setWordCount(0);
      setReadingTime(0);
      setAutoSaveStatus("");
    }
  }, [editingArticle]);

  const triggerAutoSave = useCallback(async () => {
    if (!formData.title.trim() && !formData.content.trim()) {
        setAutoSaveStatus("");
        return;
    }
    if (isSubmitting || isSavingDraft) return;

    setAutoSaveStatus("Menyimpan draf...");
    const draftData = { ...formData, status: "draft", id: editingArticle?.id || formData.id };
    try {
        const savedDraft = await onSaveDraft(draftData, true);
        if (savedDraft && savedDraft.id && !formData.id && !editingArticle?.id) {
            setFormData(prev => ({ ...prev, id: savedDraft.id }));
        }
        setAutoSaveStatus("Draf disimpan otomatis.");
        setTimeout(() => setAutoSaveStatus(""), 2000);
    } catch (error) {
        console.error("Auto-save failed:", error);
        setAutoSaveStatus("Gagal menyimpan otomatis.");
        setTimeout(() => setAutoSaveStatus(""), 3000);
    }
  }, [formData, onSaveDraft, editingArticle, isSubmitting, isSavingDraft]);


  useEffect(() => {
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }
    if ((formData.title?.trim() || formData.content?.trim()) && !isSubmitting && !isSavingDraft) {
        autoSaveTimeoutRef.current = setTimeout(() => {
        triggerAutoSave();
      }, AUTO_SAVE_INTERVAL);
    }

    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [formData, triggerAutoSave, isSubmitting, isSavingDraft]);


  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setAutoSaveStatus("");

    if (name === "featuredImage" && files && files[0]) {
      setFormData((prev) => ({ ...prev, featuredImage: files[0] }));
      setFeaturedImagePreview(URL.createObjectURL(files[0]));
      if (formErrors.featuredImage)
        setFormErrors((prev) => ({ ...prev, featuredImage: "" }));
    } else if (name === "title") {
      const currentTitle = formData.title;
      const newSlug = formData.slug === "" || formData.slug === generateSlug(currentTitle) ? generateSlug(value) : formData.slug;
      const newMetaTitle = formData.metaTitle === "" || formData.metaTitle === currentTitle.substring(0, META_TITLE_MAX_LENGTH) ? value.substring(0, META_TITLE_MAX_LENGTH) : formData.metaTitle;

      setFormData((prev) => ({
        ...prev,
        title: value,
        slug: newSlug,
        metaTitle: newMetaTitle,
      }));
    } else if (name === "excerpt") {
        const val = value.length > EXCERPT_MAX_LENGTH ? value.substring(0, EXCERPT_MAX_LENGTH) : value;
        setFormData(prev => ({ ...prev, excerpt: val }));
    } else if (name === "authorBio") {
        const val = value.length > AUTHOR_BIO_MAX_LENGTH ? value.substring(0, AUTHOR_BIO_MAX_LENGTH) : value;
        setFormData(prev => ({ ...prev, authorBio: val }));
    } else if (name === "metaDescription") {
        const val = value.length > META_DESC_MAX_LENGTH ? value.substring(0, META_DESC_MAX_LENGTH) : value;
        setFormData(prev => ({ ...prev, metaDescription: val }));
    } else if (name === "content") {
        setFormData(prev => ({ ...prev, content: value }));
        const words = value.trim().split(/\s+/).filter(Boolean).length;
        setWordCount(words);
        setReadingTime(Math.ceil(words / 200));
    }
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

    if (formErrors[name] && name !== "featuredImage") {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errors = { ...formErrors };
    const requiredFields = ["title", "author", "category", "content"];

    if (requiredFields.includes(name) && !value.trim()) {
      errors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    } else {
      delete errors[name];
    }
    setFormErrors(errors);
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAutoSaveStatus("");
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0] && files[0].type.startsWith("image/")) {
      handleChange({ target: { name: "featuredImage", files: files } });
    }
  };

  const removeFeaturedImage = (e) => {
    e.stopPropagation();
    setAutoSaveStatus("");
    setFormData((prev) => ({ ...prev, featuredImage: null }));
    setFeaturedImagePreview(null);
    const input = document.getElementById("featuredImageArticleModal");
    if (input) input.value = "";
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title.trim()) errors.title = "Article title is required";
    if (!formData.author) errors.author = "Please select an author";
    if (!formData.category) errors.category = "Please select a category";
    if (!formData.content.trim()) errors.content = "Article content is required";
    if (!formData.featuredImage && !featuredImagePreview)
      errors.featuredImage = "Featured image is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitOrDraft = async (isDraftOperation) => {
    if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
    }
    setAutoSaveStatus("");

    if (!isDraftOperation && !validateForm()) {
      openModal({
        title: "Validation Error",
        message: "Please fill in all required fields correctly.",
        showCancelButton: false,
        confirmText: "OK",
      });
      return;
    }
    if (isDraftOperation && !formData.title.trim() && !formData.content.trim()) {
        setFormErrors(prev => ({...prev, title: "Article title or content is required to save a draft."}));
        openModal({
            title: "Cannot Save Draft",
            message: "Article title or content is required to save a draft.",
            showCancelButton: false,
            confirmText: "OK",
        });
        return;
    }

    const submissionData = { ...formData, id: editingArticle?.id || formData.id };

    if (isDraftOperation) {
      setIsSavingDraft(true);
      try {
        await onSaveDraft(submissionData, false);
        setAutoSaveStatus("Draf berhasil disimpan.");
         setTimeout(() => setAutoSaveStatus(""), 2000);
      } catch (error) {
        openModal({ title: "Error", message: "Failed to save draft.", showCancelButton: false, confirmText: "OK" });
      } finally {
        setIsSavingDraft(false);
      }
    } else {
      setIsSubmitting(true);
      try {
        const finalStatus = formData.publishDate && formData.status !== 'draft' ? 'scheduled' : 'published';
        await onAddArticle({ ...submissionData, status: finalStatus });
         setAutoSaveStatus("Artikel berhasil dipublikasikan/diperbarui.");
         setTimeout(() => setAutoSaveStatus(""), 2000);
      } catch (error) {
        openModal({ title: "Error", message: `Failed to ${editingArticle ? 'update' : 'publish'} article.`, showCancelButton: false, confirmText: "OK" });
      } finally {
        setIsSubmitting(false);
      }
    }
  };


  const handleEditorAction = (action) => {
    console.log("Editor action:", action);
    openModal({ title: "Editor Action", message: `Action "${action}" clicked. Integrate a rich text editor for full functionality.`, confirmText: "OK", showCancelButton: false });
  };


  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-dark">{editingArticle ? "Edit Article" : "Add New Article"}</h1>
            <div className="flex items-center">
                {autoSaveStatus && <span className="text-xs text-gray-500 mr-4 italic">{autoSaveStatus}</span>}
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600" disabled={isSubmitting || isSavingDraft}>
                <i className="fas fa-times text-xl"></i>
                </button>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-600">
            {editingArticle ? "Update the details of your article." : "Create engaging content for your readers."} Fields marked with * are required.
          </p>
        </div>

        <div className="overflow-y-auto flex-grow">
          <form id="addArticleFormModal" className="p-6 lg:p-8" onSubmit={(e) => {e.preventDefault(); handleSubmitOrDraft(false);}} noValidate>
            {/* Basic Information Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-dark mb-6 flex items-center">
                <i className="fas fa-info-circle text-primary mr-3" /> Basic Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                  <label htmlFor="titleArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Article Title *</label>
                  <input type="text" id="titleArticleModal" name="title" value={formData.title} onChange={handleChange} onBlur={handleBlur} required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${formErrors.title ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"}`}
                    placeholder="Enter article title" />
                  {formErrors.title && <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>}
                </div>
                <div className="lg:col-span-2">
                  <label htmlFor="slugArticleModal" className="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      booku.com/articles/
                    </span>
                    <input type="text" id="slugArticleModal" name="slug" value={formData.slug} onChange={handleChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="article-url-slug" />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Auto-generated from title if left empty or can be customized.</p>
                </div>
                <div>
                  <label htmlFor="authorArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Author *</label>
                  <select id="authorArticleModal" name="author" value={formData.author} onChange={handleChange} onBlur={handleBlur} required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${formErrors.author ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"}`}>
                    <option value="">Select author</option>
                    <option value="Admin Booku">Admin Booku</option>
                    <option value="Sarah Johnson">Sarah Johnson</option>
                    <option value="Robert Williams">Robert Williams</option>
                    <option value="Jennifer Lee">Jennifer Lee</option>
                    <option value="Alicia Chen">Alicia Chen</option>
                    <option value="Michael Brown">Michael Brown</option>
                    <option value="David Thompson">David Thompson</option>
                    <option value="Emily Rodriguez">Emily Rodriguez</option>
                  </select>
                  {formErrors.author && <p className="text-red-500 text-sm mt-1">{formErrors.author}</p>}
                </div>
                <div>
                  <label htmlFor="publishDateArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Publication Date</label>
                  <input type="datetime-local" id="publishDateArticleModal" name="publishDate" value={formData.publishDate} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
                  <p className="text-sm text-gray-500 mt-1">Leave empty to publish immediately, or set a future date to schedule.</p>
                </div>
                <div className="lg:col-span-2">
                  <label htmlFor="excerptArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Article Excerpt</label>
                  <textarea id="excerptArticleModal" name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} maxLength={EXCERPT_MAX_LENGTH}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Brief summary of the article..."></textarea>
                  <p className={`text-sm mt-1 ${formData.excerpt.length >= EXCERPT_MAX_LENGTH ? 'text-red-500' : 'text-gray-500'}`}>
                    {formData.excerpt.length}/{EXCERPT_MAX_LENGTH} characters
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-dark mb-6 flex items-center">
                <i className="fas fa-user-edit text-primary mr-3" /> Author Details (Optional)
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="authorImageURLArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Author Image URL</label>
                  <input type="url" id="authorImageURLArticleModal" name="authorImageURL" value={formData.authorImageURL} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="https://example.com/author.jpg" />
                </div>
                 <div className="lg:col-span-2">
                  <label htmlFor="authorBioArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Author Bio</label>
                  <textarea id="authorBioArticleModal" name="authorBio" value={formData.authorBio} onChange={handleChange} rows={3} maxLength={AUTHOR_BIO_MAX_LENGTH}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Short biography of the author..."></textarea>
                     <p className={`text-sm mt-1 ${formData.authorBio.length >= AUTHOR_BIO_MAX_LENGTH ? 'text-red-500' : 'text-gray-500'}`}>
                        {formData.authorBio.length}/{AUTHOR_BIO_MAX_LENGTH} characters
                    </p>
                </div>
                <div>
                  <label htmlFor="authorTwitterURLArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Author Twitter URL</label>
                  <input type="url" id="authorTwitterURLArticleModal" name="authorTwitterURL" value={formData.authorTwitterURL} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="https://twitter.com/authorhandle" />
                </div>
                <div>
                  <label htmlFor="authorLinkedInURLArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Author LinkedIn URL</label>
                  <input type="url" id="authorLinkedInURLArticleModal" name="authorLinkedInURL" value={formData.authorLinkedInURL} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="https://linkedin.com/in/authorprofile" />
                </div>
                 <div className="lg:col-span-2">
                  <label htmlFor="authorWebsiteURLArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Author Website URL</label>
                  <input type="url" id="authorWebsiteURLArticleModal" name="authorWebsiteURL" value={formData.authorWebsiteURL} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="https://authorwebsite.com" />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-dark mb-6 flex items-center">
                <i className="fas fa-edit text-primary mr-3" /> Article Content *
              </h2>
              <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-3">
                <div className="flex flex-wrap gap-2">
                  {['bold', 'italic', 'underline', 'insertUnorderedList', 'insertOrderedList', 'createLink', 'insertImage', 'formatBlock_H2', 'formatBlock_H3', 'formatBlock_Blockquote'].map(action => {
                    let iconClass = `fas fa-${action.toLowerCase().includes('list') ? action.replace('insert', '').replace('List','-list') : action.toLowerCase().includes('link') ? 'link' : action.toLowerCase().includes('image') ? 'image' : action.toLowerCase().includes('formatblock_h') ? 'heading' : action.toLowerCase().includes('blockquote') ? 'quote-left' : action.toLowerCase() }`;
                    let title = action.replace(/([A-Z])/g, ' $1').replace('format Block ', '').trim();
                    if (action.includes('formatBlock_H')) title = action.slice(-2);

                    return (
                        <button key={action} type="button" onClick={() => handleEditorAction(action)}
                                className="p-2 text-gray-600 hover:text-primary hover:bg-white rounded transition-colors" title={title}>
                        <i className={iconClass}></i>
                        {action.includes('formatBlock_H') ? action.slice(-2) : ''}
                        </button>
                    );
                  })}
                </div>
                 <p className="text-xs text-gray-400 mt-2">Note: Full rich text editor functionality requires integration with a library like Quill, Tiptap, or Slate.js.</p>
              </div>
              <textarea id="contentArticleModal" name="content" value={formData.content} onChange={handleChange} onBlur={handleBlur} required
                className={`w-full min-h-96 px-4 py-3 border border-t-0 rounded-b-lg focus:outline-none focus:ring-2 transition-colors resize-y ${formErrors.content ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"}`}
                placeholder="Start writing your article content here..." />
              {formErrors.content && <p className="text-red-500 text-sm mt-1">{formErrors.content}</p>}
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>Word Count: {wordCount}</span>
                <span>Reading Time: ~{readingTime} min</span>
              </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold text-dark mb-6 flex items-center">
                    <i className="fas fa-tags text-primary mr-3" /> Category & Tags
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="categoryArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                        <select id="categoryArticleModal" name="category" value={formData.category} onChange={handleChange} onBlur={handleBlur} required
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${formErrors.category ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"}`}>
                            <option value="">Select category</option>
                            <option value="Book Reviews">Book Reviews</option>
                            <option value="Author Interviews">Author Interviews</option>
                            <option value="Reading Habits">Reading Habits</option>
                            <option value="Reading Tips">Reading Tips</option>
                            <option value="Book Recommendations">Book Recommendations</option>
                            <option value="Literary News">Literary News</option>
                            <option value="Writing Advice">Writing Advice</option>
                            <option value="Book Club">Book Club</option>
                            <option value="Industry Insights">Industry Insights</option>
                            <option value="Events">Events</option>
                            <option value="Technology">Technology</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Education">Education</option>
                            <option value="General">General</option>
                        </select>
                        {formErrors.category && <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>}
                    </div>
                    <div>
                        <label htmlFor="readingLevelArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Reading Level</label>
                        <select id="readingLevelArticleModal" name="readingLevel" value={formData.readingLevel} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white">
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="all-levels">All Levels</option>
                        </select>
                    </div>
                    <div className="lg:col-span-2">
                        <label htmlFor="tagsArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                        <input type="text" id="tagsArticleModal" name="tags" value={formData.tags} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="e.g., fiction, bestseller, mystery" />
                        <p className="text-sm text-gray-500 mt-1">Separate multiple tags with commas.</p>
                    </div>
                    <div className="lg:col-span-2">
                        <label htmlFor="relatedBooksArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Related Books (Optional)</label>
                        <input type="text" id="relatedBooksArticleModal" name="relatedBooks" value={formData.relatedBooks} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="Enter book titles or ISBNs, comma-separated" />
                        <p className="text-sm text-gray-500 mt-1">Link books mentioned in the article.</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold text-dark mb-6 flex items-center">
                    <i className="fas fa-image text-primary mr-3" /> Featured Image
                </h2>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image *</label>
                    <div
                        ref={imageUploadRef}
                        onDrop={handleImageDrop}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                        onClick={() => document.getElementById('featuredImageArticleModal').click()}
                        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                            ${isDragging ? 'border-primary bg-primary/10' : 'hover:border-primary'}
                            ${formErrors.featuredImage ? "border-red-500" : "border-gray-300"}`}
                    >
                        {featuredImagePreview ? (
                            <div className="relative group">
                                <img src={featuredImagePreview} alt="Featured preview" className="mx-auto max-h-48 rounded-lg mb-4 object-contain" />
                                <button type="button" onClick={removeFeaturedImage} className="absolute top-1 right-1 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center opacity-75 group-hover:opacity-100 transition-opacity text-xs">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        ) : (
                            <div>
                                <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4" />
                                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                                <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB. Recommended: 1200x630px</p>
                            </div>
                        )}
                        <input type="file" id="featuredImageArticleModal" name="featuredImage" accept="image/*" className="hidden" onChange={handleChange} />
                    </div>
                    {formErrors.featuredImage && <p className="text-red-500 text-sm mt-1">{formErrors.featuredImage}</p>}
                </div>
                <div>
                    <label htmlFor="imageAltArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Image Alt Text</label>
                    <input type="text" id="imageAltArticleModal" name="imageAlt" value={formData.imageAlt} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Describe the image for accessibility" />
                    <p className="text-sm text-gray-500 mt-1">Important for SEO and accessibility.</p>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold text-dark mb-6 flex items-center">
                    <i className="fas fa-search text-primary mr-3" /> SEO Settings
                </h2>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="metaTitleArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                        <input type="text" id="metaTitleArticleModal" name="metaTitle" value={formData.metaTitle} onChange={handleChange} maxLength={META_TITLE_MAX_LENGTH}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="SEO title for search engines" />
                        <p className="text-sm text-gray-500 mt-1">Recommended: 50-60 characters. ({formData.metaTitle.length}/{META_TITLE_MAX_LENGTH})</p>
                    </div>
                    <div>
                        <label htmlFor="metaDescriptionArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                        <textarea id="metaDescriptionArticleModal" name="metaDescription" value={formData.metaDescription} onChange={handleChange} rows={3} maxLength={META_DESC_MAX_LENGTH}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                            placeholder="Brief description for search engine results"></textarea>
                        <p className="text-sm text-gray-500 mt-1">Recommended: 150-160 characters. ({formData.metaDescription.length}/{META_DESC_MAX_LENGTH})</p>
                    </div>
                    <div>
                        <label htmlFor="focusKeywordArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Focus Keyword</label>
                        <input type="text" id="focusKeywordArticleModal" name="focusKeyword" value={formData.focusKeyword} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="Main keyword for this article" />
                        <p className="text-sm text-gray-500 mt-1">Primary keyword you want to rank for.</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold text-dark mb-6 flex items-center">
                    <i className="fas fa-cog text-primary mr-3" /> Article Settings
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="statusArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Article Status</label>
                        <select id="statusArticleModal" name="status" value={formData.status} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white">
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="archived">Archived</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="visibilityArticleModal" className="block text-sm font-medium text-gray-700 mb-2">Visibility</label>
                        <select id="visibilityArticleModal" name="visibility" value={formData.visibility} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white">
                            <option value="public">Public</option>
                            <option value="private">Private (Only Admins/Editors)</option>
                            <option value="password">Password Protected</option>
                        </select>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                        <label className="flex items-center">
                            <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0" />
                            <span className="ml-2 text-sm text-gray-700">Set as Featured Article</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="allowComments" checked={formData.allowComments} onChange={handleChange} className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0" />
                            <span className="ml-2 text-sm text-gray-700">Allow Comments</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="sendNewsletter" checked={formData.sendNewsletter} onChange={handleChange} className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0" />
                            <span className="ml-2 text-sm text-gray-700">Send to Newsletter Subscribers on Publish</span>
                        </label>
                         <label className="flex items-center">
                            <input type="checkbox" name="enableSocialShare" checked={formData.enableSocialShare} onChange={handleChange} className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0" />
                            <span className="ml-2 text-sm text-gray-700">Enable Social Sharing Buttons</span>
                        </label>
                    </div>
                </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button type="button" onClick={onClose} disabled={isSubmitting || isSavingDraft}
              className="order-last sm:order-1 w-full sm:w-auto px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50">
              Cancel
            </button>
            <button type="button" onClick={() => handleSubmitOrDraft(true)} disabled={isSubmitting || isSavingDraft}
              className="order-2 sm:order-2 w-full sm:w-auto bg-gray-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:bg-gray-400">
              {isSavingDraft ? (<><i className="fas fa-spinner fa-spin mr-2" />Saving...</>) : (<><i className="fas fa-save mr-2" />Save as Draft</>)}
            </button>
            <button type="button" onClick={() => openModal({title: "Preview Article", message: "Article preview functionality would be implemented here.", confirmText: "OK", showCancelButton: false})}
              disabled={isSubmitting || isSavingDraft}
              className="order-3 sm:order-3 w-full sm:w-auto border border-primary text-primary px-6 py-2.5 rounded-lg font-medium hover:bg-primary/5 transition-colors disabled:opacity-50">
                 <i className="fas fa-eye mr-2" />Preview
            </button>
            <button type="submit" form="addArticleFormModal" disabled={isSubmitting || isSavingDraft}
              className="order-1 sm:order-last w-full sm:w-auto bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:bg-blue-300">
              {isSubmitting ? (<><i className="fas fa-spinner fa-spin mr-2" />{editingArticle ? 'Updating...' : 'Publishing...'}</>) : (<><i className="fas fa-paper-plane mr-2" />{editingArticle ? 'Update Article' : 'Publish Article'}</>)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Articles Page Component ---
const Articles = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The Power of Reading: How Books Shape Our Lives",
      excerpt: "In a world dominated by digital screens, the timeless act of reading books holds profound power...",
      authorName: "Sarah Johnson",
      authorImage: "https://img.freepik.com/free-photo/horizontal-shot-indifferent-confused-lady-keeps-hands-crossed-purses-lips-feels-uncertain_273609-18790.jpg?uid=R130501221&ga=GA1.1.435624309.1743227928&semt=ais_hybrid&w=740",
      category: "Reading Habits",
      publishDate: "2025-05-10T09:00",
      status: "Published",
      views: 1245,
      comments: 87,
      featuredImage: "https://media.licdn.com/dms/image/v2/D4D12AQEMGhFwdcwqzQ/article-cover_image-shrink_720_1280/B4DZWIRAgiG8AM-/0/1741747915632?e=2147483647&v=beta&t=avhUmFCIHsb3976UTSOMaDdOTJ8P3l8ABHGR7lrsWFY",
      tags: ["Reading", "Books", "Self-Improvement"],
      readingLevel: "all-levels",
      readingTime: 8,
      content: "<p>In a world dominated by digital screens and constant notifications, the simple act of reading a book has become a powerful form of resistance and self-care...</p><h2>The Cognitive Benefits of Reading</h2><p>Research has consistently shown that reading regularly has significant cognitive benefits...</p>",
      imageAlt: "Person reading a book in a cozy setting",
      metaTitle: "The Power of Reading: How Books Shape Our Lives | Booku",
      metaDescription: "Discover the profound cognitive, emotional, and mental health benefits of reading. Learn how books can shape your life and get tips for building a reading habit.",
      focusKeyword: "power of reading",
      visibility: "public",
      featured: true,
      allowComments: true,
      sendNewsletter: false,
      enableSocialShare: true,
      authorBio: "Sarah is a literary critic and writer with over 10 years of experience in the publishing industry. She holds a Master's degree in English Literature from Columbia University and is passionate about making literature accessible to everyone.",
      authorTwitterURL: "https://twitter.com/sarahjohnson",
      authorLinkedInURL: "https://linkedin.com/in/sarahjohnson",
      authorWebsiteURL: "https://sarahjohnsonwrites.com",
      slug: "the-power-of-reading-how-books-shape-our-lives",
      checked: false,
    },
    {
      id: 2,
      title: "10 Classic Novels Everyone Should Read At Least Once",
      excerpt: "From Jane Austen to Fyodor Dostoevsky, these literary masterpieces offer timeless wisdom and unforgettable characters.",
      authorName: "Robert Williams",
      authorImage: "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hair-serious-expression_176532-8142.jpg?w=740",
      category: "Book Recommendations",
      publishDate: "2025-04-28T14:30",
      status: "Published",
      views: 987,
      comments: 64,
      featuredImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1887&auto=format&fit=crop",
      tags: ["Classic Literature", "Must-Read", "Fiction"],
      readingLevel: "intermediate",
      readingTime: 12,
      content: "<p>Exploring the rich tapestry of classic literature can be a rewarding journey. Here are ten novels that have stood the test of time...</p><h3>1. Pride and Prejudice by Jane Austen</h3><p>A witty and insightful commentary on society and romance in 19th-century England.</p>",
      imageAlt: "Stack of classic novels on a wooden table",
      metaTitle: "10 Classic Novels Everyone Should Read | Booku",
      metaDescription: "A curated list of ten timeless classic novels from various authors and eras that every book lover should experience.",
      focusKeyword: "classic novels",
      visibility: "public",
      featured: false,
      allowComments: true,
      sendNewsletter: true,
      enableSocialShare: true,
      authorBio: "Robert is a historian and avid reader, specializing in classic literature. He enjoys sharing his passion for books that have shaped cultural conversations.",
      authorTwitterURL: "https://twitter.com/robertwreads",
      authorLinkedInURL: "",
      authorWebsiteURL: "",
      slug: "10-classic-novels-everyone-should-read",
      checked: false,
    },
    {
      id: 3,
      title: "The Art of Slow Reading in a Fast-Paced World",
      excerpt: "Rediscover the pleasure of deep reading and how it can improve focus, comprehension, and overall well-being.",
      authorName: "Michael Brown",
      authorImage: "https://img.freepik.com/free-photo/stylish-man-cafe_1098-21049.jpg?w=740",
      category: "Reading Habits",
      publishDate: "2025-04-10T11:00",
      status: "Published",
      views: 876,
      comments: 41,
      featuredImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop",
      tags: ["Slow Reading", "Mindfulness", "Focus"],
      readingLevel: "intermediate",
      readingTime: 7,
      content: "<p>In an era of information overload, the practice of slow reading offers a sanctuary for the mind. It's about savoring words, ideas, and the narrative journey...</p>",
      imageAlt: "Person sitting comfortably and reading a book slowly by a window",
      metaTitle: "The Art of Slow Reading: Benefits and Techniques | Booku",
      metaDescription: "Learn about the benefits of slow reading for focus and comprehension in today's fast-paced world. Discover techniques to cultivate this mindful reading practice.",
      focusKeyword: "slow reading",
      visibility: "public",
      featured: true,
      allowComments: true,
      sendNewsletter: false,
      enableSocialShare: true,
      authorBio: "Michael is a mindfulness coach and writer who advocates for slower, more intentional living, including how we consume information.",
      authorTwitterURL: "",
      authorLinkedInURL: "https://linkedin.com/in/michaelbrownmindful",
      authorWebsiteURL: "https://mindfulmichael.com",
      slug: "art-of-slow-reading-fast-paced-world",
      checked: false,
    },
    {
      id: 4,
      title: "Digital vs Physical Books: Finding Your Perfect Reading Format",
      excerpt: "The debate between e-books and physical books continues. Which one is right for you? Exploring the pros and cons.",
      authorName: "Alicia Chen",
      authorImage: "https://img.freepik.com/free-photo/young-asian-woman-blue-shirt-thinking-front-view_176474-84551.jpg?w=740",
      category: "Technology",
      publishDate: "2025-06-05T10:00",
      status: "Scheduled",
      views: 0,
      comments: 0,
      featuredImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
      tags: ["E-books", "Physical Books", "Reading Technology"],
      readingLevel: "all-levels",
      readingTime: 6,
      content: "<p>E-readers offer convenience and portability, while physical books provide a tactile experience. Let's delve into the advantages and disadvantages of each format...</p>",
      imageAlt: "Side-by-side comparison of an e-reader and a physical book",
      metaTitle: "Digital vs Physical Books: Which Format is Best? | Booku",
      metaDescription: "An in-depth look at the pros and cons of digital e-books versus traditional physical books to help you choose your ideal reading format.",
      focusKeyword: "digital vs physical books",
      visibility: "public",
      featured: false,
      allowComments: true,
      sendNewsletter: false,
      enableSocialShare: true,
      authorBio: "Alicia is a tech journalist and book lover who explores the intersection of technology and literature.",
      authorTwitterURL: "https://twitter.com/aliciatechreads",
      authorLinkedInURL: "",
      authorWebsiteURL: "",
      slug: "digital-vs-physical-books",
      checked: false,
    },
  ]);
  const [selectAll, setSelectAll] = useState(false);
  const [showAddArticleModal, setShowAddArticleModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false, title: "", message: "", onConfirm: null, confirmText: "Confirm", cancelText: "Cancel", showCancelButton: true,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5); 

  const totalViews = articles.reduce((sum, article) => sum + (article.views || 0), 0);
  const totalComments = articles.reduce((sum, article) => sum + (article.comments || 0), 0);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
 
  useEffect(() => {
    if (articles.length > 0 && currentArticles.length === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
    } else if (articles.length === 0) {
        setCurrentPage(1); // Reset to page 1 if all articles are deleted
    }
  }, [articles, currentArticles.length, currentPage]);


  useEffect(() => {
    if (currentArticles.length > 0) {
      setSelectAll(currentArticles.every((a) => a.checked));
    } else if (articles.length === 0) {
        setSelectAll(false);
    } else if (currentArticles.length === 0 && articles.length > 0 && currentPage > 1) {
        // This case is handled by the useEffect above to change page,
        // selectAll will be re-evaluated based on the new currentArticles.
        // For safety, ensure selectAll is false if currentArticles is empty.
        setSelectAll(false);
    }
  }, [currentArticles, articles.length, currentPage]);


  const handleSelectAll = () => {
    const newSelectAllState = !selectAll;
    setSelectAll(newSelectAllState);
    const articlesOnCurrentPageIds = currentArticles.map(a => a.id);
    setArticles(articles.map((a) =>
        articlesOnCurrentPageIds.includes(a.id) ? { ...a, checked: newSelectAllState } : a
    ));
  };

  const handleArticleCheck = (articleId) => {
    setArticles(
      articles.map((a) =>
        a.id === articleId ? { ...a, checked: !a.checked } : a
      )
    );
  };

  const openConfirmationModal = (config) => {
    setConfirmationModal({ isOpen: true, title: "", message: "", onConfirm: null, confirmText: "Confirm", cancelText: "Cancel", showCancelButton: true, ...config });
  };

  const closeConfirmationModal = () => {
    setConfirmationModal({ ...confirmationModal, isOpen: false, onConfirm: null });
  };

  const handleModalConfirm = () => {
    if (confirmationModal.onConfirm) {
      confirmationModal.onConfirm();
    }
    closeConfirmationModal();
  };

  const handleDeleteArticle = (articleId) => {
    const articleToDelete = articles.find((a) => a.id === articleId);
    openConfirmationModal({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete the article "${articleToDelete?.title}"? This action cannot be undone.`,
      onConfirm: () => {
        setArticles(prevArticles => {
            const updatedArticles = prevArticles.filter((a) => a.id !== articleId);
            // Adjust current page if the last item on a page is deleted
            // or if the current page becomes empty
            const newTotalPages = Math.ceil(updatedArticles.length / articlesPerPage);
            if (currentPage > newTotalPages && newTotalPages > 0) {
                setCurrentPage(newTotalPages);
            } else if (newTotalPages === 0) { // All articles deleted
                setCurrentPage(1);
            } else if (updatedArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage).length === 0 && currentPage > 1) {
                // If current page is now empty and it's not the first page
                setCurrentPage(currentPage - 1);
            }
            return updatedArticles;
        });
        openConfirmationModal({ title: "Success", message: `Article "${articleToDelete?.title}" has been deleted.`, showCancelButton: false, confirmText: "OK" });
      },
      confirmText: "Delete",
    });
  };

   const handleDeleteSelected = () => {
    const selectedArticles = articles.filter(p => p.checked);
    if (selectedArticles.length === 0) {
      openConfirmationModal({ title: "No Selection", message: "Please select articles to delete.", showCancelButton: false, confirmText: "OK" });
      return;
    }
    openConfirmationModal({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete ${selectedArticles.length} selected article(s)? This action cannot be undone.`,
      onConfirm: () => {
        setArticles(prevArticles => {
            const updatedArticles = prevArticles.filter(p => !p.checked);
            const newTotalPages = Math.ceil(updatedArticles.length / articlesPerPage);
             if (currentPage > newTotalPages && newTotalPages > 0) {
                setCurrentPage(newTotalPages);
            } else if (newTotalPages === 0) {
                setCurrentPage(1);
            } else if (updatedArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage).length === 0 && currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
            return updatedArticles;
        });
        openConfirmationModal({ title: "Success", message: `${selectedArticles.length} article(s) have been deleted.`, showCancelButton: false, confirmText: "OK" });
      },
      confirmText: "Delete Selected",
    });
  };

  const handleOpenAddModal = () => {
    setEditingArticle(null);
    setShowAddArticleModal(true);
  };

  const handleOpenEditModal = (articleId) => {
    const articleToEdit = articles.find(a => a.id === articleId);
    if (articleToEdit) {
      setEditingArticle(articleToEdit);
      setShowAddArticleModal(true);
    }
  };


  const handleAddOrUpdateArticle = (articleData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const processedArticle = {
          ...articleData,
          id: editingArticle ? editingArticle.id : Date.now(),
          checked: false,
          views: editingArticle ? editingArticle.views : 0,
          comments: editingArticle ? editingArticle.comments : 0,
          authorName: articleData.author,
          authorImage: articleData.authorImageURL || "https://placehold.co/32x32/E9E9E9/B0B0B0?text=AU",
          featuredImage: articleData.featuredImage instanceof File 
            ? URL.createObjectURL(articleData.featuredImage) 
            : (editingArticle && articleData.featuredImage === null && editingArticle.featuredImage)
              ? editingArticle.featuredImage
              : articleData.featuredImage || "https://placehold.co/80x60/E9E9E9/B0B0B0?text=Img",
          publishDate: articleData.publishDate || new Date().toISOString().slice(0,16),
          tags: typeof articleData.tags === 'string' ? articleData.tags.split(',').map(tag => tag.trim()).filter(Boolean) : (articleData.tags || []),
          readingTime: Math.ceil((articleData.content || "").trim().split(/\s+/).filter(Boolean).length / 200),
        };

        if (editingArticle) {
          setArticles(prev => prev.map(a => a.id === processedArticle.id ? processedArticle : a));
        } else {
          setArticles((prevArticles) => [processedArticle, ...prevArticles]);
        }
        
        setShowAddArticleModal(false);
        setEditingArticle(null);
        openConfirmationModal({ title: "Success", message: `Article "${processedArticle.title}" has been ${editingArticle ? 'updated' : (processedArticle.status === 'scheduled' ? 'scheduled' : 'published')}!`, showCancelButton: false, confirmText: "OK" });
        resolve(processedArticle);
      }, 1500);
    });
  };

  const handleSaveDraft = (draftData, isAutoSave = false) => {
     return new Promise((resolve) => {
      setTimeout(() => {
        const draftToSave = {
          ...draftData,
          id: editingArticle ? editingArticle.id : draftData.id || Date.now(),
          checked: false,
          views: editingArticle ? editingArticle.views : (draftData.views || 0),
          comments: editingArticle ? editingArticle.comments : (draftData.comments || 0),
          authorName: draftData.author,
          authorImage: draftData.authorImageURL || "https://placehold.co/32x32/E9E9E9/B0B0B0?text=AU",
          featuredImage: draftData.featuredImage instanceof File 
            ? URL.createObjectURL(draftData.featuredImage) 
            : (editingArticle && draftData.featuredImage === null && editingArticle.featuredImage)
              ? editingArticle.featuredImage
              : draftData.featuredImage || "https://placehold.co/80x60/E9E9E9/B0B0B0?text=Draft",
          publishDate: draftData.publishDate || "",
          status: "Draft",
          tags: typeof draftData.tags === 'string' ? draftData.tags.split(',').map(tag => tag.trim()).filter(Boolean) : (draftData.tags || []),
          readingTime: Math.ceil((draftData.content || "").trim().split(/\s+/).filter(Boolean).length / 200),
        };
        
        let articleExists = false;
        const updatedArticles = articles.map(a => {
            if (a.id === draftToSave.id) {
                articleExists = true;
                return draftToSave;
            }
            return a;
        });

        if (!articleExists) {
            setArticles([draftToSave, ...articles]);
        } else {
            setArticles(updatedArticles);
        }
        
        if (!isAutoSave) {
            setShowAddArticleModal(false);
            setEditingArticle(null);
            openConfirmationModal({ title: "Draft Saved", message: `Article "${draftToSave.title}" has been saved as a draft.`, showCancelButton: false, confirmText: "OK" });
        }
        resolve(draftToSave);
      }, isAutoSave ? 200 : 1000);
    });
  };

  const handleViewArticle = (articleId) => {
    const articleToView = articles.find(a => a.id === articleId);
    let messageContent = `
      Title: ${articleToView?.title || 'N/A'}\n
      Author: ${articleToView?.authorName || 'N/A'}\n
      Author Bio: ${articleToView?.authorBio?.substring(0,100) || 'N/A'}...\n
      Category: ${articleToView?.category || 'N/A'}\n
      Status: ${articleToView?.status || 'N/A'}\n
      Published: ${articleToView?.publishDate ? new Date(articleToView.publishDate).toLocaleString() : 'N/A'}\n
      Views: ${articleToView?.views || 0}\n
      Tags: ${(articleToView?.tags || []).join(', ') || 'N/A'}\n
      Excerpt: ${articleToView?.excerpt || 'N/A'}\n
      --- Content Snippet ---\n
      ${articleToView?.content?.substring(0,150) || 'N/A'}...
    `;
    openConfirmationModal({ 
        title: `View: ${articleToView?.title || 'Article'}`, 
        message: <pre className="whitespace-pre-wrap text-sm max-h-60 overflow-y-auto">{messageContent}</pre>, 
        confirmText: "Close", 
        showCancelButton: false 
    });
  };


  return (
    <LayoutAdmin>
      <main className="flex-1 md:ml-64 min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm py-4 px-6 hidden md:block sticky top-0 z-30">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-dark">Manage Articles</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input type="text" placeholder="Search articles..."
                  className="py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64" />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-dark md:hidden">Manage Articles</h2>
              <p className="text-gray-600 text-sm">
                Create, edit, and manage your blog articles and content.
              </p>
            </div>
            <button
              onClick={handleOpenAddModal}
              className="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <i className="fas fa-plus" />
              <span>Create New Article</span>
            </button>
          </div>

          {/* Article Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Artikel</p>
                  <h3 className="text-3xl font-bold text-dark">{articles.length}</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>12.5% dari bulan lalu</span> {/* Placeholder */}
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="fas fa-newspaper text-purple-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Dilihat</p>
                  <h3 className="text-3xl font-bold text-dark">{totalViews.toLocaleString()}</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>18.3% dari bulan lalu</span> {/* Placeholder */}
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="fas fa-eye text-blue-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Komentar</p>
                  <h3 className="text-3xl font-bold text-dark">{totalComments.toLocaleString()}</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>7.2% dari bulan lalu</span> {/* Placeholder */}
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <i className="fas fa-comments text-green-500 text-xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Search by title, author..." className="md:col-span-1 w-full py-2.5 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
                <select className="w-full py-2.5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                    <option value="">All Categories</option>
                    {[...new Set(articles.map(a => a.category))].sort().map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <select className="w-full py-2.5 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                    <option value="">All Statuses</option>
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Scheduled">Scheduled</option>
                </select>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50">
              <div className="flex items-center">
                <input type="checkbox" id="selectAllArticles" className="mr-3 h-4 w-4 rounded text-primary focus:ring-primary border-gray-300"
                  checked={selectAll} onChange={handleSelectAll} disabled={articles.length === 0} />
                <label htmlFor="selectAllArticles" className="text-gray-600 text-sm cursor-pointer">Select All</label>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={handleDeleteSelected} disabled={!currentArticles.some(a => a.checked)}
                  className="text-red-500 hover:text-red-700 px-3 py-1.5 rounded hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center gap-1.5">
                  <i className="fas fa-trash-alt" /><span>Delete Selected</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="bg-gray-100">
                  <tr className="text-left text-gray-600 text-xs uppercase tracking-wider">
                    <th className="p-4 font-semibold w-12"><input type="checkbox" aria-label="Select all articles in table" className="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300" checked={selectAll} onChange={handleSelectAll} disabled={currentArticles.length === 0} /></th>
                    <th className="p-4 font-semibold">Title</th>
                    <th className="p-4 font-semibold">Author</th>
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Date</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold text-center">Views</th>
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentArticles.map((article) => (
                    <tr key={article.id} className={`hover:bg-gray-50 transition-colors ${article.checked ? 'bg-blue-50' : ''}`}>
                      <td className="p-4"><input type="checkbox" aria-label={`Select article ${article.title}`} className="rounded text-primary focus:ring-primary h-4 w-4 border-gray-300" checked={article.checked} onChange={() => handleArticleCheck(article.id)} /></td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={article.featuredImage} alt={article.title} className="w-12 h-9 object-cover rounded shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x60/E9E9E9/B0B0B0?text=N/A"; }}/>
                          <div>
                            <h4 className="font-medium text-sm text-dark whitespace-nowrap max-w-xs truncate" title={article.title}>{article.title}</h4>
                            <p className="text-xs text-gray-500 truncate max-w-xs" title={article.excerpt}>{article.excerpt}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <img src={article.authorImage} alt={article.authorName} className="w-7 h-7 rounded-full object-cover"  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/32x32/CBD5E0/4A5568?text=AU"; }}/>
                          <span>{article.authorName}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-700">{article.category}</td>
                      <td className="p-4 text-sm text-gray-500">{article.publishDate ? new Date(article.publishDate).toLocaleDateString() : 'N/A'}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          article.status === "Published" ? "bg-green-100 text-green-700"
                          : article.status === "Draft" ? "bg-yellow-100 text-yellow-700"
                          : article.status === "Scheduled" ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700" }`}>
                          {article.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-700 text-center">{article.views.toLocaleString()}</td>
                      <td className="p-4">
                        <div className="flex gap-3 justify-center items-center">
                          <button onClick={() => handleViewArticle(article.id)} className="text-gray-500 hover:text-primary transition-colors" title="View Article"><i className="fas fa-eye text-base" /></button>
                          <button onClick={() => handleOpenEditModal(article.id)} className="text-blue-600 hover:text-blue-800 transition-colors" title="Edit Article"><i className="fas fa-edit text-base" /></button>
                          <button onClick={() => handleDeleteArticle(article.id)} className="text-red-500 hover:text-red-700 transition-colors" title="Delete Article"><i className="fas fa-trash-alt text-base" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {articles.length === 0 && (
                    <tr><td colSpan="8" className="p-8 text-center text-gray-500"><i className="fas fa-newspaper text-3xl mb-2 text-gray-400"></i><p>No articles found.</p></td></tr>
                  )}
                   {articles.length > 0 && currentArticles.length === 0 && (
                    <tr><td colSpan="8" className="p-8 text-center text-gray-500"><i className="fas fa-folder-open text-3xl mb-2 text-gray-400"></i><p>No articles on this page.</p></td></tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination Controls - STYLED AS PER IMAGE */}
             {articles.length > 0 && totalPages > 0 && ( // Only show pagination if there are articles and pages
                <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-gray-600 text-sm">
                        Showing <span className="font-medium">{articles.length > 0 ? indexOfFirstArticle + 1 : 0}</span> to <span className="font-medium">{Math.min(indexOfLastArticle, articles.length)}</span> of{" "}
                        <span className="font-medium">{articles.length}</span> results
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                           <i className="fas fa-chevron-left text-xs mr-1" /> Previous
                        </button>
                        
                        {/* Display current page number - styled like the active button in the image */}
                        <button
                            className="px-4 py-2 rounded-md border border-primary bg-primary text-white text-sm font-medium focus:outline-none"
                            aria-current="page"
                        >
                            {currentPage}
                        </button>
                        {/* If you want to show more page numbers, you'd map over an array of page numbers here */}

                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Next <i className="fas fa-chevron-right text-xs ml-1" />
                        </button>
                    </div>
                </div>
            )}
          </div>
        </div>
      </main>

      {confirmationModal.isOpen && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-[70]">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-dark">{confirmationModal.title}</h3>
                <button onClick={closeConfirmationModal} className="text-gray-400 hover:text-gray-600"><i className="fas fa-times text-lg"></i></button>
            </div>
            <div className="text-gray-700 mb-6 text-sm">{confirmationModal.message}</div>
            <div className="flex justify-end gap-3">
              {confirmationModal.showCancelButton && (
                <button onClick={closeConfirmationModal} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium">{confirmationModal.cancelText}</button>
              )}
              <button onClick={handleModalConfirm}
                className={`px-4 py-2 rounded-lg text-white transition font-medium ${confirmationModal.confirmText.toLowerCase().includes("delete") ? "bg-red-600 hover:bg-red-700" : "bg-primary hover:bg-opacity-90"}`}>
                {confirmationModal.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddArticleModal && (
        <AddArticleForm
          onClose={() => { setShowAddArticleModal(false); setEditingArticle(null); }}
          onAddArticle={handleAddOrUpdateArticle}
          onSaveDraft={handleSaveDraft}
          openModal={openConfirmationModal}
          editingArticle={editingArticle}
        />
      )}
    </LayoutAdmin>
  );
};

export default Articles;
