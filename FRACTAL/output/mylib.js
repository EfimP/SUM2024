(function (exports) {
  'use strict';

  let
    canvas,
    gl,
    timeLoc;    
   
  // OpenGL initialization function  
  function initGL() {
    canvas = document.getElementById("myCan");
    gl = canvas.getContext("webgl2");
    gl.clearColor(0.30, 0.47, 0.8, 1);
    
    // Shader creation
    let vs_txt =
    `#version 300 es
  precision highp float;
  in vec3 InPosition;
    
  out vec2 DrawPos;
  uniform float Time;
 
  void main( void )
  {
    vec2 p[4] = 
      vec2[4](vec2(-1.0, 1.0),
              vec2(-1.0, -1.0),
              vec2(1.0, 1.0),
              vec2(1.0, -1.0));
    vec2 t[4] = 
      vec2[4](vec2(-2.0, 2.0),
              vec2(-2.0, -2.0),
              vec2(2.0, 2.0),
              vec2(2.0, -2.0));
    gl_Position = vec4(p[gl_VertexID].xy, 0.0, 1.0);
    DrawPos.xy = t[gl_VertexID];
  }
  `;
    let fs_txt =
    `#version 300 es
  precision highp float;
  out vec4 OutColor;
  
  in vec2 DrawPos;
  uniform float Time;

  void main( void )
  {
    vec2 Z = DrawPos;
    vec2 C = vec2(0.35 + 0.05 * sin(2.0 * Time * 1.3), 0.35 + 0.05 * sin(2.0 * Time * 0.8));
    float n = 0.0;

    while (n < 250.0 && length(Z) < 2.0)
    {
      Z = vec2(Z.x * Z.x - Z.y * Z.y, 2.0 * Z.x * Z.y) + C;
      n++;
    }
    
    if (n < 2.0)
      OutColor = vec4(0.0);
    else if (n > 2.0 && n < 5.0)
      OutColor = vec4(n * 80.0, n / 30.0, n * (20.0 + 120.0 * abs(sin(Time + 3.0))), 0.5); 
    else
      OutColor = vec4(n * 40.0, n / 100.0, n * (20.0 + 5.0 * abs(sin(Time + 3.0))), 1.0); 
    //OutColor = vec4(n / 80.0, n / 60.0, n / (20.0 + 5.0 * abs(sin(Time + 3.0))), n / 255.0); 
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
   
    // Vertex buffer creation
    const size = 0.8;
    const vertexes = [-size, size, 0, -size, -size, 0, size, size, 0, size, -size, 0];
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
   
    // Uniform data
    timeLoc = gl.getUniformLocation(prg, "Time");
   
    gl.useProgram(prg);
  }  // End of 'initGL' function               
   
  // Load and compile shader function
  function loadShader(shaderType, shaderSource) {
    const shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      let buf = gl.getShaderInfoLog(shader);
      console.log('Shader compile fail: ' + buf);
    }                                            
    return shader;
  } // End of 'loadShader' function
   
  // Main render frame function
  function render() {
    // console.log(`Frame ${x++}`);
    gl.clear(gl.COLOR_BUFFER_BIT);
                                                 
    if (timeLoc != -1) {
      const date = new Date();
      let t = date.getMinutes() * 60 +
              date.getSeconds() +
              date.getMilliseconds() / 1000;
   
      gl.uniform1f(timeLoc, t);
    }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  } // End of 'render' function
   
  console.log("CGSG forever!!! mylib.js imported");

  exports.initGL = initGL;
  exports.render = render;

  return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIuanMiLCJzb3VyY2VzIjpbIi4uL215bGliLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldFxuICBjYW52YXMsXG4gIGdsLFxuICB0aW1lTG9jOyAgICBcbiBcbi8vIE9wZW5HTCBpbml0aWFsaXphdGlvbiBmdW5jdGlvbiAgXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdMKCkge1xuICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FuXCIpO1xuICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2wyXCIpO1xuICBnbC5jbGVhckNvbG9yKDAuMzAsIDAuNDcsIDAuOCwgMSk7XG4gIFxuICAvLyBTaGFkZXIgY3JlYXRpb25cbiAgbGV0IHZzX3R4dCA9XG4gIGAjdmVyc2lvbiAzMDAgZXNcbiAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuICBpbiB2ZWMzIEluUG9zaXRpb247XG4gICAgXG4gIG91dCB2ZWMyIERyYXdQb3M7XG4gIHVuaWZvcm0gZmxvYXQgVGltZTtcbiBcbiAgdm9pZCBtYWluKCB2b2lkIClcbiAge1xuICAgIHZlYzIgcFs0XSA9IFxuICAgICAgdmVjMls0XSh2ZWMyKC0xLjAsIDEuMCksXG4gICAgICAgICAgICAgIHZlYzIoLTEuMCwgLTEuMCksXG4gICAgICAgICAgICAgIHZlYzIoMS4wLCAxLjApLFxuICAgICAgICAgICAgICB2ZWMyKDEuMCwgLTEuMCkpO1xuICAgIHZlYzIgdFs0XSA9IFxuICAgICAgdmVjMls0XSh2ZWMyKC0yLjAsIDIuMCksXG4gICAgICAgICAgICAgIHZlYzIoLTIuMCwgLTIuMCksXG4gICAgICAgICAgICAgIHZlYzIoMi4wLCAyLjApLFxuICAgICAgICAgICAgICB2ZWMyKDIuMCwgLTIuMCkpO1xuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwW2dsX1ZlcnRleElEXS54eSwgMC4wLCAxLjApO1xuICAgIERyYXdQb3MueHkgPSB0W2dsX1ZlcnRleElEXTtcbiAgfVxuICBgO1xuICBsZXQgZnNfdHh0ID1cbiAgYCN2ZXJzaW9uIDMwMCBlc1xuICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4gIG91dCB2ZWM0IE91dENvbG9yO1xuICBcbiAgaW4gdmVjMiBEcmF3UG9zO1xuICB1bmlmb3JtIGZsb2F0IFRpbWU7XG5cbiAgdm9pZCBtYWluKCB2b2lkIClcbiAge1xuICAgIHZlYzIgWiA9IERyYXdQb3M7XG4gICAgdmVjMiBDID0gdmVjMigwLjM1ICsgMC4wNSAqIHNpbigyLjAgKiBUaW1lICogMS4zKSwgMC4zNSArIDAuMDUgKiBzaW4oMi4wICogVGltZSAqIDAuOCkpO1xuICAgIGZsb2F0IG4gPSAwLjA7XG5cbiAgICB3aGlsZSAobiA8IDI1MC4wICYmIGxlbmd0aChaKSA8IDIuMClcbiAgICB7XG4gICAgICBaID0gdmVjMihaLnggKiBaLnggLSBaLnkgKiBaLnksIDIuMCAqIFoueCAqIFoueSkgKyBDO1xuICAgICAgbisrO1xuICAgIH1cbiAgICBcbiAgICBpZiAobiA8IDIuMClcbiAgICAgIE91dENvbG9yID0gdmVjNCgwLjApO1xuICAgIGVsc2UgaWYgKG4gPiAyLjAgJiYgbiA8IDUuMClcbiAgICAgIE91dENvbG9yID0gdmVjNChuICogODAuMCwgbiAvIDMwLjAsIG4gKiAoMjAuMCArIDEyMC4wICogYWJzKHNpbihUaW1lICsgMy4wKSkpLCAwLjUpOyBcbiAgICBlbHNlXG4gICAgICBPdXRDb2xvciA9IHZlYzQobiAqIDQwLjAsIG4gLyAxMDAuMCwgbiAqICgyMC4wICsgNS4wICogYWJzKHNpbihUaW1lICsgMy4wKSkpLCAxLjApOyBcbiAgICAvL091dENvbG9yID0gdmVjNChuIC8gODAuMCwgbiAvIDYwLjAsIG4gLyAoMjAuMCArIDUuMCAqIGFicyhzaW4oVGltZSArIDMuMCkpKSwgbiAvIDI1NS4wKTsgXG4gIH1cbiAgYDtcbiAgbGV0XG4gICAgdnMgPSBsb2FkU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIsIHZzX3R4dCksXG4gICAgZnMgPSBsb2FkU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUiwgZnNfdHh0KSxcbiAgICBwcmcgPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gIGdsLmF0dGFjaFNoYWRlcihwcmcsIHZzKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHByZywgZnMpO1xuICBnbC5saW5rUHJvZ3JhbShwcmcpO1xuICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJnLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICBsZXQgYnVmID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJnKTtcbiAgICBjb25zb2xlLmxvZygnU2hhZGVyIHByb2dyYW0gbGluayBmYWlsOiAnICsgYnVmKTtcbiAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gXG4gIC8vIFZlcnRleCBidWZmZXIgY3JlYXRpb25cbiAgY29uc3Qgc2l6ZSA9IDAuODtcbiAgY29uc3QgdmVydGV4ZXMgPSBbLXNpemUsIHNpemUsIDAsIC1zaXplLCAtc2l6ZSwgMCwgc2l6ZSwgc2l6ZSwgMCwgc2l6ZSwgLXNpemUsIDBdO1xuICBjb25zdCBwb3NMb2MgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcmcsIFwiSW5Qb3NpdGlvblwiKTtcbiAgbGV0IHZlcnRleEFycmF5ID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKTtcbiAgZ2wuYmluZFZlcnRleEFycmF5KHZlcnRleEFycmF5KTtcbiAgbGV0IHZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4QnVmZmVyKTtcbiAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodmVydGV4ZXMpLCBnbC5TVEFUSUNfRFJBVyk7XG4gIGlmIChwb3NMb2MgIT0gLTEpIHtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc0xvYywgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NMb2MpO1xuICB9XG4gXG4gIC8vIFVuaWZvcm0gZGF0YVxuICB0aW1lTG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJUaW1lXCIpO1xuIFxuICBnbC51c2VQcm9ncmFtKHByZyk7XG59ICAvLyBFbmQgb2YgJ2luaXRHTCcgZnVuY3Rpb24gICAgICAgICAgICAgICBcbiBcbi8vIExvYWQgYW5kIGNvbXBpbGUgc2hhZGVyIGZ1bmN0aW9uXG5mdW5jdGlvbiBsb2FkU2hhZGVyKHNoYWRlclR5cGUsIHNoYWRlclNvdXJjZSkge1xuICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSk7XG4gIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG4gIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcbiAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICBsZXQgYnVmID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuICAgIGNvbnNvbGUubG9nKCdTaGFkZXIgY29tcGlsZSBmYWlsOiAnICsgYnVmKTtcbiAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJldHVybiBzaGFkZXI7XG59IC8vIEVuZCBvZiAnbG9hZFNoYWRlcicgZnVuY3Rpb25cbiAgXG5sZXQgeCA9IDE7ICAgICAgICAgICAgICAgICAgICBcbiBcbi8vIE1haW4gcmVuZGVyIGZyYW1lIGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAvLyBjb25zb2xlLmxvZyhgRnJhbWUgJHt4Kyt9YCk7XG4gIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgaWYgKHRpbWVMb2MgIT0gLTEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdCA9IGRhdGUuZ2V0TWludXRlcygpICogNjAgK1xuICAgICAgICAgICAgZGF0ZS5nZXRTZWNvbmRzKCkgK1xuICAgICAgICAgICAgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMDA7XG4gXG4gICAgZ2wudW5pZm9ybTFmKHRpbWVMb2MsIHQpO1xuICB9XG4gIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xufSAvLyBFbmQgb2YgJ3JlbmRlcicgZnVuY3Rpb25cbiBcbmNvbnNvbGUubG9nKFwiQ0dTRyBmb3JldmVyISEhIG15bGliLmpzIGltcG9ydGVkXCIpOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7RUFBQTtFQUNBLEVBQUUsTUFBTTtFQUNSLEVBQUUsRUFBRTtFQUNKLEVBQUUsT0FBTyxDQUFDO0VBQ1Y7RUFDQTtFQUNPLFNBQVMsTUFBTSxHQUFHO0VBQ3pCLEVBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDNUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUNuQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDcEM7RUFDQTtFQUNBLEVBQUUsSUFBSSxNQUFNO0VBQ1osRUFBRSxDQUFDO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxDQUFDLENBQUM7RUFDSixFQUFFLElBQUksTUFBTTtFQUNaLEVBQUUsQ0FBQztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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