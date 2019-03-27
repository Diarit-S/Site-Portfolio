// import p5 from '../../node_modules/p5';

const p5 = require('../../node_modules/p5');


var s = function(sketch) {
  var tousMesObjets = [];

  sketch.setup = function () {
    console.log('setup');
    sketch.createCanvas(window.innerWidth, window.innerHeight);
    sketch.noStroke();
    var canvas_cursor = document.getElementById('defaultCanvas0');
    canvas_cursor.style.position = "fixed";
    canvas_cursor.style.zIndex = '-4';
    canvas_cursor.style.top = '0';
  }

  sketch.draw = function () {
    sketch.background('rgba(0,0,0, 1)');
    sketch.fill(255);
    var newObjets = [];
    for (a=0; a<tousMesObjets.length; a++) { 
      tousMesObjets[a].dessine();
      if (tousMesObjets[a].opacite>10)newObjets.push(tousMesObjets[a]);
    }
    tousMesObjets =  newObjets ;
  };


  sketch.mouseMoved = function() {
    if (sketch.dist(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY)>6) {
      new sketch.objet();
    }
  };

  sketch.objet = function () {
    this.opacite=255;
    this.t=6;
    this.x=sketch.mouseX;
    this.y=sketch.mouseY +0.1;
    angle=sketch.random(sketch.TWO_PI); 
    this.angleT = sketch.random(sketch.TWO_PI);
    this.vangle = sketch.random(-sketch.PI, sketch.PI)*0.05;
    this.vx = sketch.cos(angle)*1.4;
    this.vy = sketch.sin(angle)*1.4;
    tousMesObjets.push(this);

    this.dessine = function() {
    
      this.opacite*=0.99;
      this.x+= this.vx;
      this.y+= this.vy;
      this.t*=0.98;
      sketch.fill(255,  this.opacite);
      this.angleT+= this.vangle;
      sketch.translate( this.x,  this.y);
      sketch.rotate( this.angleT);
      sketch.triangle(- this.t, 0,  this.t, 0, 0,  this.t);
      sketch.resetMatrix();
    };
  };
};

var myp5 = new p5(s);