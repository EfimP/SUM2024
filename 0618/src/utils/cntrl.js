import { vec3, mat4, R2D } from '../mth/math';
import '../anim/anim';
import {  mouseX, mouseY, mouseMdx, mouseMdy, mouseClick, rmouseClick} from '../anim/input';

export function control(camera, timer) {
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && mouseClick) {
      let
        dist = camera.camAt.sub(camera.camLoc).len(),
        cosT = (camera.camLoc.y - camera.camAt.y) / dist,
        sinT = Math.sqrt(1 - cosT * cosT),
        plen = dist * sinT,
        cosP = (camera.camLoc.z - camera.camAt.z) / plen,
        sinP = (camera.camLoc.x - camera.camAt.x) / plen,
        azimuth = R2D(Math.atan2(sinP, cosP)),
        elevator = R2D(Math.atan2(sinT, cosT));
  
      azimuth += 5 *
        (-0.3 /** Ani->Keys[VK_LBUTTON]*/ * mouseMdx +
         timer.globalDeltaTime * 47/* (Ani->Keys[VK_RIGHT] - Ani->Keys[VK_LEFT])*/) / 1000;
   
      elevator += 5 *
        (-0.3 /* Ani->Keys[VK_LBUTTON]*/ * mouseMdy +
         timer.globalDeltaTime * 47/* (Ani->Keys[VK_DOWN] - Ani->Keys[VK_UP])*/) / 1000;
      
      /*   
      dist += (Ani->Mdz / 100 + 
        timer.globalDeltaTime * 8 * (1 + Ani->Keys[VK_SHIFT] * 29) * 
        (Ani->Keys[VK_NEXT] - Ani->Keys[VK_PRIOR]));
        */
  
      if (elevator > 178.8)
        elevator = 178.8;
      if (elevator < 0.08)
        elevator = 0.08;
      if (dist < 0.001)
        dist = 0.001;
  
      if (rmouseClick)
      {
        let
          Wp = camera.projSize,
          Hp = camera.projSize,
          sx, sy;
  
        if (camera.frameW > camera.frameH)
          Wp *= camera.frameW / camera.frameH;
        else
          Hp *= camera.frameH / camera.frameW;
  
        sx = rmouseClick * -mouseMdx * Wp / camera.frameW * dist / camera.projDist;
        sy = rmouseClick * mouseMdy * Hp / camera.frameH * dist / camera.projDist;
  
        let dv = camera.camRight.mul(sx).add(camera.camUp.mul(sy));
        camera.camAt = camera.camAt.add(dv);
        camera.camLoc = camera.camLoc.add(dv);
      }
  
      return camera.camSet(vec3(0,10, 0),//vec3(0, /*dist*/10, 0).pointtrans(mat4()/*.rotateX(elevator)*/
                            //                     .mul(mat4()/*.rotateY(azimuth)*/
                            //                      .mul(mat4()/*vec3().translate(camera.camAt)*/)))*/,
                    camera.camAt,
                    vec3(0, 1, 0));
    }
  })
  return camera;
};