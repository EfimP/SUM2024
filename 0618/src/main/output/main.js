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
    DrawNormal = InNormal;
    DrawTex = DrawTexCoord;
}
`    ;
    let fs_txt =
`#version 300 es
precision highp float;
out vec4 OutColor;

in vec3 DrawPos;
in vec2 DrawTex;
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
    vec2[6] tc = vec2[6](vec2(1, 0), vec2(0, 0), vec2(0, 1), vec2(1, 0), vec2(0, 1), vec2(1, 1));


    gl_Position = MatrVP * MatrWorld * vec4(InPosition, 1.0);
    DrawPos = vec3(MatrWorld * vec4(InPosition, 1));
    DrawTex = DrawTexCoord;
    //DrawTex = tc[gl_VertexID];
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
uniform vec2 TransVec;
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

    OutColor = vec4(color, 1);

    vec4 tc = texture(Tex, vec2(vec4(DrawTex, 0, 0) * MatrScale(vec3(10.0))) + TransVec);
    //vec4 tc = texture(Tex, DrawTex * MatrScale(vec3(10.0)));
    //rot(100.0, (1.0 - DrawTex) * (5.0 + 3.0 * sin(Time))));
    OutColor = vec4(tc.rgb, 1);

    //OutColor = vec4(DrawTex, 0, 1);
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
            this.numOfV;
            this.vertexAttribArray = null;
            this.vertexBuffer = null;
            this.indexArray = indexArray;
            this.numOfI;
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
      p[1] = vert(pos.add(vec3(-size / 2, 0, size / 2)), vec3(), vec2(0, 1)),
      p[2] = vert(pos.add(vec3(size / 2, 0, -size / 2)), vec3(), vec2(1, 0)),
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

        for (let i of facets)
            vertArray = vertArray.concat(vec3ToArray(i.pos).concat(vec3ToArray(i.norm)).concat(vec2ToArray(i.texCoord)));
        prim.vertexArray = vertArray;
        prim.matrWorld = mat4();
        return prim;
    }

    function createCube(size, pos) {
       let prim = createVertFromFacets(createNormals(createCubeFacets(size, pos)));
       prim.numOfElements = 36;
       return prim;
    }

    function createQuad(size, pos) {
      let prim = createVertFromFacets(createNormals(createQuadFacets(size, pos)));
      prim.numOfElements = 6;
      return prim;
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
          gl.vertexAttribPointer(texLoc, 2, gl.FLOAT, false, 4 * 3 * 2 + 4 * 2, 4 * 3 * 2);
          gl.enableVertexAttribArray(texLoc);
        }

        // Loading to shader index array
        if (prim.indexArray != null) {
          prim.indexBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, prim.indexBuffer);
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(prim.indexArray), gl.STATIC_DRAW);
        }
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


    function autoNormals(V, NoofV, Ind, NoofI)
    {
      /* Set all vertex normals to zero */
      for (let i = 0; i < NoofV; i++)
        V[i].norm = vec3();
     
      /* Eval normal for every facet */
      for (let i = 0; i < NoofI - 2; i += 3)
      {
        let n0 = Ind[i], n1 = Ind[i + 1], n2 = Ind[i + 2];
        let
          p0 = V[n0].pos,
          p1 = V[n1].pos,
          p2 = V[n2].pos,
          N = p1.sub(p0).cross(p2.sub(p0)).normalize();
     
        V[n0].norm = V[n0].norm.add(N);
        V[n1].norm = V[n1].norm.add(N);
        V[n2].norm = V[n2].norm.add(N);
      }
     
      /* Normalize all vertex normals */
      for (let i = 0; i < NoofV; i++)
        V[i].norm = V[i].norm.normalize();

      let prim = createPrim(V, Ind, NoofI, mat4(), "loaded");
      prim.numOfV = NoofV;
      return prim;
    } // End of 'CreateNormals' function

    async function loadPrim(rnd, name) {
      const response = await fetch("./cow.obj");
      const text = await response.text();
      const lines = text.split("\n");
      let posArray = [];
      let indArray = [];
      let posCnt = 0;
      let indCnt = 0;

      for (let i = 0; lines[i] != undefined; i++) {
        if (lines[i].slice(0, 2) == "v ") {
          let tmp = lines[i].slice(1, -2).trim().split(" ");
          if (Number(tmp[0]) != NaN) {
            let pos = vec3(Number(tmp[0]), Number(tmp[1]), Number(tmp[2]));
            posArray[posCnt] = vert((pos == undefined ? vec3() : pos), vec3(), vec2()), posCnt++;
          }
          else
            posArray[posCnt] = vert(vec3(), vec3(), vec2()), posCnt++;
        }
        else if (lines[i].slice(0, 2) == "f ") {
          let tmp = lines[i].slice(1).trim().split(" ");
          for (let j = 0; tmp[j] != undefined; j++) {
            let tmp2 = tmp[j].trim().split("/");
            if (Number(tmp2[0]) != NaN) {
              let ind = (Number(tmp2[0]) >= posCnt ? posCnt - 1 : Number(tmp2[0]) - 1);
              indArray[indCnt] = ind, indCnt++;
            }
          }
        }
      }
      let prim = createVertFromFacets(autoNormals(posArray, posCnt, indArray, indCnt));
      prim.shds = loadShaders(rnd.gl, "default");
      bufLoad(rnd.gl, prim);
      rnd.flag = true;
      rnd.prims[2] = prim;
    }


    /*
    export async function loadPrim(rnd, name) {
      const response = await fetch("./cow.obj")
      const text = await response.text();
      const lines = text.split("\n");
      let posArray = [];
      let texArray = [];
      let vertArray = [];
      let posCnt = 0;
      let texCnt = 0;
      let vertCnt = 0;

      for (let i = 0; lines[i] != undefined; i++) {
        if (lines[i].slice(0, 2) == "v ") {
          let tmp = lines[i].slice(1, -2).trim().split(" ");
          if (Number(tmp[0]) != NaN) {
            let pos = vec3(Number(tmp[0]), Number(tmp[1]), Number(tmp[2]));
            posArray[posCnt] = (pos == undefined ? vec3() : pos), posCnt++;
          }
          else
            posArray[posCnt] = vec3(), posCnt++;
        }
        else if (lines[i].slice(0, 2) == "vt") {
          let tmp = lines[i].slice(2, -2).trim().split(" ");
          if (Number(tmp[0]) != NaN) {
            let tex = vec2(Number(tmp[0]), Number(tmp[1]));
            texArray[texCnt] = (tex == undefined ? vec2() : tex), texCnt++;
          }
        }
        else if (lines[i].slice(0, 2) == "f ") {
          let tmp = lines[i].slice(1).trim().split(" ");
          for (let j = 0; tmp[j] != undefined; j++) {
            let tmp2 = tmp[j].trim().split("/");
            if (Number(tmp2[0]) != NaN) {
              let pos = posArray[Number(tmp2[0])];
              let tex = texArray.length == 0 ? vec2() : texArray[Number(tmp2[2] == undefined ? tmp2[1] : tmp2[2])];

              let facet = vert((pos == undefined ? vec3() : pos), null, (tex == undefined ? vec2() : tex));
              vertArray[vertCnt] = (facet == undefined ? vec3() : facet), vertCnt++;
            }
          }
        }
      }
      let prim = autoNormals(createPrim(vertArray, null, vertCnt, mat4(), "primFromFile"));
      prim.shds = loadShaders(rnd.gl, "default");
      bufLoad(rnd.gl, prim);
      rnd.flag = true;
      rnd.prims[2] = prim;
    }
    */

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

    let matrTrans = mat4(), vecTrans = vec3();
     
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

    let allTranslate = mat4();

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
          let prevPos = model.pos;
        
          if (this.ctrlKey) {
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
              rotateX = timer.globalDeltaTime * angleSpeed;
        
              model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
              model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
            }
            if (this.keys["ArrowDown"]) {
              rotateX = -timer.globalDeltaTime * angleSpeed;
        
              model.forward = model.forward.mul(mat4().rotate(rotateX, model.right.normalize()));
              model.up = model.up.mul(mat4().rotate(rotateX, model.right.normalize()));
            }


            vecTrans = vecTrans.sub(vec3(prevPos.x, 0, prevPos.z).sub(vec3(newPos.x, 0, newPos.z)).mul(0.001));
            matrTrans = matrTrans.mul(mat4().translate(vec3(newPos.x, 0, newPos.z).sub(vec3(prevPos.x, 0, prevPos.z))));

            camSet(model.pos.sub(model.forward.mul(5)).add(model.up.mul(3.5)), model.pos.add(model.forward.mul(2)), model.up);
            return matr.mul(allTranslate.inverse()).mul(mat4().rotate(rotateX, model.right.normalize()).mul(mat4().rotate(rotateY, model.up.normalize()))).mul(allTranslate);
          }
          else 
            return null;
        }
      } // End of 'responseCamera' function
    } // End of 'input' class

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

    function primsInit(rnd) {
      rnd.prims = [];

      // Creating first primitive
      rnd.prims[0] = createFigure(rnd, "cube", "default", 0.8, vec3());

      // Creating second primitive
      const size = 5000;
      // Loading shader
      let img = new Image();
      img.src = "./moss.jpg";
      texture(rnd.gl, {img: img, name: "land"});
      rnd.prims[1] = createFigure(rnd, "quad", "quad", size, vec3(0));
      
      rnd.flag = false;
      rnd.prims[2] = loadPrim(rnd);

      return rnd.prims;
    }

    function frameBlockBind(rnd) {
      let gl = rnd.gl;
      // Loading matrixes and frame buffer
      for (let i = 0; rnd.prims[i] != undefined; i++)
        if (i != 2 || rnd.flag) {
          let prg = rnd.prims[i].shds.prg;

          gl.useProgram(prg);
          gl.uniformBlockBinding(prg, 
            gl.getUniformBlockIndex(prg, "FrameBuffer"),
            rnd.frameUniformBufferIndex);

          rnd.matrixReload(rnd.prims[i]);
        }

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

        frameBlockBind(this);
        this.first = true;

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
        if (this.input.ctrlKey) {
          this.newMatrWorld = this.input.responseCamera(this.timer);
          if (this.newMatrWorld != null) {
            this.prims[0].matrWorld = this.prims[0].matrWorld.mul(this.newMatrWorld);
            this.cam = cam;
            //console.log("Camera position:", cam.loc);
          }
        }

        if (this.flag && this.first)
          frameBlockBind(this), this.first = false;

        for (let i = 0; this.prims[i] != undefined; i++)
          if (i != 2 || this.flag) {
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

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbXRoL21hdDQuanMiLCIuLi8uLi9tdGgvdmVjMy5qcyIsIi4uLy4uL210aC92ZWMyLmpzIiwiLi4vLi4vbXRoL2NhbS5qcyIsIi4uLy4uL2FuaW0vcm5kL3Jlcy9zaGRzLmpzIiwiLi4vLi4vYW5pbS9ybmQvcmVzL3RleC5qcyIsIi4uLy4uL2FuaW0vcm5kL3ByaW0uanMiLCIuLi8uLi9hbmltL3RpbWVyLmpzIiwiLi4vLi4vdXRpbHMvY250cmwuanMiLCIuLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlYzMgfSBmcm9tICcuL3ZlYzMuanMnO1xyXG5cclxuY2xhc3MgX21hdDR7XHJcbiAgICBjb25zdHJ1Y3RvcihBMDAsIEEwMSwgQTAyLCBBMDMsXHJcbiAgICAgICAgICAgICAgICBBMTAsIEExMSwgQTEyLCBBMTMsXHJcbiAgICAgICAgICAgICAgICBBMjAsIEEyMSwgQTIyLCBBMjMsXHJcbiAgICAgICAgICAgICAgICBBMzAsIEEzMSwgQTMyLCBBMzMpIHtcclxuICAgICAgICBsZXQgbSA9IFtbQTAwLCBBMDEsIEEwMiwgQTAzXSxcclxuICAgICAgICAgICAgICAgICBbQTEwLCBBMTEsIEExMiwgQTEzXSxcclxuICAgICAgICAgICAgICAgICBbQTIwLCBBMjEsIEEyMiwgQTIzXSxcclxuICAgICAgICAgICAgICAgICBbQTMwLCBBMzEsIEEzMiwgQTMzXV07XHJcbiAgICAgICAgaWYgKG1bMF1bMF0gPT0gdW5kZWZpbmVkIHx8IG1bMF1bMV0gPT0gdW5kZWZpbmVkIHx8IG1bMF1bMl0gPT0gdW5kZWZpbmVkIHx8IG1bMF1bM10gPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG1bMV1bMF0gPT0gdW5kZWZpbmVkIHx8IG1bMV1bMV0gPT0gdW5kZWZpbmVkIHx8IG1bMV1bMl0gPT0gdW5kZWZpbmVkIHx8IG1bMV1bM10gPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG1bMl1bMF0gPT0gdW5kZWZpbmVkIHx8IG1bMl1bMV0gPT0gdW5kZWZpbmVkIHx8IG1bMl1bMl0gPT0gdW5kZWZpbmVkIHx8IG1bMl1bM10gPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG1bM11bMF0gPT0gdW5kZWZpbmVkIHx8IG1bM11bMV0gPT0gdW5kZWZpbmVkIHx8IG1bM11bMl0gPT0gdW5kZWZpbmVkIHx8IG1bM11bM10gPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLm0gPSBbWzEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDAsIDFdXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubSA9IFtbQTAwLCBBMDEsIEEwMiwgQTAzXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtBMTAsIEExMSwgQTEyLCBBMTNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW0EyMCwgQTIxLCBBMjIsIEEyM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbQTMwLCBBMzEsIEEzMiwgQTMzXV07XHJcbiAgICB9IC8vIEVuZCBvZiAnY29uc3RydWN0b3InIGZ1bmN0aW9uXHJcbiAgICAgICAgXHJcbiAgICBtdWwobSkge1xyXG4gICAgICAgIGxldCByID0gbWF0NCgpO1xyXG5cclxuICAgICAgICByLm1bMF1bMF0gPSB0aGlzLm1bMF1bMF0gKiBtLm1bMF1bMF0gKyB0aGlzLm1bMF1bMV0gKiBtLm1bMV1bMF0gKyB0aGlzLm1bMF1bMl0gKiBtLm1bMl1bMF0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMF1bM10gKiBtLm1bM11bMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzBdWzFdID0gdGhpcy5tWzBdWzBdICogbS5tWzBdWzFdICsgdGhpcy5tWzBdWzFdICogbS5tWzFdWzFdICsgdGhpcy5tWzBdWzJdICogbS5tWzJdWzFdICtcclxuICAgICAgICAgICAgdGhpcy5tWzBdWzNdICogbS5tWzNdWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVswXVsyXSA9IHRoaXMubVswXVswXSAqIG0ubVswXVsyXSArIHRoaXMubVswXVsxXSAqIG0ubVsxXVsyXSArIHRoaXMubVswXVsyXSAqIG0ubVsyXVsyXSArXHJcbiAgICAgICAgICAgIHRoaXMubVswXVszXSAqIG0ubVszXVsyXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMF1bM10gPSB0aGlzLm1bMF1bMF0gKiBtLm1bMF1bM10gKyB0aGlzLm1bMF1bMV0gKiBtLm1bMV1bM10gKyB0aGlzLm1bMF1bMl0gKiBtLm1bMl1bM10gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMF1bM10gKiBtLm1bM11bM107XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzFdWzBdID0gdGhpcy5tWzFdWzBdICogbS5tWzBdWzBdICsgdGhpcy5tWzFdWzFdICogbS5tWzFdWzBdICsgdGhpcy5tWzFdWzJdICogbS5tWzJdWzBdICtcclxuICAgICAgICAgICAgdGhpcy5tWzFdWzNdICogbS5tWzNdWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsxXVsxXSA9IHRoaXMubVsxXVswXSAqIG0ubVswXVsxXSArIHRoaXMubVsxXVsxXSAqIG0ubVsxXVsxXSArIHRoaXMubVsxXVsyXSAqIG0ubVsyXVsxXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsxXVszXSAqIG0ubVszXVsxXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMV1bMl0gPSB0aGlzLm1bMV1bMF0gKiBtLm1bMF1bMl0gKyB0aGlzLm1bMV1bMV0gKiBtLm1bMV1bMl0gKyB0aGlzLm1bMV1bMl0gKiBtLm1bMl1bMl0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMV1bM10gKiBtLm1bM11bMl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzFdWzNdID0gdGhpcy5tWzFdWzBdICogbS5tWzBdWzNdICsgdGhpcy5tWzFdWzFdICogbS5tWzFdWzNdICsgdGhpcy5tWzFdWzJdICogbS5tWzJdWzNdICtcclxuICAgICAgICAgICAgdGhpcy5tWzFdWzNdICogbS5tWzNdWzNdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsyXVswXSA9IHRoaXMubVsyXVswXSAqIG0ubVswXVswXSArIHRoaXMubVsyXVsxXSAqIG0ubVsxXVswXSArIHRoaXMubVsyXVsyXSAqIG0ubVsyXVswXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsyXVszXSAqIG0ubVszXVswXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMl1bMV0gPSB0aGlzLm1bMl1bMF0gKiBtLm1bMF1bMV0gKyB0aGlzLm1bMl1bMV0gKiBtLm1bMV1bMV0gKyB0aGlzLm1bMl1bMl0gKiBtLm1bMl1bMV0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMl1bM10gKiBtLm1bM11bMV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzJdWzJdID0gdGhpcy5tWzJdWzBdICogbS5tWzBdWzJdICsgdGhpcy5tWzJdWzFdICogbS5tWzFdWzJdICsgdGhpcy5tWzJdWzJdICogbS5tWzJdWzJdICtcclxuICAgICAgICAgICAgdGhpcy5tWzJdWzNdICogbS5tWzNdWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsyXVszXSA9IHRoaXMubVsyXVswXSAqIG0ubVswXVszXSArIHRoaXMubVsyXVsxXSAqIG0ubVsxXVszXSArIHRoaXMubVsyXVsyXSAqIG0ubVsyXVszXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsyXVszXSAqIG0ubVszXVszXTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICByLm1bM11bMF0gPSB0aGlzLm1bM11bMF0gKiBtLm1bMF1bMF0gKyB0aGlzLm1bM11bMV0gKiBtLm1bMV1bMF0gKyB0aGlzLm1bM11bMl0gKiBtLm1bMl1bMF0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bM11bM10gKiBtLm1bM11bMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzNdWzFdID0gdGhpcy5tWzNdWzBdICogbS5tWzBdWzFdICsgdGhpcy5tWzNdWzFdICogbS5tWzFdWzFdICsgdGhpcy5tWzNdWzJdICogbS5tWzJdWzFdICtcclxuICAgICAgICAgICAgdGhpcy5tWzNdWzNdICogbS5tWzNdWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVszXVsyXSA9IHRoaXMubVszXVswXSAqIG0ubVswXVsyXSArIHRoaXMubVszXVsxXSAqIG0ubVsxXVsyXSArIHRoaXMubVszXVsyXSAqIG0ubVsyXVsyXSArXHJcbiAgICAgICAgICAgIHRoaXMubVszXVszXSAqIG0ubVszXVsyXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bM11bM10gPSB0aGlzLm1bM11bMF0gKiBtLm1bMF1bM10gKyB0aGlzLm1bM11bMV0gKiBtLm1bMV1bM10gKyB0aGlzLm1bM11bMl0gKiBtLm1bMl1bM10gK1xyXG4gICAgICAgICAgICB0aGlzLm1bM11bM10gKiBtLm1bM11bM107XHJcblxyXG4gICAgICAgIHJldHVybiByOyAgICAgICAgICAgIFxyXG4gICAgfSAvLyBFbmQgb2YgJ211bCcgZnVuY3Rpb25cclxuXHJcbiAgICBkZXRlcm0zeDMoQTExLCBBMTIsIEExMyxcclxuICAgICAgICAgICAgICBBMjEsIEEyMiwgQTIzLFxyXG4gICAgICAgICAgICAgIEEzMSwgQTMyLCBBMzMgKSB7XHJcbiAgICAgICAgcmV0dXJuIEExMSAqIEEyMiAqIEEzMyArIEExMiAqIEEyMyAqIEEzMSArIEExMyAqIEEyMSAqIEEzMiAtXHJcbiAgICAgICAgICAgICAgIEExMSAqIEEyMyAqIEEzMiAtIEExMiAqIEEyMSAqIEEzMyAtIEExMyAqIEEyMiAqIEEzMTtcclxuXHJcbiAgICB9IC8vIEVuZCBvZiAnZGV0ZXJtM3gzJyBmdW5jdGlvblxyXG5cclxuICAgIGRldGVybSgpIHtcclxuICAgICAgICBsZXQgbiA9XHJcbiAgICAgICAgICAgICt0aGlzLm1bMF1bMF0gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMV0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgIC10aGlzLm1bMF1bMV0gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgICt0aGlzLm1bMF1bMl0gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgIC10aGlzLm1bMF1bM10gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdKTtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH0gLy8gRW5kIG9mICdkZXRlcm0nIGZ1bmN0aW9uXHJcblxyXG4gICAgaW52ZXJzZSgpIHtcclxuICAgICAgICBsZXQgciA9IG1hdDQoKTtcclxuICAgICAgICBsZXQgZGV0ID0gdGhpcy5kZXRlcm0oKTtcclxuXHJcbiAgICAgICAgaWYgKGRldCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0NCgpO1xyXG5cclxuICAgICAgICAvKiBidWlsZCBhZGpvaW50IG1hdHJpeCAqL1xyXG4gICAgICAgIHIubVswXVswXSA9XHJcbiAgICAgICAgICAgICt0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMV0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzFdWzBdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMl1bMF0gPVxyXG4gICAgICAgICAgICArdGhpcy5kZXRlcm0zeDModGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMV0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVszXVswXSA9XHJcbiAgICAgICAgICAgIC10aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzBdWzFdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bMV0gPVxyXG4gICAgICAgICAgICArdGhpcy5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMl0sIHRoaXMubVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMl0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVsxXSA9XHJcbiAgICAgICAgICAgIC10aGlzLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzFdID1cclxuICAgICAgICAgICAgK3RoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bMl0pIC8gZGV0O1xyXG5cclxuXHJcbiAgICAgICAgci5tWzBdWzJdID1cclxuICAgICAgICAgICAgK3RoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bMl0gPVxyXG4gICAgICAgICAgICAtdGhpcy5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMl0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMl0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVsyXSA9XHJcbiAgICAgICAgICAgICt0aGlzLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzJdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bMl0pIC8gZGV0O1xyXG5cclxuXHJcbiAgICAgICAgci5tWzBdWzNdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bM10gPVxyXG4gICAgICAgICAgICArdGhpcy5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMl0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMl0sIHRoaXMubVsyXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVszXSA9XHJcbiAgICAgICAgICAgIC10aGlzLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzNdID1cclxuICAgICAgICAgICAgK3RoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bMl0pIC8gZGV0O1xyXG5cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH0gLy8gRW5kIG9mICdpbnZlcnNlJyBmdW5jdGlvbiAgICBcclxuXHJcbiAgICByb3RhdGUoYW5nbGUsIHYpIHtcclxuICAgICAgICBsZXQgYSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MC4wLFxyXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4oYSksXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdDQoYyArIHYueCAqIHYueCAqICgxIC0gYyksIHYueSAqIHYueCAqICgxIC0gYykgLSB2LnogKiBzLCB2LnogKiB2LnggKiAoMSAtIGMpICsgdi55ICogcywgMCxcclxuICAgICAgICAgICAgICAgICAgICB2LnggKiB2LnkgKiAoMSAtIGMpICsgdi56ICogcywgYyArIHYueSAqIHYueSAqICgxIC0gYyksIHYueiAqIHYueSAqICgxIC0gYykgLSB2LnggKiBzLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHYueCAqIHYueiAqICgxIC0gYykgLSB2LnkgKiBzLCB2LnkgKiB2LnogKiAoMSAtIGMpICsgdi54ICogcywgYyArIHYueiAqIHYueiAqICgxIC0gYyksIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9IC8vIEVuZCBvZiAncm90YXRlJyBmdW5jdGlvblxyXG5cclxuICAgIHJvdGF0ZVgoYW5nbGUpIHtcclxuICAgICAgICBsZXQgYSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MC4wLFxyXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4oYSksXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdDQoMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCBjLCBzLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIC1zLCBjLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3JvdGF0ZVgnIGZ1bmN0aW9uXHJcblxyXG4gICAgcm90YXRlWShhbmdsZSkge1xyXG4gICAgICAgIGxldCBhID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwLjAsXHJcbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbihhKSxcclxuICAgICAgICAgICAgYyA9IE1hdGguY29zKGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0NChjLCAwLCAtcywgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHMsIDAsIGMsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9IC8vIEVuZCBvZiAncm90YXRlWScgZnVuY3Rpb25cclxuXHJcbiAgICByb3RhdGVaKGFuZ2xlKSB7XHJcbiAgICAgICAgbGV0IGEgPSBhbmdsZSAqIE1hdGguUEkgLyAxODAuMCxcclxuICAgICAgICAgICAgcyA9IE1hdGguc2luKGEpLFxyXG4gICAgICAgICAgICBjID0gTWF0aC5jb3MoYSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXQ0KGMsIHMsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgLXMsIGMsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH0gLy8gRW5kIG9mICdyb3RhdGVaJyBmdW5jdGlvblxyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm1Qb2ludCh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHZlYzModi54ICogdGhpcy5tWzBdWzBdICsgdi55ICogdGhpcy5tWzFdWzBdICsgdi56ICogdGhpcy5tWzJdWzBdICsgdGhpcy5tWzNdWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHYueCAqIHRoaXMubVswXVsxXSArIHYueSAqIHRoaXMubVsxXVsxXSArIHYueiAqIHRoaXMubVsyXVsxXSArIHRoaXMubVszXVsxXSxcclxuICAgICAgICAgICAgICAgICAgICB2LnggKiB0aGlzLm1bMF1bMl0gKyB2LnkgKiB0aGlzLm1bMV1bMl0gKyB2LnogKiB0aGlzLm1bMl1bMl0gKyB0aGlzLm1bM11bMl0pO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3BvaW50dHJhbnMnIGZ1bmN0aW9uXHJcblxyXG4gICAgdHJhbnNsYXRlKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgIHJldHVybiBtYXQ0KDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYueCwgdi55LCB2LnosIDEpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09ICdudW1iZXInKVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0NCgxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LCB2LCB2LCAxKTsgXHJcbiAgICB9IC8vIEVuZCBvZiAndHJhbnNsYXRlJyBmdW5jdGlvbiAgICBcclxuXHJcbiAgICBzY2FsZSh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdDQodi54LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAwLCB2LnksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgIDAsIDAsIHYueiwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcblxyXG4gICAgfSAvLyBFbmQgb2YgJ3NjYWxlJyBmdW5jdGlvblxyXG5cclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCguLi50aGlzLm0pO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3RvQXJyYXknIGZ1bmN0aW9uXHJcblxyXG59IC8vIEVuZCBvZiAnX21hdDQnIGNsYXNzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWF0NCguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gbmV3IF9tYXQ0KC4uLmFyZ3MpO1xyXG59IC8vIEVuZCBvZiAnbWF0NCcgZnVuY3Rpb24iLCJpbXBvcnQgeyBtYXQ0IH0gZnJvbSBcIi4vbWF0NC5qc1wiO1xyXG5cclxuY2xhc3MgX3ZlYzMge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xyXG4gICAgICAgIGlmICh4ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy54ID0gMCwgdGhpcy55ID0gMCwgdGhpcy56ID0gMDtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgaWYgKHgubGVuZ3RoID09IDMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4WzBdLCB0aGlzLnkgPSB4WzFdLCB0aGlzLnogPSB4WzJdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4LngsIHRoaXMueSA9IHgueSwgdGhpcy56ID0geC56O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaWYgKHkgPT0gdW5kZWZpbmVkIHx8IHogPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geCwgdGhpcy56ID0geDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geSwgdGhpcy56ID0gejtcclxuICAgIH0gLy8gRW5kIG9mICdjb25zdHJ1Y3RvcicgZnVuY3Rpb25cclxuXHJcbiAgICBhZGQodikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKyB2LCB0aGlzLnkgKyB2LCB0aGlzLnogKyB2KTtcclxuICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKyB2LngsIHRoaXMueSArIHYueSwgdGhpcy56ICsgdi56KTtcclxuICAgIH0gLy8gRW5kIG9mICdhZGQnIGZ1bmN0aW9uXHJcblxyXG4gICAgc2V0QWRkKHYxLCB2Mikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdjIgPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZlYzModjEueCArIHYyLCB2MS55ICsgdjIsIHYxLnogKyB2Mik7XHJcbiAgICAgICAgcmV0dXJuIHZlYzModjEueCArIHYyLngsIHYxLnkgKyB2Mi55LCB2MS56ICsgdjIueik7XHJcbiAgICB9IC8vIEVuZCBvZiAnYWRkJyBmdW5jdGlvblxyXG5cclxuICAgIHN1Yih2KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAtIHYsIHRoaXMueSAtIHYsIHRoaXMueiAtIHYpO1xyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAtIHYueCwgdGhpcy55IC0gdi55LCB0aGlzLnogLSB2LnopO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3N1YicgZnVuY3Rpb25cclxuXHJcbiAgICBzZXRTdWIodjEsIHYyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2MiA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmVjMyh2MS54IC0gdjIsIHYxLnkgLSB2MiwgdjEueiAtIHYyKTtcclxuICAgICAgICByZXR1cm4gdmVjMyh2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTtcclxuICAgIH0gLy8gRW5kIG9mICdzdWInIGZ1bmN0aW9uXHJcblxyXG4gICAgbXVsKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZlYzModGhpcy54ICogdiwgdGhpcy55ICogdiwgdGhpcy56ICogdik7XHJcbiAgICAgICAgZWxzZSBpZiAodi5tICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCB3ID0gdGhpcy54ICogdi5tWzBdWzNdICsgdGhpcy55ICogdi5tWzFdWzNdICsgdGhpcy56ICogdi5tWzJdWzNdICsgdi5tWzNdWzNdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZlYzMoKHRoaXMueCAqIHYubVswXVswXSArIHRoaXMueSAqIHYubVsxXVswXSArIHRoaXMueiAqIHYubVsyXVswXSArIHYubVszXVswXSkgLyB3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy54ICogdi5tWzBdWzFdICsgdGhpcy55ICogdi5tWzFdWzFdICsgdGhpcy56ICogdi5tWzJdWzFdICsgdi5tWzNdWzFdKSAvIHcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnggKiB2Lm1bMF1bMl0gKyB0aGlzLnkgKiB2Lm1bMV1bMl0gKyB0aGlzLnogKiB2Lm1bMl1bMl0gKyB2Lm1bM11bMl0pIC8gdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XHJcbiAgICB9IC8vIEVuZCBvZiAnbXVsJyBmdW5jdGlvblxyXG5cclxuICAgIGRpdihuKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuID09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAvIG4sIHRoaXMueSAvIG4sIHRoaXMueiAvIG4pO1xyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gICAgfSAvLyBFbmQgb2YgJ2RpdicgZnVuY3Rpb25cclxuXHJcbiAgICBuZWcodikge1xyXG4gICAgICAgIHJldHVybiB2ZWMzKC10aGlzLngsIC0gdGhpcy55LCAtdGhpcy56KTtcclxuICAgIH0gLy8gRW5kIG9mICduZWcnIGZ1bmN0aW9uXHJcblxyXG4gICAgbGVuKCkge1xyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLm11bCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGxlbiA9PSAxIHx8IGxlbiA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbGVuO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQobGVuKTtcclxuICAgIH0gLy8gRW5kIG9mICdsZW4nIGZ1bmN0aW9uXHJcblxyXG4gICAgbGVuMigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWwodGhpcyk7XHJcbiAgICB9IC8vIEVuZCBvZiAnbGVuMicgZnVuY3Rpb25cclxuXHJcbiAgICBub3JtYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMubXVsKHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAobGVuICE9IDAgJiYgbGVuICE9IDEpIHtcclxuICAgICAgICAgICAgbGVuID0gTWF0aC5zcXJ0KGxlbik7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAvIGxlbiwgdGhpcy55IC8gbGVuLCB0aGlzLnogLyBsZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0gLy8gRW5kIG9mICdub3JtYWxpemUnIGZ1bmN0aW9uXHJcblxyXG4gICAgdHJhbnNmb3JtKHYpIHtcclxuICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKiB2Lm1bMF1bMF0gKyB0aGlzLnkgKiB2Lm1bMV1bMF0gKyB0aGlzLnogKiB2Lm1bMl1bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICogdi5tWzBdWzFdICsgdGhpcy55ICogdi5tWzFdWzFdICsgdGhpcy56ICogdi5tWzJdWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAqIHYubVswXVsyXSArIHRoaXMueSAqIHYubVsxXVsyXSArIHRoaXMueiAqIHYubVsyXVsyXSk7IFxyXG4gICAgfSAvLyBFbmQgb2YgJ3RyYW5zZm9ybScgZnVuY3Rpb25cclxuXHJcbiAgICBjcm9zcyh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHZlYzModGhpcy55ICogdi56IC0gdGhpcy56ICogdi55LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueiAqIHYueCAtIHRoaXMueCAqIHYueixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKiB2LnkgLSB0aGlzLnkgKiB2LngpO1xyXG4gICAgfSAvLyBFbmQgb2YnY3Jvc3MnIGZ1bmN0aW9uXHJcblxyXG4gICAgdmlldyhsb2MsIGF0LCB1cCkge1xyXG4gICAgICAgIGxldCBkaXIgPSBhdC5zdWIobG9jKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgcmlnaHQgPSBkaXIuY3Jvc3ModXApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCB1cDEgPSByaWdodC5jcm9zcyhkaXIpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0NChyaWdodC54LCB1cDEueCwgLWRpci54LCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0LnksIHVwMS55LCAtZGlyLnksIDAsIFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0LnosIHVwMS56LCAtZGlyLnosIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgLXJpZ2h0Lm11bChsb2MpLCAtbG9jLm11bCh1cDEpLCBsb2MubXVsKGRpciksIDEpO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3ZpZXcnIGZ1bmN0aW9uXHJcbiAgICBcclxuICAgIGZydXN0dW0obCwgciwgYiwgdCwgbiwgZikge1xyXG4gICAgICAgIHJldHVybiBtYXQ0KCgyICogbikgLyAociAtIGwpLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAwLCAoMiAqIG4pIC8gKHQgLSBiKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgKHIgKyBsKSAvIChyIC0gbCksICh0ICsgYikgLyAodCAtIGIpLCAoLSgoZiArIG4pIC8gKGYgLSBuKSkpLCAoLTEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAwLCAwLCAoLSgoMiAqIG4gKiBmKSAvIChmIC0gbikpKSwgMCk7XHJcbiAgICB9IC8qIEVuZCBvZiAnZnJ1c3R1bScgZnVuY3Rpb24gKi9cclxuICAgICAgXHJcbiAgICBvcnRobyhsLCByLCBiLCB0LCBuLCBmKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdDQoMiAvIChyIC0gbCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMiAvICh0IC0gYiksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgKC0yKSAvIChmIC0gbiksIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgKC0oKHIgKyBsKSAvIChyIC0gbCkpKSwgKC0oKHQgKyBiKSAvICh0IC0gYikpKSwgKC0oKGYgKyBuKSAvIChmIC0gbikpKSwgMSk7XHJcbiAgICB9IC8vIEVuZiBvZiAnb3J0aG8nIGZ1bmN0aW9uXHJcbn0gLy8gRW5kIG9mICd2ZWMzJyBjbGFzc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlYzMoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIG5ldyBfdmVjMyguLi5hcmdzKTtcclxufSAvLyBFbmQgb2YgJ3ZlYzMnIGZ1bmN0aW9uIiwiY2xhc3MgX3ZlYzIge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgaWYgKHggPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgdGhpcy54ID0gMCwgdGhpcy55ID0gMDtcclxuICAgICAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ29iamVjdCcpXHJcbiAgICAgICAgICBpZiAoeC5sZW5ndGggPT0gMilcclxuICAgICAgICAgICAgICB0aGlzLnggPSB4WzBdLCB0aGlzLnkgPSB4WzFdO1xyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIHRoaXMueCA9IHgueCwgdGhpcy55ID0geC55O1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgICBpZiAoeSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geDtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICB0aGlzLnggPSB4LCB0aGlzLnkgPSB5O1xyXG4gICAgfSAvLyBFbmQgb2YgJ2NvbnN0cnVjdG9yJyBmdW5jdGlvblxyXG59IC8vIEVuZCBvZiAndmVjMicgY2xhc3NcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZWMyKC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgX3ZlYzIoLi4uYXJncyk7XHJcbn0gLy8gRW5kIG9mICd2ZWMzJyBmdW5jdGlvbiIsImltcG9ydCB7IHZlYzMgfSBmcm9tICcuL3ZlYzMuanMnO1xyXG5pbXBvcnQgeyBtYXQ0IH0gZnJvbSAnLi9tYXQ0LmpzJztcclxuXHJcbmV4cG9ydCBsZXQgY2FtID0gMDtcclxuXHJcbmNsYXNzIGNhbWVyYSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoY2FudmFzKSB7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdGhpcy5mcmFtZUggPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wICsgMTtcclxuICAgICAgICB0aGlzLmZyYW1lVyA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQgKyAxO1xyXG4gICAgICAgIHRoaXMucHJvakRpc3QgPSAwLjE7XHJcbiAgICAgICAgdGhpcy5wcm9qU2l6ZSA9IDAuMTtcclxuICAgICAgICB0aGlzLmZhckNsaXAgPSAxMDAwMDtcclxuICAgICAgICB0aGlzLm1hdHJWaWV3ID0gdmVjMygpLnZpZXcodmVjMygpLCB2ZWMzKCksIHZlYzMoKSk7XHJcbiAgICAgICAgdGhpcy5sb2MgPSB2ZWMzKCk7XHJcbiAgICAgICAgdGhpcy5hdCA9IHZlYzMoKTtcclxuICAgICAgICB0aGlzLnVwID0gdmVjMygpO1xyXG4gICAgICAgIHRoaXMucHJvalNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2pTZXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucnggPSB0aGlzLnJ5ID0gdGhpcy5wcm9qU2l6ZTtcclxuXHJcbiAgICAgICAgLyogQ29ycmVjdCBhc3BlY3QgcmF0aW8gKi9cclxuICAgICAgICBpZiAodGhpcy5mcmFtZVcgPj0gdGhpcy5mcmFtZUgpXHJcbiAgICAgICAgdGhpcy5yeCAqPSB0aGlzLmZyYW1lVyAvIHRoaXMuZnJhbWVIO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLnJ5ICo9IHRoaXMuZnJhbWVIIC8gdGhpcy5mcmFtZVc7XHJcblxyXG4gICAgICAgIHRoaXMubWF0clByb2ogPVxyXG4gICAgICAgIHZlYzMoKS5mcnVzdHVtKC10aGlzLnJ4IC8gMiwgdGhpcy5yeCAvIDIsIC10aGlzLnJ5IC8gMiwgdGhpcy5yeSAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMucHJvakRpc3QsIHRoaXMuZmFyQ2xpcCk7XHJcbiAgICAgICAgdGhpcy5tYXRyVlAgPSB0aGlzLm1hdHJWaWV3Lm11bCh0aGlzLm1hdHJQcm9qKTtcclxuICAgIH0gLy8gRW5kIG9mICdwcm9qc2V0JyBmdW5jdGlvblxyXG5cclxuICAgIHNldChsb2MsIGF0LCB1cCkge1xyXG4gICAgICAgIHRoaXMubWF0clZpZXcgPSB2ZWMzKCkudmlldyhsb2MsIGF0LCB1cCk7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaHQgPSB2ZWMzKHRoaXMubWF0clZpZXcubVswXVswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHJWaWV3Lm1bMV1bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyVmlldy5tWzJdWzBdKTtcclxuICAgICAgICB0aGlzLnVwID0gdmVjMyh0aGlzLm1hdHJWaWV3Lm1bMF1bMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyVmlldy5tWzFdWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0clZpZXcubVsyXVsxXSk7XHJcbiAgICAgICAgdGhpcy5kaXIgPSB2ZWMzKC10aGlzLm1hdHJWaWV3Lm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXRoaXMubWF0clZpZXcubVsxXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtdGhpcy5tYXRyVmlldy5tWzJdWzJdKTtcclxuICAgICAgICB0aGlzLmxvYyA9IGxvYztcclxuICAgICAgICB0aGlzLmF0ID0gYXQ7XHJcblxyXG4gICAgICAgIHRoaXMubWF0clZQID0gdGhpcy5tYXRyVmlldy5tdWwodGhpcy5tYXRyUHJvaik7XHJcbiAgICB9IC8vIEVuZCBvZiAnRVA0X1JuZENhbVNldCcgZnVuY3Rpb25cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbUNyZWF0ZSAoY2FudmFzKSB7XHJcbiAgICBjYW0gPSBuZXcgY2FtZXJhKGNhbnZhcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1TZXQgKGxvYywgYXQsIHVwKSB7XHJcbiAgICBjYW0uc2V0KGxvYywgYXQsIHVwKTtcclxufSIsImxldCB2c190eHQgPVxyXG5gI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuaW4gdmVjMyBJblBvc2l0aW9uO1xyXG5pbiB2ZWMyIERyYXdUZXhDb29yZDtcclxuaW4gdmVjMyBJbk5vcm1hbDtcclxuICAgIFxyXG5vdXQgdmVjMyBEcmF3UG9zO1xyXG5vdXQgdmVjMiBEcmF3VGV4O1xyXG5vdXQgdmVjMyBEcmF3Tm9ybWFsO1xyXG51bmlmb3JtIGZsb2F0IFRpbWU7XHJcblxyXG51bmlmb3JtIG1hdDQgTWF0clZpZXc7XHJcbnVuaWZvcm0gbWF0NCBNYXRyVlA7XHJcbnVuaWZvcm0gbWF0NCBNYXRyV29ybGQ7XHJcblxyXG51bmlmb3JtIEZyYW1lQnVmZmVyXHJcbnsgIFxyXG4gICAgdmVjNCBEYXRhO1xyXG59O1xyXG5cclxudm9pZCBtYWluKCB2b2lkIClcclxue1xyXG4gICAgZ2xfUG9zaXRpb24gPSBNYXRyVlAgKiBNYXRyV29ybGQgKiB2ZWM0KEluUG9zaXRpb24sIDEuMCk7XHJcbiAgICBEcmF3UG9zID0gdmVjMyhNYXRyV29ybGQgKiB2ZWM0KEluUG9zaXRpb24sIDEpKTtcclxuICAgIERyYXdOb3JtYWwgPSBJbk5vcm1hbDtcclxuICAgIERyYXdUZXggPSBEcmF3VGV4Q29vcmQ7XHJcbn1cclxuYDtcclxubGV0IGZzX3R4dCA9XHJcbmAjdmVyc2lvbiAzMDAgZXNcclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG5vdXQgdmVjNCBPdXRDb2xvcjtcclxuXHJcbmluIHZlYzMgRHJhd1BvcztcclxuaW4gdmVjMiBEcmF3VGV4O1xyXG5pbiB2ZWMzIERyYXdOb3JtYWw7XHJcbnVuaWZvcm0gZmxvYXQgVGltZTtcclxudW5pZm9ybSB2ZWMzIENhbUxvYztcclxuXHJcbnVuaWZvcm0gRnJhbWVCdWZmZXJcclxue1xyXG4gICAgdmVjNCBEYXRhO1xyXG59O1xyXG5cclxudm9pZCBtYWluKCB2b2lkIClcclxue1xyXG4gICAgdmVjMyBWID0gbm9ybWFsaXplKERyYXdQb3MgLSBDYW1Mb2MpO1xyXG4gICAgdmVjMyBOID0gbm9ybWFsaXplKERyYXdOb3JtYWwpO1xyXG4gICAgdmVjMyBMID0gbm9ybWFsaXplKHZlYzMoMS8qICsgOCAqIHNpbihUaW1lICogNSkqLywgMSwgMSkpO1xyXG4gICAgdmVjMyBjb2xvciA9IHZlYzMoMC4yLCAwLjMsIDAuNyk7XHJcblxyXG4gICAgTiA9IGZhY2Vmb3J3YXJkKE4sIFYsIE4pO1xyXG5cclxuICAgIC8vRGVmdXNlXHJcbiAgICB2ZWMzIEtkRGlmZiA9IHZlYzMoMC40LCAwLjQsIDAuNCk7XHJcbiAgICBjb2xvciArPSBLZERpZmYgKiBtYXgoMC4xLCBkb3QoTiwgTCkpO1xyXG4gICAgLy9TcGVjdWxhclxyXG4gICAgdmVjMyBSID0gcmVmbGVjdChWLCBOKTtcclxuICAgIGNvbG9yICs9IHZlYzMoMC4xLCAwLjIsIDAuMykgKiBtYXgoMC4wLCBwb3coZG90KFIsIEwpLCAxLjApKTtcclxuXHJcbiAgICBpZiAocG93KGFicyhzaW4oVGltZSArIERyYXdQb3MueCAqIDAuNykpLCAyMDAwLjApID4gMC4zIHx8IFxyXG4gICAgICAgIHBvdyhhYnMoc2luKFRpbWUgKyBEcmF3UG9zLnogKiAwLjcpKSwgMjAwMC4wKSA+IDAuMylcclxuICAgICAgICBjb2xvciA9IHZlYzMoMCwgMSwgMCk7XHJcbiAgICAvL2NvbG9yICs9IHZlYzMoMCwgMSwgMCkgKiBwb3coYWJzKHNpbihUaW1lICsgRHJhd1Bvcy54ICogMC43KSksIDIwMDAuMCk7XHJcblxyXG4gICAgT3V0Q29sb3IgPSB2ZWM0KGNvbG9yLCAxKTtcclxuXHJcbiAgICAvL3ZlYzMgTiA9IERyYXdOb3JtYWw7XHJcbiAgICAvL091dENvbG9yID0gdmVjNChEcmF3UG9zLnh5eSArIERyYXdQb3MueHh5LCAxLjApO1xyXG4gICAgLy9PdXRDb2xvciA9IHZlYzQoTiwgMS4wKTtcclxufVxyXG5gO1xyXG5cclxubGV0IHZzX3R4dDEgPVxyXG5gI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuaW4gdmVjMyBJblBvc2l0aW9uO1xyXG5pbiB2ZWMyIERyYXdUZXhDb29yZDtcclxuaW4gdmVjMyBJbk5vcm1hbDtcclxuICAgIFxyXG5vdXQgdmVjMyBEcmF3UG9zO1xyXG5vdXQgdmVjMiBEcmF3VGV4O1xyXG5vdXQgdmVjMyBEcmF3Tm9ybWFsO1xyXG51bmlmb3JtIGZsb2F0IFRpbWU7XHJcblxyXG51bmlmb3JtIG1hdDQgTWF0clZpZXc7XHJcbnVuaWZvcm0gbWF0NCBNYXRyVlA7XHJcbnVuaWZvcm0gbWF0NCBNYXRyV29ybGQ7XHJcblxyXG51bmlmb3JtIEZyYW1lQnVmZmVyXHJcbnsgIFxyXG4gICAgdmVjNCBEYXRhO1xyXG59O1xyXG5cclxudm9pZCBtYWluKCB2b2lkIClcclxue1xyXG4gICAgdmVjMls2XSB0YyA9IHZlYzJbNl0odmVjMigxLCAwKSwgdmVjMigwLCAwKSwgdmVjMigwLCAxKSwgdmVjMigxLCAwKSwgdmVjMigwLCAxKSwgdmVjMigxLCAxKSk7XHJcblxyXG5cclxuICAgIGdsX1Bvc2l0aW9uID0gTWF0clZQICogTWF0cldvcmxkICogdmVjNChJblBvc2l0aW9uLCAxLjApO1xyXG4gICAgRHJhd1BvcyA9IHZlYzMoTWF0cldvcmxkICogdmVjNChJblBvc2l0aW9uLCAxKSk7XHJcbiAgICBEcmF3VGV4ID0gRHJhd1RleENvb3JkO1xyXG4gICAgLy9EcmF3VGV4ID0gdGNbZ2xfVmVydGV4SURdO1xyXG4gICAgRHJhd05vcm1hbCA9IEluTm9ybWFsO1xyXG59XHJcbmA7XHJcbmxldCBmc190eHQxID1cclxuYCN2ZXJzaW9uIDMwMCBlc1xyXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbm91dCB2ZWM0IE91dENvbG9yO1xyXG5cclxuaW4gdmVjMyBEcmF3UG9zO1xyXG5pbiB2ZWMyIERyYXdUZXg7XHJcbmluIHZlYzMgRHJhd05vcm1hbDtcclxudW5pZm9ybSBmbG9hdCBUaW1lO1xyXG51bmlmb3JtIHZlYzIgVHJhbnNWZWM7XHJcbnVuaWZvcm0gdmVjMyBDYW1Mb2M7XHJcblxyXG51bmlmb3JtIHNhbXBsZXIyRCBUZXg7XHJcblxyXG51bmlmb3JtIEZyYW1lQnVmZmVyXHJcbntcclxuICAgIHZlYzQgRGF0YTtcclxufTtcclxuXHJcbnZlYzIgcm90KCBmbG9hdCBhLCB2ZWMyIHYgKVxyXG57XHJcbiAgZmxvYXQgcyA9IHNpbihhKSwgYyA9IGNvcyhhKTtcclxuXHJcbiAgcmV0dXJuIHZlYzIoZG90KHYsIHZlYzIoYywgLXMpKSwgZG90KHYsIHZlYzIocywgYykpKTtcclxufVxyXG5cclxubWF0NCBNYXRyU2NhbGUoIHZlYzMgdiApXHJcbntcclxuICByZXR1cm4gbWF0NCh2LngsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgMCwgdi55LCAwLCAwLFxyXG4gICAgICAgICAgICAgIDAsIDAsIHYueiwgMCxcclxuICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxufVxyXG5cclxudm9pZCBtYWluKCB2b2lkIClcclxue1xyXG4gICAgdmVjMyBWID0gbm9ybWFsaXplKERyYXdQb3MgLSBDYW1Mb2MpO1xyXG4gICAgdmVjMyBOID0gbm9ybWFsaXplKERyYXdOb3JtYWwpO1xyXG4gICAgdmVjMyBMID0gbm9ybWFsaXplKHZlYzMoMS8qICsgOCAqIHNpbihUaW1lICogNSkqLywgMSwgMSkpO1xyXG4gICAgdmVjMyBjb2xvciA9IHZlYzMoMC4yLCAwLjMsIDAuNyk7XHJcblxyXG4gICAgTiA9IGZhY2Vmb3J3YXJkKE4sIFYsIE4pO1xyXG5cclxuICAgIC8vRGVmdXNlXHJcbiAgICB2ZWMzIEtkRGlmZiA9IHZlYzMoMC40LCAwLjQsIDAuNCk7XHJcbiAgICBjb2xvciArPSBLZERpZmYgKiBtYXgoMC4xLCBkb3QoTiwgTCkpO1xyXG4gICAgLy9TcGVjdWxhclxyXG4gICAgdmVjMyBSID0gcmVmbGVjdChWLCBOKTtcclxuICAgIGNvbG9yICs9IHZlYzMoMC4xLCAwLjIsIDAuMykgKiBtYXgoMC4wLCBwb3coZG90KFIsIEwpLCAxLjApKTtcclxuXHJcbiAgICBPdXRDb2xvciA9IHZlYzQoY29sb3IsIDEpO1xyXG5cclxuICAgIHZlYzQgdGMgPSB0ZXh0dXJlKFRleCwgdmVjMih2ZWM0KERyYXdUZXgsIDAsIDApICogTWF0clNjYWxlKHZlYzMoMTAuMCkpKSArIFRyYW5zVmVjKTtcclxuICAgIC8vdmVjNCB0YyA9IHRleHR1cmUoVGV4LCBEcmF3VGV4ICogTWF0clNjYWxlKHZlYzMoMTAuMCkpKTtcclxuICAgIC8vcm90KDEwMC4wLCAoMS4wIC0gRHJhd1RleCkgKiAoNS4wICsgMy4wICogc2luKFRpbWUpKSkpO1xyXG4gICAgT3V0Q29sb3IgPSB2ZWM0KHRjLnJnYiwgMSk7XHJcblxyXG4gICAgLy9PdXRDb2xvciA9IHZlYzQoRHJhd1RleCwgMCwgMSk7XHJcbn1cclxuYDtcclxuXHJcbmNsYXNzIFNoYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihnbCwgdnNfdHh0LCBmc190eHQpIHtcclxuICAgICAgICAvLyBMb2FkIGFuZCBjb21waWxlIHNoYWRlciBmdW5jdGlvblxyXG4gICAgICAgIGNvbnN0IGxvYWRTaGFkZXIgPSAoc2hhZGVyVHlwZSwgc2hhZGVyU291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKTtcclxuICAgICAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcclxuICAgICAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICBsZXQgYnVmID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hhZGVyIGNvbXBpbGUgZmFpbDogJyArIGJ1Zik7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICAgICAgIH0gLy8gRW5kIG9mICdsb2FkU2hhZGVyJyBmdW5jdGlvblxyXG4gICAgXHJcbiAgICAgICAgLy8gU2hhZGVyIGNyZWF0aW9uXHJcbiAgICAgICAgdGhpcy52cyA9IGxvYWRTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUiwgdnNfdHh0KSxcclxuICAgICAgICB0aGlzLmZzID0gbG9hZFNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIsIGZzX3R4dCksXHJcbiAgICAgICAgdGhpcy5wcmcgPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJnLCB0aGlzLnZzKTtcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcmcsIHRoaXMuZnMpO1xyXG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMucHJnKTtcclxuICAgICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcmcsIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICBsZXQgYnVmID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5wcmcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hhZGVyIHByb2dyYW0gbGluayBmYWlsOiAnICsgYnVmKTtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTaGFkZXJzKGdsLCBuYW1lKSB7XHJcbiAgICBpZiAobmFtZSA9PSBcImRlZmF1bHRcIilcclxuICAgICAgICByZXR1cm4gbmV3IFNoYWRlcihnbCwgdnNfdHh0LCBmc190eHQpO1xyXG4gICAgaWYgKG5hbWUgPT0gXCJxdWFkXCIpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTaGFkZXIoZ2wsIHZzX3R4dDEsIGZzX3R4dDEpO1xyXG59IiwiY2xhc3MgX3RleHR1cmUge1xyXG4gIGNvbnN0cnVjdG9yKGdsLCBuYW1lVVJMLCB0ZXh0dXJlVHlwZSA9IFwiMmRcIikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZVVSTC5uYW1lO1xyXG4gICAgdGhpcy50eXBlID0gZ2wuVEVYVFVSRV8yRDtcclxuICAgIHRoaXMuaWQgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICBnbC5iaW5kVGV4dHVyZSh0aGlzLnR5cGUsIHRoaXMuaWQpO1xyXG4gICAgaWYgKG5hbWVVUkwuaW1nKSB7XHJcbiAgICAgIGdsLnRleEltYWdlMkQodGhpcy50eXBlLCAwLCBnbC5SR0JBLCAxLCAxLCAwLCBnbC5SR0JBLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsIG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1LCAwXSkpO1xyXG4gICAgICBuYW1lVVJMLmltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUodGhpcy50eXBlLCB0aGlzLmlkKTtcclxuICAgICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcclxuICAgICAgICBnbC50ZXhJbWFnZTJEKHRoaXMudHlwZSwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWVVUkwuaW1nKTtcclxuICAgICAgICBnbC5nZW5lcmF0ZU1pcG1hcCh0aGlzLnR5cGUpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkodGhpcy50eXBlLCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuUkVQRUFUKTtcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKHRoaXMudHlwZSwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLlJFUEVBVCk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaSh0aGlzLnR5cGUsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2wuTElORUFSX01JUE1BUF9MSU5FQVIpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkodGhpcy50eXBlLCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgIH1cclxuICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIDApO1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLmlkKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZnVuY3Rpb24gdGV4dHVyZSguLi5hcmdzKSB7XHJcbiAgLyouIC4gLiovXHJcbiAgcmV0dXJuIG5ldyBfdGV4dHVyZSguLi5hcmdzKTtcclxufVxyXG4iLCJpbXBvcnQgeyB2ZWMyLCB2ZWMzLCBtYXQ0IH0gZnJvbSBcIi4uLy4uL210aC9tYXRoLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRTaGFkZXJzIH0gZnJvbSBcIi4vcmVzL3NoZHMuanNcIjtcclxuXHJcbmNsYXNzIHZlcnRleCB7XHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIG5vcm1hbCwgdGV4Q29vcmQpIHtcclxuICAgIHRoaXMucG9zID0gcG9zaXRpb247XHJcbiAgICB0aGlzLm5vcm0gPSBub3JtYWw7XHJcbiAgICB0aGlzLnRleENvb3JkID0gdGV4Q29vcmQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJ0KHBvc2l0aW9uLCBub3JtYWwsIHRleENvb3JkKSB7XHJcbiAgcmV0dXJuIG5ldyB2ZXJ0ZXgocG9zaXRpb24sIG5vcm1hbCwgdGV4Q29vcmQpO1xyXG59XHJcblxyXG5jbGFzcyBQcmltIHtcclxuICAgIGNvbnN0cnVjdG9yKHZlcnRleEFycmF5LCBpbmRleEFycmF5LCBudW1PZkVsZW1lbnRzLCBtYXRyV29ybGQsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnZlcnRleEFycmF5ID0gdmVydGV4QXJyYXk7XHJcbiAgICAgICAgdGhpcy5udW1PZlY7XHJcbiAgICAgICAgdGhpcy52ZXJ0ZXhBdHRyaWJBcnJheSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5kZXhBcnJheSA9IGluZGV4QXJyYXk7XHJcbiAgICAgICAgdGhpcy5udW1PZkk7XHJcbiAgICAgICAgdGhpcy5pbmRleEJ1ZmZlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5udW1PZkVsZW1lbnRzID0gbnVtT2ZFbGVtZW50cztcclxuICAgICAgICB0aGlzLm1hdHJXb3JsZCA9IG1hdHJXb3JsZDtcclxuICAgICAgICB0aGlzLnNoZHMgPSAwO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByaW0odmVydGV4QXJyYXksIGluZGV4QXJyYXksIG51bU9mRWxlbWVudHMsIG1hdHJXb3JsZCwgbmFtZSkge1xyXG4gIHJldHVybiBuZXcgUHJpbSh2ZXJ0ZXhBcnJheSwgaW5kZXhBcnJheSwgbnVtT2ZFbGVtZW50cywgbWF0cldvcmxkLCBuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3ViZUZhY2V0cyhzaXplLCBwb3MpIHtcclxuICAgIGxldCBwID0gW107IFxyXG4gICAgcFswXSA9IHZlcnQocG9zLmFkZCh2ZWMzKHNpemUgLyAyLCAwLCAtc2l6ZSAvIDIpKSksXHJcbiAgICBwWzFdID0gdmVydChwb3MuYWRkKHZlYzMoLXNpemUgLyAyLCBzaXplLCAtc2l6ZSAvIDIpKSksXHJcbiAgICBwWzJdID0gdmVydChwb3MuYWRkKHZlYzMoLXNpemUgLyAyLCAwLCBzaXplIC8gMikpKSxcclxuICAgIHBbM10gPSB2ZXJ0KHBvcy5hZGQodmVjMygtc2l6ZSAvIDIsIDAsIC1zaXplIC8gMikpKSxcclxuICAgIHBbNF0gPSB2ZXJ0KHBvcy5hZGQodmVjMyhzaXplIC8gMiwgc2l6ZSwgLXNpemUgLyAyKSkpLFxyXG4gICAgcFs1XSA9IHZlcnQocG9zLmFkZCh2ZWMzKHNpemUgLyAyLCAwLCBzaXplIC8gMikpKSxcclxuICAgIHBbNl0gPSB2ZXJ0KHBvcy5hZGQodmVjMyhzaXplIC8gMiwgc2l6ZSwgc2l6ZSAvIDIpKSksXHJcbiAgICBwWzddID0gdmVydChwb3MuYWRkKHZlYzMoLXNpemUgLyAyLCBzaXplLCBzaXplIC8gMikpKTtcclxuICAgIGxldCBpbmQgPSBbMywgMSwgMCxcclxuICAgICAgICAgICAgICAgMCwgMSwgNCxcclxuICAgICAgICAgICAgICAgNiwgNSwgMCxcclxuICAgICAgICAgICAgICAgNiwgMCwgNCxcclxuICAgICAgICAgICAgICAgNywgMiwgNSxcclxuICAgICAgICAgICAgICAgNywgNSwgNixcclxuICAgICAgICAgICAgICAgMSwgMywgMixcclxuICAgICAgICAgICAgICAgMSwgMiwgNyxcclxuICAgICAgICAgICAgICAgNywgNiwgNCxcclxuICAgICAgICAgICAgICAgNywgNCwgMSxcclxuICAgICAgICAgICAgICAgNSwgMiwgMyxcclxuICAgICAgICAgICAgICAgNSwgMywgMF07XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZVByaW0ocCwgaW5kLCBudWxsLCBudWxsLCBcImN1YmVcIik7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVRdWFkRmFjZXRzKHNpemUsIHBvcykge1xyXG4gIGxldCBwID0gW107XHJcbiAgcFswXSA9IHZlcnQocG9zLmFkZCh2ZWMzKC1zaXplIC8gMiwgMCwgLXNpemUgLyAyKSksIHZlYzMoKSwgdmVjMigwLCAwKSksXHJcbiAgcFsxXSA9IHZlcnQocG9zLmFkZCh2ZWMzKC1zaXplIC8gMiwgMCwgc2l6ZSAvIDIpKSwgdmVjMygpLCB2ZWMyKDAsIDEpKSxcclxuICBwWzJdID0gdmVydChwb3MuYWRkKHZlYzMoc2l6ZSAvIDIsIDAsIC1zaXplIC8gMikpLCB2ZWMzKCksIHZlYzIoMSwgMCkpLFxyXG4gIHBbM10gPSB2ZXJ0KHBvcy5hZGQodmVjMyhzaXplIC8gMiwgMCwgc2l6ZSAvIDIpKSwgdmVjMygpLCB2ZWMyKDEsIDEpKTtcclxuICBsZXQgaW5kID0gWzIsIDAsIDEsXHJcbiAgICAgICAgICAgICAyLCAxLCAzXTtcclxuICByZXR1cm4gY3JlYXRlUHJpbShwLCBpbmQsIG51bGwsIG51bGwsIFwicXVhZFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTm9ybWFscyhwcmltKVxyXG57XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAocHJpbS5uYW1lID09IFwiY3ViZVwiID8gOCA6IDQpLypwcmltLm51bU9mUG9pbnRzKi87IGkrKylcclxuICAgIHByaW0udmVydGV4QXJyYXlbaV0ubm9ybSA9IHZlYzMoMCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAocHJpbS5uYW1lID09IFwiY3ViZVwiID8gMTIgOiAyKS8qcHJpbS5udW1PZkVsZW1lbnRzKi87IGkrKylcclxuICB7XHJcbiAgICBsZXQgaTAgPSBwcmltLmluZGV4QXJyYXlbaSAqIDNdLCBpMSA9IHByaW0uaW5kZXhBcnJheVtpICogMyArIDFdLCBpMiA9IHByaW0uaW5kZXhBcnJheVtpICogMyArIDJdO1xyXG4gICAgbGV0IHAwMSA9IHByaW0udmVydGV4QXJyYXlbaTFdLnBvcy5zdWIocHJpbS52ZXJ0ZXhBcnJheVtpMF0ucG9zKSwgXHJcbiAgICAgICAgcDAyID0gcHJpbS52ZXJ0ZXhBcnJheVtpMl0ucG9zLnN1YihwcmltLnZlcnRleEFycmF5W2kwXS5wb3MpO1xyXG4gICAgbGV0IG5vcm1hbCA9IHAwMS5jcm9zcyhwMDIpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgIHByaW0udmVydGV4QXJyYXlbaTBdLm5vcm0gPSBwcmltLnZlcnRleEFycmF5W2kwXS5ub3JtLmFkZChub3JtYWwpO1xyXG4gICAgcHJpbS52ZXJ0ZXhBcnJheVtpMV0ubm9ybSA9IHByaW0udmVydGV4QXJyYXlbaTFdLm5vcm0uYWRkKG5vcm1hbCk7XHJcbiAgICBwcmltLnZlcnRleEFycmF5W2kyXS5ub3JtID0gcHJpbS52ZXJ0ZXhBcnJheVtpMl0ubm9ybS5hZGQobm9ybWFsKTtcclxuICB9XHJcbiAgcmV0dXJuIHByaW07XHJcbn0gLy8gRW5kIG9mICdDcmVhdGVOb3JtYWxzJyBmdW5jdGlvblxyXG5cclxuZnVuY3Rpb24gdmVjM1RvQXJyYXkoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIFtlbGVtZW50LngsIGVsZW1lbnQueSwgZWxlbWVudC56XTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmVjMlRvQXJyYXkoZWxlbWVudCkge1xyXG4gIGlmIChlbGVtZW50ICE9IHVuZGVmaW5lZClcclxuICAgIHJldHVybiBbZWxlbWVudC54LCBlbGVtZW50LnldO1xyXG4gIGVsc2VcclxuICByZXR1cm4gWzAsIDBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVWZXJ0RnJvbUZhY2V0cyhwcmltKSB7XHJcbiAgICBsZXQgZmFjZXRzID0gcHJpbS52ZXJ0ZXhBcnJheTtcclxuICAgIGxldCB2ZXJ0QXJyYXkgPSBbXTtcclxuICAgIGxldCBjbnQgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgb2YgZmFjZXRzKVxyXG4gICAgICAgIHZlcnRBcnJheSA9IHZlcnRBcnJheS5jb25jYXQodmVjM1RvQXJyYXkoaS5wb3MpLmNvbmNhdCh2ZWMzVG9BcnJheShpLm5vcm0pKS5jb25jYXQodmVjMlRvQXJyYXkoaS50ZXhDb29yZCkpKTtcclxuICAgIHByaW0udmVydGV4QXJyYXkgPSB2ZXJ0QXJyYXk7XHJcbiAgICBwcmltLm1hdHJXb3JsZCA9IG1hdDQoKTtcclxuICAgIHJldHVybiBwcmltO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3ViZShzaXplLCBwb3MpIHtcclxuICAgbGV0IHByaW0gPSBjcmVhdGVWZXJ0RnJvbUZhY2V0cyhjcmVhdGVOb3JtYWxzKGNyZWF0ZUN1YmVGYWNldHMoc2l6ZSwgcG9zKSkpO1xyXG4gICBwcmltLm51bU9mRWxlbWVudHMgPSAzNjtcclxuICAgcmV0dXJuIHByaW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWFkKHNpemUsIHBvcykge1xyXG4gIGxldCBwcmltID0gY3JlYXRlVmVydEZyb21GYWNldHMoY3JlYXRlTm9ybWFscyhjcmVhdGVRdWFkRmFjZXRzKHNpemUsIHBvcykpKTtcclxuICBwcmltLm51bU9mRWxlbWVudHMgPSA2O1xyXG4gIHJldHVybiBwcmltO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVmTG9hZChnbCwgcHJpbSkge1xyXG4gICAgZ2wudXNlUHJvZ3JhbShwcmltLnNoZHMucHJnKTtcclxuICAgIC8vIExvYWRpbmcgdG8gc2hhZGVyIHZlcnRleCBhcnJheVxyXG4gICAgY29uc3QgcG9zTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJpbS5zaGRzLnByZywgXCJJblBvc2l0aW9uXCIpO1xyXG4gICAgY29uc3QgdGV4TG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJpbS5zaGRzLnByZywgXCJEcmF3VGV4Q29vcmRcIik7XHJcbiAgICBjb25zdCBub3JtTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJpbS5zaGRzLnByZywgXCJJbk5vcm1hbFwiKTtcclxuICAgIHByaW0udmVydGV4QXR0cmliQXJyYXkgPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xyXG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHByaW0udmVydGV4QXR0cmliQXJyYXkpO1xyXG4gICAgcHJpbS52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwcmltLnZlcnRleEJ1ZmZlcik7XHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShwcmltLnZlcnRleEFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgaWYgKHBvc0xvYyAhPSAtMSkge1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc0xvYywgMywgZ2wuRkxPQVQsIGZhbHNlLCA0ICogMyAqIDIgKyA0ICogMiwgMCk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc0xvYyk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9ybUxvYyAhPSAtMSkge1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKG5vcm1Mb2MsIDMsIGdsLkZMT0FULCBmYWxzZSwgNCAqIDMgKiAyICsgNCAqIDIsIDQgKiAzKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobm9ybUxvYyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGV4TG9jICE9IC0xKSB7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGV4TG9jLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDQgKiAzICogMiArIDQgKiAyLCA0ICogMyAqIDIpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0ZXhMb2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWRpbmcgdG8gc2hhZGVyIGluZGV4IGFycmF5XHJcbiAgICBpZiAocHJpbS5pbmRleEFycmF5ICE9IG51bGwpIHtcclxuICAgICAgcHJpbS5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBwcmltLmluZGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQzMkFycmF5KHByaW0uaW5kZXhBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpZ3VyZShybmQsIGZpZ3VyZU5hbWUsIHNoZE5hbWUsIHNpemUsIHBvcykge1xyXG4gIGxldCBwcmltO1xyXG5cclxuICBpZiAoZmlndXJlTmFtZSA9PSBcImN1YmVcIilcclxuICAgIHByaW0gPSBjcmVhdGVDdWJlKHNpemUsIHBvcyk7XHJcbiAgZWxzZVxyXG4gICAgcHJpbSA9IGNyZWF0ZVF1YWQoc2l6ZSwgcG9zKTtcclxuICAvLyBMb2FkaW5nIHNoYWRlclxyXG4gIHByaW0uc2hkcyA9IGxvYWRTaGFkZXJzKHJuZC5nbCwgc2hkTmFtZSk7XHJcbiAgYnVmTG9hZChybmQuZ2wsIHByaW0pO1xyXG5cclxuICByZXR1cm4gcHJpbTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGF1dG9Ob3JtYWxzKFYsIE5vb2ZWLCBJbmQsIE5vb2ZJKVxyXG57XHJcbiAgLyogU2V0IGFsbCB2ZXJ0ZXggbm9ybWFscyB0byB6ZXJvICovXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOb29mVjsgaSsrKVxyXG4gICAgVltpXS5ub3JtID0gdmVjMygpO1xyXG4gXHJcbiAgLyogRXZhbCBub3JtYWwgZm9yIGV2ZXJ5IGZhY2V0ICovXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOb29mSSAtIDI7IGkgKz0gMylcclxuICB7XHJcbiAgICBsZXQgbjAgPSBJbmRbaV0sIG4xID0gSW5kW2kgKyAxXSwgbjIgPSBJbmRbaSArIDJdO1xyXG4gICAgbGV0XHJcbiAgICAgIHAwID0gVltuMF0ucG9zLFxyXG4gICAgICBwMSA9IFZbbjFdLnBvcyxcclxuICAgICAgcDIgPSBWW24yXS5wb3MsXHJcbiAgICAgIE4gPSBwMS5zdWIocDApLmNyb3NzKHAyLnN1YihwMCkpLm5vcm1hbGl6ZSgpO1xyXG4gXHJcbiAgICBWW24wXS5ub3JtID0gVltuMF0ubm9ybS5hZGQoTik7XHJcbiAgICBWW24xXS5ub3JtID0gVltuMV0ubm9ybS5hZGQoTik7XHJcbiAgICBWW24yXS5ub3JtID0gVltuMl0ubm9ybS5hZGQoTik7XHJcbiAgfVxyXG4gXHJcbiAgLyogTm9ybWFsaXplIGFsbCB2ZXJ0ZXggbm9ybWFscyAqL1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTm9vZlY7IGkrKylcclxuICAgIFZbaV0ubm9ybSA9IFZbaV0ubm9ybS5ub3JtYWxpemUoKTtcclxuXHJcbiAgbGV0IHByaW0gPSBjcmVhdGVQcmltKFYsIEluZCwgTm9vZkksIG1hdDQoKSwgXCJsb2FkZWRcIik7XHJcbiAgcHJpbS5udW1PZlYgPSBOb29mVjtcclxuICByZXR1cm4gcHJpbTtcclxufSAvLyBFbmQgb2YgJ0NyZWF0ZU5vcm1hbHMnIGZ1bmN0aW9uXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFByaW0ocm5kLCBuYW1lKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4vY293Lm9ialwiKTtcclxuICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcclxuICBsZXQgcG9zQXJyYXkgPSBbXTtcclxuICBsZXQgaW5kQXJyYXkgPSBbXTtcclxuICBsZXQgcG9zQ250ID0gMDtcclxuICBsZXQgaW5kQ250ID0gMDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGxpbmVzW2ldICE9IHVuZGVmaW5lZDsgaSsrKSB7XHJcbiAgICBpZiAobGluZXNbaV0uc2xpY2UoMCwgMikgPT0gXCJ2IFwiKSB7XHJcbiAgICAgIGxldCB0bXAgPSBsaW5lc1tpXS5zbGljZSgxLCAtMikudHJpbSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgaWYgKE51bWJlcih0bXBbMF0pICE9IE5hTikge1xyXG4gICAgICAgIGxldCBwb3MgPSB2ZWMzKE51bWJlcih0bXBbMF0pLCBOdW1iZXIodG1wWzFdKSwgTnVtYmVyKHRtcFsyXSkpO1xyXG4gICAgICAgIHBvc0FycmF5W3Bvc0NudF0gPSB2ZXJ0KChwb3MgPT0gdW5kZWZpbmVkID8gdmVjMygpIDogcG9zKSwgdmVjMygpLCB2ZWMyKCkpLCBwb3NDbnQrKztcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgcG9zQXJyYXlbcG9zQ250XSA9IHZlcnQodmVjMygpLCB2ZWMzKCksIHZlYzIoKSksIHBvc0NudCsrO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobGluZXNbaV0uc2xpY2UoMCwgMikgPT0gXCJmIFwiKSB7XHJcbiAgICAgIGxldCB0bXAgPSBsaW5lc1tpXS5zbGljZSgxKS50cmltKCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgdG1wW2pdICE9IHVuZGVmaW5lZDsgaisrKSB7XHJcbiAgICAgICAgbGV0IHRtcDIgPSB0bXBbal0udHJpbSgpLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBpZiAoTnVtYmVyKHRtcDJbMF0pICE9IE5hTikge1xyXG4gICAgICAgICAgbGV0IGluZCA9IChOdW1iZXIodG1wMlswXSkgPj0gcG9zQ250ID8gcG9zQ250IC0gMSA6IE51bWJlcih0bXAyWzBdKSAtIDEpO1xyXG4gICAgICAgICAgaW5kQXJyYXlbaW5kQ250XSA9IGluZCwgaW5kQ250Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBwcmltID0gY3JlYXRlVmVydEZyb21GYWNldHMoYXV0b05vcm1hbHMocG9zQXJyYXksIHBvc0NudCwgaW5kQXJyYXksIGluZENudCkpO1xyXG4gIHByaW0uc2hkcyA9IGxvYWRTaGFkZXJzKHJuZC5nbCwgXCJkZWZhdWx0XCIpO1xyXG4gIGJ1ZkxvYWQocm5kLmdsLCBwcmltKTtcclxuICBybmQuZmxhZyA9IHRydWU7XHJcbiAgcm5kLnByaW1zWzJdID0gcHJpbTtcclxufVxyXG5cclxuXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUHJpbShybmQsIG5hbWUpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi9jb3cub2JqXCIpXHJcbiAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgbGV0IHBvc0FycmF5ID0gW107XHJcbiAgbGV0IHRleEFycmF5ID0gW107XHJcbiAgbGV0IHZlcnRBcnJheSA9IFtdO1xyXG4gIGxldCBwb3NDbnQgPSAwO1xyXG4gIGxldCB0ZXhDbnQgPSAwO1xyXG4gIGxldCB2ZXJ0Q250ID0gMDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGxpbmVzW2ldICE9IHVuZGVmaW5lZDsgaSsrKSB7XHJcbiAgICBpZiAobGluZXNbaV0uc2xpY2UoMCwgMikgPT0gXCJ2IFwiKSB7XHJcbiAgICAgIGxldCB0bXAgPSBsaW5lc1tpXS5zbGljZSgxLCAtMikudHJpbSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgaWYgKE51bWJlcih0bXBbMF0pICE9IE5hTikge1xyXG4gICAgICAgIGxldCBwb3MgPSB2ZWMzKE51bWJlcih0bXBbMF0pLCBOdW1iZXIodG1wWzFdKSwgTnVtYmVyKHRtcFsyXSkpO1xyXG4gICAgICAgIHBvc0FycmF5W3Bvc0NudF0gPSAocG9zID09IHVuZGVmaW5lZCA/IHZlYzMoKSA6IHBvcyksIHBvc0NudCsrO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBwb3NBcnJheVtwb3NDbnRdID0gdmVjMygpLCBwb3NDbnQrKztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGxpbmVzW2ldLnNsaWNlKDAsIDIpID09IFwidnRcIikge1xyXG4gICAgICBsZXQgdG1wID0gbGluZXNbaV0uc2xpY2UoMiwgLTIpLnRyaW0oKS5zcGxpdChcIiBcIik7XHJcbiAgICAgIGlmIChOdW1iZXIodG1wWzBdKSAhPSBOYU4pIHtcclxuICAgICAgICBsZXQgdGV4ID0gdmVjMihOdW1iZXIodG1wWzBdKSwgTnVtYmVyKHRtcFsxXSkpO1xyXG4gICAgICAgIHRleEFycmF5W3RleENudF0gPSAodGV4ID09IHVuZGVmaW5lZCA/IHZlYzIoKSA6IHRleCksIHRleENudCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChsaW5lc1tpXS5zbGljZSgwLCAyKSA9PSBcImYgXCIpIHtcclxuICAgICAgbGV0IHRtcCA9IGxpbmVzW2ldLnNsaWNlKDEpLnRyaW0oKS5zcGxpdChcIiBcIik7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyB0bXBbal0gIT0gdW5kZWZpbmVkOyBqKyspIHtcclxuICAgICAgICBsZXQgdG1wMiA9IHRtcFtqXS50cmltKCkuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIGlmIChOdW1iZXIodG1wMlswXSkgIT0gTmFOKSB7XHJcbiAgICAgICAgICBsZXQgcG9zID0gcG9zQXJyYXlbTnVtYmVyKHRtcDJbMF0pXTtcclxuICAgICAgICAgIGxldCB0ZXggPSB0ZXhBcnJheS5sZW5ndGggPT0gMCA/IHZlYzIoKSA6IHRleEFycmF5W051bWJlcih0bXAyWzJdID09IHVuZGVmaW5lZCA/IHRtcDJbMV0gOiB0bXAyWzJdKV07XHJcblxyXG4gICAgICAgICAgbGV0IGZhY2V0ID0gdmVydCgocG9zID09IHVuZGVmaW5lZCA/IHZlYzMoKSA6IHBvcyksIG51bGwsICh0ZXggPT0gdW5kZWZpbmVkID8gdmVjMigpIDogdGV4KSk7XHJcbiAgICAgICAgICB2ZXJ0QXJyYXlbdmVydENudF0gPSAoZmFjZXQgPT0gdW5kZWZpbmVkID8gdmVjMygpIDogZmFjZXQpLCB2ZXJ0Q250Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBwcmltID0gYXV0b05vcm1hbHMoY3JlYXRlUHJpbSh2ZXJ0QXJyYXksIG51bGwsIHZlcnRDbnQsIG1hdDQoKSwgXCJwcmltRnJvbUZpbGVcIikpO1xyXG4gIHByaW0uc2hkcyA9IGxvYWRTaGFkZXJzKHJuZC5nbCwgXCJkZWZhdWx0XCIpO1xyXG4gIGJ1ZkxvYWQocm5kLmdsLCBwcmltKTtcclxuICBybmQuZmxhZyA9IHRydWU7XHJcbiAgcm5kLnByaW1zWzJdID0gcHJpbTtcclxufVxyXG4qLyIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVGltZXIgY2xhc3MgbW9kdWxlXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gdXNhZ2U6XHJcbi8vIEhUTUw6XHJcbi8vICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cclxuLy8gICAgaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4vdGltZXIuanNcIlxyXG4vLyAgICBsZXQgbXlUaW1lciA9IG5ldyBUaW1lcigpO1xyXG4vLyAgICAuIC4gLlxyXG4vLyAgICBteVRpbWVyLnJlc3BvbnNlKCk7XHJcbi8vICAgIGxldCB0aW1lID0gbXlUaW1lci5sb2NhbFRpbWU7IC8vXHJcbi8vICAgIGlmIChteVRpbWVyLmlzUGF1c2UpXHJcbi8vICAgICAgLiAuIC5cclxuLy8gICAgbXlUaW1lci5pc1BhdXNlID0gIW15VGltZXIuaXNQYXVzZTtcclxuLy8gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZwcycpLmlubmVySFRNTCA9IG15VGltZXIuZ2V0RlBTKCk7XHJcbi8vICAgICAgb3IgbXlUaW1lci5yZXNwb25zZSgnZnBzJyk7IC0tIHVwZGF0ZSBGUFMgYXV0b21hdGljYWxseVxyXG4vLyAgPC9zY3JwdD5cclxuIFxyXG4vLyBUaW1lciBjbGFzcyBjb25zdHJ1Y3RvciBmdW5jdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gVGltZXIoKSB7XHJcbiAgLy8gVGltZXIgb2J0YWluIGN1cnJlbnQgdGltZSBpbiBzZWNvbmRzIG1ldGhvZFxyXG4gIGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCB0ID1cclxuICAgICAgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMDAuMCArXHJcbiAgICAgIGRhdGUuZ2V0U2Vjb25kcygpICtcclxuICAgICAgZGF0ZS5nZXRNaW51dGVzKCkgKiA2MDtcclxuICAgIHJldHVybiB0O1xyXG4gIH07XHJcbiBcclxuICAvLyBUaW1lciByZXNwb25zZSBtZXRob2RcclxuICB0aGlzLnJlc3BvbnNlID0gKHRhZ19pZCA9IG51bGwpID0+IHtcclxuICAgIGxldCB0ID0gZ2V0VGltZSgpO1xyXG4gICAgLy8gR2xvYmFsIHRpbWVcclxuICAgIHRoaXMuZ2xvYmFsVGltZSA9IHQ7XHJcbiAgICB0aGlzLmdsb2JhbERlbHRhVGltZSA9IHQgLSB0aGlzLm9sZFRpbWU7XHJcbiAgICAvLyBUaW1lIHdpdGggcGF1c2VcclxuICAgIGlmICh0aGlzLmlzUGF1c2UpIHtcclxuICAgICAgdGhpcy5sb2NhbERlbHRhVGltZSA9IDA7XHJcbiAgICAgIHRoaXMucGF1c2VUaW1lICs9IHQgLSB0aGlzLm9sZFRpbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvY2FsRGVsdGFUaW1lID0gdGhpcy5nbG9iYWxEZWx0YVRpbWU7XHJcbiAgICAgIHRoaXMubG9jYWxUaW1lID0gdCAtIHRoaXMucGF1c2VUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9XHJcbiAgICAvLyBGUFNcclxuICAgIHRoaXMuZnJhbWVDb3VudGVyKys7XHJcbiAgICBpZiAodCAtIHRoaXMub2xkVGltZUZQUyA+IDMpIHtcclxuICAgICAgdGhpcy5GUFMgPSB0aGlzLmZyYW1lQ291bnRlciAvICh0IC0gdGhpcy5vbGRUaW1lRlBTKTtcclxuICAgICAgdGhpcy5vbGRUaW1lRlBTID0gdDtcclxuICAgICAgdGhpcy5mcmFtZUNvdW50ZXIgPSAwO1xyXG4gICAgICBpZiAodGFnX2lkICE9IG51bGwpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKS5pbm5lckhUTUwgPSB0aGlzLmdldEZQUygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbGRUaW1lID0gdDtcclxuICB9O1xyXG4gXHJcbiAgLy8gT2J0YWluIEZQUyBhcyBzdHJpbmcgbWV0aG9kXHJcbiAgdGhpcy5nZXRGUFMgPSAoKSA9PiB0aGlzLkZQUy50b0ZpeGVkKDMpO1xyXG4gXHJcbiAgLy8gRmlsbCB0aW1lciBnbG9iYWwgZGF0YVxyXG4gIHRoaXMuZ2xvYmFsVGltZSA9IHRoaXMubG9jYWxUaW1lID0gZ2V0VGltZSgpO1xyXG4gIHRoaXMuZ2xvYmFsRGVsdGFUaW1lID0gdGhpcy5sb2NhbERlbHRhVGltZSA9IDA7XHJcbiBcclxuICAvLyBGaWxsIHRpbWVyIHNlbWkgZ2xvYmFsIGRhdGFcclxuICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMub2xkVGltZSA9IHRoaXMub2xkVGltZUZQUyA9IHRoaXMuZ2xvYmFsVGltZTtcclxuICB0aGlzLmZyYW1lQ291bnRlciA9IDA7XHJcbiAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XHJcbiAgdGhpcy5GUFMgPSAzMC4wO1xyXG4gIHRoaXMucGF1c2VUaW1lID0gMDtcclxuIFxyXG4gIHJldHVybiB0aGlzO1xyXG59IC8vIEVuZCBvZiAnVGltZXInIGZ1bmN0aW9uXHJcbiIsImltcG9ydCB7Y2FtLCBjYW1TZXQsIG1hdDQsIHZlYzN9IGZyb20gXCIuLi9tdGgvbWF0aC5qc1wiO1xyXG5leHBvcnQgbGV0IG1hdHJUcmFucyA9IG1hdDQoKSwgdmVjVHJhbnMgPSB2ZWMzKCk7XHJcbiBcclxuY29uc3QgRDJSID0gZGVncmVlcyA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxuY29uc3QgUjJEID0gcmFkaWFucyA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcclxuIFxyXG5mdW5jdGlvbiBkaXN0YW5jZShwMSwgcDIpIHtcclxuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxLmNsaWVudFggLSBwMi5jbGllbnRYLCAyKSArIE1hdGgucG93KHAxLmNsaWVudFkgLSBwMi5jbGllbnRZLCAyKSk7XHJcbn1cclxuXHJcbmNsYXNzIF9kaXIge1xyXG4gIGNvbnN0cnVjdG9yKHVwLCByaWdodCwgZm9yd2FyZCwgcG9zKSB7XHJcbiAgICB0aGlzLnVwID0gdXA7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICB0aGlzLmZvcndhcmQgPSBmb3J3YXJkO1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgYWxsVHJhbnNsYXRlID0gbWF0NCgpO1xyXG5cclxubGV0IG1vZGVsID0gbmV3IF9kaXIodmVjMygwLCAxLCAwKSwgdmVjMygtMSwgMCwgMCksIHZlYzMoMCwgMCwgMSksIHZlYzMoMCkpO1xyXG5cclxuZXhwb3J0IGNsYXNzIGlucHV0IHtcclxuICBjb25zdHJ1Y3RvcihybmQpIHtcclxuICAgIC8vZ2wuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMub25DbGljayhlKSk7XHJcbiAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB0aGlzLm9uTW91c2VNb3ZlKGUpKTtcclxuICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIChlKSA9PiB0aGlzLm9uTW91c2VXaGVlbChlKSk7XHJcbiAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcclxuICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB0aGlzLm9uTW91c2VVcChlKSk7XHJcbiAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB0aGlzLm9uVG91Y2hTdGFydChlKSk7XHJcbiAgICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHRoaXMub25Ub3VjaE1vdmUoZSkpO1xyXG4gICAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHRoaXMub25Ub3VjaEVuZChlKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMub25LZXlEb3duKGUpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB0aGlzLm9uS2V5VXAoZSkpO1xyXG4gICAgXHJcbiAgICB0aGlzLm1YID0gMDtcclxuICAgIHRoaXMubVkgPSAwO1xyXG4gICAgdGhpcy5tWiA9IDA7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiAgICB0aGlzLm1CdXR0b25zID0gWzAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5tQnV0dG9uc09sZCA9IFswLCAwLCAwLCAwLCAwXTtcclxuICAgIHRoaXMubUJ1dHRvbnNDbGljayA9IFswLCAwLCAwLCAwLCAwXTtcclxuICAgIFxyXG4gICAgLy8gWm9vbSBzcGVjaWZpY1xyXG4gICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmRpc3QgPSAwO1xyXG4gICAgdGhpcy5zY2FsZV9mYWN0b3IgPSAxLjA7XHJcbiAgICB0aGlzLmN1cnJfc2NhbGUgPSAxLjA7XHJcbiAgICB0aGlzLm1heF96b29tID0gOC4wO1xyXG4gICAgdGhpcy5taW5fem9vbSA9IDAuNTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB0aGlzLmtleXMgPSBbXTtcclxuICAgIHRoaXMua2V5c09sZCA9IFtdO1xyXG4gICAgdGhpcy5rZXlzQ2xpY2sgPSBbXTtcclxuICAgIFtcclxuICAgICAgXCJFbnRlclwiLCBcIkJhY2tzcGFjZVwiLFxyXG4gICAgICBcIkRlbGV0ZVwiLCBcIlNwYWNlXCIsIFwiVGFiXCIsIFwiRXNjYXBlXCIsIFwiQXJyb3dMZWZ0XCIsIFwiQXJyb3dVcFwiLCBcIkFycm93UmlnaHRcIixcclxuICAgICAgXCJBcnJvd0Rvd25cIiwgXCJTaGlmdFwiLCBcIkNvbnRyb2xcIiwgXCJBbHRcIiwgXCJTaGlmdExlZnRcIiwgXCJTaGlmdFJpZ2h0XCIsIFwiQ29udHJvbExlZnRcIixcclxuICAgICAgXCJDb250cm9sUmlnaHRcIiwgXCJQYWdlVXBcIiwgXCJQYWdlRG93blwiLCBcIkVuZFwiLCBcIkhvbWVcIixcclxuICAgICAgXCJEaWdpdDBcIiwgXCJEaWdpdDFcIixcclxuICAgICAgXCJLZXlBXCIsXHJcbiAgICAgIFwiTnVtcGFkMFwiLCBcIk51bXBhZE11bHRpcGx5XCIsXHJcbiAgICAgIFwiRjFcIixcclxuICAgIF0uZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICB0aGlzLmtleXNba2V5XSA9IDA7XHJcbiAgICAgIHRoaXMua2V5c09sZFtrZXldID0gMDtcclxuICAgICAgdGhpcy5rZXlzQ2xpY2tba2V5XSA9IDA7XHJcbiAgICB9KTtcclxuIFxyXG4gICAgdGhpcy5zaGlmdEtleSA9IGZhbHNlO1xyXG4gICAgdGhpcy5hbHRLZXkgPSBmYWxzZTtcclxuICAgIHRoaXMuY3RybEtleSA9IGZhbHNlO1xyXG4gXHJcbiAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gIH0gLy8gRW5kIG9mICdjb25zdHJ1Y3RvcicgZnVuY3Rpb25cclxuIFxyXG4gIC8vLyBNb3VzZSBoYW5kbGUgZnVuY3Rpb25zXHJcbiBcclxuICBvbkNsaWNrKGUpIHtcclxuICB9IC8vIEVuZCBvZiAnb25DbGljaycgZnVuY3Rpb25cclxuICBcclxuICBvblRvdWNoU3RhcnQoZSkge1xyXG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSlcclxuICAgICAgdGhpcy5tQnV0dG9uc1swXSA9IDE7XHJcbiAgICBlbHNlIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDIpIHtcclxuICAgICAgdGhpcy5tQnV0dG9uc1swXSA9IDA7XHJcbiAgICAgIHRoaXMubUJ1dHRvbnNbMl0gPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubUJ1dHRvbnNbMF0gPSAwO1xyXG4gICAgICB0aGlzLm1CdXR0b25zWzJdID0gMDtcclxuICAgICAgdGhpcy5tQnV0dG9uc1sxXSA9IDE7XHJcbiAgICB9XHJcbiAgICBsZXRcclxuICAgICAgLy94ID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxyXG4gICAgICAvL3kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgeCA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGUudGFyZ2V0Lm9mZnNldExlZnQsXHJcbiAgICAgIHkgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiAgICB0aGlzLm1YID0geDtcclxuICAgIHRoaXMubVkgPSB5O1xyXG4gXHJcbiAgICBsZXQgdHQgPSBlLnRhcmdldFRvdWNoZXM7XHJcbiAgICBpZiAodHQubGVuZ3RoID49IDIpIHtcclxuICAgICAgdGhpcy5kaXN0ID0gZGlzdGFuY2UodHRbMF0sIHR0WzFdKTtcclxuICAgICAgdGhpcy5zY2FsaW5nID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL3ZnLmxvZyhgWm9vbSBzdGFydDogaXNzYzoke3RoaXMuc2NhbGluZ31gKTtcclxuICB9IC8vIEVuZCBvZiAnb25Ub3VjaFN0YXJ0JyBmdW5jdGlvblxyXG4gXHJcbiAgb25Ub3VjaE1vdmUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gXHJcbiAgICBsZXRcclxuICAgICAgLy94ID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxyXG4gICAgICAvL3kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgeCA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGUudGFyZ2V0Lm9mZnNldExlZnQsXHJcbiAgICAgIHkgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiBcclxuICAgIC8vdmcubG9nKGBNb3ZlOiB4OiR7eH0geToke3l9YCk7XHJcbiBcclxuICAgIC8vdmcubG9nKGBab29tIG1vdmU6IGlzc2M6JHt0aGlzLnNjYWxpbmd9YCk7XHJcbiAgICBsZXQgdHQgPSBlLnRhcmdldFRvdWNoZXM7XHJcbiAgICAvL3ZnLmxvZyhgMDoke3R0WzBdLmNsaWVudFh9LCAxOiR7dHRbMV0uY2xpZW50WH1gKTtcclxuICAgIGlmICh0aGlzLnNjYWxpbmcpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdGhpcy5tRHogPSAwO1xyXG4gICAgICB0aGlzLmN1cnJfc2NhbGUgPSAoZGlzdGFuY2UodHRbMF0sIHR0WzFdKSAvIHRoaXMuZGlzdCkgKiB0aGlzLnNjYWxlX2ZhY3RvcjtcclxuIFxyXG4gICAgICAvL3ZnLmxvZyhgWm9vbSBtb3ZlOiBzYzoke3RoaXMuY3Vycl9zY2FsZX0gKG1aOiAke3RoaXMubVp9KSwgJHtkaXN0YW5jZSh0dFswXSwgdHRbMV0pfS8ke3RoaXMuZGlzdH1gKTtcclxuICAgICAgLy9pZiAodGhpcy5jdXJyX3NjYWxlID4gMS4zKVxyXG4gICAgICAvLyAgdGhpcy5tRHogPSAxO1xyXG4gICAgICAvL2Vsc2UgaWYgKHRoaXMuY3Vycl9zY2FsZSA8IDAuOClcclxuICAgICAgLy8gIHRoaXMubUR6ID0gLTE7XHJcbiAgICAgIGxldCBkID0gZGlzdGFuY2UodHRbMF0sIHR0WzFdKTtcclxuICAgICAgaWYgKE1hdGguYWJzKGQgLSB0aGlzLmRpc3QpID4gMCkgey8vNDcpIHtcclxuICAgICAgICBpZiAoZCA8IHRoaXMuZGlzdClcclxuICAgICAgICAgIHRoaXMubUR6ID0gMSAqIChkIC8gdGhpcy5kaXN0KSwgdGhpcy5kaXN0ID0gZDtcclxuICAgICAgICBlbHNlIGlmIChkID4gdGhpcy5kaXN0KVxyXG4gICAgICAgICAgdGhpcy5tRHogPSAtMSAqICh0aGlzLmRpc3QgLyBkKSwgdGhpcy5kaXN0ID0gZDtcclxuICAgICAgICB0aGlzLm1aICs9IHRoaXMubUR6O1xyXG4gXHJcbiAgICAgICAgdGhpcy5tRHggPSB4IC0gdGhpcy5tWDtcclxuICAgICAgICB0aGlzLm1EeSA9IHkgLSB0aGlzLm1ZO1xyXG4gICAgICAgIHRoaXMubVggPSB4O1xyXG4gICAgICAgIHRoaXMubVkgPSB5O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICBpZiAodGhpcy5tQnV0dG9uc1sxXSA9PSAxKSB7XHJcbiAgICAgIHRoaXMubUR4ID0gMDtcclxuICAgICAgdGhpcy5tRHkgPSAwO1xyXG4gICAgICB0aGlzLm1EeiA9IHkgLSB0aGlzLm1aO1xyXG4gICAgICB0aGlzLm1YID0geDtcclxuICAgICAgdGhpcy5tWSA9IHk7XHJcbiAgICAgIHRoaXMubVogKz0gdGhpcy5tRHo7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1EeCA9IHggLSB0aGlzLm1YO1xyXG4gICAgICB0aGlzLm1EeSA9IHkgLSB0aGlzLm1ZO1xyXG4gICAgICB0aGlzLm1EeiA9IDA7XHJcbiAgICAgIHRoaXMubVggPSB4O1xyXG4gICAgICB0aGlzLm1ZID0geTtcclxuICAgIH0gIFxyXG4gIH0gLy8gRW5kIG9mICdvblRvdWNoTW92ZScgZnVuY3Rpb25cclxuIFxyXG4gIG9uVG91Y2hFbmQoZSkge1xyXG4gICAgdGhpcy5tQnV0dG9uc1swXSA9IDA7XHJcbiAgICB0aGlzLm1CdXR0b25zWzFdID0gMDtcclxuICAgIHRoaXMubUJ1dHRvbnNbMl0gPSAwO1xyXG4gICAgbGV0XHJcbiAgICAgIC8veCA9IGUudG91Y2hlc1swXS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdCxcclxuICAgICAgLy95ID0gZS50b3VjaGVzWzBdLmNsaWVudFkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiAgICAgIHggPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxyXG4gICAgICB5ID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgdGhpcy5tRHggPSAwO1xyXG4gICAgdGhpcy5tRHkgPSAwO1xyXG4gICAgdGhpcy5tRHogPSAwO1xyXG4gICAgdGhpcy5tWCA9IHg7XHJcbiAgICB0aGlzLm1ZID0geTtcclxuIFxyXG4gICAgbGV0IHR0ID0gZS50YXJnZXRUb3VjaGVzO1xyXG4gICAgaWYgKHR0Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJfc2NhbGUgPCB0aGlzLm1pbl96b29tKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZV9mYWN0b3IgPSB0aGlzLm1pbl96b29tO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJfc2NhbGUgPiB0aGlzLm1heF96b29tKSB7XHJcbiAgICAgICAgICB0aGlzLnNjYWxlX2ZhY3RvciA9IHRoaXMubWF4X3pvb207IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjYWxlX2ZhY3RvciA9IHRoaXMuY3Vycl9zY2FsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2NhbGluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvL3ZnLmxvZyhgWm9vbSBlbmQ6IGlzc2M6JHt0aGlzLnNjYWxpbmd9IChtWjogJHt0aGlzLm1afSlgKTtcclxuICB9IC8vIEVuZCBvZiAnb25Ub3VjaE1vdmUnIGZ1bmN0aW9uXHJcbiBcclxuICBvbk1vdXNlTW92ZShlKSB7XHJcbiAgICBsZXRcclxuICAgICAgZHggPSBlLm1vdmVtZW50WCxcclxuICAgICAgZHkgPSBlLm1vdmVtZW50WTtcclxuICAgIHRoaXMubUR4ID0gZHg7XHJcbiAgICB0aGlzLm1EeSA9IGR5O1xyXG4gICAgdGhpcy5tRHogPSAwO1xyXG4gICAgdGhpcy5tWCArPSBkeDtcclxuICAgIHRoaXMubVkgKz0gZHk7XHJcbiAgfSAvLyBFbmQgb2YgJ29uTW91c2VNb3ZlJyBmdW5jdGlvblxyXG4gXHJcbiAgb25Nb3VzZVdoZWVsKGUpIHtcclxuICAgIGlmIChlLndoZWVsRGVsdGEgIT0gMClcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5tWiArPSAodGhpcy5tRHogPSBlLndoZWVsRGVsdGEgLyAxMjApO1xyXG4gIH0gLy8gRW5kIG9mICdvbk1vdXNlV2hlZWwnIGZ1bmN0aW9uXHJcbiBcclxuICBvbk1vdXNlRG93bihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiBcclxuICAgIHRoaXMubUJ1dHRvbnNPbGRbZS5idXR0b25dID0gdGhpcy5tQnV0dG9uc1tlLmJ1dHRvbl07XHJcbiAgICB0aGlzLm1CdXR0b25zW2UuYnV0dG9uXSA9IDE7XHJcbiAgICB0aGlzLm1CdXR0b25zQ2xpY2tbZS5idXR0b25dID0gIXRoaXMubUJ1dHRvbnNPbGRbZS5idXR0b25dICYmIHRoaXMubUJ1dHRvbnNbZS5idXR0b25dO1xyXG4gICAgXHJcbiAgICB0aGlzLnNoaWZ0S2V5ID0gZS5zaGlmdEtleTtcclxuICAgIHRoaXMuYWx0S2V5ID0gZS5hbHRLZXk7XHJcbiAgICB0aGlzLmN0cmxLZXkgPSBlLmN0cmxLZXk7XHJcbiAgfSAvLyBFbmQgb2YgJ29uTW91c2VNb3ZlJyBmdW5jdGlvblxyXG4gIFxyXG4gIG9uTW91c2VVcChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiBcclxuICAgIHRoaXMubUJ1dHRvbnNPbGRbZS5idXR0b25dID0gdGhpcy5tQnV0dG9uc1tlLmJ1dHRvbl07XHJcbiAgICB0aGlzLm1CdXR0b25zW2UuYnV0dG9uXSA9IDA7XHJcbiAgICB0aGlzLm1CdXR0b25zQ2xpY2tbZS5idXR0b25dID0gMDtcclxuIFxyXG4gICAgdGhpcy5zaGlmdEtleSA9IGUuc2hpZnRLZXk7XHJcbiAgICB0aGlzLmFsdEtleSA9IGUuYWx0S2V5O1xyXG4gICAgdGhpcy5jdHJsS2V5ID0gZS5jdHJsS2V5O1xyXG4gIH0gLy8gRW5kIG9mICdvbk1vdXNlTW92ZScgZnVuY3Rpb25cclxuIFxyXG4gIC8vLyBLZXlib2FyZCBoYW5kbGVcclxuICBvbktleURvd24oZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBsZXQgZm9jdXNlZF9lbGVtZW50ID0gbnVsbDtcclxuICAgIGlmIChkb2N1bWVudC5oYXNGb2N1cygpICYmXHJcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSAmJlxyXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICBmb2N1c2VkX2VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICBpZiAoZm9jdXNlZF9lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gICAgICBcclxuICAgIGlmIChlLmNvZGUgIT0gXCJGMTJcIiAmJiBlLmNvZGUgIT0gXCJGMTFcIiAmJiBlLmNvZGUgIT0gXCJLZXlSXCIpXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMua2V5c09sZFtlLmNvZGVdID0gdGhpcy5rZXlzW2UuY29kZV07XHJcbiAgICB0aGlzLmtleXNbZS5jb2RlXSA9IDE7XHJcbiAgICB0aGlzLmtleXNDbGlja1tlLmNvZGVdID0gIXRoaXMua2V5c09sZFtlLmNvZGVdICYmIHRoaXMua2V5c1tlLmNvZGVdO1xyXG4gICAgXHJcbiAgICB0aGlzLnNoaWZ0S2V5ID0gZS5zaGlmdEtleTtcclxuICAgIHRoaXMuYWx0S2V5ID0gZS5hbHRLZXk7XHJcbiAgICB0aGlzLmN0cmxLZXkgPSBlLmN0cmxLZXk7XHJcbiAgfSAvLyBFbmQgb2YgJ29uS2V5RG93bicgZnVuY3Rpb25cclxuICBcclxuICBvbktleVVwKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3RleHRhcmVhJylcclxuICAgICAgcmV0dXJuO1xyXG4gICAgbGV0IGZvY3VzZWRfZWxlbWVudCA9IG51bGw7XHJcbiAgICBpZiAoZG9jdW1lbnQuaGFzRm9jdXMoKSAmJlxyXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiZcclxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgZm9jdXNlZF9lbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgaWYgKGZvY3VzZWRfZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3RleHRhcmVhJylcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9ICAgICAgXHJcbiAgICBpZiAoZS5jb2RlICE9IFwiRjEyXCIgJiYgZS5jb2RlICE9IFwiRjExXCIgJiYgZS5jb2RlICE9IFwiS2V5UlwiKVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmtleXNPbGRbZS5jb2RlXSA9IHRoaXMua2V5c1tlLmNvZGVdO1xyXG4gICAgdGhpcy5rZXlzW2UuY29kZV0gPSAwO1xyXG4gICAgdGhpcy5rZXlzQ2xpY2tbZS5jb2RlXSA9IDA7XHJcbiBcclxuICAgIHRoaXMuc2hpZnRLZXkgPSBlLnNoaWZ0S2V5O1xyXG4gICAgdGhpcy5hbHRLZXkgPSBlLmFsdEtleTtcclxuICAgIHRoaXMuY3RybEtleSA9IGUuY3RybEtleTtcclxuICB9IC8vIEVuZCBvZiAnb25LZXlVcCcgZnVuY3Rpb25cclxuICBcclxuICAvLy8gQ2FtZXJhIG1vdmVtZW50IGhhbmRsaW5nXHJcbiAgcmVzZXQoKSB7XHJcbiAgICAvL3ZnLmxvZyhgTXNEejogJHt0aGlzLm1Een1gKTtcclxuICAgIHRoaXMubUR4ID0gMDtcclxuICAgIHRoaXMubUR5ID0gMDtcclxuICAgIHRoaXMubUR6ID0gMDtcclxuICAgIHRoaXMubUJ1dHRvbnNDbGljay5mb3JFYWNoKGsgPT4gdGhpcy5tQnV0dG9uc0NsaWNrW2tdID0gMCk7XHJcbiAgICB0aGlzLmtleXNDbGljay5mb3JFYWNoKGsgPT4gdGhpcy5rZXlzQ2xpY2tba10gPSAwKTtcclxuIFxyXG4gICAgdGhpcy5zaGlmdEtleSA9IHRoaXMua2V5c1tcIlNoaWZ0TGVmdFwiXSB8fCB0aGlzLmtleXNbXCJTaGlmdFJpZ2h0XCJdO1xyXG4gICAgdGhpcy5hbHRLZXkgPSB0aGlzLmtleXNbXCJBbHRMZWZ0XCJdIHx8IHRoaXMua2V5c1tcIkFsdFJpZ2h0XCJdO1xyXG4gICAgdGhpcy5jdHJsS2V5ID0gdGhpcy5rZXlzW1wiQ29udHJvbExlZnRcIl0gfHwgdGhpcy5rZXlzW1wiQ29udHJvbFJpZ2h0XCJdO1xyXG4gIH0gLy8gRW5kIG9mIHJlc2V0JyBmdW5jdGlvblxyXG4gICAgXHJcbiAgcmVzcG9uc2VDYW1lcmEodGltZXIpIHtcclxuICAgIGlmICh0aGlzLnNoaWZ0S2V5ICYmIHRoaXMua2V5c0NsaWNrW1wiS2V5RlwiXSkge1xyXG4gICAgICBjYW1TZXQodmVjMyg1KSwgdmVjMygwKSwgdmVjMygwLCAxLCAwKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmN0cmxLZXkpIHtcclxuICAgICAgbGV0IG1hdHIgPSBtYXQ0KCk7XHJcbiAgICAgIGxldCBhbmdsZVNwZWVkID0gNzA7XHJcbiAgICAgIGxldCByb3RhdGVZID0gMCwgcm90YXRlWCA9IDA7XHJcbiAgICAgIGxldCBzcGVlZCA9IDE1LCBkaXN0ID0gMDtcclxuICAgICAgbGV0IHByZXZQb3MgPSBtb2RlbC5wb3M7XHJcbiAgICBcclxuICAgICAgaWYgKHRoaXMuY3RybEtleSkge1xyXG4gICAgICAgIGNhbS5sb2MgPSBjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkKTtcclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiTnVtcGFkOFwiXSkge1xyXG4gICAgICAgICAgZGlzdCA9IHRpbWVyLmdsb2JhbERlbHRhVGltZSAqIHNwZWVkICogKHRoaXMua2V5c1tcIk51bXBhZDlcIl0gPT0gdHJ1ZSA/IDggOiAxKTtcclxuXHJcbiAgICAgICAgICBjYW1TZXQoY2FtLmxvYy5hZGQobW9kZWwuZm9yd2FyZC5tdWwoZGlzdCkpLCBjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkKSwgbW9kZWwudXApO1xyXG4gICAgICAgICAgbWF0ciA9IG1hdHIubXVsKG1hdDQoKS50cmFuc2xhdGUobW9kZWwuZm9yd2FyZC5tdWwoZGlzdCkpKTtcclxuICAgICAgICAgIG1vZGVsLnBvcyA9IG1vZGVsLnBvcy5tdWwobWF0NCgpLnRyYW5zbGF0ZShtb2RlbC5mb3J3YXJkLm11bChkaXN0KSkpO1xyXG4gICAgICAgICAgYWxsVHJhbnNsYXRlID0gYWxsVHJhbnNsYXRlLm11bChtYXQ0KCkudHJhbnNsYXRlKG1vZGVsLmZvcndhcmQubXVsKGRpc3QpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJOdW1wYWQ0XCJdKSB7XHJcbiAgICAgICAgICBkaXN0ID0gdGltZXIuZ2xvYmFsRGVsdGFUaW1lICogc3BlZWQgKiAodGhpcy5rZXlzW1wiTnVtcGFkOVwiXSA9PSB0cnVlID8gOCA6IDEpO1xyXG5cclxuICAgICAgICAgIGNhbVNldChjYW0ubG9jLnN1Yihtb2RlbC5mb3J3YXJkLm11bChkaXN0KSksIGNhbS5sb2MuYWRkKG1vZGVsLmZvcndhcmQpLCBtb2RlbC51cCk7XHJcbiAgICAgICAgICBtYXRyID0gbWF0ci5tdWwobWF0NCgpLnRyYW5zbGF0ZShtb2RlbC5mb3J3YXJkLm11bChkaXN0KS5uZWcoKSkpO1xyXG4gICAgICAgICAgbW9kZWwucG9zID0gbW9kZWwucG9zLm11bChtYXQ0KCkudHJhbnNsYXRlKG1vZGVsLmZvcndhcmQubXVsKGRpc3QpLm5lZygpKSk7XHJcbiAgICAgICAgICBhbGxUcmFuc2xhdGUgPSBhbGxUcmFuc2xhdGUubXVsKG1hdDQoKS50cmFuc2xhdGUobW9kZWwuZm9yd2FyZC5tdWwoZGlzdCkubmVnKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld1BvcyA9IG1vZGVsLnBvcztcclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiQXJyb3dSaWdodFwiXSkge1xyXG4gICAgICAgICAgcm90YXRlWSA9IHRpbWVyLmdsb2JhbERlbHRhVGltZSAqIGFuZ2xlU3BlZWQ7XHJcbiAgICBcclxuICAgICAgICAgIG1vZGVsLmZvcndhcmQgPSBtb2RlbC5mb3J3YXJkLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVksIG1vZGVsLnVwLm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgICBtb2RlbC5yaWdodCA9IG1vZGVsLnJpZ2h0Lm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVksIG1vZGVsLnVwLm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJBcnJvd0xlZnRcIl0pIHtcclxuICAgICAgICAgIHJvdGF0ZVkgPSAtdGltZXIuZ2xvYmFsRGVsdGFUaW1lICogYW5nbGVTcGVlZDtcclxuICAgIFxyXG4gICAgICAgICAgbW9kZWwuZm9yd2FyZCA9IG1vZGVsLmZvcndhcmQubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWSwgbW9kZWwudXAubm9ybWFsaXplKCkpKTtcclxuICAgICAgICAgIG1vZGVsLnJpZ2h0ID0gbW9kZWwucmlnaHQubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWSwgbW9kZWwudXAubm9ybWFsaXplKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMua2V5c1tcIkFycm93VXBcIl0pIHtcclxuICAgICAgICAgIHJvdGF0ZVggPSB0aW1lci5nbG9iYWxEZWx0YVRpbWUgKiBhbmdsZVNwZWVkO1xyXG4gICAgXHJcbiAgICAgICAgICBtb2RlbC5mb3J3YXJkID0gbW9kZWwuZm9yd2FyZC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVYLCBtb2RlbC5yaWdodC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgICAgbW9kZWwudXAgPSBtb2RlbC51cC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVYLCBtb2RlbC5yaWdodC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiQXJyb3dEb3duXCJdKSB7XHJcbiAgICAgICAgICByb3RhdGVYID0gLXRpbWVyLmdsb2JhbERlbHRhVGltZSAqIGFuZ2xlU3BlZWQ7XHJcbiAgICBcclxuICAgICAgICAgIG1vZGVsLmZvcndhcmQgPSBtb2RlbC5mb3J3YXJkLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVgsIG1vZGVsLnJpZ2h0Lm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgICBtb2RlbC51cCA9IG1vZGVsLnVwLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVgsIG1vZGVsLnJpZ2h0Lm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdmVjVHJhbnMgPSB2ZWNUcmFucy5zdWIodmVjMyhwcmV2UG9zLngsIDAsIHByZXZQb3Mueikuc3ViKHZlYzMobmV3UG9zLngsIDAsIG5ld1Bvcy56KSkubXVsKDAuMDAxKSk7XHJcbiAgICAgICAgbWF0clRyYW5zID0gbWF0clRyYW5zLm11bChtYXQ0KCkudHJhbnNsYXRlKHZlYzMobmV3UG9zLngsIDAsIG5ld1Bvcy56KS5zdWIodmVjMyhwcmV2UG9zLngsIDAsIHByZXZQb3MueikpKSk7XHJcblxyXG4gICAgICAgIGNhbVNldChtb2RlbC5wb3Muc3ViKG1vZGVsLmZvcndhcmQubXVsKDUpKS5hZGQobW9kZWwudXAubXVsKDMuNSkpLCBtb2RlbC5wb3MuYWRkKG1vZGVsLmZvcndhcmQubXVsKDIpKSwgbW9kZWwudXApO1xyXG4gICAgICAgIHJldHVybiBtYXRyLm11bChhbGxUcmFuc2xhdGUuaW52ZXJzZSgpKS5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVYLCBtb2RlbC5yaWdodC5ub3JtYWxpemUoKSkubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWSwgbW9kZWwudXAubm9ybWFsaXplKCkpKSkubXVsKGFsbFRyYW5zbGF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IC8vIEVuZCBvZiAncmVzcG9uc2VDYW1lcmEnIGZ1bmN0aW9uXHJcbn0gLy8gRW5kIG9mICdpbnB1dCcgY2xhc3MiLCJpbXBvcnQgeyB2ZWMzLCBtYXQ0LCBjYW1DcmVhdGUsIGNhbVNldCwgY2FtIH0gZnJvbSBcIi4uL210aC9tYXRoLmpzXCI7XHJcbmltcG9ydCAqIGFzIGFuaW0gZnJvbSAnLi4vYW5pbS9hbmltLmpzJztcclxuaW1wb3J0IHsgaW5wdXQsIG1hdHJUcmFucywgdmVjVHJhbnMgfSBmcm9tIFwiLi4vdXRpbHMvY250cmwuanNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUocm5kKSB7XHJcbiAgbGV0IGNhbnZhcyA9IHJuZC5jYW52YXM7XHJcbiAgLy8gTG9va3VwIHRoZSBzaXplIHRoZSBicm93c2VyIGlzIGRpc3BsYXlpbmcgdGhlIGNhbnZhcyBpbiBDU1MgcGl4ZWxzLlxyXG4gIGNvbnN0IGRpc3BsYXlXaWR0aCAgPSBjYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgY29uc3QgZGlzcGxheUhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcbiBcclxuICAvLyBDaGVjayBpZiB0aGUgY2FudmFzIGlzIG5vdCB0aGUgc2FtZSBzaXplLlxyXG4gIGNvbnN0IG5lZWRSZXNpemUgPSBjYW52YXMud2lkdGggICE9PSBkaXNwbGF5V2lkdGggfHxcclxuICAgICAgICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCAhPT0gZGlzcGxheUhlaWdodDtcclxuIFxyXG4gIGlmIChuZWVkUmVzaXplKSB7XHJcbiAgICAvLyBNYWtlIHRoZSBjYW52YXMgdGhlIHNhbWUgc2l6ZVxyXG4gICAgY2FudmFzLndpZHRoICA9IGRpc3BsYXlXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBkaXNwbGF5SGVpZ2h0O1xyXG4gIH1cclxuIFxyXG4gIHJuZC5nbC52aWV3cG9ydCgwLCAwLCBybmQuZ2wuY2FudmFzLndpZHRoLCBybmQuZ2wuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gIHJldHVybiBuZWVkUmVzaXplO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmltc0luaXQocm5kKSB7XHJcbiAgcm5kLnByaW1zID0gW107XHJcblxyXG4gIC8vIENyZWF0aW5nIGZpcnN0IHByaW1pdGl2ZVxyXG4gIHJuZC5wcmltc1swXSA9IGFuaW0uY3JlYXRlRmlndXJlKHJuZCwgXCJjdWJlXCIsIFwiZGVmYXVsdFwiLCAwLjgsIHZlYzMoKSk7XHJcblxyXG4gIC8vIENyZWF0aW5nIHNlY29uZCBwcmltaXRpdmVcclxuICBjb25zdCBzaXplID0gNTAwMDtcclxuICAvLyBMb2FkaW5nIHNoYWRlclxyXG4gIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWcuc3JjID0gXCIuL21vc3MuanBnXCI7XHJcbiAgYW5pbS50ZXh0dXJlKHJuZC5nbCwge2ltZzogaW1nLCBuYW1lOiBcImxhbmRcIn0pO1xyXG4gIHJuZC5wcmltc1sxXSA9IGFuaW0uY3JlYXRlRmlndXJlKHJuZCwgXCJxdWFkXCIsIFwicXVhZFwiLCBzaXplLCB2ZWMzKDApKTtcclxuICBcclxuICBybmQuZmxhZyA9IGZhbHNlO1xyXG4gIHJuZC5wcmltc1syXSA9IGFuaW0ubG9hZFByaW0ocm5kLCBcIi4vY293Lm9ialwiKTtcclxuXHJcbiAgcmV0dXJuIHJuZC5wcmltcztcclxufVxyXG5cclxuZnVuY3Rpb24gZnJhbWVCbG9ja0JpbmQocm5kKSB7XHJcbiAgbGV0IGdsID0gcm5kLmdsO1xyXG4gIC8vIExvYWRpbmcgbWF0cml4ZXMgYW5kIGZyYW1lIGJ1ZmZlclxyXG4gIGZvciAobGV0IGkgPSAwOyBybmQucHJpbXNbaV0gIT0gdW5kZWZpbmVkOyBpKyspXHJcbiAgICBpZiAoaSAhPSAyIHx8IHJuZC5mbGFnKSB7XHJcbiAgICAgIGxldCBwcmcgPSBybmQucHJpbXNbaV0uc2hkcy5wcmc7XHJcblxyXG4gICAgICBnbC51c2VQcm9ncmFtKHByZyk7XHJcbiAgICAgIGdsLnVuaWZvcm1CbG9ja0JpbmRpbmcocHJnLCBcclxuICAgICAgICBnbC5nZXRVbmlmb3JtQmxvY2tJbmRleChwcmcsIFwiRnJhbWVCdWZmZXJcIiksXHJcbiAgICAgICAgcm5kLmZyYW1lVW5pZm9ybUJ1ZmZlckluZGV4KTtcclxuXHJcbiAgICAgIHJuZC5tYXRyaXhSZWxvYWQocm5kLnByaW1zW2ldKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIF9yZW5kZXJ7XHJcbiAgZnJhbWVEYXRhID0gWzAsIDAsIDAsIDBdO1xyXG4gIGZyYW1lVW5pZm9ybUJ1ZmZlckluZGV4ID0gNTtcclxuICB0aW1lciA9IG5ldyBhbmltLlRpbWVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXNJZCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIik7XHJcbiAgICB0aGlzLmdsID0gZ2w7XHJcblxyXG4gICAgaWYgKGdsID09PSBudWxsKSB7XHJcbiAgICAgIGFsZXJ0KFwiV2ViR0wyIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcblxyXG4gICAgLy8gU2V0dGluZyBjYW1lcmEgYW5kIG1hdHJpeGVzXHJcbiAgICBjYW1DcmVhdGUodGhpcy5jYW52YXMpO1xyXG4gICAgY2FtU2V0KHZlYzMoMCwgMiwgLTUpLCB2ZWMzKDApLCB2ZWMzKDAsIDEsIDApKTtcclxuICAgIHRoaXMuY2FtID0gY2FtO1xyXG5cclxuICAgIC8vIEFycmF5IG9mIHByaW1pdGl2ZXMgaW5pdGlhbGl6aW5nLCBjcmVhdGluZyBvZiBwcmltaXRpdmVzXHJcbiAgICB0aGlzLnByaW1zID0gcHJpbXNJbml0KHRoaXMpO1xyXG5cclxuICAgIC8vIEZyYW1lIGJ1ZmZlclxyXG4gICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5VTklGT1JNX0JVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLlVOSUZPUk1fQlVGRkVSLCA0ICogNCwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgIGZyYW1lQmxvY2tCaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5maXJzdCA9IHRydWU7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6aW5nIGlucHV0IHN5c3RlbVxyXG4gICAgdGhpcy5pbnB1dCA9IG5ldyBpbnB1dCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcclxuICAgIC8vIENsZWFyaW5nIGZyYW1lXHJcbiAgICBnbC5jbGVhckNvbG9yKDAuMTIsIDAuODUsIDAuOTcwLCAxKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG4gICAgZ2wuY2xlYXIoZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICBcclxuICAgIC8vIERyYXdpbmcgZnBzXHJcbiAgICB0aGlzLnRpbWVyLnJlc3BvbnNlKFwiZnBzXCIpO1xyXG5cclxuICAgIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUodGhpcyk7XHJcblxyXG4gICAgLy8gU2VuZGluZyBmcmFtZSBidWZmZXIgdG8gc2hhZGVyc1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5VTklGT1JNX0JVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLlVOSUZPUk1fQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZnJhbWVEYXRhKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgZ2wuYmluZEJ1ZmZlckJhc2UoZ2wuVU5JRk9STV9CVUZGRVIsIHRoaXMuZnJhbWVVbmlmb3JtQnVmZmVySW5kZXgsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgXHJcbiAgICAvLyBSZXNwb25zaW5nIGlucHV0IHN5c3RlbVxyXG4gICAgaWYgKHRoaXMuaW5wdXQuY3RybEtleSkge1xyXG4gICAgICB0aGlzLm5ld01hdHJXb3JsZCA9IHRoaXMuaW5wdXQucmVzcG9uc2VDYW1lcmEodGhpcy50aW1lcik7XHJcbiAgICAgIGlmICh0aGlzLm5ld01hdHJXb3JsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5wcmltc1swXS5tYXRyV29ybGQgPSB0aGlzLnByaW1zWzBdLm1hdHJXb3JsZC5tdWwodGhpcy5uZXdNYXRyV29ybGQpO1xyXG4gICAgICAgIHRoaXMuY2FtID0gY2FtO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJDYW1lcmEgcG9zaXRpb246XCIsIGNhbS5sb2MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZmxhZyAmJiB0aGlzLmZpcnN0KVxyXG4gICAgICBmcmFtZUJsb2NrQmluZCh0aGlzKSwgdGhpcy5maXJzdCA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyB0aGlzLnByaW1zW2ldICE9IHVuZGVmaW5lZDsgaSsrKVxyXG4gICAgICBpZiAoaSAhPSAyIHx8IHRoaXMuZmxhZykge1xyXG4gICAgICAgIGxldCBwcmcgPSB0aGlzLnByaW1zW2ldLnNoZHMucHJnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmltc1tpXS5uYW1lID09IFwicXVhZFwiKVxyXG4gICAgICAgICAgdGhpcy5wcmltc1tpXS5tYXRyV29ybGQgPSBtYXRyVHJhbnM7XHJcblxyXG4gICAgICAgIGdsLnVzZVByb2dyYW0ocHJnKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRpbmcgdGltZSBvbiBzaGFkZXJzXHJcbiAgICAgICAgdGhpcy50aW1lTG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJUaW1lXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVMb2MgIT0gbnVsbClcclxuICAgICAgICAgIGdsLnVuaWZvcm0xZih0aGlzLnRpbWVMb2MsIHRoaXMudGltZXIuZ2xvYmFsVGltZSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0aW5nIHRyYW5zbGF0aW5nIG9mIHRleHR1cmUgb24gc2hhZGVyc1xyXG4gICAgICAgIHRoaXMudHJhbnNMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIlRyYW5zVmVjXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zTG9jICE9IG51bGwpXHJcbiAgICAgICAgICBnbC51bmlmb3JtMmYodGhpcy50cmFuc0xvYywgdmVjVHJhbnMueCwgdmVjVHJhbnMueik7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0aW5nIGNhbWVyYSBsb2NhdGlvbiBvbiBzaGFkZXJzXHJcbiAgICAgICAgdGhpcy5jYW1lcmFMb2NhdGlvaW5Mb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIkNhbUxvY1wiKTtcclxuICAgICAgICBpZiAodGhpcy5jYW1lcmFMb2NhdGlvaW5Mb2MgIT0gbnVsbClcclxuICAgICAgICAgIGdsLnVuaWZvcm0zZih0aGlzLmNhbWVyYUxvY2F0aW9pbkxvYywgdGhpcy5jYW0ubG9jLngsIHRoaXMuY2FtLmxvYy55LCB0aGlzLmNhbS5sb2Mueik7XHJcblxyXG4gICAgICAgIC8vIFJlbG9hZGluZyBtYXRyaXhlc1xyXG4gICAgICAgIHRoaXMubWF0cml4UmVsb2FkKHRoaXMucHJpbXNbaV0pO1xyXG5cclxuICAgICAgICAvLyBEcmF3aW5nIG9mIHByaW1pdGl2ZXNcclxuICAgICAgICBnbC5iaW5kVmVydGV4QXJyYXkodGhpcy5wcmltc1tpXS52ZXJ0ZXhBdHRyaWJBcnJheSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJpbXNbaV0uaW5kZXhBcnJheSA9PSBudWxsKVxyXG4gICAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHRoaXMucHJpbXNbaV0ubnVtT2ZFbGVtZW50cyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgdGhpcy5wcmltc1tpXS5udW1PZkVsZW1lbnRzLCBnbC5VTlNJR05FRF9JTlQsIDApO1xyXG4gICAgICB9XHJcbiAgfSAvLyBFbmQgb2YgJ3JlbmRlcicgZnVuY3Rpb25cclxuXHJcbiAgbWFpbkxvb3AoKSB7XHJcbiAgICBjb25zdCBkcmF3ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLnRpbWVyLnJlc3BvbnNlKCk7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgICB9O1xyXG4gICAgZHJhdygpO1xyXG4gIH0gLy8gRW5kIG9mICdtYWluTG9vcCcgZnVuY3Rpb25cclxuXHJcbiAgbWF0cml4UmVsb2FkKHByaW0pIHtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcclxuICAgIGxldCBwcmcgPSBwcmltLnNoZHMucHJnO1xyXG5cclxuICAgIC8vIE1hdHJpeGVzXHJcbiAgICAvLyBNYXRyaXggb2Ygdmlld1xyXG4gICAgY29uc3QgVmlld0xvYyA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcmcsIFwiTWF0clZpZXdcIik7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFZpZXdMb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY2FtLm1hdHJWaWV3LnRvQXJyYXkoKSkpO1xyXG5cclxuICAgIC8vIE1hdHJpeCBvZiBwcm9qZWN0aW9uXHJcbiAgICBjb25zdCBQcm9qTG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJNYXRyUHJvalwiKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoUHJvakxvYywgZmFsc2UsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jYW0ubWF0clByb2oudG9BcnJheSgpKSk7XHJcblxyXG4gICAgLy8gTWF0cml4IG9mIHZpZXcgcHJvamVjdGlvblxyXG4gICAgY29uc3QgVlBMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIk1hdHJWUFwiKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoVlBMb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY2FtLm1hdHJWUC50b0FycmF5KCkpKTtcclxuXHJcbiAgICAvLyBNYXRyaXggb2Ygd29ybGRcclxuICAgIGNvbnN0IFdvcmxkTG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJNYXRyV29ybGRcIik7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFdvcmxkTG9jLCBmYWxzZSwgbmV3IEZsb2F0MzJBcnJheShwcmltLm1hdHJXb3JsZC50b0FycmF5KCkpKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgY29uc3Qgcm5kID0gbmV3IF9yZW5kZXIoXCJnbGNhbnZhc1wiKTtcclxuICBybmQubWFpbkxvb3AoKTtcclxufSk7Il0sIm5hbWVzIjpbImFuaW0uY3JlYXRlRmlndXJlIiwiYW5pbS50ZXh0dXJlIiwiYW5pbS5sb2FkUHJpbSIsImFuaW0uVGltZXIiXSwibWFwcGluZ3MiOiI7OztJQUVBLE1BQU0sS0FBSztJQUNYLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDbEMsZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDbEMsZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDbEMsZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNwQyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDckMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3JDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNyQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztJQUN4RyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTO0lBQ3hHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVM7SUFDeEcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztJQUN4RyxZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEM7SUFDQSxZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMxQyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDMUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUMsS0FBSztJQUNMO0lBQ0EsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ1gsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUN2QjtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckM7SUFDQSxRQUFRLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLEtBQUs7QUFDTDtJQUNBLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUMzQixjQUFjLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUMzQixjQUFjLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHO0lBQzlCLFFBQVEsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7SUFDbEUsZUFBZSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuRTtJQUNBLEtBQUs7QUFDTDtJQUNBLElBQUksTUFBTSxHQUFHO0lBQ2IsUUFBUSxJQUFJLENBQUM7SUFDYixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLFFBQVEsT0FBTyxDQUFDLENBQUM7SUFDakIsS0FBSztBQUNMO0lBQ0EsSUFBSSxPQUFPLEdBQUc7SUFDZCxRQUFRLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ3ZCLFFBQVEsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hDO0lBQ0EsUUFBUSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLFlBQVksT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUMxQjtJQUNBO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtBQUNBO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7QUFDQTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxPQUFPLENBQUMsQ0FBQztJQUNqQixLQUFLO0FBQ0w7SUFDQSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFO0lBQ3JCLFFBQVEsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSztJQUN2QyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVCO0lBQ0EsUUFBUSxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUM1RyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDNUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVHLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxLQUFLO0FBQ0w7SUFDQSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7SUFDbkIsUUFBUSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxL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QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsS0FBSztBQUNMO0lBQ0EsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ1gsUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVE7SUFDaEMsWUFBWSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVELGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztJQUNsQyxZQUFZLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0Y7SUFDQSxZQUFZLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RHLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0Ryx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLFNBQVM7SUFDVCxRQUFRLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsS0FBSztBQUNMO0lBQ0EsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ1gsUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVE7SUFDaEMsWUFBWSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFH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QUMsQ0FBQyxDQUFDO0lBQy9DLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxvQkFBb0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELEtBQUs7QUFDTDtJQUNBLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3RCLFFBQVEsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMxQyxRQUFRLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUMsUUFBUSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQy9DO0lBQ0EsUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0Msb0JBQW9CLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3QyxvQkFBb0IsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENB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QU8sRUFBRSxDQUFDO0lBQ3ZCLEtBQUs7QUFDTDtJQUNBLElBQUksT0FBTztJQUNYLElBQUk7SUFDSixRQUFRLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzFDO0lBQ0E7SUFDQSxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTTtJQUN0QyxRQUFRLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdDO0lBQ0EsUUFBUSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUM3QztJQUNBLFFBQVEsSUFBSSxDQUFDLFFBQVE7SUFDckIsUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUMzRSxZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsS0FBSztBQUNMO0lBQ0EsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDckIsUUFBUSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2pEO0lBQ0EsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsZ0NBQWdDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxnQ0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxRQUFRLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxnQ0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELGdDQUFnQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELFFBQVEsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELGdDQUFnQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsUUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN2QixRQUFRLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCO0lBQ0EsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxLQUFLO0lBQ0wsQ0FBQztBQUNEO0lBQ08sU0FBUyxTQUFTLEVBQUUsTUFBTSxFQUFFO0lB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SUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QjtJQUNBLElBQUksT0FBTyxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7QUFDRDtJQUNBLFNBQVMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixFQUFFLE9BQU8sVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0FBQ0Q7SUFDQSxTQUFTLGFBQWEsQ0FBQyxJQUFJO0lBQzNCO0lBQ0EsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0lBQzVFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsd0JBQXdCLENBQUMsRUFBRTtJQUMvRSxFQUFFO0lBQ0YsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEcsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEUsUUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckUsSUFBSSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQzVDO0lBQ0EsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEUsR0FBRztJQUNILEVBQUUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0FBQ0Q7SUFDQSxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUU7SUFDOUIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0FBQ0Q7SUFDQSxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUU7SUFDOUIsRUFBRSxJQUFJLE9BQU8sSUFBSSxTQUFTO0lBQzFCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDO0lBQ0EsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7QUFDRDtJQUNBLFNBQVMsb0JBQW9CLENBQUMsSUFBSSxFQUFFO0lBQ3BDLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNsQyxJQUFJLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUV2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QUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHO0lBQ3BCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuRDtJQUNBLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLEdBQUc7SUFDSDtJQUNBO0lBQ0EsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRTtJQUNoQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN0QztJQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsRUFBRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7QUFDRDtJQUNPLGVBQWUsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7SUFDMUMsRUFBRSxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxFQUFFLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLEVBQUUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxFQUFFLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNwQixFQUFFLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNwQixFQUFFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNqQixFQUFFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQjtJQUNBLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM5QyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO0lBQ3RDLE1BQU0sSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEQsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7SUFDakMsUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxJQUFJLFNBQVMsR0FBRyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUM3RixPQUFPO0lBQ1A7SUFDQSxRQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNsRSxLQUFLO0lBQ0wsU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtJQUMzQyxNQUFNLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNoRCxRQUFRLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7SUFDcEMsVUFBVSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25GLFVBQVUsUUFBUSxDQUFDLE1BQU0s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QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxVQUFVLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxVQUFVLFlBQVksR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsU0FBUztJQUNULFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQ2xDLFVBQVUsSUFBSSxHQUFHLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RjtJQUNBLFVBQVUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3RixVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0UsVUFBVSxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckYsVUFBVSxZQUFZLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNGLFNBQVM7SUFDVCxRQUFRLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0IsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7SUFDckMsVUFBVSxPQUFPLEdBQUcsS0FBSyxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7SUFDdkQ7SUFDQSxVQUFVLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRixVQUFVLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RixTQUFTO0lBQ1QsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7SUFDcEMsVUFBVSxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztJQUN4RDtJQUNBLFVBQVUsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFGLFVBQVUsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLFNBQVM7SUFDVCxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtJQUNsQyxVQUFVLE9BQU8sR0FBRyxLQUFLLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztJQUN2RDtJQUNBLFVBQVUsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdGLFVBQVUsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25GLFNBQVM7SUFDVCxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUNwQyxVQUFVLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO0lBQ3hEO0lBQ0EsVUFBVSxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0YsVUFBVSxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsU0FBUztBQUNUO0FBQ0E7SUFDQSxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRyxRQUFRLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BIO0lBQ0EsUUFBUSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxSCxRQUFRLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFL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
