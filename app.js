function generateSquares(squaresPerSide) {
    const grid = document.querySelector("#grid");
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSide = 100 / squaresPerSide;

    for (let index = 0; index < totalSquares; index++) {
        const square = document.createElement("div");
        square.className = "square";

        square.style.width = `${squareSide}%`;
        square.style.height = `${squareSide}%`;
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

function cleanGrid() {
    const grid = document.querySelector("#grid");
    grid.innerHTML = "";
}

function createGrid() {
    let squaresPerSide = 0;

    while (squaresPerSide > 100 || squaresPerSide < 1) {
        squaresPerSide = parseInt(
            prompt(
                "Enter the number of squares per side for the new grid (Max. 100)",
                "16"
            )
        );
    }

    cleanGrid();
    generateSquares(squaresPerSide);
}

const newGridBtn = document.querySelector("button");
newGridBtn.addEventListener("click", createGrid);

generateSquares(16);
