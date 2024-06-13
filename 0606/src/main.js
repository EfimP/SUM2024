import { vec3, mat4 } from "./mth/math.js";
import { Timer } from "./anim/timer.js";
import { createCube, createTriangle, bufLoad, createOctahedron, createIcohedron } from "./anim/prim.js";
import { camSet } from "./anim/cam.js";
import { loadShaders } from "./anim/rnd/res/shaders.js";

class _render{
  frameData = [0, 0, 0, 0];
  frameUniformBufferIndex = 5;
  timer = new Timer;

  constructor(canvasId, figure) {
    this.canvas = document.getElementById(canvasId);
    const gl = this.canvas.getContext("webgl2");
    this.gl = gl;

    if (gl === null) {
      alert("WebGL2 not supported");
      return;
    }

    gl.enable(gl.DEPTH_TEST);

    // Setting camera and matrixes
    this.cam = camSet(this.canvas);

    // Loading shader
    this.shds = loadShaders(gl);
    let prg = this.shds.prg;

    // Vertex buffer
    const size = 0.8;
    if (figure == "triangle") {
      this.prim = createTriangle(size);
    }
    else if (figure == "cube") {
      this.prim = createCube(size);
    }
    else if (figure == "octa") {
      this.prim = createOctahedron(size);
    }
    else if (figure == "ica") {
      this.prim = createIcohedron(size);
    }
    bufLoad(gl, prg, this.prim, this.prim.numOfElements);

    // Frame buffer
    this.frameBuffer = gl.createBuffer();
    gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
    gl.bufferData(gl.UNIFORM_BUFFER, 4 * 4, gl.STATIC_DRAW);

    gl.useProgram(prg);
    gl.uniformBlockBinding(prg, 
      gl.getUniformBlockIndex(prg, "FrameBuffer"), 
      this.frameUniformBufferIndex);

    // getting binding point for variable of time
    this.timeLoc = gl.getUniformLocation(prg, "Time");

    this.matrixReload();
  }

  render(figure) {
    const gl = this.gl;
    gl.clearColor(0.12, 0.85, 0.970, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clear(gl.DEPTH_BUFFER_BIT);

    
    this.timer.response("fps");

    gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
    gl.bufferData(gl.UNIFORM_BUFFER, new Float32Array(this.frameData), gl.STATIC_DRAW);
    gl.bindBufferBase(gl.UNIFORM_BUFFER, this.frameUniformBufferIndex, this.frameBuffer);

    if (this.timeLoc != -1) {
      const date = new Date();
      let t = date.getMinutes() * 60 + 
              date.getSeconds() +
              date.getMilliseconds() / 1000;

      gl.uniform1f(this.timeLoc, t);
    }

    // Matrix of world
    const WorldLoc = gl.getUniformLocation(this.shds.prg, "MatrWorld");
    gl.uniformMatrix4fv(WorldLoc, false, new Float32Array(mat4().rotateY(20 + 0 * this.timer.globalTime * 140).mul(mat4().rotateX(150 + 0 * this.timer.globalTime * 70)).toArray()));

    if (figure == "triangle") {
      gl.drawArrays(gl.TRIANGLES, 0, 12);
    }
    else if (figure == "cube") {
      gl.drawArrays(gl.TRIANGLES, 0, 36);
    }
    else if (figure == "octa") {
      gl.drawArrays(gl.TRIANGLES, 0, 24);
    }
    else if (figure == "ica") {
      gl.drawArrays(gl.TRIANGLES, 0, 24);
    }
  } // End of 'render' function

  mainLoop(figure) {
    const draw = () => {
      this.render(figure);
      this.timer.response();
      window.requestAnimationFrame(draw);
    };
    draw();
  } // End of 'mainLoop' function

  matrixReload() {
    const gl = this.gl;
    let prg = this.shds.prg;

    // Matrixes
    // Matrix of view
    const ViewLoc = gl.getUniformLocation(prg, "MatrView");
    gl.uniformMatrix4fv(ViewLoc, false, new Float32Array(this.cam.matrView.toArray()));

    // Matrix of projection
    const ProjLoc = gl.getUniformLocation(prg, "MatrProj");
    gl.uniformMatrix4fv(ProjLoc, false, new Float32Array(this.cam.matrProj.toArray()));

    // Matrix of view projection
    const VPLoc = gl.getUniformLocation(prg, "MatrVP");
    gl.uniformMatrix4fv(VPLoc, false, new Float32Array(this.cam.matrVP.toArray()));

    // Matrix of world
    const WorldLoc = gl.getUniformLocation(prg, "MatrWorld");
    gl.uniformMatrix4fv(WorldLoc, false, new Float32Array(mat4().rotateY(120 + 0 * this.timer.globalTime * 140).mul(mat4().rotateX( 120 + 0 * this.timer.globalTime * 70)).toArray()));
  }
}

window.addEventListener("load", () => {
  const rnd1 = new _render("glcanvas1", "triangle");
  const rnd2 = new _render("glcanvas2", "cube");
  const rnd3 = new _render("glcanvas3", "octa");
  const rnd4 = new _render("glcanvas4", "ica");
  rnd1.mainLoop("triangle");
  rnd2.mainLoop("cube");
  rnd3.mainLoop("octa");
  rnd4.mainLoop("ica");
});