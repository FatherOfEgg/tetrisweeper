function isInsideRect(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

function getMousePos(canvas, mouseEvent) {
    var rect = canvas.getBoundingClientRect();
    scaleX = canvas.width / rect.width;
    scaleY = canvas.height / rect.height;

    return {
      x: (mouseEvent.clientX - rect.left) * scaleX,
      y: (mouseEvent.clientY - rect.top) * scaleY
    };
}

canvas.addEventListener("click", function (e) {
    var mousePos = getMousePos(canvas, e);
    
    // if (isInside(mousePos, rect)) {
    //     alert('clicked inside rect');
    // } else {
    //     alert('clicked outside rect');
    // }
    
    if (isInsideRect(mousePos, tetrisRect)) {
        var cell = {
            x: Math.floor((mousePos.x - boardCenterX) / cellWidth),
            y: Math.floor(mousePos.y / cellHeight)
        };
    
        var index = cell.y * gridWidth + cell.x;
    
        grid[index] = !grid[index];
    }


    var decRect = {
        x: 500,
        y: squareY,
        width: 120,
        height: 120
    }
    var incRect = {
        x: 500 + 125,
        y: squareY,
        width: 120,
        height: 120
    }

    if (isInsideRect(mousePos, decRect)) squareY -= 5;
    if (isInsideRect(mousePos, incRect)) squareY += 5;

}, false);