
function s(p) {

  let shapes = [];

  let w = p.windowWidth;
  let h = p.windowHeight;

  p.setup = function () {
    p.frameRate(30);
    p.colorMode(p.HSB);
    p.createCanvas(p.windowWidth, p.windowHeight);
    drawBackground();

   //disable default touch events for mobile
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", pdefault, false);
  el.addEventListener("touchend", pdefault, false);
  el.addEventListener("touchcancel", pdefault, false);
  el.addEventListener("touchleave", pdefault, false);
  el.addEventListener("touchmove", pdefault, false);


  };

  function pdefault(e){
    e.preventDefault()
  }

  p.draw = function () {
    //update and render all shapes 
    for(let i=0;i<shapes.length; i++){
      let d = shapes[i];
      d.update();
      d.render();
    }
  };

  p.windowResized = function () {
    w = p.windowWidth;
    h = p.windowHeight;
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    drawBackground();
  };

  p.mouseDragged = function(){
    shapes.push(new Shape(p.mouseX, p.mouseY));
  }

  p.mousePressed = function(){
    shapes.push(new Shape(p.mouseX, p.mouseY));
  }

  function Shape(_cx, _cy){
    this.cx = _cx;
    this.cy = _cy; 
    this.size = 0; 
    this.weight = 5;
    this.alpha; 
    this.color = Math.floor(Math.random()*360);
    this.life = 100;

    this.update = function(){
      this.size+=10; 
      this.alpha = p.map(this.size, 0, this.life, 255, 0);
      //remove 
      if(this.size>this.life){
        var index = shapes.indexOf(this);
        if (index > -1) {
          shapes.splice(index, 1);
        }
      }
    }

    this.render = function(){
      p.push();
      p.translate(this.cx, this.cy);
      p.stroke(this.color, 100, 100, this.alpha);
      p.noFill();
      p.strokeWeight(this.weight)
      drawUniqueShape(this.size);
      p.pop();
    }
  }

  function drawUniqueShape(r){

    /* diamond */
    p.beginShape();
    p.vertex(0-r/2,0);
    p.vertex(0,r);
    p.vertex(r/2,0);
    p.vertex(0,0-r);
    p.endShape(p.CLOSE);


  /* polygons */ 
   // polygon(0,0,r,5);

  }


  function polygon(x, y, radius, npoints) {
    let angle = p.TWO_PI / npoints;
    p.rotate(3*p.TWO_PI/4);
    p.beginShape();
    for (let a = 0; a < p.TWO_PI; a += angle) {
      let sx = x + p.cos(a) * radius;
      let sy = y + p.sin(a) * radius;
      p.vertex(sx, sy);
    }
    p.endShape(p.CLOSE);
  }


  function drawBackground(){
    let _c = Math.floor(p.random(360)); 
    p.background(_c,5,100);
    for(let i=10; i<p.max(w,h); i+=50){
      p.push();
      p.translate(w/2,h/2);
      p.stroke(_c, 20, 100, this.alpha);
      p.noFill();
      p.strokeWeight(10);
      drawUniqueShape(i);
      p.pop();
    }
  }
}

let myp5 = new p5(s);