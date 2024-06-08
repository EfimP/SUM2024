import { mat4 } from "./mat4.js";

class _vec3{
    constructor(x, y, z) {
        if (x == undefined)
            rhis.x = 0, this.y = 0, this.z = 0;
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
        let len = mul(this, this);

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
        let dir = dir.sub(at, loc).normalize();
        let right = right.cross(dir, up).normalize();
        let up1 = up.cross(right, dir).normalize();

        let m = [[right.X, up1.X, -dir.X, 0],
                 [right.Y, up1.Y, -dir.Y, 0], 
                 [right.Z, up1.Z, -dir.Z, 0],
                 [-right.mul(loc, right), -right.mul(loc, up), right.mul(loc, dir), 1]];
        
        return m; 
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

export function vec3(...args)
{
    return new _vec3(...args);
} // End of 'vec3' function