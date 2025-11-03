# SITTA - Sistem Informasi Tracking dan Transaksi Bahan Ajar

Aplikasi web front-end untuk pemesanan dan tracking bahan ajar Universitas Terbuka.

## 🚀 Informasi Login

**Kredensial Login (Multiple Users):**
- **Email:** `rina@ut.ac.id` | **Password:** `rina123` (UPBJJ Jakarta)
- **Email:** `agus@ut.ac.id` | **Password:** `agus123` (UPBJJ Makassar)
- **Email:** `siti@ut.ac.id` | **Password:** `siti123` (Puslaba)
- **Email:** `doni@ut.ac.id` | **Password:** `doni123` (FISIP)
- **Email:** `admin@ut.ac.id` | **Password:** `admin123` (Administrator)

**Catatan:** Aplikasi ini menggunakan data dummy dan tidak memerlukan backend atau database.

## 📋 Fitur yang Tersedia

### 1. Halaman Login (`index.html`)
- **Validasi Form Login**: Memeriksa email dan password terhadap multiple users
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
- **Detail Bahan Ajar**: Klik kode atau nama untuk melihat detail lengkap dengan cover image

### 4. Detail Bahan Ajar (`detail.html`)
- **Cover Image**: Gambar cover bahan ajar berukuran 200x280px
- **Informasi Umum**:
  - Kode Lokasi
  - Kode Barang
  - Nama Barang
  - Jenis Barang
  - Edisi
  - Stok Tersedia

### 5. Tracking Pengiriman (`tracking.html`)
- **Pencarian DO**: Cari status pengiriman berdasarkan Nomor Delivery Order
- **Data Tracking Tersedia**:
  - `2023001234` - Rina Wulandari (Dalam Perjalanan - JNE)
  - `2023005678` - Agus Pranoto (Dikirim - Pos Indonesia)
- **Informasi yang Ditampilkan**:
  - Nama Mahasiswa
  - Status Pengiriman dengan Progress Bar
  - Detail Paket (tanggal kirim, ekspedisi, paket, total biaya)
  - Perjalanan Paket (step-by-step tracking dengan timestamp)

## 📚 Daftar Bahan Ajar Tersedia

| Kode Barang | Nama Barang | Jenis | Edisi | Stok | Cover Image |
|-------------|-------------|-------|-------|------|-------------|
| ASIP4301 | Pengantar Ilmu Komunikasi | BMP | 2 | 548 | pengantar_komunikasi.jpg |
| EKMA4216 | Manajemen Keuangan | BMP | 3 | 392 | manajemen_keuangan.jpg |
| EKMA4310 | Kepemimpinan | BMP | 1 | 278 | kepemimpinan.jpg |
| BIOL4211 | Mikrobiologi Dasar | BMP | 2 | 165 | mikrobiologi.jpg |
| PAUD4401 | Perkembangan Anak Usia Dini | BMP | 4 | 204 | paud_perkembangan.jpeg |

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
├── js/
│   ├── data.js        # Data dummy untuk aplikasi
│   └── script.js      # Logika JavaScript
└── img/
    ├── pengantar_komunikasi.jpg
    ├── manajemen_keuangan.jpg
    ├── kepemimpinan.jpg
    ├── mikrobiologi.jpg
    └── paud_perkembangan.jpeg
```

## 🎯 Cara Menggunakan

1. **Login**: Masuk dengan salah satu kredensial user yang tersedia
2. **Navigasi**: Gunakan menu navigasi untuk berpindah halaman
3. **Kelola Stok**:
   - Lihat daftar bahan ajar di halaman stok
   - Klik kode/nama untuk melihat detail dengan cover image
   - Tambah bahan ajar baru menggunakan form
4. **Tracking**:
   - Masukkan nomor DO yang tersedia (2023001234 atau 2023005678)
   - Lihat status dan detail pengiriman lengkap

## ✨ Fitur Khusus

- **Multi-User Authentication**: 5 user accounts dengan role berbeda
- **Responsive Design**: Tampilan optimal di desktop dan mobile
- **Modal Box**: Popup untuk pendaftaran dan lupa password
- **Dynamic Content**: Data ditampilkan secara dinamis menggunakan JavaScript
- **Image Integration**: Cover images pada halaman detail
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
- Cover images hanya ditampilkan di halaman detail, bukan di list view

---

**Dikembangkan untuk Tugas Praktik Front-End Development**
