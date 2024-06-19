import { vec3, mat4, R2D, camSet } from '../mth/math';
import '../anim/anim';
import {  mouseX, mouseY, mouseMdx, mouseMdy, mouseClick, rmouseClick} from '../anim/input';
import { keyboardCheck, ctrlKey, leftKey, rightKey, upKey, downKey } from '../anim/input';

class _dir {
  constructor(up, right, forward, pos) {
    this.up = up;
    this.right = right;
    this.forward = forward;
    this.pos = pos;
  }
}

let model = new _dir(vec3(0, 1, 0), vec3(-1, 0, 0), vec3(0, 0, 1), vec3(0));

export function control(timer) {
  let angleSpeed = 30;
  let rotateY = 0, rotateX = 0;

  if (ctrlKey) {
    if (rightKey) {
      rotateY = timer.globalDeltaTime * angleSpeed;

      model.forward = model.forward.mul(mat4().rotate(rotateY, model.up.normalize()));
      model.right = model.right.mul(mat4().rotate(rotateY, model.up.normalize()));
    }
    if (leftKey) {
      rotateY = -timer.globalDeltaTime * angleSpeed;

      model.forward = model.forward.mul(mat4().rotate(rotateY, model.up.normalize()));
      model.right = model.right.mul(mat4().rotate(rotateY, model.up.normalize()));
    }
    if (upKey) {
      rotateX = -timer.globalDeltaTime * angleSpeed;

      model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
      model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
    }
    if (downKey) {
      rotateX = timer.globalDeltaTime * angleSpeed;

      model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
      model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
    }

    return mat4().rotate(rotateX, model.right.normalize()).mul(mat4().rotate(rotateY, model.up.normalize()));
    //return camSet(camera, vec3(0, 2, -5), camera.camLoc.add(model.forward), model.up);
  }
  else 
    return null;
}