var canvas;
let a = 200;
let atoms = [];

let colors = [
  [160, 255, 15], 
  [120, 202, 255], 
  [76, 178, 118], 
  [183, 154, 86], 
  [255, 128, 0], 
  [50, 50, 255] 
];
let colors_set = [];
var sphereSize;


function setup() {
  sphereSize = min(windowWidth, windowHeight) / 50*displayDensity();
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0, 'fixed');
  for (let x = -2; x < 2; x++) {
  for (let y = -2; y < 2; y++) {
    for (let z = -2; z < 2; z++) {
      // atoms.push(createVector(x, y, z));
      // colors_set.push();
      // atoms.push(createVector(x+0.5, y+0.5, z+0.5));
      // colors_set.push();
      // let color = random(colors);
      atoms.push({pos: createVector(x, y, z), color: random(colors)});
      // color = random(colors);
      atoms.push({pos: createVector(x+0.5, y+0.5, z+0.5), color: random(colors)});
      
    }
  }
};


}




var pos = 0;


function draw() {
  pos = lerp(pos, targetPos, 0.1);
  background(color(250,250,250));
  pointLight(120, 120, 120, 0, 0, 100);
  

  translate(displayWidth/4, displayHeight/8, 0);

  rotateZ(pos * 0.01);
  rotateX(pos * 0.01);
  rotateY(pos * 0.01);
  
  // push();
  // box(70, 70, 70);

  // pop();

  for (let atom of atoms) {
    // let color = random(colors);
    let color = atom.color

    push();
    translate(atom.pos.x * a, atom.pos.y * a, atom.pos.z * a);

    normalMaterial();
    // fill( 255, 0, 0, 50);
      // ambient materials reflect under any light
    
    ambientMaterial(color);

  
    emissiveMaterial(color);
    shininess(10);
    specularMaterial(color)
    sphere(sphereSize);
    pop();
  }
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  sphereSize = min(windowWidth, windowHeight) / 50*displayDensity();
}
let targetPos = 0; // Target position
function mouseWheel(event) {
  // Update targetPos based on mouse wheel scroll
  let scrollAmount = event.delta;
  targetPos += sqrt(abs(scrollAmount));
}

function touchMoved() {
  // Update targetPos based on touch scroll
  let scrollAmount = mouseY - pmouseY;
  targetPos += sqrt(abs(scrollAmount));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


