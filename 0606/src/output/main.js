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
                +this.m[0][0] * this.m.determ3x3(this.m[1][1], this.m[1][2], this.m[1][3],
                                                 this.m[2][1], this.m[2][2], this.m[2][3],
                                                 this.m[3][1], this.m[3][2], this.m[3][3]) +
                -this.m[0][1] * this.m.determ3x3(this.m[1][0], this.m[1][2], this.m[1][3],
                                                 this.m[2][0], this.m[2][2], this.m[2][3],
                                                 this.m[3][0], this.m[3][2], this.m[3][3]) +
                +this.m[0][2] * this.m.determ3x3(this.m[1][0], this.m[1][1], this.m[1][3],
                                                 this.m[2][0], this.m[2][1], this.m[2][3],
                                                 this.m[3][0], this.m[3][1], this.m[3][3]) +
                -this.m[0][3] * this.m.determ3x3(this.m[1][0], this.m[1][1], this.m[1][2],
                                                 this.m[2][0], this.m[2][1], this.m[2][2],
                                                 this.m[3][0], this.m[3][1], this.m[3][2]);
            return n;
        } // End of 'determ' function

        inverse() {
            let r = mat4();
            let det = this.m.determ();

            if (det == 0)
                return mat4();

            /* build adjoint matrix */
            r.m[0][0] =
                +this.m.determ3x3(this.m[1][1], this.m[1][2], this.m[1][3],
                                  this.m[2][1], this.m[2][2], this.m[2][3],
                                  this.m[3][1], this.m[3][2], this.m[3][3]) / det;

            r.m[1][0] =
                -this.m.determ3x3(this.m[1][0], this.m[1][2], this.m[1][3],
                                  this.m[2][0], this.m[2][2], this.m[2][3],
                                  this.m[3][0], this.m[3][2], this.m[3][3]) / det;

            r.m[2][0] =
                +this.m.determ3x3(this.m[1][0], this.m[1][1], this.m[1][3],
                                  this.m[2][0], this.m[2][1], this.m[2][3],
                                  this.m[3][0], this.m[3][1], this.m[3][3]) / det;

            r.m[3][0] =
                -this.m.determ3x3(this.m[1][0], this.m[1][1], this.m[1][2],
                                  this.m[2][0], this.m[2][1], this.m[2][2],
                                  this.m[3][0], this.m[3][1], this.m[3][2]) / det;

            r.m[0][1] =
                -this.m.determ3x3(this.m[0][1], this.m[0][2], this.m[0][3],
                                  this.m[2][1], this.m[2][2], this.m[2][3],
                                  this.m[3][1], this.m[3][2], this.m[3][3]) / det;

            r.m[1][1] =
                +this.m.determ3x3(this.m[0][0], this.m[0][2], this.m[0][3],
                                  this.m[2][0], this.m[2][2], this.m[2][3],
                                  this.m[3][0], this.m[3][2], this.m[3][3]) / det;

            r.m[2][1] =
                -this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][3],
                                  this.m[2][0], this.m[2][1], this.m[2][3],
                                  this.m[3][0], this.m[3][1], this.m[3][3]) / det;

            r.m[3][1] =
                +this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][2],
                                  this.m[2][0], this.m[2][1], this.m[2][2],
                                  this.m[3][0], this.m[3][1], this.m[3][2]) / det;


            r.m[0][2] =
                +this.m.determ3x3(this.m[0][1], this.m[0][2], this.m[0][3],
                                  this.m[1][1], this.m[1][2], this.m[1][3],
                                  this.m[3][1], this.m[3][2], this.m[3][3]) / det;

            r.m[1][2] =
                -this.m.determ3x3(this.m[0][0], this.m[0][2], this.m[0][3],
                                  this.m[1][0], this.m[1][2], this.m[1][3],
                                  this.m[3][0], this.m[3][2], this.m[3][3]) / det;

            r.m[2][2] =
                +this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][3],
                                  this.m[1][0], this.m[1][1], this.m[1][3],
                                  this.m[3][0], this.m[3][1], this.m[3][3]) / det;

            r.m[3][2] =
                -this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][2],
                                  this.m[1][0], this.m[1][1], this.m[1][2],
                                  this.m[3][0], this.m[3][1], this.m[3][2]) / det;


            r.m[0][3] =
                -this.m.determ3x3(this.m[0][1], this.m[0][2], this.m[0][3],
                                  this.m[1][1], this.m[1][2], this.m[1][3],
                                  this.m[2][1], this.m[2][2], this.m[2][3]) / det;

            r.m[1][3] =
                +this.m.determ3x3(this.m[0][0], this.m[0][2], this.m[0][3],
                                  this.m[1][0], this.m[1][2], this.m[1][3],
                                  this.m[2][0], this.m[2][2], this.m[2][3]) / det;

            r.m[2][3] =
                -this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][3],
                                  this.m[1][0], this.m[1][1], this.m[1][3],
                                  this.m[2][0], this.m[2][1], this.m[2][3]) / det;

            r.m[3][3] =
                +this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][2],
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

        sub(v) {
            if (typeof v == "number")
                return vec3(this.x - v, this.y - v, this.z - v);
            return vec3(this.x - v.x, this.y - v.y, this.z - v.z);
        } // End of 'sub' function

        mul(v) {
            if (typeof v == "number")
                return vec3(this.x * v, this.y * v, this.z * v);
            else if (v.length == 4){
                let w = this.x * v.A03 + this.y * v.A13 + this.z * v.A23 + v.A33;

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
            let len = mul(this, this);

            if (len == 1 || len == 0)
                return len;
            return Math.sqrt(len);
        } // End of 'len' function

        len2() {
            return mul(this, this);
        } // End of 'len2' function

        normalize() {
            let len = this.mul(this);

            if (len != 0 && len != 1) {
                len = Math.sqrt(len);
                return vec3(this.x / len, this.y / len, this.z / len);
            }
            return vec3(this);
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

        translate(v) {
            if (v.length == 3)
                return mat4([[1, 0, 0, 0],
                            [0, 1, 0, 0],
                            [0, 0, 1, 0],
                            [v.x, v.y, v.z, 1]]);
            else
                return mat4([[1, 0, 0, 0],
                             [0, 1, 0, 0],
                             [0, 0, 1, 0],
                             [v, v, v, 1]]);                        
        } // End of 'translate' function    

        scale(v) {
            return mat4([[v.x, 0, 0, 0],
                         [0, v.y, 0, 0],
                         [0, 0, v.z, 0],
                         [0, 0, 0, 1]]);                        

        } // End of 'scale' function

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

        pointtrans(v) {
            return vec3(this.x * v.m[0][0] + this.y * v.m[1][0] + this.z * v.m[2][0] + v.m[3][0],
                        this.x * v.m[0][1] + this.y * v.m[1][1] + this.z * v.m[2][1] + v.m[3][1],
                        this.x * v.m[0][2] + this.y * v.m[1][2] + this.Z * v.m[2][2] + v.m[3][2]);
        } // End of 'pointtrans' function
    } // End of 'vec3' class

    function vec3(...args)
    {
        return new _vec3(...args);
    } // End of 'vec3' function

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

    class Prim {
        constructor(vertexArray, /*vertexBuffer, indexBuffer,*/ numOfElements, normalArray) {
            this.vertexArray = vertexArray;
            //this.vertexBuffer = vertexBuffer;
            //this.indexBuffer = indexBuffer;
            this.normalArray = normalArray;
            this.numOfElements = numOfElements;
        }
    }

    function createCubeFacets(size) {
        return [[vec3(-size, -size, -size), vec3(-size, size, -size), vec3(size, -size, -size), vec3(size, size, -size)],
                [vec3(size, -size, size), vec3(size, size, size), vec3(size, -size, -size), vec3(size, size, -size)],
                [vec3(-size, -size, size), vec3(-size, size, size), vec3(size, -size, size), vec3(size, size, size),],
                [vec3(-size, -size, -size), vec3(-size, size, -size), vec3(-size, -size, size), vec3(-size, size, size)],
                [vec3(size, size, size), vec3(-size, size, size), vec3(size, size, -size), vec3(-size, size, -size)],
                [vec3(-size, -size, size), vec3(-size, size, size), vec3(-size, -size, -size), vec3(size, -size, -size)],];
    }

    function createTriangleFacets(size) {
        return [[vec3(size, -size, -size), vec3(-size, size, -size), vec3(-size, -size, size)],
                [vec3(size, -size, -size), vec3(-size, size, -size), vec3(size, size, size)],
                [vec3(-size, -size, size), vec3(size, size, size), vec3(size, -size, -size)],
                [vec3(-size, -size, size), vec3(size, size, size), vec3(-size, size, -size)]];
    }

    function vec3ToArray(element) {
        return [element.x, element.y, element.z];
    }

    function createVertFromFacets(facets) {
        let cntOfPnts = facets[0].length;
        let vertArray = [];
        let normalArray = [];
        let cnt;

        for (let i of facets)
            if (cntOfPnts == 3)
            {
                cnt++;
                vertArray = vertArray.concat(vec3ToArray(i[0]));
                vertArray = vertArray.concat(vec3ToArray(i[1]));
                vertArray = vertArray.concat(vec3ToArray(i[2]));

                normalArray = normalArray.concat(vec3ToArray(i[0].sub(i[1]).cross(i[0].sub(i[2]))));
            }
            else if (cntOfPnts == 4)
            {
                cnt++;
                vertArray = vertArray.concat(vec3ToArray(i[0]));
                vertArray = vertArray.concat(vec3ToArray(i[1]));
                vertArray = vertArray.concat(vec3ToArray(i[2]));
                normalArray = normalArray.concat(vec3ToArray(i[0].sub(i[1]).cross(i[0].sub(i[2]))));

                vertArray = vertArray.concat(vec3ToArray(i[1]));
                vertArray = vertArray.concat(vec3ToArray(i[2]));
                vertArray = vertArray.concat(vec3ToArray(i[3]));
                normalArray = normalArray.concat(vec3ToArray(i[1].sub(i[2]).cross(i[1].sub(i[3]))));
            }

        return new Prim(vertArray, cnt, normalArray);
    }

    function createCube(size) {
       return createVertFromFacets(createCubeFacets(size));
    }

    function createTriangle(size) {
        return createVertFromFacets(createTriangleFacets(size));
     } 

    function bufLoad(gl, prg, prim, numOfElements) {
        // Loading to shader vertex array
        const posLoc = gl.getAttribLocation(prg, "InPosition");
        let vertexArray = gl.createVertexArray();
        gl.bindVertexArray(vertexArray);
        let vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(prim.vertexArray), gl.STATIC_DRAW);
        if (posLoc != -1) {
          gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(posLoc);
        }

        // Loading to shader normal array
        /*    
        let normalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(prim.normalArray), gl.STATIC_DRAW);
        */
    }

    class Camera {
        constructor (canvas) {
            let rect = canvas.getBoundingClientRect();
            this.frameH = rect.bottom - rect.top + 1;
            this.frameW = rect.right - rect.left + 1;
            this.projDist = 0.1;
            this.projSize = 0.1;
            this.farClip = 300;
            this.matrView = vec3().view(vec3(5), vec3(0), vec3(0, 1, 0));
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

    function camSet (canvas) {
        return new Camera(canvas);
    }

    class Shader {
        constructor(gl, ) {
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
            let vs_txt =
            `#version 300 es
        precision highp float;
        in vec3 InPosition;
            
        out vec2 DrawPos;
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
            DrawPos = InPosition.xy;
        }
        `;
            let fs_txt =
            `#version 300 es
        precision highp float;
        out vec4 OutColor;
        
        in vec2 DrawPos;
        uniform float Time;

        uniform FrameBuffer
        {
            vec4 Data;
        };
    
        void main( void )
        {
            OutColor = vec4(0.117, 0.23, 0.723, 1.0);
        }
        `;
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

    function loadShaders(gl) {
        return new Shader(gl);
    }

    class _render{
      frameData = [0, 0, 0, 0];
      frameUniformBufferIndex = 5;
      timer = new Timer;

      constructor(canvasId, figure) {
        this.canvas = document.getElementById(canvasId);
        const gl = this.canvas.getContext("webgl2");
        this.gl = gl;

        if (gl === null) {
          alert("WebGL2 not supported");
          return;
        }

        // Setting camera and matrixes
        this.cam = camSet(this.canvas);

        // Loading shader
        this.shds = loadShaders(gl);
        let prg = this.shds.prg;

        // Vertex buffer
        const size = 0.8;
        if (figure == "cube") {
          this.prim = createCube(size);
        }
        else if (figure == "triangle") {
          this.prim = createTriangle(size);
        }
        bufLoad(gl, prg, this.prim, this.prim.numOfElements);

        // Frame buffer
        this.frameBuffer = gl.createBuffer();
        gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
        gl.bufferData(gl.UNIFORM_BUFFER, 4 * 4, gl.STATIC_DRAW);

        gl.useProgram(prg);
        gl.uniformBlockBinding(prg, 
          gl.getUniformBlockIndex(prg, "FrameBuffer"), 
          this.frameUniformBufferIndex);

        // getting binding point for variable of time
        this.timeLoc = gl.getUniformLocation(prg, "Time");

        this.matrixReload();
      }

      render(figure) {
        const gl = this.gl;
        gl.clearColor(0.12, 0.85, 0.970, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.clear(gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);
        
        this.timer.response("fps");

        gl.bindBuffer(gl.UNIFORM_BUFFER, this.frameBuffer);
        gl.bufferData(gl.UNIFORM_BUFFER, new Float32Array(this.frameData), gl.STATIC_DRAW);
        gl.bindBufferBase(gl.UNIFORM_BUFFER, this.frameUniformBufferIndex, this.frameBuffer);

        if (this.timeLoc != -1) {
          const date = new Date();
          let t = date.getMinutes() * 60 + 
                  date.getSeconds() +
                  date.getMilliseconds() / 1000;

          gl.uniform1f(this.timeLoc, t);
        }
        if (figure == "cube") {
          gl.drawArrays(gl.TRIANGLES, 0, 36);
        }
        else if (figure == "triangle") {
          gl.drawArrays(gl.TRIANGLES, 0, 12);
        }
      } // End of 'render' function

      mainLoop(figure) {
        const draw = () => {
          this.render(figure);
          this.timer.response();
          window.requestAnimationFrame(draw);
        };
        draw();
      } // End of 'mainLoop' function

      matrixReload() {
        const gl = this.gl;
        let prg = this.shds.prg;

        // Matrixes
        // Matrix of view
        const ViewLoc = gl.getUniformLocation(prg, "MatrView");
        gl.uniformMatrix4fv(ViewLoc, false, new Float32Array(this.cam.matrView.toArray()));

        // Matrix of projection
        const ProjLoc = gl.getUniformLocation(prg, "MatrProj");
        gl.uniformMatrix4fv(ProjLoc, false, new Float32Array(this.cam.matrProj.toArray()));

        // Matrix of projection
        const VPLoc = gl.getUniformLocation(prg, "MatrVP");
        gl.uniformMatrix4fv(VPLoc, false, new Float32Array(this.cam.matrVP.toArray()));

        // Matrix of projection
        const WorldLoc = gl.getUniformLocation(prg, "MatrWorld");
        gl.uniformMatrix4fv(WorldLoc, false, new Float32Array(mat4().rotateY(0).toArray()));
      }
    }

    window.addEventListener("load", () => {
      const rnd1 = new _render("glcanvas1", "triangle");
      const rnd2 = new _render("glcanvas2", "cube");
      rnd1.mainLoop("triangle");
      rnd2.mainLoop("cube");
      //document.getElementById('rnd').render = rnd;
    });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbXRoL21hdDQuanMiLCIuLi9tdGgvdmVjMy5qcyIsIi4uL2FuaW0vdGltZXIuanMiLCIuLi9hbmltL3ByaW0uanMiLCIuLi9hbmltL2NhbS5qcyIsIi4uL2FuaW0vcm5kL3Jlcy9zaGFkZXJzLmpzIiwiLi4vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBfbWF0NHtcclxuICAgIGNvbnN0cnVjdG9yKEEwMCwgQTAxLCBBMDIsIEEwMyxcclxuICAgICAgICAgICAgICAgIEExMCwgQTExLCBBMTIsIEExMyxcclxuICAgICAgICAgICAgICAgIEEyMCwgQTIxLCBBMjIsIEEyMyxcclxuICAgICAgICAgICAgICAgIEEzMCwgQTMxLCBBMzIsIEEzMykge1xyXG4gICAgICAgIGxldCBtID0gW1tBMDAsIEEwMSwgQTAyLCBBMDNdLFxyXG4gICAgICAgICAgICAgICAgIFtBMTAsIEExMSwgQTEyLCBBMTNdLFxyXG4gICAgICAgICAgICAgICAgIFtBMjAsIEEyMSwgQTIyLCBBMjNdLFxyXG4gICAgICAgICAgICAgICAgIFtBMzAsIEEzMSwgQTMyLCBBMzNdXTtcclxuICAgICAgICBpZiAobVswXVswXSA9PSB1bmRlZmluZWQgfHwgbVswXVsxXSA9PSB1bmRlZmluZWQgfHwgbVswXVsyXSA9PSB1bmRlZmluZWQgfHwgbVswXVszXSA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgbVsxXVswXSA9PSB1bmRlZmluZWQgfHwgbVsxXVsxXSA9PSB1bmRlZmluZWQgfHwgbVsxXVsyXSA9PSB1bmRlZmluZWQgfHwgbVsxXVszXSA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgbVsyXVswXSA9PSB1bmRlZmluZWQgfHwgbVsyXVsxXSA9PSB1bmRlZmluZWQgfHwgbVsyXVsyXSA9PSB1bmRlZmluZWQgfHwgbVsyXVszXSA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgbVszXVswXSA9PSB1bmRlZmluZWQgfHwgbVszXVsxXSA9PSB1bmRlZmluZWQgfHwgbVszXVsyXSA9PSB1bmRlZmluZWQgfHwgbVszXVszXSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMubSA9IFtbMSwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMV1dO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5tID0gW1tBMDAsIEEwMSwgQTAyLCBBMDNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW0ExMCwgQTExLCBBMTIsIEExM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbQTIwLCBBMjEsIEEyMiwgQTIzXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtBMzAsIEEzMSwgQTMyLCBBMzNdXTtcclxuICAgIH0gLy8gRW5kIG9mICdjb25zdHJ1Y3RvcicgZnVuY3Rpb25cclxuICAgICAgICBcclxuICAgIG11bChtKSB7XHJcbiAgICAgICAgbGV0IHIgPSBtYXQ0KCk7XHJcblxyXG4gICAgICAgIHIubVswXVswXSA9IHRoaXMubVswXVswXSAqIG0ubVswXVswXSArIHRoaXMubVswXVsxXSAqIG0ubVsxXVswXSArIHRoaXMubVswXVsyXSAqIG0ubVsyXVswXSArXHJcbiAgICAgICAgICAgIHRoaXMubVswXVszXSAqIG0ubVszXVswXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMF1bMV0gPSB0aGlzLm1bMF1bMF0gKiBtLm1bMF1bMV0gKyB0aGlzLm1bMF1bMV0gKiBtLm1bMV1bMV0gKyB0aGlzLm1bMF1bMl0gKiBtLm1bMl1bMV0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMF1bM10gKiBtLm1bM11bMV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzBdWzJdID0gdGhpcy5tWzBdWzBdICogbS5tWzBdWzJdICsgdGhpcy5tWzBdWzFdICogbS5tWzFdWzJdICsgdGhpcy5tWzBdWzJdICogbS5tWzJdWzJdICtcclxuICAgICAgICAgICAgdGhpcy5tWzBdWzNdICogbS5tWzNdWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVswXVszXSA9IHRoaXMubVswXVswXSAqIG0ubVswXVszXSArIHRoaXMubVswXVsxXSAqIG0ubVsxXVszXSArIHRoaXMubVswXVsyXSAqIG0ubVsyXVszXSArXHJcbiAgICAgICAgICAgIHRoaXMubVswXVszXSAqIG0ubVszXVszXTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICByLm1bMV1bMF0gPSB0aGlzLm1bMV1bMF0gKiBtLm1bMF1bMF0gKyB0aGlzLm1bMV1bMV0gKiBtLm1bMV1bMF0gKyB0aGlzLm1bMV1bMl0gKiBtLm1bMl1bMF0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMV1bM10gKiBtLm1bM11bMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzFdWzFdID0gdGhpcy5tWzFdWzBdICogbS5tWzBdWzFdICsgdGhpcy5tWzFdWzFdICogbS5tWzFdWzFdICsgdGhpcy5tWzFdWzJdICogbS5tWzJdWzFdICtcclxuICAgICAgICAgICAgdGhpcy5tWzFdWzNdICogbS5tWzNdWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsxXVsyXSA9IHRoaXMubVsxXVswXSAqIG0ubVswXVsyXSArIHRoaXMubVsxXVsxXSAqIG0ubVsxXVsyXSArIHRoaXMubVsxXVsyXSAqIG0ubVsyXVsyXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsxXVszXSAqIG0ubVszXVsyXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMV1bM10gPSB0aGlzLm1bMV1bMF0gKiBtLm1bMF1bM10gKyB0aGlzLm1bMV1bMV0gKiBtLm1bMV1bM10gKyB0aGlzLm1bMV1bMl0gKiBtLm1bMl1bM10gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMV1bM10gKiBtLm1bM11bM107XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzJdWzBdID0gdGhpcy5tWzJdWzBdICogbS5tWzBdWzBdICsgdGhpcy5tWzJdWzFdICogbS5tWzFdWzBdICsgdGhpcy5tWzJdWzJdICogbS5tWzJdWzBdICtcclxuICAgICAgICAgICAgdGhpcy5tWzJdWzNdICogbS5tWzNdWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVsyXVsxXSA9IHRoaXMubVsyXVswXSAqIG0ubVswXVsxXSArIHRoaXMubVsyXVsxXSAqIG0ubVsxXVsxXSArIHRoaXMubVsyXVsyXSAqIG0ubVsyXVsxXSArXHJcbiAgICAgICAgICAgIHRoaXMubVsyXVszXSAqIG0ubVszXVsxXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bMl1bMl0gPSB0aGlzLm1bMl1bMF0gKiBtLm1bMF1bMl0gKyB0aGlzLm1bMl1bMV0gKiBtLm1bMV1bMl0gKyB0aGlzLm1bMl1bMl0gKiBtLm1bMl1bMl0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bMl1bM10gKiBtLm1bM11bMl07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzJdWzNdID0gdGhpcy5tWzJdWzBdICogbS5tWzBdWzNdICsgdGhpcy5tWzJdWzFdICogbS5tWzFdWzNdICsgdGhpcy5tWzJdWzJdICogbS5tWzJdWzNdICtcclxuICAgICAgICAgICAgdGhpcy5tWzJdWzNdICogbS5tWzNdWzNdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVszXVswXSA9IHRoaXMubVszXVswXSAqIG0ubVswXVswXSArIHRoaXMubVszXVsxXSAqIG0ubVsxXVswXSArIHRoaXMubVszXVsyXSAqIG0ubVsyXVswXSArXHJcbiAgICAgICAgICAgIHRoaXMubVszXVszXSAqIG0ubVszXVswXTtcclxuICAgICAgICBcclxuICAgICAgICByLm1bM11bMV0gPSB0aGlzLm1bM11bMF0gKiBtLm1bMF1bMV0gKyB0aGlzLm1bM11bMV0gKiBtLm1bMV1bMV0gKyB0aGlzLm1bM11bMl0gKiBtLm1bMl1bMV0gK1xyXG4gICAgICAgICAgICB0aGlzLm1bM11bM10gKiBtLm1bM11bMV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgci5tWzNdWzJdID0gdGhpcy5tWzNdWzBdICogbS5tWzBdWzJdICsgdGhpcy5tWzNdWzFdICogbS5tWzFdWzJdICsgdGhpcy5tWzNdWzJdICogbS5tWzJdWzJdICtcclxuICAgICAgICAgICAgdGhpcy5tWzNdWzNdICogbS5tWzNdWzJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHIubVszXVszXSA9IHRoaXMubVszXVswXSAqIG0ubVswXVszXSArIHRoaXMubVszXVsxXSAqIG0ubVsxXVszXSArIHRoaXMubVszXVsyXSAqIG0ubVsyXVszXSArXHJcbiAgICAgICAgICAgIHRoaXMubVszXVszXSAqIG0ubVszXVszXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHI7ICAgICAgICAgICAgXHJcbiAgICB9IC8vIEVuZCBvZiAnbXVsJyBmdW5jdGlvblxyXG5cclxuICAgIGRldGVybTN4MyhBMTEsIEExMiwgQTEzLFxyXG4gICAgICAgICAgICAgIEEyMSwgQTIyLCBBMjMsXHJcbiAgICAgICAgICAgICAgQTMxLCBBMzIsIEEzMyApIHtcclxuICAgICAgICByZXR1cm4gQTExICogQTIyICogQTMzICsgQTEyICogQTIzICogQTMxICsgQTEzICogQTIxICogQTMyIC1cclxuICAgICAgICAgICAgICAgQTExICogQTIzICogQTMyIC0gQTEyICogQTIxICogQTMzIC0gQTEzICogQTIyICogQTMxO1xyXG5cclxuICAgIH0gLy8gRW5kIG9mICdkZXRlcm0zeDMnIGZ1bmN0aW9uXHJcblxyXG4gICAgZGV0ZXJtKCkge1xyXG4gICAgICAgIGxldCBuID1cclxuICAgICAgICAgICAgK3RoaXMubVswXVswXSAqIHRoaXMubS5kZXRlcm0zeDModGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bMl0sIHRoaXMubVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bMl0sIHRoaXMubVszXVszXSkgK1xyXG4gICAgICAgICAgICAtdGhpcy5tWzBdWzFdICogdGhpcy5tLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSArXHJcbiAgICAgICAgICAgICt0aGlzLm1bMF1bMl0gKiB0aGlzLm0uZGV0ZXJtM3gzKHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bM10pICtcclxuICAgICAgICAgICAgLXRoaXMubVswXVszXSAqIHRoaXMubS5kZXRlcm0zeDModGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMV0sIHRoaXMubVszXVsyXSk7XHJcbiAgICAgICAgcmV0dXJuIG47XHJcbiAgICB9IC8vIEVuZCBvZiAnZGV0ZXJtJyBmdW5jdGlvblxyXG5cclxuICAgIGludmVyc2UoKSB7XHJcbiAgICAgICAgbGV0IHIgPSBtYXQ0KCk7XHJcbiAgICAgICAgbGV0IGRldCA9IHRoaXMubS5kZXRlcm0oKTtcclxuXHJcbiAgICAgICAgaWYgKGRldCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0NCgpO1xyXG5cclxuICAgICAgICAvKiBidWlsZCBhZGpvaW50IG1hdHJpeCAqL1xyXG4gICAgICAgIHIubVswXVswXSA9XHJcbiAgICAgICAgICAgICt0aGlzLm0uZGV0ZXJtM3gzKHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bMF0gPVxyXG4gICAgICAgICAgICAtdGhpcy5tLmRldGVybTN4Myh0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzJdWzBdID1cclxuICAgICAgICAgICAgK3RoaXMubS5kZXRlcm0zeDModGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMV0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVszXVswXSA9XHJcbiAgICAgICAgICAgIC10aGlzLm0uZGV0ZXJtM3gzKHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bMl0pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMF1bMV0gPVxyXG4gICAgICAgICAgICAtdGhpcy5tLmRldGVybTN4Myh0aGlzLm1bMF1bMV0sIHRoaXMubVswXVsyXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVsyXSwgdGhpcy5tWzJdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMV0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzFdWzFdID1cclxuICAgICAgICAgICAgK3RoaXMubS5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMl0sIHRoaXMubVsyXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMl0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsyXVsxXSA9XHJcbiAgICAgICAgICAgIC10aGlzLm0uZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bM11bMV0gPVxyXG4gICAgICAgICAgICArdGhpcy5tLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdKSAvIGRldDtcclxuXHJcblxyXG4gICAgICAgIHIubVswXVsyXSA9XHJcbiAgICAgICAgICAgICt0aGlzLm0uZGV0ZXJtM3gzKHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVsxXSwgdGhpcy5tWzNdWzJdLCB0aGlzLm1bM11bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMV1bMl0gPVxyXG4gICAgICAgICAgICAtdGhpcy5tLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsyXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsyXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bM11bMF0sIHRoaXMubVszXVsyXSwgdGhpcy5tWzNdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzJdWzJdID1cclxuICAgICAgICAgICAgK3RoaXMubS5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMV0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzNdWzBdLCB0aGlzLm1bM11bMV0sIHRoaXMubVszXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVszXVsyXSA9XHJcbiAgICAgICAgICAgIC10aGlzLm0uZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVszXVswXSwgdGhpcy5tWzNdWzFdLCB0aGlzLm1bM11bMl0pIC8gZGV0O1xyXG5cclxuXHJcbiAgICAgICAgci5tWzBdWzNdID1cclxuICAgICAgICAgICAgLXRoaXMubS5kZXRlcm0zeDModGhpcy5tWzBdWzFdLCB0aGlzLm1bMF1bMl0sIHRoaXMubVswXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzFdWzFdLCB0aGlzLm1bMV1bMl0sIHRoaXMubVsxXVszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzFdLCB0aGlzLm1bMl1bMl0sIHRoaXMubVsyXVszXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHIubVsxXVszXSA9XHJcbiAgICAgICAgICAgICt0aGlzLm0uZGV0ZXJtM3gzKHRoaXMubVswXVswXSwgdGhpcy5tWzBdWzJdLCB0aGlzLm1bMF1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsxXVswXSwgdGhpcy5tWzFdWzJdLCB0aGlzLm1bMV1bM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubVsyXVswXSwgdGhpcy5tWzJdWzJdLCB0aGlzLm1bMl1bM10pIC8gZGV0O1xyXG5cclxuICAgICAgICByLm1bMl1bM10gPVxyXG4gICAgICAgICAgICAtdGhpcy5tLmRldGVybTN4Myh0aGlzLm1bMF1bMF0sIHRoaXMubVswXVsxXSwgdGhpcy5tWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMV1bMF0sIHRoaXMubVsxXVsxXSwgdGhpcy5tWzFdWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1bMl1bMF0sIHRoaXMubVsyXVsxXSwgdGhpcy5tWzJdWzNdKSAvIGRldDtcclxuXHJcbiAgICAgICAgci5tWzNdWzNdID1cclxuICAgICAgICAgICAgK3RoaXMubS5kZXRlcm0zeDModGhpcy5tWzBdWzBdLCB0aGlzLm1bMF1bMV0sIHRoaXMubVswXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzFdWzBdLCB0aGlzLm1bMV1bMV0sIHRoaXMubVsxXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tWzJdWzBdLCB0aGlzLm1bMl1bMV0sIHRoaXMubVsyXVsyXSkgLyBkZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfSAvLyBFbmQgb2YgJ2ludmVyc2UnIGZ1bmN0aW9uICAgIFxyXG5cclxuICAgIHJvdGF0ZShhbmdsZSwgdikge1xyXG4gICAgICAgIGxldCBhID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwLjAsXHJcbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbihhKSxcclxuICAgICAgICAgICAgYyA9IE1hdGguY29zKGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0NChjICsgdi54ICogdi54ICogKDEgLSBjKSwgdi55ICogdi54ICogKDEgLSBjKSAtIHYueiAqIHMsIHYueiAqIHYueCAqICgxIC0gYykgKyB2LnkgKiBzLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHYueCAqIHYueSAqICgxIC0gYykgKyB2LnogKiBzLCBjICsgdi55ICogdi55ICogKDEgLSBjKSwgdi56ICogdi55ICogKDEgLSBjKSAtIHYueCAqIHMsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdi54ICogdi56ICogKDEgLSBjKSAtIHYueSAqIHMsIHYueSAqIHYueiAqICgxIC0gYykgKyB2LnggKiBzLCBjICsgdi56ICogdi56ICogKDEgLSBjKSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH0gLy8gRW5kIG9mICdyb3RhdGUnIGZ1bmN0aW9uXHJcblxyXG4gICAgcm90YXRlWChhbmdsZSkge1xyXG4gICAgICAgIGxldCBhID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwLjAsXHJcbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbihhKSxcclxuICAgICAgICAgICAgYyA9IE1hdGguY29zKGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0NCgxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIGMsIHMsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgLXMsIGMsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9IC8vIEVuZCBvZiAncm90YXRlWCcgZnVuY3Rpb25cclxuXHJcbiAgICByb3RhdGVZKGFuZ2xlKSB7XHJcbiAgICAgICAgbGV0IGEgPSBhbmdsZSAqIE1hdGguUEkgLyAxODAuMCxcclxuICAgICAgICAgICAgcyA9IE1hdGguc2luKGEpLFxyXG4gICAgICAgICAgICBjID0gTWF0aC5jb3MoYSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXQ0KGMsIDAsIC1zLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcywgMCwgYywgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH0gLy8gRW5kIG9mICdyb3RhdGVZJyBmdW5jdGlvblxyXG5cclxuICAgIHJvdGF0ZVooYW5nbGUpIHtcclxuICAgICAgICBsZXQgYSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MC4wLFxyXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4oYSksXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdDQoYywgcywgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAtcywgYywgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3JvdGF0ZVonIGZ1bmN0aW9uXHJcbiAgICBcclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCguLi50aGlzLm0pO1xyXG4gICAgfSAvLyBFbmQgb2YgJ3RvQXJyYXknIGZ1bmN0aW9uXHJcblxyXG59IC8vIEVuZCBvZiAnX21hdDQnIGNsYXNzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWF0NCguLi5hcmdzKSB7XHJcbiAgICByZXR1cm4gbmV3IF9tYXQ0KC4uLmFyZ3MpO1xyXG59IC8vIEVuZCBvZiAnbWF0NCcgZnVuY3Rpb24iLCJpbXBvcnQgeyBtYXQ0IH0gZnJvbSBcIi4vbWF0NC5qc1wiO1xyXG5cclxuY2xhc3MgX3ZlYzMge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xyXG4gICAgICAgIGlmICh4ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy54ID0gMCwgdGhpcy55ID0gMCwgdGhpcy56ID0gMDtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgaWYgKHgubGVuZ3RoID09IDMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4WzBdLCB0aGlzLnkgPSB4WzFdLCB0aGlzLnogPSB4WzJdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB4LngsIHRoaXMueSA9IHgueSwgdGhpcy56ID0geC56O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaWYgKHkgPT0gdW5kZWZpbmVkIHx8IHogPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geCwgdGhpcy56ID0geDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0geCwgdGhpcy55ID0geSwgdGhpcy56ID0gejtcclxuICAgIH0gLy8gRW5kIG9mICdjb25zdHJ1Y3RvcicgZnVuY3Rpb25cclxuXHJcbiAgICBhZGQodikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKyB2LCB0aGlzLnkgKyB2LCB0aGlzLnogKyB2KTtcclxuICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKyB2LngsIHRoaXMueSArIHYueSwgdGhpcy56ICsgdi56KTtcclxuICAgIH0gLy8gRW5kIG9mICdhZGQnIGZ1bmN0aW9uXHJcblxyXG4gICAgc3ViKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZlYzModGhpcy54IC0gdiwgdGhpcy55IC0gdiwgdGhpcy56IC0gdik7XHJcbiAgICAgICAgcmV0dXJuIHZlYzModGhpcy54IC0gdi54LCB0aGlzLnkgLSB2LnksIHRoaXMueiAtIHYueik7XHJcbiAgICB9IC8vIEVuZCBvZiAnc3ViJyBmdW5jdGlvblxyXG5cclxuICAgIG11bCh2KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAqIHYsIHRoaXMueSAqIHYsIHRoaXMueiAqIHYpO1xyXG4gICAgICAgIGVsc2UgaWYgKHYubGVuZ3RoID09IDQpe1xyXG4gICAgICAgICAgICBsZXQgdyA9IHRoaXMueCAqIHYuQTAzICsgdGhpcy55ICogdi5BMTMgKyB0aGlzLnogKiB2LkEyMyArIHYuQTMzO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZlYzMoKHRoaXMueCAqIHYubVswXVswXSArIHRoaXMueSAqIHYubVsxXVswXSArIHRoaXMueiAqIHYubVsyXVswXSArIHYubVszXVswXSkgLyB3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy54ICogdi5tWzBdWzFdICsgdGhpcy55ICogdi5tWzFdWzFdICsgdGhpcy56ICogdi5tWzJdWzFdICsgdi5tWzNdWzFdKSAvIHcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnggKiB2Lm1bMF1bMl0gKyB0aGlzLnkgKiB2Lm1bMV1bMl0gKyB0aGlzLnogKiB2Lm1bMl1bMl0gKyB2Lm1bM11bMl0pIC8gdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XHJcbiAgICB9IC8vIEVuZCBvZiAnbXVsJyBmdW5jdGlvblxyXG5cclxuICAgIGRpdihuKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuID09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAvIG4sIHRoaXMueSAvIG4sIHRoaXMueiAvIG4pO1xyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gICAgfSAvLyBFbmQgb2YgJ2RpdicgZnVuY3Rpb25cclxuXHJcbiAgICBuZWcodikge1xyXG4gICAgICAgIHJldHVybiB2ZWMzKC10aGlzLngsIC0gdGhpcy55LCAtdGhpcy56KTtcclxuICAgIH0gLy8gRW5kIG9mICduZWcnIGZ1bmN0aW9uXHJcblxyXG4gICAgbGVuKCkge1xyXG4gICAgICAgIGxldCBsZW4gPSBtdWwodGhpcywgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChsZW4gPT0gMSB8fCBsZW4gPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGxlbik7XHJcbiAgICB9IC8vIEVuZCBvZiAnbGVuJyBmdW5jdGlvblxyXG5cclxuICAgIGxlbjIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG11bCh0aGlzLCB0aGlzKTtcclxuICAgIH0gLy8gRW5kIG9mICdsZW4yJyBmdW5jdGlvblxyXG5cclxuICAgIG5vcm1hbGl6ZSgpIHtcclxuICAgICAgICBsZXQgbGVuID0gdGhpcy5tdWwodGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChsZW4gIT0gMCAmJiBsZW4gIT0gMSkge1xyXG4gICAgICAgICAgICBsZW4gPSBNYXRoLnNxcnQobGVuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZlYzModGhpcy54IC8gbGVuLCB0aGlzLnkgLyBsZW4sIHRoaXMueiAvIGxlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMpO1xyXG4gICAgfSAvLyBFbmQgb2YgJ25vcm1hbGl6ZScgZnVuY3Rpb25cclxuXHJcbiAgICB0cmFuc2Zvcm0odikge1xyXG4gICAgICAgIHJldHVybiB2ZWMzKHRoaXMueCAqIHYubVswXVswXSArIHRoaXMueSAqIHYubVsxXVswXSArIHRoaXMueiAqIHYubVsyXVswXSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKiB2Lm1bMF1bMV0gKyB0aGlzLnkgKiB2Lm1bMV1bMV0gKyB0aGlzLnogKiB2Lm1bMl1bMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICogdi5tWzBdWzJdICsgdGhpcy55ICogdi5tWzFdWzJdICsgdGhpcy56ICogdi5tWzJdWzJdKTsgXHJcbiAgICB9IC8vIEVuZCBvZiAndHJhbnNmb3JtJyBmdW5jdGlvblxyXG5cclxuICAgIGNyb3NzKHYpIHtcclxuICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnkgKiB2LnogLSB0aGlzLnogKiB2LnksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56ICogdi54IC0gdGhpcy54ICogdi56LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAqIHYueSAtIHRoaXMueSAqIHYueCk7XHJcbiAgICB9IC8vIEVuZCBvZidjcm9zcycgZnVuY3Rpb25cclxuXHJcbiAgICB0cmFuc2xhdGUodikge1xyXG4gICAgICAgIGlmICh2Lmxlbmd0aCA9PSAzKVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0NChbWzEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3YueCwgdi55LCB2LnosIDFdXSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0NChbWzEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgWzAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3YsIHYsIHYsIDFdXSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9IC8vIEVuZCBvZiAndHJhbnNsYXRlJyBmdW5jdGlvbiAgICBcclxuXHJcbiAgICBzY2FsZSh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdDQoW1t2LngsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICBbMCwgdi55LCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgWzAsIDAsIHYueiwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxXV0pOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIH0gLy8gRW5kIG9mICdzY2FsZScgZnVuY3Rpb25cclxuXHJcbiAgICB2aWV3KGxvYywgYXQsIHVwKSB7XHJcbiAgICAgICAgbGV0IGRpciA9IGF0LnN1Yihsb2MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCByaWdodCA9IGRpci5jcm9zcyh1cCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbGV0IHVwMSA9IHJpZ2h0LmNyb3NzKGRpcikubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXQ0KHJpZ2h0LngsIHVwMS54LCAtZGlyLngsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQueSwgdXAxLnksIC1kaXIueSwgMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQueiwgdXAxLnosIC1kaXIueiwgMCxcclxuICAgICAgICAgICAgICAgICAgICAtcmlnaHQubXVsKGxvYyksIC1sb2MubXVsKHVwMSksIGxvYy5tdWwoZGlyKSwgMSk7XHJcbiAgICB9IC8vIEVuZCBvZiAndmlldycgZnVuY3Rpb25cclxuICAgIFxyXG4gICAgZnJ1c3R1bShsLCByLCBiLCB0LCBuLCBmKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdDQoKDIgKiBuKSAvIChyIC0gbCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgIDAsICgyICogbikgLyAodCAtIGIpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAociArIGwpIC8gKHIgLSBsKSwgKHQgKyBiKSAvICh0IC0gYiksICgtKChmICsgbikgLyAoZiAtIG4pKSksICgtMSksXHJcbiAgICAgICAgICAgICAgICAgICAgIDAsIDAsICgtKCgyICogbiAqIGYpIC8gKGYgLSBuKSkpLCAwKTtcclxuICAgIH0gLyogRW5kIG9mICdmcnVzdHVtJyBmdW5jdGlvbiAqL1xyXG4gICAgICBcclxuICAgIG9ydGhvKGwsIHIsIGIsIHQsIG4sIGYpIHtcclxuICAgICAgICByZXR1cm4gbWF0NCgyIC8gKHIgLSBsKSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAyIC8gKHQgLSBiKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLCAwLCAoLTIpIC8gKGYgLSBuKSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAoLSgociArIGwpIC8gKHIgLSBsKSkpLCAoLSgodCArIGIpIC8gKHQgLSBiKSkpLCAoLSgoZiArIG4pIC8gKGYgLSBuKSkpLCAxKTtcclxuICAgIH0gLy8gRW5mIG9mICdvcnRobycgZnVuY3Rpb25cclxuXHJcbiAgICBwb2ludHRyYW5zKHYpIHtcclxuICAgICAgICByZXR1cm4gdmVjMyh0aGlzLnggKiB2Lm1bMF1bMF0gKyB0aGlzLnkgKiB2Lm1bMV1bMF0gKyB0aGlzLnogKiB2Lm1bMl1bMF0gKyB2Lm1bM11bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICogdi5tWzBdWzFdICsgdGhpcy55ICogdi5tWzFdWzFdICsgdGhpcy56ICogdi5tWzJdWzFdICsgdi5tWzNdWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAqIHYubVswXVsyXSArIHRoaXMueSAqIHYubVsxXVsyXSArIHRoaXMuWiAqIHYubVsyXVsyXSArIHYubVszXVsyXSk7XHJcbiAgICB9IC8vIEVuZCBvZiAncG9pbnR0cmFucycgZnVuY3Rpb25cclxufSAvLyBFbmQgb2YgJ3ZlYzMnIGNsYXNzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVjMyguLi5hcmdzKVxyXG57XHJcbiAgICByZXR1cm4gbmV3IF92ZWMzKC4uLmFyZ3MpO1xyXG59IC8vIEVuZCBvZiAndmVjMycgZnVuY3Rpb24iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFRpbWVyIGNsYXNzIG1vZHVsZVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHVzYWdlOlxyXG4vLyBIVE1MOlxyXG4vLyAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XHJcbi8vICAgIGltcG9ydCB7VGltZXJ9IGZyb20gXCIuL3RpbWVyLmpzXCJcclxuLy8gICAgbGV0IG15VGltZXIgPSBuZXcgVGltZXIoKTtcclxuLy8gICAgLiAuIC5cclxuLy8gICAgbXlUaW1lci5yZXNwb25zZSgpO1xyXG4vLyAgICBsZXQgdGltZSA9IG15VGltZXIubG9jYWxUaW1lOyAvL1xyXG4vLyAgICBpZiAobXlUaW1lci5pc1BhdXNlKVxyXG4vLyAgICAgIC4gLiAuXHJcbi8vICAgIG15VGltZXIuaXNQYXVzZSA9ICFteVRpbWVyLmlzUGF1c2U7XHJcbi8vICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcHMnKS5pbm5lckhUTUwgPSBteVRpbWVyLmdldEZQUygpO1xyXG4vLyAgICAgIG9yIG15VGltZXIucmVzcG9uc2UoJ2ZwcycpOyAtLSB1cGRhdGUgRlBTIGF1dG9tYXRpY2FsbHlcclxuLy8gIDwvc2NycHQ+XHJcbiBcclxuLy8gVGltZXIgY2xhc3MgY29uc3RydWN0b3IgZnVuY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKCkge1xyXG4gIC8vIFRpbWVyIG9idGFpbiBjdXJyZW50IHRpbWUgaW4gc2Vjb25kcyBtZXRob2RcclxuICBjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgdCA9XHJcbiAgICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAwLjAgK1xyXG4gICAgICBkYXRlLmdldFNlY29uZHMoKSArXHJcbiAgICAgIGRhdGUuZ2V0TWludXRlcygpICogNjA7XHJcbiAgICByZXR1cm4gdDtcclxuICB9O1xyXG4gXHJcbiAgLy8gVGltZXIgcmVzcG9uc2UgbWV0aG9kXHJcbiAgdGhpcy5yZXNwb25zZSA9ICh0YWdfaWQgPSBudWxsKSA9PiB7XHJcbiAgICBsZXQgdCA9IGdldFRpbWUoKTtcclxuICAgIC8vIEdsb2JhbCB0aW1lXHJcbiAgICB0aGlzLmdsb2JhbFRpbWUgPSB0O1xyXG4gICAgdGhpcy5nbG9iYWxEZWx0YVRpbWUgPSB0IC0gdGhpcy5vbGRUaW1lO1xyXG4gICAgLy8gVGltZSB3aXRoIHBhdXNlXHJcbiAgICBpZiAodGhpcy5pc1BhdXNlKSB7XHJcbiAgICAgIHRoaXMubG9jYWxEZWx0YVRpbWUgPSAwO1xyXG4gICAgICB0aGlzLnBhdXNlVGltZSArPSB0IC0gdGhpcy5vbGRUaW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2NhbERlbHRhVGltZSA9IHRoaXMuZ2xvYmFsRGVsdGFUaW1lO1xyXG4gICAgICB0aGlzLmxvY2FsVGltZSA9IHQgLSB0aGlzLnBhdXNlVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfVxyXG4gICAgLy8gRlBTXHJcbiAgICB0aGlzLmZyYW1lQ291bnRlcisrO1xyXG4gICAgaWYgKHQgLSB0aGlzLm9sZFRpbWVGUFMgPiAzKSB7XHJcbiAgICAgIHRoaXMuRlBTID0gdGhpcy5mcmFtZUNvdW50ZXIgLyAodCAtIHRoaXMub2xkVGltZUZQUyk7XHJcbiAgICAgIHRoaXMub2xkVGltZUZQUyA9IHQ7XHJcbiAgICAgIHRoaXMuZnJhbWVDb3VudGVyID0gMDtcclxuICAgICAgaWYgKHRhZ19pZCAhPSBudWxsKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCkuaW5uZXJIVE1MID0gdGhpcy5nZXRGUFMoKTtcclxuICAgIH1cclxuICAgIHRoaXMub2xkVGltZSA9IHQ7XHJcbiAgfTtcclxuIFxyXG4gIC8vIE9idGFpbiBGUFMgYXMgc3RyaW5nIG1ldGhvZFxyXG4gIHRoaXMuZ2V0RlBTID0gKCkgPT4gdGhpcy5GUFMudG9GaXhlZCgzKTtcclxuIFxyXG4gIC8vIEZpbGwgdGltZXIgZ2xvYmFsIGRhdGFcclxuICB0aGlzLmdsb2JhbFRpbWUgPSB0aGlzLmxvY2FsVGltZSA9IGdldFRpbWUoKTtcclxuICB0aGlzLmdsb2JhbERlbHRhVGltZSA9IHRoaXMubG9jYWxEZWx0YVRpbWUgPSAwO1xyXG4gXHJcbiAgLy8gRmlsbCB0aW1lciBzZW1pIGdsb2JhbCBkYXRhXHJcbiAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm9sZFRpbWUgPSB0aGlzLm9sZFRpbWVGUFMgPSB0aGlzLmdsb2JhbFRpbWU7XHJcbiAgdGhpcy5mcmFtZUNvdW50ZXIgPSAwO1xyXG4gIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gIHRoaXMuRlBTID0gMzAuMDtcclxuICB0aGlzLnBhdXNlVGltZSA9IDA7XHJcbiBcclxuICByZXR1cm4gdGhpcztcclxufSAvLyBFbmQgb2YgJ1RpbWVyJyBmdW5jdGlvblxyXG4iLCJpbXBvcnQgeyB2ZWMzLCBtYXQ0IH0gZnJvbSBcIi4uL210aC9tYXRoLmpzXCI7XHJcblxyXG5jbGFzcyBQcmltIHtcclxuICAgIGNvbnN0cnVjdG9yKHZlcnRleEFycmF5LCAvKnZlcnRleEJ1ZmZlciwgaW5kZXhCdWZmZXIsKi8gbnVtT2ZFbGVtZW50cywgbm9ybWFsQXJyYXkpIHtcclxuICAgICAgICB0aGlzLnZlcnRleEFycmF5ID0gdmVydGV4QXJyYXk7XHJcbiAgICAgICAgLy90aGlzLnZlcnRleEJ1ZmZlciA9IHZlcnRleEJ1ZmZlcjtcclxuICAgICAgICAvL3RoaXMuaW5kZXhCdWZmZXIgPSBpbmRleEJ1ZmZlcjtcclxuICAgICAgICB0aGlzLm5vcm1hbEFycmF5ID0gbm9ybWFsQXJyYXk7XHJcbiAgICAgICAgdGhpcy5udW1PZkVsZW1lbnRzID0gbnVtT2ZFbGVtZW50cztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3ViZUZhY2V0cyhzaXplKSB7XHJcbiAgICByZXR1cm4gW1t2ZWMzKC1zaXplLCAtc2l6ZSwgLXNpemUpLCB2ZWMzKC1zaXplLCBzaXplLCAtc2l6ZSksIHZlYzMoc2l6ZSwgLXNpemUsIC1zaXplKSwgdmVjMyhzaXplLCBzaXplLCAtc2l6ZSldLFxyXG4gICAgICAgICAgICBbdmVjMyhzaXplLCAtc2l6ZSwgc2l6ZSksIHZlYzMoc2l6ZSwgc2l6ZSwgc2l6ZSksIHZlYzMoc2l6ZSwgLXNpemUsIC1zaXplKSwgdmVjMyhzaXplLCBzaXplLCAtc2l6ZSldLFxyXG4gICAgICAgICAgICBbdmVjMygtc2l6ZSwgLXNpemUsIHNpemUpLCB2ZWMzKC1zaXplLCBzaXplLCBzaXplKSwgdmVjMyhzaXplLCAtc2l6ZSwgc2l6ZSksIHZlYzMoc2l6ZSwgc2l6ZSwgc2l6ZSksXSxcclxuICAgICAgICAgICAgW3ZlYzMoLXNpemUsIC1zaXplLCAtc2l6ZSksIHZlYzMoLXNpemUsIHNpemUsIC1zaXplKSwgdmVjMygtc2l6ZSwgLXNpemUsIHNpemUpLCB2ZWMzKC1zaXplLCBzaXplLCBzaXplKV0sXHJcbiAgICAgICAgICAgIFt2ZWMzKHNpemUsIHNpemUsIHNpemUpLCB2ZWMzKC1zaXplLCBzaXplLCBzaXplKSwgdmVjMyhzaXplLCBzaXplLCAtc2l6ZSksIHZlYzMoLXNpemUsIHNpemUsIC1zaXplKV0sXHJcbiAgICAgICAgICAgIFt2ZWMzKC1zaXplLCAtc2l6ZSwgc2l6ZSksIHZlYzMoLXNpemUsIHNpemUsIHNpemUpLCB2ZWMzKC1zaXplLCAtc2l6ZSwgLXNpemUpLCB2ZWMzKHNpemUsIC1zaXplLCAtc2l6ZSldLF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRyaWFuZ2xlRmFjZXRzKHNpemUpIHtcclxuICAgIHJldHVybiBbW3ZlYzMoc2l6ZSwgLXNpemUsIC1zaXplKSwgdmVjMygtc2l6ZSwgc2l6ZSwgLXNpemUpLCB2ZWMzKC1zaXplLCAtc2l6ZSwgc2l6ZSldLFxyXG4gICAgICAgICAgICBbdmVjMyhzaXplLCAtc2l6ZSwgLXNpemUpLCB2ZWMzKC1zaXplLCBzaXplLCAtc2l6ZSksIHZlYzMoc2l6ZSwgc2l6ZSwgc2l6ZSldLFxyXG4gICAgICAgICAgICBbdmVjMygtc2l6ZSwgLXNpemUsIHNpemUpLCB2ZWMzKHNpemUsIHNpemUsIHNpemUpLCB2ZWMzKHNpemUsIC1zaXplLCAtc2l6ZSldLFxyXG4gICAgICAgICAgICBbdmVjMygtc2l6ZSwgLXNpemUsIHNpemUpLCB2ZWMzKHNpemUsIHNpemUsIHNpemUpLCB2ZWMzKC1zaXplLCBzaXplLCAtc2l6ZSldXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmVjM1RvQXJyYXkoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIFtlbGVtZW50LngsIGVsZW1lbnQueSwgZWxlbWVudC56XTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVmVydEZyb21GYWNldHMoZmFjZXRzKSB7XHJcbiAgICBsZXQgY250T2ZQbnRzID0gZmFjZXRzWzBdLmxlbmd0aDtcclxuICAgIGxldCB2ZXJ0QXJyYXkgPSBbXTtcclxuICAgIGxldCBub3JtYWxBcnJheSA9IFtdO1xyXG4gICAgbGV0IGNudDtcclxuXHJcbiAgICBmb3IgKGxldCBpIG9mIGZhY2V0cylcclxuICAgICAgICBpZiAoY250T2ZQbnRzID09IDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgdmVydEFycmF5ID0gdmVydEFycmF5LmNvbmNhdCh2ZWMzVG9BcnJheShpWzBdKSk7XHJcbiAgICAgICAgICAgIHZlcnRBcnJheSA9IHZlcnRBcnJheS5jb25jYXQodmVjM1RvQXJyYXkoaVsxXSkpO1xyXG4gICAgICAgICAgICB2ZXJ0QXJyYXkgPSB2ZXJ0QXJyYXkuY29uY2F0KHZlYzNUb0FycmF5KGlbMl0pKTtcclxuXHJcbiAgICAgICAgICAgIG5vcm1hbEFycmF5ID0gbm9ybWFsQXJyYXkuY29uY2F0KHZlYzNUb0FycmF5KGlbMF0uc3ViKGlbMV0pLmNyb3NzKGlbMF0uc3ViKGlbMl0pKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjbnRPZlBudHMgPT0gNClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgICB2ZXJ0QXJyYXkgPSB2ZXJ0QXJyYXkuY29uY2F0KHZlYzNUb0FycmF5KGlbMF0pKTtcclxuICAgICAgICAgICAgdmVydEFycmF5ID0gdmVydEFycmF5LmNvbmNhdCh2ZWMzVG9BcnJheShpWzFdKSk7XHJcbiAgICAgICAgICAgIHZlcnRBcnJheSA9IHZlcnRBcnJheS5jb25jYXQodmVjM1RvQXJyYXkoaVsyXSkpO1xyXG4gICAgICAgICAgICBub3JtYWxBcnJheSA9IG5vcm1hbEFycmF5LmNvbmNhdCh2ZWMzVG9BcnJheShpWzBdLnN1YihpWzFdKS5jcm9zcyhpWzBdLnN1YihpWzJdKSkpKTtcclxuXHJcbiAgICAgICAgICAgIHZlcnRBcnJheSA9IHZlcnRBcnJheS5jb25jYXQodmVjM1RvQXJyYXkoaVsxXSkpO1xyXG4gICAgICAgICAgICB2ZXJ0QXJyYXkgPSB2ZXJ0QXJyYXkuY29uY2F0KHZlYzNUb0FycmF5KGlbMl0pKTtcclxuICAgICAgICAgICAgdmVydEFycmF5ID0gdmVydEFycmF5LmNvbmNhdCh2ZWMzVG9BcnJheShpWzNdKSk7XHJcbiAgICAgICAgICAgIG5vcm1hbEFycmF5ID0gbm9ybWFsQXJyYXkuY29uY2F0KHZlYzNUb0FycmF5KGlbMV0uc3ViKGlbMl0pLmNyb3NzKGlbMV0uc3ViKGlbM10pKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByaW0odmVydEFycmF5LCBjbnQsIG5vcm1hbEFycmF5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1YmUoc2l6ZSkge1xyXG4gICByZXR1cm4gY3JlYXRlVmVydEZyb21GYWNldHMoY3JlYXRlQ3ViZUZhY2V0cyhzaXplKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmlhbmdsZShzaXplKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlVmVydEZyb21GYWNldHMoY3JlYXRlVHJpYW5nbGVGYWNldHMoc2l6ZSkpO1xyXG4gfSBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWZMb2FkKGdsLCBwcmcsIHByaW0sIG51bU9mRWxlbWVudHMpIHtcclxuICAgIC8vIExvYWRpbmcgdG8gc2hhZGVyIHZlcnRleCBhcnJheVxyXG4gICAgY29uc3QgcG9zTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJnLCBcIkluUG9zaXRpb25cIik7XHJcbiAgICBsZXQgdmVydGV4QXJyYXkgPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xyXG4gICAgZ2wuYmluZFZlcnRleEFycmF5KHZlcnRleEFycmF5KTtcclxuICAgIGxldCB2ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocHJpbS52ZXJ0ZXhBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgIGlmIChwb3NMb2MgIT0gLTEpIHtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihwb3NMb2MsIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc0xvYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZGluZyB0byBzaGFkZXIgbm9ybWFsIGFycmF5XHJcbiAgICAvKiAgICBcclxuICAgIGxldCBub3JtYWxCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBub3JtYWxCdWZmZXIpO1xyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocHJpbS5ub3JtYWxBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgICovXHJcbn0iLCJpbXBvcnQgeyB2ZWMzLCBtYXQ0IH0gZnJvbSBcIi4uL210aC9tYXRoLmpzXCI7XHJcblxyXG5jbGFzcyBDYW1lcmEge1xyXG4gICAgY29uc3RydWN0b3IgKGNhbnZhcykge1xyXG4gICAgICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHRoaXMuZnJhbWVIID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcCArIDE7XHJcbiAgICAgICAgdGhpcy5mcmFtZVcgPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0ICsgMTtcclxuICAgICAgICB0aGlzLnByb2pEaXN0ID0gMC4xO1xyXG4gICAgICAgIHRoaXMucHJvalNpemUgPSAwLjE7XHJcbiAgICAgICAgdGhpcy5mYXJDbGlwID0gMzAwO1xyXG4gICAgICAgIHRoaXMubWF0clZpZXcgPSB2ZWMzKCkudmlldyh2ZWMzKDUpLCB2ZWMzKDApLCB2ZWMzKDAsIDEsIDApKTtcclxuICAgICAgICB0aGlzLnByb2pTZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qU2V0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJ4ID0gdGhpcy5yeSA9IHRoaXMucHJvalNpemU7XHJcblxyXG4gICAgICAgIC8qIENvcnJlY3QgYXNwZWN0IHJhdGlvICovXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVXID49IHRoaXMuZnJhbWVIKVxyXG4gICAgICAgIHRoaXMucnggKj0gdGhpcy5mcmFtZVcgLyB0aGlzLmZyYW1lSDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5yeSAqPSB0aGlzLmZyYW1lSCAvIHRoaXMuZnJhbWVXO1xyXG5cclxuICAgICAgICB0aGlzLm1hdHJQcm9qID1cclxuICAgICAgICB2ZWMzKCkuZnJ1c3R1bSgtdGhpcy5yeCAvIDIsIHRoaXMucnggLyAyLCAtdGhpcy5yeSAvIDIsIHRoaXMucnkgLyAyLFxyXG4gICAgICAgICAgICB0aGlzLnByb2pEaXN0LCB0aGlzLmZhckNsaXApO1xyXG4gICAgICAgIHRoaXMubWF0clZQID0gdGhpcy5tYXRyVmlldy5tdWwodGhpcy5tYXRyUHJvaik7XHJcbiAgICB9IC8vIEVuZCBvZiAncHJvanNldCcgZnVuY3Rpb25cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbVNldCAoY2FudmFzKSB7XHJcbiAgICByZXR1cm4gbmV3IENhbWVyYShjYW52YXMpO1xyXG59IiwiY2xhc3MgU2hhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGdsLCApIHtcclxuICAgICAgICAvLyBMb2FkIGFuZCBjb21waWxlIHNoYWRlciBmdW5jdGlvblxyXG4gICAgICAgIGNvbnN0IGxvYWRTaGFkZXIgPSAoc2hhZGVyVHlwZSwgc2hhZGVyU291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKTtcclxuICAgICAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcclxuICAgICAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICBsZXQgYnVmID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hhZGVyIGNvbXBpbGUgZmFpbDogJyArIGJ1Zik7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICAgICAgIH0gLy8gRW5kIG9mICdsb2FkU2hhZGVyJyBmdW5jdGlvblxyXG4gICAgXHJcbiAgICAgICAgLy8gU2hhZGVyIGNyZWF0aW9uXHJcbiAgICAgICAgbGV0IHZzX3R4dCA9XHJcbiAgICAgICAgYCN2ZXJzaW9uIDMwMCBlc1xyXG4gICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuICAgICAgICBpbiB2ZWMzIEluUG9zaXRpb247XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIG91dCB2ZWMyIERyYXdQb3M7XHJcbiAgICAgICAgdW5pZm9ybSBmbG9hdCBUaW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHVuaWZvcm0gbWF0NCBNYXRyVmlldztcclxuICAgICAgICB1bmlmb3JtIG1hdDQgTWF0clZQO1xyXG4gICAgICAgIHVuaWZvcm0gbWF0NCBNYXRyV29ybGQ7XHJcbiAgICBcclxuICAgICAgICB1bmlmb3JtIEZyYW1lQnVmZmVyXHJcbiAgICAgICAgeyAgXHJcbiAgICAgICAgICAgIHZlYzQgRGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgdm9pZCBtYWluKCB2b2lkIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gTWF0clZQICogTWF0cldvcmxkICogdmVjNChJblBvc2l0aW9uLCAxLjApO1xyXG4gICAgICAgICAgICBEcmF3UG9zID0gSW5Qb3NpdGlvbi54eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsZXQgZnNfdHh0ID1cclxuICAgICAgICBgI3ZlcnNpb24gMzAwIGVzXHJcbiAgICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG4gICAgICAgIG91dCB2ZWM0IE91dENvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGluIHZlYzIgRHJhd1BvcztcclxuICAgICAgICB1bmlmb3JtIGZsb2F0IFRpbWU7XHJcblxyXG4gICAgICAgIHVuaWZvcm0gRnJhbWVCdWZmZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZlYzQgRGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgdm9pZCBtYWluKCB2b2lkIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE91dENvbG9yID0gdmVjNCgwLjExNywgMC4yMywgMC43MjMsIDEuMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdGhpcy52cyA9IGxvYWRTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUiwgdnNfdHh0KSxcclxuICAgICAgICB0aGlzLmZzID0gbG9hZFNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIsIGZzX3R4dCksXHJcbiAgICAgICAgdGhpcy5wcmcgPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJnLCB0aGlzLnZzKTtcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcmcsIHRoaXMuZnMpO1xyXG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMucHJnKTtcclxuICAgICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIodGhpcy5wcmcsIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICAgICBsZXQgYnVmID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5wcmcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hhZGVyIHByb2dyYW0gbGluayBmYWlsOiAnICsgYnVmKTtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTaGFkZXJzKGdsKSB7XHJcbiAgICByZXR1cm4gbmV3IFNoYWRlcihnbCk7XHJcbn0iLCJpbXBvcnQgeyB2ZWMzLCBtYXQ0IH0gZnJvbSBcIi4vbXRoL21hdGguanNcIjtcclxuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi9hbmltL3RpbWVyLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUN1YmUsIGNyZWF0ZVRyaWFuZ2xlLCBidWZMb2FkIH0gZnJvbSBcIi4vYW5pbS9wcmltLmpzXCI7XHJcbmltcG9ydCB7IGNhbVNldCB9IGZyb20gXCIuL2FuaW0vY2FtLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRTaGFkZXJzIH0gZnJvbSBcIi4vYW5pbS9ybmQvcmVzL3NoYWRlcnMuanNcIjtcclxuXHJcbmNsYXNzIF9yZW5kZXJ7XHJcbiAgZnJhbWVEYXRhID0gWzAsIDAsIDAsIDBdO1xyXG4gIGZyYW1lVW5pZm9ybUJ1ZmZlckluZGV4ID0gNTtcclxuICB0aW1lciA9IG5ldyBUaW1lcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzSWQsIGZpZ3VyZSkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIik7XHJcbiAgICB0aGlzLmdsID0gZ2w7XHJcblxyXG4gICAgaWYgKGdsID09PSBudWxsKSB7XHJcbiAgICAgIGFsZXJ0KFwiV2ViR0wyIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0aW5nIGNhbWVyYSBhbmQgbWF0cml4ZXNcclxuICAgIHRoaXMuY2FtID0gY2FtU2V0KHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAvLyBMb2FkaW5nIHNoYWRlclxyXG4gICAgdGhpcy5zaGRzID0gbG9hZFNoYWRlcnMoZ2wpO1xyXG4gICAgbGV0IHByZyA9IHRoaXMuc2hkcy5wcmc7XHJcblxyXG4gICAgLy8gVmVydGV4IGJ1ZmZlclxyXG4gICAgY29uc3Qgc2l6ZSA9IDAuODtcclxuICAgIGlmIChmaWd1cmUgPT0gXCJjdWJlXCIpIHtcclxuICAgICAgdGhpcy5wcmltID0gY3JlYXRlQ3ViZShzaXplKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZpZ3VyZSA9PSBcInRyaWFuZ2xlXCIpIHtcclxuICAgICAgdGhpcy5wcmltID0gY3JlYXRlVHJpYW5nbGUoc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBidWZMb2FkKGdsLCBwcmcsIHRoaXMucHJpbSwgdGhpcy5wcmltLm51bU9mRWxlbWVudHMpO1xyXG5cclxuICAgIC8vIEZyYW1lIGJ1ZmZlclxyXG4gICAgdGhpcy5mcmFtZUJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5VTklGT1JNX0JVRkZFUiwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLlVOSUZPUk1fQlVGRkVSLCA0ICogNCwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgIGdsLnVzZVByb2dyYW0ocHJnKTtcclxuICAgIGdsLnVuaWZvcm1CbG9ja0JpbmRpbmcocHJnLCBcclxuICAgICAgZ2wuZ2V0VW5pZm9ybUJsb2NrSW5kZXgocHJnLCBcIkZyYW1lQnVmZmVyXCIpLCBcclxuICAgICAgdGhpcy5mcmFtZVVuaWZvcm1CdWZmZXJJbmRleCk7XHJcblxyXG4gICAgLy8gZ2V0dGluZyBiaW5kaW5nIHBvaW50IGZvciB2YXJpYWJsZSBvZiB0aW1lXHJcbiAgICB0aGlzLnRpbWVMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIlRpbWVcIik7XHJcblxyXG4gICAgdGhpcy5tYXRyaXhSZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihmaWd1cmUpIHtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcclxuICAgIGdsLmNsZWFyQ29sb3IoMC4xMiwgMC44NSwgMC45NzAsIDEpO1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcbiAgICBnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuICAgIFxyXG4gICAgdGhpcy50aW1lci5yZXNwb25zZShcImZwc1wiKTtcclxuXHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLlVOSUZPUk1fQlVGRkVSLCB0aGlzLmZyYW1lQnVmZmVyKTtcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuVU5JRk9STV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5mcmFtZURhdGEpLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICBnbC5iaW5kQnVmZmVyQmFzZShnbC5VTklGT1JNX0JVRkZFUiwgdGhpcy5mcmFtZVVuaWZvcm1CdWZmZXJJbmRleCwgdGhpcy5mcmFtZUJ1ZmZlcik7XHJcblxyXG4gICAgaWYgKHRoaXMudGltZUxvYyAhPSAtMSkge1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgbGV0IHQgPSBkYXRlLmdldE1pbnV0ZXMoKSAqIDYwICsgXHJcbiAgICAgICAgICAgICAgZGF0ZS5nZXRTZWNvbmRzKCkgK1xyXG4gICAgICAgICAgICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAwO1xyXG5cclxuICAgICAgZ2wudW5pZm9ybTFmKHRoaXMudGltZUxvYywgdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlndXJlID09IFwiY3ViZVwiKSB7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCAzNik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmaWd1cmUgPT0gXCJ0cmlhbmdsZVwiKSB7XHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCAxMik7XHJcbiAgICB9XHJcbiAgfSAvLyBFbmQgb2YgJ3JlbmRlcicgZnVuY3Rpb25cclxuXHJcbiAgbWFpbkxvb3AoZmlndXJlKSB7XHJcbiAgICBjb25zdCBkcmF3ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcihmaWd1cmUpO1xyXG4gICAgICB0aGlzLnRpbWVyLnJlc3BvbnNlKCk7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgICB9O1xyXG4gICAgZHJhdygpO1xyXG4gIH0gLy8gRW5kIG9mICdtYWluTG9vcCcgZnVuY3Rpb25cclxuXHJcbiAgbWF0cml4UmVsb2FkKCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xyXG4gICAgbGV0IHByZyA9IHRoaXMuc2hkcy5wcmc7XHJcblxyXG4gICAgLy8gTWF0cml4ZXNcclxuICAgIC8vIE1hdHJpeCBvZiB2aWV3XHJcbiAgICBjb25zdCBWaWV3TG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByZywgXCJNYXRyVmlld1wiKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoVmlld0xvYywgZmFsc2UsIG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jYW0ubWF0clZpZXcudG9BcnJheSgpKSk7XHJcblxyXG4gICAgLy8gTWF0cml4IG9mIHByb2plY3Rpb25cclxuICAgIGNvbnN0IFByb2pMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIk1hdHJQcm9qXCIpO1xyXG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihQcm9qTG9jLCBmYWxzZSwgbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNhbS5tYXRyUHJvai50b0FycmF5KCkpKTtcclxuXHJcbiAgICAvLyBNYXRyaXggb2YgcHJvamVjdGlvblxyXG4gICAgY29uc3QgVlBMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIk1hdHJWUFwiKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoVlBMb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY2FtLm1hdHJWUC50b0FycmF5KCkpKTtcclxuXHJcbiAgICAvLyBNYXRyaXggb2YgcHJvamVjdGlvblxyXG4gICAgY29uc3QgV29ybGRMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJnLCBcIk1hdHJXb3JsZFwiKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoV29ybGRMb2MsIGZhbHNlLCBuZXcgRmxvYXQzMkFycmF5KG1hdDQoKS5yb3RhdGVZKDApLnRvQXJyYXkoKSkpO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICBjb25zdCBybmQxID0gbmV3IF9yZW5kZXIoXCJnbGNhbnZhczFcIiwgXCJ0cmlhbmdsZVwiKTtcclxuICBjb25zdCBybmQyID0gbmV3IF9yZW5kZXIoXCJnbGNhbnZhczJcIiwgXCJjdWJlXCIpO1xyXG4gIHJuZDEubWFpbkxvb3AoXCJ0cmlhbmdsZVwiKTtcclxuICBybmQyLm1haW5Mb29wKFwiY3ViZVwiKTtcclxuICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdybmQnKS5yZW5kZXIgPSBybmQ7XHJcbn0pOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQSxNQUFNLEtBQUs7SUFDWCxJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ2xDLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ2xDLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ2xDLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFDcEMsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3JDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNyQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDckMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVM7SUFDeEcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztJQUN4RyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTO0lBQ3hHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVM7SUFDeEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDO0lBQ0EsWUFBWSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDMUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMxQyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLEtBQUs7SUFDTDtJQUNBLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNYLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDdkI7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQztJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckM7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JDO0lBQ0EsUUFBUSxPQUFPLENBQUMsQ0FBQztJQUNqQixLQUFLO0FBQ0w7SUFDQSxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDM0IsY0FBYyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDM0IsY0FBYyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRztJQUM5QixRQUFRLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0lBQ2xFLGVBQWUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbkU7SUFDQSxLQUFLO0FBQ0w7SUFDQSxJQUFJLE1BQU0sR0FBRztJQUNiLFFBQVEsSUFBSSxDQUFDO0lBQ2IsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRiw2Q0FBNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLDZDQUE2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsNkNBQTZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkYsUUFBUSxPQUFPLENBQUMsQ0FBQztJQUNqQixLQUFLO0FBQ0w7SUFDQSxJQUFJLE9BQU8sR0FBRztJQUNkLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDdkIsUUFBUSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xDO0lBQ0EsUUFBUSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLFlBQVksT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUMxQjtJQUNBO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0lBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlFO0FBQ0E7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7SUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsOEJBQThCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUU7QUFDQTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSw4QkFBOEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUM5RTtJQUNBLFFBQVEsT0FBTyxDQUFDLENBQUM7SUFDakIsS0FBSztBQUNMO0lBQ0EsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtJQUNyQixRQUFRLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUs7SUFDdkMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QjtJQUNBLFFBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMs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QUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVELFFBQVEsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxLQUFLO0FBQ0w7SUFDQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWCxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksUUFBUTtJQUNoQyxZQUFZLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsYUFBYSxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQy9CLFlBQVksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUM3RTtJQUNBLFlBQVksT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RHLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEcsU0FBUztJQUNULFFBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxLQUFLO0FBQ0w7SUFDQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7SUFDWCxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksUUFBUTtJQUNoQyxZQUFZLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsUUFBUSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLEtBQUs7QUFDTDtJQUNBLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNYLFFBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxLQUFLO0FBQ0w7SUFDQSxJQUFJLEdBQUcsR0FBRztJQUNWLFFBQVEsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsQztJQUNBLFFBQVEsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLFlBQVksT0FBTyxHQUFHLENBQUM7SUFDdkIsUUFBUSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsS0FBSztBQUNMO0lBQ0EsSUFBSSxJQUFJLEdBQUc7SUFDWCxRQUFRLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixLQUFLO0FBQ0w7SUFDQSxJQUFJLFNBQVMsR0FBRztJQUNoQixRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakM7SUFDQSxRQUFRLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO0lBQ2xDLFlBQVksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsWUFBWSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLFNBQVM7SUFDVCxRQUFRLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLEtBQUs7QUFDTDtJQUNBLElBQUksU0FBUyxDQUFDLENBQUMsRUFBRTtJQUNqQixRQUFRLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRixvQkFBb0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLEtBQUs7QUFDTDtJQUNBLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRTtJQUNiLFFBQVEsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFD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LG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsS0FBSztJQUNMO0lBQ0EsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDOUIsUUFBUSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDL0MscUJBQXFCLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEYscUJBQXFCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFELEtBQUs7SUFDTDtJQUNBLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQzVCLFFBQVEsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDeEMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3hDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0MscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9GLEtBQUs7QUFDTDtJQUNBLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRTtJQUNsQixRQUFRLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVGLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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SUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BILFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hILFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO0lBQ2pILFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEgsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEgsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkgsQ0FBQztBQUNEO0lBQ0EsU0FBUyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7SUFDcEMsSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztBQUNEO0lBQ0EsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFO0lBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNEO0lBQ0EsU0FBUyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7SUFDdEMsSUFBSSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQUksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLElBQUksSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLElBQUksSUFBSSxHQUFHLENBQUM7QUFDWjtJQUNBLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNO0lBQ3hCLFFBQVEsSUFBSSxTQUFTLElBQUksQ0FBQztJQUMxQixRQUFRO0lBQ1IsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUNsQixZQUFZLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELFlBQVksU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsWUFBWSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RDtJQUNBLFlBQVksV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsU0FBUztJQUNULGFBQWEsSUFBSSxTQUFTLElBQUksQ0FBQztJQUMvQixRQUFRO0lBQ1IsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUNsQixZQUFZLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELFlBQVksU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsWUFBWSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxZQUFZLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hHO0lBQ0EsWUFBWSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxZQUFZLFNBQVMs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
