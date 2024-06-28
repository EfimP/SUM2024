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

        neg() {
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
    vec3 color = vec3(0.2, 0.2, 0.2);

    N = faceforward(N, V, N);

    //Defuse
    vec3 KdDiff = vec3(0.4, 0.4, 0.4);
    color += KdDiff * max(0.1, dot(N, L));
    //Specular
    vec3 R = reflect(V, N);
    color += vec3(0.1, 0.2, 0.3) * max(0.0, pow(dot(R, L), 1.0));

    /*
    if (pow(abs(sin(Time + DrawPos.x * 0.7)), 2000.0) > 0.3 || 
        pow(abs(sin(Time + DrawPos.z * 0.7)), 2000.0) > 0.3)
        color = vec3(0, 1, 0);
        */
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
      rnd.prims[rnd.primCount] = prim;
      rnd.isPrimDraw[rnd.primCount++] = true;
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

    let iteration = 0;

    async function loadPrim(rnd, path) {
      iteration = rnd.primCount;
      rnd.isPrimDraw[rnd.primCount++] = false;
      const response = await fetch(path);
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
      prim.matrWorld = mat4().scale(vec3(0.5)).mul(mat4().rotateY(90)).mul(mat4().translate(vec3(0, 5, 0)));
      rnd.prims[iteration] = prim;
      rnd.isPrimDraw[iteration] = true;
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

    let model = new _dir(vec3(0, 1, 0), vec3(-1, 0, 0), vec3(0, 0, 1), vec3(0));
    let allTranslate = mat4();
    let speed = 0;
    let step = 0;
    let newSpeed = 0;
    let inertSpeed = 250;

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
        let matr = mat4();
        let angleSpeed = 70;
        let rotateY = 0, rotateX = 0;
        let /*speed = 15,*/ dist = 0;
        let prevPos = model.pos;
     
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

    function frameBlockBind(rnd) {
      let gl = rnd.gl;
      // Loading matrixes and frame buffer
      for (let i = 0; i < rnd.primCount; i++)
        if (rnd.oldFlags[i] != rnd.isPrimDraw[i] && rnd.isPrimDraw[i] == true) {
          let prg = rnd.prims[i].shds.prg;

          gl.useProgram(prg);
          gl.uniformBlockBinding(prg, 
            gl.getUniformBlockIndex(prg, "FrameBuffer"),
            rnd.frameUniformBufferIndex);

          rnd.matrixReload(rnd.prims[i]);

          rnd.oldFlags[i] = rnd.isPrimDraw[i];
        }
    }

    function primsInit(rnd) {
      rnd.prims = [];

      //loading plane
      loadPrim(rnd, "./jet2.obj");

      // Creating cube
      createFigure(rnd, "cube", "default", 0.8, vec3());

      // Creating ground
      const size = 5000;
      // Loading texture
      let img = new Image();
      img.src = "./road.jpg";
      texture(rnd.gl, {img: img, name: "land"});
      createFigure(rnd, "quad", "quad", size, vec3());
    }

    class _render{
      frameData = [0, 0, 0, 0];
      frameUniformBufferIndex = 5;
      timer = new Timer;

      constructor(canvasId) {
        //Getting canvas and gl context
        this.canvas = document.getElementById(canvasId);
        const gl = this.canvas.getContext("webgl2");
        this.gl = gl;

        // Checking gl context
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
        this.isPrimDraw = [];
        this.primCount = 0;
        primsInit(this);

        // Frame buffer
        this.frameBuffer = gl.createBuffer();
        gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
        gl.bufferData(gl.UNIFORM_BUFFER, 4 * 4, gl.STATIC_DRAW);

        // Binding frame buffer, reloading matrixes
        this.oldFlags = [];
        for (let i = 0; i < this.primCount; i++)
          this.oldFlags[i] = false;

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
        this.newMatrWorld = this.input.responseCamera(this.timer);
        if (this.newMatrWorld != null && this.isPrimDraw[0] == true) {
          this.prims[0].matrWorld = this.prims[0].matrWorld.mul(this.newMatrWorld);
          this.cam = cam;
          //console.log("Camera position:", cam.loc);
        }

        frameBlockBind(this);

        for (let i = 0; i < this.primCount; i++)
          if (this.isPrimDraw[i] == true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbXRoL21hdDQuanMiLCIuLi8uLi9tdGgvdmVjMy5qcyIsIi4uLy4uL210aC92ZWMyLmpzIiwiLi4vLi4vbXRoL2NhbS5qcyIsIi4uLy4uL2FuaW0vcm5kL3Jlcy9zaGRzLmpzIiwiLi4vLi4vYW5pbS9ybmQvcmVzL3RleC5qcyIsIi4uLy4uL2FuaW0vcm5kL3ByaW0uanMiLCIuLi8uLi9hbmltL3RpbWVyLmpzIiwiLi4vLi4vdXRpbHMvY250cmwuanMiLCIuLi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlYzMgfSBmcm9tICcuL3ZlYzMuanMnO1xyXG5cclxuY2xhc3MgX21hdDR7XHJcbiAgICBjb25zdHJ1Y3RvcihBMDAsIEEwMSwgQTAyLCBBMDMsXHJcbiAgICAgICAgICAgICAgICBBMTAsIEExMSwgQTEyLCBBMTMsXHJcbiAgICAgICAgICAgICAgICBBMjAsIEEyMSwgQTIyLCBBMjMsXHJcbiAgICAgICAgICAgICAgICBBMzAsIEEzMSwgQTMyLCBBMzMpIHtcclxuICAgICAgICBsZXQgbSA9IFtbQTAwLCBBMDEsIEEwMiwgQTAzXSxcclxuICAgICAgICAgICAgICAgICBbQTEwLCBBMTEsIEExMiwgQTEzXSxcclxuICAgICAgICAgICAgICAgICBbQTIwLCBBMjEsIEEyMiwgQTIzXSxcclxuICAgICAgICAgICAgICAgICBbQTMwLCBBMzEsIEEzMiwgQTMzXV07XHJcbiAgICAgICAgaWYgKG1bMF1bMF0gPT0gdW5kZWZpbmVkIHx8IG1bMF1bMV0gPT0gdW5kZWZpbmVkIHx8IG1bMF1bMl0gPT0gdW5kZWZpbmVkIHx8IG1bMF1bM10gPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG1bMV1bMF0gPT0gdW5kZWZpbmVkIHx8IG1bMV1bMV0gPT0gdW5kZWZpbmVkIHx8IG1bMV1bMl0gPT0gdW5kZWZpbmVkIHx8IG1bMV1bM10gPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG1bMl1bMF0gPT0gdW5kZWZpbmVkIHx8IG1bMl1bMV0gPT0gdW5kZWZpbmVkIHx8IG1bMl1bMl0gPT0gdW5kZWZpbmVkIHx8IG1bMl1bM10gPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG1bM11bMF0gPT0gdW5kZWZpbmVkIHx8IG1bM11bMV0gPT0gdW5kZWZpbmVkIHx8IG1bM11bMl0gPT0gdW5kZWZpbmVkIHx8IG1bM11bM10gPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLm0gPSBbWzEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDAsIDFdXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubSA9IFtbQTAwLCBBMDEsIEEwMiwgQTAzXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtBMTAsIEExMSwgQTEyLCBBMTNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW0EyMCwgQTIxLCBBMjIsIEEyM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbQTMwLCBBMzEsIEEzMiwgQTMzXV07XHJcbiAgICB9IC8vIEVuZCBvZiAnY29uc3RydWN0b3InIGZ1bmN0aW9uXHJcbiAgICAgICAgXHJcbiAgICBtdWwobSkge1xyXG4gICAgICAgIGxldCByID0gbWF0NCgpO1xyXG5cclxuICAgICAgICByLm1bMF1bMF0gPSB0aGlzLm1bMF1bMF0gKiBtLm1bMF1bMF0gKyB0aGlzLm1bMF1bMV0gKiBtLm1bMV1bMF0gKyB0aGlzLm1bMF1bMl0gKiBtLm1bMl1bMF0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMF1bM10gKiBtLm1bM11bMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzBdWzFdID0gdGhpcy5tWzBdWzBdICogbS5tWzBdWzFdICsgdGhpcy5tWzBdWzFdICogbS5tWzFdWzFdICsgdGhpcy5tWzBdWzJdICogbS5tWzJdWzFdICtcclxuICAgICAgICAgICAgdGhpcy5tWzBdWzNdICogbS5tWzNdWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVswXVsyXSA9IHRoaXMubVswXVswXSAqIG0ubVswXVsyXSArIHRoaXMubVswXVsxXSAqIG0ubVsxXVsyXSArIHRoaXMubVswXVsyXSAqIG0ubVsyXVsyXSArXHJcbiAgICAgICAgICAgIHRoaXMubVswXVszXSAqIG0ubVszXVsyXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMF1bM10gPSB0aGlzLm1bMF1bMF0gKiBtLm1bMF1bM10gKyB0aGlzLm1bMF1bMV0gKiBtLm1bMV1bM10gKyB0aGlzLm1bMF1bMl0gKiBtLm1bMl1bM10gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMF1bM10gKiBtLm1bM11bM107XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzFdWzBdID0gdGhpcy5tWzFdWzBdICogbS5tWzBdWzBdICsgdGhpcy5tWzFdWzFdICogbS5tWzFdWzBdICsgdGhpcy5tWzFdWzJdICogbS5tWzJdWzBdICtcclxuICAgICAgICAgICAgdGhpcy5tWzFdWzNdICogbS5tWzNdWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsxXVsxXSA9IHRoaXMubVsxXVswXSAqIG0ubVswXVsxXSArIHRoaXMubVsxXVsxXSAqIG0ubVsxXVsxXSArIHRoaXMubVsxXVsyXSAqIG0ubVsyXVsxXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsxXVszXSAqIG0ubVszXVsxXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMV1bMl0gPSB0aGlzLm1bMV1bMF0gKiBtLm1bMF1bMl0gKyB0aGlzLm1bMV1bMV0gKiBtLm1bMV1bMl0gKyB0aGlzLm1bMV1bMl0gKiBtLm1bMl1bMl0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMV1bM10gKiBtLm1bM11bMl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzFdWzNdID0gdGhpcy5tWzFdWzBdICogbS5tWzBdWzNdICsgdGhpcy5tWzFdWzFdICogbS5tWzFdWzNdICsgdGhpcy5tWzFdWzJdICogbS5tWzJdWzNdICtcclxuICAgICAgICAgICAgdGhpcy5tWzFdWzNdICogbS5tWzNdWzNdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsyXVswXSA9IHRoaXMubVsyXVswXSAqIG0ubVswXVswXSArIHRoaXMubVsyXVsxXSAqIG0ubVsxXVswXSArIHRoaXMubVsyXVsyXSAqIG0ubVsyXVswXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsyXVszXSAqIG0ubVszXVswXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMl1bMV0gPSB0aGlzLm1bMl1bMF0gKiBtLm1bMF1bMV0gKyB0aGlzLm1bMl1bMV0gKiBtLm1bMV1bMV0gKyB0aGlzLm1bMl1bMl0gKiBtLm1bMl1bMV0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMl1bM10gKiBtLm1bM11bMV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzJdWzJdID0gdGhpcy5tWzJdWzBdICogbS5tWzBdWzJdICsgdGhpcy5tWzJdWzFdICogbS5tWzFdWzJdICsgdGhpcy5tWzJdWzJdICogbS5tWzJdWzJdICtcclxuICAgICAgICAgICAgdGhpcy5tWzJdWzNdICogbS5tWzNdWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsyXVszXSA9IHRoaXMubVsyXVswXSAqIG0ubVswXVszXSArIHRoaXMubVsyXVsxXSAqIG0ubVsxXVszXSArIHRoaXMubVsyXVsyXSAqIG0ubVsyXVszXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsyXVszXSAqIG0ubVszXVszXTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICByLm1bM11bMF0gPSB0aGlzLm1bM11bMF0gKiBtLm1bMF1bMF0gKyB0aGlzLm1bM11bMV0gKiBtLm1bMV1bMF0gKyB0aGlzLm1bM11bMl0gKiBtLm1bMl1bMF0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bM11bM10gKiBtLm1bM11bMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzNdWzFdID0gdGhpcy5tWzNdWzBdICogbS5tWzBdWzFdICsgdGhpcy5tWzNdWzFdICogbS5tWzFdWzFdICsgdGhpcy5tWzNdWzJdICogbS5tWzJdWzFdICtcclxuICAgICAgICAgICAgdGhpcy5tWzNdWzNdICogbS5tWzNdWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVszXVsyXSA9IHRoaXMubVszXVswXSAqIG0ubVswXVsyXSArIHRoaXMubVszXVsxXSAqIG0ubVsxXVsyXSArIHRoaXMubVszXVsyXSAqIG0ubVsyXVsyXSArXHJcbiAgICAgICAgICAgIHRoaXMubVszXVszXSAqIG0ubVszXVsyXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bM11bM10gPSB0aGlzLm1bM11bMF0gKiBtLm1bMF1bM10gKyB0aGlzLm1bM11bMV0gKiBtLm1bMV1bM10gKyB0aGlzLm1bM11bMl0gKiBtLm1bMl1bM10gK1xyXG4gICAgICAgICAgICB0aGlzLm1bM11bM10gKiBtLm1bM11bM107XHJcblxyXG4gICAgICAgIHJldHVybiByOyAgICAgICAgICAgIFxyXG4gICAgfSAvLyBFbmQgb2YgJ211bCcgZnVuY3Rpb25cclxuXHJcbiAgICBkZXRlcm0zeDMoQTExLCBBMTIsIEExMyxcclxuICAgICAgICAgICAgICBBMjEsIEEyMiwgQTIzLFxyXG4gICAgICAgICAgICAgIEEzMSwgQTMyLCBBMzMgKSB7XHJcbiAgICAgICAgcmV0dXJuIEExMSAqIEEyMiAqIEEzMyArIEExMiAqIEEyMyAqIEEzMSArIEExMyAqIEEyMSAqIEEzMiAtXHJcbiAgICAgICAgICAgICAgIEExMSAqIEEyMyAqIEEzMiAtIEExMiAqIEEyMSAqIEEzMyAtIEExMyAqIEEyMiAqIEEzMTtcclxuXHJcbiAgICB9IC8vIEVuZCBvZiAnZGV0ZXJtM3gzJyBmdW5jdGlvblxyXG5cclxuICAgIGRldGVybSgpIHtcclxuICAgICAgICBsZXQgbiA9XHJcbiAgICAgICAgICAgICt0aGlzLm1bMF1bMF0gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMV0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgIC10aGlzLm1bMF1bMV0gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgICt0aGlzLm1bMF1bMl0gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgIC10aGlzLm1bMF1bM10gKiB0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdKTtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH0gLy8gRW5kIG9mICdkZXRlcm0nIGZ1bmN0aW9uXHJcblxyXG4gICAgaW52ZXJzZSgpIHtcclxuICAgICAgICBsZXQgciA9IG1hdDQoKTtcclxuICAgICAgICBsZXQgZGV0ID0gdGhpcy5kZXRlcm0oKTtcclxuXHJcbiAgICAgICAgaWYgKGRldCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0NCgpO1xyXG5cclxuICAgICAgICAvKiBidWlsZCBhZGpvaW50IG1hdHJpeCAqL1xyXG4gICAgICAgIHIubVswXVswXSA9XHJcbiAgICAgICAgICAgICt0aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMV0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzFdWzBdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMl1bMF0gPVxyXG4gICAgICAgICAgICArdGhpcy5kZXRlcm0zeDModGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMV0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVszXVswXSA9XHJcbiAgICAgICAgICAgIC10aGlzLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzBdWzFdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bMV0gPVxyXG4gICAgICAgICAgICArdGhpcy5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMl0sIHRoaXMubVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMl0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVsxXSA9XHJcbiAgICAgICAgICAgIC10aGlzLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzFdID1cclxuICAgICAgICAgICAgK3RoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bMl0pIC8gZGV0O1xyXG5cclxuXHJcbiAgICAgICAgci5tWzBdWzJdID1cclxuICAgICAgICAgICAgK3RoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bMl0gPVxyXG4gICAgICAgICAgICAtdGhpcy5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMl0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMl0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVsyXSA9XHJcbiAgICAgICAgICAgICt0aGlzLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzJdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bMl0pIC8gZGV0O1xyXG5cclxuXHJcbiAgICAgICAgci5tWzBdWzNdID1cclxuICAgICAgICAgICAgLXRoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bM10gPVxyXG4gICAgICAgICAgICArdGhpcy5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMl0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMl0sIHRoaXMubVsyXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVszXSA9XHJcbiAgICAgICAgICAgIC10aGlzLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzNdID1cclxuICAgICAgICAgICAgK3RoaXMuZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bMl0pIC8gZGV0O1xyXG5cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH0gLy8gRW5kIG9mICdpbnZlcnNlJyBmdW5jdGlvbiAgICBcclxuXHJcbiAgICByb3RhdGUoYW5nbGUsIHYpIHtcclxuICAgICAgICBsZXQgYSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MC4wLFxyXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4oYSksXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdDQoYyArIHYueCAqIHYueCAqICgxIC0gYyksIHYueSAqIHYueCAqICgxIC0gYykgLSB2LnogKiBzLCB2LnogKiB2LnggKiAoMSAtIGMpICsgdi55ICogcywgMCxcclxuICAgICAgICAgICAgICAgICAgICB2LnggKiB2LnkgKiAoMSAtIGMpICsgdi56ICogcywgYyArIHYueSAqIHYueSAqICgxIC0gYyksIHYueiAqIHYueSAqICgxIC0gYykgLSB2LnggKiBzLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHYueCAqIHYueiAqICgxIC0gYykgLSB2LnkgKiBzLCB2LnkgKiB2LnogKiAoMSAtIGMpICsgdi54ICogcywgYyArIHYueiAqIHYueiAqICgxIC0gYyksIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9IC8vIEVuZCBvZiAncm90YXRlJyBmdW5jdGlvblxyXG5cclxuICAgIHJvdGF0ZVgoYW5nbGUpIHtcclxuICAgICAgICBsZXQgYSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MC4wLFxyXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4oYSksXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdDQoMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCBjLCBzLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIC1zLCBjLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3JvdGF0ZVgnIGZ1bmN0aW9uXHJcblxyXG4gICAgcm90YXRlWShhbmdsZSkge1xyXG4gICAgICAgIGxldCBhID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwLjAsXHJcbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbihhKSxcclxuICAgICAgICAgICAgYyA9IE1hdGguY29zKGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0NChjLCAwLCAtcywgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHMsIDAsIGMsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9IC8vIEVuZCBvZiAncm90YXRlWScgZnVuY3Rpb25cclxuXHJcbiAgICByb3RhdGVaKGFuZ2xlKSB7XHJcbiAgICAgICAgbGV0IGEgPSBhbmdsZSAqIE1hdGguUEkgLyAxODAuMCxcclxuICAgICAgICAgICAgcyA9IE1hdGguc2luKGEpLFxyXG4gICAgICAgICAgICBjID0gTWF0aC5jb3MoYSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXQ0KGMsIHMsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgLXMsIGMsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH0gLy8gRW5kIG9mICdyb3RhdGVaJyBmdW5jdGlvblxyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm1Qb2ludCh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHZlYzModi54ICogdGhpcy5tWzBdWzBdICsgdi55ICogdGhpcy5tWzFdWzBdICsgdi56ICogdGhpcy5tWzJdWzBdICsgdGhpcy5tWzNdWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHYueCAqIHRoaXMubVswXVsxXSArIHYueSAqIHRoaXMubVsxXVsxXSArIHYueiAqIHRoaXMubVsyXVsxXSArIHRoaXMubVszXVsxXSxcclxuICAgICAgICAgICAgICAgICAgICB2LnggKiB0aGlzLm1bMF1bMl0gKyB2LnkgKiB0aGlzLm1bMV1bMl0gKyB2LnogKiB0aGlzLm1bMl1bMl0gKyB0aGlzLm1bM11bMl0pO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3BvaW50dHJhbnMnIGZ1bmN0aW9uXHJcblxyXG4gICAgdHJhbnNsYXRlKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgIHJldHVybiBtYXQ0KDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYueCwgdi55LCB2LnosIDEpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09ICdudW1iZXInKVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0NCgxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LCB2LCB2LCAxKTsgXHJcbiAgICB9IC8vIEVuZCBvZiAndHJhbnNsYXRlJyBmdW5jdGlvbiAgICBcclxuXHJcbiAgICBzY2FsZSh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdDQodi54LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAwLCB2LnksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgIDAsIDAsIHYueiwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcblxyXG4gICAgfSAvLyBFbmQgb2YgJ3NjYWxlJyBmdW5jdGlvblxyXG5cclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCguLi50aGlzLm0pO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3RvQXJyYXknIGZ1bmN0aW9uXHJcblxyXG59IC8vIEVuZCBvZiAnX21hdDQnIGNsYXNzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWF0NCguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gbmV3IF9tYXQ0KC4uLmFyZ3MpO1xyXG59IC8vIEVuZCBvZiAnbWF0NCcgZnVuY3Rpb24iLCJpbXBvcnQgeyBtYXQ0IH0gZnJvbSBcIi4vbWF0NC5qc1wiO1xyXG5cclxuY2xhc3MgX3ZlYzMge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xyXG4gICAgICAgIGlmICh4ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy54ID0gMCwgdGhpcy55ID0gMCwgdGhpcy56ID0gMDtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgaWYgKHgubGVuZ3RoID09IDMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4WzBdLCB0aGlzLnkgPSB4WzFdLCB0aGlzLnogPSB4WzJdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4LngsIHRoaXMueSA9IHgueSwgdGhpcy56ID0geC56O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaWYgKHkgPT0gdW5kZWZpbmVkIHx8IHogPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geCwgdGhpcy56ID0geDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geSwgdGhpcy56ID0gejtcclxuICAgIH0gLy8gRW5kIG9mICdjb25zdHJ1Y3RvcicgZnVuY3Rpb25cclxuXHJcbiAgICBhZGQodikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKyB2LCB0aGlzLnkgKyB2LCB0aGlzLnogKyB2KTtcclxuICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKyB2LngsIHRoaXMueSArIHYueSwgdGhpcy56ICsgdi56KTtcclxuICAgIH0gLy8gRW5kIG9mICdhZGQnIGZ1bmN0aW9uXHJcblxyXG4gICAgc2V0QWRkKHYxLCB2Mikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdjIgPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZlYzModjEueCArIHYyLCB2MS55ICsgdjIsIHYxLnogKyB2Mik7XHJcbiAgICAgICAgcmV0dXJuIHZlYzModjEueCArIHYyLngsIHYxLnkgKyB2Mi55LCB2MS56ICsgdjIueik7XHJcbiAgICB9IC8vIEVuZCBvZiAnYWRkJyBmdW5jdGlvblxyXG5cclxuICAgIHN1Yih2KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAtIHYsIHRoaXMueSAtIHYsIHRoaXMueiAtIHYpO1xyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAtIHYueCwgdGhpcy55IC0gdi55LCB0aGlzLnogLSB2LnopO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3N1YicgZnVuY3Rpb25cclxuXHJcbiAgICBzZXRTdWIodjEsIHYyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2MiA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmVjMyh2MS54IC0gdjIsIHYxLnkgLSB2MiwgdjEueiAtIHYyKTtcclxuICAgICAgICByZXR1cm4gdmVjMyh2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTtcclxuICAgIH0gLy8gRW5kIG9mICdzdWInIGZ1bmN0aW9uXHJcblxyXG4gICAgbXVsKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZlYzModGhpcy54ICogdiwgdGhpcy55ICogdiwgdGhpcy56ICogdik7XHJcbiAgICAgICAgZWxzZSBpZiAodi5tICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCB3ID0gdGhpcy54ICogdi5tWzBdWzNdICsgdGhpcy55ICogdi5tWzFdWzNdICsgdGhpcy56ICogdi5tWzJdWzNdICsgdi5tWzNdWzNdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZlYzMoKHRoaXMueCAqIHYubVswXVswXSArIHRoaXMueSAqIHYubVsxXVswXSArIHRoaXMueiAqIHYubVsyXVswXSArIHYubVszXVswXSkgLyB3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy54ICogdi5tWzBdWzFdICsgdGhpcy55ICogdi5tWzFdWzFdICsgdGhpcy56ICogdi5tWzJdWzFdICsgdi5tWzNdWzFdKSAvIHcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnggKiB2Lm1bMF1bMl0gKyB0aGlzLnkgKiB2Lm1bMV1bMl0gKyB0aGlzLnogKiB2Lm1bMl1bMl0gKyB2Lm1bM11bMl0pIC8gdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XHJcbiAgICB9IC8vIEVuZCBvZiAnbXVsJyBmdW5jdGlvblxyXG5cclxuICAgIGRpdihuKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuID09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAvIG4sIHRoaXMueSAvIG4sIHRoaXMueiAvIG4pO1xyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gICAgfSAvLyBFbmQgb2YgJ2RpdicgZnVuY3Rpb25cclxuXHJcbiAgICBuZWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHZlYzMoLXRoaXMueCwgLSB0aGlzLnksIC10aGlzLnopO1xyXG4gICAgfSAvLyBFbmQgb2YgJ25lZycgZnVuY3Rpb25cclxuXHJcbiAgICBsZW4oKSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMubXVsKHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAobGVuID09IDEgfHwgbGVuID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBsZW47XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChsZW4pO1xyXG4gICAgfSAvLyBFbmQgb2YgJ2xlbicgZnVuY3Rpb25cclxuXHJcbiAgICBsZW4yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm11bCh0aGlzKTtcclxuICAgIH0gLy8gRW5kIG9mICdsZW4yJyBmdW5jdGlvblxyXG5cclxuICAgIG5vcm1hbGl6ZSgpIHtcclxuICAgICAgICBsZXQgbGVuID0gdGhpcy5tdWwodGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChsZW4gIT0gMCAmJiBsZW4gIT0gMSkge1xyXG4gICAgICAgICAgICBsZW4gPSBNYXRoLnNxcnQobGVuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZlYzModGhpcy54IC8gbGVuLCB0aGlzLnkgLyBsZW4sIHRoaXMueiAvIGxlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSAvLyBFbmQgb2YgJ25vcm1hbGl6ZScgZnVuY3Rpb25cclxuXHJcbiAgICB0cmFuc2Zvcm0odikge1xyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAqIHYubVswXVswXSArIHRoaXMueSAqIHYubVsxXVswXSArIHRoaXMueiAqIHYubVsyXVswXSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKiB2Lm1bMF1bMV0gKyB0aGlzLnkgKiB2Lm1bMV1bMV0gKyB0aGlzLnogKiB2Lm1bMl1bMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICogdi5tWzBdWzJdICsgdGhpcy55ICogdi5tWzFdWzJdICsgdGhpcy56ICogdi5tWzJdWzJdKTsgXHJcbiAgICB9IC8vIEVuZCBvZiAndHJhbnNmb3JtJyBmdW5jdGlvblxyXG5cclxuICAgIGNyb3NzKHYpIHtcclxuICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnkgKiB2LnogLSB0aGlzLnogKiB2LnksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56ICogdi54IC0gdGhpcy54ICogdi56LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAqIHYueSAtIHRoaXMueSAqIHYueCk7XHJcbiAgICB9IC8vIEVuZCBvZidjcm9zcycgZnVuY3Rpb25cclxuXHJcbiAgICB2aWV3KGxvYywgYXQsIHVwKSB7XHJcbiAgICAgICAgbGV0IGRpciA9IGF0LnN1Yihsb2MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCByaWdodCA9IGRpci5jcm9zcyh1cCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbGV0IHVwMSA9IHJpZ2h0LmNyb3NzKGRpcikubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXQ0KHJpZ2h0LngsIHVwMS54LCAtZGlyLngsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQueSwgdXAxLnksIC1kaXIueSwgMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQueiwgdXAxLnosIC1kaXIueiwgMCxcclxuICAgICAgICAgICAgICAgICAgICAtcmlnaHQubXVsKGxvYyksIC1sb2MubXVsKHVwMSksIGxvYy5tdWwoZGlyKSwgMSk7XHJcbiAgICB9IC8vIEVuZCBvZiAndmlldycgZnVuY3Rpb25cclxuICAgIFxyXG4gICAgZnJ1c3R1bShsLCByLCBiLCB0LCBuLCBmKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdDQoKDIgKiBuKSAvIChyIC0gbCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgIDAsICgyICogbikgLyAodCAtIGIpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAociArIGwpIC8gKHIgLSBsKSwgKHQgKyBiKSAvICh0IC0gYiksICgtKChmICsgbikgLyAoZiAtIG4pKSksICgtMSksXHJcbiAgICAgICAgICAgICAgICAgICAgIDAsIDAsICgtKCgyICogbiAqIGYpIC8gKGYgLSBuKSkpLCAwKTtcclxuICAgIH0gLyogRW5kIG9mICdmcnVzdHVtJyBmdW5jdGlvbiAqL1xyXG4gICAgICBcclxuICAgIG9ydGhvKGwsIHIsIGIsIHQsIG4sIGYpIHtcclxuICAgICAgICByZXR1cm4gbWF0NCgyIC8gKHIgLSBsKSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAyIC8gKHQgLSBiKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAoLTIpIC8gKGYgLSBuKSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAoLSgociArIGwpIC8gKHIgLSBsKSkpLCAoLSgodCArIGIpIC8gKHQgLSBiKSkpLCAoLSgoZiArIG4pIC8gKGYgLSBuKSkpLCAxKTtcclxuICAgIH0gLy8gRW5mIG9mICdvcnRobycgZnVuY3Rpb25cclxufSAvLyBFbmQgb2YgJ3ZlYzMnIGNsYXNzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVjMyguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gbmV3IF92ZWMzKC4uLmFyZ3MpO1xyXG59IC8vIEVuZCBvZiAndmVjMycgZnVuY3Rpb24iLCJjbGFzcyBfdmVjMiB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICBpZiAoeCA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICB0aGlzLnggPSAwLCB0aGlzLnkgPSAwO1xyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnb2JqZWN0JylcclxuICAgICAgICAgIGlmICh4Lmxlbmd0aCA9PSAyKVxyXG4gICAgICAgICAgICAgIHRoaXMueCA9IHhbMF0sIHRoaXMueSA9IHhbMV07XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgdGhpcy54ID0geC54LCB0aGlzLnkgPSB4Lnk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICAgIGlmICh5ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICB0aGlzLnggPSB4LCB0aGlzLnkgPSB4O1xyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIHRoaXMueCA9IHgsIHRoaXMueSA9IHk7XHJcbiAgICB9IC8vIEVuZCBvZiAnY29uc3RydWN0b3InIGZ1bmN0aW9uXHJcbn0gLy8gRW5kIG9mICd2ZWMyJyBjbGFzc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlYzIoLi4uYXJncykge1xyXG4gICAgcmV0dXJuIG5ldyBfdmVjMiguLi5hcmdzKTtcclxufSAvLyBFbmQgb2YgJ3ZlYzMnIGZ1bmN0aW9uIiwiaW1wb3J0IHsgdmVjMyB9IGZyb20gJy4vdmVjMy5qcyc7XHJcbmltcG9ydCB7IG1hdDQgfSBmcm9tICcuL21hdDQuanMnO1xyXG5cclxuZXhwb3J0IGxldCBjYW0gPSAwO1xyXG5cclxuY2xhc3MgY2FtZXJhIHtcclxuICAgIGNvbnN0cnVjdG9yIChjYW52YXMpIHtcclxuICAgICAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB0aGlzLmZyYW1lSCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3AgKyAxO1xyXG4gICAgICAgIHRoaXMuZnJhbWVXID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdCArIDE7XHJcbiAgICAgICAgdGhpcy5wcm9qRGlzdCA9IDAuMTtcclxuICAgICAgICB0aGlzLnByb2pTaXplID0gMC4xO1xyXG4gICAgICAgIHRoaXMuZmFyQ2xpcCA9IDEwMDAwO1xyXG4gICAgICAgIHRoaXMubWF0clZpZXcgPSB2ZWMzKCkudmlldyh2ZWMzKCksIHZlYzMoKSwgdmVjMygpKTtcclxuICAgICAgICB0aGlzLmxvYyA9IHZlYzMoKTtcclxuICAgICAgICB0aGlzLmF0ID0gdmVjMygpO1xyXG4gICAgICAgIHRoaXMudXAgPSB2ZWMzKCk7XHJcbiAgICAgICAgdGhpcy5wcm9qU2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvalNldCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yeCA9IHRoaXMucnkgPSB0aGlzLnByb2pTaXplO1xyXG5cclxuICAgICAgICAvKiBDb3JyZWN0IGFzcGVjdCByYXRpbyAqL1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lVyA+PSB0aGlzLmZyYW1lSClcclxuICAgICAgICB0aGlzLnJ4ICo9IHRoaXMuZnJhbWVXIC8gdGhpcy5mcmFtZUg7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMucnkgKj0gdGhpcy5mcmFtZUggLyB0aGlzLmZyYW1lVztcclxuXHJcbiAgICAgICAgdGhpcy5tYXRyUHJvaiA9XHJcbiAgICAgICAgdmVjMygpLmZydXN0dW0oLXRoaXMucnggLyAyLCB0aGlzLnJ4IC8gMiwgLXRoaXMucnkgLyAyLCB0aGlzLnJ5IC8gMixcclxuICAgICAgICAgICAgdGhpcy5wcm9qRGlzdCwgdGhpcy5mYXJDbGlwKTtcclxuICAgICAgICB0aGlzLm1hdHJWUCA9IHRoaXMubWF0clZpZXcubXVsKHRoaXMubWF0clByb2opO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3Byb2pzZXQnIGZ1bmN0aW9uXHJcblxyXG4gICAgc2V0KGxvYywgYXQsIHVwKSB7XHJcbiAgICAgICAgdGhpcy5tYXRyVmlldyA9IHZlYzMoKS52aWV3KGxvYywgYXQsIHVwKTtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHZlYzModGhpcy5tYXRyVmlldy5tWzBdWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0clZpZXcubVsxXVswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHJWaWV3Lm1bMl1bMF0pO1xyXG4gICAgICAgIHRoaXMudXAgPSB2ZWMzKHRoaXMubWF0clZpZXcubVswXVsxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHJWaWV3Lm1bMV1bMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRyVmlldy5tWzJdWzFdKTtcclxuICAgICAgICB0aGlzLmRpciA9IHZlYzMoLXRoaXMubWF0clZpZXcubVswXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtdGhpcy5tYXRyVmlldy5tWzFdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC10aGlzLm1hdHJWaWV3Lm1bMl1bMl0pO1xyXG4gICAgICAgIHRoaXMubG9jID0gbG9jO1xyXG4gICAgICAgIHRoaXMuYXQgPSBhdDtcclxuXHJcbiAgICAgICAgdGhpcy5tYXRyVlAgPSB0aGlzLm1hdHJWaWV3Lm11bCh0aGlzLm1hdHJQcm9qKTtcclxuICAgIH0gLy8gRW5kIG9mICdFUDRfUm5kQ2FtU2V0JyBmdW5jdGlvblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FtQ3JlYXRlIChjYW52YXMpIHtcclxuICAgIGNhbSA9IG5ldyBjYW1lcmEoY2FudmFzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbVNldCAobG9jLCBhdCwgdXApIHtcclxuICAgIGNhbS5zZXQobG9jLCBhdCwgdXApO1xyXG59IiwibGV0IHZzX3R4dCA9XHJcbmAjdmVyc2lvbiAzMDAgZXNcclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG5pbiB2ZWMzIEluUG9zaXRpb247XHJcbmluIHZlYzIgRHJhd1RleENvb3JkO1xyXG5pbiB2ZWMzIEluTm9ybWFsO1xyXG4gICAgXHJcbm91dCB2ZWMzIERyYXdQb3M7XHJcbm91dCB2ZWMyIERyYXdUZXg7XHJcbm91dCB2ZWMzIERyYXdOb3JtYWw7XHJcbnVuaWZvcm0gZmxvYXQgVGltZTtcclxuXHJcbnVuaWZvcm0gbWF0NCBNYXRyVmlldztcclxudW5pZm9ybSBtYXQ0IE1hdHJWUDtcclxudW5pZm9ybSBtYXQ0IE1hdHJXb3JsZDtcclxuXHJcbnVuaWZvcm0gRnJhbWVCdWZmZXJcclxueyAgXHJcbiAgICB2ZWM0IERhdGE7XHJcbn07XHJcblxyXG52b2lkIG1haW4oIHZvaWQgKVxyXG57XHJcbiAgICBnbF9Qb3NpdGlvbiA9IE1hdHJWUCAqIE1hdHJXb3JsZCAqIHZlYzQoSW5Qb3NpdGlvbiwgMS4wKTtcclxuICAgIERyYXdQb3MgPSB2ZWMzKE1hdHJXb3JsZCAqIHZlYzQoSW5Qb3NpdGlvbiwgMSkpO1xyXG4gICAgRHJhd05vcm1hbCA9IEluTm9ybWFsO1xyXG4gICAgRHJhd1RleCA9IERyYXdUZXhDb29yZDtcclxufVxyXG5gO1xyXG5sZXQgZnNfdHh0ID1cclxuYCN2ZXJzaW9uIDMwMCBlc1xyXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbm91dCB2ZWM0IE91dENvbG9yO1xyXG5cclxuaW4gdmVjMyBEcmF3UG9zO1xyXG5pbiB2ZWMyIERyYXdUZXg7XHJcbmluIHZlYzMgRHJhd05vcm1hbDtcclxudW5pZm9ybSBmbG9hdCBUaW1lO1xyXG51bmlmb3JtIHZlYzMgQ2FtTG9jO1xyXG5cclxudW5pZm9ybSBGcmFtZUJ1ZmZlclxyXG57XHJcbiAgICB2ZWM0IERhdGE7XHJcbn07XHJcblxyXG52b2lkIG1haW4oIHZvaWQgKVxyXG57XHJcbiAgICB2ZWMzIFYgPSBub3JtYWxpemUoRHJhd1BvcyAtIENhbUxvYyk7XHJcbiAgICB2ZWMzIE4gPSBub3JtYWxpemUoRHJhd05vcm1hbCk7XHJcbiAgICB2ZWMzIEwgPSBub3JtYWxpemUodmVjMygxLyogKyA4ICogc2luKFRpbWUgKiA1KSovLCAxLCAxKSk7XHJcbiAgICB2ZWMzIGNvbG9yID0gdmVjMygwLjIsIDAuMiwgMC4yKTtcclxuXHJcbiAgICBOID0gZmFjZWZvcndhcmQoTiwgViwgTik7XHJcblxyXG4gICAgLy9EZWZ1c2VcclxuICAgIHZlYzMgS2REaWZmID0gdmVjMygwLjQsIDAuNCwgMC40KTtcclxuICAgIGNvbG9yICs9IEtkRGlmZiAqIG1heCgwLjEsIGRvdChOLCBMKSk7XHJcbiAgICAvL1NwZWN1bGFyXHJcbiAgICB2ZWMzIFIgPSByZWZsZWN0KFYsIE4pO1xyXG4gICAgY29sb3IgKz0gdmVjMygwLjEsIDAuMiwgMC4zKSAqIG1heCgwLjAsIHBvdyhkb3QoUiwgTCksIDEuMCkpO1xyXG5cclxuICAgIC8qXHJcbiAgICBpZiAocG93KGFicyhzaW4oVGltZSArIERyYXdQb3MueCAqIDAuNykpLCAyMDAwLjApID4gMC4zIHx8IFxyXG4gICAgICAgIHBvdyhhYnMoc2luKFRpbWUgKyBEcmF3UG9zLnogKiAwLjcpKSwgMjAwMC4wKSA+IDAuMylcclxuICAgICAgICBjb2xvciA9IHZlYzMoMCwgMSwgMCk7XHJcbiAgICAgICAgKi9cclxuICAgIC8vY29sb3IgKz0gdmVjMygwLCAxLCAwKSAqIHBvdyhhYnMoc2luKFRpbWUgKyBEcmF3UG9zLnggKiAwLjcpKSwgMjAwMC4wKTtcclxuXHJcbiAgICBPdXRDb2xvciA9IHZlYzQoY29sb3IsIDEpO1xyXG5cclxuICAgIC8vdmVjMyBOID0gRHJhd05vcm1hbDtcclxuICAgIC8vT3V0Q29sb3IgPSB2ZWM0KERyYXdQb3MueHl5ICsgRHJhd1Bvcy54eHksIDEuMCk7XHJcbiAgICAvL091dENvbG9yID0gdmVjNChOLCAxLjApO1xyXG59XHJcbmA7XHJcblxyXG5sZXQgdnNfdHh0MSA9XHJcbmAjdmVyc2lvbiAzMDAgZXNcclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG5pbiB2ZWMzIEluUG9zaXRpb247XHJcbmluIHZlYzIgRHJhd1RleENvb3JkO1xyXG5pbiB2ZWMzIEluTm9ybWFsO1xyXG4gICAgXHJcbm91dCB2ZWMzIERyYXdQb3M7XHJcbm91dCB2ZWMyIERyYXdUZXg7XHJcbm91dCB2ZWMzIERyYXdOb3JtYWw7XHJcbnVuaWZvcm0gZmxvYXQgVGltZTtcclxuXHJcbnVuaWZvcm0gbWF0NCBNYXRyVmlldztcclxudW5pZm9ybSBtYXQ0IE1hdHJWUDtcclxudW5pZm9ybSBtYXQ0IE1hdHJXb3JsZDtcclxuXHJcbnVuaWZvcm0gRnJhbWVCdWZmZXJcclxueyAgXHJcbiAgICB2ZWM0IERhdGE7XHJcbn07XHJcblxyXG52b2lkIG1haW4oIHZvaWQgKVxyXG57XHJcbiAgICB2ZWMyWzZdIHRjID0gdmVjMls2XSh2ZWMyKDEsIDApLCB2ZWMyKDAsIDApLCB2ZWMyKDAsIDEpLCB2ZWMyKDEsIDApLCB2ZWMyKDAsIDEpLCB2ZWMyKDEsIDEpKTtcclxuXHJcblxyXG4gICAgZ2xfUG9zaXRpb24gPSBNYXRyVlAgKiBNYXRyV29ybGQgKiB2ZWM0KEluUG9zaXRpb24sIDEuMCk7XHJcbiAgICBEcmF3UG9zID0gdmVjMyhNYXRyV29ybGQgKiB2ZWM0KEluUG9zaXRpb24sIDEpKTtcclxuICAgIERyYXdUZXggPSBEcmF3VGV4Q29vcmQ7XHJcbiAgICAvL0RyYXdUZXggPSB0Y1tnbF9WZXJ0ZXhJRF07XHJcbiAgICBEcmF3Tm9ybWFsID0gSW5Ob3JtYWw7XHJcbn1cclxuYDtcclxubGV0IGZzX3R4dDEgPVxyXG5gI3ZlcnNpb24gMzAwIGVzXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxub3V0IHZlYzQgT3V0Q29sb3I7XHJcblxyXG5pbiB2ZWMzIERyYXdQb3M7XHJcbmluIHZlYzIgRHJhd1RleDtcclxuaW4gdmVjMyBEcmF3Tm9ybWFsO1xyXG51bmlmb3JtIGZsb2F0IFRpbWU7XHJcbnVuaWZvcm0gdmVjMiBUcmFuc1ZlYztcclxudW5pZm9ybSB2ZWMzIENhbUxvYztcclxuXHJcbnVuaWZvcm0gc2FtcGxlcjJEIFRleDtcclxuXHJcbnVuaWZvcm0gRnJhbWVCdWZmZXJcclxue1xyXG4gICAgdmVjNCBEYXRhO1xyXG59O1xyXG5cclxudmVjMiByb3QoIGZsb2F0IGEsIHZlYzIgdiApXHJcbntcclxuICBmbG9hdCBzID0gc2luKGEpLCBjID0gY29zKGEpO1xyXG5cclxuICByZXR1cm4gdmVjMihkb3QodiwgdmVjMihjLCAtcykpLCBkb3QodiwgdmVjMihzLCBjKSkpO1xyXG59XHJcblxyXG5tYXQ0IE1hdHJTY2FsZSggdmVjMyB2IClcclxue1xyXG4gIHJldHVybiBtYXQ0KHYueCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAwLCB2LnksIDAsIDAsXHJcbiAgICAgICAgICAgICAgMCwgMCwgdi56LCAwLFxyXG4gICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG59XHJcblxyXG52b2lkIG1haW4oIHZvaWQgKVxyXG57XHJcbiAgICB2ZWMzIFYgPSBub3JtYWxpemUoRHJhd1BvcyAtIENhbUxvYyk7XHJcbiAgICB2ZWMzIE4gPSBub3JtYWxpemUoRHJhd05vcm1hbCk7XHJcbiAgICB2ZWMzIEwgPSBub3JtYWxpemUodmVjMygxLyogKyA4ICogc2luKFRpbWUgKiA1KSovLCAxLCAxKSk7XHJcbiAgICB2ZWMzIGNvbG9yID0gdmVjMygwLjIsIDAuMywgMC43KTtcclxuXHJcbiAgICBOID0gZmFjZWZvcndhcmQoTiwgViwgTik7XHJcblxyXG4gICAgLy9EZWZ1c2VcclxuICAgIHZlYzMgS2REaWZmID0gdmVjMygwLjQsIDAuNCwgMC40KTtcclxuICAgIGNvbG9yICs9IEtkRGlmZiAqIG1heCgwLjEsIGRvdChOLCBMKSk7XHJcbiAgICAvL1NwZWN1bGFyXHJcbiAgICB2ZWMzIFIgPSByZWZsZWN0KFYsIE4pO1xyXG4gICAgY29sb3IgKz0gdmVjMygwLjEsIDAuMiwgMC4zKSAqIG1heCgwLjAsIHBvdyhkb3QoUiwgTCksIDEuMCkpO1xyXG5cclxuICAgIE91dENvbG9yID0gdmVjNChjb2xvciwgMSk7XHJcblxyXG4gICAgdmVjNCB0YyA9IHRleHR1cmUoVGV4LCB2ZWMyKHZlYzQoRHJhd1RleCwgMCwgMCkgKiBNYXRyU2NhbGUodmVjMygxMC4wKSkpICsgVHJhbnNWZWMpO1xyXG4gICAgLy92ZWM0IHRjID0gdGV4dHVyZShUZXgsIERyYXdUZXggKiBNYXRyU2NhbGUodmVjMygxMC4wKSkpO1xyXG4gICAgLy9yb3QoMTAwLjAsICgxLjAgLSBEcmF3VGV4KSAqICg1LjAgKyAzLjAgKiBzaW4oVGltZSkpKSk7XHJcbiAgICBPdXRDb2xvciA9IHZlYzQodGMucmdiLCAxKTtcclxuXHJcbiAgICAvL091dENvbG9yID0gdmVjNChEcmF3VGV4LCAwLCAxKTtcclxufVxyXG5gO1xyXG5cclxuY2xhc3MgU2hhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGdsLCB2c190eHQsIGZzX3R4dCkge1xyXG4gICAgICAgIC8vIExvYWQgYW5kIGNvbXBpbGUgc2hhZGVyIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3QgbG9hZFNoYWRlciA9IChzaGFkZXJUeXBlLCBzaGFkZXJTb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpO1xyXG4gICAgICAgICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xyXG4gICAgICAgICAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgICAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIGxldCBidWYgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGFkZXIgY29tcGlsZSBmYWlsOiAnICsgYnVmKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICAgICAgfSAvLyBFbmQgb2YgJ2xvYWRTaGFkZXInIGZ1bmN0aW9uXHJcbiAgICBcclxuICAgICAgICAvLyBTaGFkZXIgY3JlYXRpb25cclxuICAgICAgICB0aGlzLnZzID0gbG9hZFNoYWRlcihnbC5WRVJURVhfU0hBREVSLCB2c190eHQpLFxyXG4gICAgICAgIHRoaXMuZnMgPSBsb2FkU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUiwgZnNfdHh0KSxcclxuICAgICAgICB0aGlzLnByZyA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcmcsIHRoaXMudnMpO1xyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByZywgdGhpcy5mcyk7XHJcbiAgICAgICAgZ2wubGlua1Byb2dyYW0odGhpcy5wcmcpO1xyXG4gICAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByZywgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgICAgICAgIGxldCBidWYgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLnByZyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGFkZXIgcHJvZ3JhbSBsaW5rIGZhaWw6ICcgKyBidWYpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNoYWRlcnMoZ2wsIG5hbWUpIHtcclxuICAgIGlmIChuYW1lID09IFwiZGVmYXVsdFwiKVxyXG4gICAgICAgIHJldHVybiBuZXcgU2hhZGVyKGdsLCB2c190eHQsIGZzX3R4dCk7XHJcbiAgICBpZiAobmFtZSA9PSBcInF1YWRcIilcclxuICAgICAgICByZXR1cm4gbmV3IFNoYWRlcihnbCwgdnNfdHh0MSwgZnNfdHh0MSk7XHJcbn0iLCJjbGFzcyBfdGV4dHVyZSB7XHJcbiAgY29uc3RydWN0b3IoZ2wsIG5hbWVVUkwsIHRleHR1cmVUeXBlID0gXCIyZFwiKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lVVJMLm5hbWU7XHJcbiAgICB0aGlzLnR5cGUgPSBnbC5URVhUVVJFXzJEO1xyXG4gICAgdGhpcy5pZCA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgIGdsLmJpbmRUZXh0dXJlKHRoaXMudHlwZSwgdGhpcy5pZCk7XHJcbiAgICBpZiAobmFtZVVSTC5pbWcpIHtcclxuICAgICAgZ2wudGV4SW1hZ2UyRCh0aGlzLnR5cGUsIDAsIGdsLlJHQkEsIDEsIDEsIDAsIGdsLlJHQkEsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2wuVU5TSUdORURfQllURSwgbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTUsIDBdKSk7XHJcbiAgICAgIG5hbWVVUkwuaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZSh0aGlzLnR5cGUsIHRoaXMuaWQpO1xyXG4gICAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xyXG4gICAgICAgIGdsLnRleEltYWdlMkQodGhpcy50eXBlLCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVVSTC5pbWcpO1xyXG4gICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKHRoaXMudHlwZSk7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaSh0aGlzLnR5cGUsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5SRVBFQVQpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkodGhpcy50eXBlLCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuUkVQRUFUKTtcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKHRoaXMudHlwZSwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUik7XHJcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaSh0aGlzLnR5cGUsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgfVxyXG4gICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgMCk7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4gXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXh0dXJlKC4uLmFyZ3MpIHtcclxuICAvKi4gLiAuKi9cclxuICByZXR1cm4gbmV3IF90ZXh0dXJlKC4uLmFyZ3MpO1xyXG59XHJcbiIsImltcG9ydCB7IHZlYzIsIHZlYzMsIG1hdDQgfSBmcm9tIFwiLi4vLi4vbXRoL21hdGguanNcIjtcclxuaW1wb3J0IHsgbG9hZFNoYWRlcnMgfSBmcm9tIFwiLi9yZXMvc2hkcy5qc1wiO1xyXG5cclxuY2xhc3MgdmVydGV4IHtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgbm9ybWFsLCB0ZXhDb29yZCkge1xyXG4gICAgdGhpcy5wb3MgPSBwb3NpdGlvbjtcclxuICAgIHRoaXMubm9ybSA9IG5vcm1hbDtcclxuICAgIHRoaXMudGV4Q29vcmQgPSB0ZXhDb29yZDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcnQocG9zaXRpb24sIG5vcm1hbCwgdGV4Q29vcmQpIHtcclxuICByZXR1cm4gbmV3IHZlcnRleChwb3NpdGlvbiwgbm9ybWFsLCB0ZXhDb29yZCk7XHJcbn1cclxuXHJcbmNsYXNzIFByaW0ge1xyXG4gICAgY29uc3RydWN0b3IodmVydGV4QXJyYXksIGluZGV4QXJyYXksIG51bU9mRWxlbWVudHMsIG1hdHJXb3JsZCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMudmVydGV4QXJyYXkgPSB2ZXJ0ZXhBcnJheTtcclxuICAgICAgICB0aGlzLm51bU9mVjtcclxuICAgICAgICB0aGlzLnZlcnRleEF0dHJpYkFycmF5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbmRleEFycmF5ID0gaW5kZXhBcnJheTtcclxuICAgICAgICB0aGlzLm51bU9mSTtcclxuICAgICAgICB0aGlzLmluZGV4QnVmZmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLm51bU9mRWxlbWVudHMgPSBudW1PZkVsZW1lbnRzO1xyXG4gICAgICAgIHRoaXMubWF0cldvcmxkID0gbWF0cldvcmxkO1xyXG4gICAgICAgIHRoaXMuc2hkcyA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJpbSh2ZXJ0ZXhBcnJheSwgaW5kZXhBcnJheSwgbnVtT2ZFbGVtZW50cywgbWF0cldvcmxkLCBuYW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBQcmltKHZlcnRleEFycmF5LCBpbmRleEFycmF5LCBudW1PZkVsZW1lbnRzLCBtYXRyV29ybGQsIG5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDdWJlRmFjZXRzKHNpemUsIHBvcykge1xyXG4gICAgbGV0IHAgPSBbXTsgXHJcbiAgICBwWzBdID0gdmVydChwb3MuYWRkKHZlYzMoc2l6ZSAvIDIsIDAsIC1zaXplIC8gMikpKSxcclxuICAgIHBbMV0gPSB2ZXJ0KHBvcy5hZGQodmVjMygtc2l6ZSAvIDIsIHNpemUsIC1zaXplIC8gMikpKSxcclxuICAgIHBbMl0gPSB2ZXJ0KHBvcy5hZGQodmVjMygtc2l6ZSAvIDIsIDAsIHNpemUgLyAyKSkpLFxyXG4gICAgcFszXSA9IHZlcnQocG9zLmFkZCh2ZWMzKC1zaXplIC8gMiwgMCwgLXNpemUgLyAyKSkpLFxyXG4gICAgcFs0XSA9IHZlcnQocG9zLmFkZCh2ZWMzKHNpemUgLyAyLCBzaXplLCAtc2l6ZSAvIDIpKSksXHJcbiAgICBwWzVdID0gdmVydChwb3MuYWRkKHZlYzMoc2l6ZSAvIDIsIDAsIHNpemUgLyAyKSkpLFxyXG4gICAgcFs2XSA9IHZlcnQocG9zLmFkZCh2ZWMzKHNpemUgLyAyLCBzaXplLCBzaXplIC8gMikpKSxcclxuICAgIHBbN10gPSB2ZXJ0KHBvcy5hZGQodmVjMygtc2l6ZSAvIDIsIHNpemUsIHNpemUgLyAyKSkpO1xyXG4gICAgbGV0IGluZCA9IFszLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAwLCAxLCA0LFxyXG4gICAgICAgICAgICAgICA2LCA1LCAwLFxyXG4gICAgICAgICAgICAgICA2LCAwLCA0LFxyXG4gICAgICAgICAgICAgICA3LCAyLCA1LFxyXG4gICAgICAgICAgICAgICA3LCA1LCA2LFxyXG4gICAgICAgICAgICAgICAxLCAzLCAyLFxyXG4gICAgICAgICAgICAgICAxLCAyLCA3LFxyXG4gICAgICAgICAgICAgICA3LCA2LCA0LFxyXG4gICAgICAgICAgICAgICA3LCA0LCAxLFxyXG4gICAgICAgICAgICAgICA1LCAyLCAzLFxyXG4gICAgICAgICAgICAgICA1LCAzLCAwXTtcclxuXHJcbiAgICByZXR1cm4gY3JlYXRlUHJpbShwLCBpbmQsIG51bGwsIG51bGwsIFwiY3ViZVwiKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVF1YWRGYWNldHMoc2l6ZSwgcG9zKSB7XHJcbiAgbGV0IHAgPSBbXTtcclxuICBwWzBdID0gdmVydChwb3MuYWRkKHZlYzMoLXNpemUgLyAyLCAwLCAtc2l6ZSAvIDIpKSwgdmVjMygpLCB2ZWMyKDAsIDApKSxcclxuICBwWzFdID0gdmVydChwb3MuYWRkKHZlYzMoLXNpemUgLyAyLCAwLCBzaXplIC8gMikpLCB2ZWMzKCksIHZlYzIoMCwgMSkpLFxyXG4gIHBbMl0gPSB2ZXJ0KHBvcy5hZGQodmVjMyhzaXplIC8gMiwgMCwgLXNpemUgLyAyKSksIHZlYzMoKSwgdmVjMigxLCAwKSksXHJcbiAgcFszXSA9IHZlcnQocG9zLmFkZCh2ZWMzKHNpemUgLyAyLCAwLCBzaXplIC8gMikpLCB2ZWMzKCksIHZlYzIoMSwgMSkpO1xyXG4gIGxldCBpbmQgPSBbMiwgMCwgMSxcclxuICAgICAgICAgICAgIDIsIDEsIDNdO1xyXG4gIHJldHVybiBjcmVhdGVQcmltKHAsIGluZCwgbnVsbCwgbnVsbCwgXCJxdWFkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOb3JtYWxzKHByaW0pXHJcbntcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IChwcmltLm5hbWUgPT0gXCJjdWJlXCIgPyA4IDogNCkvKnByaW0ubnVtT2ZQb2ludHMqLzsgaSsrKVxyXG4gICAgcHJpbS52ZXJ0ZXhBcnJheVtpXS5ub3JtID0gdmVjMygwKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IChwcmltLm5hbWUgPT0gXCJjdWJlXCIgPyAxMiA6IDIpLypwcmltLm51bU9mRWxlbWVudHMqLzsgaSsrKVxyXG4gIHtcclxuICAgIGxldCBpMCA9IHByaW0uaW5kZXhBcnJheVtpICogM10sIGkxID0gcHJpbS5pbmRleEFycmF5W2kgKiAzICsgMV0sIGkyID0gcHJpbS5pbmRleEFycmF5W2kgKiAzICsgMl07XHJcbiAgICBsZXQgcDAxID0gcHJpbS52ZXJ0ZXhBcnJheVtpMV0ucG9zLnN1YihwcmltLnZlcnRleEFycmF5W2kwXS5wb3MpLCBcclxuICAgICAgICBwMDIgPSBwcmltLnZlcnRleEFycmF5W2kyXS5wb3Muc3ViKHByaW0udmVydGV4QXJyYXlbaTBdLnBvcyk7XHJcbiAgICBsZXQgbm9ybWFsID0gcDAxLmNyb3NzKHAwMikubm9ybWFsaXplKCk7XHJcblxyXG4gICAgcHJpbS52ZXJ0ZXhBcnJheVtpMF0ubm9ybSA9IHByaW0udmVydGV4QXJyYXlbaTBdLm5vcm0uYWRkKG5vcm1hbCk7XHJcbiAgICBwcmltLnZlcnRleEFycmF5W2kxXS5ub3JtID0gcHJpbS52ZXJ0ZXhBcnJheVtpMV0ubm9ybS5hZGQobm9ybWFsKTtcclxuICAgIHByaW0udmVydGV4QXJyYXlbaTJdLm5vcm0gPSBwcmltLnZlcnRleEFycmF5W2kyXS5ub3JtLmFkZChub3JtYWwpO1xyXG4gIH1cclxuICByZXR1cm4gcHJpbTtcclxufSAvLyBFbmQgb2YgJ0NyZWF0ZU5vcm1hbHMnIGZ1bmN0aW9uXHJcblxyXG5mdW5jdGlvbiB2ZWMzVG9BcnJheShlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gW2VsZW1lbnQueCwgZWxlbWVudC55LCBlbGVtZW50LnpdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZWMyVG9BcnJheShlbGVtZW50KSB7XHJcbiAgaWYgKGVsZW1lbnQgIT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuIFtlbGVtZW50LngsIGVsZW1lbnQueV07XHJcbiAgZWxzZVxyXG4gIHJldHVybiBbMCwgMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZlcnRGcm9tRmFjZXRzKHByaW0pIHtcclxuICAgIGxldCBmYWNldHMgPSBwcmltLnZlcnRleEFycmF5O1xyXG4gICAgbGV0IHZlcnRBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgb2YgZmFjZXRzKVxyXG4gICAgICAgIHZlcnRBcnJheSA9IHZlcnRBcnJheS5jb25jYXQodmVjM1RvQXJyYXkoaS5wb3MpLmNvbmNhdCh2ZWMzVG9BcnJheShpLm5vcm0pKS5jb25jYXQodmVjMlRvQXJyYXkoaS50ZXhDb29yZCkpKTtcclxuICAgIHByaW0udmVydGV4QXJyYXkgPSB2ZXJ0QXJyYXk7XHJcbiAgICBwcmltLm1hdHJXb3JsZCA9IG1hdDQoKTtcclxuICAgIHJldHVybiBwcmltO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3ViZShzaXplLCBwb3MpIHtcclxuICAgbGV0IHByaW0gPSBjcmVhdGVWZXJ0RnJvbUZhY2V0cyhjcmVhdGVOb3JtYWxzKGNyZWF0ZUN1YmVGYWNldHMoc2l6ZSwgcG9zKSkpO1xyXG4gICBwcmltLm51bU9mRWxlbWVudHMgPSAzNjtcclxuICAgcmV0dXJuIHByaW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWFkKHNpemUsIHBvcykge1xyXG4gIGxldCBwcmltID0gY3JlYXRlVmVydEZyb21GYWNldHMoY3JlYXRlTm9ybWFscyhjcmVhdGVRdWFkRmFjZXRzKHNpemUsIHBvcykpKTtcclxuICBwcmltLm51bU9mRWxlbWVudHMgPSA2O1xyXG4gIHJldHVybiBwcmltO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVmTG9hZChnbCwgcHJpbSkge1xyXG4gICAgZ2wudXNlUHJvZ3JhbShwcmltLnNoZHMucHJnKTtcclxuICAgIC8vIExvYWRpbmcgdG8gc2hhZGVyIHZlcnRleCBhcnJheVxyXG4gICAgY29uc3QgcG9zTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJpbS5zaGRzLnByZywgXCJJblBvc2l0aW9uXCIpO1xyXG4gICAgY29uc3QgdGV4TG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJpbS5zaGRzLnByZywgXCJEcmF3VGV4Q29vcmRcIik7XHJcbiAgICBjb25zdCBub3JtTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJpbS5zaGRzLnByZywgXCJJbk5vcm1hbFwiKTtcclxuICAgIHByaW0udmVydGV4QXR0cmliQXJyYXkgPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xyXG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHByaW0udmVydGV4QXR0cmliQXJyYXkpO1xyXG4gICAgcHJpbS52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwcmltLnZlcnRleEJ1ZmZlcik7XHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShwcmltLnZlcnRleEFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgaWYgKHBvc0xvYyAhPSAtMSkge1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc0xvYywgMywgZ2wuRkxPQVQsIGZhbHNlLCA0ICogMyAqIDIgKyA0ICogMiwgMCk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc0xvYyk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9ybUxvYyAhPSAtMSkge1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKG5vcm1Mb2MsIDMsIGdsLkZMT0FULCBmYWxzZSwgNCAqIDMgKiAyICsgNCAqIDIsIDQgKiAzKTtcclxuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobm9ybUxvYyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGV4TG9jICE9IC0xKSB7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGV4TG9jLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDQgKiAzICogMiArIDQgKiAyLCA0ICogMyAqIDIpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0ZXhMb2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWRpbmcgdG8gc2hhZGVyIGluZGV4IGFycmF5XHJcbiAgICBpZiAocHJpbS5pbmRleEFycmF5ICE9IG51bGwpIHtcclxuICAgICAgcHJpbS5pbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBwcmltLmluZGV4QnVmZmVyKTtcclxuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQzMkFycmF5KHByaW0uaW5kZXhBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpZ3VyZShybmQsIGZpZ3VyZU5hbWUsIHNoZE5hbWUsIHNpemUsIHBvcykge1xyXG4gIGxldCBwcmltO1xyXG5cclxuICBpZiAoZmlndXJlTmFtZSA9PSBcImN1YmVcIilcclxuICAgIHByaW0gPSBjcmVhdGVDdWJlKHNpemUsIHBvcyk7XHJcbiAgZWxzZVxyXG4gICAgcHJpbSA9IGNyZWF0ZVF1YWQoc2l6ZSwgcG9zKTtcclxuICAvLyBMb2FkaW5nIHNoYWRlclxyXG4gIHByaW0uc2hkcyA9IGxvYWRTaGFkZXJzKHJuZC5nbCwgc2hkTmFtZSk7XHJcbiAgYnVmTG9hZChybmQuZ2wsIHByaW0pO1xyXG4gIHJuZC5wcmltc1tybmQucHJpbUNvdW50XSA9IHByaW07XHJcbiAgcm5kLmlzUHJpbURyYXdbcm5kLnByaW1Db3VudCsrXSA9IHRydWU7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhdXRvTm9ybWFscyhWLCBOb29mViwgSW5kLCBOb29mSSlcclxue1xyXG4gIC8qIFNldCBhbGwgdmVydGV4IG5vcm1hbHMgdG8gemVybyAqL1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTm9vZlY7IGkrKylcclxuICAgIFZbaV0ubm9ybSA9IHZlYzMoKTtcclxuIFxyXG4gIC8qIEV2YWwgbm9ybWFsIGZvciBldmVyeSBmYWNldCAqL1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTm9vZkkgLSAyOyBpICs9IDMpXHJcbiAge1xyXG4gICAgbGV0IG4wID0gSW5kW2ldLCBuMSA9IEluZFtpICsgMV0sIG4yID0gSW5kW2kgKyAyXTtcclxuICAgIGxldFxyXG4gICAgICBwMCA9IFZbbjBdLnBvcyxcclxuICAgICAgcDEgPSBWW24xXS5wb3MsXHJcbiAgICAgIHAyID0gVltuMl0ucG9zLFxyXG4gICAgICBOID0gcDEuc3ViKHAwKS5jcm9zcyhwMi5zdWIocDApKS5ub3JtYWxpemUoKTtcclxuIFxyXG4gICAgVltuMF0ubm9ybSA9IFZbbjBdLm5vcm0uYWRkKE4pO1xyXG4gICAgVltuMV0ubm9ybSA9IFZbbjFdLm5vcm0uYWRkKE4pO1xyXG4gICAgVltuMl0ubm9ybSA9IFZbbjJdLm5vcm0uYWRkKE4pO1xyXG4gIH1cclxuIFxyXG4gIC8qIE5vcm1hbGl6ZSBhbGwgdmVydGV4IG5vcm1hbHMgKi9cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IE5vb2ZWOyBpKyspXHJcbiAgICBWW2ldLm5vcm0gPSBWW2ldLm5vcm0ubm9ybWFsaXplKCk7XHJcblxyXG4gIGxldCBwcmltID0gY3JlYXRlUHJpbShWLCBJbmQsIE5vb2ZJLCBtYXQ0KCksIFwibG9hZGVkXCIpO1xyXG4gIHByaW0ubnVtT2ZWID0gTm9vZlY7XHJcbiAgcmV0dXJuIHByaW07XHJcbn0gLy8gRW5kIG9mICdDcmVhdGVOb3JtYWxzJyBmdW5jdGlvblxyXG5cclxubGV0IGl0ZXJhdGlvbiA9IDA7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFByaW0ocm5kLCBwYXRoKSB7XHJcbiAgaXRlcmF0aW9uID0gcm5kLnByaW1Db3VudDtcclxuICBybmQuaXNQcmltRHJhd1tybmQucHJpbUNvdW50KytdID0gZmFsc2U7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwYXRoKTtcclxuICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcclxuICBsZXQgcG9zQXJyYXkgPSBbXTtcclxuICBsZXQgaW5kQXJyYXkgPSBbXTtcclxuICBsZXQgcG9zQ250ID0gMDtcclxuICBsZXQgaW5kQ250ID0gMDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGxpbmVzW2ldICE9IHVuZGVmaW5lZDsgaSsrKSB7XHJcbiAgICBpZiAobGluZXNbaV0uc2xpY2UoMCwgMikgPT0gXCJ2IFwiKSB7XHJcbiAgICAgIGxldCB0bXAgPSBsaW5lc1tpXS5zbGljZSgxLCAtMikudHJpbSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgaWYgKE51bWJlcih0bXBbMF0pICE9IE5hTikge1xyXG4gICAgICAgIGxldCBwb3MgPSB2ZWMzKE51bWJlcih0bXBbMF0pLCBOdW1iZXIodG1wWzFdKSwgTnVtYmVyKHRtcFsyXSkpO1xyXG4gICAgICAgIHBvc0FycmF5W3Bvc0NudF0gPSB2ZXJ0KChwb3MgPT0gdW5kZWZpbmVkID8gdmVjMygpIDogcG9zKSwgdmVjMygpLCB2ZWMyKCkpLCBwb3NDbnQrKztcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgcG9zQXJyYXlbcG9zQ250XSA9IHZlcnQodmVjMygpLCB2ZWMzKCksIHZlYzIoKSksIHBvc0NudCsrO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobGluZXNbaV0uc2xpY2UoMCwgMikgPT0gXCJmIFwiKSB7XHJcbiAgICAgIGxldCB0bXAgPSBsaW5lc1tpXS5zbGljZSgxKS50cmltKCkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgdG1wW2pdICE9IHVuZGVmaW5lZDsgaisrKSB7XHJcbiAgICAgICAgbGV0IHRtcDIgPSB0bXBbal0udHJpbSgpLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBpZiAoTnVtYmVyKHRtcDJbMF0pICE9IE5hTikge1xyXG4gICAgICAgICAgbGV0IGluZCA9IChOdW1iZXIodG1wMlswXSkgPj0gcG9zQ250ID8gcG9zQ250IC0gMSA6IE51bWJlcih0bXAyWzBdKSAtIDEpO1xyXG4gICAgICAgICAgaW5kQXJyYXlbaW5kQ250XSA9IGluZCwgaW5kQ250Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBwcmltID0gY3JlYXRlVmVydEZyb21GYWNldHMoYXV0b05vcm1hbHMocG9zQXJyYXksIHBvc0NudCwgaW5kQXJyYXksIGluZENudCkpO1xyXG4gIHByaW0uc2hkcyA9IGxvYWRTaGFkZXJzKHJuZC5nbCwgXCJkZWZhdWx0XCIpO1xyXG4gIGJ1ZkxvYWQocm5kLmdsLCBwcmltKTtcclxuICBwcmltLm1hdHJXb3JsZCA9IG1hdDQoKS5zY2FsZSh2ZWMzKDAuNSkpLm11bChtYXQ0KCkucm90YXRlWSg5MCkpLm11bChtYXQ0KCkudHJhbnNsYXRlKHZlYzMoMCwgNSwgMCkpKTtcclxuICBybmQucHJpbXNbaXRlcmF0aW9uXSA9IHByaW07XHJcbiAgcm5kLmlzUHJpbURyYXdbaXRlcmF0aW9uXSA9IHRydWU7XHJcbn0iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFRpbWVyIGNsYXNzIG1vZHVsZVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHVzYWdlOlxyXG4vLyBIVE1MOlxyXG4vLyAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XHJcbi8vICAgIGltcG9ydCB7VGltZXJ9IGZyb20gXCIuL3RpbWVyLmpzXCJcclxuLy8gICAgbGV0IG15VGltZXIgPSBuZXcgVGltZXIoKTtcclxuLy8gICAgLiAuIC5cclxuLy8gICAgbXlUaW1lci5yZXNwb25zZSgpO1xyXG4vLyAgICBsZXQgdGltZSA9IG15VGltZXIubG9jYWxUaW1lOyAvL1xyXG4vLyAgICBpZiAobXlUaW1lci5pc1BhdXNlKVxyXG4vLyAgICAgIC4gLiAuXHJcbi8vICAgIG15VGltZXIuaXNQYXVzZSA9ICFteVRpbWVyLmlzUGF1c2U7XHJcbi8vICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcHMnKS5pbm5lckhUTUwgPSBteVRpbWVyLmdldEZQUygpO1xyXG4vLyAgICAgIG9yIG15VGltZXIucmVzcG9uc2UoJ2ZwcycpOyAtLSB1cGRhdGUgRlBTIGF1dG9tYXRpY2FsbHlcclxuLy8gIDwvc2NycHQ+XHJcbiBcclxuLy8gVGltZXIgY2xhc3MgY29uc3RydWN0b3IgZnVuY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKCkge1xyXG4gIC8vIFRpbWVyIG9idGFpbiBjdXJyZW50IHRpbWUgaW4gc2Vjb25kcyBtZXRob2RcclxuICBjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgdCA9XHJcbiAgICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAwLjAgK1xyXG4gICAgICBkYXRlLmdldFNlY29uZHMoKSArXHJcbiAgICAgIGRhdGUuZ2V0TWludXRlcygpICogNjA7XHJcbiAgICByZXR1cm4gdDtcclxuICB9O1xyXG4gXHJcbiAgLy8gVGltZXIgcmVzcG9uc2UgbWV0aG9kXHJcbiAgdGhpcy5yZXNwb25zZSA9ICh0YWdfaWQgPSBudWxsKSA9PiB7XHJcbiAgICBsZXQgdCA9IGdldFRpbWUoKTtcclxuICAgIC8vIEdsb2JhbCB0aW1lXHJcbiAgICB0aGlzLmdsb2JhbFRpbWUgPSB0O1xyXG4gICAgdGhpcy5nbG9iYWxEZWx0YVRpbWUgPSB0IC0gdGhpcy5vbGRUaW1lO1xyXG4gICAgLy8gVGltZSB3aXRoIHBhdXNlXHJcbiAgICBpZiAodGhpcy5pc1BhdXNlKSB7XHJcbiAgICAgIHRoaXMubG9jYWxEZWx0YVRpbWUgPSAwO1xyXG4gICAgICB0aGlzLnBhdXNlVGltZSArPSB0IC0gdGhpcy5vbGRUaW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2NhbERlbHRhVGltZSA9IHRoaXMuZ2xvYmFsRGVsdGFUaW1lO1xyXG4gICAgICB0aGlzLmxvY2FsVGltZSA9IHQgLSB0aGlzLnBhdXNlVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfVxyXG4gICAgLy8gRlBTXHJcbiAgICB0aGlzLmZyYW1lQ291bnRlcisrO1xyXG4gICAgaWYgKHQgLSB0aGlzLm9sZFRpbWVGUFMgPiAzKSB7XHJcbiAgICAgIHRoaXMuRlBTID0gdGhpcy5mcmFtZUNvdW50ZXIgLyAodCAtIHRoaXMub2xkVGltZUZQUyk7XHJcbiAgICAgIHRoaXMub2xkVGltZUZQUyA9IHQ7XHJcbiAgICAgIHRoaXMuZnJhbWVDb3VudGVyID0gMDtcclxuICAgICAgaWYgKHRhZ19pZCAhPSBudWxsKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCkuaW5uZXJIVE1MID0gdGhpcy5nZXRGUFMoKTtcclxuICAgIH1cclxuICAgIHRoaXMub2xkVGltZSA9IHQ7XHJcbiAgfTtcclxuIFxyXG4gIC8vIE9idGFpbiBGUFMgYXMgc3RyaW5nIG1ldGhvZFxyXG4gIHRoaXMuZ2V0RlBTID0gKCkgPT4gdGhpcy5GUFMudG9GaXhlZCgzKTtcclxuIFxyXG4gIC8vIEZpbGwgdGltZXIgZ2xvYmFsIGRhdGFcclxuICB0aGlzLmdsb2JhbFRpbWUgPSB0aGlzLmxvY2FsVGltZSA9IGdldFRpbWUoKTtcclxuICB0aGlzLmdsb2JhbERlbHRhVGltZSA9IHRoaXMubG9jYWxEZWx0YVRpbWUgPSAwO1xyXG4gXHJcbiAgLy8gRmlsbCB0aW1lciBzZW1pIGdsb2JhbCBkYXRhXHJcbiAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm9sZFRpbWUgPSB0aGlzLm9sZFRpbWVGUFMgPSB0aGlzLmdsb2JhbFRpbWU7XHJcbiAgdGhpcy5mcmFtZUNvdW50ZXIgPSAwO1xyXG4gIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gIHRoaXMuRlBTID0gMzAuMDtcclxuICB0aGlzLnBhdXNlVGltZSA9IDA7XHJcbiBcclxuICByZXR1cm4gdGhpcztcclxufSAvLyBFbmQgb2YgJ1RpbWVyJyBmdW5jdGlvblxyXG4iLCJpbXBvcnQge2NhbSwgY2FtU2V0LCBtYXQ0LCB2ZWMzfSBmcm9tIFwiLi4vbXRoL21hdGguanNcIjtcclxuZXhwb3J0IGxldCBtYXRyVHJhbnMgPSBtYXQ0KCksIHZlY1RyYW5zID0gdmVjMygpO1xyXG4gXHJcbmNvbnN0IEQyUiA9IGRlZ3JlZXMgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbmNvbnN0IFIyRCA9IHJhZGlhbnMgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XHJcbiBcclxuZnVuY3Rpb24gZGlzdGFuY2UocDEsIHAyKSB7XHJcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMS5jbGllbnRYIC0gcDIuY2xpZW50WCwgMikgKyBNYXRoLnBvdyhwMS5jbGllbnRZIC0gcDIuY2xpZW50WSwgMikpO1xyXG59XHJcblxyXG5jbGFzcyBfZGlyIHtcclxuICBjb25zdHJ1Y3Rvcih1cCwgcmlnaHQsIGZvcndhcmQsIHBvcykge1xyXG4gICAgdGhpcy51cCA9IHVwO1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy5mb3J3YXJkID0gZm9yd2FyZDtcclxuICAgIHRoaXMucG9zID0gcG9zO1xyXG4gIH1cclxufVxyXG5cclxubGV0IG1vZGVsID0gbmV3IF9kaXIodmVjMygwLCAxLCAwKSwgdmVjMygtMSwgMCwgMCksIHZlYzMoMCwgMCwgMSksIHZlYzMoMCkpO1xyXG5sZXQgYWxsVHJhbnNsYXRlID0gbWF0NCgpO1xyXG5sZXQgc3BlZWQgPSAwO1xyXG5sZXQgc3RlcCA9IDA7XHJcbmxldCBuZXdTcGVlZCA9IDA7XHJcbmxldCBpbmVydFNwZWVkID0gMjUwO1xyXG5cclxuZXhwb3J0IGNsYXNzIGlucHV0IHtcclxuICBjb25zdHJ1Y3RvcihybmQpIHtcclxuICAgIC8vZ2wuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMub25DbGljayhlKSk7XHJcbiAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB0aGlzLm9uTW91c2VNb3ZlKGUpKTtcclxuICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIChlKSA9PiB0aGlzLm9uTW91c2VXaGVlbChlKSk7XHJcbiAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcclxuICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB0aGlzLm9uTW91c2VVcChlKSk7XHJcbiAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB0aGlzLm9uVG91Y2hTdGFydChlKSk7XHJcbiAgICAgIHJuZC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHRoaXMub25Ub3VjaE1vdmUoZSkpO1xyXG4gICAgICBybmQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHRoaXMub25Ub3VjaEVuZChlKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMub25LZXlEb3duKGUpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB0aGlzLm9uS2V5VXAoZSkpO1xyXG4gICAgXHJcbiAgICB0aGlzLm1YID0gMDtcclxuICAgIHRoaXMubVkgPSAwO1xyXG4gICAgdGhpcy5tWiA9IDA7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiAgICB0aGlzLm1CdXR0b25zID0gWzAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdGhpcy5tQnV0dG9uc09sZCA9IFswLCAwLCAwLCAwLCAwXTtcclxuICAgIHRoaXMubUJ1dHRvbnNDbGljayA9IFswLCAwLCAwLCAwLCAwXTtcclxuICAgIFxyXG4gICAgLy8gWm9vbSBzcGVjaWZpY1xyXG4gICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmRpc3QgPSAwO1xyXG4gICAgdGhpcy5zY2FsZV9mYWN0b3IgPSAxLjA7XHJcbiAgICB0aGlzLmN1cnJfc2NhbGUgPSAxLjA7XHJcbiAgICB0aGlzLm1heF96b29tID0gOC4wO1xyXG4gICAgdGhpcy5taW5fem9vbSA9IDAuNTtcclxuICAgIFxyXG4gICAgXHJcbiAgICB0aGlzLmtleXMgPSBbXTtcclxuICAgIHRoaXMua2V5c09sZCA9IFtdO1xyXG4gICAgdGhpcy5rZXlzQ2xpY2sgPSBbXTtcclxuICAgIFtcclxuICAgICAgXCJFbnRlclwiLCBcIkJhY2tzcGFjZVwiLFxyXG4gICAgICBcIkRlbGV0ZVwiLCBcIlNwYWNlXCIsIFwiVGFiXCIsIFwiRXNjYXBlXCIsIFwiQXJyb3dMZWZ0XCIsIFwiQXJyb3dVcFwiLCBcIkFycm93UmlnaHRcIixcclxuICAgICAgXCJBcnJvd0Rvd25cIiwgXCJTaGlmdFwiLCBcIkNvbnRyb2xcIiwgXCJBbHRcIiwgXCJTaGlmdExlZnRcIiwgXCJTaGlmdFJpZ2h0XCIsIFwiQ29udHJvbExlZnRcIixcclxuICAgICAgXCJDb250cm9sUmlnaHRcIiwgXCJQYWdlVXBcIiwgXCJQYWdlRG93blwiLCBcIkVuZFwiLCBcIkhvbWVcIixcclxuICAgICAgXCJEaWdpdDBcIiwgXCJEaWdpdDFcIixcclxuICAgICAgXCJLZXlBXCIsXHJcbiAgICAgIFwiTnVtcGFkMFwiLCBcIk51bXBhZE11bHRpcGx5XCIsXHJcbiAgICAgIFwiRjFcIixcclxuICAgIF0uZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICB0aGlzLmtleXNba2V5XSA9IDA7XHJcbiAgICAgIHRoaXMua2V5c09sZFtrZXldID0gMDtcclxuICAgICAgdGhpcy5rZXlzQ2xpY2tba2V5XSA9IDA7XHJcbiAgICB9KTtcclxuIFxyXG4gICAgdGhpcy5zaGlmdEtleSA9IGZhbHNlO1xyXG4gICAgdGhpcy5hbHRLZXkgPSBmYWxzZTtcclxuICAgIHRoaXMuY3RybEtleSA9IGZhbHNlO1xyXG4gXHJcbiAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gIH0gLy8gRW5kIG9mICdjb25zdHJ1Y3RvcicgZnVuY3Rpb25cclxuIFxyXG4gIC8vLyBNb3VzZSBoYW5kbGUgZnVuY3Rpb25zXHJcbiBcclxuICBvbkNsaWNrKGUpIHtcclxuICB9IC8vIEVuZCBvZiAnb25DbGljaycgZnVuY3Rpb25cclxuICBcclxuICBvblRvdWNoU3RhcnQoZSkge1xyXG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSlcclxuICAgICAgdGhpcy5tQnV0dG9uc1swXSA9IDE7XHJcbiAgICBlbHNlIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDIpIHtcclxuICAgICAgdGhpcy5tQnV0dG9uc1swXSA9IDA7XHJcbiAgICAgIHRoaXMubUJ1dHRvbnNbMl0gPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubUJ1dHRvbnNbMF0gPSAwO1xyXG4gICAgICB0aGlzLm1CdXR0b25zWzJdID0gMDtcclxuICAgICAgdGhpcy5tQnV0dG9uc1sxXSA9IDE7XHJcbiAgICB9XHJcbiAgICBsZXRcclxuICAgICAgLy94ID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxyXG4gICAgICAvL3kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgeCA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGUudGFyZ2V0Lm9mZnNldExlZnQsXHJcbiAgICAgIHkgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiAgICB0aGlzLm1YID0geDtcclxuICAgIHRoaXMubVkgPSB5O1xyXG4gXHJcbiAgICBsZXQgdHQgPSBlLnRhcmdldFRvdWNoZXM7XHJcbiAgICBpZiAodHQubGVuZ3RoID49IDIpIHtcclxuICAgICAgdGhpcy5kaXN0ID0gZGlzdGFuY2UodHRbMF0sIHR0WzFdKTtcclxuICAgICAgdGhpcy5zY2FsaW5nID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL3ZnLmxvZyhgWm9vbSBzdGFydDogaXNzYzoke3RoaXMuc2NhbGluZ31gKTtcclxuICB9IC8vIEVuZCBvZiAnb25Ub3VjaFN0YXJ0JyBmdW5jdGlvblxyXG4gXHJcbiAgb25Ub3VjaE1vdmUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gXHJcbiAgICBsZXRcclxuICAgICAgLy94ID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxyXG4gICAgICAvL3kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIGUudGFyZ2V0Lm9mZnNldFRvcDtcclxuICAgICAgeCA9IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGUudGFyZ2V0Lm9mZnNldExlZnQsXHJcbiAgICAgIHkgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiBcclxuICAgIC8vdmcubG9nKGBNb3ZlOiB4OiR7eH0geToke3l9YCk7XHJcbiBcclxuICAgIC8vdmcubG9nKGBab29tIG1vdmU6IGlzc2M6JHt0aGlzLnNjYWxpbmd9YCk7XHJcbiAgICBsZXQgdHQgPSBlLnRhcmdldFRvdWNoZXM7XHJcbiAgICAvL3ZnLmxvZyhgMDoke3R0WzBdLmNsaWVudFh9LCAxOiR7dHRbMV0uY2xpZW50WH1gKTtcclxuICAgIGlmICh0aGlzLnNjYWxpbmcpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdGhpcy5tRHogPSAwO1xyXG4gICAgICB0aGlzLmN1cnJfc2NhbGUgPSAoZGlzdGFuY2UodHRbMF0sIHR0WzFdKSAvIHRoaXMuZGlzdCkgKiB0aGlzLnNjYWxlX2ZhY3RvcjtcclxuIFxyXG4gICAgICAvL3ZnLmxvZyhgWm9vbSBtb3ZlOiBzYzoke3RoaXMuY3Vycl9zY2FsZX0gKG1aOiAke3RoaXMubVp9KSwgJHtkaXN0YW5jZSh0dFswXSwgdHRbMV0pfS8ke3RoaXMuZGlzdH1gKTtcclxuICAgICAgLy9pZiAodGhpcy5jdXJyX3NjYWxlID4gMS4zKVxyXG4gICAgICAvLyAgdGhpcy5tRHogPSAxO1xyXG4gICAgICAvL2Vsc2UgaWYgKHRoaXMuY3Vycl9zY2FsZSA8IDAuOClcclxuICAgICAgLy8gIHRoaXMubUR6ID0gLTE7XHJcbiAgICAgIGxldCBkID0gZGlzdGFuY2UodHRbMF0sIHR0WzFdKTtcclxuICAgICAgaWYgKE1hdGguYWJzKGQgLSB0aGlzLmRpc3QpID4gMCkgey8vNDcpIHtcclxuICAgICAgICBpZiAoZCA8IHRoaXMuZGlzdClcclxuICAgICAgICAgIHRoaXMubUR6ID0gMSAqIChkIC8gdGhpcy5kaXN0KSwgdGhpcy5kaXN0ID0gZDtcclxuICAgICAgICBlbHNlIGlmIChkID4gdGhpcy5kaXN0KVxyXG4gICAgICAgICAgdGhpcy5tRHogPSAtMSAqICh0aGlzLmRpc3QgLyBkKSwgdGhpcy5kaXN0ID0gZDtcclxuICAgICAgICB0aGlzLm1aICs9IHRoaXMubUR6O1xyXG4gXHJcbiAgICAgICAgdGhpcy5tRHggPSB4IC0gdGhpcy5tWDtcclxuICAgICAgICB0aGlzLm1EeSA9IHkgLSB0aGlzLm1ZO1xyXG4gICAgICAgIHRoaXMubVggPSB4O1xyXG4gICAgICAgIHRoaXMubVkgPSB5O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICBpZiAodGhpcy5tQnV0dG9uc1sxXSA9PSAxKSB7XHJcbiAgICAgIHRoaXMubUR4ID0gMDtcclxuICAgICAgdGhpcy5tRHkgPSAwO1xyXG4gICAgICB0aGlzLm1EeiA9IHkgLSB0aGlzLm1aO1xyXG4gICAgICB0aGlzLm1YID0geDtcclxuICAgICAgdGhpcy5tWSA9IHk7XHJcbiAgICAgIHRoaXMubVogKz0gdGhpcy5tRHo7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1EeCA9IHggLSB0aGlzLm1YO1xyXG4gICAgICB0aGlzLm1EeSA9IHkgLSB0aGlzLm1ZO1xyXG4gICAgICB0aGlzLm1EeiA9IDA7XHJcbiAgICAgIHRoaXMubVggPSB4O1xyXG4gICAgICB0aGlzLm1ZID0geTtcclxuICAgIH0gIFxyXG4gIH0gLy8gRW5kIG9mICdvblRvdWNoTW92ZScgZnVuY3Rpb25cclxuIFxyXG4gIG9uVG91Y2hFbmQoZSkge1xyXG4gICAgdGhpcy5tQnV0dG9uc1swXSA9IDA7XHJcbiAgICB0aGlzLm1CdXR0b25zWzFdID0gMDtcclxuICAgIHRoaXMubUJ1dHRvbnNbMl0gPSAwO1xyXG4gICAgbGV0XHJcbiAgICAgIC8veCA9IGUudG91Y2hlc1swXS5jbGllbnRYIC0gZS50YXJnZXQub2Zmc2V0TGVmdCxcclxuICAgICAgLy95ID0gZS50b3VjaGVzWzBdLmNsaWVudFkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XHJcbiAgICAgIHggPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSBlLnRhcmdldC5vZmZzZXRMZWZ0LFxyXG4gICAgICB5ID0gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgdGhpcy5tRHggPSAwO1xyXG4gICAgdGhpcy5tRHkgPSAwO1xyXG4gICAgdGhpcy5tRHogPSAwO1xyXG4gICAgdGhpcy5tWCA9IHg7XHJcbiAgICB0aGlzLm1ZID0geTtcclxuIFxyXG4gICAgbGV0IHR0ID0gZS50YXJnZXRUb3VjaGVzO1xyXG4gICAgaWYgKHR0Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJfc2NhbGUgPCB0aGlzLm1pbl96b29tKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZV9mYWN0b3IgPSB0aGlzLm1pbl96b29tO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJfc2NhbGUgPiB0aGlzLm1heF96b29tKSB7XHJcbiAgICAgICAgICB0aGlzLnNjYWxlX2ZhY3RvciA9IHRoaXMubWF4X3pvb207IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjYWxlX2ZhY3RvciA9IHRoaXMuY3Vycl9zY2FsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2NhbGluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvL3ZnLmxvZyhgWm9vbSBlbmQ6IGlzc2M6JHt0aGlzLnNjYWxpbmd9IChtWjogJHt0aGlzLm1afSlgKTtcclxuICB9IC8vIEVuZCBvZiAnb25Ub3VjaE1vdmUnIGZ1bmN0aW9uXHJcbiBcclxuICBvbk1vdXNlTW92ZShlKSB7XHJcbiAgICBsZXRcclxuICAgICAgZHggPSBlLm1vdmVtZW50WCxcclxuICAgICAgZHkgPSBlLm1vdmVtZW50WTtcclxuICAgIHRoaXMubUR4ID0gZHg7XHJcbiAgICB0aGlzLm1EeSA9IGR5O1xyXG4gICAgdGhpcy5tRHogPSAwO1xyXG4gICAgdGhpcy5tWCArPSBkeDtcclxuICAgIHRoaXMubVkgKz0gZHk7XHJcbiAgfSAvLyBFbmQgb2YgJ29uTW91c2VNb3ZlJyBmdW5jdGlvblxyXG4gXHJcbiAgb25Nb3VzZVdoZWVsKGUpIHtcclxuICAgIGlmIChlLndoZWVsRGVsdGEgIT0gMClcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5tWiArPSAodGhpcy5tRHogPSBlLndoZWVsRGVsdGEgLyAxMjApO1xyXG4gIH0gLy8gRW5kIG9mICdvbk1vdXNlV2hlZWwnIGZ1bmN0aW9uXHJcbiBcclxuICBvbk1vdXNlRG93bihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiBcclxuICAgIHRoaXMubUJ1dHRvbnNPbGRbZS5idXR0b25dID0gdGhpcy5tQnV0dG9uc1tlLmJ1dHRvbl07XHJcbiAgICB0aGlzLm1CdXR0b25zW2UuYnV0dG9uXSA9IDE7XHJcbiAgICB0aGlzLm1CdXR0b25zQ2xpY2tbZS5idXR0b25dID0gIXRoaXMubUJ1dHRvbnNPbGRbZS5idXR0b25dICYmIHRoaXMubUJ1dHRvbnNbZS5idXR0b25dO1xyXG4gICAgXHJcbiAgICB0aGlzLnNoaWZ0S2V5ID0gZS5zaGlmdEtleTtcclxuICAgIHRoaXMuYWx0S2V5ID0gZS5hbHRLZXk7XHJcbiAgICB0aGlzLmN0cmxLZXkgPSBlLmN0cmxLZXk7XHJcbiAgfSAvLyBFbmQgb2YgJ29uTW91c2VNb3ZlJyBmdW5jdGlvblxyXG4gIFxyXG4gIG9uTW91c2VVcChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm1EeCA9IDA7XHJcbiAgICB0aGlzLm1EeSA9IDA7XHJcbiAgICB0aGlzLm1EeiA9IDA7XHJcbiBcclxuICAgIHRoaXMubUJ1dHRvbnNPbGRbZS5idXR0b25dID0gdGhpcy5tQnV0dG9uc1tlLmJ1dHRvbl07XHJcbiAgICB0aGlzLm1CdXR0b25zW2UuYnV0dG9uXSA9IDA7XHJcbiAgICB0aGlzLm1CdXR0b25zQ2xpY2tbZS5idXR0b25dID0gMDtcclxuIFxyXG4gICAgdGhpcy5zaGlmdEtleSA9IGUuc2hpZnRLZXk7XHJcbiAgICB0aGlzLmFsdEtleSA9IGUuYWx0S2V5O1xyXG4gICAgdGhpcy5jdHJsS2V5ID0gZS5jdHJsS2V5O1xyXG4gIH0gLy8gRW5kIG9mICdvbk1vdXNlTW92ZScgZnVuY3Rpb25cclxuIFxyXG4gIC8vLyBLZXlib2FyZCBoYW5kbGVcclxuICBvbktleURvd24oZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBsZXQgZm9jdXNlZF9lbGVtZW50ID0gbnVsbDtcclxuICAgIGlmIChkb2N1bWVudC5oYXNGb2N1cygpICYmXHJcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSAmJlxyXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICBmb2N1c2VkX2VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICBpZiAoZm9jdXNlZF9lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gICAgICBcclxuICAgIGlmIChlLmNvZGUgIT0gXCJGMTJcIiAmJiBlLmNvZGUgIT0gXCJGMTFcIiAmJiBlLmNvZGUgIT0gXCJLZXlSXCIpXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMua2V5c09sZFtlLmNvZGVdID0gdGhpcy5rZXlzW2UuY29kZV07XHJcbiAgICB0aGlzLmtleXNbZS5jb2RlXSA9IDE7XHJcbiAgICB0aGlzLmtleXNDbGlja1tlLmNvZGVdID0gIXRoaXMua2V5c09sZFtlLmNvZGVdICYmIHRoaXMua2V5c1tlLmNvZGVdO1xyXG4gICAgXHJcbiAgICB0aGlzLnNoaWZ0S2V5ID0gZS5zaGlmdEtleTtcclxuICAgIHRoaXMuYWx0S2V5ID0gZS5hbHRLZXk7XHJcbiAgICB0aGlzLmN0cmxLZXkgPSBlLmN0cmxLZXk7XHJcbiAgfSAvLyBFbmQgb2YgJ29uS2V5RG93bicgZnVuY3Rpb25cclxuICBcclxuICBvbktleVVwKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3RleHRhcmVhJylcclxuICAgICAgcmV0dXJuO1xyXG4gICAgbGV0IGZvY3VzZWRfZWxlbWVudCA9IG51bGw7XHJcbiAgICBpZiAoZG9jdW1lbnQuaGFzRm9jdXMoKSAmJlxyXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiZcclxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgZm9jdXNlZF9lbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgaWYgKGZvY3VzZWRfZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3RleHRhcmVhJylcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9ICAgICAgXHJcbiAgICBpZiAoZS5jb2RlICE9IFwiRjEyXCIgJiYgZS5jb2RlICE9IFwiRjExXCIgJiYgZS5jb2RlICE9IFwiS2V5UlwiKVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmtleXNPbGRbZS5jb2RlXSA9IHRoaXMua2V5c1tlLmNvZGVdO1xyXG4gICAgdGhpcy5rZXlzW2UuY29kZV0gPSAwO1xyXG4gICAgdGhpcy5rZXlzQ2xpY2tbZS5jb2RlXSA9IDA7XHJcbiBcclxuICAgIHRoaXMuc2hpZnRLZXkgPSBlLnNoaWZ0S2V5O1xyXG4gICAgdGhpcy5hbHRLZXkgPSBlLmFsdEtleTtcclxuICAgIHRoaXMuY3RybEtleSA9IGUuY3RybEtleTtcclxuICB9IC8vIEVuZCBvZiAnb25LZXlVcCcgZnVuY3Rpb25cclxuICBcclxuICAvLy8gQ2FtZXJhIG1vdmVtZW50IGhhbmRsaW5nXHJcbiAgcmVzZXQoKSB7XHJcbiAgICAvL3ZnLmxvZyhgTXNEejogJHt0aGlzLm1Een1gKTtcclxuICAgIHRoaXMubUR4ID0gMDtcclxuICAgIHRoaXMubUR5ID0gMDtcclxuICAgIHRoaXMubUR6ID0gMDtcclxuICAgIHRoaXMubUJ1dHRvbnNDbGljay5mb3JFYWNoKGsgPT4gdGhpcy5tQnV0dG9uc0NsaWNrW2tdID0gMCk7XHJcbiAgICB0aGlzLmtleXNDbGljay5mb3JFYWNoKGsgPT4gdGhpcy5rZXlzQ2xpY2tba10gPSAwKTtcclxuIFxyXG4gICAgdGhpcy5zaGlmdEtleSA9IHRoaXMua2V5c1tcIlNoaWZ0TGVmdFwiXSB8fCB0aGlzLmtleXNbXCJTaGlmdFJpZ2h0XCJdO1xyXG4gICAgdGhpcy5hbHRLZXkgPSB0aGlzLmtleXNbXCJBbHRMZWZ0XCJdIHx8IHRoaXMua2V5c1tcIkFsdFJpZ2h0XCJdO1xyXG4gICAgdGhpcy5jdHJsS2V5ID0gdGhpcy5rZXlzW1wiQ29udHJvbExlZnRcIl0gfHwgdGhpcy5rZXlzW1wiQ29udHJvbFJpZ2h0XCJdO1xyXG4gIH0gLy8gRW5kIG9mIHJlc2V0JyBmdW5jdGlvblxyXG4gICAgXHJcbiAgcmVzcG9uc2VDYW1lcmEodGltZXIpIHtcclxuICAgIGlmICh0aGlzLnNoaWZ0S2V5ICYmIHRoaXMua2V5c0NsaWNrW1wiS2V5RlwiXSkge1xyXG4gICAgICBjYW1TZXQodmVjMyg1KSwgdmVjMygwKSwgdmVjMygwLCAxLCAwKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBtYXRyID0gbWF0NCgpO1xyXG4gICAgbGV0IGFuZ2xlU3BlZWQgPSA3MDtcclxuICAgIGxldCByb3RhdGVZID0gMCwgcm90YXRlWCA9IDA7XHJcbiAgICBsZXQgLypzcGVlZCA9IDE1LCovIGRpc3QgPSAwO1xyXG4gICAgbGV0IHByZXZQb3MgPSBtb2RlbC5wb3M7XHJcbiAgICBjb25zdCBpbmVydENvbnN0ID0gMTtcclxuIFxyXG4gICAgaWYgKCF0aGlzLmtleXNbXCJOdW1wYWQxXCJdKSB7XHJcbiAgICAgIC8vIFBsYXlpbmcgbW9kXHJcbiAgICAgIGNhbS5sb2MgPSBjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkKTtcclxuXHJcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcF9pbnB1dFwiKTtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIG5ld1NwZWVkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHN0ZXAgPSAobmV3U3BlZWQgLSBzcGVlZCkgLyA1MDA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKChzcGVlZCA8IG5ld1NwZWVkICYmIHN0ZXAgPiAwKSB8fCAoc3BlZWQgPiBuZXdTcGVlZCAmJiBzdGVwIDwgMCkpXHJcbiAgICAgICAgc3BlZWQgKz0gc3RlcDtcclxuXHJcbiAgICAgIC8vIENoYW5naW5nIHBvc2l0aW9uXHJcbiAgICAgIGRpc3QgPSB0aW1lci5nbG9iYWxEZWx0YVRpbWUgKiBzcGVlZDtcclxuXHJcbiAgICAgIGNhbVNldChjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkLm11bChkaXN0KSksIGNhbS5sb2MuYWRkKG1vZGVsLmZvcndhcmQpLCBtb2RlbC51cCk7XHJcbiAgICAgIG1hdHIgPSBtYXRyLm11bChtYXQ0KCkudHJhbnNsYXRlKG1vZGVsLmZvcndhcmQubXVsKGRpc3QpKSk7XHJcbiAgICAgIG1vZGVsLnBvcyA9IG1vZGVsLnBvcy5tdWwobWF0NCgpLnRyYW5zbGF0ZShtb2RlbC5mb3J3YXJkLm11bChkaXN0KSkpO1xyXG4gICAgICBhbGxUcmFuc2xhdGUgPSBhbGxUcmFuc2xhdGUubXVsKG1hdDQoKS50cmFuc2xhdGUobW9kZWwuZm9yd2FyZC5tdWwoZGlzdCkpKTtcclxuXHJcblxyXG4gICAgICAvL1JvdGF0aW9uXHJcbiAgICAgIGlmICghKHRoaXMua2V5c1tcIktleURcIl0gJiYgdGhpcy5rZXlzW1wiS2V5QVwiXSkpXHJcbiAgICAgICAgaWYgKHRoaXMua2V5c1tcIktleURcIl0pIHtcclxuICAgICAgICAgIHJvdGF0ZVkgPSB0aW1lci5nbG9iYWxEZWx0YVRpbWUgKiBhbmdsZVNwZWVkO1xyXG4gICAgXHJcbiAgICAgICAgICBtb2RlbC5mb3J3YXJkID0gbW9kZWwuZm9yd2FyZC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVZLCBtb2RlbC51cC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgICAgbW9kZWwucmlnaHQgPSBtb2RlbC5yaWdodC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVZLCBtb2RlbC51cC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleXNbXCJLZXlBXCJdKSB7XHJcbiAgICAgICAgICByb3RhdGVZID0gLXRpbWVyLmdsb2JhbERlbHRhVGltZSAqIGFuZ2xlU3BlZWQ7XHJcbiAgICBcclxuICAgICAgICAgIG1vZGVsLmZvcndhcmQgPSBtb2RlbC5mb3J3YXJkLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVksIG1vZGVsLnVwLm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgICBtb2RlbC5yaWdodCA9IG1vZGVsLnJpZ2h0Lm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVksIG1vZGVsLnVwLm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBpZiAoISh0aGlzLmtleXNbXCJLZXlXXCJdICYmIHRoaXMua2V5c1tcIktleVNcIl0pKVxyXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJLZXlXXCJdICYmIG1vZGVsLnBvcy55ID4gMCkge1xyXG4gICAgICAgICAgcm90YXRlWCA9IHRpbWVyLmdsb2JhbERlbHRhVGltZSAqIGFuZ2xlU3BlZWQ7XHJcbiAgICBcclxuICAgICAgICAgIG1vZGVsLmZvcndhcmQgPSBtb2RlbC5mb3J3YXJkLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVgsIG1vZGVsLnJpZ2h0Lm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgICBtb2RlbC51cCA9IG1vZGVsLnVwLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVgsIG1vZGVsLnJpZ2h0Lm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMua2V5c1tcIktleVNcIl0pIHtcclxuICAgICAgICAgIHJvdGF0ZVggPSAtdGltZXIuZ2xvYmFsRGVsdGFUaW1lICogYW5nbGVTcGVlZDtcclxuICAgIFxyXG4gICAgICAgICAgbW9kZWwuZm9yd2FyZCA9IG1vZGVsLmZvcndhcmQubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWCwgbW9kZWwucmlnaHQubm9ybWFsaXplKCkpKTtcclxuICAgICAgICAgIG1vZGVsLnVwID0gbW9kZWwudXAubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWCwgbW9kZWwucmlnaHQubm9ybWFsaXplKCkpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gQ2hlY2tpbmcgcG9zaXRpb24gdG8gbm90IHRvIGJlIHVuZGVyIGdyb3VuZCAgXHJcbiAgICAgIGlmIChtb2RlbC5wb3MueSA8IDAgJiYgbW9kZWwuZm9yd2FyZC55IDwgMClcclxuICAgICAgICBtb2RlbC5mb3J3YXJkID0gdmVjMyhtb2RlbC5mb3J3YXJkLngsIDAsIG1vZGVsLmZvcndhcmQueiksIG1vZGVsLnBvcy55ID0gMDtcclxuXHJcbiAgICAgIC8vIFBsYW5uaW5nIG9mIHBsYW5lXHJcbiAgICAgIGlmIChtb2RlbC5wb3MueSA+IDAgJiYgc3BlZWQgPD0gMjUwKSB7XHJcbiAgICAgICAgaWYgKG1vZGVsLmZvcndhcmQueSA8IDApIHtcclxuICAgICAgICAgIGxldCBkaXIgPSBtb2RlbC5mb3J3YXJkLm11bCgwLjkpLmFkZChtb2RlbC51cC5uZWcoKS5tdWwoMC4xKSk7XHJcblxyXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgcG9zaXRpb25cclxuICAgICAgICAgIGRpc3QgPSB0aW1lci5nbG9iYWxEZWx0YVRpbWUgKiBpbmVydFNwZWVkO1xyXG5cclxuICAgICAgICAgIGNhbVNldChjYW0ubG9jLmFkZChkaXIubXVsKGRpc3QpKSwgY2FtLmxvYy5hZGQobW9kZWwuZm9yd2FyZCksIG1vZGVsLnVwKTtcclxuICAgICAgICAgIG1hdHIgPSBtYXRyLm11bChtYXQ0KCkudHJhbnNsYXRlKGRpci5tdWwoZGlzdCkpKTtcclxuICAgICAgICAgIG1vZGVsLnBvcyA9IG1vZGVsLnBvcy5tdWwobWF0NCgpLnRyYW5zbGF0ZShkaXIubXVsKGRpc3QpKSk7XHJcbiAgICAgICAgICBhbGxUcmFuc2xhdGUgPSBhbGxUcmFuc2xhdGUubXVsKG1hdDQoKS50cmFuc2xhdGUoZGlyLm11bChkaXN0KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgbGV0IGRpciA9IG1vZGVsLmZvcndhcmQubXVsKDAuMSkuYWRkKG1vZGVsLnVwLm5lZygpLm11bCgwLjkpKTtcclxuXHJcbiAgICAgICAgICAvLyBDaGFuZ2luZyBwb3NpdGlvblxyXG4gICAgICAgICAgZGlzdCA9IHRpbWVyLmdsb2JhbERlbHRhVGltZSAqIGluZXJ0U3BlZWQ7XHJcblxyXG4gICAgICAgICAgY2FtU2V0KGNhbS5sb2MuYWRkKGRpci5tdWwoZGlzdCkpLCBjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkKSwgbW9kZWwudXApO1xyXG4gICAgICAgICAgbWF0ciA9IG1hdHIubXVsKG1hdDQoKS50cmFuc2xhdGUoZGlyLm11bChkaXN0KSkpO1xyXG4gICAgICAgICAgbW9kZWwucG9zID0gbW9kZWwucG9zLm11bChtYXQ0KCkudHJhbnNsYXRlKGRpci5tdWwoZGlzdCkpKTtcclxuICAgICAgICAgIGFsbFRyYW5zbGF0ZSA9IGFsbFRyYW5zbGF0ZS5tdWwobWF0NCgpLnRyYW5zbGF0ZShkaXIubXVsKGRpc3QpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgKi9cclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3UG9zID0gbW9kZWwucG9zO1xyXG5cclxuICAgICAgdmVjVHJhbnMgPSB2ZWNUcmFucy5zdWIodmVjMyhwcmV2UG9zLngsIDAsIHByZXZQb3Mueikuc3ViKHZlYzMobmV3UG9zLngsIDAsIG5ld1Bvcy56KSkubXVsKDAuMDAxKSk7XHJcbiAgICAgIG1hdHJUcmFucyA9IG1hdHJUcmFucy5tdWwobWF0NCgpLnRyYW5zbGF0ZSh2ZWMzKG5ld1Bvcy54LCAwLCBuZXdQb3Mueikuc3ViKHZlYzMocHJldlBvcy54LCAwLCBwcmV2UG9zLnopKSkpO1xyXG5cclxuICAgICAgY2FtU2V0KG1vZGVsLnBvcy5zdWIobW9kZWwuZm9yd2FyZC5tdWwoOSkpLmFkZChtb2RlbC51cC5tdWwoMTApKSwgbW9kZWwucG9zLmFkZChtb2RlbC5mb3J3YXJkLm11bCg4KSksIG1vZGVsLnVwKTtcclxuICAgICAgcmV0dXJuIG1hdHIubXVsKGFsbFRyYW5zbGF0ZS5pbnZlcnNlKCkpLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVgsIG1vZGVsLnJpZ2h0Lm5vcm1hbGl6ZSgpKS5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVZLCBtb2RlbC51cC5ub3JtYWxpemUoKSkpKS5tdWwoYWxsVHJhbnNsYXRlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBHb2QgbW9kXHJcbiAgICAgIGNhbS5sb2MgPSBjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkKTtcclxuICAgICAgaWYgKHRoaXMua2V5c1tcIk51bXBhZDhcIl0pIHtcclxuICAgICAgICBkaXN0ID0gdGltZXIuZ2xvYmFsRGVsdGFUaW1lICogc3BlZWQgKiAodGhpcy5rZXlzW1wiTnVtcGFkOVwiXSA9PSB0cnVlID8gOCA6IDEpO1xyXG5cclxuICAgICAgICBjYW1TZXQoY2FtLmxvYy5hZGQobW9kZWwuZm9yd2FyZC5tdWwoZGlzdCkpLCBjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkKSwgbW9kZWwudXApO1xyXG4gICAgICAgIG1hdHIgPSBtYXRyLm11bChtYXQ0KCkudHJhbnNsYXRlKG1vZGVsLmZvcndhcmQubXVsKGRpc3QpKSk7XHJcbiAgICAgICAgbW9kZWwucG9zID0gbW9kZWwucG9zLm11bChtYXQ0KCkudHJhbnNsYXRlKG1vZGVsLmZvcndhcmQubXVsKGRpc3QpKSk7XHJcbiAgICAgICAgYWxsVHJhbnNsYXRlID0gYWxsVHJhbnNsYXRlLm11bChtYXQ0KCkudHJhbnNsYXRlKG1vZGVsLmZvcndhcmQubXVsKGRpc3QpKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMua2V5c1tcIk51bXBhZDRcIl0pIHtcclxuICAgICAgICBkaXN0ID0gdGltZXIuZ2xvYmFsRGVsdGFUaW1lICogc3BlZWQgKiAodGhpcy5rZXlzW1wiTnVtcGFkOVwiXSA9PSB0cnVlID8gOCA6IDEpO1xyXG5cclxuICAgICAgICBjYW1TZXQoY2FtLmxvYy5zdWIobW9kZWwuZm9yd2FyZC5tdWwoZGlzdCkpLCBjYW0ubG9jLmFkZChtb2RlbC5mb3J3YXJkKSwgbW9kZWwudXApO1xyXG4gICAgICAgIG1hdHIgPSBtYXRyLm11bChtYXQ0KCkudHJhbnNsYXRlKG1vZGVsLmZvcndhcmQubXVsKGRpc3QpLm5lZygpKSk7XHJcbiAgICAgICAgbW9kZWwucG9zID0gbW9kZWwucG9zLm11bChtYXQ0KCkudHJhbnNsYXRlKG1vZGVsLmZvcndhcmQubXVsKGRpc3QpLm5lZygpKSk7XHJcbiAgICAgICAgYWxsVHJhbnNsYXRlID0gYWxsVHJhbnNsYXRlLm11bChtYXQ0KCkudHJhbnNsYXRlKG1vZGVsLmZvcndhcmQubXVsKGRpc3QpLm5lZygpKSk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5ld1BvcyA9IG1vZGVsLnBvcztcclxuICAgICAgaWYgKCEodGhpcy5rZXlzW1wiS2V5RFwiXSAmJiB0aGlzLmtleXNbXCJLZXlBXCJdKSlcclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiS2V5RFwiXSkge1xyXG4gICAgICAgICAgcm90YXRlWSA9IHRpbWVyLmdsb2JhbERlbHRhVGltZSAqIGFuZ2xlU3BlZWQ7XHJcbiAgICBcclxuICAgICAgICAgIG1vZGVsLmZvcndhcmQgPSBtb2RlbC5mb3J3YXJkLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVksIG1vZGVsLnVwLm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgICBtb2RlbC5yaWdodCA9IG1vZGVsLnJpZ2h0Lm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVksIG1vZGVsLnVwLm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMua2V5c1tcIktleUFcIl0pIHtcclxuICAgICAgICAgIHJvdGF0ZVkgPSAtdGltZXIuZ2xvYmFsRGVsdGFUaW1lICogYW5nbGVTcGVlZDtcclxuICAgIFxyXG4gICAgICAgICAgbW9kZWwuZm9yd2FyZCA9IG1vZGVsLmZvcndhcmQubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWSwgbW9kZWwudXAubm9ybWFsaXplKCkpKTtcclxuICAgICAgICAgIG1vZGVsLnJpZ2h0ID0gbW9kZWwucmlnaHQubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWSwgbW9kZWwudXAubm9ybWFsaXplKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIGlmICghKHRoaXMua2V5c1tcIktleVdcIl0gJiYgdGhpcy5rZXlzW1wiS2V5U1wiXSkpXHJcbiAgICAgICAgaWYgKHRoaXMua2V5c1tcIktleVdcIl0pIHtcclxuICAgICAgICAgIHJvdGF0ZVggPSB0aW1lci5nbG9iYWxEZWx0YVRpbWUgKiBhbmdsZVNwZWVkO1xyXG4gICAgXHJcbiAgICAgICAgICBtb2RlbC5mb3J3YXJkID0gbW9kZWwuZm9yd2FyZC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVYLCBtb2RlbC5yaWdodC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgICAgbW9kZWwudXAgPSBtb2RlbC51cC5tdWwobWF0NCgpLnJvdGF0ZShyb3RhdGVYLCBtb2RlbC5yaWdodC5ub3JtYWxpemUoKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleXNbXCJLZXlTXCJdKSB7XHJcbiAgICAgICAgICByb3RhdGVYID0gLXRpbWVyLmdsb2JhbERlbHRhVGltZSAqIGFuZ2xlU3BlZWQ7XHJcbiAgICBcclxuICAgICAgICAgIG1vZGVsLmZvcndhcmQgPSBtb2RlbC5mb3J3YXJkLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVgsIG1vZGVsLnJpZ2h0Lm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgICBtb2RlbC51cCA9IG1vZGVsLnVwLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVgsIG1vZGVsLnJpZ2h0Lm5vcm1hbGl6ZSgpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgdmVjVHJhbnMgPSB2ZWNUcmFucy5zdWIodmVjMyhwcmV2UG9zLngsIDAsIHByZXZQb3Mueikuc3ViKHZlYzMobmV3UG9zLngsIDAsIG5ld1Bvcy56KSkubXVsKDAuMDAxKSk7XHJcbiAgICAgIG1hdHJUcmFucyA9IG1hdHJUcmFucy5tdWwobWF0NCgpLnRyYW5zbGF0ZSh2ZWMzKG5ld1Bvcy54LCAwLCBuZXdQb3Mueikuc3ViKHZlYzMocHJldlBvcy54LCAwLCBwcmV2UG9zLnopKSkpO1xyXG5cclxuICAgICAgY2FtU2V0KG1vZGVsLnBvcy5zdWIobW9kZWwuZm9yd2FyZC5tdWwoNikpLmFkZChtb2RlbC51cC5tdWwoOCkpLCBtb2RlbC5wb3MuYWRkKG1vZGVsLmZvcndhcmQubXVsKDgpKSwgbW9kZWwudXApO1xyXG4gICAgICByZXR1cm4gbWF0ci5tdWwoYWxsVHJhbnNsYXRlLmludmVyc2UoKSkubXVsKG1hdDQoKS5yb3RhdGUocm90YXRlWCwgbW9kZWwucmlnaHQubm9ybWFsaXplKCkpLm11bChtYXQ0KCkucm90YXRlKHJvdGF0ZVksIG1vZGVsLnVwLm5vcm1hbGl6ZSgpKSkpLm11bChhbGxUcmFuc2xhdGUpO1xyXG4gICAgfVxyXG4gIH0gLy8gRW5kIG9mICdyZXNwb25zZUNhbWVyYScgZnVuY3Rpb25cclxufSAvLyBFbmQgb2YgJ2lucHV0JyBjbGFzcyIsImltcG9ydCB7IHZlYzMsIG1hdDQsIGNhbUNyZWF0ZSwgY2FtU2V0LCBjYW0gfSBmcm9tIFwiLi4vbXRoL21hdGguanNcIjtcclxuaW1wb3J0ICogYXMgYW5pbSBmcm9tICcuLi9hbmltL2FuaW0uanMnO1xyXG5pbXBvcnQgeyBpbnB1dCwgbWF0clRyYW5zLCB2ZWNUcmFucyB9IGZyb20gXCIuLi91dGlscy9jbnRybC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShybmQpIHtcclxuICBsZXQgY2FudmFzID0gcm5kLmNhbnZhcztcclxuICAvLyBMb29rdXAgdGhlIHNpemUgdGhlIGJyb3dzZXIgaXMgZGlzcGxheWluZyB0aGUgY2FudmFzIGluIENTUyBwaXhlbHMuXHJcbiAgY29uc3QgZGlzcGxheVdpZHRoICA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcclxuIFxyXG4gIC8vIENoZWNrIGlmIHRoZSBjYW52YXMgaXMgbm90IHRoZSBzYW1lIHNpemUuXHJcbiAgY29uc3QgbmVlZFJlc2l6ZSA9IGNhbnZhcy53aWR0aCAgIT09IGRpc3BsYXlXaWR0aCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ICE9PSBkaXNwbGF5SGVpZ2h0O1xyXG4gXHJcbiAgaWYgKG5lZWRSZXNpemUpIHtcclxuICAgIC8vIE1ha2UgdGhlIGNhbnZhcyB0aGUgc2FtZSBzaXplXHJcbiAgICBjYW52YXMud2lkdGggID0gZGlzcGxheVdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGRpc3BsYXlIZWlnaHQ7XHJcbiAgfVxyXG4gXHJcbiAgcm5kLmdsLnZpZXdwb3J0KDAsIDAsIHJuZC5nbC5jYW52YXMud2lkdGgsIHJuZC5nbC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgcmV0dXJuIG5lZWRSZXNpemU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyYW1lQmxvY2tCaW5kKHJuZCkge1xyXG4gIGxldCBnbCA9IHJuZC5nbDtcclxuICAvLyBMb2FkaW5nIG1hdHJpeGVzIGFuZCBmcmFtZSBidWZmZXJcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJuZC5wcmltQ291bnQ7IGkrKylcclxuICAgIGlmIChybmQub2xkRmxhZ3NbaV0gIT0gcm5kLmlzUHJpbURyYXdbaV0gJiYgcm5kLmlzUHJpbURyYXdbaV0gPT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgcHJnID0gcm5kLnByaW1zW2ldLnNoZHMucHJnO1xyXG5cclxuICAgICAgZ2wudXNlUHJvZ3JhbShwcmcpO1xyXG4gICAgICBnbC51bmlmb3JtQmxvY2tCaW5kaW5nKHByZywgXHJcbiAgICAgICAgZ2wuZ2V0VW5pZm9ybUJsb2NrSW5kZXgocHJnLCBcIkZyYW1lQnVmZmVyXCIpLFxyXG4gICAgICAgIHJuZC5mcmFtZVVuaWZvcm1CdWZmZXJJbmRleCk7XHJcblxyXG4gICAgICBybmQubWF0cml4UmVsb2FkKHJuZC5wcmltc1tpXSk7XHJcblxyXG4gICAgICBybmQub2xkRmxhZ3NbaV0gPSBybmQuaXNQcmltRHJhd1tpXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbXNJbml0KHJuZCkge1xyXG4gIHJuZC5wcmltcyA9IFtdO1xyXG5cclxuICAvL2xvYWRpbmcgcGxhbmVcclxuICBhbmltLmxvYWRQcmltKHJuZCwgXCIuL2pldDIub2JqXCIpO1xyXG5cclxuICAvLyBDcmVhdGluZyBjdWJlXHJcbiAgYW5pbS5jcmVhdGVGaWd1cmUocm5kLCBcImN1YmVcIiwgXCJkZWZhdWx0XCIsIDAuOCwgdmVjMygpKTtcclxuXHJcbiAgLy8gQ3JlYXRpbmcgZ3JvdW5kXHJcbiAgY29uc3Qgc2l6ZSA9IDUwMDA7XHJcbiAgLy8gTG9hZGluZyB0ZXh0dXJlXHJcbiAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZy5zcmMgPSBcIi4vcm9hZC5qcGdcIjtcclxuICBhbmltLnRleHR1cmUocm5kLmdsLCB7aW1nOiBpbWcsIG5hbWU6IFwibGFuZFwifSk7XHJcbiAgYW5pbS5jcmVhdGVGaWd1cmUocm5kLCBcInF1YWRcIiwgXCJxdWFkXCIsIHNpemUsIHZlYzMoKSk7XHJcbn1cclxuXHJcbmNsYXNzIF9yZW5kZXJ7XHJcbiAgZnJhbWVEYXRhID0gWzAsIDAsIDAsIDBdO1xyXG4gIGZyYW1lVW5pZm9ybUJ1ZmZlckluZGV4ID0gNTtcclxuICB0aW1lciA9IG5ldyBhbmltLlRpbWVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXNJZCkge1xyXG4gICAgLy9HZXR0aW5nIGNhbnZhcyBhbmQgZ2wgY29udGV4dFxyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIik7XHJcbiAgICB0aGlzLmdsID0gZ2w7XHJcblxyXG4gICAgLy8gQ2hlY2tpbmcgZ2wgY29udGV4dFxyXG4gICAgaWYgKGdsID09PSBudWxsKSB7XHJcbiAgICAgIGFsZXJ0KFwiV2ViR0wyIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcblxyXG4gICAgLy8gU2V0dGluZyBjYW1lcmEgYW5kIG1hdHJpeGVzXHJcbiAgICBjYW1DcmVhdGUodGhpcy5jYW52YXMpO1xyXG4gICAgY2FtU2V0KHZlYzMoMCwgMiwgLTUpLCB2ZWMzKDApLCB2ZWMzKDAsIDEsIDApKTtcclxuICAgIHRoaXMuY2FtID0gY2FtO1xyXG5cclxuICAgIC8vIEFycmF5IG9mIHByaW1pdGl2ZXMgaW5pdGlhbGl6aW5nLCBjcmVhdGluZyBvZiBwcmltaXRpdmVzXHJcbiAgICB0aGlzLmlzUHJpbURyYXcgPSBbXTtcclxuICAgIHRoaXMucHJpbUNvdW50ID0gMDtcclxuICAgIHByaW1zSW5pdCh0aGlzKTtcclxuXHJcbiAgICAvLyBGcmFtZSBidWZmZXJcclxuICAgIHRoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuVU5JRk9STV9CVUZGRVIsIHRoaXMuZnJhbWVCdWZmZXIpO1xyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5VTklGT1JNX0JVRkZFUiwgNCAqIDQsIGdsLlNUQVRJQ19EUkFXKTtcclxuXHJcbiAgICAvLyBCaW5kaW5nIGZyYW1lIGJ1ZmZlciwgcmVsb2FkaW5nIG1hdHJpeGVzXHJcbiAgICB0aGlzLm9sZEZsYWdzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJpbUNvdW50OyBpKyspXHJcbiAgICAgIHRoaXMub2xkRmxhZ3NbaV0gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgaW5wdXQgc3lzdGVtXHJcbiAgICB0aGlzLmlucHV0ID0gbmV3IGlucHV0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xyXG4gICAgLy8gQ2xlYXJpbmcgZnJhbWVcclxuICAgIGdsLmNsZWFyQ29sb3IoMC4xMiwgMC44NSwgMC45NzAsIDEpO1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcbiAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuICAgIFxyXG4gICAgLy8gRHJhd2luZyBmcHNcclxuICAgIHRoaXMudGltZXIucmVzcG9uc2UoXCJmcHNcIik7XHJcblxyXG4gICAgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSh0aGlzKTtcclxuXHJcbiAgICAvLyBTZW5kaW5nIGZyYW1lIGJ1ZmZlciB0byBzaGFkZXJzXHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLlVOSUZPUk1fQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuVU5JRk9STV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5mcmFtZURhdGEpLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICBnbC5iaW5kQnVmZmVyQmFzZShnbC5VTklGT1JNX0JVRkZFUiwgdGhpcy5mcmFtZVVuaWZvcm1CdWZmZXJJbmRleCwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICBcclxuICAgIC8vIFJlc3BvbnNpbmcgaW5wdXQgc3lzdGVtXHJcbiAgICB0aGlzLm5ld01hdHJXb3JsZCA9IHRoaXMuaW5wdXQucmVzcG9uc2VDYW1lcmEodGhpcy50aW1lcik7XHJcbiAgICBpZiAodGhpcy5uZXdNYXRyV29ybGQgIT0gbnVsbCAmJiB0aGlzLmlzUHJpbURyYXdbMF0gPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnByaW1zWzBdLm1hdHJXb3JsZCA9IHRoaXMucHJpbXNbMF0ubWF0cldvcmxkLm11bCh0aGlzLm5ld01hdHJXb3JsZCk7XHJcbiAgICAgIHRoaXMuY2FtID0gY2FtO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiQ2FtZXJhIHBvc2l0aW9uOlwiLCBjYW0ubG9jKTtcclxuICAgIH1cclxuXHJcbiAgICBmcmFtZUJsb2NrQmluZCh0aGlzKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJpbUNvdW50OyBpKyspXHJcbiAgICAgIGlmICh0aGlzLmlzUHJpbURyYXdbaV0gPT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBwcmcgPSB0aGlzLnByaW1zW2ldLnNoZHMucHJnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmltc1tpXS5uYW1lID09IFwicXVhZFwiKVxyXG4gICAgICAgICAgdGhpcy5wcmltc1tpXS5tYXRyV29ybGQgPSBtYXRyVHJhbnM7XHJcblxyXG4gICAgICAgIGdsLnVzZVByb2dyYW0ocHJnKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRpbmcgdGltZSBvbiBzaGFkZXJzXHJcbiAgICAgICAgdGhpcy50aW1lTG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJUaW1lXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVMb2MgIT0gbnVsbClcclxuICAgICAgICAgIGdsLnVuaWZvcm0xZih0aGlzLnRpbWVMb2MsIHRoaXMudGltZXIuZ2xvYmFsVGltZSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0aW5nIHRyYW5zbGF0aW5nIG9mIHRleHR1cmUgb24gc2hhZGVyc1xyXG4gICAgICAgIHRoaXMudHJhbnNMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIlRyYW5zVmVjXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zTG9jICE9IG51bGwpXHJcbiAgICAgICAgICBnbC51bmlmb3JtMmYodGhpcy50cmFuc0xvYywgdmVjVHJhbnMueCwgdmVjVHJhbnMueik7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0aW5nIGNhbWVyYSBsb2NhdGlvbiBvbiBzaGFkZXJzXHJcbiAgICAgICAgdGhpcy5jYW1lcmFMb2NhdGlvaW5Mb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIkNhbUxvY1wiKTtcclxuICAgICAgICBpZiAodGhpcy5jYW1lcmFMb2NhdGlvaW5Mb2MgIT0gbnVsbClcclxuICAgICAgICAgIGdsLnVuaWZvcm0zZih0aGlzLmNhbWVyYUxvY2F0aW9pbkxvYywgdGhpcy5jYW0ubG9jLngsIHRoaXMuY2FtLmxvYy55LCB0aGlzLmNhbS5sb2Mueik7XHJcblxyXG4gICAgICAgIC8vIFJlbG9hZGluZyBtYXRyaXhlc1xyXG4gICAgICAgIHRoaXMubWF0cml4UmVsb2FkKHRoaXMucHJpbXNbaV0pO1xyXG5cclxuICAgICAgICAvLyBEcmF3aW5nIG9mIHByaW1pdGl2ZXNcclxuICAgICAgICBnbC5iaW5kVmVydGV4QXJyYXkodGhpcy5wcmltc1tpXS52ZXJ0ZXhBdHRyaWJBcnJheSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJpbXNbaV0uaW5kZXhBcnJheSA9PSBudWxsKVxyXG4gICAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIHRoaXMucHJpbXNbaV0ubnVtT2ZFbGVtZW50cyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgdGhpcy5wcmltc1tpXS5udW1PZkVsZW1lbnRzLCBnbC5VTlNJR05FRF9JTlQsIDApO1xyXG4gICAgICB9XHJcbiAgfSAvLyBFbmQgb2YgJ3JlbmRlcicgZnVuY3Rpb25cclxuXHJcbiAgbWFpbkxvb3AoKSB7XHJcbiAgICBjb25zdCBkcmF3ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLnRpbWVyLnJlc3BvbnNlKCk7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgICB9O1xyXG4gICAgZHJhdygpO1xyXG4gIH0gLy8gRW5kIG9mICdtYWluTG9vcCcgZnVuY3Rpb25cclxuXHJcbiAgbWF0cml4UmVsb2FkKHByaW0pIHtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcclxuICAgIGxldCBwcmcgPSBwcmltLnNoZHMucHJnO1xyXG5cclxuICAgIC8vIE1hdHJpeGVzXHJcbiAgICAvLyBNYXRyaXggb2Ygdmlld1xyXG4gICAgY29uc3QgVmlld0xvYyA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcmcsIFwiTWF0clZpZXdcIik7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFZpZXdMb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY2FtLm1hdHJWaWV3LnRvQXJyYXkoKSkpO1xyXG5cclxuICAgIC8vIE1hdHJpeCBvZiBwcm9qZWN0aW9uXHJcbiAgICBjb25zdCBQcm9qTG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJNYXRyUHJvalwiKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoUHJvakxvYywgZmFsc2UsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jYW0ubWF0clByb2oudG9BcnJheSgpKSk7XHJcblxyXG4gICAgLy8gTWF0cml4IG9mIHZpZXcgcHJvamVjdGlvblxyXG4gICAgY29uc3QgVlBMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIk1hdHJWUFwiKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoVlBMb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY2FtLm1hdHJWUC50b0FycmF5KCkpKTtcclxuXHJcbiAgICAvLyBNYXRyaXggb2Ygd29ybGRcclxuICAgIGNvbnN0IFdvcmxkTG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJNYXRyV29ybGRcIik7XHJcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KFdvcmxkTG9jLCBmYWxzZSwgbmV3IEZsb2F0MzJBcnJheShwcmltLm1hdHJXb3JsZC50b0FycmF5KCkpKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgY29uc3Qgcm5kID0gbmV3IF9yZW5kZXIoXCJnbGNhbnZhc1wiKTtcclxuICBybmQubWFpbkxvb3AoKTtcclxufSk7ICJdLCJuYW1lcyI6WyJhbmltLmxvYWRQcmltIiwiYW5pbS5jcmVhdGVGaWd1cmUiLCJhbmltLnRleHR1cmUiLCJhbmltLlRpbWVyIl0sIm1hcHBpbmdzIjoiOzs7SUFFQSxNQUFNLEtBQUs7SUFDWCxJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ2xDLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ2xDLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ2xDLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFDcEMsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3JDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNyQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDckMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVM7SUFDeEcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztJQUN4RyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTO0lBQ3hHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVM7SUFDeEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDO0lBQ0EsWUFBWSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDMUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMxQyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLEtBQUs7SUFDTDtJQUNBLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNYLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDdkI7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JDO0lBQ0EsUUFBUSxPQUFPLENBQUMsQ0FBQztJQUNqQixLQUFLO0FBQ0w7SUFDQSxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDM0IsY0FBYyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDM0IsY0FBYyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRztJQUM5QixRQUFRLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0lBQ2xFLGVBQWUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbkU7SUFDQSxLQUFLO0FBQ0w7SUFDQSxJQUFJLE1BQU0sR0FBRztJQUNiLFFBQVEsSUFBSSxDQUFDO0lBQ2IsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixRQUFRLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLEtBQUs7QUFDTDtJQUNBLElBQUksT0FBTyxHQUFHO0lBQ2QsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUN2QixRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQztJQUNBLFFBQVEsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNwQixZQUFZLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDMUI7SUFDQTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7QUFDQTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0FBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsT0FBTyxDQUFDLENBQUM7SUFDakIsS0FBSztBQUNMO0lBQ0EsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUs7SUFDdkMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QjtJQUNBLFFBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDNUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQzVHLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM1RyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsS0FBSztBQUNMO0lBQ0EsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO0lBQ25CLFFBQVEsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSztJQUN2QyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVCO0lBQ0EsUUFBUSxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlCLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlCLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDL0Isb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLEtBQUs7QUFDTDtJQUNBLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtJQUNuQixRQUFRLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUs7SUFDdkMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QjtJQUNBLFFBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9CLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlCLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzlCLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxLQUFLO0FBQ0w7SUFDQSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7SUFDbkIsUUFBUSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLO0lBQ3ZDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNCLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUI7SUFDQSxRQUFRLE9BQU8sSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDOUIsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUMvQixvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5QixvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsS0FBSztJQUNMO0lBQ0EsSUFBSSxjQUFjLENBQUMsQ0FBQyxFQUFFO0lBQ3RCLFFBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0Ysb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsS0FBSztBQUNMO0lBQ0EsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFO0lBQ2pCLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRO0lBQ2hDLFlBQVksT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNsQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVE7SUFDckMsWUFBWSxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xDLHlCQUF5QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ25DLHlCQUF5QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ25DLHlCQUF5QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxLQUFLO0FBQ0w7SUFDQSxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFDYixRQUFRLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2hDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNqQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pDO0lBQ0EsS0FBSztBQUNMO0lBQ0EsSUFBSSxPQUFPLEdBQUc7SUFDZCxRQUFRLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxLQUFLO0FBQ0w7SUFDQSxDQUFDO0FBQ0Q7SUFDTyxTQUFTLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRTtJQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOztJQ3RSRCxNQUFNLEtBQUssQ0FBQztJQUNaLElBQUksV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3pCLFFBQVEsSUFBSSxDQUFDLElBQUksU0FBUztJQUMxQixZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLGFBQWEsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRO0lBQ3JDLFlBQVksSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7SUFDN0IsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVEO0lBQ0EsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pEO0lBQ0EsWUFBWSxJQUFJLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLFNBQVM7SUFDaEQsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25EO0lBQ0EsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELEtBQUs7QUFDTDtJQUNBLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNYLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRO0lBQ2hDLFlBQVksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RCxRQUFRLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsS0FBSztBQUNMO0lBQ0EsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUNuQixRQUFRLElBQUksT0FBTyxFQUFFLElBQUksUUFBUTtJQUNqQyxZQUFZLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekQsUUFBUSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELEtBQUs7QUFDTDtJQUNBLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNYLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRO0lBQ2hDLFlBQVksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RCxRQUFRLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsS0FBSztBQUNMO0lBQ0EsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUNuQixRQUFRLElBQUksT0FBTyxFQUFFLElBQUksUUFBUTtJQUNqQyxZQUFZLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDekQsUUFBUSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELEtBQUs7QUFDTDtJQUNBLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNYLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRO0lBQ2hDLFlBQVksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RCxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUM7SUFDbEMsWUFBWSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdGO0lBQ0EsWUFBWSxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0Ryx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RyxTQUFTO0lBQ1QsUUFBUSxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELEtBQUs7QUFDTDtJQUNBLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNYLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRO0lBQ2hDLFlBQVksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FB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QUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxvQkFBb0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELEtBQUs7QUFDTDtJQUNBLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3RCLFFBQVEsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMxQyxRQUFRLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUMsUUFBUSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQy9DO0lBQ0EsUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0Msb0JBQW9CLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3QyxvQkFBb0IsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxD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Q3pCLFFBQVEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLEtBQUs7QUFDTDtJQUNBLElBQUksT0FBTztJQUNYLElBQUk7SUFDSixRQUFRLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzFDO0lBQ0E7SUFDQSxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTTtJQUN0QyxRQUFRLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdDO0lBQ0EsUUFBUSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUM3QztJQUNBLFFBQVEsSUFBSSxDQUFDLFFBQVE7SUFDckIsUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUMzRSxZQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsS0FBSztBQUNMO0lBQ0EsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDckIsUUFBUSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2pEO0lBQ0EsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsZ0NBQWdDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxnQ0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxRQUFRLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxnQ0FBZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELGdDQUFnQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELFFBQVEsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELGdDQUFnQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsUUFBUSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN2QixRQUFRLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCO0lBQ0EsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxLQUFLO0lBQ0wsQ0FBQztBQUNEO0lBQ08sU0FBUyxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ25DLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7QUFDRDtJQUNPLFNBQVMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3JDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCOztJQzdEQSxJQUFJLE1BQU07QUFDVixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUMsQ0FBQztJQUNGLElBQUksTUFBTTtBQUNWLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUMsQ0FBQztBQUNGO0lBQ0EsSUFBSSxPQUFPO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUMsQ0FBQztJQUNGLElBQUksT0FBTztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEI7SUFDQSxJQUFJLE9BQU8sVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0FBQ0Q7SUFDQSxTQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNwQixhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsRUFBRSxPQUFPLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztBQUNEO0lBQ0EsU0FBUyxhQUFhLENBQUMsSUFBSTtJQUMzQjtJQUNBLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsc0JBQXNCLENBQUMsRUFBRTtJQUM1RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7SUFDL0UsRUFBRTtJQUNGLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3BFLFFBQVEsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JFLElBQUksSUFBSSxNQUFNLEdB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Q0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsSUFBSTtJQUNKLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHO0lBQ3BCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuRDtJQUNBLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLEdBQUc7SUFDSDtJQUNBO0lBQ0EsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRTtJQUNoQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN0QztJQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsRUFBRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7QUFDRDtJQUNBLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQjtJQUNPLGVBQWUsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7SUFDMUMsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUM1QixFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzFDLEVBQUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsRUFBRSxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxFQUFFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsRUFBRSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEIsRUFBRSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEIsRUFBRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakIsRUFBRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDakI7SUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDOUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtJQUN0QyxNQUFNLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO0lBQ2pDLFFBQVEsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsUUFBUSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDN0YsT0FBTztJQUNQO0lBQ0EsUUFBUSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDbEUsS0FBSztJQUNMLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7SUFDM0MsTUFBTSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDaEQsUUFBUSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENB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QyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELFVBQVUsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsVUFBVSxZQUFZLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsU0FBUztJQUNUO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsT0FBTztJQUNQLE1BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUM3QjtJQUNBLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFD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
