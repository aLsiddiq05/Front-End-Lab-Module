
var container = document.getElementById("container");
var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var animationInterval;

function moveSquares() {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var squareWidth = square1.clientWidth;

  var randomX1 = Math.floor(Math.random() * (containerWidth - squareWidth));
  var randomY1 = Math.floor(Math.random() * (containerHeight - squareWidth));
  square1.style.left = randomX1 + "px";
  square1.style.top = randomY1 + "px";

  var randomX2 = Math.floor(Math.random() * (containerWidth - squareWidth));
  var randomY2 = Math.floor(Math.random() * (containerHeight - squareWidth));
  square2.style.left = randomX2 + "px";
  square2.style.top = randomY2 + "px";
}

function startAnimation() {
  moveSquares();
  animationInterval = setInterval(moveSquares, 1000);
}

function stopAnimation() {
  clearInterval(animationInterval);
}
