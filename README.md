# SITTA - Sistem Informasi Tracking dan Transaksi Bahan Ajar

Aplikasi web front-end untuk pemesanan dan tracking bahan ajar Universitas Terbuka.

## 🚀 Informasi Login

**Kredensial Login:**
- **Email:** `ut@ac.id`
- **Password:** `123`

**Catatan:** Aplikasi ini menggunakan data dummy dan tidak memerlukan backend atau database.

## 📋 Fitur yang Tersedia

### 1. Halaman Login (`index.html`)
- **Validasi Form Login**: Memeriksa email dan password
- **Modal Pendaftaran**: Form untuk membuat akun baru
- **Modal Lupa Password**: Form untuk reset password
- **Alert Error**: Menampilkan pesan error jika login gagal

### 2. Dashboard (`dashboard.html`)
- **Greeting Dinamis**: Menampilkan salam berdasarkan waktu (pagi, siang, sore, malam)
- **Navigasi Menu**: Menu utama dengan dropdown untuk laporan
- **Menu Navigasi:**
  - Informasi Bahan Ajar
  - Tracking Pengiriman
  - Laporan (dropdown)
    - Monitoring Progress DO
    - Rekap Bahan Ajar
  - Histori Transaksi Bahan Ajar

### 3. Informasi Stok Bahan Ajar (`stok.html`)
- **Tabel Stok**: Menampilkan daftar bahan ajar dengan informasi:
  - Kode Barang (clickable)
  - Nama Barang (clickable)
  - Jenis
  - Edisi
  - Stok Tersedia
- **Form Tambah Stok**: Menambahkan bahan ajar baru ke tabel
- **Detail Bahan Ajar**: Klik kode atau nama untuk melihat detail lengkap

### 4. Detail Bahan Ajar (`detail.html`)
- **Informasi Umum**:
  - Kode, Nama, Jenis, Edisi
  - Stok Tersedia
  - Pengarang, ISBN
  - Jumlah Halaman, Berat
- **Deskripsi**: Penjelasan singkat tentang bahan ajar
- **Rangkuman Materi**: Ringkasan konten pembelajaran

### 5. Tracking Pengiriman (`tracking.html`)
- **Pencarian DO**: Cari status pengiriman berdasarkan Nomor Delivery Order
- **Data Tracking Tersedia**:
  - `18503964874` - ROIKA HEPRIDA SITIO
  - `12345678901` - BUDI SANTOSO
  - `98765432109` - SITI AMINAH
- **Informasi yang Ditampilkan**:
  - Nama Mahasiswa
  - Status Pengiriman dengan Progress Bar
  - Detail Paket (tanggal kirim, jenis paket)
  - Perjalanan Paket (step-by-step tracking)

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik
- **CSS3**: Styling responsive dengan Grid dan Flexbox
- **JavaScript**: DOM manipulation dan form handling
- **Data Dummy**: File `data.js` untuk simulasi data

## 📁 Struktur File

```
sitta-praktik/
├── index.html          # Halaman Login
├── dashboard.html      # Dashboard Menu
├── stok.html          # Informasi Stok Bahan Ajar
├── detail.html        # Detail Bahan Ajar
├── tracking.html      # Tracking Pengiriman
├── css/
│   └── style.css      # Stylesheet utama
└── js/
    ├── data.js        # Data dummy untuk aplikasi
    └── script.js      # Logika JavaScript
```

## 🎯 Cara Menggunakan

1. **Login**: Masuk dengan kredensial yang tersedia
2. **Navigasi**: Gunakan menu navigasi untuk berpindah halaman
3. **Kelola Stok**:
   - Lihat daftar bahan ajar di halaman stok
   - Klik kode/nama untuk melihat detail
   - Tambah bahan ajar baru menggunakan form
4. **Tracking**:
   - Masukkan nomor DO yang tersedia
   - Lihat status dan detail pengiriman

## ✨ Fitur Khusus

- **Responsive Design**: Tampilan optimal di desktop dan mobile
- **Modal Box**: Popup untuk pendaftaran dan lupa password
- **Dynamic Content**: Data ditampilkan secara dinamis menggunakan JavaScript
- **Error Handling**: Penanganan error untuk input tidak valid
- **User Experience**: Navigasi yang intuitif dan informatif

## 🔧 Menjalankan Aplikasi

1. Buka file `index.html` di browser web
2. Atau gunakan server lokal:
   ```bash
   cd sitta-praktik
   python3 -m http.server 8000
   ```
3. Buka `http://localhost:8000` di browser

## 📝 Catatan

- Aplikasi ini adalah front-end only dan tidak menyimpan data secara permanen
- Semua data akan reset ketika halaman di-refresh
- Data dummy dapat diubah di file `js/data.js`
- Aplikasi dirancang untuk keperluan pembelajaran dan demonstrasi

---

**Dikembangkan untuk Tugas Praktik Front-End Development**
