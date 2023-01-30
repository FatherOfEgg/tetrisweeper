/** @type {HTMLCanvasElement} */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const cellWidth = 40;
const cellHeight = 40;

const gridWidth = 10;
const gridHeight = 20;

const boardWidth = gridWidth * cellWidth;
const boradHeight = gridHeight * cellHeight;

const boardCenterX = (800 / 2) - (boardWidth / 2);

var grid = new Array(gridWidth * gridHeight);

var isMinesweeper = false;

window.onload = (e) => {
    canvas.width = 800;
    canvas.height = 1600;

    ctx.fillStyle = 'cornflowerblue';
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.textAlign = 'start';
    ctx.font = 'normal 30px Arial';
    
    if(Object.seal) {
        grid.fill(0);
        Object.seal(grid);
    }
}

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    renderTetris();    
}

setInterval(main, 16.66)