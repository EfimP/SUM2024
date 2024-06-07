class _mat4{
    constructor(A00, A01, A02, A03,
                A10, A11, A12, A13,
                A20, A21, A22, A23,
                A30, A31, A32, A33) {
        if (A00 == undefuned || A01 == undefined || A02 == undefuned || A03 == undefined
            A10 == undefuned || A11 == undefined || A12 == undefuned || A13 == undefined
            A20 == undefuned || A21 == undefined || A22 == undefuned || A23 == undefined
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
        
} // End of '_mat4' class

export function mat4(...args) {
    return new _mat4(...args);
} // End of 'mat4' function