var theif;
var police;
var bullet;
var bg,bgImg;
var policecar;
var theifcar;

var score = 0;

//game states      
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
bgImg = loadImage("coding project Images/roadimg.jpg");
theifcar= loadImage("coding project Images/theif car.jpg");
policecar= loadImage("coding project Images/police car.jpg");
}

function setup(){

  createCanvas(400,400)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

theifcar=createSprite(50,50,1,1);
theifcar.addImage(theifcar);
theifcar.scale = 0.5;

policecar=createSprite(70,50,1,1);
policecar.addImage(policecar);
policecar.scale=0.5;

}

function draw() {
  
}