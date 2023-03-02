var trex, trexImg;
var chao;
var chaoImg;
var chaoFake;
var nuvem;

function preload() {
  //carrega imagens, animações, sons etc...
  trexImg = loadAnimation("trex3.png", "trex4.png");
  chaoImg = loadImage("ground2.png");
}

function setup() {
  //função de configuração
  createCanvas(600, 200);

  trex = createSprite(50, 170, 30, 30);
  trex.addAnimation("running", trexImg);
  trex.scale = 0.5;

  chao = createSprite(300, 190, 600, 20);
  chao.addImage(chaoImg);
  chao.velocityX = -5;

  chaoFake = createSprite(300, 200, 600, 20);
  chaoFake.visible = false;

  // var rand = Math.round(random(1, 10));
  // console.log(rand);
}

function draw() {
  background("white");

  if (keyDown("space") && trex.isTouching(chao)) {
    trex.velocityY = -13;
  }

  //gravidade
  trex.velocityY = trex.velocityY + 0.9;

  trex.collide(chaoFake);

  if (chao.x < 0) {
    chao.x = chao.width / 2;
  }

  gerarNuvens();

  drawSprites();
}

function gerarNuvens() {
  if (frameCount % 60 === 0) {
    nuvem = createSprite(620, 100, 10, 10);
    nuvem.velocityX = -3;
  }
}
