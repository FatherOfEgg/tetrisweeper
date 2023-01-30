var tetrisRect = {
    x: boardCenterX,
    y: 0,
    width: boardWidth,
    height: boradHeight
};

function renderGridLines() {

    ctx.beginPath();

    for (let x = 0; x < gridWidth + 1; x++){
        ctx.moveTo(x * cellWidth + boardCenterX, 0);
        ctx.lineTo(x * cellWidth + boardCenterX, boradHeight);
    }

    for (let y = 0; y < gridHeight + 1; y++){
        ctx.moveTo(boardCenterX, y * cellHeight);
        ctx.lineTo(boardWidth + boardCenterX, y * cellHeight);
    }

    ctx.stroke();
}

function renderControls() {
    ctx.fillStyle = "gray";
    
    for (let i = 0; i < 3; i++) {
        ctx.fillRect(50 + (i * 125), 1000, 120, 120);
    }
    
    for (let i = 0; i < 2; i++) {
        ctx.fillRect(500 + (i * 125), 1000, 120, 120);
    }
}

function renderTetris() {
    
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            if (grid[y * gridWidth + x]) {
                ctx.fillStyle = "green";
            } else {
                ctx.fillStyle = "red";
            }
            ctx.fillRect(x * cellWidth + boardCenterX, y * cellHeight, cellWidth, cellHeight);
        }
    }

    renderGridLines();

    renderControls();
}