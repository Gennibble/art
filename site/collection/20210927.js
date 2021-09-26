function Machine() {
    colorMode(HSL)
    this.steps = 0;
    this.rules = "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++";
    this.startLength = 460.0;
    this.theta = TWO_PI / 10.0;
    this.reset();
}

Machine.prototype.setRules =function(parm) {
  this.rules = parm;
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
    clear();
  }

Machine.prototype.getAge = function () {
    return this.generations;
  }

//apply substitution rules to create new iteration of production string
Machine.prototype.iterate = function() {
    //we can change the tools heres
    console.log("iterate");
}


Machine.prototype.render = function (seed = "0x11ac128f8b54949c12d04102cfc01960fc496813cbc3495bf77aeed738579738") {
    //translate(width / 2, height / 2);
    //draw( width / 2, height / 2)
    noFill();
    //stroke(100, 100, 240);
    //circle(screen / 2, screen / 2, 5);
    let unit = 0;
    seed = seed.substr(2,seed.length);
    for(let i=0; i<this.rules.length-1; ++i) {

      var tool = this.rules.charAt(i);
      let digitDouble = 256;
      single = seed.charAt(i);
      
      if(i != this.rules.length-2){
        let double = seed.charAt(i) + seed.charAt(i+1)
        digitDouble = parseInt(double, 16);
      }
      
      var digit = parseInt(single, 16);
      var colors = aryPallete[digit]
      stroke(colors[0],colors[1],colors[2])      
      //stroke((digitDouble * digit) % 360, digitDouble * digit % 100, unit % 100)

      unit += digit;
      switch(true){
       case tool == '+':
         circle(screen / 2, screen / 2, unit)
         break; 
      }
    }
  }


