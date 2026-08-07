# ILT Membuat Websitemu Lebih Interaktif

Live demo: [Calm Playlist](https://calm-playlist.netlify.app/)

## Pengantar

Studi kasus ini ditujukan untuk ILT dengan materi DOM Manipulation dan Event. Ini adalah studi kasus lanjutan dari ILT belajar membangun kerangka halaman web dengan HTML dan CSS.

Hands-on kali ini berfokus pada DOM manipulation dan interaktif elemen HTML.

## Petunjuk

Branch repository ini mengandung dua direktori yang bersifat starter dan solution project. Sebagai pembuka sesi hands-on demo, instruktur dipersilakan untuk memanfaatkan project dalam direktori `starter`.

## Hasil Akhir Proyek

Hasil akhir dari kegiatan hands-on demo akan terlihat seperti berikut.

![Calm Playlist](calm-playlist-final.png?raw=true)

## Konten Calm Music

Karena akan menampilkan calm playlist, kita perlu menentukan struktur konten HTML. Berikut adalah contoh HTML yang bisa instruktur jadikan acuan.

```html
<article class="music-item" data-musicid="{{AUDIO ID}}">
  <img class="music-item__art" src="{{ART AUDIO IMAGE LINK}}" alt="" />
  <div class="music-item__body">
    <h3 class="music-item__title">{{AUDIO TITLE}}</h3>
    <p class="music-item__author">{{AUDIO AUTHOR}}</p>
    <audio class="music-item__audio" controls src="{{AUDIO LINK}}" preload="none"></audio>
    <p class="music-item__signature">{{AUDIO SIGNATURE}}</p>
  </div>
</article>
```

Karena konten di atas disalin berulang untuk setiap lagu, penandanya memakai `class`, bukan `id`.

Kode styling telah kami sediakan untuk memudahkan instruktur melakukan hands-on demo. Ini dengan catatan bahwa instruktur mengikuti struktur konten di atas.

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Menyiapkan starter project yang telah disediakan.
- [ ] Menampilkan calm playlist yang telah disediakan pada `scripts/utils.js` menggunakan `<template>`.
- [ ] Membuat tombol filter berdasarkan author lagu.
- [ ] Menyaring calm playlist saat tombol filter diklik (memanfaatkan event delegation).
- [ ] Mengatur agar dua atau lebih audio tidak dimainkan secara serentak (memanfaatkan event `play`).
- [ ] Menampilkan Now Playing bar mengikuti keadaan audio (event `play`, `pause`, dan `ended`).
