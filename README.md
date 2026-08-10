# ILT-1 Buat Website Pertamamu

Live demo: [Calm Playlist](https://calm-playlist-basic.netlify.app/)

## Pengantar

ILT 1 akan mengangkat materi tentang HTML dan CSS. Oleh karena itu, pengembangan aplikasi Calm Playlist akan diawali dengan membangun kerangka dan styling-nya.

## Petunjuk

Branch repository ini mengandung dua direktori yang bersifat starter dan solution project. Sebagai pembuka sesi hands-on demo, instruktur dipersilakan untuk memanfaatkan project dalam direktori `starter`.

Pada direktori `starter`, bagian header, footer, dan styling dasarnya telah disediakan. Instruktur cukup mengerjakan tiga tahap bertanda `TODO` berikut.

1. Menyusun elemen HTML baru pada `index.html`.
2. Menerapkan styling untuk elemen baru tersebut pada `assets/styles/style.css`.
3. Mengatur buka dan tutup drawer pada `assets/scripts/script.js`.

## Hasil Akhir Proyek

Hasil akhir dari kegiatan hands-on demo akan terlihat seperti berikut.

### Versi Desktop

![Calm Playlist in desktop version](design-concept-desktop.png?raw=true)

### Versi Mobile

![Calm Playlist in mobile version](design-concept-mobile.png?raw=true)

## Konten (HTML)

Beberapa kebutuhan konten landing page dapat dilihat pada poin-poin berikut.

### Header Content

- Logo: `assets/images/calm-logo.png`
- Navigation:
  - Blog: `#blog`
  - Calm Playlist: `#playlist`
  - Join Calm: `#join`
- Drawer Button: gunakan `aria-label`, `aria-controls`, dan `aria-expanded` agar keadaan tombol terbaca oleh pembaca layar.

### Intro Content

Bagian ini terdiri dari dua kolom, yaitu kolom teks dan kolom gambar.

- Heading 1: `Calm Playlist`
- Paragraph: `Musik latar untuk fokus dan produktif.`
- Image: `assets/images/headphone.png`

### Playlist Content

- Heading 2: `Daftar Lagu`
- Filter: `Semua`, `Amir Firouzfard`, `Patrick A`, `FASSound`
  - Bungkus tombolnya dalam elemen ber-`id="filterBar"` dengan `role="group"` dan `aria-label`.
  - Setiap tombol menyimpan nilainya pada `data-author` dan keadaannya pada `aria-pressed`.
- Music List:

  | Judul | Author |
  | --- | --- |
  | Coverless Book | Amir Firouzfard |
  | Lofi Orchestra | Patrick A |
  | For a Dream | Patrick A |
  | Good Night | FASSound |
  | Summer Rain | Patrick A |
  | Lofi Study | FASSound |

- Album Art: gunakan `assets/images/cover.png` untuk seluruh kartu.

## Styling (CSS)

### Color Pallete

- text: `#1A1A1A`
- muted: `#6B7280`
- line: `#E5E7EB`
- surface: `#FFFFFF`

### Font Type and Size

- Font Type:
  - Type: Inter
  - Link: [Inter Google Font](https://fonts.google.com/specimen/Inter?preview.text=This%20is%20a%20great%20font%20to%20use%3F&preview.text_type=custom)
- Font Size:
  - Navigation: 0.9rem
  - Heading 1: 2rem
  - Heading 2: 1.25rem
  - Judul lagu: 1rem
  - Nama author: 0.85rem

### Layout

- Intro: dua kolom menggunakan `display: flex`.
- Filter: berbaris ke samping menggunakan `display: flex`.
- Music List: beberapa kolom menggunakan `display: grid`.

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Menyiapkan starter project yang telah disediakan.
- [ ] Membangun kerangka halaman web menggunakan HTML.
  - [ ] Mengenalkan semantic HTML seperti `<header>` ,`<nav>`, `<main>`, `<footer>`, `<section>`, dll.
  - [ ] Menggunakan `<a>` menampilkan link navigasi.
  - [ ] Menggunakan `<img>` untuk menampilkan gambar.
  - [ ] Menggunakan `<ul>` dan `<li>` untuk menampilkan daftar navigasi.
  - [ ] Menggunakan `<button>` untuk tombol filter dan `<article>` untuk kartu musik.
- [ ] Menerapkan styling terhadap kerangka yang dibangun.
  - [ ] Menyusun intro menjadi dua kolom dengan Flexbox.
  - [ ] Menyusun daftar filter agar berbaris ke samping dengan Flexbox.
  - [ ] Menyusun daftar musik menjadi beberapa kolom dengan Grid.
- [ ] Menerapkan layout responsive dengan Flexbox.
- [ ] Mengatur buka dan tutup drawer dengan JavaScript.
  - [ ] Memperbarui `aria-expanded` dan `aria-label` mengikuti keadaan drawer.
