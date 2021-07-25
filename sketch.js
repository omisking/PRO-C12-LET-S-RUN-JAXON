var jake, jake_running, coin, coinImg, coin1, counImg1, coin2, coinImg2, bomb, bomb1, bomb2, bombImg, energy, energy1, energy2, energyImg, ground, groundImage, invisibleGround, invisibleGround2, soundBG, power, soundBG2, soundC, powerImg, soundED, soundB;
var gameState = "sound";
var score = 0;
var lifes = 5;

function preload() {
  //pre-load images
  jake_running = loadAnimation("Runner-1.png", "Runner-2.png");
  groundImage = loadImage("path.png");
  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png")

  energyImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");

}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  ground = createSprite(200, -100);
  ground.addAnimation("path", groundImage);
  ground.scale = 0.9;
  ground.velocityY = 8;
  ground.tint = 'yellow';

  coin = createSprite(200, 10);
  coin.addAnimation("coin", coinImg);
  coin.scale = 0.3;
  coin.velocityY = 8;

  coin1 = createSprite(120, 10);
  coin1.addAnimation("coin", coinImg);
  coin1.scale = 0.3;
  coin1.velocityY = 8;

  coin2 = createSprite(280, 10);
  coin2.addAnimation("coin", coinImg);
  coin2.scale = 0.3;
  coin2.velocityY = 8;

  jake = createSprite(200, 300,20,20);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.6;
  jake.velocityY = 10
  

  bomb = createSprite(200, -100);
  bomb.addAnimation("bomb", bombImg);
  bomb.scale = 0.05;
  bomb.velocityY = 8;
  bomb.tint = rgb(255, 0, 0);

  bomb1 = createSprite(120, -300);
  bomb1.addAnimation("bomb", bombImg);
  bomb1.scale = 0.05;
  bomb1.velocityY = 8;
  bomb1.tint = rgb(255, 0, 0);

  bomb2 = createSprite(280, -400);
  bomb2.addAnimation("bomb", bombImg);
  bomb2.scale = 0.05;
  bomb2.velocityY = 8;
  bomb2.tint = rgb(255, 0, 0);

  invisibleGround = createSprite(370, 200, 100, 400);
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(40, 200, 100, 400);
  invisibleGround2.visible = false;

  energy = createSprite(200, -2000);
  energy.addAnimation("energy", energyImg);
  energy.scale = 0.05;
  energy.velocityY = 10;

  energy1 = createSprite(120, -600);
  energy1.addAnimation("energy", energyImg);
  energy1.scale = 0.05;
  energy1.velocityY = 10;

  energy2 = createSprite(280, -1000);
  energy2.addAnimation("energy", energyImg);
  energy2.scale = 0.05;
  energy2.velocityY = 10;

  // power = createSprite(25, 200);
  // power.addAnimation("power", powerImg);
  // power.scale = 0.05;


}

function draw() {
  background("white");
  if (ground.y >= 470) {
    ground.y = 5;
  }
  // jake.x = mouseX;

  if (coin.y >= 470) {
    coin.y = random(-7000, -6000);
  }

  if (coin1.y >= 470) {
    coin1.y = random(-5000, -3000);
  }

  if (coin2.y >= 470) {
    coin2.y = random(-9000, -6000);
  }

  if (bomb.y >= 470) {
    bomb.y = random(-1000, -10);
  }

  if (bomb1.y >= 470) {
    bomb1.y = random(-900, -10);
  }

  if (bomb2.y >= 470) {
    bomb2.y = random(-900, -100);
  }

  if (energy.y >= 470) {
    energy.y = random(-10000, -8000);
  }

  if (energy1.y >= 470) {
    energy1.y = random(-10000, -7000);
  }

  if (energy2.y >= 470) {
    energy2.y = random(-9000, -7000);
  }

  if (keyDown("left")) {
    jake.x = jake.x - 6;
  } else if (keyDown("right")) {
    jake.x = jake.x + 6;
  }

  if (jake.isTouching(coin)) {
    score += 1;
    coin.y = random(-10000, -1000);
    ;
  }

  if (jake.isTouching(coin1)) {
    score += 1;
    coin1.y = random(-6000, -4000);

  }

  if (jake.isTouching(coin2)) {
    score += 1;
    coin2.y = random(-8000, -10);

  }

  if (jake.isTouching(bomb)) {
    lifes -= 1;
    bomb.y = random(-1000, -10);

  }

  if (jake.isTouching(bomb1)) {
    lifes -= 1;
    bomb1.y = random(-100, -10);

  }

  if (jake.isTouching(bomb2)) {
    lifes -= 1;
    bomb2.y = random(-80, -10);

  }

  if (jake.isTouching(energy)) {
    lifes += 1;
    energy.y = random(-10000, -8000);

  }

  if (jake.isTouching(energy1)) {
    lifes += 1;
    energy1.y = random(-9000, -7000);

  }

  if (jake.isTouching(energy2)) {
    lifes += 1;
    energy2.y = random(-10000, -9000);

  }

  jake.collide(invisibleGround);
  jake.collide(invisibleGround2);

  drawSprites();

  textSize = 10;
  fill("white");
  text(score, 130, 20);
  text("Score:", 90, 20)
  text(lifes, 299, 20);
  text("Lifes: ", 265, 20);

  if (score >= 8) {
    ground.velocityY = 0;
    coin.velocityY = 0;
    coin1.velocityY = 0;
    coin2.velocityY = 0;
    bomb.velocityY = 0;
    bomb1.velocityY = 0;
    bomb2.velocityY = 0;
    energy.velocityY = 0;
    energy1.velocityY = 0;
    energy2.velocityY = 0;
    jake.pause();
    jake.x = -100;
    jake.y = -100;
    textSize = 100;
    fill("white");
    text("You Won! Refresh the page to restart!", 100, 200);

  }

  if (lifes <= 0) {
    ground.velocityY = 0;
    coin.velocityY = 0;
    coin1.velocityY = 0;
    coin2.velocityY = 0;
    bomb.velocityY = 0;
    bomb1.velocityY = 0;
    bomb2.velocityY = 0;
    energy.velocityY = 0;
    energy1.velocityY = 0;
    energy2.velocityY = 0;
    jake.pause();
    jake.x = -100;
    jake.y = -100;
    textSize = 100;
    fill("white");
    text("Game Over! Refresh the page to restart!", 100, 200);

  }
}