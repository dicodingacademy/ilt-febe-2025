import {
  ALL_AUTHORS,
  getAllMusics,
  setupDrawer,
} from './utils.js';

const musicList = document.getElementById('musicList');
const filterBar = document.getElementById('filterBar');
const nowPlayingToggle = document.getElementById('nowPlayingToggle');

const musics = getAllMusics();
let activeAuthor = ALL_AUTHORS;
let currentAudio = null;
let currentMusic = null;

/**
 * TODO: Tampilkan seluruh lagu sebagai kartu di dalam musicList.
 * TODO: Gunakan hasil filter sebagai sumber datanya.
 * TODO: Perbarui jumlah hasil dan tombol aktif lewat renderFilterState.
 */
function render() {
  const filteredMusics = musics;
}

// TODO: Buat tombol "Semua" dan satu tombol filter untuk setiap author.
function renderFilterButtons() {}

// TODO: Tangani klik tombol filter dengan event delegation.
function setupFilter() {}

/**
 * TODO: Hentikan audio yang sedang diputar.
 * TODO: Kosongkan currentAudio dan currentMusic, lalu sembunyikan Now Playing.
 */
function stopCurrentAudio() {}

/**
 * TODO: Perbarui Now Playing saat audio diputar, dijeda, dan selesai.
 * TODO: Hentikan audio lain agar hanya satu lagu berbunyi.
 * TODO: Jalankan play dan pause lewat tombol nowPlayingToggle.
 */
function setupAudioPlayer() {}

function init() {
  setupDrawer();

  renderFilterButtons();
  render();

  setupFilter();
  setupAudioPlayer();
}

init();
