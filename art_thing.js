
function s(p) {

  let shapes = [];
  let bgshapes = [];

  let w = p.windowWidth;
  let h = p.windowHeight;

  p.setup = function () {
    p.frameRate(30);
    p.angleMode(p.DEGREES)
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function () {
    p.background(0, 0, 255);
    
    if(p.frameCount%10==0){
     createShape(w/2,h/2);
    }

    //update and render all shapes 
    for(let i=0;i<shapes.length; i++){
      let d = shapes[i];
      d.update();
      d.render();
    }

    for(let i=0;i<bgshapes.length; i++){
      let d = bgshapes[i];
      d.update();
      d.render();
    }

  };

  p.windowResized = function () {
    w = p.windowWidth;
    h = p.windowHeight;
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  createShape = function(_cx,_cy){
    let d = new BGShape(_cx,_cy);
    bgshapes.push(d);
  }

  p.mouseClicked = function(){
    let d = new Shape(p.mouseX, p.mouseY);
    shapes.push(d);
  }


  function Shape(_cx, _cy){
    this.cx = _cx;
    this.cy = _cy; 
    this.size = 0; 
    this.weight = 10;
    this.angle = 0;
    this.alpha; 

    this.update = function(){
      this.size+=5; 
      this.angle+=0.1;
      this.alpha = p.map(this.size, 0, p.min(w, h), 255, 0);
      //remove when beyond screen
      if(this.size>p.min(w, h)){
        var index = shapes.indexOf(this);
        if (index > -1) {
          shapes.splice(index, 1);
        }
      }
    }

    this.render = function(){
      p.push();
      p.translate(this.cx, this.cy);
     // p.rotate(this.angle);
      p.stroke(255, 255, 255, this.alpha);
      p.fill(255, 0, 255, this.alpha);
    //  p.noFill();
      p.strokeWeight(this.weight)
      p.beginShape();
      p.vertex(0-this.size/2,0);
      p.vertex(0,this.size);
      p.vertex(this.size/2,0);
      p.vertex(0,0-this.size);
      p.endShape(p.CLOSE);

      p.pop();
    }
  }


  function BGShape(){
    this.cx = 0;
    this.cy = 0; 
    this.size = 0; 
    this.weight = 5;
    this.alpha; 

    this.update = function(){
      this.size+=5; 
      this.alpha = p.map(this.size, 0, p.min(w, h), 10, 255);
      //remove when beyond screen
      if(this.size>h){
        var index = shapes.indexOf(this);
        if (index > -1) {
          shapes.splice(index, 1);
        }
      }
    }

    this.render = function(){
      p.push();
      p.stroke(255, 0, 255, this.alpha);
      p.noFill();
      p.strokeWeight(this.weight)
      p.line(0,h/2-this.size/2, w, h/2-this.size/2);

      p.stroke(255, 0, 255, this.alpha);
      p.noFill();
      p.strokeWeight(this.weight)
      p.line(0,h/2+this.size/2, w, h/2+this.size/2);
      p.pop();
    }
  }




}

let myp5 = new p5(s);