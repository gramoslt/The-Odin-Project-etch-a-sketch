function generateSquares() {
    const grid = document.querySelector("#grid");

    for (let index = 0; index < 256; index++) {
        const square = document.createElement("div");
        square.className = "square";
        grid.appendChild(square);
    }
}

generateSquares();
