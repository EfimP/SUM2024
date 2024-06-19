import { vec3, mat4 } from "../mth/math.js";
import * as anim from '../anim/anim.js';
import '../utils/cntrl.js';
import { control } from "../utils/cntrl.js";
import { camCreate, camSet } from "../mth/cam.js";

class _render{
  frameData = [0, 0, 0, 0];
  frameUniformBufferIndex = 5;
  timer = new anim.Timer;

  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    const gl = this.canvas.getContext("webgl2");
    this.gl = gl;

    if (gl === null) {
      alert("WebGL2 not supported");
      return;
    }

    gl.enable(gl.DEPTH_TEST);

    // Setting camera and matrixes
    this.cam = camCreate(this.canvas);
    this.cam = camSet(this.cam, vec3(0, 5, 5), vec3(0), vec3(0, 1, 0));

    // Loading shader
    this.shds = anim.loadShaders(gl, "default");
    let prg = this.shds.prg;

    // Vertex buffer
    const size = 0.8;
    this.prim = anim.createCube(size);
    anim.bufLoad(gl, prg, this.prim);

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

    this.counter = 10;
  }

  render() {
    const gl = this.gl;
    gl.clearColor(0.12, 0.85, 0.970, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    
    this.timer.response("fps");

    gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
    gl.bufferData(gl.UNIFORM_BUFFER, new Float32Array(this.frameData), gl.STATIC_DRAW);
    gl.bindBufferBase(gl.UNIFORM_BUFFER, this.frameUniformBufferIndex, this.frameBuffer);

    if (this.timeLoc != -1) {
      gl.uniform1f(this.timeLoc, this.timer.globalTime);
    }
    
    this.newMatrWorld = control(this.timer);
    if (this.newMatrWorld != null)
      this.prim.matrWorld = this.prim.matrWorld.mul(this.newMatrWorld);

    this.matrixReload();

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.prim.indexBuffer);
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_INT, 0);
  } // End of 'render' function

  mainLoop() {
    const draw = () => {
      this.render();
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
    gl.uniformMatrix4fv(WorldLoc, false, new Float32Array(this.prim.matrWorld.toArray()));//mat4().rotateY(0 * this.timer.globalTime * 140).mul(mat4().rotateX(0 * this.timer.globalTime * 70)).toArray()));
  }
}

window.addEventListener("load", () => {
  anim.mouseCheck();
  anim.keyboardCheck();

  const rnd = new _render("glcanvas");
  rnd.mainLoop();
});