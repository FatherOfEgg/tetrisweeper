var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var grid = new Array(10*20);

const cellWidth = 40;
const cellHeight = 40;

const gridWidth = 10;
const gridHeight = 20;

// if(Object.seal) {
//     // fill array with some value because
//     // empty slots can not be changed after calling Object.seal
//     a.fill(undefined);
  
//     Object.seal(grid);
//     // now a is a fixed-size array with mutable entries
// }

window.onload = (e) => {
    canvas.width = 400;
    canvas.height = 800;
    ctx.fillStyle = 'cornflowerblue';
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.textAlign = 'start';
    ctx.font = 'normal 30px Arial';
}

function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

var rect = {
    x: 0,
    y: 0,
    width: 40,
    height: 40
};

canvas.addEventListener("click", function (e) {
    var mousePos = getMousePos(canvas, e);
    
    // if (isInside(mousePos, rect)) {
    //     alert('clicked inside rect');
    // } else {
    //     alert('clicked outside rect');
    // }

    
    var cell = {x: Math.floor(mousePos.x / cellWidth), y: Math.floor(mousePos.y / cellHeight)};
    
    console.log(mousePos, cell);


    grid[cell.y * gridWidth + cell.x] = !grid[cell.y * gridWidth + cell.x];

}, false);

function getMousePos(canvas, mouseEvent) {
    var rect = canvas.getBoundingClientRect();
    scaleX = canvas.width / rect.width;
    scaleY = canvas.height / rect.height;

    return {
      x: (mouseEvent.clientX - rect.left) * scaleX,
      y: (mouseEvent.clientY - rect.top) * scaleY
    };
}

function drawGrid() {
    
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            if (grid[y * gridWidth + x]) {
                ctx.fillStyle = "green";
            } else {
                ctx.fillStyle = "red";
            }
            ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
        }
    }

    drawLineGrid();
}

function drawLineGrid() {
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x += 40){
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);

    for (let y = 0; y < canvas.height; y += 40){
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);

    ctx.stroke();
}

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawGrid();    
}

setInterval(main, 16.66)