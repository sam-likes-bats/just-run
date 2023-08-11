var path,pathImage,boy, leftBoundary,rightBoundary;
var pathImage,boyAnimation;
var i;

function preload(){
 boyAnimation=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
 pathImage=loadImage("path.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path=createSprite(200,200,300,500);
  path.addImage("path.png",pathImage);
  //Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  path.scale=0.7;

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy=createSprite(200,280);
boy.addAnimation("jake",boyAnimation);
boy.scale=0.5;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false;
}

function draw() {
  background(0);
//  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX;

  
  edges= createEdgeSprites();
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
//  if(path.y > 400 ){
//    path.y = height/2;
//  }
  
  drawSprites();
}
