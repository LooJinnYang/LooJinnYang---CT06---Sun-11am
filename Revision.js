function setup() {
createCanvas(600, 400);
background(220);
}

function draw() {
// // rect(width/2-20,height/2-20,40,40);
//   let startX = (200 - 150) / 2 + 30 / 2;
//   let startY = (200 - 150) / 2 + 30 / 2;

// for (let row = 0; row < 5; row++){

//   let y = startY + 30 * row;

//   for (let i = 0; i < 5; i++){

//     let x = startX + i * 30;
//     ellipse(x, y, 30, 30);

//     }
//   }
for (let i = 0; i < 5; i++){

    ellipse(i * 50 + 50 , i *50 + 50 , 50 , 50);
}
}