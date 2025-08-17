// write your codes here
function setup(){
    createCanvas(400, 400);
    background(220);
    noStroke();
}

function mousePressed(){
let hiii = color(random(255), random(255),random(255))
fill(hiii,hiii,hiii)
circle(mouseX, mouseY, 50)
}