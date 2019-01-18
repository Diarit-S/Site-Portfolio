var tousMesObjets = [];

function setup() {
  //fullscreen();
  createCanvas(windowWidth-17, windowHeight+200);
 //  createCanvas(500, 500);
  //tousMesObjets = new Array[0];
  noStroke();
}

function draw() { 
  background(47, 42, 56);
  fill(255);
  //ellipse(mouseX, mouseY, 6,6)
   //text(tousMesObjets.length+"...", 50, 50);
  var newObjets = [];
  for (a=0; a<tousMesObjets.length; a++) { 
 // text(a+"...", 50, 50);
    tousMesObjets[a].dessine();
   if (tousMesObjets[a].opacite>10)newObjets.push(tousMesObjets[a]);
  }
 tousMesObjets =  newObjets ;
}

function mouseMoved() {
  if (dist(mouseX, mouseY, pmouseX, pmouseY)>6) {
    new objet();
  }
}

function objet() {  
  this.opacite=255;
  this.t=6;
  this.x=mouseX;
  this.y=mouseY +0.1;
  angle=random(TWO_PI); 
  this.angleT = random(TWO_PI);
  this.vangle = random(-PI, PI)*0.05;
  this.vx = cos(angle)*1.4;
  this.vy = sin(angle)*1.4;
  tousMesObjets.push(this);

  this.dessine = function() {
    
     this.opacite*=0.99;
     this.x+= this.vx;
     this.y+= this.vy;
     this.t*=0.98;
    fill(255,  this.opacite);
   // fill(255);
     this.angleT+= this.vangle;
   // pushMatrix();
    translate( this.x,  this.y);
    rotate( this.angleT);
    triangle(- this.t, 0,  this.t, 0, 0,  this.t);
   resetMatrix();
  }
}