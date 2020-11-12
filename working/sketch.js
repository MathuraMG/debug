let particle = [];
let particlenew = [];
let startX;
let startY;
let count;
let delay = 0;

let fractal = 1;

function setup() {
  createCanvas(600, 500);
  itSlider = createSlider(1, 6, 1);
  itSlider.position(20, 20);


}

function draw() {
  particle = [];
  drawFractal(itSlider.value(), 300, 400, 200);
  // test();

}

function test() {
  particle[0] = new triangleFr(100, 100, 100, 0, 1);
  particle[0].display();
}

function drawFractal(iterations, startX, startY, startSize) {
  background(250, 50);

  particle[0] = new triangleFr(startX, startY, startSize, 0, 1);

  for (let i = 1; i < iterations; i++) {

    l = particle.length;
    count = 0;
    // if(count%100 == 0)

    for (let j = 0; j < l; j++) {
      if (particle[j].flag == (i - 1)) {
        fill(255, 40 + 30 * i,  80 + 20 * i);
        noStroke();

        prevTri = particle[j].display();
        particlenew[count++] = new triangleFr(prevTri.xup, prevTri.yup, prevTri.size, i, 1);
        if (prevTri.xleft < prevTri.xright) {
          particlenew[count++] = new triangleFr(prevTri.xleft, prevTri.yleft, prevTri.size, i, 2);
          particlenew[count++] = new triangleFr(prevTri.xright, prevTri.yright, prevTri.size, i, 3);
        } else {
          particlenew[count++] = new triangleFr(prevTri.xleft, prevTri.yleft, prevTri.size, i, 3);
          particlenew[count++] = new triangleFr(prevTri.xright, prevTri.yright, prevTri.size, i, 2);
        }
      }
    }

    particle = particle.concat(particlenew);
    //particlenew = [];
    for (j = 0; j < particle.length; j++) {
      fill(255, 40 + 30 * i,  80 + 20 * i);
      noStroke();
      if (particle[j].flag == (i - 1))
        particle[j].display();
  
    }
  }


  
}

function mouseVal() {
  stroke(255);
  fill(255);
  text('(' + mouseX + ',' + mouseY + ')', 10, 10);
}

function toggle() {
  if (fractal == 1)
    fractal = 2;
  else if (fractal == 2)
    fractal = 1;
}
