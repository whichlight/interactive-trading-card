function s(p) {

  let shapes = [];
  let w = p.windowWidth;
  let h = p.windowHeight;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function () {
    p.background(0);
    p.fill(255);
    p.rect(p.mouseX, p.mouseY, 10, 10);
  };

  p.windowResized = function () {
    w = p.windowWidth;
    h = p.windowHeight;
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  createShape = function(_cx,_cy){
    let p = new Shape(_cx,_cy);
    shapes.push(p);
  }


  function Shape(_cx, _cy){
    this.cx = _x;
    this.cy = _y; 
    this.size = 0; 
    this.weight = 100;

    this.update = function(){

    }
    this.render = function(){

    }
    
  }


}

let myp5 = new p5(s);