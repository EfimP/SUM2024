import { vec3 } from './vec3.js';
import { mat4 } from './mat4.js';

export let cam = 0;

class camera {
    constructor (canvas) {
        let rect = canvas.getBoundingClientRect();
        this.frameH = rect.bottom - rect.top + 1;
        this.frameW = rect.right - rect.left + 1;
        this.projDist = 0.1;
        this.projSize = 0.1;
        this.farClip = 10000;
        this.matrView = vec3().view(vec3(), vec3(), vec3());
        this.loc = vec3();
        this.at = vec3();
        this.up = vec3();
        this.projSet();
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

    set(loc, at, up) {
        this.matrView = vec3().view(loc, at, up);

        this.right = vec3(this.matrView.m[0][0],
                                this.matrView.m[1][0],
                                this.matrView.m[2][0]);
        this.up = vec3(this.matrView.m[0][1],
                                this.matrView.m[1][1],
                                this.matrView.m[2][1]);
        this.dir = vec3(-this.matrView.m[0][2],
                                -this.matrView.m[1][2],
                                -this.matrView.m[2][2]);
        this.loc = loc;
        this.at = at;

        this.matrVP = this.matrView.mul(this.matrProj);
    } // End of 'EP4_RndCamSet' function
}

export function camCreate (canvas) {
    cam = new camera(canvas);
}

export function camSet (loc, at, up) {
    cam.set(loc, at, up);
}