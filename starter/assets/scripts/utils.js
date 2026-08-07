const musicsSample = [
  {
    id: '01-coverless-book',
    title: 'Coverless Book',
    author: 'Amir Firouzfard',
    signature: 'Music by <a href="https://pixabay.com/users/ambientaudiovision-25188255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Amir Firouzfard</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/01-coverless-book.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/01-coverless-book.jpg'
  },
  {
    id: '02-lofi-orchestra',
    title: 'Lofi Orchestra',
    author: 'Patrick A',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/02-lofi-orchestra.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/02-lofi-orchestra.jpg'
  },
  {
    id: '03-for-a-dream',
    title: 'For a Dream',
    author: 'Patrick A',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/03-for-a-dream.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/03-for-a-dream.jpg'
  },
  {
    id: '04-goodnight',
    title: 'Good Night',
    author: 'FASSound',
    signature: 'Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/04-goodnight.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/04-goodnight.jpg'
  },
  {
    id: '05-summer-rain',
    title: 'Summer Rain',
    author: 'Patrick A',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/05-summer-rain.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/05-summer-rain.jpg'
  },
  {
    id: '06-lofi-study',
    title: 'Lofi Study',
    author: 'FASSound',
    signature: 'Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/06-lofi-study.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/06-lofi-study.jpg'
  },
  {
    id: '07-forest-guitar-lofi',
    title: 'Forest Guitar Lofi',
    author: 'xethrocc',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=161108">Patrick A.</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=161108">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/07-forest-guitar-lofi.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/07-forest-guitar-lofi.jpg'
  },
  {
    id: '08-chilling-homer',
    title: 'Chilling Homer',
    author: 'OpenMusicList',
    signature: 'Music by <a href="https://pixabay.com/users/openmusiclist-24014275/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=187573">OpenMusicList</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=187573">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/08-chilling-homer.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/08-chilling-homer.jpg'
  },
  {
    id: '09-dust',
    title: 'Dust',
    author: 'xethrocc',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205063">Patrick A.</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205063">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/09-dust.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/09-dust.jpg'
  },
  {
    id: '10-zombies',
    title: 'Zombies',
    author: 'Patrick A',
    signature: 'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154347">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154347">Pixabay</a>',
    audioLink: 'https://github.com/dicoding-dev/static-files/raw/refs/heads/master/calm-music-api/musics/10-zombies.mp3',
    artLink: 'https://rawcdn.githack.com/dicoding-dev/static-files/master/calm-music-api/arts/10-zombies.jpg'
  }
];

export function getAllMusics() {
  return [...musicsSample];
}

export function getMusicById(id) {
  return musicsSample.find((music) => music.id === id);
}

// Mengumpulkan nama author tanpa ada yang kembar.
export function getAllAuthors() {
  const authors = [];

  musicsSample.forEach((music) => {
    if (!authors.includes(music.author)) {
      authors.push(music.author);
    }
  });

  return authors;
}

/** Nilai filter untuk "tampilkan semua". Dipakai juga sebagai data-author. */
export const ALL_AUTHORS = 'all';

export function filterMusicsByAuthor(musics, author) {
  if (author === ALL_AUTHORS) return musics;
  return musics.filter((music) => music.author === author);
}

/**
 * Membuat satu kartu musik dari <template>.
 *
 * See: <template>: The Content Template element
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 */
export function createMusicItemElement(music) {
  const template = document.getElementById('musicItemTemplate');

  // cloneNode(true) = salin beserta seluruh isinya
  const fragment = template.content.cloneNode(true);

  const article = fragment.querySelector('.music-item');
  const art = fragment.querySelector('.music-item__art');
  const title = fragment.querySelector('.music-item__title');
  const author = fragment.querySelector('.music-item__author');
  const audio = fragment.querySelector('.music-item__audio');
  const signature = fragment.querySelector('.music-item__signature');

  // Disimpan di elemen supaya nanti bisa dibaca lagi lewat dataset.
  article.dataset.musicid = music.id;

  art.src = music.artLink;

  // textContent: isi diperlakukan sebagai teks biasa
  title.textContent = music.title;
  author.textContent = music.author;

  audio.src = music.audioLink;
  audio.setAttribute('aria-label', `Putar ${music.title} oleh ${music.author}`);

  // innerHTML dipakai HANYA karena `signature` memang berisi tag <a>
  signature.innerHTML = music.signature;

  return fragment;
}

/** Nilai author disimpan di data-author, bukan dibaca dari teks tombol. */
export function createFilterButtonElement(author, label) {
  const button = document.createElement('button');

  button.type = 'button';
  button.className = 'filter-button';
  button.textContent = label;
  button.dataset.author = author;
  button.setAttribute('aria-pressed', 'false');

  return button;
}

function setDrawerOpen(isOpen) {
  const drawerButton = document.getElementById('drawerButton');
  const navList = document.getElementById('navList');

  let label = 'Buka menu navigasi';

  if (isOpen) {
    label = 'Tutup menu navigasi';
  }

  navList.classList.toggle('open', isOpen);

  // Tombol ikut memberi tahu keadaannya, bukan hanya tampilannya.
  drawerButton.setAttribute('aria-expanded', isOpen);
  drawerButton.setAttribute('aria-label', label);
}

export function setupDrawer() {
  const drawerButton = document.getElementById('drawerButton');
  const navList = document.getElementById('navList');

  drawerButton.addEventListener('click', () => {
    setDrawerOpen(!navList.classList.contains('open'));
  });

  /**
   * Klik di mana pun untuk menutup drawer. Contoh event bubbling: klik pada
   * elemen anak akan "naik" sampai ke body.
   *
   * Klik pada link di dalam drawer tidak menutupnya karena link itu bagian
   * dari navList. Tambahkan listener terpisah pada navList bila diperlukan.
   */
  document.body.addEventListener('click', (event) => {
    if (!navList.contains(event.target) && !drawerButton.contains(event.target)) {
      setDrawerOpen(false);
    }
  });

  // Fokus dikembalikan ke tombol pemicu supaya pengguna keyboard tidak tersesat.
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (!navList.classList.contains('open')) return;

    setDrawerOpen(false);
    drawerButton.focus();
  });
}

export function showNowPlaying(music) {
  const nowPlaying = document.getElementById('nowPlaying');

  // Now Playing bar hanya ada satu di halaman, jadi id boleh dipakai.
  const art = document.getElementById('nowPlayingArt');
  const title = document.getElementById('nowPlayingTitle');
  const author = document.getElementById('nowPlayingAuthor');

  art.src = music.artLink;
  title.textContent = music.title;
  author.textContent = music.author;

  /**
   * Atribut `hidden` menyembunyikan elemen sekaligus dari pembaca layar.
   *
   * Isi diubah lebih dulu, baru elemennya ditampilkan. Live region yang masih
   * hidden tidak mengumumkan perubahan, jadi pengumuman pertama bisa terlewat.
   */
  nowPlaying.hidden = false;
  document.body.classList.add('has-now-playing');
}

export function hideNowPlaying() {
  document.getElementById('nowPlaying').hidden = true;
  document.body.classList.remove('has-now-playing');
}

// Dipanggil dari event `play` / `pause`, bukan dari tombolnya langsung.
export function renderNowPlayingState(isPlaying, title) {
  let status = 'Dijeda';
  let icon = '▶';
  let action = 'Putar';

  if (isPlaying) {
    status = 'Sedang diputar';
    icon = '⏸';
    action = 'Jeda';
  }

  document.getElementById('nowPlayingLabel').textContent = status;
  document.getElementById('nowPlayingIcon').textContent = icon;
  document.getElementById('nowPlayingToggleText').textContent = action;

  const toggle = document.getElementById('nowPlayingToggle');
  toggle.setAttribute('aria-label', `${action} ${title}`);
}

// Memperbarui jumlah hasil, empty state, dan penanda tombol aktif.
export function renderFilterState(activeAuthor, shownCount, totalCount) {
  const resultInfo = document.getElementById('resultInfo');
  const emptyState = document.getElementById('emptyState');
  const filterBar = document.getElementById('filterBar');

  resultInfo.textContent = `Menampilkan ${shownCount} dari ${totalCount} lagu`;
  emptyState.hidden = shownCount !== 0;

  // Dicari di dalam filterBar saja, bukan di seluruh dokumen.
  const buttons = filterBar.querySelectorAll('.filter-button');

  buttons.forEach((button) => {
    const isActive = button.dataset.author === activeAuthor;

    // Ditandai dua kali: warna untuk mata, aria-pressed untuk pembaca layar.
    button.classList.toggle('filter-button--active', isActive);
    button.setAttribute('aria-pressed', isActive);
  });
}
