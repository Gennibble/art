let ds;
let screen = 520;

params = getParams();

function createView(){
  let container = document.createElement("div");
  document.body.appendChild(container);
  container.setAttribute("id", "flex-container");
}

function setup() {
  createView();
  mycanvas = createCanvas(screen, screen);
  ds = new Machine();
}

function draw() {
  noLoop();
  background(0);
  let container = document.getElementById('flex-container');  
  for(key of aryHash.values()) {  
    ds.reset();
    ds.render(key);
    let image = document.createElement("img");  
    image.src = mycanvas.canvas.toDataURL("img/png");
    container.appendChild(image);
    container.style.display ="flex";
    image.width = 120;
    image.height = 120;    
    console.log(key)
  }
  mycanvas.canvas.style.display = "none";
  container.style.display ="flex";
  container.style["flex-wrap"] = 'wrap';
  container.style["flex-shrink"] = 1;
}