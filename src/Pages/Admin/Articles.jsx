import React from "react";
import LayoutAdmin from "../../Components/LayoutAdmin";

const Articles = () => {
  return (
    <LayoutAdmin>
      <main className="flex-1 md:ml-64 min-h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm py-4 px-6 hidden md:block">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-dark">Kelola Artikel</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari..."
                  className="py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
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
        {/* Articles Content */}
        <div className="p-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold md:hidden">Kelola Artikel</h2>
              <p className="text-gray-500">
                Buat, edit, dan kelola artikel dan konten blog Anda.
              </p>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2">
              <i className="fas fa-plus" />
              <span>Buat Artikel Baru</span>
            </button>
          </div>
          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari artikel..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value>Semua Kategori</option>
                  <option value="reading">Membaca</option>
                  <option value="book-reviews">Ulasan Buku</option>
                  <option value="author-spotlights">Sorotan Penulis</option>
                  <option value="literary-analysis">Analisis Sastra</option>
                  <option value="writing-tips">Tips Menulis</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value>Semua Status</option>
                  <option value="published">Diterbitkan</option>
                  <option value="draft">Draf</option>
                  <option value="scheduled">Dijadwalkan</option>
                </select>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  <i className="fas fa-filter" />
                  <span className="ml-2">Filter Lainnya</span>
                </button>
              </div>
            </div>
          </div>
          {/* Articles Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3 rounded text-primary focus:ring-primary"
                />
                <span className="text-gray-500 text-sm">Pilih Semua</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-gray-500 hover:text-primary px-2 py-1 rounded hover:bg-gray-100">
                  <i className="fas fa-trash-alt" />
                  <span className="ml-1">Hapus</span>
                </button>
                <button className="text-gray-500 hover:text-primary px-2 py-1 rounded hover:bg-gray-100">
                  <i className="fas fa-download" />
                  <span className="ml-1">Ekspor</span>
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
                      />
                    </th>
                    <th className="p-4 font-medium">Judul</th>
                    <th className="p-4 font-medium">Penulis</th>
                    <th className="p-4 font-medium">Kategori</th>
                    <th className="p-4 font-medium">Tanggal</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Dilihat</th>
                    <th className="p-4 font-medium">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Artikel 1 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-12 h-9 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            Kekuatan Membaca: Bagaimana Buku Membentuk Kehidupan Kita
                          </h4>
                          <p className="text-sm text-gray-500 truncate max-w-xs">
                            Di dunia yang didominasi oleh layar digital...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Penulis"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>Sarah Johnson</span>
                      </div>
                    </td>
                    <td className="p-4">Membaca</td>
                    <td className="p-4">10 Mei 2025</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Diterbitkan
                      </span>
                    </td>
                    <td className="p-4">1.245</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Artikel 2 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-12 h-9 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            10 Novel Klasik yang Harus Dibaca Setiap Orang Setidaknya Sekali
                          </h4>
                          <p className="text-sm text-gray-500 truncate max-w-xs">
                            Dari Jane Austen hingga Fyodor Dostoevsky...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Penulis"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>Robert Williams</span>
                      </div>
                    </td>
                    <td className="p-4">Ulasan Buku</td>
                    <td className="p-4">28 April 2025</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Diterbitkan
                      </span>
                    </td>
                    <td className="p-4">987</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Artikel 3 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-12 h-9 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            Cara Menciptakan Lingkungan Membaca yang Sempurna di Rumah
                          </h4>
                          <p className="text-sm text-gray-500 truncate max-w-xs">
                            Ubah ruang mana pun menjadi sudut baca yang nyaman...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Penulis"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>Jennifer Lee</span>
                      </div>
                    </td>
                    <td className="p-4">Gaya Hidup</td>
                    <td className="p-4">5 Mei 2025</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Diterbitkan
                      </span>
                    </td>
                    <td className="p-4">756</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Artikel 4 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-12 h-9 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            Membacakan untuk Anak: Mengapa Ini Lebih Penting Dari
                            Sebelumnya
                          </h4>
                          <p className="text-sm text-gray-500 truncate max-w-xs">
                            Di era digital, membacakan buku untuk anak-anak...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Penulis"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>Marcus Johnson</span>
                      </div>
                    </td>
                    <td className="p-4">Pendidikan</td>
                    <td className="p-4">2 Mei 2025</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Diterbitkan
                      </span>
                    </td>
                    <td className="p-4">632</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Artikel 5 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-12 h-9 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            Buku Digital vs Fisik: Menemukan Format Membaca
                            Sempurna Anda
                          </h4>
                          <p className="text-sm text-gray-500 truncate max-w-xs">
                            Perdebatan antara e-book dan buku fisik
                            berlanjut...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Penulis"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>Alicia Chen</span>
                      </div>
                    </td>
                    <td className="p-4">Teknologi</td>
                    <td className="p-4">25 April 2025</td>
                    <td className="p-4">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                        Draf
                      </span>
                    </td>
                    <td className="p-4">0</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Artikel 6 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-12 h-9 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            Daftar Bacaan Musim Panas 2025: Bacaan Pantai dan Lainnya
                          </h4>
                          <p className="text-sm text-gray-500 truncate max-w-xs">
                            Dari thriller yang menegangkan hingga fiksi sastra
                            yang menggugah pikiran...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Penulis"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>Emily Rodriguez</span>
                      </div>
                    </td>
                    <td className="p-4">Daftar Buku</td>
                    <td className="p-4">20 April 2025</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        Dijadwalkan
                      </span>
                    </td>
                    <td className="p-4">0</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Artikel 7 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-12 h-9 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            Wawancara dengan Penulis Terlaris James Clear
                          </h4>
                          <p className="text-sm text-gray-500 truncate max-w-xs">
                            Kami berbincang dengan James Clear, penulis "Atomic
                            Habits"...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Penulis"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>David Thompson</span>
                      </div>
                    </td>
                    <td className="p-4">Sorotan Penulis</td>
                    <td className="p-4">15 April 2025</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Diterbitkan
                      </span>
                    </td>
                    <td className="p-4">1.023</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Artikel 8 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-12 h-9 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium">
                            Seni Membaca Lambat di Dunia yang Serba Cepat
                          </h4>
                          <p className="text-sm text-gray-500 truncate max-w-xs">
                            Temukan kembali kesenangan membaca mendalam dan bagaimana hal itu
                            dapat meningkatkan...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=30&width=30"
                          alt="Penulis"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>Michael Brown</span>
                      </div>
                    </td>
                    <td className="p-4">Membaca</td>
                    <td className="p-4">10 April 2025</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Diterbitkan
                      </span>
                    </td>
                    <td className="p-4">876</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <i className="fas fa-edit" />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <i className="fas fa-eye" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                Menampilkan 1 hingga 8 dari 42 artikel
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  disabled
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <button className="px-3 py-1 rounded bg-primary text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  4
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  5
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
          {/* Article Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Artikel</p>
                  <h3 className="text-2xl font-bold">42</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>12.5% dari bulan lalu</span>
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <i className="fas fa-newspaper text-purple-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Dilihat</p>
                  <h3 className="text-2xl font-bold">24.567</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>18.3% dari bulan lalu</span>
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="fas fa-eye text-blue-500 text-xl" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Komentar</p>
                  <h3 className="text-2xl font-bold">1.243</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1" />
                    <span>7.2% dari bulan lalu</span>
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <i className="fas fa-comments text-green-500 text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* Popular Articles */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold">Artikel Terpopuler</h3>
              <a href="#" className="text-primary hover:underline text-sm">
                Lihat Semua
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
                    <th className="pb-3 font-medium">Judul</th>
                    <th className="pb-3 font-medium">Penulis</th>
                    <th className="pb-3 font-medium">Kategori</th>
                    <th className="pb-3 font-medium">Dilihat</th>
                    <th className="pb-3 font-medium">Komentar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-10 h-8 object-cover rounded"
                        />
                        <span>
                          Kekuatan Membaca: Bagaimana Buku Membentuk Kehidupan Kita
                        </span>
                      </div>
                    </td>
                    <td className="py-3">Sarah Johnson</td>
                    <td className="py-3">Membaca</td>
                    <td className="py-3">1.245</td>
                    <td className="py-3">87</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-10 h-8 object-cover rounded"
                        />
                        <span>
                          Wawancara dengan Penulis Terlaris James Clear
                        </span>
                      </div>
                    </td>
                    <td className="py-3">David Thompson</td>
                    <td className="py-3">Sorotan Penulis</td>
                    <td className="py-3">1.023</td>
                    <td className="py-3">64</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-10 h-8 object-cover rounded"
                        />
                        <span>
                          10 Novel Klasik yang Harus Dibaca Setiap Orang Setidaknya Sekali
                        </span>
                      </div>
                    </td>
                    <td className="py-3">Robert Williams</td>
                    <td className="py-3">Ulasan Buku</td>
                    <td className="py-3">987</td>
                    <td className="py-3">52</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-10 h-8 object-cover rounded"
                        />
                        <span>
                          Seni Membaca Lambat di Dunia yang Serba Cepat
                        </span>
                      </div>
                    </td>
                    <td className="py-3">Michael Brown</td>
                    <td className="py-3">Membaca</td>
                    <td className="py-3">876</td>
                    <td className="py-3">41</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src="/placeholder.svg?height=60&width=80"
                          alt="Artikel"
                          className="w-10 h-8 object-cover rounded"
                        />
                        <span>
                          Cara Menciptakan Lingkungan Membaca yang Sempurna di Rumah
                        </span>
                      </div>
                    </td>
                    <td className="py-3">Jennifer Lee</td>
                    <td className="py-3">Gaya Hidup</td>
                    <td className="py-3">756</td>
                    <td className="py-3">38</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </LayoutAdmin>
  );
};

export default Articles;