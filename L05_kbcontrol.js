// write your codes here

// let shapeColour =  'blue'
// let circleSize = 5;

// function setup(){
//     createCanvas(400, 400);
//     background(220);
//     noStroke();
// }

// function mousePressed(){
// shapeColour = color(random(255), random(255),random(255));
// circleSize = 5;
// }

// function mouseDragged(){
// fill(shapeColour);
// ellipse(mouseX, mouseY, circleSize, circleSize);
// circleSize += 0.5;
// }

// let rectSize =50;

// function setup(){
//     createCanvas(400,400);
// }

// function draw(){
//     background(220);

//     let centerX = width/2;
//     let centerY = height/2;


//     let topLeftX = centerX -rectSize/2
//     let topLeftY = centerY -rectSize/2



//     rect(topLeftX , topLeftY , rectSize, rectSize)
// }

// function setup(){
//      createCanvas(400, 400);
//      background(220);
//      noStroke();
// }

// function keyPressed(){
//     let count = floor(random(5, 21));
//     for(let i=0; i<count; i++){
//         let size = random(10, 80);
//         let x = random(size/2, width -size/2)
//         let y = random(size/2, height -size/2)
//             fill(random(255), random(255), random(255))
//             ellipse(x, y, size, size)
//     }
// }

// function keyReleased(){
//     background(220);
// }

// let a = 5;
// let b = '5';
// let c = 7;

// console.log(a==b);

// let showCircle = false;
// let showSquare = false;
// let showTriangle = false;

// function setup() {
// createCanvas(200, 200);
// }

// function draw() {
// background(220);

// if (key == 'c'){
//     circle(width / 2, height / 2, 50);
// }



// if (key == 's'){
//     rect(width / 2 - 25, height / 2 - 25, 50, 50);
// }



// if (key == 't'){        
//     triangle(width/2, height/2 - 25, width/2 + 25, height/2 + 25, width/2 - 25, height/2 + 25);
// }
// }
// function keyPressed(){
//     if (key === 'c'){
//         showCircle = !showCircle;
//     }
//     if(key === 's'){
//         showSquare = !showSquare;
//     }
//     if (key === 'c') {
//         showTriangle = !showTriangle;
// }
// }

// function setup(){

// }


// function keyPressed(){
//     console.log("key:", key);
//     console.log("Keycode:", keyCode);
// }

function setup() {
createCanvas(400, 300);
}

function draw() {
background(220);

// if (keyCode == 38){
//     fill('red')
//     circle(width / 2, height / 2, 50);
// }

// if (keyCode == 40){
//     fill("black")
//     circle(width / 2, height / 2, 50);
// }
x = mouseX
if (x < 100){
    fill('red')
    circle(width / 2, height / 2, 50);
}

else if (100 <= x & x < 200){
    fill('green')
    circle(width / 2, height / 2, 50);
}

else if (x >= 200){
    fill('blue')
    circle(width / 2, height / 2, 50);
}
}