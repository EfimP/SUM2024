class _vertex {
    constructor(v, i) {
        this.vert = v;
        this.ind = i;
    }
}

export function createCube(size) {
    const vertexes = [0.1, 0.1, 0.1,  0.1, 0.1 + size, 0.1,  0.1 + size, 0.1, 0.1,  0.1 + size, 0.1 + size, 0.1,
                      0.1, 0.1, 0.1 + size,  0.1, 0.1 + size, 0.1 + size,  0.1 + size, 0.1, 0.1 + size, 0.1 + size, 0.1 + size, 0.1 + size];                      
    return vertexes;
}