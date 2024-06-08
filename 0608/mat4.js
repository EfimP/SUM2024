class _mat4{
    constructor(A00, A01, A02, A03,
                A10, A11, A12, A13,
                A20, A21, A22, A23,
                A30, A31, A32, A33) {
        if (A00 == undefuned || A01 == undefined || A02 == undefuned || A03 == undefined ||
            A10 == undefuned || A11 == undefined || A12 == undefuned || A13 == undefined ||
            A20 == undefuned || A21 == undefined || A22 == undefuned || A23 == undefined ||
            A30 == undefuned || A31 == undefined || A32 == undefuned || A33 == undefined)
            this.m = [[1, 0, 0, 0],
                      [0, 1, 0, 0],
                      [0, 0, 1, 0],
                      [0, 0, 0, 1]]            
        else
            this.m = [[A00, A01, A02, A03],
                      [A10, A11, A12, A13],
                      [A20, A21, A22, A23],
                      [A30, A31, A32, A33]]
    } // End of 'constructor' function
        
    mul(m) {
        let r;

        r.A00 = this.A00 * m.A00 + this.A01 * m.A10 + this.A02 * m.A20 +
            this.A03 * m.A30;

        r.A01 = this.A00 * m.A01 + this.A01 * m.A11 + this.A02 * m.A21 +
            this.A03 * m.A31;

        r.A02 = this.A00 * m.A02 + this.A01 * m.A12 + this.A02 * m.A22 +
            this.A03 * m.A32;

        r.A03 = this.A00 * m.A03 + this.A01 * m.A13 + this.A02 * m.A23 +
            this.A03 * m.A33;


        r.A10 = this.A10 * m.A00 + this.A11 * m.A10 + this.A12 * m.A20 +
            this.A13 * m.A30;

        r.A11 = this.A10 * m.A01 + this.A11 * m.A11 + this.A12 * m.A21 +
            this.A13 * m.A31;

        r.A12 = this.A10 * m.A02 + this.A11 * m.A12 + this.A12 * m.A22 +
            this.A13 * m.A32;

        r.A13 = this.A10 * m.A03 + this.A11 * m.A13 + this.A12 * m.A23 +
            this.A13 * m.A33;


        r.A20 = this.A20 * m.A00 + this.A21 * m.A10 + this.A22 * m.A20 +
            this.A23 * m.A30;

        r.A21 = this.A20 * m.A01 + this.A21 * m.A11 + this.A22 * m.A21 +
            this.A23 * m.A31;

        r.A22 = this.A20 * m.A02 + this.A21 * m.A12 + this.A22 * m.A22 +
            this.A23 * m.A32;

        r.A23 = this.A20 * m.A03 + this.A21 * m.A13 + this.A22 * m.A23 +
            this.A23 * m.A33;


        r.A30 = this.A30 * m.A00 + this.A31 * m.A10 + this.A32 * m.A20 +
            this.A33 * m.A30;

        r.A31 = this.A30 * m.A01 + this.A31 * m.A11 + this.A32 * m.A21 +
            this.A33 * m.A31;

        r.A32 = this.A30 * m.A02 + this.A31 * m.A12 + this.A32 * m.A22 +
            this.A33 * m.A32;

        r.A33 = this.A30 * m.A03 + this.A31 * m.A13 + this.A32 * m.A23 +
            this.A33 * m.A33;

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
            +this.A00 * this.determ3x3(this.A11, this.A12, this.A13,
                                       this.A21, this.A22, this.A23,
                                       this.A31, this.A32, this.A33) +
            -this.A01 * this.determ3x3(this.A10, this.A12, this.A13,
                                       this.A20, this.A22, this.A23,
                                       this.A30, this.A32, this.A33) +
            +this.A02 * this.determ3x3(this.A10, this.A11, this.A13,
                                       this.A20, this.A21, this.A23,
                                       this.A30, this.A31, this.A33) +
            -this.A03 * this.determ3x3(this.A10, this.A11, this.A12,
                                       this.A20, this.A21, this.A22,
                                       this.A30, this.A31, this.A32);
        return n;
    } // End of 'determ' function

    inverse() {
        let r;
        let det = this.determ();

        if (det == 0)
            return mat4();

        /* build adjoint matrix */
        r.A00 =
            +this.determ3x3(this.A11, this.A12, this.A13,
                            this.A21, this.A22, this.A23,
                            this.A31, this.A32, this.A33) / det;

        r.A10 =
            -this.determ3x3(this.A10, this.A12, this.A13,
                            this.A20, this.A22, this.A23,
                            this.A30, this.A32, this.A33) / det;

        r.A20 =
            +this.determ3x3(this.A10, this.A11, this.A13,
                            this.A20, this.A21, this.A23,
                            this.A30, this.A31, this.A33) / det;

        r.A30 =
            -this.determ3x3(this.A10, this.A11, this.A12,
                            this.A20, this.A21, this.A22,
                            this.A30, this.A31, this.A32) / det;

        r.A01 =
            -this.determ3x3(this.A01, this.A02, this.A03,
                            this.A21, this.A22, this.A23,
                            this.A31, this.A32, this.A33) / det;

        r.A11 =
            +this.determ3x3(this.A00, this.A02, this.A03,
                            this.A20, this.A22, this.A23,
                            this.A30, this.A32, this.A33) / det;

        r.A21 =
            -this.determ3x3(this.A00, this.A01, this.A03,
                            this.A20, this.A21, this.A23,
                            this.A30, this.A31, this.A33) / det;

        r.A31 =
            +this.determ3x3(this.A00, this.A01, this.A02,
                            this.A20, this.A21, this.A22,
                            this.A30, this.A31, this.A32) / det;


        r.A02 =
            +this.determ3x3(this.A01, this.A02, this.A03,
                            this.A11, this.A12, this.A13,
                            this.A31, this.A32, this.A33) / det;

        r.A12 =
            -this.determ3x3(this.A00, this.A02, this.A03,
                            this.A10, this.A12, this.A13,
                            this.A30, this.A32, this.A33) / det;

        r.A22 =
            +this.determ3x3(this.A00, this.A01, this.A03,
                            this.A10, this.A11, this.A13,
                            this.A30, this.A31, this.A33) / det;

        r.A32 =
            -this.determ3x3(this.A00, this.A01, this.A02,
                            this.A10, this.A11, this.A12,
                            this.A30, this.A31, this.A32) / det;


        r.A03 =
            -this.determ3x3(this.A01, this.A02, this.A03,
                            this.A11, this.A12, this.A13,
                            this.A21, this.A22, this.A23) / det;

        r.A13 =
            +this.determ3x3(this.A00, this.A02, this.A03,
                            this.A10, this.A12, this.A13,
                            this.A20, this.A22, this.A23) / det;

        r.A23 =
            -this.determ3x3(this.A00, this.A01, this.A03,
                            this.A10, this.A11, this.A13,
                            this.A20, this.A21, this.A23) / det;

        r.A33 =
            +this.determ3x3(this.A00, this.A01, this.A02,
                            this.A10, this.A11, this.A12,
                            this.A20, this.A21, this.A22) / det;

        return r;
    } // End of 'inverse' function    

    rotate(angle, v) {
        let s = Math.sin(a);
        let c = Math.cos(a);
        let a = angle * Math.PI / 180.0;

        return mat4(c + v.x * v.x * (1 - c), v.y * v.x * (1 - c) - v.z * s, v.z * v.x * (1 - c) + v.y * s, 0,
                    v.x * v.y * (1 - c) + v.z * s, c + v.y * v.y * (1 - c), v.z * v.y * (1 - c) - v.x * s, 0,
                    v.x * v.z * (1 - c) - v.y * s, v.y * v.z * (1 - c) + v.x * s, c + v.z * v.z * (1 - c), 0,
                    0, 0, 0, 1);
    } // End of 'rotate' function
} // End of '_mat4' class

export function mat4(...args) {
    return new _mat4(...args);
} // End of 'mat4' function