import { vec3, mat4, camCreate, camSet, cam } from "../mth/math.js";
import * as anim from '../anim/anim.js';
import { input, matrTrans, vecTrans } from "../utils/cntrl.js";

function resizeCanvasToDisplaySize(rnd) {
  let canvas = rnd.canvas;
  // Lookup the size the browser is displaying the canvas in CSS pixels.
  const displayWidth  = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;
 
  // Check if the canvas is not the same size.
  const needResize = canvas.width  !== displayWidth ||
                     canvas.height !== displayHeight;
 
  if (needResize) {
    // Make the canvas the same size
    canvas.width  = displayWidth;
    canvas.height = displayHeight;
  }
 
  rnd.gl.viewport(0, 0, rnd.gl.canvas.width, rnd.gl.canvas.height);

  return needResize;
}

function frameBlockBind(rnd) {
  let gl = rnd.gl;
  // Loading matrixes and frame buffer
  for (let i = 0; i < rnd.primCount; i++)
    if (rnd.oldFlags[i] != rnd.isPrimDraw[i] && rnd.isPrimDraw[i] == true) {
      let prg = rnd.prims[i].shds.prg;

      gl.useProgram(prg);
      gl.uniformBlockBinding(prg, 
        gl.getUniformBlockIndex(prg, "FrameBuffer"),
        rnd.frameUniformBufferIndex);

      rnd.matrixReload(rnd.prims[i]);

      rnd.oldFlags[i] = rnd.isPrimDraw[i];
    }
}

function primsInit(rnd) {
  rnd.prims = [];

  //loading plane
  anim.loadPrim(rnd, "./warcraft.obj");

  // Creating cube
  anim.createFigure(rnd, "cube", "default", 0.8, vec3());

  // Creating ground
  const size = 5000;
  // Loading texture
  let img = new Image();
  img.src = "./road.jpg";
  anim.texture(rnd.gl, {img: img, name: "land"});
  anim.createFigure(rnd, "quad", "quad", size, vec3());
}

class _render{
  frameData = [0, 0, 0, 0];
  frameUniformBufferIndex = 5;
  timer = new anim.Timer;

  constructor(canvasId) {
    //Getting canvas and gl context
    this.canvas = document.getElementById(canvasId);
    const gl = this.canvas.getContext("webgl2");
    this.gl = gl;

    // Checking gl context
    if (gl === null) {
      alert("WebGL2 not supported");
      return;
    }

    gl.enable(gl.DEPTH_TEST);

    // Setting camera and matrixes
    camCreate(this.canvas);
    camSet(vec3(0, 2, -5), vec3(0), vec3(0, 1, 0));
    this.cam = cam;

    // Array of primitives initializing, creating of primitives
    this.isPrimDraw = [];
    this.primCount = 0;
    primsInit(this);

    // Frame buffer
    this.frameBuffer = gl.createBuffer();
    gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
    gl.bufferData(gl.UNIFORM_BUFFER, 4 * 4, gl.STATIC_DRAW);

    // Binding frame buffer, reloading matrixes
    this.oldFlags = [];
    for (let i = 0; i < this.primCount; i++)
      this.oldFlags[i] = false;

    // Initializing input system
    this.input = new input(this);
  }

  render() {
    const gl = this.gl;
    // Clearing frame
    gl.clearColor(0.12, 0.85, 0.970, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    
    // Drawing fps
    this.timer.response("fps");

    resizeCanvasToDisplaySize(this);

    // Sending frame buffer to shaders
    gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
    gl.bufferData(gl.UNIFORM_BUFFER, new Float32Array(this.frameData), gl.STATIC_DRAW);
    gl.bindBufferBase(gl.UNIFORM_BUFFER, this.frameUniformBufferIndex, this.frameBuffer);
    
    // Responsing input system
    this.newMatrWorld = this.input.responseCamera(this.timer);
    if (this.newMatrWorld != null && this.isPrimDraw[0] == true) {
      this.prims[0].matrWorld = this.prims[0].matrWorld.mul(this.newMatrWorld);
      this.cam = cam;
      //console.log("Camera position:", cam.loc);
    }

    frameBlockBind(this);

    for (let i = 0; i < this.primCount; i++)
      if (this.isPrimDraw[i] == true) {
        let prg = this.prims[i].shds.prg;

        if (this.prims[i].name == "quad")
          this.prims[i].matrWorld = matrTrans;

        gl.useProgram(prg);

        // Updating time on shaders
        this.timeLoc = gl.getUniformLocation(prg, "Time");
        if (this.timeLoc != null)
          gl.uniform1f(this.timeLoc, this.timer.globalTime);

        // Updating translating of texture on shaders
        this.transLoc = gl.getUniformLocation(prg, "TransVec");
        if (this.transLoc != null)
          gl.uniform2f(this.transLoc, vecTrans.x, vecTrans.z);

        // Updating camera location on shaders
        this.cameraLocatioinLoc = gl.getUniformLocation(prg, "CamLoc");
        if (this.cameraLocatioinLoc != null)
          gl.uniform3f(this.cameraLocatioinLoc, this.cam.loc.x, this.cam.loc.y, this.cam.loc.z);

        // Reloading matrixes
        this.matrixReload(this.prims[i]);

        // Drawing of primitives
        gl.bindVertexArray(this.prims[i].vertexAttribArray);
        if (this.prims[i].indexArray == null)
          gl.drawArrays(gl.TRIANGLES, 0, this.prims[i].numOfElements);
        else
          gl.drawElements(gl.TRIANGLES, this.prims[i].numOfElements, gl.UNSIGNED_INT, 0);
      }
  } // End of 'render' function

  mainLoop() {
    const draw = () => {
      this.render();
      this.timer.response();
      window.requestAnimationFrame(draw);
    };
    draw();
  } // End of 'mainLoop' function

  matrixReload(prim) {
    const gl = this.gl;
    let prg = prim.shds.prg;

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
    gl.uniformMatrix4fv(WorldLoc, false, new Float32Array(prim.matrWorld.toArray()));
  }
}

window.addEventListener("load", () => {
  const rnd = new _render("glcanvas");
  rnd.mainLoop();
});