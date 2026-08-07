import {
  ALL_AUTHORS,
  getAllMusics,
  getAllAuthors,
  getMusicById,
  filterMusicsByAuthor,
  createMusicItemElement,
  createFilterButtonElement,
  setupDrawer,
  renderFilterState,
  showNowPlaying,
  hideNowPlaying,
  renderNowPlayingState,
} from './utils.js';

const musicList = document.getElementById('musicList');
const filterBar = document.getElementById('filterBar');
const nowPlayingToggle = document.getElementById('nowPlayingToggle');

const musics = getAllMusics();
let activeAuthor = ALL_AUTHORS;
let currentAudio = null;
let currentMusic = null;

/**
 * Satu-satunya fungsi yang menggambar ulang daftar lagu.
 * Setiap kali state berubah, panggil fungsi ini.
 */
function render() {
  const filteredMusics = filterMusicsByAuthor(musics, activeAuthor);

  // Kosongkan isi lama, lalu masukkan kartunya satu per satu.
  musicList.textContent = '';

  filteredMusics.forEach((music) => {
    musicList.append(createMusicItemElement(music));
  });

  renderFilterState(activeAuthor, filteredMusics.length, musics.length);
}

function renderFilterButtons() {
  filterBar.append(createFilterButtonElement(ALL_AUTHORS, 'Semua'));

  getAllAuthors().forEach((author) => {
    filterBar.append(createFilterButtonElement(author, author));
  });
}

// Event delegation: satu listener di container, bukan di setiap tombol.
function setupFilter() {
  filterBar.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-button');
    if (!button) return;

    activeAuthor = button.dataset.author;

    stopCurrentAudio();
    render();
  });
}

function stopCurrentAudio() {
  if (!currentAudio) return;

  // Elemen yang dihapus dari DOM tidak otomatis berhenti berbunyi.
  currentAudio.pause();
  currentAudio = null;
  currentMusic = null;
  hideNowPlaying();
}

/**
 * Event `play` dan `pause` tidak melakukan bubbling, jadi listener di
 * container hanya bisa menangkapnya pada capture phase — itulah arti
 * argumen `true` di bawah.
 *
 * See: HTMLMediaElement: play event
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event
 */
function setupAudioPlayer() {
  musicList.addEventListener(
    'play',
    (event) => {
      currentAudio = event.target;

      musicList.querySelectorAll('audio').forEach((audio) => {
        if (audio !== currentAudio) audio.pause();
      });

      // Arah DOM -> data: dari elemen audio, naik ke kartunya, lalu cari datanya.
      const article = currentAudio.closest('[data-musicid]');
      currentMusic = getMusicById(article.dataset.musicid);

      showNowPlaying(currentMusic);
      renderNowPlayingState(true, currentMusic.title);
    },
    true,
  );

  musicList.addEventListener(
    'pause',
    (event) => {
      if (event.target === currentAudio) renderNowPlayingState(false, currentMusic.title);
    },
    true,
  );

  musicList.addEventListener('ended', stopCurrentAudio, true);

  /**
   * Tombol hanya memberi perintah play()/pause(). Tampilan diperbarui oleh
   * listener di atas, sehingga tidak mungkin berbohong tentang keadaan audio.
   */
  nowPlayingToggle.addEventListener('click', () => {
    if (!currentAudio) return;

    if (currentAudio.paused) {
      currentAudio.play();
    } else {
      currentAudio.pause();
    }
  });
}

/**
 * Semua listener dipasang pada container yang sudah ada di HTML,
 * bukan pada kartu hasil render. Karena itu urutan di bawah tidak kritis.
 */
function init() {
  setupDrawer();

  renderFilterButtons();
  render();

  setupFilter();
  setupAudioPlayer();
}

init();
