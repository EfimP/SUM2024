export let mouseX = 0, mouseY = 0, mouseMdx = 0, mouseMdy = 0, mouseClick = 0, rmouseClick = 0;
export let ctrlKey = 0, leftKey = 0, rightKey = 0, upKey = 0, downKey = 0;

export function mouseCheck() {
  const canvas = document.getElementById("glcanvas");

  document.addEventListener("mousedown", function (event) {
    if (event.button == 0)
      mouseClick = 1;
    else if (event.button == 2)
      rmouseClick = 1;
  });

  document.addEventListener("mouseup", function (event) {
    if (event.button == 0)
      mouseClick = 0;
    else if (event.button == 2)
      rmouseClick = 0;
  });

  canvas.addEventListener("mousemove", function (event) {
    mouseMdx = event.clientX - mouseX;
    mouseMdy = event.clientY - mouseY;
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
}

export function keyboardCheck() {
  document.addEventListener('keydown', function (event) {
    if (event.key == "Control")
      ctrlKey = 1;
    if (event.key == "ArrowLeft")
      leftKey = 1;
    if (event.key == "ArrowRight")
      rightKey = 1;
    if (event.key == "ArrowUp")
      upKey = 1;
    if (event.key == "ArrowDown")
      downKey = 1;
  });

  document.addEventListener('keyup', function (event) {
    if (event.key == "Control")
      ctrlKey = 0;
    if (event.key == "ArrowLeft")
      leftKey = 0;
    if (event.key == "ArrowRight")
      rightKey = 0;
    if (event.key == "ArrowUp")
      upKey = 0;
    if (event.key == "ArrowDown")
      downKey = 0;
  });
}