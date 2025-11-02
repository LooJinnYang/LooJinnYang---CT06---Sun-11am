let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

let attempts = 0;
let randWord = "";
let textBox;
let button;

function setup() {
  createCanvas(600, 400);

}

function draw() {

    textAlign(CENTER, CENTER)
    textSize(24)
    text("Guess the Word!", width/2, 50)
    text("Attempts: " + attempts, width/2, 100)
    text("Hint: " + randWord, width/2, 150)
}
