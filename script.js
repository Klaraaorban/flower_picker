let flowerCounter = 0;

document.addEventListener("click", function(event) {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    const scale = Math.random() < 0.5 
                ? Math.random() * 0.1 
                : Math.random() < 0.7 
                    ? Math.random() * 0.8 + 0.7 
                    : Math.random()* 2 +1;
    flower.style.width = `${10 * scale}px`;
    flower.style.height = `${10 * scale}px`;

    flower.style.left = `${event.clientX - (10 * scale) / 2}px`;
    flower.style.top = `${event.clientY - (10 * scale) / 2}px`;

    let hue = Math.random() * 360;
    if(hue >= 120 && hue <= 180){
        hue = Math.random() * 120;
    }

    const petalWidth = Math.random() * 7 + 30;
    const petalHeight = Math.random() * 10 + 30;
    const petalColor = `hsl(${hue}, 60%, 60%)`;
    const petalShape = `${Math.random() * 60 + 10}% ${Math.random() * 60 + 10}% ${Math.random() * 60 + 10}% ${Math.random() * 60 + 10}%`;
    const petalCount = Math.floor(Math.random() * 7) + 6;

    const shapeValues = petalShape.match(/(\d+\.?\d*)/g).map(Number);
    const isRound = Math.max(...shapeValues) < 50;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.width = `${petalWidth}px`;
        petal.style.height = `${petalHeight}px`;
        petal.style.backgroundColor = petalColor;
        petal.style.borderRadius = petalShape;
        petal.style.transform = `rotate(${i * (360 / petalCount)}deg) translateY(-30px)`;
        flower.appendChild(petal);
    }

    const centerSize = Math.random() * 50 + 10;
    const center = document.createElement("div");
    center.classList.add("center");
    center.style.width = `${centerSize}px`;
    center.style.height = `${centerSize}px`;
    center.style.backgroundColor = `hsl(${Math.random() * 180}, 90%, 90%)`;
    flower.appendChild(center);

    document.body.appendChild(flower);

    flower.style.animation = "grow 2s ease-out forwards";

    // little stars - need editing
    // if (isRound) {
    //     const flowerRect = flower.getBoundingClientRect();
    //     const flowerCenterX = flowerRect.left + flowerRect.width / 2;
    //     const flowerCenterY = flowerRect.top + flowerRect.height / 2;
    
    //     for (let i = 0; i < 3; i++) {
    //         const star = document.createElement("div");
    //         star.style.position = "absolute";
    //         star.style.width = `${Math.random() * 5 + 2}px`;
    //         star.style.height = `${Math.random() * 5 + 2}px`;
    //         star.style.backgroundColor = "white";
    //         star.style.borderRadius = "50%";
    
    //         const offsetX = Math.random() * 100 + 20 + i * 10; // Slightly spaced horizontally
    //         const offsetY = -(Math.random() * 100 + 20 + i * 10); // Slightly spaced vertically (upward)
    //         const starX = flowerCenterX + offsetX;
    //         const starY = flowerCenterY + offsetY;
    
    //         star.style.left = `${starX}px`;
    //         star.style.top = `${starY}px`;
    //         star.style.animation = "fadeOut 3s ease-out forwards";
    
    //         document.body.appendChild(star);
    
    //         setTimeout(() => star.remove(), 3000);
    //     }
    // }
    
//
    setTimeout(() => flower.remove(), 3000);

    flowerCounter++;

    if(flowerCounter === 10){
        const message = document.createElement("div");
        message.classList.add("message");
        message.textContent = "Will you be my Valentine, CC?";
        message.style.top = "50%";
        message.style.left = "50%";
        message.style.transform = "translate(-50%, -50%)";
        message.style.backgroundColor = "rgba(240, 122, 218, 0.7)";
        message.style.padding = "20px";
        message.style.borderRadius = "10px";
        message.style.position = "fixed";
        message.style.color = "white";
        message.style.fontWeight = "bold";
        message.style.fontSize = "20px";
        message.style.textAlign = "center";
        document.body.appendChild(message);

        setTimeout(() => message.remove(), 10000);

        flowerCounter = 0;
    }

});
