
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var hit1, hit2;
var sling1;

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(390,470,340,10);
    ground2=new Ground(790,240,340,10)    

    //down row
    box1=new Box(140,220,40,40);
    box2=new Box(160,220,40,40);
    box3=new Box(180,220,40,40);
    box4=new Box(200,220,40,40);
    box5=new Box(220,220,40,40);
    box6=new Box(240,220,40,40);

    //middle row
    box7=new Box(160,200,40,40);
    box8=new Box(180,200,40,40);
    box9=new Box(200,200,40,40);
    box10=new Box(220,200,40,40);

    //up row
    box11=new Box(180,180,40,40);
    box12=new Box(200,180,40,40);
    box13=new Box(190,160,40,40);

    //down row
    box19=new Block(340,105,40,40);
    box14=new Block(360,105,40,40);
    box15=new Block(380,105,40,40);
    box16=new Block(400,105,40,40);
    box17=new Block(420,105,40,40);
    box18=new Block(440,105,40,40);

    //middle row
    box20=new Block(360,85,40,40);
    box21=new Block(380,85,40,40);
    box22=new Block(400,85,40,40);
    box23=new Block(420,85,40,40);

    //top row
    box24=new Block(380,65,40,40);
    box25=new Block(400,65,40,40);
    box26=new Block(390,45,40,40);

    hit1=new Hitter(60,190,80,80);
    
    sling1=new SlingShot(hit1.body, {x:40 , y:140});

	  Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);

  ground1.display();
  ground2.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hit1.display();
  sling1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hit1.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
  sling1.fly();
}