// write your codes here

function setup() {
createCanvas(600, 400);
background(220);
}

function draw() {

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gravity = 0.6;
let friction = 0.8;
let jumpStrength = -15;
let isJumping = false;
let isFalling = true;

// Player setup
let player = {
    x: 100,
    y: canvas.height - 50, // Start at the bottom
    width: 50,
    height: 50,
    speedX: 0,
    speedY: 0,
    color: 'cyan',
};

// Platform setup
let platforms = [
    { x: 0, y: canvas.height - 30, width: canvas.width, height: 30 }, // Ground platform
];

let keys = {};

// Event listeners for key press
document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
});
document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gravity
    if (isFalling) {
        player.speedY += gravity;
    }

    // Jumping mechanism
    if (keys['Space'] && !isJumping && !isFalling) {
        player.speedY = jumpStrength;
        isJumping = true;
        isFalling = false;
    }

    // Move the player
    player.y += player.speedY;
    player.x += player.speedX;

    // Collision detection with the floor
    if (player.y + player.height > canvas.height - 30) {
        player.y = canvas.height - 50;
        isJumping = false;
        isFalling = true;
        player.speedY = 0;
    }

    // Detect collisions with platforms
    platforms.forEach(platform => {
        if (player.x + player.width > platform.x && player.x < platform.x + platform.width &&
            player.y + player.height > platform.y && player.y + player.height < platform.y + 10 &&
            player.speedY >= 0) {
            player.y = platform.y - player.height;
            isJumping = false;
            isFalling = true;
            player.speedY = 0;
        }
    });

    // Draw player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw platforms
    ctx.fillStyle = 'green';
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });

    requestAnimationFrame(gameLoop);
}

gameLoop();
}