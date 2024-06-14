import { vec3, mat4 } from "../mth/math.js";

class Camera {
    constructor (canvas) {
        let rect = canvas.getBoundingClientRect();
        this.frameH = rect.bottom - rect.top + 1;
        this.frameW = rect.right - rect.left + 1;
        this.projDist = 0.1;
        this.projSize = 0.1;
        this.farClip = 300;
        this.matrView = vec3().view(vec3(2.5), vec3(0), vec3(0, 1, 0));
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
}

export function camSet (canvas) {
    return new Camera(canvas);
}