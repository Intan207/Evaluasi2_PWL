
# Intan News - Portal Berita 

Deskripsi Aplikasi 
Intan News adalah aplikasi web portal berita yang dibangun menggunakan Next.js dengan TypeScript dan Tailwind CSS untuk styling modern dan responsif. Aplikasi ini menyediakan autentikasi pengguna menggunakan Google OAuth melalui NextAuth.js serta menampilkan berita terkini dari berbagai sumber melalui NewsAPI.
Fitur utama meliputi:
- Autentikasi aman dengan login Google
- Halaman berita dengan daftar artikel lengkap
- Navigasi sederhana dengan tombol logout
- Responsif dan UI modern dengan CSS modular

Struktur Proyek
- app/ — folder utama Next.js dengan App Router
- app/api/auth/[...nextauth]/route.js — konfigurasi NextAuth.js untuk autentikasi Google
- app/login/page.js — halaman login dengan tombol Google Sign-In
- app/news/page.js — halaman utama menampilkan berita
- styles/news.module.css — styling CSS modular untuk halaman berita
- .env.local — file konfigurasi environment untuk variabel rahasia
  
Instalasi & Menjalankan Aplikasi 
1. Download dan ekstrak proyek dari repository GitHub.
2. Buka folder proyek di Visual Studio Code.
3. Jalankan perintah untuk instal dependensi:
   "npm install"
4. Jalankan aplikasi dalam mode development:
   "npm run dev"
6. Buka browser dan akses http://localhost:3000/login untuk memulai login.

Autentifikasi Pengguna
Aplikasi menggunakan NextAuth.js dengan GoogleProvider untuk autentikasi Google OAuth. Setelah login, pengguna otomatis diarahkan ke halaman berita (/news). Logout dapat dilakukan melalui tombol di header yang mengarahkan kembali ke halaman login.

Halaman Login
Halaman login menampilkan tombol “Login with Google” yang memicu proses autentikasi. Status loading akan ditampilkan saat autentikasi berjalan.

Halaman Berita
- Menampilkan daftar artikel berita dari NewsAPI berdasarkan query bbc,cnn dan Bloomberg.
- Menangani status loading dan error dengan feedback visual.
- Artikel ditampilkan dengan gambar, judul interaktif, deskripsi singkat, tanggal terbit, dan tautan baca selengkapnya.
- Header navigasi dengan logo dan tombol logout.

Styling
Styling menggunakan CSS Modules (news.module.css) dengan desain modern, menggunakan palet warna biru, merah, dan abu-abu.
- Header sticky dengan bayangan halus
- Grid responsif untuk daftar artikel
- Efek hover dan animasi zoom pada gambar artikel
- Loading spinner sederhana dan pesan error yang jelas

Teknologi yang Digunakan
- Next.js (App Router, SSR & SSG)
- React dan Hooks (useState, useEffect)
- NextAuth.js untuk autentikasi
- NewsAPI untuk data berita
- CSS Modules untuk styling
- Node.js dan npm


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
