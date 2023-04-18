var velocityX = 50;
var velocityY = 25;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById('ball');

var velocityX2 = 50;
var velocityY2 = 25;
var positionX2 = 200;
var positionY2 = 200;
var ball2 = document.getElementById('ball2');

// YOUR CODE 

  function rColor() {
    // random color
    var r = Math.floor(255*(Math.random()));
    var g = Math.floor(255*(Math.random()));
    var b = Math.floor(255*(Math.random()));        
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return color
  }

setInterval(() => {
    positionX = positionX + velocityX
    positionY = positionY + velocityY
    if ((positionX >= 450) || (positionX <= 0)) {
      velocityX = -velocityX
      ball.style.backgroundColor = rColor();
    } 
    if ((positionY >= 550) || (positionY <= 0)) {
      velocityY = -velocityY
      ball.style.backgroundColor = rColor();
    }
    ball.style.left = positionX +'px'
    ball.style.top = positionY +'px'
  }, 100)

setInterval(() => {
    positionX2 = positionX2 + velocityX2
    positionY2 = positionY2 + velocityY2
    if ((positionX2 >= 450) || (positionX2 <= 0)) {
      velocityX2 = -velocityX2
      ball2.style.backgroundColor = rColor();
    } 
    if ((positionY2 >= 550) || (positionY2 <= 0)) {
      velocityY2 = -velocityY2
      ball2.style.backgroundColor = rColor();
    }
    ball2.style.left = positionX2 +'px'
    ball2.style.top = positionY2 +'px'
  }, 100)