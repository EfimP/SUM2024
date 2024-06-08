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
        let r = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        try {
            r[0][0] = this.m[0][0] * m.m[0][0] + this.m[0][1] * m.m[1][0] + this.m[0][2] * m.m[2][0] +
            this.m[0][3] * m.m[3][0];
        
        r[0][1] = this.m[0][0] * m.m[0][1] + this.m[0][1] * m.m[1][1] + this.m[0][2] * m.m[2][1] +
            this.m[0][3] * m.m[3][1];
        
        r[0][2] = this.m[0][0] * m.m[0][2] + this.m[0][1] * m.m[1][2] + this.m[0][2] * m.m[2][2] +
            this.m[0][3] * m.m[3][2];
        
        r[0][3] = this.m[0][0] * m.m[0][3] + this.m[0][1] * m.m[1][3] + this.m[0][2] * m.m[2][3] +
            this.m[0][3] * m.m[3][3];
        
        
        r[1][0] = this.m[1][0] * m.m[0][0] + this.m[1][1] * m.m[1][0] + this.m[1][2] * m.m[2][0] +
            this.m[1][3] * m.m[3][0];
        
        r[1][1] = this.m[1][0] * m.m[0][1] + this.m[1][1] * m.m[1][1] + this.m[1][2] * m.m[2][1] +
            this.m[1][3] * m.m[3][1];
        
        r[1][2] = this.m[1][0] * m.m[0][2] + this.m[1][1] * m.m[1][2] + this.m[1][2] * m.m[2][2] +
            this.m[1][3] * m.m[3][2];
        
        r[1][3] = this.m[1][0] * m.m[0][3] + this.m[1][1] * m.m[1][3] + this.m[1][2] * m.m[2][3] +
            this.m[1][3] * m.m[3][3];
        
        
        r[2][0] = this.m[2][0] * m.m[0][0] + this.m[2][1] * m.m[1][0] + this.m[2][2] * m.m[2][0] +
            this.m[2][3] * m.m[3][0];
        
        r[2][1] = this.m[2][0] * m.m[0][1] + this.m[2][1] * m.m[1][1] + this.m[2][2] * m.m[2][1] +
            this.m[2][3] * m.m[3][1];
        
        r[2][2] = this.m[2][0] * m.m[0][2] + this.m[2][1] * m.m[1][2] + this.m[2][2] * m.m[2][2] +
            this.m[2][3] * m.m[3][2];
        
        r[2][3] = this.m[2][0] * m.m[0][3] + this.m[2][1] * m.m[1][3] + this.m[2][2] * m.m[2][3] +
            this.m[2][3] * m.m[3][3];
        
        
        r[3][0] = this.m[3][0] * m.m[0][0] + this.m[3][1] * m.m[1][0] + this.m[3][2] * m.m[2][0] +
            this.m[3][3] * m.m[3][0];
        
        r[3][1] = this.m[3][0] * m.m[0][1] + this.m[3][1] * m.m[1][1] + this.m[3][2] * m.m[2][1] +
            this.m[3][3] * m.m[3][1];
        
        r[3][2] = this.m[3][0] * m.m[0][2] + this.m[3][1] * m.m[1][2] + this.m[3][2] * m.m[2][2] +
            this.m[3][3] * m.m[3][2];
        
        r[3][3] = this.m[3][0] * m.m[0][3] + this.m[3][1] * m.m[1][3] + this.m[3][2] * m.m[2][3] +
            this.m[3][3] * m.m[3][3];
                    
        } catch (error) {
            console.log('error');
            console.log(m);
            console.log(m[0]);
            console.log(m[0][0]);            
        }
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
        let r;
        let det = this.m.determ();

        if (det == 0)
            return mat4();

        /* build adjoint matrix */
        r[0][0] =
            +this.m.determ3x3(this.m[1][1], this.m[1][2], this.m[1][3],
                              this.m[2][1], this.m[2][2], this.m[2][3],
                              this.m[3][1], this.m[3][2], this.m[3][3]) / det;

        r[1][0] =
            -this.m.determ3x3(this.m[1][0], this.m[1][2], this.m[1][3],
                              this.m[2][0], this.m[2][2], this.m[2][3],
                              this.m[3][0], this.m[3][2], this.m[3][3]) / det;

        r[2][0] =
            +this.m.determ3x3(this.m[1][0], this.m[1][1], this.m[1][3],
                              this.m[2][0], this.m[2][1], this.m[2][3],
                              this.m[3][0], this.m[3][1], this.m[3][3]) / det;

        r[3][0] =
            -this.m.determ3x3(this.m[1][0], this.m[1][1], this.m[1][2],
                              this.m[2][0], this.m[2][1], this.m[2][2],
                              this.m[3][0], this.m[3][1], this.m[3][2]) / det;

        r[0][1] =
            -this.m.determ3x3(this.m[0][1], this.m[0][2], this.m[0][3],
                              this.m[2][1], this.m[2][2], this.m[2][3],
                              this.m[3][1], this.m[3][2], this.m[3][3]) / det;

        r[1][1] =
            +this.m.determ3x3(this.m[0][0], this.m[0][2], this.m[0][3],
                              this.m[2][0], this.m[2][2], this.m[2][3],
                              this.m[3][0], this.m[3][2], this.m[3][3]) / det;

        r[2][1] =
            -this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][3],
                              this.m[2][0], this.m[2][1], this.m[2][3],
                              this.m[3][0], this.m[3][1], this.m[3][3]) / det;

        r[3][1] =
            +this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][2],
                              this.m[2][0], this.m[2][1], this.m[2][2],
                              this.m[3][0], this.m[3][1], this.m[3][2]) / det;


        r[0][2] =
            +this.m.determ3x3(this.m[0][1], this.m[0][2], this.m[0][3],
                              this.m[1][1], this.m[1][2], this.m[1][3],
                              this.m[3][1], this.m[3][2], this.m[3][3]) / det;

        r[1][2] =
            -this.m.determ3x3(this.m[0][0], this.m[0][2], this.m[0][3],
                              this.m[1][0], this.m[1][2], this.m[1][3],
                              this.m[3][0], this.m[3][2], this.m[3][3]) / det;

        r[2][2] =
            +this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][3],
                              this.m[1][0], this.m[1][1], this.m[1][3],
                              this.m[3][0], this.m[3][1], this.m[3][3]) / det;

        r[3][2] =
            -this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][2],
                              this.m[1][0], this.m[1][1], this.m[1][2],
                              this.m[3][0], this.m[3][1], this.m[3][2]) / det;


        r[0][3] =
            -this.m.determ3x3(this.m[0][1], this.m[0][2], this.m[0][3],
                              this.m[1][1], this.m[1][2], this.m[1][3],
                              this.m[2][1], this.m[2][2], this.m[2][3]) / det;

        r[1][3] =
            +this.m.determ3x3(this.m[0][0], this.m[0][2], this.m[0][3],
                              this.m[1][0], this.m[1][2], this.m[1][3],
                              this.m[2][0], this.m[2][2], this.m[2][3]) / det;

        r[2][3] =
            -this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][3],
                              this.m[1][0], this.m[1][1], this.m[1][3],
                              this.m[2][0], this.m[2][1], this.m[2][3]) / det;

        r[3][3] =
            +this.m.determ3x3(this.m[0][0], this.m[0][1], this.m[0][2],
                              this.m[1][0], this.m[1][1], this.m[1][2],
                              this.m[2][0], this.m[2][1], this.m[2][2]) / det;

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

    rotateX(angle) {
        let s = Math.sin(a);
        let c = Math.cos(a);
        let a = angle * Math.PI / 180.0;

        return mat4([[1, 0, 0, 0],
                     [0, c, s, 0],
                     [0, -s, co, 0],
                     [0, 0, 0, 1]]);
    } // End of 'rotateZ' function

    rotateY(angle) {
        let s = Math.sin(a);
        let c = Math.cos(a);
        let a = angle * Math.PI / 180.0;

        return mat4([[c, 0, -s, 0],
                     [0, 1, 0, 0],
                     [s, 0, co, 0],
                     [0, 0, 0, 1]]);
    } // End of 'rotateY' function

    rotateZ(angle) {
        let s = Math.sin(a);
        let c = Math.cos(a);
        let a = angle * Math.PI / 180.0;

        return mat4([[c, s, 0, 0],
                     [-s, c, 0, 0],
                     [0, 0, 1, 0],
                     [0, 0, 0, 1]]);
    } // End of 'rotateZ' function
    
    toArray() {
        return [].concat(...this.m);
    } // End of 'toArray' function

} // End of '_mat4' class

export function mat4(...args) {
    return new _mat4(...args);
} // End of 'mat4' function