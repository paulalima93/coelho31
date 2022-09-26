const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;

var bg_img;
var food;
var rabbit;

var button,blower;
var bunny;
var blink,eat,sad;
var mute_btn;

var fr,rope2;

var bk_song;
var cut_sound;
var sad_sound;
var eating_sound;
var air;

function preload()
{
  //imagens do jogo
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  
  //sons do jogo
  bk_song = loadSound('sound1.mp3');
  sad_sound = loadSound("sad.wav")
  cut_sound = loadSound('rope_cut.mp3');
  eating_sound = loadSound('eating_sound.mp3');
  air = loadSound('air.wav');

  //animações do jogo
  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  eat = loadAnimation("eat_0.png" , "eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  sad = loadAnimation("sad_1.png","sad_2.png","sad_3.png");
  
  //propriedades das animações
  blink.playing = true;
  eat.playing = true;
  sad.playing = true;
  sad.looping= false;
  eat.looping = false; 
}

function setup() {
  createCanvas(500,700);

  frameRate(80);
  
  //C32
  //tocar musica de fundo e setar um volume

  

  engine = Engine.create();
  world = engine.world;
  
  //C30
  //criar botão para cortar a corda
  button = createImg('cut_btn.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);


  //C32
  //criar botão para soprar a fruta
 


  //C32
  //criar botão para mutar
  



  //cria corta com 7 pedaçoes, na parte de cima da tela, ao centro
  rope = new Rope(7,{x:245,y:30});

  //cria o chão na parte inferior da tela
  ground = new Ground(200,690,600,20);


  blink.frameDelay = 20;
  eat.frameDelay = 20;


 //C30
 //criar sprite do coelho
 bunny.addAnimation('blinking',blink);

 

 //C30
 //adicionar animações
  bunny.addAnimation('eating',eat);
  bunny.addAnimation('crying',sad);
  bunny.changeAnimation('blinking');



  //cria a fruta e adiciona ao composto
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);


  //cria a conexão entre a fruta e a corda
  fruit_con = new Link(rope,fruit);
 

  imageMode(CENTER);
  rectMode(CENTER);
  textSize(50)
  
}

function draw() 
{
  background(51);
  //imagem de fundo
  image(bg_img,0,0,490,690);
  
  //C30
  //colocar imagem da fruta
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }

  //exibe a corda
  rope.show();
  
  //exibe o chão
  ground.show();

  //C30
  //comando para desenhar as sprites na tela
  drawSprites();

  //C31
  //trocar para animação "comendo" se a fruta colidir com o coelho


  //C31
  //trocar para animação "chorando" se a fruta colidir com o chão
   
Engine.update(engine);

}


//C30
//criar função para dropar a fruta
function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}


//C31
//criar função que verifica se a fruta colide com outro objeto



//C32
//criar função para soprar a fruta



//C32
//criar função para mutar e desmutar a musica de fundo


