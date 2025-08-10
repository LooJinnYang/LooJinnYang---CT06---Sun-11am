// write your codes here
let shapeColour = ''
function setup(){
    createCanvas(400, 400);
    background(220);
}

// function draw(){
// for (let i = 0; i < 5; i++){
//     let shade = i * 50 + 50
//     fill(0, shade, 0);
//     ellipse(i * 50 + 50 , i *50 + 50 , 50 , 50);
// }
// }

function draw(){
    fill(shapeColour);
    ellipse(width / 2, height / 2, 100, 100);
}

function mousePressed(){
shapeColour = 'red';
}

function mouseReleased(){
shapeColour = 'blue';
}