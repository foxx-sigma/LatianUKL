# 🕒 Aplikasi Presensi Online

Proyek ini dibuat untuk memenuhi **Uji Kenaikan Level (UKL) Kelas XI RPL** dengan studi kasus **"Aplikasi Presensi Online"**.  
Aplikasi ini dibangun menggunakan **NestJS** sebagai backend framework dan **Prisma ORM** untuk manajemen database.

---

## 🚀 Fitur Utama

- 🔐 **Autentikasi Pengguna**
  - Login menggunakan email dan password.
  - Menghasilkan token JWT untuk keamanan.

- 👥 **Manajemen Data Pengguna**
  - Tambah, ubah, dan lihat data pengguna (siswa/karyawan).

- 📅 **Presensi Online**
  - Mencatat kehadiran pengguna setiap hari.
  - Menampilkan riwayat presensi berdasarkan pengguna.
  - Rekap kehadiran bulanan dan analisis tingkat kehadiran.

---

## 🧰 Teknologi yang Digunakan

| Teknologi | Deskripsi |
|------------|------------|
| [NestJS](https://nestjs.com/) | Framework backend berbasis Node.js |
| [Prisma ORM](https://www.prisma.io/) | ORM modern untuk koneksi database |
| [MySQL](https://www.mysql.com/) | Database utama |
| [JWT](https://jwt.io/) | JSON Web Token untuk autentikasi |
| [Bcrypt](https://www.npmjs.com/package/bcrypt) | Enkripsi password |
| [Postman](https://www.postman.com/) | Testing API |

---

## ⚙️ Instalasi dan Menjalankan Project

1. **Clone repository**
   ```bash
   git clone https://github.com/<username>/presensi-api.git
   cd presensi-api


2. **Konfigurasi Database**
   ```bash
   DATABASE_URL="mysql://root:@localhost:3306/presensi_db"


3. **Inisialisasi Prisma**
   ```bash
   npx prisma migrate dev --name init


4. **Jalankan Server**
   ```bash
   npm run start
