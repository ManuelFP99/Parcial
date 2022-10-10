let canvas;

var interruptor = false;



function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  background('red');

}



function draw() {



  if (mouseIsPressed && interruptor == false) {
    stroke('yellow');
    line(mouseX - 50, mouseY, mouseX + 50, mouseY);
    stroke('green');
    line(mouseX, mouseY - 50, mouseX, mouseY + 50);

  }



  if (mouseIsPressed && interruptor == true) {

    stroke('purple');
    line(mouseX - 50, mouseY, mouseX + 50, mouseY);
    stroke('pink');
    line(mouseX, mouseY - 50, mouseX, mouseY + 50);

  }

}



function keyPressed() {

  interruptor = !interruptor;

}






    