function setup() {
    createCanvas(1200, 800);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
// fill(0,0,255);
// circle(75, 200, 100);
// fill(0,0,255);
// circle(225, 200, 100);
// fill(0,0,255);
// circle(375, 200, 100);
// fill(0,0,255)
// circle(525, 200, 100);
for(let i = 0; i < 4; i++){
  fill(i * 50)
  circle(75 + i * 150, 200, 100)
}
  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}