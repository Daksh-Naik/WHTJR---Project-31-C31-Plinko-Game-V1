//Plinko Game Version 1 - WhiteHatJR Project 21 Class 21
//Plinko Game, Press T to drop the particles, F5 to reset
// 21 December 2020 - 20:00

const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

  var dividers = [];
  var dividersHeight = 320;

  var particles = [];

function preload() {

}

function setup() {
  createCanvas(1350, 800);

    engine = Engine.create();
    world = engine.world;

    TBound = new Bound(640, 0, 480, 10);
    BBound = new Bound(640, 800, 480, 10);
    LBound = new Bound(400, height/2, 10, 800);
    RBound = new Bound(880, height/2, 10, 800);

  //  for (var k = 0; k <= width; k = k + 80) {
  //    dividers.push(new Divider(k, height-dividersHeight/2, 10, dividersHeight));
  //  }

    Divider1 = new Divider(496, 615, 10, 320);
    Divider2 = new Divider(592, 615, 10, 320);
    Divider3 = new Divider(688, 615, 10, 320);
    Divider4 = new Divider(784, 615, 10, 320);

    OriginGround = new Ground(640, 785, 480, 20);
//--------------------------------------------------------------------------------------------
    Plinko1 = new Plinko(468.5, 80, 10);
    Plinko2 = new Plinko(537, 80, 10);
    Plinko3 = new Plinko(605.5, 80, 10);
    Plinko4 = new Plinko(674, 80, 10);
    Plinko5 = new Plinko(742.5, 80, 10);
    Plinko6 = new Plinko(811, 80, 10);

    Plinko7 = new Plinko(434.25, 180, 10);
    Plinko8 = new Plinko(502.75, 180, 10);
    Plinko9 = new Plinko(571.25, 180, 10);
    Plinko10 = new Plinko(639.75, 180, 10);
    Plinko11 = new Plinko(708.25, 180, 10);
    Plinko12 = new Plinko(776.75, 180, 10);
    Plinko13 = new Plinko(845.25, 180, 10);

    Plinko14 = new Plinko(468.5, 280, 10);
    Plinko15 = new Plinko(537, 280, 10);
    Plinko16 = new Plinko(605.5, 280, 10);
    Plinko17 = new Plinko(674, 280, 10);
    Plinko18 = new Plinko(742.5, 280, 10);
    Plinko19 = new Plinko(811, 280, 10);
    
    Plinko20 = new Plinko(434.25, 380, 10);
    Plinko21 = new Plinko(502.75, 380, 10);
    Plinko22 = new Plinko(571.25, 380, 10);
    Plinko23 = new Plinko(639.75, 380, 10);
    Plinko24 = new Plinko(708.25, 380, 10);
    Plinko25 = new Plinko(776.75, 380, 10);
    Plinko26 = new Plinko(845.25, 380, 10);
//-------------------------------------------------------------------------------------------

}


function draw() {
    background(color(0, 0, 0));  
    Engine.update(engine);

    OriginGround.display();

    Divider1.display();
    Divider2.display();
    Divider3.display();
    Divider4.display();

    TBound.display();
    BBound.display();
    LBound.display();
    RBound.display();
//-----------------------------------
    Plinko1.display();
    Plinko2.display();
    Plinko3.display();
    Plinko4.display();    
    Plinko5.display();
    Plinko6.display();

    Plinko7.display();
    Plinko8.display();
    Plinko9.display();
    Plinko10.display();    
    Plinko11.display();
    Plinko12.display();
    Plinko13.display();

    Plinko14.display();
    Plinko15.display();
    Plinko16.display();    
    Plinko17.display();
    Plinko18.display();
    Plinko19.display();

    Plinko20.display();
    Plinko21.display();
    Plinko22.display();    
    Plinko23.display();
    Plinko24.display();
    Plinko25.display();
    Plinko26.display();
//----------------------------------

  fill(color(255, 255, 255));
  textSize(20); 
  textFont("Georgia");
  text("Press T to drop some particles", 50, 200);
  text("Press F5 to reset", 1050, 200);
  text("Also, Scroll Down ", 90, 400);
  text("to see the particles.", 85, 430);

if (keyCode === 84) {

  
  if (frameCount % 60 === 0) {
    particles.push(new Particle (random(width/2 - 10, width/2 + 10), 10, 10))
  }


  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}


} 
