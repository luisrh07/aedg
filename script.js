const decorationsContainer = document.querySelector('.decorations');
const numHearts = 20;
const heartColors = ['#da70d6', '#6495ed', '#ff69b4']; // Lila, Azul, Rosa
const numFlowers = 15;
const numSparkles = 30;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const size = Math.random() * 15 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDelay = `${Math.random() * 2}s`;
    heart.style.backgroundColor = heartColors[Math.floor(Math.random() * heartColors.length)];
    decorationsContainer.appendChild(heart);

    // Remover el corazón después de que termine la animación para no sobrecargar el DOM
    heart.addEventListener('animationiteration', () => {
        heart.remove();
    });

    // Volver a crear un corazón después de un tiempo aleatorio
    setTimeout(createHeart, Math.random() * 1000 + 500);
}

function createFlower() {
    const flowerContainer = document.createElement('div');
    flowerContainer.classList.add('flower');
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const size = Math.random() * 15 + 20;
    flowerContainer.style.left = `${xPos}vw`;
    flowerContainer.style.top = `${yPos}vh`;
    flowerContainer.style.fontSize = `${size}px`;

    // Puedes usar un emoji de girasol directamente o construir una flor con divs
    const sunflowerEmoji = document.createElement('span');
    sunflowerEmoji.textContent = '🌻';
    flowerContainer.appendChild(sunflowerEmoji);

    decorationsContainer.appendChild(flowerContainer);

    // Remover la flor después de un tiempo (opcional)
    setTimeout(() => {
        flowerContainer.remove();
        createFlower(); // Crear una nueva flor
    }, Math.random() * 5000 + 3000);
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    const size = Math.random() * 5 + 5;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.backgroundColor = 'white';
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
    decorationsContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
        createSparkle();
    }, Math.random() * 2000 + 1000);
}

// Inicializar la creación de elementos
for (let i = 0; i < 5; i++) { // Iniciar con algunos corazones
    createHeart();
}
for (let i = 0; i < 3; i++) { // Iniciar con algunas flores
    createFlower();
}
for (let i = 0; i < 10; i++) { // Iniciar con algunos brillos
    createSparkle();
}

// Para que los elementos se sigan generando indefinidamente, las funciones setTimeout dentro de cada creador se encargarán de eso.
