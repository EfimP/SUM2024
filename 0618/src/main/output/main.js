(function () {
    'use strict';

    class _mat4{
        constructor(A00, A01, A02, A03,
                    A10, A11, A12, A13,
                    A20, A21, A22, A23,
                    A30, A31, A32, A33) {
            let m = [[A00, A01, A02, A03],
                     [A10, A11, A12, A13],
                     [A20, A21, A22, A23],
                     [A30, A31, A32, A33]];
            if (m[0][0] == undefined || m[0][1] == undefined || m[0][2] == undefined || m[0][3] == undefined ||
                m[1][0] == undefined || m[1][1] == undefined || m[1][2] == undefined || m[1][3] == undefined ||
                m[2][0] == undefined || m[2][1] == undefined || m[2][2] == undefined || m[2][3] == undefined ||
                m[3][0] == undefined || m[3][1] == undefined || m[3][2] == undefined || m[3][3] == undefined)
                this.m = [[1, 0, 0, 0],
                          [0, 1, 0, 0],
                          [0, 0, 1, 0],
                          [0, 0, 0, 1]];
            else
                this.m = [[A00, A01, A02, A03],
                          [A10, A11, A12, A13],
                          [A20, A21, A22, A23],
                          [A30, A31, A32, A33]];
        } // End of 'constructor' function
            
        mul(m) {
            let r = mat4();

            r.m[0][0] = this.m[0][0] * m.m[0][0] + this.m[0][1] * m.m[1][0] + this.m[0][2] * m.m[2][0] +
                this.m[0][3] * m.m[3][0];
            
            r.m[0][1] = this.m[0][0] * m.m[0][1] + this.m[0][1] * m.m[1][1] + this.m[0][2] * m.m[2][1] +
                this.m[0][3] * m.m[3][1];
            
            r.m[0][2] = this.m[0][0] * m.m[0][2] + this.m[0][1] * m.m[1][2] + this.m[0][2] * m.m[2][2] +
                this.m[0][3] * m.m[3][2];
            
            r.m[0][3] = this.m[0][0] * m.m[0][3] + this.m[0][1] * m.m[1][3] + this.m[0][2] * m.m[2][3] +
                this.m[0][3] * m.m[3][3];
            
            
            r.m[1][0] = this.m[1][0] * m.m[0][0] + this.m[1][1] * m.m[1][0] + this.m[1][2] * m.m[2][0] +
                this.m[1][3] * m.m[3][0];
            
            r.m[1][1] = this.m[1][0] * m.m[0][1] + this.m[1][1] * m.m[1][1] + this.m[1][2] * m.m[2][1] +
                this.m[1][3] * m.m[3][1];
            
            r.m[1][2] = this.m[1][0] * m.m[0][2] + this.m[1][1] * m.m[1][2] + this.m[1][2] * m.m[2][2] +
                this.m[1][3] * m.m[3][2];
            
            r.m[1][3] = this.m[1][0] * m.m[0][3] + this.m[1][1] * m.m[1][3] + this.m[1][2] * m.m[2][3] +
                this.m[1][3] * m.m[3][3];
            
            
            r.m[2][0] = this.m[2][0] * m.m[0][0] + this.m[2][1] * m.m[1][0] + this.m[2][2] * m.m[2][0] +
                this.m[2][3] * m.m[3][0];
            
            r.m[2][1] = this.m[2][0] * m.m[0][1] + this.m[2][1] * m.m[1][1] + this.m[2][2] * m.m[2][1] +
                this.m[2][3] * m.m[3][1];
            
            r.m[2][2] = this.m[2][0] * m.m[0][2] + this.m[2][1] * m.m[1][2] + this.m[2][2] * m.m[2][2] +
                this.m[2][3] * m.m[3][2];
            
            r.m[2][3] = this.m[2][0] * m.m[0][3] + this.m[2][1] * m.m[1][3] + this.m[2][2] * m.m[2][3] +
                this.m[2][3] * m.m[3][3];
            
            
            r.m[3][0] = this.m[3][0] * m.m[0][0] + this.m[3][1] * m.m[1][0] + this.m[3][2] * m.m[2][0] +
                this.m[3][3] * m.m[3][0];
            
            r.m[3][1] = this.m[3][0] * m.m[0][1] + this.m[3][1] * m.m[1][1] + this.m[3][2] * m.m[2][1] +
                this.m[3][3] * m.m[3][1];
            
            r.m[3][2] = this.m[3][0] * m.m[0][2] + this.m[3][1] * m.m[1][2] + this.m[3][2] * m.m[2][2] +
                this.m[3][3] * m.m[3][2];
            
            r.m[3][3] = this.m[3][0] * m.m[0][3] + this.m[3][1] * m.m[1][3] + this.m[3][2] * m.m[2][3] +
                this.m[3][3] * m.m[3][3];

            return r;            
        } // End of 'mul' function

        determ3x3(A11, A12, A13,
                  A21, A22, A23,
                  A31, A32, A33 ) {
            return A11 * A22 * A33 + A12 * A23 * A31 + A13 * A21 * A32 -
                   A11 * A23 * A32 - A12 * A21 * A33 - A13 * A22 * A31;

        } // End of 'determ3x3' function

        determ() {
            let n =
                +this.m[0][0] * this.determ3x3(this.m[1][1], this.m[1][2], this.m[1][3],
                                                 this.m[2][1], this.m[2][2], this.m[2][3],
                                                 this.m[3][1], this.m[3][2], this.m[3][3]) +
                -this.m[0][1] * this.determ3x3(this.m[1][0], this.m[1][2], this.m[1][3],
                                                 this.m[2][0], this.m[2][2], this.m[2][3],
                                                 this.m[3][0], this.m[3][2], this.m[3][3]) +
                +this.m[0][2] * this.determ3x3(this.m[1][0], this.m[1][1], this.m[1][3],
                                                 this.m[2][0], this.m[2][1], this.m[2][3],
                                                 this.m[3][0], this.m[3][1], this.m[3][3]) +
                -this.m[0][3] * this.determ3x3(this.m[1][0], this.m[1][1], this.m[1][2],
                                                 this.m[2][0], this.m[2][1], this.m[2][2],
                                                 this.m[3][0], this.m[3][1], this.m[3][2]);
            return n;
        } // End of 'determ' function

        inverse() {
            let r = mat4();
            let det = this.determ();

            if (det == 0)
                return mat4();

            /* build adjoint matrix */
            r.m[0][0] =
                +this.determ3x3(this.m[1][1], this.m[1][2], this.m[1][3],
                                  this.m[2][1], this.m[2][2], this.m[2][3],
                                  this.m[3][1], this.m[3][2], this.m[3][3]) / det;

            r.m[1][0] =
                -this.determ3x3(this.m[1][0], this.m[1][2], this.m[1][3],
                                  this.m[2][0], this.m[2][2], this.m[2][3],
                                  this.m[3][0], this.m[3][2], this.m[3][3]) / det;

            r.m[2][0] =
                +this.determ3x3(this.m[1][0], this.m[1][1], this.m[1][3],
                                  this.m[2][0], this.m[2][1], this.m[2][3],
                                  this.m[3][0], this.m[3][1], this.m[3][3]) / det;

            r.m[3][0] =
                -this.determ3x3(this.m[1][0], this.m[1][1], this.m[1][2],
                                  this.m[2][0], this.m[2][1], this.m[2][2],
                                  this.m[3][0], this.m[3][1], this.m[3][2]) / det;

            r.m[0][1] =
                -this.determ3x3(this.m[0][1], this.m[0][2], this.m[0][3],
                                  this.m[2][1], this.m[2][2], this.m[2][3],
                                  this.m[3][1], this.m[3][2], this.m[3][3]) / det;

            r.m[1][1] =
                +this.determ3x3(this.m[0][0], this.m[0][2], this.m[0][3],
                                  this.m[2][0], this.m[2][2], this.m[2][3],
                                  this.m[3][0], this.m[3][2], this.m[3][3]) / det;

            r.m[2][1] =
                -this.determ3x3(this.m[0][0], this.m[0][1], this.m[0][3],
                                  this.m[2][0], this.m[2][1], this.m[2][3],
                                  this.m[3][0], this.m[3][1], this.m[3][3]) / det;

            r.m[3][1] =
                +this.determ3x3(this.m[0][0], this.m[0][1], this.m[0][2],
                                  this.m[2][0], this.m[2][1], this.m[2][2],
                                  this.m[3][0], this.m[3][1], this.m[3][2]) / det;


            r.m[0][2] =
                +this.determ3x3(this.m[0][1], this.m[0][2], this.m[0][3],
                                  this.m[1][1], this.m[1][2], this.m[1][3],
                                  this.m[3][1], this.m[3][2], this.m[3][3]) / det;

            r.m[1][2] =
                -this.determ3x3(this.m[0][0], this.m[0][2], this.m[0][3],
                                  this.m[1][0], this.m[1][2], this.m[1][3],
                                  this.m[3][0], this.m[3][2], this.m[3][3]) / det;

            r.m[2][2] =
                +this.determ3x3(this.m[0][0], this.m[0][1], this.m[0][3],
                                  this.m[1][0], this.m[1][1], this.m[1][3],
                                  this.m[3][0], this.m[3][1], this.m[3][3]) / det;

            r.m[3][2] =
                -this.determ3x3(this.m[0][0], this.m[0][1], this.m[0][2],
                                  this.m[1][0], this.m[1][1], this.m[1][2],
                                  this.m[3][0], this.m[3][1], this.m[3][2]) / det;


            r.m[0][3] =
                -this.determ3x3(this.m[0][1], this.m[0][2], this.m[0][3],
                                  this.m[1][1], this.m[1][2], this.m[1][3],
                                  this.m[2][1], this.m[2][2], this.m[2][3]) / det;

            r.m[1][3] =
                +this.determ3x3(this.m[0][0], this.m[0][2], this.m[0][3],
                                  this.m[1][0], this.m[1][2], this.m[1][3],
                                  this.m[2][0], this.m[2][2], this.m[2][3]) / det;

            r.m[2][3] =
                -this.determ3x3(this.m[0][0], this.m[0][1], this.m[0][3],
                                  this.m[1][0], this.m[1][1], this.m[1][3],
                                  this.m[2][0], this.m[2][1], this.m[2][3]) / det;

            r.m[3][3] =
                +this.determ3x3(this.m[0][0], this.m[0][1], this.m[0][2],
                                  this.m[1][0], this.m[1][1], this.m[1][2],
                                  this.m[2][0], this.m[2][1], this.m[2][2]) / det;

            return r;
        } // End of 'inverse' function    

        rotate(angle, v) {
            let a = angle * Math.PI / 180.0,
                s = Math.sin(a),
                c = Math.cos(a);

            return mat4(c + v.x * v.x * (1 - c), v.y * v.x * (1 - c) - v.z * s, v.z * v.x * (1 - c) + v.y * s, 0,
                        v.x * v.y * (1 - c) + v.z * s, c + v.y * v.y * (1 - c), v.z * v.y * (1 - c) - v.x * s, 0,
                        v.x * v.z * (1 - c) - v.y * s, v.y * v.z * (1 - c) + v.x * s, c + v.z * v.z * (1 - c), 0,
                        0, 0, 0, 1);
        } // End of 'rotate' function

        rotateX(angle) {
            let a = angle * Math.PI / 180.0,
                s = Math.sin(a),
                c = Math.cos(a);

            return mat4(1, 0, 0, 0,
                        0, c, s, 0,
                        0, -s, c, 0,
                        0, 0, 0, 1);
        } // End of 'rotateX' function

        rotateY(angle) {
            let a = angle * Math.PI / 180.0,
                s = Math.sin(a),
                c = Math.cos(a);

            return mat4(c, 0, -s, 0,
                        0, 1, 0, 0,
                        s, 0, c, 0,
                        0, 0, 0, 1);
        } // End of 'rotateY' function

        rotateZ(angle) {
            let a = angle * Math.PI / 180.0,
                s = Math.sin(a),
                c = Math.cos(a);

            return mat4(c, s, 0, 0,
                        -s, c, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1);
        } // End of 'rotateZ' function
        
        transformPoint(v) {
            return vec3(v.x * this.m[0][0] + v.y * this.m[1][0] + v.z * this.m[2][0] + this.m[3][0],
                        v.x * this.m[0][1] + v.y * this.m[1][1] + v.z * this.m[2][1] + this.m[3][1],
                        v.x * this.m[0][2] + v.y * this.m[1][2] + v.z * this.m[2][2] + this.m[3][2]);
        } // End of 'pointtrans' function

        translate(v) {
            if (typeof v == 'object')
                return mat4(1, 0, 0, 0,
                            0, 1, 0, 0,
                            0, 0, 1, 0,
                            v.x, v.y, v.z, 1);
            else if (typeof v == 'number')
                return mat4(1, 0, 0, 0,
                             0, 1, 0, 0,
                             0, 0, 1, 0,
                             v, v, v, 1); 
        } // End of 'translate' function    

        scale(v) {
            return mat4(v.x, 0, 0, 0,
                         0, v.y, 0, 0,
                         0, 0, v.z, 0,
                         0, 0, 0, 1);

        } // End of 'scale' function

        toArray() {
            return [].concat(...this.m);
        } // End of 'toArray' function

    } // End of '_mat4' class

    function mat4(...args) {
        return new _mat4(...args);
    } // End of 'mat4' function

    class _vec3 {
        constructor(x, y, z) {
            if (x == undefined)
                this.x = 0, this.y = 0, this.z = 0;
            else if (typeof x == 'object')
                if (x.length == 3)
                    this.x = x[0], this.y = x[1], this.z = x[2];
                else
                    this.x = x.x, this.y = x.y, this.z = x.z;
            else
                if (y == undefined || z == undefined)
                    this.x = x, this.y = x, this.z = x;
                else
                    this.x = x, this.y = y, this.z = z;
        } // End of 'constructor' function

        add(v) {
            if (typeof v == "number")
                return vec3(this.x + v, this.y + v, this.z + v);
            return vec3(this.x + v.x, this.y + v.y, this.z + v.z);
        } // End of 'add' function

        setAdd(v1, v2) {
            if (typeof v2 == "number")
                return vec3(v1.x + v2, v1.y + v2, v1.z + v2);
            return vec3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
        } // End of 'add' function

        sub(v) {
            if (typeof v == "number")
                return vec3(this.x - v, this.y - v, this.z - v);
            return vec3(this.x - v.x, this.y - v.y, this.z - v.z);
        } // End of 'sub' function

        setSub(v1, v2) {
            if (typeof v2 == "number")
                return vec3(v1.x - v2, v1.y - v2, v1.z - v2);
            return vec3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
        } // End of 'sub' function

        mul(v) {
            if (typeof v == "number")
                return vec3(this.x * v, this.y * v, this.z * v);
            else if (v.m != undefined){
                let w = this.x * v.m[0][3] + this.y * v.m[1][3] + this.z * v.m[2][3] + v.m[3][3];

                return vec3((this.x * v.m[0][0] + this.y * v.m[1][0] + this.z * v.m[2][0] + v.m[3][0]) / w,
                            (this.x * v.m[0][1] + this.y * v.m[1][1] + this.z * v.m[2][1] + v.m[3][1]) / w,
                            (this.x * v.m[0][2] + this.y * v.m[1][2] + this.z * v.m[2][2] + v.m[3][2]) / w);
            }
            return this.x * v.x + this.y * v.y + this.z * v.z;
        } // End of 'mul' function

        div(n) {
            if (typeof n == "number")
                return vec3(this.x / n, this.y / n, this.z / n);
            return vec3(this.x, this.y, this.z);
        } // End of 'div' function

        neg(v) {
            return vec3(-this.x, - this.y, -this.z);
        } // End of 'neg' function

        len() {
            let len = this.mul(this);

            if (len == 1 || len == 0)
                return len;
            return Math.sqrt(len);
        } // End of 'len' function

        len2() {
            return this.mul(this);
        } // End of 'len2' function

        normalize() {
            let len = this.mul(this);

            if (len != 0 && len != 1) {
                len = Math.sqrt(len);
                return vec3(this.x / len, this.y / len, this.z / len);
            }
            return this;
        } // End of 'normalize' function

        transform(v) {
            return vec3(this.x * v.m[0][0] + this.y * v.m[1][0] + this.z * v.m[2][0],
                        this.x * v.m[0][1] + this.y * v.m[1][1] + this.z * v.m[2][1],
                        this.x * v.m[0][2] + this.y * v.m[1][2] + this.z * v.m[2][2]); 
        } // End of 'transform' function

        cross(v) {
            return vec3(this.y * v.z - this.z * v.y,
                        this.z * v.x - this.x * v.z,
                        this.x * v.y - this.y * v.x);
        } // End of'cross' function

        view(loc, at, up) {
            let dir = at.sub(loc).normalize();
            let right = dir.cross(up).normalize();
            let up1 = right.cross(dir).normalize();

            return mat4(right.x, up1.x, -dir.x, 0,
                        right.y, up1.y, -dir.y, 0, 
                        right.z, up1.z, -dir.z, 0,
                        -right.mul(loc), -loc.mul(up1), loc.mul(dir), 1);
        } // End of 'view' function
        
        frustum(l, r, b, t, n, f) {
            return mat4((2 * n) / (r - l), 0, 0, 0,
                         0, (2 * n) / (t - b), 0, 0,
                         (r + l) / (r - l), (t + b) / (t - b), (-((f + n) / (f - n))), (-1),
                         0, 0, (-((2 * n * f) / (f - n))), 0);
        } /* End of 'frustum' function */
          
        ortho(l, r, b, t, n, f) {
            return mat4(2 / (r - l), 0, 0, 0,
                        0, 2 / (t - b), 0, 0,
                        0, 0, (-2) / (f - n), 0,
                        (-((r + l) / (r - l))), (-((t + b) / (t - b))), (-((f + n) / (f - n))), 1);
        } // Enf of 'ortho' function
    } // End of 'vec3' class

    function vec3(...args) {
        return new _vec3(...args);
    } // End of 'vec3' function

    class _vec2 {
      constructor(x, y) {
          if (x == undefined)
              this.x = 0, this.y = 0;
          else if (typeof x == 'object')
              if (x.length == 2)
                  this.x = x[0], this.y = x[1];
              else
                  this.x = x.x, this.y = x.y;
          else
              if (y == undefined)
                  this.x = x, this.y = x;
              else
                  this.x = x, this.y = y;
        } // End of 'constructor' function
    } // End of 'vec2' class

    function vec2(...args) {
        return new _vec2(...args);
    } // End of 'vec3' function

    let cam = 0;

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

    function camCreate (canvas) {
        cam = new camera(canvas);
    }

    function camSet (loc, at, up) {
        cam.set(loc, at, up);
    }

    let vs_txt =
`#version 300 es
precision highp float;
in vec3 InPosition;
in vec3 InNormal;
    
out vec3 DrawPos;
out vec3 DrawNormal;
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
    gl_Position = MatrVP * MatrWorld * vec4(InPosition, 1.0);
    DrawPos = vec3(MatrWorld * vec4(InPosition, 1));
    DrawNormal = InNormal;
}
`    ;
    let fs_txt =
`#version 300 es
precision highp float;
out vec4 OutColor;

in vec3 DrawPos;
in vec3 DrawNormal;
uniform float Time;
uniform vec3 CamLoc;

uniform FrameBuffer
{
    vec4 Data;
};

void main( void )
{
    vec3 V = normalize(DrawPos - CamLoc);
    vec3 N = normalize(DrawNormal);
    vec3 L = normalize(vec3(1/* + 8 * sin(Time * 5)*/, 1, 1));
    vec3 color = vec3(0.2, 0.3, 0.7);

    N = faceforward(N, V, N);

    //Defuse
    vec3 KdDiff = vec3(0.4, 0.4, 0.4);
    color += KdDiff * max(0.1, dot(N, L));
    //Specular
    vec3 R = reflect(V, N);
    color += vec3(0.1, 0.2, 0.3) * max(0.0, pow(dot(R, L), 1.0));

    if (pow(abs(sin(Time + DrawPos.x * 0.7)), 2000.0) > 0.3 || 
        pow(abs(sin(Time + DrawPos.z * 0.7)), 2000.0) > 0.3)
        color = vec3(0, 1, 0);
    //color += vec3(0, 1, 0) * pow(abs(sin(Time + DrawPos.x * 0.7)), 2000.0);

    OutColor = vec4(color, 1);

    //vec3 N = DrawNormal;
    //OutColor = vec4(DrawPos.xyy + DrawPos.xxy, 1.0);
    //OutColor = vec4(N, 1.0);
}
`    ;

    let vs_txt1 =
`#version 300 es
precision highp float;
in vec3 InPosition;
in vec2 DrawTexCoord;
in vec3 InNormal;
    
out vec3 DrawPos;
out vec2 DrawTex;
out vec3 DrawNormal;
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
    gl_Position = MatrVP * MatrWorld * vec4(InPosition, 1.0);
    DrawPos = vec3(MatrWorld * vec4(InPosition, 1));
    DrawTex = DrawTexCoord;
    DrawNormal = InNormal;
}
`    ;
    let fs_txt1 =
`#version 300 es
precision highp float;
out vec4 OutColor;

in vec3 DrawPos;
in vec2 DrawTex;
in vec3 DrawNormal;
uniform float Time;
uniform vec3 CamLoc;

uniform sampler2D Tex;

uniform FrameBuffer
{
    vec4 Data;
};

vec2 rot( float a, vec2 v )
{
  float s = sin(a), c = cos(a);

  return vec2(dot(v, vec2(c, -s)), dot(v, vec2(s, c)));
}

mat4 MatrScale( vec3 v )
{
  return mat4(v.x, 0, 0, 0,
                 0, v.y, 0, 0,
                 0, 0, v.z, 0,
                 0, 0, 0, 1);
}

void main( void )
{
    vec3 V = normalize(DrawPos - CamLoc);
    vec3 N = normalize(DrawNormal);
    vec3 L = normalize(vec3(1/* + 8 * sin(Time * 5)*/, 1, 1));
    vec3 color = vec3(0.2, 0.3, 0.7);

    N = faceforward(N, V, N);

    //Defuse
    vec3 KdDiff = vec3(0.4, 0.4, 0.4);
    color += KdDiff * max(0.1, dot(N, L));
    //Specular
    vec3 R = reflect(V, N);
    color += vec3(0.1, 0.2, 0.3) * max(0.0, pow(dot(R, L), 1.0));

    if (pow(abs(sin(Time + DrawPos.x * 0.7)), 2000.0) > 0.3 || 
        pow(abs(sin(Time + DrawPos.z * 0.7)), 2000.0) > 0.3)
        color = vec3(0, 1, 0);
    //color += vec3(0, 1, 0) * pow(abs(sin(Time + DrawPos.x * 0.7)), 2000.0);

    OutColor = vec4(color, 1);

    //vec3 N = DrawNormal;
    //OutColor = vec4(DrawPos.xyy + DrawPos.xxy, 1.0);
    //OutColor = vec4(N, 1.0);

    vec4 tc = texture(Tex, vec2(vec4(DrawTex, 0.0, 0.0) * MatrScale(vec3(10))));//rot(100.0, (1.0 - DrawTex) * (5.0 + 3.0 * sin(Time))));
    OutColor = vec4(tc.rgb, 1);
}
`    ;

    class Shader {
        constructor(gl, vs_txt, fs_txt) {
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
            }; // End of 'loadShader' function
        
            // Shader creation
            this.vs = loadShader(gl.VERTEX_SHADER, vs_txt),
            this.fs = loadShader(gl.FRAGMENT_SHADER, fs_txt),
            this.prg = gl.createProgram();
            gl.attachShader(this.prg, this.vs);
            gl.attachShader(this.prg, this.fs);
            gl.linkProgram(this.prg);
            if (!gl.getProgramParameter(this.prg, gl.LINK_STATUS)) {
                let buf = gl.getProgramInfoLog(this.prg);
                console.log('Shader program link fail: ' + buf);
            }  
        }
    }

    function loadShaders(gl, name) {
        if (name == "default")
            return new Shader(gl, vs_txt, fs_txt);
        if (name == "quad")
            return new Shader(gl, vs_txt1, fs_txt1);
    }

    class _texture {
      constructor(gl, nameURL, textureType = "2d") {
        this.name = nameURL.name;
        this.type = gl.TEXTURE_2D;
        this.id = gl.createTexture();
        gl.bindTexture(this.type, this.id);
        if (nameURL.img) {
          gl.texImage2D(this.type, 0, gl.RGBA, 1, 1, 0, gl.RGBA,
                        gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 0]));
          nameURL.img.onload = () => {
            gl.bindTexture(this.type, this.id);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(this.type, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE,
                          nameURL.img);
            gl.generateMipmap(this.type);
            gl.texParameteri(this.type, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(this.type, gl.TEXTURE_WRAP_T, gl.REPEAT);
            gl.texParameteri(this.type, gl.TEXTURE_MIN_FILTER,
                                        gl.LINEAR_MIPMAP_LINEAR);
            gl.texParameteri(this.type, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          };
          gl.activeTexture(gl.TEXTURE0 + 0);
          gl.bindTexture(gl.TEXTURE_2D, this.id);
        }
      }
    }
     
    function texture(...args) {
      /*. . .*/
      return new _texture(...args);
    }

    class vertex {
      constructor(position, normal, texCoord) {
        this.pos = position;
        this.norm = normal;
        this.texCoord = texCoord;
      }
    }

    function vert(position, normal, texCoord) {
      return new vertex(position, normal, texCoord);
    }

    class Prim {
        constructor(vertexArray, indexArray, numOfElements, matrWorld, name) {
            this.vertexArray = vertexArray;
            this.vertexAttribArray = null;
            this.vertexBuffer = null;
            this.indexArray = indexArray;
            this.indexBuffer = null;
            this.numOfElements = numOfElements;
            this.matrWorld = matrWorld;
            this.shds = 0;
            this.name = name;
        }
    }

    function createPrim(vertexArray, indexArray, numOfElements, matrWorld, name) {
      return new Prim(vertexArray, indexArray, numOfElements, matrWorld, name);
    }

    function createCubeFacets(size, pos) {
        let p = []; 
        p[0] = vert(pos.add(vec3(size / 2, 0, -size / 2))),
        p[1] = vert(pos.add(vec3(-size / 2, size, -size / 2))),
        p[2] = vert(pos.add(vec3(-size / 2, 0, size / 2))),
        p[3] = vert(pos.add(vec3(-size / 2, 0, -size / 2))),
        p[4] = vert(pos.add(vec3(size / 2, size, -size / 2))),
        p[5] = vert(pos.add(vec3(size / 2, 0, size / 2))),
        p[6] = vert(pos.add(vec3(size / 2, size, size / 2))),
        p[7] = vert(pos.add(vec3(-size / 2, size, size / 2)));
        let ind = [3, 1, 0,
                   0, 1, 4,
                   6, 5, 0,
                   6, 0, 4,
                   7, 2, 5,
                   7, 5, 6,
                   1, 3, 2,
                   1, 2, 7,
                   7, 6, 4,
                   7, 4, 1,
                   5, 2, 3,
                   5, 3, 0];

        return createPrim(p, ind, null, null, "cube"); 
    }

    function createQuadFacets(size, pos) {
      let p = [];
      p[0] = vert(pos.add(vec3(-size / 2, 0, -size / 2)), vec3(), vec2(0, 0)),
      p[1] = vert(pos.add(vec3(-size / 2, 0, size / 2)), vec3(), vec2(1, 0)),
      p[2] = vert(pos.add(vec3(size / 2, 0, -size / 2)), vec3(), vec2(0, 1)),
      p[3] = vert(pos.add(vec3(size / 2, 0, size / 2)), vec3(), vec2(1, 1));
      let ind = [2, 0, 1,
                 2, 1, 3];
      return createPrim(p, ind, null, null, "quad");
    }

    function createNormals(prim)
    {
      for (let i = 0; i < (prim.name == "cube" ? 8 : 4)/*prim.numOfPoints*/; i++)
        prim.vertexArray[i].norm = vec3(0);
      for (let i = 0; i < (prim.name == "cube" ? 12 : 2)/*prim.numOfElements*/; i++)
      {
        let i0 = prim.indexArray[i * 3], i1 = prim.indexArray[i * 3 + 1], i2 = prim.indexArray[i * 3 + 2];
        let p01 = prim.vertexArray[i1].pos.sub(prim.vertexArray[i0].pos), 
            p02 = prim.vertexArray[i2].pos.sub(prim.vertexArray[i0].pos);
        let normal = p01.cross(p02).normalize();

        prim.vertexArray[i0].norm = prim.vertexArray[i0].norm.add(normal);
        prim.vertexArray[i1].norm = prim.vertexArray[i1].norm.add(normal);
        prim.vertexArray[i2].norm = prim.vertexArray[i2].norm.add(normal);
      }
      return prim;
    } // End of 'CreateNormals' function

    function vec3ToArray(element) {
        return [element.x, element.y, element.z];
    }

    function vec2ToArray(element) {
      if (element != undefined)
        return [element.x, element.y];
      else
      return [0, 0];
    }

    function createVertFromFacets(prim) {
        let facets = prim.vertexArray;
        let vertArray = [];
        let cnt = 0;

        for (let i of facets)
        {
            vertArray = vertArray.concat(vec3ToArray(i.pos).concat(vec3ToArray(i.norm)).concat(vec2ToArray(i.texCoord)));
            cnt++;
        }
        return createPrim(vertArray, prim.indexArray, cnt, mat4(), prim.name);
    }

    function createCube(size, pos) {
       return createVertFromFacets(createNormals(createCubeFacets(size, pos)));
    }

    function createQuad(size, pos) {
      return createVertFromFacets(createNormals(createQuadFacets(size, pos)));
    }

    function bufLoad(gl, prim) {
        gl.useProgram(prim.shds.prg);
        // Loading to shader vertex array
        const posLoc = gl.getAttribLocation(prim.shds.prg, "InPosition");
        const texLoc = gl.getAttribLocation(prim.shds.prg, "DrawTexCoord");
        const normLoc = gl.getAttribLocation(prim.shds.prg, "InNormal");
        prim.vertexAttribArray = gl.createVertexArray();
        gl.bindVertexArray(prim.vertexAttribArray);
        prim.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, prim.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(prim.vertexArray), gl.STATIC_DRAW);
        if (posLoc != -1) {
          gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 4 * 3 * 2 + 4 * 2, 0);
          gl.enableVertexAttribArray(posLoc);
        }
        if (normLoc != -1) {
          gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, 4 * 3 * 2 + 4 * 2, 4 * 3);
          gl.enableVertexAttribArray(normLoc);
        }
        if (texLoc != -1) {
          gl.vertexAttribPointer(texLoc, 3, gl.FLOAT, false, 4 * 3 * 2 + 4 * 2, 4 * 3 * 2);
          gl.enableVertexAttribArray(texLoc);
        }

        // Loading to shader index array
        prim.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, prim.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(prim.indexArray), gl.STATIC_DRAW);
    }

    function createFigure(rnd, figureName, shdName, size, pos) {
      let prim;

      if (figureName == "cube")
        prim = createCube(size, pos);
      else
        prim = createQuad(size, pos);
      // Loading shader
      prim.shds = loadShaders(rnd.gl, shdName);
      bufLoad(rnd.gl, prim);

      return prim;
    }

    ////////////////////////////
    // Timer class module
    ////////////////////////////
    // usage:
    // HTML:
    //  <script type="module">
    //    import {Timer} from "./timer.js"
    //    let myTimer = new Timer();
    //    . . .
    //    myTimer.response();
    //    let time = myTimer.localTime; //
    //    if (myTimer.isPause)
    //      . . .
    //    myTimer.isPause = !myTimer.isPause;
    //    document.getElementById('fps').innerHTML = myTimer.getFPS();
    //      or myTimer.response('fps'); -- update FPS automatically
    //  </scrpt>
     
    // Timer class constructor function
    function Timer() {
      // Timer obtain current time in seconds method
      const getTime = () => {
        const date = new Date();
        let t =
          date.getMilliseconds() / 1000.0 +
          date.getSeconds() +
          date.getMinutes() * 60;
        return t;
      };
     
      // Timer response method
      this.response = (tag_id = null) => {
        let t = getTime();
        // Global time
        this.globalTime = t;
        this.globalDeltaTime = t - this.oldTime;
        // Time with pause
        if (this.isPause) {
          this.localDeltaTime = 0;
          this.pauseTime += t - this.oldTime;
        } else {
          this.localDeltaTime = this.globalDeltaTime;
          this.localTime = t - this.pauseTime - this.startTime;
        }
        // FPS
        this.frameCounter++;
        if (t - this.oldTimeFPS > 3) {
          this.FPS = this.frameCounter / (t - this.oldTimeFPS);
          this.oldTimeFPS = t;
          this.frameCounter = 0;
          if (tag_id != null)
            document.getElementById(tag_id).innerHTML = this.getFPS();
        }
        this.oldTime = t;
      };
     
      // Obtain FPS as string method
      this.getFPS = () => this.FPS.toFixed(3);
     
      // Fill timer global data
      this.globalTime = this.localTime = getTime();
      this.globalDeltaTime = this.localDeltaTime = 0;
     
      // Fill timer semi global data
      this.startTime = this.oldTime = this.oldTimeFPS = this.globalTime;
      this.frameCounter = 0;
      this.isPause = false;
      this.FPS = 30.0;
      this.pauseTime = 0;
     
      return this;
    } // End of 'Timer' function

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

    class input {
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
        if (this.ctrlKey) {
          let matr = mat4();
          let angleSpeed = 70;
          let rotateY = 0, rotateX = 0;
          let speed = 15, dist = 0;
        
          if (this.ctrlKey) {
            cam.loc = cam.loc.add(model.forward);
            if (this.keys["ArrowRight"]) {
              rotateY = timer.globalDeltaTime * angleSpeed;
        
              model.forward = model.forward.mul(mat4().rotate(rotateY, model.up.normalize()));
              model.right = model.right.mul(mat4().rotate(rotateY, model.up.normalize()));
            }
            if (this.keys["ArrowLeft"]) {
              rotateY = -timer.globalDeltaTime * angleSpeed;
        
              model.forward = model.forward.mul(mat4().rotate(rotateY, model.up.normalize()));
              model.right = model.right.mul(mat4().rotate(rotateY, model.up.normalize()));
            }
            if (this.keys["ArrowUp"]) {
              rotateX = -timer.globalDeltaTime * angleSpeed;
        
              model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
              model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
            }
            if (this.keys["ArrowDown"]) {
              rotateX = timer.globalDeltaTime * angleSpeed;
        
              model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
              model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
            }
            if (this.keys["Numpad8"]) {
              dist = timer.globalDeltaTime * speed * (this.keys["Numpad9"] == true ? 8 : 1);
              
              camSet(cam.loc.add(model.forward.mul(dist)), cam.loc.add(model.forward), model.up);
              matr = matr.mul(mat4().translate(model.forward.mul(dist)));
            }
            if (this.keys["Numpad4"]) {
              dist = timer.globalDeltaTime * speed * (this.keys["Numpad9"] == true ? 8 : 1);

              camSet(cam.loc.sub(model.forward.mul(dist)), cam.loc.add(model.forward), model.up);
              matr = matr.mul(mat4().translate(model.forward.mul(dist).neg()));
            }

            camSet(cam.loc.sub(model.forward), cam.loc.add(model.forward), model.up);
            return matr.mul(mat4().rotate(rotateX, model.right.normalize()).mul(mat4().rotate(rotateY, model.up.normalize())));
          }
          else 
            return null;
        }
      } // End of 'responseсCamera' function
    } // End of 'input' class

    function primsInit(rnd) {
      rnd.prims = [];

      // Creating first primitive
      rnd.prims[0] = createFigure(rnd, "cube", "default", 0.8, vec3());

      // Creating second primitive
      const size = 1000;
      // Loading shader
      let img = new Image();
      img.src = "./moss.jpg";
      texture(rnd.gl, {img: img, name: "land"});
      
      for (let i = -2, cnt = 0; i <= 2; i++)
        for (let j = -2; j <= 2; j++)
          rnd.prims[cnt++ + 1] = createFigure(rnd, "quad", "quad", 1000, vec3(i * size, 0, j * size));

      return rnd.prims;
    }

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

        gl.enable(gl.DEPTH_TEST);

        // Setting camera and matrixes
        camCreate(this.canvas);
        camSet(vec3(0, 2, -5), vec3(0), vec3(0, 1, 0));
        this.cam = cam;

        // Array of primitives initializing, creating of primitives
        this.prims = primsInit(this);

        // Frame buffer
        this.frameBuffer = gl.createBuffer();
        gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
        gl.bufferData(gl.UNIFORM_BUFFER, 4 * 4, gl.STATIC_DRAW);

        // Loading matrixes and frame buffer
        for (let i = 0; this.prims[i] != undefined; i++) {
          let prg = this.prims[i].shds.prg;

          gl.useProgram(prg);
          gl.uniformBlockBinding(prg, 
            gl.getUniformBlockIndex(prg, "FrameBuffer"),
            this.frameUniformBufferIndex);

          // getting binding point for variable of time
          this.timeLoc = [];
          this.timeLoc[i] = gl.getUniformLocation(prg, "Time");

          this.cameraLocatioinLoc = [];
          this.cameraLocatioinLoc[i] = gl.getUniformLocation(prg, "CamLoc");

          this.matrixReload(this.prims[i]);
        }
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

        // Sending frame buffer to shaders
        gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
        gl.bufferData(gl.UNIFORM_BUFFER, new Float32Array(this.frameData), gl.STATIC_DRAW);
        gl.bindBufferBase(gl.UNIFORM_BUFFER, this.frameUniformBufferIndex, this.frameBuffer);
        
        // Responsing input system
        if (this.input.ctrlKey) {
          this.newMatrWorld = this.input.responseCamera(this.timer);
          if (this.newMatrWorld != null) {
            this.prims[0].matrWorld = this.prims[0].matrWorld.mul(this.newMatrWorld);
            this.cam = cam;
            //console.log("Camera position:", cam.loc);
          }
        }

        for (let i = 0; this.prims[i] != undefined; i++) {
          let prg = this.prims[i].shds.prg;

          gl.useProgram(prg);

          // Updating time on shaders
          if (this.timeLoc[i] != -1)
            gl.uniform1f(this.timeLoc[i], this.timer.globalTime);

          if (this.cameraLocatioinLoc[i] != -1)
            gl.uniform3f(this.cameraLocatioinLoc[i], this.cam.loc.x, this.cam.loc.y, this.cam.loc.z);

          // Reloading matrixes
          this.matrixReload(this.prims[i]);

          // Drawing of primitives
          gl.bindVertexArray(this.prims[i].vertexAttribArray);
          if (this.prims[i].indexArray == null)
            gl.drawArrays(gl.TRIANGLES, 0, this.prims[i].numOfElements);
          else
            gl.drawElements(gl.TRIANGLES, /*this.prims[i].numOfElements * */(this.prims[i].name == "quad" ? 6 : 36), gl.UNSIGNED_INT, 0);
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
        gl.uniformMatrix4fv(WorldLoc, false, new Float32Array(prim.matrWorld.toArray()));//mat4().rotateY(0 * this.timer.globalTime * 140).mul(mat4().rotateX(0 * this.timer.globalTime * 70)).toArray()));
      }
    }

    window.addEventListener("load", () => {
      const rnd = new _render("glcanvas");
      rnd.mainLoop();
    });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbXRoL21hdDQuanMiLCIuLi8uLi9tdGgvdmVjMy5qcyIsIi4uLy4uL210aC92ZWMyLmpzIiwiLi4vLi4vbXRoL2NhbS5qcyIsIi4uLy4uL2FuaW0vcm5kL3Jlcy9zaGRzLmpzIiwiLi4vLi4vYW5pbS9ybmQvcmVzL3RleC5qcyIsIi4uLy4uL2FuaW0vcm5kL3ByaW0uanMiLCIuLi8uLi9hbmltL3RpbWVyLmpzIiwiLi4vLi4vdXRpbHMvY250cmwuanMiLCIuLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlYzMgfSBmcm9tICcuL3ZlYzMuanMnO1xyXG5cclxuY2xhc3MgX21hdDR7XHJcbiAgICBjb25zdHJ1Y3RvcihBMDAsIEEwMSwgQTAyLCBBMDMsXHJcbiAgICAgICAgICAgICAgICBBMTAsIEExMSwgQTEyLCBBMTMsXHJcbiAgICAgICAgICAgICAgICBBMjAsIEEyMSwgQTIyLCBBMjMsXHJcbiAgICAgICAgICAgICAgICBBMzAsIEEzMSwgQTMyLCBBMzMpIHtcclxuICAgICAgICBsZXQgbSA9IFtbQTAwLCBBMDEsIEEwMiwgQTAzXSxcclxuICAgICAgICAgICAgICAgICBbQTEwLCBBMTEsIEExMiwgQTEzXSxcclxuICAgICAgICAgICAgICAgICBbQTIwLCBBMjEsIEEyMiwgQTIzXSxcclxuICAgICAgICAgICAgICAgICBbQTMwLCBBMzEsIEEzMiwgQTMzXV07XHJcbiAgICAgICAgaWYgKG1bMF1bMF0gPT0gdW5kZWZpbmVkIHx8IG1bMF1bMV0gPT0gdW5kZWZpbmVkIHx8IG1bMF1bMl0gPT0gdW5kZWZpbmVkIHx8IG1bMF1bM10gPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG1bMV1bMF0gPT0gdW5kZWZpbmVkIHx8IG1bMV1bMV0gPT0gdW5kZWZpbmVkIHx8IG1bMV1bMl0gPT0gdW5kZWZpbmVkIHx8IG1bMV1bM10gPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG1bMl1bMF0gPT0gdW5kZWZpbmVkIHx8IG1bMl1bMV0gPT0gdW5kZWZpbmVkIHx8IG1bMl1bMl0gPT0gdW5kZWZpbmVkIHx8IG1bMl1bM10gPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG1bM11bMF0gPT0gdW5kZWZpbmVkIHx8IG1bM11bMV0gPT0gdW5kZWZpbmVkIHx8IG1bM11bMl0gPT0gdW5kZWZpbmVkIHx8IG1bM11bM10gPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLm0gPSBbWzEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDAsIDFdXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubSA9IFtbQTAwLCBBMDEsIEEwMiwgQTAzXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtBMTAsIEExMSwgQTEyLCBBMTNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW0EyMCwgQTIxLCBBMjIsIEEyM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbQTMwLCBBMzEsIEEzMiwgQTMzXV07XHJcbiAgICB9IC8vIEVuZCBvZiAnY29uc3RydWN0b3InIGZ1bmN0aW9uXHJcbiAgICAgICAgXHJcbiAgICBtdWwobSkge1xyXG4gICAgICAgIGxldCByID0gbWF0NCgpO1xyXG5cclxuICAgICAgICByLm1bMF1bMF0gPSB0aGlzLm1bMF1bMF0gKiBtLm1bMF1bMF0gKyB0aGlzLm1bMF1bMV0gKiBtLm1bMV1bMF0gKyB0aGlzLm1bMF1bMl0gKiBtLm1bMl1bMF0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMF1bM10gKiBtLm1bM11bMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzBdWzFdID0gdGhpcy5tWzBdWzBdICogbS5tWzBdWzFdICsgdGhpcy5tWzBdWzFdICogbS5tWzFdWzFdICsgdGhpcy5tWzBdWzJdICogbS5tWzJdWzFdICtcclxuICAgICAgICAgICAgdGhpcy5tWzBdWzNdICogbS5tWzNdWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVswXVsyXSA9IHRoaXMubVswXVswXSAqIG0ubVswXVsyXSArIHRoaXMubVswXVsxXSAqIG0ubVsxXVsyXSArIHRoaXMubVswXVsyXSAqIG0ubVsyXVsyXSArXHJcbiAgICAgICAgICAgIHRoaXMubVswXVszXSAqIG0ubVszXVsyXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMF1bM10gPSB0aGlzLm1bMF1bMF0gKiBtLm1bMF1bM10gKyB0aGlzLm1bMF1bMV0gKiBtLm1bMV1bM10gKyB0aGlzLm1bMF1bMl0gKiBtLm1bMl1bM10gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMF1bM10gKiBtLm1bM11bM107XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzFdWzBdID0gdGhpcy5tWzFdWzBdICogbS5tWzBdWzBdICsgdGhpcy5tWzFdWzFdICogbS5tWzFdWzBdICsgdGhpcy5tWzFdWzJdICogbS5tWzJdWzBdICtcclxuICAgICAgICAgICAgdGhpcy5tWzFdWzNdICogbS5tWzNdWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsxXVsxXSA9IHRoaXMubVsxXVswXSAqIG0ubVswXVsxXSArIHRoaXMubVsxXVsxXSAqIG0ubVsxXVsxXSArIHRoaXMubVsxXVsyXSAqIG0ubVsyXVsxXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsxXVszXSAqIG0ubVszXVsxXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMV1bMl0gPSB0aGlzLm1bMV1bMF0gKiBtLm1bMF1bMl0gKyB0aGlzLm1bMV1bMV0gKiBtLm1bMV1bMl0gKyB0aGlzLm1bMV1bMl0gKiBtLm1bMl1bMl0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMV1bM10gKiBtLm1bM11bMl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzFdWzNdID0gdGhpcy5tWzFdWzBdICogbS5tWzBdWzNdICsgdGhpcy5tWzFdWzFdICogbS5tWzFdWzNdICsgdGhpcy5tWzFdWzJdICogbS5tWzJdWzNdICtcclxuICAgICAgICAgICAgdGhpcy5tWzFdWzNdICogbS5tWzNdWzNdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsyXVswXSA9IHRoaXMubVsyXVswXSAqIG0ubVswXVswXSArIHRoaXMubVsyXVsxXSAqIG0ubVsxXVswXSArIHRoaXMubVsyXVsyXSAqIG0ubVsyXVswXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsyXVszXSAqIG0ubVszXVswXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMl1bMV0gPSB0aGlzLm1bMl1bMF0gKiBtLm1bMF1bMV0gKyB0aGlzLm1bMl1bMV0gKiBtLm1bMV1bMV0gKyB0aGlzLm1bMl1bMl0gKiBtLm1bMl1bMV0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMl1bM10gKiBtLm1bM11bMV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzJdWzJdID0gdGhpcy5tWzJdWzBdICogbS5tWzBdWzJdICsgdGhpcy5tWzJdWzFdICogbS5tWzFdWzJdICsgdGhpcy5tWzJdWzJdICogbS5tWzJdWzJdICtcclxuICAgICAgICAgICAgdGhpcy5tWzJdWzNdICogbS5tWzNdWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsyXVszXSA9IHRoaXMubVsyXVswXSAqIG0ubVswXVszXSArIHRoaXMubVsyXVsxXSAqIG0ubVsxXVszXSArIHRoaXMubVsyXVsyXSAqIG0ubVsyXVszXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsyXVszXSAqIG0ubVszXVszXTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICByLm1bM11bMF0gPSB0aGlzLm1bM11bMF0gKiBtLm1bMF1bMF0gKyB0aGlzLm1bM11bMV0gKiBtLm1bMV1bMF0gKyB0aGlzLm1bM11bMl0gKiBtLm1bMl1bMF0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bM11bM10gKiBtLm1bM11bMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzNdWzFdID0gdGhpcy5tWzNdWzBdICogbS5tWzBdWzFdICsgdGhpcy5tWzNdWzFdICogbS5tWzFdWzFdICsgdGhpcy5tWzNdWzJdICogbS5tWzJdWzFdICtcclxuICAgICAgICAgICAgdGhpcy5tWzNdWzNdICogbS5tWzNdWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVszXVsyXSA9IHRoaXMubVszXVswXSAqIG0ubVswXVsyXSArIHRoaXMubVszXVsxXSAqIG0ubVsxXVsyXSArIHRoaXMubVszXVsyXSAqIG0ubVsyXVsyXSArXHJcbiAgICAgICAgICAgIHRoaXMubVszXVszXSAqIG0ubVszXVsyXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bM11bM10gPSB0aGlzLm1bM11bMF0gKiBtLm1bMF1bM10gKyB0aGlzLm1bM11bMV0gKiBtLm1bMV1bM10gKyB0aGlzLm1bM11bMl0gKiBtLm1bMl1bM10gK1xyXG4gICAgICAgICAgICB0aGlzLm1bM11bM10gKiBtLm1bM11bM107XHJcblxyXG4gICAgICAgIHJldHVybiByOyAgICAgICAgICAgIFxyXG4gICAgfSAvLyBFbmQgb2YgJ211bCcgZnVuY3Rpb25cclxuXHJcbiAgICBkZXRlcm0zeDMoQTExLCBBMTIsIEExMyxcclxuICAgICAgICAgICAgICBBMjEsIEEyMiwgQTIzLFxyXG4gICAgICAgICAgICAgIEEzMSwgQTMyLCBBMzMgKSB7XHJcbiAgICAgICAgcmV0dXJuIEExMSAqIEEyMiAqIEEzMyArIEExMiAqIEEyMyAqIEEzMSArIEExMyAqIEEyMSAqIEEzMiAtXHJcbiAgICAgICAgICAgICAgIEExMSAqIEEyMyAqIEEzMiAtIEExMiAqIEEyMSAqIEEzMyAtIEExMyAqIEEyMiAqIEEzMTtcclxuXHJcbiAgICB9IC8vIEVuZCBvZiAnZGV0ZXJtM3gzJyBmdW5jdGlvblxyXG5cclxuICAgIGRldGVybSgpIHtcclxuICAgICAgICBsZXQgbiA9XHJcbiAgICAgICAgICAgICt0aGlzLm1bMF1bMF0gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMV0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgIC10aGlzLm1bMF1bMV0gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgICt0aGlzLm1bMF1bMl0gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgIC10aGlzLm1bMF1bM10gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdKTtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH0gLy8gRW5kIG9mICdkZXRlcm0nIGZ1bmN0aW9uXHJcblxyXG4gICAgaW52ZXJzZSgpIHtcclxuICAgICAgICBsZXQgciA9IG1hdDQoKTtcclxuICAgICAgICBsZXQgZGV0ID0gdGhpcy5kZXRlcm0oKTtcclxuXHJcbiAgICAgICAgaWYgKGRldCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0NCgpO1xyXG5cclxuICAgICAgICAvKiBidWlsZCBhZGpvaW50IG1hdHJpeCAqL1xyXG4gICAgICAgIHIubVswXVswXSA9XHJcbiAgICAgICAgICAgICt0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMV0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzFdWzBdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMl1bMF0gPVxyXG4gICAgICAgICAgICArdGhpcy5kZXRlcm0zeDModGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMV0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVszXVswXSA9XHJcbiAgICAgICAgICAgIC10aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzBdWzFdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bMV0gPVxyXG4gICAgICAgICAgICArdGhpcy5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMl0sIHRoaXMubVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMl0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVsxXSA9XHJcbiAgICAgICAgICAgIC10aGlzLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzFdID1cclxuICAgICAgICAgICAgK3RoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bMl0pIC8gZGV0O1xyXG5cclxuXHJcbiAgICAgICAgci5tWzBdWzJdID1cclxuICAgICAgICAgICAgK3RoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bMl0gPVxyXG4gICAgICAgICAgICAtdGhpcy5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMl0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMl0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVsyXSA9XHJcbiAgICAgICAgICAgICt0aGlzLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzJdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bMl0pIC8gZGV0O1xyXG5cclxuXHJcbiAgICAgICAgci5tWzBdWzNdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bM10gPVxyXG4gICAgICAgICAgICArdGhpcy5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMl0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMl0sIHRoaXMubVsyXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVszXSA9XHJcbiAgICAgICAgICAgIC10aGlzLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzNdID1cclxuICAgICAgICAgICAgK3RoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bMl0pIC8gZGV0O1xyXG5cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH0gLy8gRW5kIG9mICdpbnZlcnNlJyBmdW5jdGlvbiAgICBcclxuXHJcbiAgICByb3RhdGUoYW5nbGUsIHYpIHtcclxuICAgICAgICBsZXQgYSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MC4wLFxyXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4oYSksXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdDQoYyArIHYueCAqIHYueCAqICgxIC0gYyksIHYueSAqIHYueCAqICgxIC0gYykgLSB2LnogKiBzLCB2LnogKiB2LnggKiAoMSAtIGMpICsgdi55ICogcywgMCxcclxuICAgICAgICAgICAgICAgICAgICB2LnggKiB2LnkgKiAoMSAtIGMpICsgdi56ICogcywgYyArIHYueSAqIHYueSAqICgxIC0gYyksIHYueiAqIHYueSAqICgxIC0gYykgLSB2LnggKiBzLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHYueCAqIHYueiAqICgxIC0gYykgLSB2LnkgKiBzLCB2LnkgKiB2LnogKiAoMSAtIGMpICsgdi54ICogcywgYyArIHYueiAqIHYueiAqICgxIC0gYyksIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9IC8vIEVuZCBvZiAncm90YXRlJyBmdW5jdGlvblxyXG5cclxuICAgIHJvdGF0ZVgoYW5nbGUpIHtcclxuICAgICAgICBsZXQgYSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MC4wLFxyXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4oYSksXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdDQoMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCBjLCBzLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIC1zLCBjLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3JvdGF0ZVgnIGZ1bmN0aW9uXHJcblxyXG4gICAgcm90YXRlWShhbmdsZSkge1xyXG4gICAgICAgIGxldCBhID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwLjAsXHJcbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbihhKSxcclxuICAgICAgICAgICAgYyA9IE1hdGguY29zKGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0NChjLCAwLCAtcywgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHMsIDAsIGMsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9IC8vIEVuZCBvZiAncm90YXRlWScgZnVuY3Rpb25cclxuXHJcbiAgICByb3RhdGVaKGFuZ2xlKSB7XHJcbiAgICAgICAgbGV0IGEgPSBhbmdsZSAqIE1hdGguUEkgLyAxODAuMCxcclxuICAgICAgICAgICAgcyA9IE1hdGguc2luKGEpLFxyXG4gICAgICAgICAgICBjID0gTWF0aC5jb3MoYSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXQ0KGMsIHMsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgLXMsIGMsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH0gLy8gRW5kIG9mICdyb3RhdGVaJyBmdW5jdGlvblxyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm1Qb2ludCh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHZlYzModi54ICogdGhpcy5tWzBdWzBdICsgdi55ICogdGhpcy5tWzFdWzBdICsgdi56ICogdGhpcy5tWzJdWzBdICsgdGhpcy5tWzNdWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHYueCAqIHRoaXMubVswXVsxXSArIHYueSAqIHRoaXMubVsxXVsxXSArIHYueiAqIHRoaXMubVsyXVsxXSArIHRoaXMubVszXVsxXSxcclxuICAgICAgICAgICAgICAgICAgICB2LnggKiB0aGlzLm1bMF1bMl0gKyB2LnkgKiB0aGlzLm1bMV1bMl0gKyB2LnogKiB0aGlzLm1bMl1bMl0gKyB0aGlzLm1bM11bMl0pO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3BvaW50dHJhbnMnIGZ1bmN0aW9uXHJcblxyXG4gICAgdHJhbnNsYXRlKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgIHJldHVybiBtYXQ0KDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYueCwgdi55LCB2LnosIDEpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09ICdudW1iZXInKVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0NCgxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LCB2LCB2LCAxKTsgXHJcbiAgICB9IC8vIEVuZCBvZiAndHJhbnNsYXRlJyBmdW5jdGlvbiAgICBcclxuXHJcbiAgICBzY2FsZSh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdDQodi54LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAwLCB2LnksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgIDAsIDAsIHYueiwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcblxyXG4gICAgfSAvLyBFbmQgb2YgJ3NjYWxlJyBmdW5jdGlvblxyXG5cclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCguLi50aGlzLm0pO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3RvQXJyYXknIGZ1bmN0aW9uXHJcblxyXG59IC8vIEVuZCBvZiAnX21hdDQnIGNsYXNzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWF0NCguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gbmV3IF9tYXQ0KC4uLmFyZ3MpO1xyXG59IC8vIEVuZCBvZiAnbWF0NCcgZnVuY3Rpb24iLCJpbXBvcnQgeyBtYXQ0IH0gZnJvbSBcIi4vbWF0NC5qc1wiO1xyXG5cclxuY2xhc3MgX3ZlYzMge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xyXG4gICAgICAgIGlmICh4ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy54ID0gMCwgdGhpcy55ID0gMCwgdGhpcy56ID0gMDtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgaWYgKHgubGVuZ3RoID09IDMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4WzBdLCB0aGlzLnkgPSB4WzFdLCB0aGlzLnogPSB4WzJdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4LngsIHRoaXMueSA9IHgueSwgdGhpcy56ID0geC56O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaWYgKHkgPT0gdW5kZWZpbmVkIHx8IHogPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geCwgdGhpcy56ID0geDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geSwgdGhpcy56ID0gejtcclxuICAgIH0gLy8gRW5kIG9mICdjb25zdHJ1Y3RvcicgZnVuY3Rpb25cclxuXHJcbiAgICBhZGQodikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKyB2LCB0aGlzLnkgKyB2LCB0aGlzLnogKyB2KTtcclxuICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKyB2LngsIHRoaXMueSArIHYueSwgdGhpcy56ICsgdi56KTtcclxuICAgIH0gLy8gRW5kIG9mICdhZGQnIGZ1bmN0aW9uXHJcblxyXG4gICAgc2V0QWRkKHYxLCB2Mikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdjIgPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZlYzModjEueCArIHYyLCB2MS55ICsgdjIsIHYxLnogKyB2Mik7XHJcbiAgICAgICAgcmV0dXJuIHZlYzModjEueCArIHYyLngsIHYxLnkgKyB2Mi55LCB2MS56ICsgdjIueik7XHJcbiAgICB9IC8vIEVuZCBvZiAnYWRkJyBmdW5jdGlvblxyXG5cclxuICAgIHN1Yih2KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAtIHYsIHRoaXMueSAtIHYsIHRoaXMueiAtIHYpO1xyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAtIHYueCwgdGhpcy55IC0gdi55LCB0aGlzLnogLSB2LnopO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3N1YicgZnVuY3Rpb25cclxuXHJcbiAgICBzZXRTdWIodjEsIHYyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2MiA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmVjMyh2MS54IC0gdjIsIHYxLnkgLSB2MiwgdjEueiAtIHYyKTtcclxuICAgICAgICByZXR1cm4gdmVjMyh2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTtcclxuICAgIH0gLy8gRW5kIG9mICdzdWInIGZ1bmN0aW9uXHJcblxyXG4gICAgbXVsKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZlYzModGhpcy54ICogdiwgdGhpcy55ICogdiwgdGhpcy56ICogdik7XHJcbiAgICAgICAgZWxzZSBpZiAodi5tICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCB3ID0gdGhpcy54ICogdi5tWzBdWzNdICsgdGhpcy55ICogdi5tWzFdWzNdICsgdGhpcy56ICogdi5tWzJdWzNdICsgdi5tWzNdWzNdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZlYzMoKHRoaXMueCAqIHYubVswXVswXSArIHRoaXMueSAqIHYubVsxXVswXSArIHRoaXMueiAqIHYubVsyXVswXSArIHYubVszXVswXSkgLyB3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy54ICogdi5tWzBdWzFdICsgdGhpcy55ICogdi5tWzFdWzFdICsgdGhpcy56ICogdi5tWzJdWzFdICsgdi5tWzNdWzFdKSAvIHcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnggKiB2Lm1bMF1bMl0gKyB0aGlzLnkgKiB2Lm1bMV1bMl0gKyB0aGlzLnogKiB2Lm1bMl1bMl0gKyB2Lm1bM11bMl0pIC8gdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XHJcbiAgICB9IC8vIEVuZCBvZiAnbXVsJyBmdW5jdGlvblxyXG5cclxuICAgIGRpdihuKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuID09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAvIG4sIHRoaXMueSAvIG4sIHRoaXMueiAvIG4pO1xyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gICAgfSAvLyBFbmQgb2YgJ2RpdicgZnVuY3Rpb25cclxuXHJcbiAgICBuZWcodikge1xyXG4gICAgICAgIHJldHVybiB2ZWMzKC10aGlzLngsIC0gdGhpcy55LCAtdGhpcy56KTtcclxuICAgIH0gLy8gRW5kIG9mICduZWcnIGZ1bmN0aW9uXHJcblxyXG4gICAgbGVuKCkge1xyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLm11bCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGxlbiA9PSAxIHx8IGxlbiA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbGVuO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQobGVuKTtcclxuICAgIH0gLy8gRW5kIG9mICdsZW4nIGZ1bmN0aW9uXHJcblxyXG4gICAgbGVuMigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWwodGhpcyk7XHJcbiAgICB9IC8vIEVuZCBvZiAnbGVuMicgZnVuY3Rpb25cclxuXHJcbiAgICBub3JtYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMubXVsKHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAobGVuICE9IDAgJiYgbGVuICE9IDEpIHtcclxuICAgICAgICAgICAgbGVuID0gTWF0aC5zcXJ0KGxlbik7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAvIGxlbiwgdGhpcy55IC8gbGVuLCB0aGlzLnogLyBsZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0gLy8gRW5kIG9mICdub3JtYWxpemUnIGZ1bmN0aW9uXHJcblxyXG4gICAgdHJhbnNmb3JtKHYpIHtcclxuICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKiB2Lm1bMF1bMF0gKyB0aGlzLnkgKiB2Lm1bMV1bMF0gKyB0aGlzLnogKiB2Lm1bMl1bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICogdi5tWzBdWzFdICsgdGhpcy55ICogdi5tWzFdWzFdICsgdGhpcy56ICogdi5tWzJdWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAqIHYubVswXVsyXSArIHRoaXMueSAqIHYubVsxXVsyXSArIHRoaXMueiAqIHYubVsyXVsyXSk7IFxyXG4gICAgfSAvLyBFbmQgb2YgJ3RyYW5zZm9ybScgZnVuY3Rpb25cclxuXHJcbiAgICBjcm9zcyh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHZlYzModGhpcy55ICogdi56IC0gdGhpcy56ICogdi55LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueiAqIHYueCAtIHRoaXMueCAqIHYueixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKiB2LnkgLSB0aGlzLnkgKiB2LngpO1xyXG4gICAgfSAvLyBFbmQgb2YnY3Jvc3MnIGZ1bmN0aW9uXHJcblxyXG4gICAgdmlldyhsb2MsIGF0LCB1cCkge1xyXG4gICAgICAgIGxldCBkaXIgPSBhdC5zdWIobG9jKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcmlnaHQgPSBkaXIuY3Jvc3ModXApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCB1cDEgPSByaWdodC5jcm9zcyhkaXIpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0NChyaWdodC54LCB1cDEueCwgLWRpci54LCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0LnksIHVwMS55LCAtZGlyLnksIDAsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0LnosIHVwMS56LCAtZGlyLnosIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgLXJpZ2h0Lm11bChsb2MpLCAtbG9jLm11bCh1cDEpLCBsb2MubXVsKGRpciksIDEpO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3ZpZXcnIGZ1bmN0aW9uXHJcbiAgICBcclxuICAgIGZydXN0dW0obCwgciwgYiwgdCwgbiwgZikge1xyXG4gICAgICAgIHJldHVybiBtYXQ0KCgyICogbikgLyAociAtIGwpLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAwLCAoMiAqIG4pIC8gKHQgLSBiKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgKHIgKyBsKSAvIChyIC0gbCksICh0ICsgYikgLyAodCAtIGIpLCAoLSgoZiArIG4pIC8gKGYgLSBuKSkpLCAoLTEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAwLCAwLCAoLSgoMiAqIG4gKiBmKSAvIChmIC0gbikpKSwgMCk7XHJcbiAgICB9IC8qIEVuZCBvZiAnZnJ1c3R1bScgZnVuY3Rpb24gKi9cclxuICAgICAgXHJcbiAgICBvcnRobyhsLCByLCBiLCB0LCBuLCBmKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdDQoMiAvIChyIC0gbCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMiAvICh0IC0gYiksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgKC0yKSAvIChmIC0gbiksIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgKC0oKHIgKyBsKSAvIChyIC0gbCkpKSwgKC0oKHQgKyBiKSAvICh0IC0gYikpKSwgKC0oKGYgKyBuKSAvIChmIC0gbikpKSwgMSk7XHJcbiAgICB9IC8vIEVuZiBvZiAnb3J0aG8nIGZ1bmN0aW9uXHJcbn0gLy8gRW5kIG9mICd2ZWMzJyBjbGFzc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlYzMoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIG5ldyBfdmVjMyguLi5hcmdzKTtcclxufSAvLyBFbmQgb2YgJ3ZlYzMnIGZ1bmN0aW9uIiwiY2xhc3MgX3ZlYzIge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgaWYgKHggPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgdGhpcy54ID0gMCwgdGhpcy55ID0gMDtcclxuICAgICAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ29iamVjdCcpXHJcbiAgICAgICAgICBpZiAoeC5sZW5ndGggPT0gMilcclxuICAgICAgICAgICAgICB0aGlzLnggPSB4WzBdLCB0aGlzLnkgPSB4WzFdO1xyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIHRoaXMueCA9IHgueCwgdGhpcy55ID0geC55O1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgICBpZiAoeSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geDtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICB0aGlzLnggPSB4LCB0aGlzLnkgPSB5O1xyXG4gICAgfSAvLyBFbmQgb2YgJ2NvbnN0cnVjdG9yJyBmdW5jdGlvblxyXG59IC8vIEVuZCBvZiAndmVjMicgY2xhc3NcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZWMyKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgX3ZlYzIoLi4uYXJncyk7XHJcbn0gLy8gRW5kIG9mICd2ZWMzJyBmdW5jdGlvbiIsImltcG9ydCB7IHZlYzMgfSBmcm9tICcuL3ZlYzMuanMnO1xyXG5pbXBvcnQgeyBtYXQ0IH0gZnJvbSAnLi9tYXQ0LmpzJztcclxuXHJcbmV4cG9ydCBsZXQgY2FtID0gMDtcclxuXHJcbmNsYXNzIGNhbWVyYSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoY2FudmFzKSB7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdGhpcy5mcmFtZUggPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wICsgMTtcclxuICAgICAgICB0aGlzLmZyYW1lVyA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQgKyAxO1xyXG4gICAgICAgIHRoaXMucHJvakRpc3QgPSAwLjE7XHJcbiAgICAgICAgdGhpcy5wcm9qU2l6ZSA9IDAuMTtcclxuICAgICAgICB0aGlzLmZhckNsaXAgPSAxMDAwMDtcclxuICAgICAgICB0aGlzLm1hdHJWaWV3ID0gdmVjMygpLnZpZXcodmVjMygpLCB2ZWMzKCksIHZlYzMoKSk7XHJcbiAgICAgICAgdGhpcy5sb2MgPSB2ZWMzKCk7XHJcbiAgICAgICAgdGhpcy5hdCA9IHZlYzMoKTtcclxuICAgICAgICB0aGlzLnVwID0gdmVjMygpO1xyXG4gICAgICAgIHRoaXMucHJvalNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2pTZXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucnggPSB0aGlzLnJ5ID0gdGhpcy5wcm9qU2l6ZTtcclxuXHJcbiAgICAgICAgLyogQ29ycmVjdCBhc3BlY3QgcmF0aW8gKi9cclxuICAgICAgICBpZiAodGhpcy5mcmFtZVcgPj0gdGhpcy5mcmFtZUgpXHJcbiAgICAgICAgdGhpcy5yeCAqPSB0aGlzLmZyYW1lVyAvIHRoaXMuZnJhbWVIO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLnJ5ICo9IHRoaXMuZnJhbWVIIC8gdGhpcy5mcmFtZVc7XHJcblxyXG4gICAgICAgIHRoaXMubWF0clByb2ogPVxyXG4gICAgICAgIHZlYzMoKS5mcnVzdHVtKC10aGlzLnJ4IC8gMiwgdGhpcy5yeCAvIDIsIC10aGlzLnJ5IC8gMiwgdGhpcy5yeSAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMucHJvakRpc3QsIHRoaXMuZmFyQ2xpcCk7XHJcbiAgICAgICAgdGhpcy5tYXRyVlAgPSB0aGlzLm1hdHJWaWV3Lm11bCh0aGlzLm1hdHJQcm9qKTtcclxuICAgIH0gLy8gRW5kIG9mICdwcm9qc2V0JyBmdW5jdGlvblxyXG5cclxuICAgIHNldChsb2MsIGF0LCB1cCkge1xyXG4gICAgICAgIHRoaXMubWF0clZpZXcgPSB2ZWMzKCkudmlldyhsb2MsIGF0LCB1cCk7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaHQgPSB2ZWMzKHRoaXMubWF0clZpZXcubVswXVswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHJWaWV3Lm1bMV1bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyVmlldy5tWzJdWzBdKTtcclxuICAgICAgICB0aGlzLnVwID0gdmVjMyh0aGlzLm1hdHJWaWV3Lm1bMF1bMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyVmlldy5tWzFdWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0clZpZXcubVsyXVsxXSk7XHJcbiAgICAgICAgdGhpcy5kaXIgPSB2ZWMzKC10aGlzLm1hdHJWaWV3Lm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXRoaXMubWF0clZpZXcubVsxXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtdGhpcy5tYXRyVmlldy5tWzJdWzJdKTtcclxuICAgICAgICB0aGlzLmxvYyA9IGxvYztcclxuICAgICAgICB0aGlzLmF0ID0gYXQ7XHJcblxyXG4gICAgICAgIHRoaXMubWF0clZQID0gdGhpcy5tYXRyVmlldy5tdWwodGhpcy5tYXRyUHJvaik7XHJcbiAgICB9IC8vIEVuZCBvZiAnRVA0X1JuZENhbVNldCcgZnVuY3Rpb25cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbUNyZWF0ZSAoY2FudmFzKSB7XHJcbiAgICBjYW0gPSBuZXcgY2FtZXJhKGNhbnZhcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1TZXQgKGxvYywgYXQsIHVwKSB7XHJcbiAgICBjYW0uc2V0KGxvYywgYXQsIHVwKTtcclxufSIsImxldCB2c190eHQgPVxyXG5gI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuaW4gdmVjMyBJblBvc2l0aW9uO1xyXG5pbiB2ZWMzIEluTm9ybWFsO1xyXG4gICAgXHJcbm91dCB2ZWMzIERyYXdQb3M7XHJcbm91dCB2ZWMzIERyYXdOb3JtYWw7XHJcbnVuaWZvcm0gZmxvYXQgVGltZTtcclxuXHJcbnVuaWZvcm0gbWF0NCBNYXRyVmlldztcclxudW5pZm9ybSBtYXQ0IE1hdHJWUDtcclxudW5pZm9ybSBtYXQ0IE1hdHJXb3JsZDtcclxuXHJcbnVuaWZvcm0gRnJhbWVCdWZmZXJcclxueyAgXHJcbiAgICB2ZWM0IERhdGE7XHJcbn07XHJcblxyXG52b2lkIG1haW4oIHZvaWQgKVxyXG57XHJcbiAgICBnbF9Qb3NpdGlvbiA9IE1hdHJWUCAqIE1hdHJXb3JsZCAqIHZlYzQoSW5Qb3NpdGlvbiwgMS4wKTtcclxuICAgIERyYXdQb3MgPSB2ZWMzKE1hdHJXb3JsZCAqIHZlYzQoSW5Qb3NpdGlvbiwgMSkpO1xyXG4gICAgRHJhd05vcm1hbCA9IEluTm9ybWFsO1xyXG59XHJcbmA7XHJcbmxldCBmc190eHQgPVxyXG5gI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxub3V0IHZlYzQgT3V0Q29sb3I7XHJcblxyXG5pbiB2ZWMzIERyYXdQb3M7XHJcbmluIHZlYzMgRHJhd05vcm1hbDtcclxudW5pZm9ybSBmbG9hdCBUaW1lO1xyXG51bmlmb3JtIHZlYzMgQ2FtTG9jO1xyXG5cclxudW5pZm9ybSBGcmFtZUJ1ZmZlclxyXG57XHJcbiAgICB2ZWM0IERhdGE7XHJcbn07XHJcblxyXG52b2lkIG1haW4oIHZvaWQgKVxyXG57XHJcbiAgICB2ZWMzIFYgPSBub3JtYWxpemUoRHJhd1BvcyAtIENhbUxvYyk7XHJcbiAgICB2ZWMzIE4gPSBub3JtYWxpemUoRHJhd05vcm1hbCk7XHJcbiAgICB2ZWMzIEwgPSBub3JtYWxpemUodmVjMygxLyogKyA4ICogc2luKFRpbWUgKiA1KSovLCAxLCAxKSk7XHJcbiAgICB2ZWMzIGNvbG9yID0gdmVjMygwLjIsIDAuMywgMC43KTtcclxuXHJcbiAgICBOID0gZmFjZWZvcndhcmQoTiwgViwgTik7XHJcblxyXG4gICAgLy9EZWZ1c2VcclxuICAgIHZlYzMgS2REaWZmID0gdmVjMygwLjQsIDAuNCwgMC40KTtcclxuICAgIGNvbG9yICs9IEtkRGlmZiAqIG1heCgwLjEsIGRvdChOLCBMKSk7XHJcbiAgICAvL1NwZWN1bGFyXHJcbiAgICB2ZWMzIFIgPSByZWZsZWN0KFYsIE4pO1xyXG4gICAgY29sb3IgKz0gdmVjMygwLjEsIDAuMiwgMC4zKSAqIG1heCgwLjAsIHBvdyhkb3QoUiwgTCksIDEuMCkpO1xyXG5cclxuICAgIGlmIChwb3coYWJzKHNpbihUaW1lICsgRHJhd1Bvcy54ICogMC43KSksIDIwMDAuMCkgPiAwLjMgfHwgXHJcbiAgICAgICAgcG93KGFicyhzaW4oVGltZSArIERyYXdQb3MueiAqIDAuNykpLCAyMDAwLjApID4gMC4zKVxyXG4gICAgICAgIGNvbG9yID0gdmVjMygwLCAxLCAwKTtcclxuICAgIC8vY29sb3IgKz0gdmVjMygwLCAxLCAwKSAqIHBvdyhhYnMoc2luKFRpbWUgKyBEcmF3UG9zLnggKiAwLjcpKSwgMjAwMC4wKTtcclxuXHJcbiAgICBPdXRDb2xvciA9IHZlYzQoY29sb3IsIDEpO1xyXG5cclxuICAgIC8vdmVjMyBOID0gRHJhd05vcm1hbDtcclxuICAgIC8vT3V0Q29sb3IgPSB2ZWM0KERyYXdQb3MueHl5ICsgRHJhd1Bvcy54eHksIDEuMCk7XHJcbiAgICAvL091dENvbG9yID0gdmVjNChOLCAxLjApO1xyXG59XHJcbmA7XHJcblxyXG5sZXQgdnNfdHh0MSA9XHJcbmAjdmVyc2lvbiAzMDAgZXNcclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG5pbiB2ZWMzIEluUG9zaXRpb247XHJcbmluIHZlYzIgRHJhd1RleENvb3JkO1xyXG5pbiB2ZWMzIEluTm9ybWFsO1xyXG4gICAgXHJcbm91dCB2ZWMzIERyYXdQb3M7XHJcbm91dCB2ZWMyIERyYXdUZXg7XHJcbm91dCB2ZWMzIERyYXdOb3JtYWw7XHJcbnVuaWZvcm0gZmxvYXQgVGltZTtcclxuXHJcbnVuaWZvcm0gbWF0NCBNYXRyVmlldztcclxudW5pZm9ybSBtYXQ0IE1hdHJWUDtcclxudW5pZm9ybSBtYXQ0IE1hdHJXb3JsZDtcclxuXHJcbnVuaWZvcm0gRnJhbWVCdWZmZXJcclxueyAgXHJcbiAgICB2ZWM0IERhdGE7XHJcbn07XHJcblxyXG52b2lkIG1haW4oIHZvaWQgKVxyXG57XHJcbiAgICBnbF9Qb3NpdGlvbiA9IE1hdHJWUCAqIE1hdHJXb3JsZCAqIHZlYzQoSW5Qb3NpdGlvbiwgMS4wKTtcclxuICAgIERyYXdQb3MgPSB2ZWMzKE1hdHJXb3JsZCAqIHZlYzQoSW5Qb3NpdGlvbiwgMSkpO1xyXG4gICAgRHJhd1RleCA9IERyYXdUZXhDb29yZDtcclxuICAgIERyYXdOb3JtYWwgPSBJbk5vcm1hbDtcclxufVxyXG5gO1xyXG5sZXQgZnNfdHh0MSA9XHJcbmAjdmVyc2lvbiAzMDAgZXNcclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG5vdXQgdmVjNCBPdXRDb2xvcjtcclxuXHJcbmluIHZlYzMgRHJhd1BvcztcclxuaW4gdmVjMiBEcmF3VGV4O1xyXG5pbiB2ZWMzIERyYXdOb3JtYWw7XHJcbnVuaWZvcm0gZmxvYXQgVGltZTtcclxudW5pZm9ybSB2ZWMzIENhbUxvYztcclxuXHJcbnVuaWZvcm0gc2FtcGxlcjJEIFRleDtcclxuXHJcbnVuaWZvcm0gRnJhbWVCdWZmZXJcclxue1xyXG4gICAgdmVjNCBEYXRhO1xyXG59O1xyXG5cclxudmVjMiByb3QoIGZsb2F0IGEsIHZlYzIgdiApXHJcbntcclxuICBmbG9hdCBzID0gc2luKGEpLCBjID0gY29zKGEpO1xyXG5cclxuICByZXR1cm4gdmVjMihkb3QodiwgdmVjMihjLCAtcykpLCBkb3QodiwgdmVjMihzLCBjKSkpO1xyXG59XHJcblxyXG5tYXQ0IE1hdHJTY2FsZSggdmVjMyB2IClcclxue1xyXG4gIHJldHVybiBtYXQ0KHYueCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAwLCB2LnksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgMCwgMCwgdi56LCAwLFxyXG4gICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG59XHJcblxyXG52b2lkIG1haW4oIHZvaWQgKVxyXG57XHJcbiAgICB2ZWMzIFYgPSBub3JtYWxpemUoRHJhd1BvcyAtIENhbUxvYyk7XHJcbiAgICB2ZWMzIE4gPSBub3JtYWxpemUoRHJhd05vcm1hbCk7XHJcbiAgICB2ZWMzIEwgPSBub3JtYWxpemUodmVjMygxLyogKyA4ICogc2luKFRpbWUgKiA1KSovLCAxLCAxKSk7XHJcbiAgICB2ZWMzIGNvbG9yID0gdmVjMygwLjIsIDAuMywgMC43KTtcclxuXHJcbiAgICBOID0gZmFjZWZvcndhcmQoTiwgViwgTik7XHJcblxyXG4gICAgLy9EZWZ1c2VcclxuICAgIHZlYzMgS2REaWZmID0gdmVjMygwLjQsIDAuNCwgMC40KTtcclxuICAgIGNvbG9yICs9IEtkRGlmZiAqIG1heCgwLjEsIGRvdChOLCBMKSk7XHJcbiAgICAvL1NwZWN1bGFyXHJcbiAgICB2ZWMzIFIgPSByZWZsZWN0KFYsIE4pO1xyXG4gICAgY29sb3IgKz0gdmVjMygwLjEsIDAuMiwgMC4zKSAqIG1heCgwLjAsIHBvdyhkb3QoUiwgTCksIDEuMCkpO1xyXG5cclxuICAgIGlmIChwb3coYWJzKHNpbihUaW1lICsgRHJhd1Bvcy54ICogMC43KSksIDIwMDAuMCkgPiAwLjMgfHwgXHJcbiAgICAgICAgcG93KGFicyhzaW4oVGltZSArIERyYXdQb3MueiAqIDAuNykpLCAyMDAwLjApID4gMC4zKVxyXG4gICAgICAgIGNvbG9yID0gdmVjMygwLCAxLCAwKTtcclxuICAgIC8vY29sb3IgKz0gdmVjMygwLCAxLCAwKSAqIHBvdyhhYnMoc2luKFRpbWUgKyBEcmF3UG9zLnggKiAwLjcpKSwgMjAwMC4wKTtcclxuXHJcbiAgICBPdXRDb2xvciA9IHZlYzQoY29sb3IsIDEpO1xyXG5cclxuICAgIC8vdmVjMyBOID0gRHJhd05vcm1hbDtcclxuICAgIC8vT3V0Q29sb3IgPSB2ZWM0KERyYXdQb3MueHl5ICsgRHJhd1Bvcy54eHksIDEuMCk7XHJcbiAgICAvL091dENvbG9yID0gdmVjNChOLCAxLjApO1xyXG5cclxuICAgIHZlYzQgdGMgPSB0ZXh0dXJlKFRleCwgdmVjMih2ZWM0KERyYXdUZXgsIDAuMCwgMC4wKSAqIE1hdHJTY2FsZSh2ZWMzKDEwKSkpKTsvL3JvdCgxMDAuMCwgKDEuMCAtIERyYXdUZXgpICogKDUuMCArIDMuMCAqIHNpbihUaW1lKSkpKTtcclxuICAgIE91dENvbG9yID0gdmVjNCh0Yy5yZ2IsIDEpO1xyXG59XHJcbmA7XHJcblxyXG5jbGFzcyBTaGFkZXIge1xyXG4gICAgY29uc3RydWN0b3IoZ2wsIHZzX3R4dCwgZnNfdHh0KSB7XHJcbiAgICAgICAgLy8gTG9hZCBhbmQgY29tcGlsZSBzaGFkZXIgZnVuY3Rpb25cclxuICAgICAgICBjb25zdCBsb2FkU2hhZGVyID0gKHNoYWRlclR5cGUsIHNoYWRlclNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSk7XHJcbiAgICAgICAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XHJcbiAgICAgICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgbGV0IGJ1ZiA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoYWRlciBjb21waWxlIGZhaWw6ICcgKyBidWYpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgICAgICB9IC8vIEVuZCBvZiAnbG9hZFNoYWRlcicgZnVuY3Rpb25cclxuICAgIFxyXG4gICAgICAgIC8vIFNoYWRlciBjcmVhdGlvblxyXG4gICAgICAgIHRoaXMudnMgPSBsb2FkU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIsIHZzX3R4dCksXHJcbiAgICAgICAgdGhpcy5mcyA9IGxvYWRTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSLCBmc190eHQpLFxyXG4gICAgICAgIHRoaXMucHJnID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByZywgdGhpcy52cyk7XHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJnLCB0aGlzLmZzKTtcclxuICAgICAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLnByZyk7XHJcbiAgICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJnLCBnbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgICAgbGV0IGJ1ZiA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMucHJnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoYWRlciBwcm9ncmFtIGxpbmsgZmFpbDogJyArIGJ1Zik7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2hhZGVycyhnbCwgbmFtZSkge1xyXG4gICAgaWYgKG5hbWUgPT0gXCJkZWZhdWx0XCIpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTaGFkZXIoZ2wsIHZzX3R4dCwgZnNfdHh0KTtcclxuICAgIGlmIChuYW1lID09IFwicXVhZFwiKVxyXG4gICAgICAgIHJldHVybiBuZXcgU2hhZGVyKGdsLCB2c190eHQxLCBmc190eHQxKTtcclxufSIsImNsYXNzIF90ZXh0dXJlIHtcclxuICBjb25zdHJ1Y3RvcihnbCwgbmFtZVVSTCwgdGV4dHVyZVR5cGUgPSBcIjJkXCIpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWVVUkwubmFtZTtcclxuICAgIHRoaXMudHlwZSA9IGdsLlRFWFRVUkVfMkQ7XHJcbiAgICB0aGlzLmlkID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgZ2wuYmluZFRleHR1cmUodGhpcy50eXBlLCB0aGlzLmlkKTtcclxuICAgIGlmIChuYW1lVVJMLmltZykge1xyXG4gICAgICBnbC50ZXhJbWFnZTJEKHRoaXMudHlwZSwgMCwgZ2wuUkdCQSwgMSwgMSwgMCwgZ2wuUkdCQSxcclxuICAgICAgICAgICAgICAgICAgICBnbC5VTlNJR05FRF9CWVRFLCBuZXcgVWludDhBcnJheShbMjU1LCAyNTUsIDI1NSwgMF0pKTtcclxuICAgICAgbmFtZVVSTC5pbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKHRoaXMudHlwZSwgdGhpcy5pZCk7XHJcbiAgICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XHJcbiAgICAgICAgZ2wudGV4SW1hZ2UyRCh0aGlzLnR5cGUsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lVVJMLmltZyk7XHJcbiAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAodGhpcy50eXBlKTtcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKHRoaXMudHlwZSwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLlJFUEVBVCk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaSh0aGlzLnR5cGUsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5SRVBFQVQpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkodGhpcy50eXBlLCBnbC5URVhUVVJFX01JTl9GSUxURVIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSKTtcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKHRoaXMudHlwZSwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICB9XHJcbiAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyAwKTtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiBcclxuZXhwb3J0IGZ1bmN0aW9uIHRleHR1cmUoLi4uYXJncykge1xyXG4gIC8qLiAuIC4qL1xyXG4gIHJldHVybiBuZXcgX3RleHR1cmUoLi4uYXJncyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdmVjMiwgdmVjMywgbWF0NCB9IGZyb20gXCIuLi8uLi9tdGgvbWF0aC5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkU2hhZGVycyB9IGZyb20gXCIuL3Jlcy9zaGRzLmpzXCI7XHJcblxyXG5jbGFzcyB2ZXJ0ZXgge1xyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBub3JtYWwsIHRleENvb3JkKSB7XHJcbiAgICB0aGlzLnBvcyA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5ub3JtID0gbm9ybWFsO1xyXG4gICAgdGhpcy50ZXhDb29yZCA9IHRleENvb3JkO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmVydChwb3NpdGlvbiwgbm9ybWFsLCB0ZXhDb29yZCkge1xyXG4gIHJldHVybiBuZXcgdmVydGV4KHBvc2l0aW9uLCBub3JtYWwsIHRleENvb3JkKTtcclxufVxyXG5cclxuY2xhc3MgUHJpbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhBcnJheSwgaW5kZXhBcnJheSwgbnVtT2ZFbGVtZW50cywgbWF0cldvcmxkLCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy52ZXJ0ZXhBcnJheSA9IHZlcnRleEFycmF5O1xyXG4gICAgICAgIHRoaXMudmVydGV4QXR0cmliQXJyYXkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmVydGV4QnVmZmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluZGV4QXJyYXkgPSBpbmRleEFycmF5O1xyXG4gICAgICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubnVtT2ZFbGVtZW50cyA9IG51bU9mRWxlbWVudHM7XHJcbiAgICAgICAgdGhpcy5tYXRyV29ybGQgPSBtYXRyV29ybGQ7XHJcbiAgICAgICAgdGhpcy5zaGRzID0gMDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcmltKHZlcnRleEFycmF5LCBpbmRleEFycmF5LCBudW1PZkVsZW1lbnRzLCBtYXRyV29ybGQsIG5hbWUpIHtcclxuICByZXR1cm4gbmV3IFByaW0odmVydGV4QXJyYXksIGluZGV4QXJyYXksIG51bU9mRWxlbWVudHMsIG1hdHJXb3JsZCwgbmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1YmVGYWNldHMoc2l6ZSwgcG9zKSB7XHJcbiAgICBsZXQgcCA9IFtdOyBcclxuICAgIHBbMF0gPSB2ZXJ0KHBvcy5hZGQodmVjMyhzaXplIC8gMiwgMCwgLXNpemUgLyAyKSkpLFxyXG4gICAgcFsxXSA9IHZlcnQocG9zLmFkZCh2ZWMzKC1zaXplIC8gMiwgc2l6ZSwgLXNpemUgLyAyKSkpLFxyXG4gICAgcFsyXSA9IHZlcnQocG9zLmFkZCh2ZWMzKC1zaXplIC8gMiwgMCwgc2l6ZSAvIDIpKSksXHJcbiAgICBwWzNdID0gdmVydChwb3MuYWRkKHZlYzMoLXNpemUgLyAyLCAwLCAtc2l6ZSAvIDIpKSksXHJcbiAgICBwWzRdID0gdmVydChwb3MuYWRkKHZlYzMoc2l6ZSAvIDIsIHNpemUsIC1zaXplIC8gMikpKSxcclxuICAgIHBbNV0gPSB2ZXJ0KHBvcy5hZGQodmVjMyhzaXplIC8gMiwgMCwgc2l6ZSAvIDIpKSksXHJcbiAgICBwWzZdID0gdmVydChwb3MuYWRkKHZlYzMoc2l6ZSAvIDIsIHNpemUsIHNpemUgLyAyKSkpLFxyXG4gICAgcFs3XSA9IHZlcnQocG9zLmFkZCh2ZWMzKC1zaXplIC8gMiwgc2l6ZSwgc2l6ZSAvIDIpKSk7XHJcbiAgICBsZXQgaW5kID0gWzMsIDEsIDAsXHJcbiAgICAgICAgICAgICAgIDAsIDEsIDQsXHJcbiAgICAgICAgICAgICAgIDYsIDUsIDAsXHJcbiAgICAgICAgICAgICAgIDYsIDAsIDQsXHJcbiAgICAgICAgICAgICAgIDcsIDIsIDUsXHJcbiAgICAgICAgICAgICAgIDcsIDUsIDYsXHJcbiAgICAgICAgICAgICAgIDEsIDMsIDIsXHJcbiAgICAgICAgICAgICAgIDEsIDIsIDcsXHJcbiAgICAgICAgICAgICAgIDcsIDYsIDQsXHJcbiAgICAgICAgICAgICAgIDcsIDQsIDEsXHJcbiAgICAgICAgICAgICAgIDUsIDIsIDMsXHJcbiAgICAgICAgICAgICAgIDUsIDMsIDBdO1xyXG5cclxuICAgIHJldHVybiBjcmVhdGVQcmltKHAsIGluZCwgbnVsbCwgbnVsbCwgXCJjdWJlXCIpOyBcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUXVhZEZhY2V0cyhzaXplLCBwb3MpIHtcclxuICBsZXQgcCA9IFtdO1xyXG4gIHBbMF0gPSB2ZXJ0KHBvcy5hZGQodmVjMygtc2l6ZSAvIDIsIDAsIC1zaXplIC8gMikpLCB2ZWMzKCksIHZlYzIoMCwgMCkpLFxyXG4gIHBbMV0gPSB2ZXJ0KHBvcy5hZGQodmVjMygtc2l6ZSAvIDIsIDAsIHNpemUgLyAyKSksIHZlYzMoKSwgdmVjMigxLCAwKSksXHJcbiAgcFsyXSA9IHZlcnQocG9zLmFkZCh2ZWMzKHNpemUgLyAyLCAwLCAtc2l6ZSAvIDIpKSwgdmVjMygpLCB2ZWMyKDAsIDEpKSxcclxuICBwWzNdID0gdmVydChwb3MuYWRkKHZlYzMoc2l6ZSAvIDIsIDAsIHNpemUgLyAyKSksIHZlYzMoKSwgdmVjMigxLCAxKSk7XHJcbiAgbGV0IGluZCA9IFsyLCAwLCAxLFxyXG4gICAgICAgICAgICAgMiwgMSwgM107XHJcbiAgcmV0dXJuIGNyZWF0ZVByaW0ocCwgaW5kLCBudWxsLCBudWxsLCBcInF1YWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5vcm1hbHMocHJpbSlcclxue1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgKHByaW0ubmFtZSA9PSBcImN1YmVcIiA/IDggOiA0KS8qcHJpbS5udW1PZlBvaW50cyovOyBpKyspXHJcbiAgICBwcmltLnZlcnRleEFycmF5W2ldLm5vcm0gPSB2ZWMzKDApO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgKHByaW0ubmFtZSA9PSBcImN1YmVcIiA/IDEyIDogMikvKnByaW0ubnVtT2ZFbGVtZW50cyovOyBpKyspXHJcbiAge1xyXG4gICAgbGV0IGkwID0gcHJpbS5pbmRleEFycmF5W2kgKiAzXSwgaTEgPSBwcmltLmluZGV4QXJyYXlbaSAqIDMgKyAxXSwgaTIgPSBwcmltLmluZGV4QXJyYXlbaSAqIDMgKyAyXTtcclxuICAgIGxldCBwMDEgPSBwcmltLnZlcnRleEFycmF5W2kxXS5wb3Muc3ViKHByaW0udmVydGV4QXJyYXlbaTBdLnBvcyksIFxyXG4gICAgICAgIHAwMiA9IHByaW0udmVydGV4QXJyYXlbaTJdLnBvcy5zdWIocHJpbS52ZXJ0ZXhBcnJheVtpMF0ucG9zKTtcclxuICAgIGxldCBub3JtYWwgPSBwMDEuY3Jvc3MocDAyKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICBwcmltLnZlcnRleEFycmF5W2kwXS5ub3JtID0gcHJpbS52ZXJ0ZXhBcnJheVtpMF0ubm9ybS5hZGQobm9ybWFsKTtcclxuICAgIHByaW0udmVydGV4QXJyYXlbaTFdLm5vcm0gPSBwcmltLnZlcnRleEFycmF5W2kxXS5ub3JtLmFkZChub3JtYWwpO1xyXG4gICAgcHJpbS52ZXJ0ZXhBcnJheVtpMl0ubm9ybSA9IHByaW0udmVydGV4QXJyYXlbaTJdLm5vcm0uYWRkKG5vcm1hbCk7XHJcbiAgfVxyXG4gIHJldHVybiBwcmltO1xyXG59IC8vIEVuZCBvZiAnQ3JlYXRlTm9ybWFscycgZnVuY3Rpb25cclxuXHJcbmZ1bmN0aW9uIHZlYzNUb0FycmF5KGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBbZWxlbWVudC54LCBlbGVtZW50LnksIGVsZW1lbnQuel07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlYzJUb0FycmF5KGVsZW1lbnQpIHtcclxuICBpZiAoZWxlbWVudCAhPSB1bmRlZmluZWQpXHJcbiAgICByZXR1cm4gW2VsZW1lbnQueCwgZWxlbWVudC55XTtcclxuICBlbHNlXHJcbiAgcmV0dXJuIFswLCAwXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVmVydEZyb21GYWNldHMocHJpbSkge1xyXG4gICAgbGV0IGZhY2V0cyA9IHByaW0udmVydGV4QXJyYXk7XHJcbiAgICBsZXQgdmVydEFycmF5ID0gW107XHJcbiAgICBsZXQgY250ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpIG9mIGZhY2V0cylcclxuICAgIHtcclxuICAgICAgICB2ZXJ0QXJyYXkgPSB2ZXJ0QXJyYXkuY29uY2F0KHZlYzNUb0FycmF5KGkucG9zKS5jb25jYXQodmVjM1RvQXJyYXkoaS5ub3JtKSkuY29uY2F0KHZlYzJUb0FycmF5KGkudGV4Q29vcmQpKSk7XHJcbiAgICAgICAgY250Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlUHJpbSh2ZXJ0QXJyYXksIHByaW0uaW5kZXhBcnJheSwgY250LCBtYXQ0KCksIHByaW0ubmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdWJlKHNpemUsIHBvcykge1xyXG4gICByZXR1cm4gY3JlYXRlVmVydEZyb21GYWNldHMoY3JlYXRlTm9ybWFscyhjcmVhdGVDdWJlRmFjZXRzKHNpemUsIHBvcykpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1YWQoc2l6ZSwgcG9zKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVZlcnRGcm9tRmFjZXRzKGNyZWF0ZU5vcm1hbHMoY3JlYXRlUXVhZEZhY2V0cyhzaXplLCBwb3MpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWZMb2FkKGdsLCBwcmltKSB7XHJcbiAgICBnbC51c2VQcm9ncmFtKHByaW0uc2hkcy5wcmcpO1xyXG4gICAgLy8gTG9hZGluZyB0byBzaGFkZXIgdmVydGV4IGFycmF5XHJcbiAgICBjb25zdCBwb3NMb2MgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcmltLnNoZHMucHJnLCBcIkluUG9zaXRpb25cIik7XHJcbiAgICBjb25zdCB0ZXhMb2MgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcmltLnNoZHMucHJnLCBcIkRyYXdUZXhDb29yZFwiKTtcclxuICAgIGNvbnN0IG5vcm1Mb2MgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcmltLnNoZHMucHJnLCBcIkluTm9ybWFsXCIpO1xyXG4gICAgcHJpbS52ZXJ0ZXhBdHRyaWJBcnJheSA9IGdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XHJcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkocHJpbS52ZXJ0ZXhBdHRyaWJBcnJheSk7XHJcbiAgICBwcmltLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHByaW0udmVydGV4QnVmZmVyKTtcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHByaW0udmVydGV4QXJyYXkpLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICBpZiAocG9zTG9jICE9IC0xKSB7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocG9zTG9jLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDQgKiAzICogMiArIDQgKiAyLCAwKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zTG9jKTtcclxuICAgIH1cclxuICAgIGlmIChub3JtTG9jICE9IC0xKSB7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIobm9ybUxvYywgMywgZ2wuRkxPQVQsIGZhbHNlLCA0ICogMyAqIDIgKyA0ICogMiwgNCAqIDMpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShub3JtTG9jKTtcclxuICAgIH1cclxuICAgIGlmICh0ZXhMb2MgIT0gLTEpIHtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0ZXhMb2MsIDMsIGdsLkZMT0FULCBmYWxzZSwgNCAqIDMgKiAyICsgNCAqIDIsIDQgKiAzICogMik7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleExvYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZGluZyB0byBzaGFkZXIgaW5kZXggYXJyYXlcclxuICAgIHByaW0uaW5kZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHByaW0uaW5kZXhCdWZmZXIpO1xyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQzMkFycmF5KHByaW0uaW5kZXhBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpZ3VyZShybmQsIGZpZ3VyZU5hbWUsIHNoZE5hbWUsIHNpemUsIHBvcykge1xyXG4gIGxldCBwcmltO1xyXG5cclxuICBpZiAoZmlndXJlTmFtZSA9PSBcImN1YmVcIilcclxuICAgIHByaW0gPSBjcmVhdGVDdWJlKHNpemUsIHBvcyk7XHJcbiAgZWxzZVxyXG4gICAgcHJpbSA9IGNyZWF0ZVF1YWQoc2l6ZSwgcG9zKTtcclxuICAvLyBMb2FkaW5nIHNoYWRlclxyXG4gIHByaW0uc2hkcyA9IGxvYWRTaGFkZXJzKHJuZC5nbCwgc2hkTmFtZSk7XHJcbiAgYnVmTG9hZChybmQuZ2wsIHByaW0pO1xyXG5cclxuICByZXR1cm4gcHJpbTtcclxufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVGltZXIgY2xhc3MgbW9kdWxlXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gdXNhZ2U6XHJcbi8vIEhUTUw6XHJcbi8vICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cclxuLy8gICAgaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4vdGltZXIuanNcIlxyXG4vLyAgICBsZXQgbXlUaW1lciA9IG5ldyBUaW1lcigpO1xyXG4vLyAgICAuIC4gLlxyXG4vLyAgICBteVRpbWVyLnJlc3BvbnNlKCk7XHJcbi8vICAgIGxldCB0aW1lID0gbXlUaW1lci5sb2NhbFRpbWU7IC8vXHJcbi8vICAgIGlmIChteVRpbWVyLmlzUGF1c2UpXHJcbi8vICAgICAgLiAuIC5cclxuLy8gICAgbXlUaW1lci5pc1BhdXNlID0gIW15VGltZXIuaXNQYXVzZTtcclxuLy8gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZwcycpLmlubmVySFRNTCA9IG15VGltZXIuZ2V0RlBTKCk7XHJcbi8vICAgICAgb3IgbXlUaW1lci5yZXNwb25zZSgnZnBzJyk7IC0tIHVwZGF0ZSBGUFMgYXV0b21hdGljYWxseVxyXG4vLyAgPC9zY3JwdD5cclxuIFxyXG4vLyBUaW1lciBjbGFzcyBjb25zdHJ1Y3RvciBmdW5jdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoKSB7XHJcbiAgLy8gVGltZXIgb2J0YWluIGN1cnJlbnQgdGltZSBpbiBzZWNvbmRzIG1ldGhvZFxyXG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCB0ID1cclxuICAgICAgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMDAuMCArXHJcbiAgICAgIGRhdGUuZ2V0U2Vjb25kcygpICtcclxuICAgICAgZGF0ZS5nZXRNaW51dGVzKCkgKiA2MDtcclxuICAgIHJldHVybiB0O1xyXG4gIH07XHJcbiBcclxuICAvLyBUaW1lciByZXNwb25zZSBtZXRob2RcclxuICB0aGlzLnJlc3BvbnNlID0gKHRhZ19pZCA9IG51bGwpID0+IHtcclxuICAgIGxldCB0ID0gZ2V0VGltZSgpO1xyXG4gICAgLy8gR2xvYmFsIHRpbWVcclxuICAgIHRoaXMuZ2xvYmFsVGltZSA9IHQ7XHJcbiAgICB0aGlzLmdsb2JhbERlbHRhVGltZSA9IHQgLSB0aGlzLm9sZFRpbWU7XHJcbiAgICAvLyBUaW1lIHdpdGggcGF1c2VcclxuICAgIGlmICh0aGlzLmlzUGF1c2UpIHtcclxuICAgICAgdGhpcy5sb2NhbERlbHRhVGltZSA9IDA7XHJcbiAgICAgIHRoaXMucGF1c2VUaW1lICs9IHQgLSB0aGlzLm9sZFRpbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvY2FsRGVsdGFUaW1lID0gdGhpcy5nbG9iYWxEZWx0YVRpbWU7XHJcbiAgICAgIHRoaXMubG9jYWxUaW1lID0gdCAtIHRoaXMucGF1c2VUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9XHJcbiAgICAvLyBGUFNcclxuICAgIHRoaXMuZnJhbWVDb3VudGVyKys7XHJcbiAgICBpZiAodCAtIHRoaXMub2xkVGltZUZQUyA+IDMpIHtcclxuICAgICAgdGhpcy5GUFMgPSB0aGlzLmZyYW1lQ291bnRlciAvICh0IC0gdGhpcy5vbGRUaW1lRlBTKTtcclxuICAgICAgdGhpcy5vbGRUaW1lRlBTID0gdDtcclxuICAgICAgdGhpcy5mcmFtZUNvdW50ZXIgPSAwO1xyXG4gICAgICBpZiAodGFnX2lkICE9IG51bGwpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKS5pbm5lckhUTUwgPSB0aGlzLmdldEZQUygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbGRUaW1lID0gdDtcclxuICB9O1xyXG4gXHJcbiAgLy8gT2J0YWluIEZQUyBhcyBzdHJpbmcgbWV0aG9kXHJcbiAgdGhpcy5nZXRGUFMgPSAoKSA9PiB0aGlzLkZQUy50b0ZpeGVkKDMpO1xyXG4gXHJcbiAgLy8gRmlsbCB0aW1lciBnbG9iYWwgZGF0YVxyXG4gIHRoaXMuZ2xvYmFsVGltZSA9IHRoaXMubG9jYWxUaW1lID0gZ2V0VGltZSgpO1xyXG4gIHRoaXMuZ2xvYmFsRGVsdGFUaW1lID0gdGhpcy5sb2NhbERlbHRhVGltZSA9IDA7XHJcbiBcclxuICAvLyBGaWxsIHRpbWVyIHNlbWkgZ2xvYmFsIGRhdGFcclxuICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMub2xkVGltZSA9IHRoaXMub2xkVGltZUZQUyA9IHRoaXMuZ2xvYmFsVGltZTtcclxuICB0aGlzLmZyYW1lQ291bnRlciA9IDA7XHJcbiAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XHJcbiAgdGhpcy5GUFMgPSAzMC4wO1xyXG4gIHRoaXMucGF1c2VUaW1lID0gMDtcclxuIFxyXG4gIHJldHVybiB0aGlzO1xyXG59IC8vIEVuZCBvZiAnVGltZXInIGZ1bmN0aW9uXHJcbiIsImltcG9ydCB7Y2FtLCBjYW1TZXQsIG1hdDQsIHZlYzN9IGZyb20gXCIuLi9tdGgvbWF0aC5qc1wiO1xyXG4gXHJcbmNvbnN0IEQyUiA9IGRlZ3JlZXMgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbmNvbnN0IFIyRCA9IHJhZGlhbnMgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XHJcbiBcclxuZnVuY3Rpb24gZGlzdGFuY2UocDEsIHAyKSB7XHJcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMS5jbGllbnRYIC0gcDIuY2xpZW50WCwgMikgKyBNYXRoLnBvdyhwMS5jbGllbnRZIC0gcDIuY2xpZW50WSwgMikpO1xyXG59XHJcblxyXG5jbGFzcyBfZGlyIHtcclxuICBjb25zdHJ1Y3Rvcih1cCwgcmlnaHQsIGZvcndhcmQsIHBvcykge1xyXG4gICAgdGhpcy51cCA9IHVwO1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy5mb3J3YXJkID0gZm9yd2FyZDtcclxuICAgIHRoaXMucG9zID0gcG9zO1xyXG4gIH1cclxufVxyXG5cclxubGV0IG1vZGVsID0gbmV3IF9kaXIodmVjMygwLCAxLCAwKSwgdmVjMygtMSwgMCwgMCksIHZlYzMoMCwgMCwgMSksIHZlYzMoMCkpO1xyXG5cclxuZXhwb3J0IGNsYXNzIGlucHV0IHtcclxuICBjb25zdHJ1Y3RvcihybmQpIHtcclxuICAgIC8vZ2wuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMub25DbGljayhlKSk7XHJcbiAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB0aGlzLm9uTW91c2VNb3ZlKGUpKTtcclxuICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIChlKSA9PiB0aGlzLm9uTW91c2VXaGVlbChlKSk7XHJcbiAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcclxuICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB0aGlzLm9uTW91c2VVcChlKSk7XHJcbiAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB0aGlzLm9uVG91Y2hTdGFydChlKSk7XHJcbiAgICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHRoaXMub25Ub3VjaE1vdmUoZSkpO1xyXG4gICAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHRoaXMub25Ub3VjaEVuZChlKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMub25LZXlEb3duKGUpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB0aGlzLm9uS2V5VXAoZSkpO1xyXG4gICAgXHJcbiAgICB0aGlzLm1YID0gMDtcclxuICAgIHRoaXMubVkgPSAwO1xyXG4gICAgdGhpcy5tWiA9IDA7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiAgICB0aGlzLm1CdXR0b25zID0gWzAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5tQnV0dG9uc09sZCA9IFswLCAwLCAwLCAwLCAwXTtcclxuICAgIHRoaXMubUJ1dHRvbnNDbGljayA9IFswLCAwLCAwLCAwLCAwXTtcclxuICAgIFxyXG4gICAgLy8gWm9vbSBzcGVjaWZpY1xyXG4gICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmRpc3QgPSAwO1xyXG4gICAgdGhpcy5zY2FsZV9mYWN0b3IgPSAxLjA7XHJcbiAgICB0aGlzLmN1cnJfc2NhbGUgPSAxLjA7XHJcbiAgICB0aGlzLm1heF96b29tID0gOC4wO1xyXG4gICAgdGhpcy5taW5fem9vbSA9IDAuNTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB0aGlzLmtleXMgPSBbXTtcclxuICAgIHRoaXMua2V5c09sZCA9IFtdO1xyXG4gICAgdGhpcy5rZXlzQ2xpY2sgPSBbXTtcclxuICAgIFtcclxuICAgICAgXCJFbnRlclwiLCBcIkJhY2tzcGFjZVwiLFxyXG4gICAgICBcIkRlbGV0ZVwiLCBcIlNwYWNlXCIsIFwiVGFiXCIsIFwiRXNjYXBlXCIsIFwiQXJyb3dMZWZ0XCIsIFwiQXJyb3dVcFwiLCBcIkFycm93UmlnaHRcIixcclxuICAgICAgXCJBcnJvd0Rvd25cIiwgXCJTaGlmdFwiLCBcIkNvbnRyb2xcIiwgXCJBbHRcIiwgXCJTaGlmdExlZnRcIiwgXCJTaGlmdFJpZ2h0XCIsIFwiQ29udHJvbExlZnRcIixcclxuICAgICAgXCJDb250cm9sUmlnaHRcIiwgXCJQYWdlVXBcIiwgXCJQYWdlRG93blwiLCBcIkVuZFwiLCBcIkhvbWVcIixcclxuICAgICAgXCJEaWdpdDBcIiwgXCJEaWdpdDFcIixcclxuICAgICAgXCJLZXlBXCIsXHJcbiAgICAgIFwiTnVtcGFkMFwiLCBcIk51bXBhZE11bHRpcGx5XCIsXHJcbiAgICAgIFwiRjFcIixcclxuICAgIF0uZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICB0aGlzLmtleXNba2V5XSA9IDA7XHJcbiAgICAgIHRoaXMua2V5c09sZFtrZXldID0gMDtcclxuICAgICAgdGhpcy5rZXlzQ2xpY2tba2V5XSA9IDA7XHJcbiAgICB9KTtcclxuIFxyXG4gICAgdGhpcy5zaGlmdEtleSA9IGZhbHNlO1xyXG4gICAgdGhpcy5hbHRLZXkgPSBmYWxzZTtcclxuICAgIHRoaXMuY3RybEtleSA9IGZhbHNlO1xyXG4gXHJcbiAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gIH0gLy8gRW5kIG9mICdjb25zdHJ1Y3RvcicgZnVuY3Rpb25cclxuIFxyXG4gIC8vLyBNb3VzZSBoYW5kbGUgZnVuY3Rpb25zXHJcbiBcclxuICBvbkNsaWNrKGUpIHtcclxuICB9IC8vIEVuZCBvZiAnb25DbGljaycgZnVuY3Rpb25cclxuICBcclxuICBvblRvdWNoU3RhcnQoZSkge1xyXG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSlcclxuICAgICAgdGhpcy5tQnV0dG9uc1swXSA9IDE7XHJcbiAgICBlbHNlIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDIpIHtcclxuICAgICAgdGhpcy5tQnV0dG9uc1swXSA9IDA7XHJcbiAgICAgIHRoaXMubUJ1dHRvbnNbMl0gPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubUJ1dHRvbnNbMF0gPSAwO1xyXG4gICAgICB0aGlzLm1CdXR0b25zWzJdID0gMDtcclxuICAgICAgdGhpcy5tQnV0dG9uc1sxXSA9IDE7XHJcbiAgICB9XHJcbiAgICBsZXRcclxuICAgICAgLy94ID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxyXG4gICAgICAvL3kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgeCA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGUudGFyZ2V0Lm9mZnNldExlZnQsXHJcbiAgICAgIHkgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiAgICB0aGlzLm1YID0geDtcclxuICAgIHRoaXMubVkgPSB5O1xyXG4gXHJcbiAgICBsZXQgdHQgPSBlLnRhcmdldFRvdWNoZXM7XHJcbiAgICBpZiAodHQubGVuZ3RoID49IDIpIHtcclxuICAgICAgdGhpcy5kaXN0ID0gZGlzdGFuY2UodHRbMF0sIHR0WzFdKTtcclxuICAgICAgdGhpcy5zY2FsaW5nID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL3ZnLmxvZyhgWm9vbSBzdGFydDogaXNzYzoke3RoaXMuc2NhbGluZ31gKTtcclxuICB9IC8vIEVuZCBvZiAnb25Ub3VjaFN0YXJ0JyBmdW5jdGlvblxyXG4gXHJcbiAgb25Ub3VjaE1vdmUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gXHJcbiAgICBsZXRcclxuICAgICAgLy94ID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxyXG4gICAgICAvL3kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgeCA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGUudGFyZ2V0Lm9mZnNldExlZnQsXHJcbiAgICAgIHkgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiBcclxuICAgIC8vdmcubG9nKGBNb3ZlOiB4OiR7eH0geToke3l9YCk7XHJcbiBcclxuICAgIC8vdmcubG9nKGBab29tIG1vdmU6IGlzc2M6JHt0aGlzLnNjYWxpbmd9YCk7XHJcbiAgICBsZXQgdHQgPSBlLnRhcmdldFRvdWNoZXM7XHJcbiAgICAvL3ZnLmxvZyhgMDoke3R0WzBdLmNsaWVudFh9LCAxOiR7dHRbMV0uY2xpZW50WH1gKTtcclxuICAgIGlmICh0aGlzLnNjYWxpbmcpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdGhpcy5tRHogPSAwO1xyXG4gICAgICB0aGlzLmN1cnJfc2NhbGUgPSAoZGlzdGFuY2UodHRbMF0sIHR0WzFdKSAvIHRoaXMuZGlzdCkgKiB0aGlzLnNjYWxlX2ZhY3RvcjtcclxuIFxyXG4gICAgICAvL3ZnLmxvZyhgWm9vbSBtb3ZlOiBzYzoke3RoaXMuY3Vycl9zY2FsZX0gKG1aOiAke3RoaXMubVp9KSwgJHtkaXN0YW5jZSh0dFswXSwgdHRbMV0pfS8ke3RoaXMuZGlzdH1gKTtcclxuICAgICAgLy9pZiAodGhpcy5jdXJyX3NjYWxlID4gMS4zKVxyXG4gICAgICAvLyAgdGhpcy5tRHogPSAxO1xyXG4gICAgICAvL2Vsc2UgaWYgKHRoaXMuY3Vycl9zY2FsZSA8IDAuOClcclxuICAgICAgLy8gIHRoaXMubUR6ID0gLTE7XHJcbiAgICAgIGxldCBkID0gZGlzdGFuY2UodHRbMF0sIHR0WzFdKTtcclxuICAgICAgaWYgKE1hdGguYWJzKGQgLSB0aGlzLmRpc3QpID4gMCkgey8vNDcpIHtcclxuICAgICAgICBpZiAoZCA8IHRoaXMuZGlzdClcclxuICAgICAgICAgIHRoaXMubUR6ID0gMSAqIChkIC8gdGhpcy5kaXN0KSwgdGhpcy5kaXN0ID0gZDtcclxuICAgICAgICBlbHNlIGlmIChkID4gdGhpcy5kaXN0KVxyXG4gICAgICAgICAgdGhpcy5tRHogPSAtMSAqICh0aGlzLmRpc3QgLyBkKSwgdGhpcy5kaXN0ID0gZDtcclxuICAgICAgICB0aGlzLm1aICs9IHRoaXMubUR6O1xyXG4gXHJcbiAgICAgICAgdGhpcy5tRHggPSB4IC0gdGhpcy5tWDtcclxuICAgICAgICB0aGlzLm1EeSA9IHkgLSB0aGlzLm1ZO1xyXG4gICAgICAgIHRoaXMubVggPSB4O1xyXG4gICAgICAgIHRoaXMubVkgPSB5O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICBpZiAodGhpcy5tQnV0dG9uc1sxXSA9PSAxKSB7XHJcbiAgICAgIHRoaXMubUR4ID0gMDtcclxuICAgICAgdGhpcy5tRHkgPSAwO1xyXG4gICAgICB0aGlzLm1EeiA9IHkgLSB0aGlzLm1aO1xyXG4gICAgICB0aGlzLm1YID0geDtcclxuICAgICAgdGhpcy5tWSA9IHk7XHJcbiAgICAgIHRoaXMubVogKz0gdGhpcy5tRHo7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1EeCA9IHggLSB0aGlzLm1YO1xyXG4gICAgICB0aGlzLm1EeSA9IHkgLSB0aGlzLm1ZO1xyXG4gICAgICB0aGlzLm1EeiA9IDA7XHJcbiAgICAgIHRoaXMubVggPSB4O1xyXG4gICAgICB0aGlzLm1ZID0geTtcclxuICAgIH0gIFxyXG4gIH0gLy8gRW5kIG9mICdvblRvdWNoTW92ZScgZnVuY3Rpb25cclxuIFxyXG4gIG9uVG91Y2hFbmQoZSkge1xyXG4gICAgdGhpcy5tQnV0dG9uc1swXSA9IDA7XHJcbiAgICB0aGlzLm1CdXR0b25zWzFdID0gMDtcclxuICAgIHRoaXMubUJ1dHRvbnNbMl0gPSAwO1xyXG4gICAgbGV0XHJcbiAgICAgIC8veCA9IGUudG91Y2hlc1swXS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdCxcclxuICAgICAgLy95ID0gZS50b3VjaGVzWzBdLmNsaWVudFkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiAgICAgIHggPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxyXG4gICAgICB5ID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgdGhpcy5tRHggPSAwO1xyXG4gICAgdGhpcy5tRHkgPSAwO1xyXG4gICAgdGhpcy5tRHogPSAwO1xyXG4gICAgdGhpcy5tWCA9IHg7XHJcbiAgICB0aGlzLm1ZID0geTtcclxuIFxyXG4gICAgbGV0IHR0ID0gZS50YXJnZXRUb3VjaGVzO1xyXG4gICAgaWYgKHR0Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJfc2NhbGUgPCB0aGlzLm1pbl96b29tKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZV9mYWN0b3IgPSB0aGlzLm1pbl96b29tO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJfc2NhbGUgPiB0aGlzLm1heF96b29tKSB7XHJcbiAgICAgICAgICB0aGlzLnNjYWxlX2ZhY3RvciA9IHRoaXMubWF4X3pvb207IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjYWxlX2ZhY3RvciA9IHRoaXMuY3Vycl9zY2FsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2NhbGluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvL3ZnLmxvZyhgWm9vbSBlbmQ6IGlzc2M6JHt0aGlzLnNjYWxpbmd9IChtWjogJHt0aGlzLm1afSlgKTtcclxuICB9IC8vIEVuZCBvZiAnb25Ub3VjaE1vdmUnIGZ1bmN0aW9uXHJcbiBcclxuICBvbk1vdXNlTW92ZShlKSB7XHJcbiAgICBsZXRcclxuICAgICAgZHggPSBlLm1vdmVtZW50WCxcclxuICAgICAgZHkgPSBlLm1vdmVtZW50WTtcclxuICAgIHRoaXMubUR4ID0gZHg7XHJcbiAgICB0aGlzLm1EeSA9IGR5O1xyXG4gICAgdGhpcy5tRHogPSAwO1xyXG4gICAgdGhpcy5tWCArPSBkeDtcclxuICAgIHRoaXMubVkgKz0gZHk7XHJcbiAgfSAvLyBFbmQgb2YgJ29uTW91c2VNb3ZlJyBmdW5jdGlvblxyXG4gXHJcbiAgb25Nb3VzZVdoZWVsKGUpIHtcclxuICAgIGlmIChlLndoZWVsRGVsdGEgIT0gMClcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5tWiArPSAodGhpcy5tRHogPSBlLndoZWVsRGVsdGEgLyAxMjApO1xyXG4gIH0gLy8gRW5kIG9mICdvbk1vdXNlV2hlZWwnIGZ1bmN0aW9uXHJcbiBcclxuICBvbk1vdXNlRG93bihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiBcclxuICAgIHRoaXMubUJ1dHRvbnNPbGRbZS5idXR0b25dID0gdGhpcy5tQnV0dG9uc1tlLmJ1dHRvbl07XHJcbiAgICB0aGlzLm1CdXR0b25zW2UuYnV0dG9uXSA9IDE7XHJcbiAgICB0aGlzLm1CdXR0b25zQ2xpY2tbZS5idXR0b25dID0gIXRoaXMubUJ1dHRvbnNPbGRbZS5idXR0b25dICYmIHRoaXMubUJ1dHRvbnNbZS5idXR0b25dO1xyXG4gICAgXHJcbiAgICB0aGlzLnNoaWZ0S2V5ID0gZS5zaGlmdEtleTtcclxuICAgIHRoaXMuYWx0S2V5ID0gZS5hbHRLZXk7XHJcbiAgICB0aGlzLmN0cmxLZXkgPSBlLmN0cmxLZXk7XHJcbiAgfSAvLyBFbmQgb2YgJ29uTW91c2VNb3ZlJyBmdW5jdGlvblxyXG4gIFxyXG4gIG9uTW91c2VVcChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiBcclxuICAgIHRoaXMubUJ1dHRvbnNPbGRbZS5idXR0b25dID0gdGhpcy5tQnV0dG9uc1tlLmJ1dHRvbl07XHJcbiAgICB0aGlzLm1CdXR0b25zW2UuYnV0dG9uXSA9IDA7XHJcbiAgICB0aGlzLm1CdXR0b25zQ2xpY2tbZS5idXR0b25dID0gMDtcclxuIFxyXG4gICAgdGhpcy5zaGlmdEtleSA9IGUuc2hpZnRLZXk7XHJcbiAgICB0aGlzLmFsdEtleSA9IGUuYWx0S2V5O1xyXG4gICAgdGhpcy5jdHJsS2V5ID0gZS5jdHJsS2V5O1xyXG4gIH0gLy8gRW5kIG9mICdvbk1vdXNlTW92ZScgZnVuY3Rpb25cclxuIFxyXG4gIC8vLyBLZXlib2FyZCBoYW5kbGVcclxuICBvbktleURvd24oZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBsZXQgZm9jdXNlZF9lbGVtZW50ID0gbnVsbDtcclxuICAgIGlmIChkb2N1bWVudC5oYXNGb2N1cygpICYmXHJcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSAmJlxyXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICBmb2N1c2VkX2VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICBpZiAoZm9jdXNlZF9lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gICAgICBcclxuICAgIGlmIChlLmNvZGUgIT0gXCJGMTJcIiAmJiBlLmNvZGUgIT0gXCJGMTFcIiAmJiBlLmNvZGUgIT0gXCJLZXlSXCIpXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMua2V5c09sZFtlLmNvZGVdID0gdGhpcy5rZXlzW2UuY29kZV07XHJcbiAgICB0aGlzLmtleXNbZS5jb2RlXSA9IDE7XHJcbiAgICB0aGlzLmtleXNDbGlja1tlLmNvZGVdID0gIXRoaXMua2V5c09sZFtlLmNvZGVdICYmIHRoaXMua2V5c1tlLmNvZGVdO1xyXG4gICAgXHJcbiAgICB0aGlzLnNoaWZ0S2V5ID0gZS5zaGlmdEtleTtcclxuICAgIHRoaXMuYWx0S2V5ID0gZS5hbHRLZXk7XHJcbiAgICB0aGlzLmN0cmxLZXkgPSBlLmN0cmxLZXk7XHJcbiAgfSAvLyBFbmQgb2YgJ29uS2V5RG93bicgZnVuY3Rpb25cclxuICBcclxuICBvbktleVVwKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3RleHRhcmVhJylcclxuICAgICAgcmV0dXJuO1xyXG4gICAgbGV0IGZvY3VzZWRfZWxlbWVudCA9IG51bGw7XHJcbiAgICBpZiAoZG9jdW1lbnQuaGFzRm9jdXMoKSAmJlxyXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiZcclxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgZm9jdXNlZF9lbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgaWYgKGZvY3VzZWRfZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3RleHRhcmVhJylcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9ICAgICAgXHJcbiAgICBpZiAoZS5jb2RlICE9IFwiRjEyXCIgJiYgZS5jb2RlICE9IFwiRjExXCIgJiYgZS5jb2RlICE9IFwiS2V5UlwiKVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmtleXNPbGRbZS5jb2RlXSA9IHRoaXMua2V5c1tlLmNvZGVdO1xyXG4gICAgdGhpcy5rZXlzW2UuY29kZV0gPSAwO1xyXG4gICAgdGhpcy5rZXlzQ2xpY2tbZS5jb2RlXSA9IDA7XHJcbiBcclxuICAgIHRoaXMuc2hpZnRLZXkgPSBlLnNoaWZ0S2V5O1xyXG4gICAgdGhpcy5hbHRLZXkgPSBlLmFsdEtleTtcclxuICAgIHRoaXMuY3RybEtleSA9IGUuY3RybEtleTtcclxuICB9IC8vIEVuZCBvZiAnb25LZXlVcCcgZnVuY3Rpb25cclxuICBcclxuICAvLy8gQ2FtZXJhIG1vdmVtZW50IGhhbmRsaW5nXHJcbiAgcmVzZXQoKSB7XHJcbiAgICAvL3ZnLmxvZyhgTXNEejogJHt0aGlzLm1Een1gKTtcclxuICAgIHRoaXMubUR4ID0gMDtcclxuICAgIHRoaXMubUR5ID0gMDtcclxuICAgIHRoaXMubUR6ID0gMDtcclxuICAgIHRoaXMubUJ1dHRvbnNDbGljay5mb3JFYWNoKGsgPT4gdGhpcy5tQnV0dG9uc0NsaWNrW2tdID0gMCk7XHJcbiAgICB0aGlzLmtleXNDbGljay5mb3JFYWNoKGsgPT4gdGhpcy5rZXlzQ2xpY2tba10gPSAwKTtcclxuIFxyXG4gICAgdGhpcy5zaGlmdEtleSA9IHRoaXMua2V5c1tcIlNoaWZ0TGVmdFwiXSB8fCB0aGlzLmtleXNbXCJTaGlmdFJpZ2h0XCJdO1xyXG4gICAgdGhpcy5hbHRLZXkgPSB0aGlzLmtleXNbXCJBbHRMZWZ0XCJdIHx8IHRoaXMua2V5c1tcIkFsdFJpZ2h0XCJdO1xyXG4gICAgdGhpcy5jdHJsS2V5ID0gdGhpcy5rZXlzW1wiQ29udHJvbExlZnRcIl0gfHwgdGhpcy5rZXlzW1wiQ29udHJvbFJpZ2h0XCJdO1xyXG4gIH0gLy8gRW5kIG9mIHJlc2V0JyBmdW5jdGlvblxyXG4gICAgXHJcbiAgcmVzcG9uc2VDYW1lcmEodGltZXIpIHtcclxuICAgIGlmICh0aGlzLnNoaWZ0S2V5ICYmIHRoaXMua2V5c0NsaWNrW1wiS2V5RlwiXSkge1xyXG4gICAgICBjYW1TZXQodmVjMyg1KSwgdmVjMygwKSwgdmVjMygwLCAxLCAwKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmN0cmxLZXkpIHtcclxuICAgICAgbGV0IG1hdHIgPSBtYXQ0KCk7XHJcbiAgICAgIGxldCBhbmdsZVNwZWVkID0gNzA7XHJcbiAgICAgIGxldCByb3RhdGVZID0gMCwgcm90YXRlWCA9IDA7XHJcbiAgICAgIGxldCBzcGVlZCA9IDE1LCBkaXN0ID0gMDtcclxuICAgIFxyXG4gICAgICBpZiAodGhpcy5jdHJsS2V5KSB7XHJcbiAgICAgICAgY2FtLmxvYyA9IGNhbS5sb2MuYWRkKG1vZGVsLmZvcndhcmQpO1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJBcnJvd1JpZ2h0XCJdKSB7XHJcbiAgICAgICAgICByb3RhdGVZID0gdGltZXIuZ2xvYmFsRGVsdGFUaW1lICogYW5nbGVTcGVlZDtcclxuICAgIFxyXG4gICAgICAgICAgbW9kZWwuZm9yd2FyZCA9IG1vZGVsLmZvcndhcmQubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWSwgbW9kZWwudXAubm9ybWFsaXplKCkpKTtcclxuICAgICAgICAgIG1vZGVsLnJpZ2h0ID0gbW9kZWwucmlnaHQubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWSwgbW9kZWwudXAubm9ybWFsaXplKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMua2V5c1tcIkFycm93TGVmdFwiXSkge1xyXG4gICAgICAgICAgcm90YXRlWSA9IC10aW1lci5nbG9iYWxEZWx0YVRpbWUgKiBhbmdsZVNwZWVkO1xyXG4gICAgXHJcbiAgICAgICAgICBtb2RlbC5mb3J3YXJkID0gbW9kZWwuZm9yd2FyZC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVZLCBtb2RlbC51cC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgICAgbW9kZWwucmlnaHQgPSBtb2RlbC5yaWdodC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVZLCBtb2RlbC51cC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiQXJyb3dVcFwiXSkge1xyXG4gICAgICAgICAgcm90YXRlWCA9IC10aW1lci5nbG9iYWxEZWx0YVRpbWUgKiBhbmdsZVNwZWVkO1xyXG4gICAgXHJcbiAgICAgICAgICBtb2RlbC5mb3J3YXJkID0gbW9kZWwuZm9yd2FyZC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVYLCBtb2RlbC5yaWdodC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgICAgbW9kZWwudXAgPSBtb2RlbC51cC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVYLCBtb2RlbC5yaWdodC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiQXJyb3dEb3duXCJdKSB7XHJcbiAgICAgICAgICByb3RhdGVYID0gdGltZXIuZ2xvYmFsRGVsdGFUaW1lICogYW5nbGVTcGVlZDtcclxuICAgIFxyXG4gICAgICAgICAgbW9kZWwuZm9yd2FyZCA9IG1vZGVsLmZvcndhcmQubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWCwgbW9kZWwucmlnaHQubm9ybWFsaXplKCkpKTtcclxuICAgICAgICAgIG1vZGVsLnVwID0gbW9kZWwudXAubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWCwgbW9kZWwucmlnaHQubm9ybWFsaXplKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMua2V5c1tcIk51bXBhZDhcIl0pIHtcclxuICAgICAgICAgIGRpc3QgPSB0aW1lci5nbG9iYWxEZWx0YVRpbWUgKiBzcGVlZCAqICh0aGlzLmtleXNbXCJOdW1wYWQ5XCJdID09IHRydWUgPyA4IDogMSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNhbVNldChjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkLm11bChkaXN0KSksIGNhbS5sb2MuYWRkKG1vZGVsLmZvcndhcmQpLCBtb2RlbC51cCk7XHJcbiAgICAgICAgICBtYXRyID0gbWF0ci5tdWwobWF0NCgpLnRyYW5zbGF0ZShtb2RlbC5mb3J3YXJkLm11bChkaXN0KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiTnVtcGFkNFwiXSkge1xyXG4gICAgICAgICAgZGlzdCA9IHRpbWVyLmdsb2JhbERlbHRhVGltZSAqIHNwZWVkICogKHRoaXMua2V5c1tcIk51bXBhZDlcIl0gPT0gdHJ1ZSA/IDggOiAxKTtcclxuXHJcbiAgICAgICAgICBjYW1TZXQoY2FtLmxvYy5zdWIobW9kZWwuZm9yd2FyZC5tdWwoZGlzdCkpLCBjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkKSwgbW9kZWwudXApO1xyXG4gICAgICAgICAgbWF0ciA9IG1hdHIubXVsKG1hdDQoKS50cmFuc2xhdGUobW9kZWwuZm9yd2FyZC5tdWwoZGlzdCkubmVnKCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbVNldChjYW0ubG9jLnN1Yihtb2RlbC5mb3J3YXJkKSwgY2FtLmxvYy5hZGQobW9kZWwuZm9yd2FyZCksIG1vZGVsLnVwKTtcclxuICAgICAgICByZXR1cm4gbWF0ci5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVYLCBtb2RlbC5yaWdodC5ub3JtYWxpemUoKSkubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWSwgbW9kZWwudXAubm9ybWFsaXplKCkpKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IC8vIEVuZCBvZiAncmVzcG9uc2XRgUNhbWVyYScgZnVuY3Rpb25cclxufSAvLyBFbmQgb2YgJ2lucHV0JyBjbGFzcyIsImltcG9ydCB7IHZlYzMsIG1hdDQsIGNhbUNyZWF0ZSwgY2FtU2V0LCBjYW0gfSBmcm9tIFwiLi4vbXRoL21hdGguanNcIjtcclxuaW1wb3J0ICogYXMgYW5pbSBmcm9tICcuLi9hbmltL2FuaW0uanMnO1xyXG5pbXBvcnQgeyBpbnB1dCB9IGZyb20gXCIuLi91dGlscy9jbnRybC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gcHJpbXNJbml0KHJuZCkge1xyXG4gIHJuZC5wcmltcyA9IFtdO1xyXG5cclxuICAvLyBDcmVhdGluZyBmaXJzdCBwcmltaXRpdmVcclxuICBybmQucHJpbXNbMF0gPSBhbmltLmNyZWF0ZUZpZ3VyZShybmQsIFwiY3ViZVwiLCBcImRlZmF1bHRcIiwgMC44LCB2ZWMzKCkpO1xyXG5cclxuICAvLyBDcmVhdGluZyBzZWNvbmQgcHJpbWl0aXZlXHJcbiAgY29uc3Qgc2l6ZSA9IDEwMDA7XHJcbiAgLy8gTG9hZGluZyBzaGFkZXJcclxuICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgaW1nLnNyYyA9IFwiLi9tb3NzLmpwZ1wiO1xyXG4gIGFuaW0udGV4dHVyZShybmQuZ2wsIHtpbWc6IGltZywgbmFtZTogXCJsYW5kXCJ9KTtcclxuICBcclxuICBmb3IgKGxldCBpID0gLTIsIGNudCA9IDA7IGkgPD0gMjsgaSsrKVxyXG4gICAgZm9yIChsZXQgaiA9IC0yOyBqIDw9IDI7IGorKylcclxuICAgICAgcm5kLnByaW1zW2NudCsrICsgMV0gPSBhbmltLmNyZWF0ZUZpZ3VyZShybmQsIFwicXVhZFwiLCBcInF1YWRcIiwgMTAwMCwgdmVjMyhpICogc2l6ZSwgMCwgaiAqIHNpemUpKTtcclxuXHJcbiAgcmV0dXJuIHJuZC5wcmltcztcclxufVxyXG5cclxuY2xhc3MgX3JlbmRlcntcclxuICBmcmFtZURhdGEgPSBbMCwgMCwgMCwgMF07XHJcbiAgZnJhbWVVbmlmb3JtQnVmZmVySW5kZXggPSA1O1xyXG4gIHRpbWVyID0gbmV3IGFuaW0uVGltZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhc0lkKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKTtcclxuICAgIHRoaXMuZ2wgPSBnbDtcclxuXHJcbiAgICBpZiAoZ2wgPT09IG51bGwpIHtcclxuICAgICAgYWxlcnQoXCJXZWJHTDIgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICAvLyBTZXR0aW5nIGNhbWVyYSBhbmQgbWF0cml4ZXNcclxuICAgIGNhbUNyZWF0ZSh0aGlzLmNhbnZhcyk7XHJcbiAgICBjYW1TZXQodmVjMygwLCAyLCAtNSksIHZlYzMoMCksIHZlYzMoMCwgMSwgMCkpO1xyXG4gICAgdGhpcy5jYW0gPSBjYW07XHJcblxyXG4gICAgLy8gQXJyYXkgb2YgcHJpbWl0aXZlcyBpbml0aWFsaXppbmcsIGNyZWF0aW5nIG9mIHByaW1pdGl2ZXNcclxuICAgIHRoaXMucHJpbXMgPSBwcmltc0luaXQodGhpcyk7XHJcblxyXG4gICAgLy8gRnJhbWUgYnVmZmVyXHJcbiAgICB0aGlzLmZyYW1lQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLlVOSUZPUk1fQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuVU5JRk9STV9CVUZGRVIsIDQgKiA0LCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgLy8gTG9hZGluZyBtYXRyaXhlcyBhbmQgZnJhbWUgYnVmZmVyXHJcbiAgICBmb3IgKGxldCBpID0gMDsgdGhpcy5wcmltc1tpXSAhPSB1bmRlZmluZWQ7IGkrKykge1xyXG4gICAgICBsZXQgcHJnID0gdGhpcy5wcmltc1tpXS5zaGRzLnByZztcclxuXHJcbiAgICAgIGdsLnVzZVByb2dyYW0ocHJnKTtcclxuICAgICAgZ2wudW5pZm9ybUJsb2NrQmluZGluZyhwcmcsIFxyXG4gICAgICAgIGdsLmdldFVuaWZvcm1CbG9ja0luZGV4KHByZywgXCJGcmFtZUJ1ZmZlclwiKSxcclxuICAgICAgICB0aGlzLmZyYW1lVW5pZm9ybUJ1ZmZlckluZGV4KTtcclxuXHJcbiAgICAgIC8vIGdldHRpbmcgYmluZGluZyBwb2ludCBmb3IgdmFyaWFibGUgb2YgdGltZVxyXG4gICAgICB0aGlzLnRpbWVMb2MgPSBbXTtcclxuICAgICAgdGhpcy50aW1lTG9jW2ldID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJUaW1lXCIpO1xyXG5cclxuICAgICAgdGhpcy5jYW1lcmFMb2NhdGlvaW5Mb2MgPSBbXTtcclxuICAgICAgdGhpcy5jYW1lcmFMb2NhdGlvaW5Mb2NbaV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIkNhbUxvY1wiKTtcclxuXHJcbiAgICAgIHRoaXMubWF0cml4UmVsb2FkKHRoaXMucHJpbXNbaV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgaW5wdXQgc3lzdGVtXHJcbiAgICB0aGlzLmlucHV0ID0gbmV3IGlucHV0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xyXG4gICAgLy8gQ2xlYXJpbmcgZnJhbWVcclxuICAgIGdsLmNsZWFyQ29sb3IoMC4xMiwgMC44NSwgMC45NzAsIDEpO1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcbiAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuICAgIFxyXG4gICAgLy8gRHJhd2luZyBmcHNcclxuICAgIHRoaXMudGltZXIucmVzcG9uc2UoXCJmcHNcIik7XHJcblxyXG4gICAgLy8gU2VuZGluZyBmcmFtZSBidWZmZXIgdG8gc2hhZGVyc1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5VTklGT1JNX0JVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLlVOSUZPUk1fQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZnJhbWVEYXRhKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgZ2wuYmluZEJ1ZmZlckJhc2UoZ2wuVU5JRk9STV9CVUZGRVIsIHRoaXMuZnJhbWVVbmlmb3JtQnVmZmVySW5kZXgsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgXHJcbiAgICAvLyBSZXNwb25zaW5nIGlucHV0IHN5c3RlbVxyXG4gICAgaWYgKHRoaXMuaW5wdXQuY3RybEtleSkge1xyXG4gICAgICB0aGlzLm5ld01hdHJXb3JsZCA9IHRoaXMuaW5wdXQucmVzcG9uc2VDYW1lcmEodGhpcy50aW1lcik7XHJcbiAgICAgIGlmICh0aGlzLm5ld01hdHJXb3JsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5wcmltc1swXS5tYXRyV29ybGQgPSB0aGlzLnByaW1zWzBdLm1hdHJXb3JsZC5tdWwodGhpcy5uZXdNYXRyV29ybGQpO1xyXG4gICAgICAgIHRoaXMuY2FtID0gY2FtO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJDYW1lcmEgcG9zaXRpb246XCIsIGNhbS5sb2MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IHRoaXMucHJpbXNbaV0gIT0gdW5kZWZpbmVkOyBpKyspIHtcclxuICAgICAgbGV0IHByZyA9IHRoaXMucHJpbXNbaV0uc2hkcy5wcmc7XHJcblxyXG4gICAgICBnbC51c2VQcm9ncmFtKHByZyk7XHJcblxyXG4gICAgICAvLyBVcGRhdGluZyB0aW1lIG9uIHNoYWRlcnNcclxuICAgICAgaWYgKHRoaXMudGltZUxvY1tpXSAhPSAtMSlcclxuICAgICAgICBnbC51bmlmb3JtMWYodGhpcy50aW1lTG9jW2ldLCB0aGlzLnRpbWVyLmdsb2JhbFRpbWUpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY2FtZXJhTG9jYXRpb2luTG9jW2ldICE9IC0xKVxyXG4gICAgICAgIGdsLnVuaWZvcm0zZih0aGlzLmNhbWVyYUxvY2F0aW9pbkxvY1tpXSwgdGhpcy5jYW0ubG9jLngsIHRoaXMuY2FtLmxvYy55LCB0aGlzLmNhbS5sb2Mueik7XHJcblxyXG4gICAgICAvLyBSZWxvYWRpbmcgbWF0cml4ZXNcclxuICAgICAgdGhpcy5tYXRyaXhSZWxvYWQodGhpcy5wcmltc1tpXSk7XHJcblxyXG4gICAgICAvLyBEcmF3aW5nIG9mIHByaW1pdGl2ZXNcclxuICAgICAgZ2wuYmluZFZlcnRleEFycmF5KHRoaXMucHJpbXNbaV0udmVydGV4QXR0cmliQXJyYXkpO1xyXG4gICAgICBpZiAodGhpcy5wcmltc1tpXS5pbmRleEFycmF5ID09IG51bGwpXHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHRoaXMucHJpbXNbaV0ubnVtT2ZFbGVtZW50cyk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCAvKnRoaXMucHJpbXNbaV0ubnVtT2ZFbGVtZW50cyAqICovKHRoaXMucHJpbXNbaV0ubmFtZSA9PSBcInF1YWRcIiA/IDYgOiAzNiksIGdsLlVOU0lHTkVEX0lOVCwgMCk7XHJcbiAgICB9XHJcbiAgfSAvLyBFbmQgb2YgJ3JlbmRlcicgZnVuY3Rpb25cclxuXHJcbiAgbWFpbkxvb3AoKSB7XHJcbiAgICBjb25zdCBkcmF3ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLnRpbWVyLnJlc3BvbnNlKCk7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgICB9O1xyXG4gICAgZHJhdygpO1xyXG4gIH0gLy8gRW5kIG9mICdtYWluTG9vcCcgZnVuY3Rpb25cclxuXHJcbiAgbWF0cml4UmVsb2FkKHByaW0pIHtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcclxuICAgIGxldCBwcmcgPSBwcmltLnNoZHMucHJnO1xyXG5cclxuICAgIC8vIE1hdHJpeGVzXHJcbiAgICAvLyBNYXRyaXggb2Ygdmlld1xyXG4gICAgY29uc3QgVmlld0xvYyA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcmcsIFwiTWF0clZpZXdcIik7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFZpZXdMb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY2FtLm1hdHJWaWV3LnRvQXJyYXkoKSkpO1xyXG5cclxuICAgIC8vIE1hdHJpeCBvZiBwcm9qZWN0aW9uXHJcbiAgICBjb25zdCBQcm9qTG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJNYXRyUHJvalwiKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoUHJvakxvYywgZmFsc2UsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jYW0ubWF0clByb2oudG9BcnJheSgpKSk7XHJcblxyXG4gICAgLy8gTWF0cml4IG9mIHZpZXcgcHJvamVjdGlvblxyXG4gICAgY29uc3QgVlBMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIk1hdHJWUFwiKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoVlBMb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY2FtLm1hdHJWUC50b0FycmF5KCkpKTtcclxuXHJcbiAgICAvLyBNYXRyaXggb2Ygd29ybGRcclxuICAgIGNvbnN0IFdvcmxkTG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJNYXRyV29ybGRcIik7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFdvcmxkTG9jLCBmYWxzZSwgbmV3IEZsb2F0MzJBcnJheShwcmltLm1hdHJXb3JsZC50b0FycmF5KCkpKTsvL21hdDQoKS5yb3RhdGVZKDAgKiB0aGlzLnRpbWVyLmdsb2JhbFRpbWUgKiAxNDApLm11bChtYXQ0KCkucm90YXRlWCgwICogdGhpcy50aW1lci5nbG9iYWxUaW1lICogNzApKS50b0FycmF5KCkpKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgY29uc3Qgcm5kID0gbmV3IF9yZW5kZXIoXCJnbGNhbnZhc1wiKTtcclxuICBybmQubWFpbkxvb3AoKTtcclxufSk7Il0sIm5hbWVzIjpbImFuaW0uY3JlYXRlRmlndXJlIiwiYW5pbS50ZXh0dXJlIiwiYW5pbS5UaW1lciJdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsTUFBTSxLQUFLO0lBQ1gsSUFBSSxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUNsQyxnQkFBZ0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUNsQyxnQkFBZ0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUNsQyxnQkFBZ0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ3BDLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNyQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDckMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3JDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTO0lBQ3hHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVM7SUFDeEcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztJQUN4RyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTO0lBQ3hHLFlBQVksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQztJQUNBLFlBQVksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMxQyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDMUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxLQUFLO0lBQ0w7SUFDQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWCxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0FBQ3ZCO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQztJQUNBLFFBQVEsT0FBTyxDQUFDLENBQUM7SUFDakIsS0FBSztBQUNMO0lBQ0EsSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzNCLGNBQWMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzNCLGNBQWMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUc7SUFDOUIsUUFBUSxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztJQUNsRSxlQUFlLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ25FO0lBQ0EsS0FBSztBQUNMO0lBQ0EsSUFBSSxNQUFNLEdBQUc7SUFDYixRQUFRLElBQUksQ0FBQztJQUNiLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkYsUUFBUSxPQUFPLENBQUMsQ0FBQztJQUNqQixLQUFLO0FBQ0w7SUFDQSxJQUFJLE9BQU8sR0FBRztJQUNkLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDdkIsUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEM7SUFDQSxRQUFRLElBQUksR0FBRyxJQUFJLENBQUM7SUFDcEIsWUFBWSxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzFCO0lBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0FBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtBQUNBO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLEtBQUs7QUFDTDtJQUNBLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7SUFDckIsUUFBUSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLO0lBQ3ZDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNCLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUI7SUFDQSxRQUFRLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQzVHLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUM1RyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUcsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLEtBQUs7QUFDTDtJQUNBLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtJQUNuQixRQUFRLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUs7SUFDdkMsWUFBWSxDQUFDLEdBQUcsSUFBSSxD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LEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxLQUFLO0FBQ0w7SUFDQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWCxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksUUFBUTtJQUNoQyxZQUFZLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDO0lBQ2xDLFlBQVksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RjtJQUNBLFlBQVksT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RHLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEcsU0FBUztJQUNULFFBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxLQUFLO0FBQ0w7SUFDQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWCxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksUUFBUTtJQUNoQyxZQUFZLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsUUFBUSxPQUFP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QU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUM5QixRQUFRLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUMvQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RixxQkFBcUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsS0FBSztJQUNMO0lBQ0EsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDNUIsUUFBUSxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN4QyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDeEMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMz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Q0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELGdDQUFnQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELFFBQVEsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLGdDQUFnQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsZ0NBQWdDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsUUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxRQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLFFBQVEsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckI7SUFDQSxRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELEtBQUs7SUFDTCxDQUFDO0FBQ0Q7SUFDTyxTQUFTLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztBQUNEO0lBQ08sU0FBUyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDckMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekI7O0lDN0RBLElBQUksTUFBTTtBQUNWLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBQyxDQUFDO0lBQ0YsSUFBSSxNQUFNO0FBQ1YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBQyxDQUFDO0FBQ0Y7SUFDQSxJQUFJLE9BQU87QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUMsQ0FBQztJQUNGLElBQUksT0FBTztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEI7SUFDQSxJQUFJLE9BQU8sVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0FBQ0Q7SUFDQSxTQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsRUFBRSxPQUFPLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztBQUNEO0lBQ0EsU0FBUyxhQUFhLENBQUMsSUFBSTtJQUMzQjtJQUNBLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsc0JBQXNCLENBQUMsRUFBRTtJQUM1RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7SUFDL0UsRUFBRTtJQUNGLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3BFLFFBQVEsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JFLElBQUksSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM1QztJQUNBLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMs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QU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLFNBQVM7SUFDVCxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtJQUNsQyxVQUFVLElBQUksR0FBRyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEY7SUFDQSxVQUFVLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0YsVUFBVSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNFLFNBQVM7QUFDVDtJQUNBLFFBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLFFBQVEsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxF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
