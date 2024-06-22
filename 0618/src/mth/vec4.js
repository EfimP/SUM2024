import { vec3 } from './vec3';

class _vec4 {
    constructor(x, y, z, w) {
        if (x == undefined)
            this.x = 0, this.y = 0, this.z = 0, this.w = 0;
        else if (typeof x == 'object')
            if (x.length == 4)
                this.x = x[0], this.y = x[1], this.z = x[2], this.w = x[3];
            else
                this.x = x.x, this.y = x.y, this.z = x.z, this.w = x.w;
        else
            if (y == undefined || z == undefined || w == undefined)
                this.x = x, this.y = x, this.z = x, this.w = x;
            else
                this.x = x, this.y = y, this.z = z, this.w = w;
    } // End of 'constructor' function

    add(v) {
        if (typeof v == "number")
            return vec4(this.x + v, this.y + v, this.z + v, this.w + v);
        return vec4(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w);
    } // End of 'add' function

    sub(v) {
        if (typeof v == "number")
            return vec4(this.x - v, this.y - v, this.z - v, this.w - v);
        return vec4(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
    } // End of 'sub' function

    mul(v) {
        if (typeof v == "number")
            return vec4(this.x * v, this.y * v, this.z * v, this.w * v);
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    } // End of 'mul' function

    div(n) {
        if (typeof n == "number")
            return vec4(this.x / n, this.y / n, this.z / n, this.w / n);
        return vec4(this.x, this.y, this.z, this.w);
    } // End of 'div' function

    neg(v) {
        return vec4(-this.x, - this.y, -this.z, -this.w);
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
            return vec4(this.x / len, this.y / len, this.z / len, this.w / len);
        }
        return this;
    } // End of 'normalize' function

    setVec3(v, n) {
      return vec4(v.x, v.y, v.z, n);
    }
} // End of 'vec4' class

export function vec4(...args) {
    return new _vec4(...args);
} // End of 'vec4' function