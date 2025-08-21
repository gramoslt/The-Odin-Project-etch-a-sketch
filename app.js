function generateSquares() {
    const grid = document.querySelector("#grid");

    for (let index = 0; index < 256; index++) {
        const square = document.createElement("div");
        square.className = "square";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor();
        });
        grid.appendChild(square);
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateSquares();
