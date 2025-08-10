// let spacing = 50;
//let colourValue = 0;

function setup() {
    createCanvas(200, 200);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
// fill(0,0,255);
// circle(75, 200, 100);
// fill(0,0,255);
// circle(225, 200, 100);
// fill(0,0,255);
// circle(375, 200, 10  0);
// fill(0,0,255)
// circle(525, 200, 100);

// for(let i = 0; i < 5; i++){
//   fill(0,0, i *spacing)
//   circle(spacing + i * spacing, 200, 40)

// }

// for(let i = 0; i < 5; i++){
//   // fill(colourValue % 2);
//   if(i%2 === 0 ) {
//     fill(0);
//   }
//   else {
//     fill(255);
//   }
//   circle(spacing + i * spacing, 200, 40);
//   rect(spacing + spacing * i, 250, 50, 50);
  // colourValue += 1;
//   }
  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles


  // rect(0, 100, width, 400);
  // circle(width / 2, height / 2, 100);

//   let startX = (200 - 150) / 2 + 30 / 2;

// for (let i = 0; i < 5; i++){
// let x = startX + i * 30;
// ellipse(x, height / 2, 30, 30)
// }
  let startX = (200 - 150) / 2 + 30 / 2;
  let startY = (200 - 150) / 2 + 30 / 2;
for (let row = 0; row < 5; row++){
let x = startX + row * 30;
ellipse(x, height / 2, 30, 30)
}
for (let i = 0; i < 5; i++){
let y = startY + i * 30;
ellipse(width / 2, y, 30, 30)

for (let row = 0; row < 5; row++){
let x = startX + row * 30;
ellipse(x, height / 2, 30, 30)
}

}
}