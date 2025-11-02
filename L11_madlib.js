// let textColorPicker;
// let textBox;
// let display;

// function setup(){
//     createCanvas(400, 400);

//     textBox = createInput();
//     textBox.position(50, 50);
//     textBox.size(150, 30);
//     textBox.input(displayText);

//     textColorPicker = createColorPicker();
//     textColorPicker.position(50, 100);
// }

// function draw(){
//     background(220);

//     textAlign(LEFT);
//     textSize(24);
//     fill(textColorPicker.value());
//     text(display, 50, height/2);
// }

// function displayText(){
//     display = this.value();
// }

// let textBox;
// let button;
// let displayText = "Input Shown Here";

// function setup(){
//     createCanvas(400, 400);

//     textBox = createInput();
//     textBox.position(100, 50);
//     textBox.size(150, 30);

//     button = createButton('Submit');
//     button.position(textBox.x + textBox.width + 30, 50);
//     button.mousePressed(display);
//     button.size(100, 30);
// }

// function draw(){
//     background(220);

//     textAlign(CENTER, CENTER);
//     textSize(30);
//     text(displayText, width/2, height/2);
// }

// function display(){
//     displayText = textBox.value();
// }

// let textBox1;
// let textBox2;
// let textBox3;
// let textBox4;
// let textBox5;

// let arr = ["Enter a noun:","Enter a verb:","Enter an adjective:","Enter an adverb:","Enter a place:"];
// let button;
// let displayText1, displayText2, displayText3, displayText4, displayText5 ;
// let arr2 = [];

// function setup(){
//     createCanvas(600, 600);

//     textBox1 = createInput();
//     textBox1.position(width/2-textBox1.width/2, 50);
//     textBox1.size(150, 30);

//     textBox2 = createInput();
//     textBox2.position(width/2-textBox2.width/2, 100);
//     textBox2.size(150, 30);

//     textBox3 = createInput();
//     textBox3.position(width/2-textBox3.width/2, 150);
//     textBox3.size(150, 30);

//     textBox4 = createInput();
//     textBox4.position(width/2-textBox4.width/2, 200);
//     textBox4.size(150, 30);

//     textBox5 = createInput();
//     textBox5.position(width/2-textBox5.width/2, 250);
//     textBox5.size(150, 30);


//     button = createButton('Generate Story');
//     button.position(width/2 - button.width / 2, 300);
//     button.mousePressed(display)
// }

// function draw(){
//     background(220);

//     textSize(15)
//     for(let i=0; i<arr.length; i++){
//         text(arr[i], 50, 70 + i * 50);
//     }

//     for(let i = 0; i < arr2.length; i++){
//         text(arr2[i], 50, 350 + i*50);
//     }
// }

// function display(){
//     displayText1 = "Noun: " + textBox1.value();
//     arr2.push(displayText1);

//     displayText2 = "Verb: " + textBox2.value();
//     arr2.push(displayText2);

//     displayText3 = "Adjective: " + textBox3.value();
//     arr2.push(displayText3);

//     displayText4 = "Adverb: " + textBox4.value();
//     arr2.push(displayText4);

//     displayText5 = "Place: " + textBox5.value();
//     arr2.push(displayText5);
// }

let nounInput, verbInput, adjectiveInput, adverbInput, placeInput;
let storyButton;
let storyOutput;

let templates = [
"The {adjective} {noun} decided to {verb} {adverb} at the {place}.",
  "One day, a {adjective} {noun} wanted to {verb} {adverb} in {place}.",
  "Did you hear about the {adjective} {noun} that tried to {verb} {adverb} near {place}?"
];

function setup() {
  createCanvas(600, 400);
  background(240);

  textSize(16);
  fill(0);
  text("Enter a noun:", 16, 40);
  nounInput = createInput();
  nounInput.position(150, 25);

  text("Enter a verb:", 16, 80);
  verbInput = createInput();
  verbInput.position(150, 65);

  text("Enter an adjective:", 16, 120);
  adjectiveInput = createInput();
  adjectiveInput.position(150, 105);

  text("Enter an adverb:", 16, 160);
  adverbInput = createInput();
  adverbInput.position(150, 145);

  text("Enter a place:", 16, 200);
  placeInput = createInput();
  placeInput.position(150, 185);

  storyButton = createButton("Generate Story");
  storyButton.position(150, 230);
  storyButton.mousePressed(generateStory);

  storyOutput = "";
}

function draw() {
  // Refresh canvas background
  background(240);

  // Re-draw labels
  fill(0);
  text("Enter a noun:", 16, 40);
  text("Enter a verb:", 16, 80);
  text("Enter an adjective:", 16, 120);
  text("Enter an adverb:", 16, 160);
  text("Enter a place:", 16, 200);

  // Display story at the bottom
  textSize(16);
  fill(50, 0, 100);
  textWrap(WORD);
  text(storyOutput, 20, 280, 560);
}

function generateStory() {
  // Get input values
  let noun = nounInput.value();
  let verb = verbInput.value();
  let adjective = adjectiveInput.value();
  let adverb = adverbInput.value();
  let place = placeInput.value();

  // Pick random template
  let randomIndex = floor(random(templates.length));
  let story = templates[randomIndex];

  // Replace placeholders
  story = story.replace("{noun}", "dog")
               .replace("{verb}", verb)
               .replace("{adjective}", adjective)
               .replace("{adverb}", adverb)
               .replace("{place}", place);

  // Update the displayed story
  storyOutput = story;
}
