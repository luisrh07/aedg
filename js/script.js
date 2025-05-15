
function mostrarCarta() {
  const carta = document.getElementById('carta');
  carta.style.display = 'block';

  const corazones = document.getElementById('corazones');
  const colores = ['#e39ff6', '#a5caff', '#ffc8dd'];

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `-40px`;
    heart.style.backgroundColor = colores[i % colores.length];
    heart.style.animationDelay = `${i * 0.3}s`;
    corazones.appendChild(heart);
  }
}
