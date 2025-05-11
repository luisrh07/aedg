document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const container = document.querySelector('.container');
    const letterArea = document.querySelector('.letter-area');

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        if (envelope.classList.contains('open')) {
            // Crear corazones
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                const colors = ['pink', 'lightskyblue', 'plum'];
                heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                heart.style.setProperty('--random-x', `${Math.random() * 100}vw`);
                heart.style.setProperty('--random-y', `${Math.random() * 50 + 50}vh`);
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.top = `${Math.random() * 100 + window.scrollY}px`;
                heart.style.animationDelay = `${Math.random() * 2}s`;
                heart.style.animationDuration = `${3 + Math.random() * 3}s`;
                heart.style.fontSize = `${10 + Math.random() * 15}px`;
                container.appendChild(heart);

                // Crear los "dos pétalos" del corazón
                const before = document.createElement('div');
                before.style.position = 'absolute';
                before.style.top = '-8px';
                before.style.left = '0';
                before.style.width = 'inherit';
                before.style.height = 'inherit';
                before.style.borderRadius = '50%';
                before.style.backgroundColor = heart.style.backgroundColor;
                heart.appendChild(before);

                const after = document.createElement('div');
                after.style.position = 'absolute';
                after.style.top = '-8px';
                after.style.left = '8px';
                after.style.width = 'inherit';
                after.style.height = 'inherit';
                after.style.borderRadius = '50%';
                after.style.backgroundColor = heart.style.backgroundColor;
                heart.appendChild(after);

                // Animación para que suban y desaparezcan
                heart.style.animationName = 'floatUp';
                heart.style.animationTimingFunction = 'ease-out';
                heart.addEventListener('animationend', () => heart.remove());
            }

            // Crear girasoles
            for (let i = 0; i < 8; i++) {
                const sunflower = document.createElement('div');
                sunflower.classList.add('sunflower');
                const size = 20 + Math.random() * 30;
                sunflower.style.width = `${size}px`;
                sunflower.style.height = `${size}px`;
                sunflower.style.left = `${Math.random() * 100}vw`;
                sunflower.style.top = `${Math.random() * 100 + window.scrollY}px`;
                sunflower.style.animationDelay = `${Math.random() * 2}s`;
                sunflower.style.opacity = 0.7;
                container.appendChild(sunflower);

                // Crear pétalos (simplificado con múltiples círculos)
                const numPetals = 8 + Math.floor(Math.random() * 6);
                for (let j = 0; j < numPetals; j++) {
                    const petal = document.createElement('div');
                    petal.style.position = 'absolute';
                    petal.style.width = `${size * 0.3}px`;
                    petal.style.height = `${size * 0.3}px`;
                    petal.style.borderRadius = '50%';
                    petal.style.backgroundColor = 'yellow';
                    petal.style.transformOrigin = 'center center';
                    petal.style.transform = `rotate(${j * (360 / numPetals)}deg) translateY(${size / 2}px)`;
                    sunflower.appendChild(petal);
                }

                // Centro del girasol
                const center = document.createElement('div');
                center.style.position = 'absolute';
                center.style.width = `${size * 0.4}px`;
                center.style.height = `${size * 0.4}px`;
                center.style.borderRadius = '50%';
                center.style.backgroundColor = 'brown';
                center.style.top = `${size * 0.3}px`;
                center.style.left = `${size * 0.3}px`;
                sunflower.appendChild(center);

                sunflower.style.animationName = 'floatAndSpin';
                sunflower.style.animationDuration = `${8 + Math.random() * 4}s`;
                sunflower.style.animationTimingFunction = 'ease-in-out';
                sunflower.addEventListener('animationend', () => sunflower.remove());
            }

            // Crear brillitos
            for (let i = 0; i < 30; i++) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('sparkle');
                sparkle.style.left = `${Math.random() * 100}vw`;
                sparkle.style.top = `${Math.random() * 100 + window.scrollY}px`;
                sparkle.style.animationDelay = `${Math.random() * 3}s`;
                container.appendChild(sparkle);
                sparkle.style.animationName = 'twinkleAndDrift';
                sparkle.style.animationDuration = `${5 + Math.random() * 3}s`;
                sparkle.addEventListener('animationend', () => sparkle.remove());
            }
        }
    });

    // Animación para que los corazones suban
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerHTML = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(45deg) scale(1);
                opacity: 1;
            }
            80% {
                transform: translateY(-100vh) rotate(45deg) scale(1.5);
                opacity: 0.8;
            }
            100% {
                transform: translateY(-150vh) rotate(45deg) scale(2);
                opacity: 0;
            }
        }
        @keyframes floatAndSpin {
            0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.7;
            }
            80% {
                transform: translateY(-80vh) rotate(720deg) scale(1.2);
                opacity: 0.5;
            }
            100% {
                transform: translateY(-120vh) rotate(1080deg) scale(1.5);
                opacity: 0;
            }
        }
        @keyframes twinkleAndDrift {
            0% {
                transform: translateY(0) translateX(0) scale(1);
                opacity: 0.8;
            }
            50% {
                opacity: 1;
                transform: translateY(-30vh) translateX(50vw) scale(1.5);
            }
            100% {
                transform: translateY(-60vh) translateX(100vw) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);
});