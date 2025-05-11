// Crear corazones flotantes
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const colors = ['lila', 'rosa', 'azul'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  heart.classList.add(randomColor);

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 4 + 's';

  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);

// Crear girasoles
function createSunflower() {
  const sunflower = document.createElement('div');
  sunflower.classList.add('sunflower');
  sunflower.style.left = Math.random() * 100 + 'vw';
  sunflower.style.top = Math.random() * 100 + 'vh';

  document.querySelector('.sunflowers').appendChild(sunflower);

  setTimeout(() => {
    sunflower.remove();
  }, 10000);
}

setInterval(createSunflower, 3000);

// Crear brillitos
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = Math.random() * 100 + 'vh';
  sparkle.style.animationDuration = 2 + Math.random() * 2 + 's';

  document.querySelector('.sparkles').appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 4000);
}

setInterval(createSparkle, 500);