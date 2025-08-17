// write your codes here
function setup(){
    createCanvas(400, 400);
    background(220);
}

function mouseMoved(){
let hiii = Math.random(256)
fill(hiii)
circle(mouseX, mouseY, 50)
}