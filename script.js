const colors = ['#ff69b4', '#add8e6', '#dda0dd']; // rosa, azul, lila

function createFloatingElement(type) {
  const el = document.createElement('img');
  el.classList.add(type);
  if (type === 'floating-heart') {
    el.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/1024px-Ei-heart.svg.png`;
    el.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
  } else if (type === 'sunflower') {
    el.src = 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_from_Silesia2.jpg';
  } else if (type === 'sparkle') {
    el.style.left = Math.random() * 100 + 'vw';
    el.style.background = 'radial-gradient(white, transparent)';
  }
  el.style.left = Math.random() * 100 + 'vw';
  el.style.animationDuration = 5 + Math.random() * 10 + 's';
  el.style.opacity = Math.random();
  document.body.appendChild(el);
  setTimeout(() => document.body.removeChild(el), 15000);
}

setInterval(() => createFloatingElement('floating-heart'), 600);
setInterval(() => createFloatingElement('sunflower'), 3000);
setInterval(() => createFloatingElement('sparkle'), 800);
