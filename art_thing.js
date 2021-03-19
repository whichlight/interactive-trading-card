const s = ( p ) => {

  let w = p.windowWidth; 
  let h = p.windowHeight;

  p.setup = function() {
  	p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(p.mouseX,p.mouseY,10,10);
  };

  p.windowResized = function(){
    w = p.windowWidth; 
    h = p.windowHeight;
  	p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

};

let myp5 = new p5(s, 'art');

