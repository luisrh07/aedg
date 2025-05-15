
function mostrarCarta() {
  const carta = document.getElementById('carta');
  carta.style.display = 'block';

  const flores = document.getElementById('flores');
  const corazones = document.getElementById('corazones');
  const brillitos = document.getElementById('brillitos');

  for (let i = 0; i < 15; i++) {
    const flor = document.createElement('div');
    flor.classList.add('flower');
    flor.style.top = `${Math.random() * 80 + 10}%`;
    flor.style.left = `${Math.random() * 90 + 5}%`;
    flor.style.animationDelay = `${i * 0.3}s`;
    flores.appendChild(flor);
  }

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `-40px`;
    heart.style.animationDelay = `${i * 0.5}s`;
    corazones.appendChild(heart);
  }

  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    brillitos.appendChild(sparkle);
  }
}
