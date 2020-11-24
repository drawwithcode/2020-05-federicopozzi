let socket = io();

socket.on("connect", newConnection);

socket.on("mouseBroadcast", drawOtherMouse);

function newConnection(){
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data){
  push();
fill("yellow");
rect(data.x, data.y, 10);
  pop();
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
  push();
  fill("white");
  ellipse(mouseX, mouseY, 10);
  pop();
  let message = {
    x:  mouseX,
    y: mouseY,
  };

  socket.emit("mouse", message);
}
