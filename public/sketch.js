let socket = io();
// let myColor = "white";

socket.on("connect", newConnection);

socket.on("mouseBroadcast", drawOtherMouse);

socket.on("color", setColor);

socket.on("newPlayer", newPlayer);

function newPlayer(newPlayerColor){
  console.log(newPlayerColor);
  push();
  rectMode(CENTER);
  noStroke();
  rect(width/2, height/6.5, 600, 90);
  textSize(40);
  textAlign("center");
  fill(newPlayerColor);
  text("new player joined: " + newPlayerColor, width/2, height/6);
  pop();
}


function setColor(assignedColor) {
  myColor = assignedColor;
}

function newConnection() {
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data) {
  push();
  fill(data.color);
  rect(data.x, data.y, data.size);
  pop();
}


function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  background(getRandomColor());

  push();
  textSize(40);
  textAlign("center");
  fill(myColor);
  text("welcome " + myColor, width/2, height/2);
  pop();
  // put setup code here
}

function draw() {
  // put drawing code here
}

function mouseMoved() {
  push();
  fill(myColor);
  rect(mouseX, mouseY, sin(mouseX) * 20);
  pop();
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
    size: sin(mouseX) * 20,
  };

  socket.emit("mouse", message);
}
