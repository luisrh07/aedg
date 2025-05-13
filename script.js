document.getElementById('openLetter').addEventListener('click', () => {
  document.getElementById('letter').style.display = 'block';
});

const music = document.getElementById('bg-music');
document.getElementById('play').addEventListener('click', () => music.play());
document.getElementById('stop').addEventListener('click', () => {
  music.pause();
  music.currentTime = 0;
});
