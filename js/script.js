// script.js

// Pastikan kode JS berjalan setelah halaman dimuat
document.addEventListener("DOMContentLoaded", () => {

    // ========== LOGIN PAGE FUNCTIONALITY ==========
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Mencegah form reload halaman
            
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            
            // Logika validasi sederhana (sesuai data dummy Anda)
            const user = dataPengguna.find(u => u.email === email && u.password === password);
            if (user) {
                // Jika berhasil, arahkan ke dashboard
                window.location.href = "dashboard.html";
            } else {
                // Jika gagal, munculkan alert
                alert("email/password yang anda masukkan salah");
            }
        });
    }
    
    // Logika untuk membuka modal "Daftar"
    const daftarBtn = document.getElementById("daftar-btn");
    const daftarModal = document.getElementById("daftar-modal");
    const closeDaftarBtn = document.querySelector("#daftar-modal .close-btn");
    
    if (daftarBtn) {
        daftarBtn.addEventListener("click", () => {
            daftarModal.style.display = "block";
        });
    }
    
    if (closeDaftarBtn) {
        closeDaftarBtn.addEventListener("click", () => {
            daftarModal.style.display = "none";
        });
    }
    
    // Logika untuk membuka modal "Lupa Password"
    const lupaPasswordBtn = document.getElementById("lupa-password-btn");
    const lupaPasswordModal = document.getElementById("lupa-password-modal");
    const closeLupaPasswordBtn = document.querySelector("#lupa-password-modal .close-btn");
    
    if (lupaPasswordBtn) {
        lupaPasswordBtn.addEventListener("click", () => {
            lupaPasswordModal.style.display = "block";
        });
    }
    
    if (closeLupaPasswordBtn) {
        closeLupaPasswordBtn.addEventListener("click", () => {
            lupaPasswordModal.style.display = "none";
        });
    }

    // ========== DASHBOARD PAGE FUNCTIONALITY ==========
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
        const jam = new Date().getHours();
        let ucapan = "";
        
        if (jam < 12) {
            ucapan = "Selamat Pagi";
        } else if (jam < 15) {
            ucapan = "Selamat Siang";
        } else if (jam < 18) {
            ucapan = "Selamat Sore";
        } else {
            ucapan = "Selamat Malam";
        }
        
        // Manipulasi DOM untuk menampilkan ucapan
        greetingEl.innerText = ucapan;
    }

    // ========== STOK PAGE FUNCTIONALITY ==========
    const stokTableBody = document.getElementById("stok-table-body");
    const formTambahStok = document.getElementById("form-tambah-stok");

    // Fungsi untuk me-render satu baris data ke tabel
    const renderStokRow = (item) => {
        const tr = document.createElement("tr"); // Buat baris baru
        tr.innerHTML = `
            <td><a href="detail.html?kode=${item.kodeBarang}" class="material-link">${item.kodeBarang}</a></td>
            <td><a href="detail.html?kode=${item.kodeBarang}" class="material-link">${item.namaBarang}</a></td>
            <td>${item.jenisBarang}</td>
            <td>${item.edisi}</td>
            <td>${item.stok}</td>
        `;
        stokTableBody.appendChild(tr); // Tambahkan baris ke <tbody>
    };

    // 1. Tampilkan data awal (jika kita di halaman stok)
    if (stokTableBody) {
        dataBahanAjar.forEach((item) => {
            renderStokRow(item); // Panggil fungsi render untuk setiap item
        });
    }

    // 2. Tambah baris baru (jika form-nya ada)
    if (formTambahStok) {
        formTambahStok.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Ambil data dari form
            const itemBaru = {
                kode: document.getElementById("kode-barang").value,
                nama: document.getElementById("nama-barang").value,
                jenis: document.getElementById("jenis-barang").value,
                edisi: document.getElementById("edisi-barang").value,
                stok: document.getElementById("stok-barang").value
            };
            
            // Render baris baru ke tabel
            renderStokRow(itemBaru);
            
            // Opsional: tambahkan data baru ke array dataBahanAjar
            // dataBahanAjar.push(itemBaru); 
            
            // Kosongkan form
            formTambahStok.reset();
        });
    }

    // ========== TRACKING PAGE FUNCTIONALITY ==========
    const trackingForm = document.getElementById("tracking-form");
    const trackingResultContainer = document.getElementById("tracking-result-container");

    if (trackingForm) {
        trackingForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Mencegah halaman reload

            // 1. Ambil nilai input
            const noDoInput = document.getElementById("no-do").value;

            // 2. Cari data di object (dari data.js)
            const hasil = dataTracking[noDoInput];

            // 3. Kosongkan hasil sebelumnya
            trackingResultContainer.innerHTML = "";

            // 4. Tampilkan hasil
            if (hasil) {
                // Jika data DITEMUKAN
                // Tampilkan Nama Mahasiswa, Status, Detail
                
                // Buat HTML untuk detail perjalanan (list)
                let detailList = "<ul>";
                hasil.perjalanan.forEach(step => {
                    detailList += `<li><strong>${step.waktu}</strong> - ${step.keterangan}</li>`;
                });
                detailList += "</ul>";

                // Progress bar logic based on status
                let progressValue = 0;
                if (hasil.status === "Selesai Antar") progressValue = 100;
                else if (hasil.status === "Proses antar ke Cimahi") progressValue = 75;
                else if (hasil.status === "Diteruskan ke Kantor Kota Bandung") progressValue = 50;
                else progressValue = 25;

                trackingResultContainer.innerHTML = `
                    <h3>${hasil.nama}</h3>
                    <p><strong>Nomor DO:</strong> ${hasil.nomorDO}</p>
                    
                    <h4>Status Pengiriman:</h4>
                    <p><strong>${hasil.status}</strong></p>
                    <progress value="${progressValue}" max="100"></progress>
                    
                    <h4>Detail Paket:</h4>
                    <p><strong>Tanggal Kirim:</strong> ${hasil.tanggalKirim}</p>
                    <p><strong>Ekspedisi:</strong> ${hasil.ekspedisi}</p>
                    <p><strong>Paket:</strong> ${hasil.paket}</p>
                    <p><strong>Total Biaya:</strong> ${hasil.total}</p>
                    
                    <h4>Perjalanan Paket:</h4>
                    ${detailList}
                `;
            } else {
                // Jika data TIDAK ditemukan
                trackingResultContainer.innerHTML = `
                    <p class="error">Data untuk No. DO "${noDoInput}" tidak ditemukan. Silakan periksa kembali.</p>
                `;
            }
        });
    }

    // ========== DETAIL PAGE FUNCTIONALITY ==========
    const detailContainer = document.getElementById("detail-container");
    if (detailContainer) {
        // Get material code from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const kodeBarang = urlParams.get('kode');
        
        if (kodeBarang) {
            // Find the material in dataBahanAjar
            const material = dataBahanAjar.find(item => item.kodeBarang === kodeBarang);
            
            if (material) {
                // Display detailed information
                detailContainer.innerHTML = `
                    <div class="detail-header">
                        <div class="detail-cover">
                            <img src="${material.cover}" alt="${material.namaBarang}" class="material-cover">
                        </div>
                        <div class="detail-title">
                            <h2>${material.namaBarang}</h2>
                            <p class="material-code">Kode: ${material.kodeBarang}</p>
                        </div>
                    </div>
                    
                    <div class="detail-info">
                        <div class="info-section">
                            <h3>Informasi Umum</h3>
                            <div class="info-grid">
                                <div class="info-item">
                                    <strong>Kode Lokasi:</strong> ${material.kodeLokasi}
                                </div>
                                <div class="info-item">
                                    <strong>Jenis:</strong> ${material.jenisBarang}
                                </div>
                                <div class="info-item">
                                    <strong>Edisi:</strong> ${material.edisi}
                                </div>
                                <div class="info-item">
                                    <strong>Stok Tersedia:</strong> ${material.stok}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detail-actions">
                        <a href="stok.html" class="back-button">← Kembali ke Daftar Bahan Ajar</a>
                    </div>
                `;
            } else {
                detailContainer.innerHTML = `
                    <div class="error-message">
                        <h2>Bahan Ajar Tidak Ditemukan</h2>
                        <p>Bahan ajar dengan kode "${kodeBarang}" tidak ditemukan dalam sistem.</p>
                        <a href="stok.html" class="back-button">← Kembali ke Daftar Bahan Ajar</a>
                    </div>
                `;
            }
        } else {
            detailContainer.innerHTML = `
                <div class="error-message">
                    <h2>Kode Barang Tidak Ditemukan</h2>
                    <p>Silakan pilih bahan ajar dari halaman daftar stok untuk melihat detail.</p>
                    <a href="stok.html" class="back-button">← Kembali ke Daftar Bahan Ajar</a>
                </div>
            `;
        }
    }

});
