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
        return this.x * v.x + this.y * v.y + this.z * v.z;
    } // End of 'mul' function

    div(v) {
        if (typeof v == "number")
            return vec3(this.x / v, this.y / v, this.z / v);
    } // End of 'div' function

    neg(v) {
        return vec3(-this.x, - this.y, -this.z);
    } // End of 'neg' function

    /*
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    } // End of 'dot' function
     */

    len() {
        len = mul(this, this);

        if (len == 1 || len == 0)
            return this.len;
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
} // End of 'vec3' class

export function vec3(...args)
{
    return new _vec3(...args);
} // End of 'vec3' function