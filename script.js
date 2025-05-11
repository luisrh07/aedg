// Generador de corazones flotantes
function generateHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 4 + 4}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        document.getElementById("floating-hearts").appendChild(heart);
    }
}

// Generador de flores flotantes
function generateFlowers() {
    for (let i = 0; i < 5; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.animationDuration = `${Math.random() * 6 + 6}s`;
        flower.style.animationDelay = `${Math.random() * 2}s`;
        document.getElementById("floating-flowers").appendChild(flower);
    }
}

generateHearts();
generateFlowers();