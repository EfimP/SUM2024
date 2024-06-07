import * as mth from "./math.js";
import { vec3 } from './vec3.js';

function main() {
  const element = document.querySelector("#glcanvas");
  const gl = element.getContext("webgl2");

  if (gl === null) {
    alert("WebGL2 not supported");
    return;
  }

  gl.clearColor(...mth.getClearColor());
  // gl.clearColor(1, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  
  const anim = () => {
    gl.clearColor(1, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    window.requestAnimationFrame(anim);
  };

  anim();
}

window.addEventListener("load", () => {
  main();
});