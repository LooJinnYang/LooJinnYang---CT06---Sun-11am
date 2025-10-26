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
// // }-

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

// let favouriteFoods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"];

// function setup(){
//     createCanvas(400, 400);
//     textSize(24);
//     textAlign(LEFT, TOP)
// }

// function draw(){
//     background(220);

//     fill(0);
//     text("My Favourite Foods:", 50, 50);

//     for(let i = 0; i < favouriteFoods.length; i++){
//         text((i + 1) + ". " + favouriteFoods[i], 50, 80 + i * 30)
//     }
// }

let yPos;
let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Student have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!"
];

function setup(){
    createCanvas(600, 600);

    fill(255, 255, 0);
    textSize(24);
    textAlign(CENTER, CENTER);

    yPos = height;
}

function draw(){
    background(0);

    for(let i = 0; i < storyText.length; i++){
        text(storyText[i], width/2, yPos + i * 50);
    }

    if(yPos < -650){
        yPos = height;
    }
    console.log(yPos);
    
    yPos -=2;
}