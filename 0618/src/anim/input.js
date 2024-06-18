export let mouseX = 0, mouseY = 0, mouseMdx = 0, mouseMdy = 0, mouseClick = 0, rmouseClick = 0;

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
    mouseMdx = mouseX - event.clientX;
    mouseMdy = mouseY - event.clientY;
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
}