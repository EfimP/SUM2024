import { vec3, mat4 } from "./mth/math.js";
import { Timer } from "./anim/timer.js"

class _render{
  frameData = [0, 0, 0, 0];
  frameUniformBufferIndex = 5;
  timer = new Timer;

  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    const gl = this.canvas.getContext("webgl2");
    this.gl = gl;

    if (gl === null) {
      alert("WebGL2 not supported");
      return;
    }

    let rect = this.canvas.getBoundingClientRect();
    this.frameH = rect.bottom - rect.top + 1;
    this.frameW = rect.right - rect.left + 1;
    this.projDist = 0.1;
    this.projSize = 0.1;
    this.farClip = 300;
    this.matrView = vec3().view(vec3(5), vec3(0), vec3(0, 1, 0));
    this.projSet();

    // Load and compile shader function
    const loadShader = (shaderType, shaderSource) => {
      const shader = gl.createShader(shaderType);
      gl.shaderSource(shader, shaderSource);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        let buf = gl.getShaderInfoLog(shader);
        console.log('Shader compile fail: ' + buf);
      }                                            
      return shader;
    } // End of 'loadShader' function

    // Shader creation
    let vs_txt =
    `#version 300 es
    precision highp float;
    in vec3 InPosition;
      
    out vec2 DrawPos;
    uniform float Time;
  
    uniform mat4 MatrView;
    uniform mat4 MatrVP;
    uniform mat4 MatrWorld;

    uniform FrameBuffer
    {  
      vec4 Data;
    };

    void main( void )
    {
      gl_Position = /*MatrWorld */ MatrVP * vec4(InPosition, 1.0);
      DrawPos = InPosition.xy;
    }
    `;
    let fs_txt =
    `#version 300 es
    precision highp float;
    out vec4 OutColor;
    
    in vec2 DrawPos;
    uniform float Time;

    uniform FrameBuffer
    {
      vec4 Data;
    };

    void main( void )
    {
      OutColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;
    let
      vs = loadShader(gl.VERTEX_SHADER, vs_txt),
      fs = loadShader(gl.FRAGMENT_SHADER, fs_txt),
      prg = gl.createProgram();
    gl.attachShader(prg, vs);
    gl.attachShader(prg, fs);
    gl.linkProgram(prg);
    if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
      let buf = gl.getProgramInfoLog(prg);
      console.log('Shader program link fail: ' + buf);
    }

    // Veretex buffer
    const size = 0.8;
    const vertexes = [-size, size, -0.1, -size, -size, -0.1, size, size, -0.1, size, -size, -0.1];
    const posLoc = gl.getAttribLocation(prg, "InPosition");
    let vertexArray = gl.createVertexArray();
    gl.bindVertexArray(vertexArray);
    let vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexes), gl.STATIC_DRAW);
    if (posLoc != -1) {
      gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(posLoc);
    }

    this.timeLoc = gl.getUniformLocation(prg, "Time");

    this.frameBuffer = gl.createBuffer();
    gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
    gl.bufferData(gl.UNIFORM_BUFFER, 4 * 4, gl.STATIC_DRAW);

    gl.useProgram(prg);
    gl.uniformBlockBinding(prg, 
      gl.getUniformBlockIndex(prg, "FrameBuffer"), 
      this.frameUniformBufferIndex);

    // Matrixes
    // Matrix of view
    const ViewLoc = gl.getUniformLocation(prg, "MatrView");
    gl.uniformMatrix4fv(ViewLoc, false, new Float32Array(this.matrView.toArray()));

    // Matrix of projection
    const ProjLoc = gl.getUniformLocation(prg, "MatrProj");
    gl.uniformMatrix4fv(ProjLoc, false, new Float32Array(this.matrProj.toArray()));

    // Matrix of projection
    const VPLoc = gl.getUniformLocation(prg, "MatrVP");
    gl.uniformMatrix4fv(VPLoc, false, new Float32Array(this.matrVP.toArray()));

    // Matrix of projection
    const WorldLoc = gl.getUniformLocation(prg, "MatrWorld");
    gl.uniformMatrix4fv(WorldLoc, false, new Float32Array(mat4().rotateY(Math.sin(this.timer)).toArray()));
  }

  projSet()
  {
    this.rx = this.ry = this.projSize;

    /* Correct aspect ratio */
    if (this.frameW >= this.frameH)
      this.rx *= this.frameW / this.frameH;
    else
      this.ry *= this.frameH / this.frameW;

    this.matrProj =
      vec3().frustum(-this.rx / 2, this.rx / 2, -this.ry / 2, this.ry / 2,
        this.projDist, this.farClip);
    this.matrVP = this.matrView.mul(this.matrProj);
  } // End of 'projset' function

  render() {
    const gl = this.gl;
    gl.clearColor(0, 1, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    
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
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  } // End of 'render' function

  mainLoop() {
    const draw = () => {
      this.render();
      window.requestAnimationFrame(draw);
    };
    draw();
  } // End of 'mainLoop' function
}

window.addEventListener("load", () => {
  const rnd = new _render("glcanvas");
  rnd.mainLoop();
  //document.getElementById('rnd').render = rnd;
});