const drawerButton = document.getElementById('drawerButton');
const navList = document.getElementById('navList');

function setDrawerOpen(isOpen) {
  let label = 'Buka menu navigasi';

  if (isOpen) {
    label = 'Tutup menu navigasi';
  }

  navList.classList.toggle('open', isOpen);

  // Tombol ikut memberi tahu keadaannya, bukan hanya tampilannya.
  drawerButton.setAttribute('aria-expanded', isOpen);
  drawerButton.setAttribute('aria-label', label);
}

drawerButton.addEventListener('click', () => {
  setDrawerOpen(!navList.classList.contains('open'));
});
