let socket = io();

socket.on("connect", newConnection);

function newConnection(){
  console.log("your id: " + socket.id);
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("peachpuff");
  // put setup code here
}

function draw() {
  // put drawing code here
}

function mouseMoved() {
  ellipse(mouseX, mouseY, 10);
  let message = {
    x:  mouseX,
    y: mouseY,
  };

  socket.emit("mouse", message);
}
