document.addEventListener("click", function(event) {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    const scale = (Math.random() * 0.5) + 0.5;
    flower.style.width = `${100 * scale}px`;
    flower.style.height = `${100 * scale}px`;

    flower.style.left = `${event.clientX - (100 * scale) / 2}px`;
    flower.style.top = `${event.clientY - (100 * scale) / 2}px`;

    for (let i = 0; i < 5; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.transform = `rotate(${i * 72}deg) translateY(-30px)`;
        flower.appendChild(petal);
    }

    const center = document.createElement("div");
    center.classList.add("center");
    flower.appendChild(center);

    document.body.appendChild(flower);

    flower.style.animation = "grow 2s ease-out forwards";

    setTimeout(() => flower.remove(), 3000);
});
