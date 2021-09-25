params = getParams();

let ds;
let screen = 480;
function setup() {
  mycanvas = createCanvas(screen, screen);
  ds = new Machine();
}

function draw() {
  background(0);
  ds.render();
  noLoop();
  document.getElementById('canvasimg').src = mycanvas.canvas.toDataURL("img/png");
  mycanvas.canvas.style.display = "none"
}

function Machine() {
    this.steps = 0;
    this.seed = params.v ? params.v : "11ac128f8b54949c12d04102cfc01960fc496813cbc3495bf77aeed738579738";

    this.rules = "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
    this.startLength = 460.0;
    this.theta = TWO_PI / 10.0;
    this.reset();
}

Machine.prototype.simulate = function (gen) {
  while (this.getAge() < gen) {
    this.iterate(this.production);
  }
}

Machine.prototype.reset = function () {
    this.production = this.axiom;
    this.drawLength = this.startLength;
    this.generations = 0;
  }

Machine.prototype.getAge = function () {
    return this.generations;
  }

//apply substitution rules to create new iteration of production string
Machine.prototype.iterate = function() {
    //we can change the tools heres
    console.log("iterate");
}


Machine.prototype.render = function () {
    //translate(width / 2, height / 2);
    //draw( width / 2, height / 2)
    noFill();
    stroke(100, 100, 240);
    circle(screen / 2, screen / 2, 5);
    let unit = 0;
    
    for(let i=0; i<this.rules.length-1; ++i) {

      var tool = this.rules.charAt(i);
      let char = this.seed.charAt(i);
      unit += parseInt(char, 16);

      console.log(unit, tool);
      switch(true){
       case tool == '+':
         circle(screen / 2, screen / 2, unit)
         break; 
      }
    }
  }


