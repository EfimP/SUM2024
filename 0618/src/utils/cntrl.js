import {cam, camSet, mat4, vec3} from "../mth/math.js";
export let matrTrans = mat4(), vecTrans = vec3();
 
const D2R = degrees => degrees * Math.PI / 180;
const R2D = radians => radians * 180 / Math.PI;
 
function distance(p1, p2) {
  return Math.sqrt(Math.pow(p1.clientX - p2.clientX, 2) + Math.pow(p1.clientY - p2.clientY, 2));
}

class _dir {
  constructor(up, right, forward, pos) {
    this.up = up;
    this.right = right;
    this.forward = forward;
    this.pos = pos;
  }
}

let model = new _dir(vec3(0, 1, 0), vec3(-1, 0, 0), vec3(0, 0, 1), vec3(0));
let allTranslate = mat4();
let speed = 0;
let step = 0;
let newSpeed = 0;
let inertSpeed = 250;

export class input {
  constructor(rnd) {
    //gl.canvas.addEventListener('click', (e) => this.onClick(e));
    rnd.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    rnd.canvas.addEventListener('mousewheel', (e) => this.onMouseWheel(e));
    rnd.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    rnd.canvas.addEventListener('mouseup', (e) => this.onMouseUp(e));
    rnd.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    if ('ontouchstart' in document.documentElement) {
      rnd.canvas.addEventListener('touchstart', (e) => this.onTouchStart(e));
      rnd.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e));
      rnd.canvas.addEventListener('touchend', (e) => this.onTouchEnd(e));
    }
    
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    window.addEventListener('keyup', (e) => this.onKeyUp(e));
    
    this.mX = 0;
    this.mY = 0;
    this.mZ = 0;
    this.mDx = 0;
    this.mDy = 0;
    this.mDz = 0;
    this.mButtons = [0, 0, 0, 0, 0];
    this.mButtonsOld = [0, 0, 0, 0, 0];
    this.mButtonsClick = [0, 0, 0, 0, 0];
    
    // Zoom specific
    this.scaling = false;
    this.dist = 0;
    this.scale_factor = 1.0;
    this.curr_scale = 1.0;
    this.max_zoom = 8.0;
    this.min_zoom = 0.5;
    
    
    this.keys = [];
    this.keysOld = [];
    this.keysClick = [];
    [
      "Enter", "Backspace",
      "Delete", "Space", "Tab", "Escape", "ArrowLeft", "ArrowUp", "ArrowRight",
      "ArrowDown", "Shift", "Control", "Alt", "ShiftLeft", "ShiftRight", "ControlLeft",
      "ControlRight", "PageUp", "PageDown", "End", "Home",
      "Digit0", "Digit1",
      "KeyA",
      "Numpad0", "NumpadMultiply",
      "F1",
    ].forEach(key => {
      this.keys[key] = 0;
      this.keysOld[key] = 0;
      this.keysClick[key] = 0;
    });
 
    this.shiftKey = false;
    this.altKey = false;
    this.ctrlKey = false;
 
    this.isFirst = true;
  } // End of 'constructor' function
 
  /// Mouse handle functions
 
  onClick(e) {
  } // End of 'onClick' function
  
  onTouchStart(e) {
    if (e.touches.length == 1)
      this.mButtons[0] = 1;
    else if (e.touches.length == 2) {
      this.mButtons[0] = 0;
      this.mButtons[2] = 1;
    }
    else {
      this.mButtons[0] = 0;
      this.mButtons[2] = 0;
      this.mButtons[1] = 1;
    }
    let
      //x = e.touches[0].clientX - e.target.offsetLeft,
      //y = e.touches[0].clientY - e.target.offsetTop;
      x = e.targetTouches[0].pageX - e.target.offsetLeft,
      y = e.targetTouches[0].pageY - e.target.offsetTop;
    this.mDx = 0;
    this.mDy = 0;
    this.mDz = 0;
    this.mX = x;
    this.mY = y;
 
    let tt = e.targetTouches;
    if (tt.length >= 2) {
      this.dist = distance(tt[0], tt[1]);
      this.scaling = true;
    } else {                    
      this.scaling = false;
    }
    //vg.log(`Zoom start: issc:${this.scaling}`);
  } // End of 'onTouchStart' function
 
  onTouchMove(e) {
    e.preventDefault();
 
    let
      //x = e.touches[0].clientX - e.target.offsetLeft,
      //y = e.touches[0].clientY - e.target.offsetTop;
      x = e.targetTouches[0].pageX - e.target.offsetLeft,
      y = e.targetTouches[0].pageY - e.target.offsetTop;
 
    //vg.log(`Move: x:${x} y:${y}`);
 
    //vg.log(`Zoom move: issc:${this.scaling}`);
    let tt = e.targetTouches;
    //vg.log(`0:${tt[0].clientX}, 1:${tt[1].clientX}`);
    if (this.scaling) {                                             
      this.mDz = 0;
      this.curr_scale = (distance(tt[0], tt[1]) / this.dist) * this.scale_factor;
 
      //vg.log(`Zoom move: sc:${this.curr_scale} (mZ: ${this.mZ}), ${distance(tt[0], tt[1])}/${this.dist}`);
      //if (this.curr_scale > 1.3)
      //  this.mDz = 1;
      //else if (this.curr_scale < 0.8)
      //  this.mDz = -1;
      let d = distance(tt[0], tt[1]);
      if (Math.abs(d - this.dist) > 0) {//47) {
        if (d < this.dist)
          this.mDz = 1 * (d / this.dist), this.dist = d;
        else if (d > this.dist)
          this.mDz = -1 * (this.dist / d), this.dist = d;
        this.mZ += this.mDz;
 
        this.mDx = x - this.mX;
        this.mDy = y - this.mY;
        this.mX = x;
        this.mY = y;
        return;
      }
    }
 
    if (this.mButtons[1] == 1) {
      this.mDx = 0;
      this.mDy = 0;
      this.mDz = y - this.mZ;
      this.mX = x;
      this.mY = y;
      this.mZ += this.mDz;
    } else {
      this.mDx = x - this.mX;
      this.mDy = y - this.mY;
      this.mDz = 0;
      this.mX = x;
      this.mY = y;
    }  
  } // End of 'onTouchMove' function
 
  onTouchEnd(e) {
    this.mButtons[0] = 0;
    this.mButtons[1] = 0;
    this.mButtons[2] = 0;
    let
      //x = e.touches[0].clientX - e.target.offsetLeft,
      //y = e.touches[0].clientY - e.target.offsetTop;
      x = e.targetTouches[0].pageX - e.target.offsetLeft,
      y = e.targetTouches[0].pageY - e.target.offsetTop;
    this.mDx = 0;
    this.mDy = 0;
    this.mDz = 0;
    this.mX = x;
    this.mY = y;
 
    let tt = e.targetTouches;
    if (tt.length < 2) {
      this.scaling = false;
      if (this.curr_scale < this.min_zoom) {
        this.scale_factor = this.min_zoom;
      } else {
        if (this.curr_scale > this.max_zoom) {
          this.scale_factor = this.max_zoom; 
        } else {
          this.scale_factor = this.curr_scale;
        }
      }
    } else {
      this.scaling = true;
    }
    //vg.log(`Zoom end: issc:${this.scaling} (mZ: ${this.mZ})`);
  } // End of 'onTouchMove' function
 
  onMouseMove(e) {
    let
      dx = e.movementX,
      dy = e.movementY;
    this.mDx = dx;
    this.mDy = dy;
    this.mDz = 0;
    this.mX += dx;
    this.mY += dy;
  } // End of 'onMouseMove' function
 
  onMouseWheel(e) {
    if (e.wheelDelta != 0)
      e.preventDefault();
    this.mZ += (this.mDz = e.wheelDelta / 120);
  } // End of 'onMouseWheel' function
 
  onMouseDown(e) {
    e.preventDefault();
    this.mDx = 0;
    this.mDy = 0;
    this.mDz = 0;
 
    this.mButtonsOld[e.button] = this.mButtons[e.button];
    this.mButtons[e.button] = 1;
    this.mButtonsClick[e.button] = !this.mButtonsOld[e.button] && this.mButtons[e.button];
    
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.ctrlKey = e.ctrlKey;
  } // End of 'onMouseMove' function
  
  onMouseUp(e) {
    e.preventDefault();
    this.mDx = 0;
    this.mDy = 0;
    this.mDz = 0;
 
    this.mButtonsOld[e.button] = this.mButtons[e.button];
    this.mButtons[e.button] = 0;
    this.mButtonsClick[e.button] = 0;
 
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.ctrlKey = e.ctrlKey;
  } // End of 'onMouseMove' function
 
  /// Keyboard handle
  onKeyDown(e) {
    if (e.target.tagName.toLowerCase() == 'textarea')
      return;
    let focused_element = null;
    if (document.hasFocus() &&
        document.activeElement !== document.body &&
        document.activeElement !== document.documentElement) {
      focused_element = document.activeElement;
      if (focused_element.tagName.toLowerCase() == 'textarea')
        return;
    }      
    if (e.code != "F12" && e.code != "F11" && e.code != "KeyR")
      e.preventDefault();
    this.keysOld[e.code] = this.keys[e.code];
    this.keys[e.code] = 1;
    this.keysClick[e.code] = !this.keysOld[e.code] && this.keys[e.code];
    
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.ctrlKey = e.ctrlKey;
  } // End of 'onKeyDown' function
  
  onKeyUp(e) {
    if (e.target.tagName.toLowerCase() == 'textarea')
      return;
    let focused_element = null;
    if (document.hasFocus() &&
        document.activeElement !== document.body &&
        document.activeElement !== document.documentElement) {
      focused_element = document.activeElement;
      if (focused_element.tagName.toLowerCase() == 'textarea')
        return;
    }      
    if (e.code != "F12" && e.code != "F11" && e.code != "KeyR")
      e.preventDefault();
    this.keysOld[e.code] = this.keys[e.code];
    this.keys[e.code] = 0;
    this.keysClick[e.code] = 0;
 
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.ctrlKey = e.ctrlKey;
  } // End of 'onKeyUp' function
  
  /// Camera movement handling
  reset() {
    //vg.log(`MsDz: ${this.mDz}`);
    this.mDx = 0;
    this.mDy = 0;
    this.mDz = 0;
    this.mButtonsClick.forEach(k => this.mButtonsClick[k] = 0);
    this.keysClick.forEach(k => this.keysClick[k] = 0);
 
    this.shiftKey = this.keys["ShiftLeft"] || this.keys["ShiftRight"];
    this.altKey = this.keys["AltLeft"] || this.keys["AltRight"];
    this.ctrlKey = this.keys["ControlLeft"] || this.keys["ControlRight"];
  } // End of reset' function
    
  responseCamera(timer) {
    if (this.shiftKey && this.keysClick["KeyF"]) {
      camSet(vec3(5), vec3(0), vec3(0, 1, 0));
      return;
    }
    let matr = mat4();
    let angleSpeed = 70;
    let rotateY = 0, rotateX = 0;
    let /*speed = 15,*/ dist = 0;
    let prevPos = model.pos;
    const inertConst = 1;
 
    if (!this.keys["Numpad1"]) {
      // Playing mod
      cam.loc = cam.loc.add(model.forward);

      const input = document.querySelector("#sp_input");
      input.addEventListener("input", (event) => {
        newSpeed = event.target.value;
        step = (newSpeed - speed) / 500;
      });

      if ((speed < newSpeed && step > 0) || (speed > newSpeed && step < 0))
        speed += step;

      // Changing position
      dist = timer.globalDeltaTime * speed;

      camSet(cam.loc.add(model.forward.mul(dist)), cam.loc.add(model.forward), model.up);
      matr = matr.mul(mat4().translate(model.forward.mul(dist)));
      model.pos = model.pos.mul(mat4().translate(model.forward.mul(dist)));
      allTranslate = allTranslate.mul(mat4().translate(model.forward.mul(dist)));


      //Rotation
      if (!(this.keys["KeyD"] && this.keys["KeyA"]))
        if (this.keys["KeyD"]) {
          rotateY = timer.globalDeltaTime * angleSpeed;
    
          model.forward = model.forward.mul(mat4().rotate(rotateY, model.up.normalize()));
          model.right = model.right.mul(mat4().rotate(rotateY, model.up.normalize()));
        }
        else if (this.keys["KeyA"]) {
          rotateY = -timer.globalDeltaTime * angleSpeed;
    
          model.forward = model.forward.mul(mat4().rotate(rotateY, model.up.normalize()));
          model.right = model.right.mul(mat4().rotate(rotateY, model.up.normalize()));
        }
      if (!(this.keys["KeyW"] && this.keys["KeyS"]))
        if (this.keys["KeyW"] && model.pos.y > 0) {
          rotateX = timer.globalDeltaTime * angleSpeed;
    
          model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
          model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
        }
        else if (this.keys["KeyS"]) {
          rotateX = -timer.globalDeltaTime * angleSpeed;
    
          model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
          model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
        }


      // Checking position to not to be under ground  
      if (model.pos.y < 0 && model.forward.y < 0)
        model.forward = vec3(model.forward.x, 0, model.forward.z), model.pos.y = 0;

      // Planning of plane
      if (model.pos.y > 0 && speed <= 250) {
        if (model.forward.y < 0) {
          let dir = model.forward.mul(0.9).add(model.up.neg().mul(0.1));

          // Changing position
          dist = timer.globalDeltaTime * inertSpeed;

          camSet(cam.loc.add(dir.mul(dist)), cam.loc.add(model.forward), model.up);
          matr = matr.mul(mat4().translate(dir.mul(dist)));
          model.pos = model.pos.mul(mat4().translate(dir.mul(dist)));
          allTranslate = allTranslate.mul(mat4().translate(dir.mul(dist)));
        }
        /*
        else {
          let dir = model.forward.mul(0.1).add(model.up.neg().mul(0.9));

          // Changing position
          dist = timer.globalDeltaTime * inertSpeed;

          camSet(cam.loc.add(dir.mul(dist)), cam.loc.add(model.forward), model.up);
          matr = matr.mul(mat4().translate(dir.mul(dist)));
          model.pos = model.pos.mul(mat4().translate(dir.mul(dist)));
          allTranslate = allTranslate.mul(mat4().translate(dir.mul(dist)));
        }
          */
      }
      let newPos = model.pos;

      vecTrans = vecTrans.sub(vec3(prevPos.x, 0, prevPos.z).sub(vec3(newPos.x, 0, newPos.z)).mul(0.001));
      matrTrans = matrTrans.mul(mat4().translate(vec3(newPos.x, 0, newPos.z).sub(vec3(prevPos.x, 0, prevPos.z))));

      camSet(model.pos.sub(model.forward.mul(9)).add(model.up.mul(10)), model.pos.add(model.forward.mul(8)), model.up);
      return matr.mul(allTranslate.inverse()).mul(mat4().rotate(rotateX, model.right.normalize()).mul(mat4().rotate(rotateY, model.up.normalize()))).mul(allTranslate);
    }
    else {
      // God mod
      cam.loc = cam.loc.add(model.forward);
      if (this.keys["Numpad8"]) {
        dist = timer.globalDeltaTime * speed * (this.keys["Numpad9"] == true ? 8 : 1);

        camSet(cam.loc.add(model.forward.mul(dist)), cam.loc.add(model.forward), model.up);
        matr = matr.mul(mat4().translate(model.forward.mul(dist)));
        model.pos = model.pos.mul(mat4().translate(model.forward.mul(dist)));
        allTranslate = allTranslate.mul(mat4().translate(model.forward.mul(dist)));
      }
      if (this.keys["Numpad4"]) {
        dist = timer.globalDeltaTime * speed * (this.keys["Numpad9"] == true ? 8 : 1);

        camSet(cam.loc.sub(model.forward.mul(dist)), cam.loc.add(model.forward), model.up);
        matr = matr.mul(mat4().translate(model.forward.mul(dist).neg()));
        model.pos = model.pos.mul(mat4().translate(model.forward.mul(dist).neg()));
        allTranslate = allTranslate.mul(mat4().translate(model.forward.mul(dist).neg()));
      }
      let newPos = model.pos;
      if (!(this.keys["KeyD"] && this.keys["KeyA"]))
        if (this.keys["KeyD"]) {
          rotateY = timer.globalDeltaTime * angleSpeed;
    
          model.forward = model.forward.mul(mat4().rotate(rotateY, model.up.normalize()));
          model.right = model.right.mul(mat4().rotate(rotateY, model.up.normalize()));
        }
        else if (this.keys["KeyA"]) {
          rotateY = -timer.globalDeltaTime * angleSpeed;
    
          model.forward = model.forward.mul(mat4().rotate(rotateY, model.up.normalize()));
          model.right = model.right.mul(mat4().rotate(rotateY, model.up.normalize()));
        }
      if (!(this.keys["KeyW"] && this.keys["KeyS"]))
        if (this.keys["KeyW"]) {
          rotateX = timer.globalDeltaTime * angleSpeed;
    
          model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
          model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
        }
        else if (this.keys["KeyS"]) {
          rotateX = -timer.globalDeltaTime * angleSpeed;
    
          model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
          model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
        }

      vecTrans = vecTrans.sub(vec3(prevPos.x, 0, prevPos.z).sub(vec3(newPos.x, 0, newPos.z)).mul(0.001));
      matrTrans = matrTrans.mul(mat4().translate(vec3(newPos.x, 0, newPos.z).sub(vec3(prevPos.x, 0, prevPos.z))));

      camSet(model.pos.sub(model.forward.mul(6)).add(model.up.mul(8)), model.pos.add(model.forward.mul(8)), model.up);
      return matr.mul(allTranslate.inverse()).mul(mat4().rotate(rotateX, model.right.normalize()).mul(mat4().rotate(rotateY, model.up.normalize()))).mul(allTranslate);
    }
  } // End of 'responseCamera' function
} // End of 'input' class