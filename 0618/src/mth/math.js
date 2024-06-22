export { vec3 } from './vec3.js';
export { vec2 } from './vec2.js';
export { mat4 } from './mat4.js';
export { camSet, camCreate, cam } from './cam.js'

export function getClearColor() {
    return [0, 1, 0, 1];
}

export function R2D(angle) {
    let newAngle = angle * Math.PI / 180;
    return newAngle;
  }
  
  export function D2R(angle) {
    let newAngle = angle * 180 / Math.PI;
    return newAngle;
  }
  