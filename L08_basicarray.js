// let x = 300;
// // let y = 200;
// let size = 50;
// let speedX = 5;
// // let speedY = 1;
// let shapeColour = 255;

// function setup(){
//     createCanvas(600, 400);
//     // background(220);
// }

// function draw(){
//     background(220);
// //     background('lightblue');

// //     x = constrain(x, 0, width - imgwidth);
// //     y = constrain(y, 0, height - imgheight);

// //     if(keyIsDown(RIGHT_ARROW)){
// //        x += speed;
// //     }

// //     if(keyIsDown(LEFT_ARROW)){
// //        x -= speed;
// //     }

// //     if(keyIsDown(UP_ARROW)){
// //         y -= speed;
// //     }

// //     if(keyIsDown(DOWN_ARROW)){
// //         y += speed;
// //     }
// //     image(staticImage, x, y, imgwidth, imgheight);
// // }

// // function keyPressed(){
// //     if(keyCode == 32){
// //         imgwidth = 40;
// //         soundEffect.play();
// //     }
// // }

// // function keyReleased(){
// //     imgwidth = 80;
// //     soundEffect.pause();
// // }

// x += speedX;
// // y += speedY;

// if(x - size/2 <= 0 || x + size/2 >= width){
//     speedX *= -1;
//     shapeColour = color(random(255), random(255),random(255));
// }

// // if(y - size/2 <= 0 || y + size/2 >= height){
// //     speedY *= -1;
// //     shapeColour = color(random(255), random(255),random(255));
// // }

// noStroke();
// fill(shapeColour)
// rect(x - size/2, height/2 - size/2, size, size);
// }

function setup(){
    createCanvas(400, 400);
    background(220);
    textSize(24);
    text("Loo Jinn Yang", 50, 50);
    text("300", 50, 100);
    text("Sleeping", 50, 150);
}