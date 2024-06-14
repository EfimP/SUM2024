import { vec3, mat4 } from "../mth/math.js";

class Prim {
    constructor(vertexArray, vertexBuffer, indexArray, indexBuffer, numOfElements, normalArray) {
        this.vertexArray = vertexArray;
        this.vertexBuffer = vertexBuffer;
        this.indexArray = indexArray;
        this.indexBuffer = indexBuffer;
        this.normalArray = normalArray;
        this.numOfElements = numOfElements;
    }
}

function createTriangleFacets(size) {
    let p = []; 
    p[0] = vec3(size, -size, -size),
    p[1] = vec3(-size, size, -size),
    p[2] = vec3(-size, -size, size),
    p[3] = vec3(size, size, size);
    let ind = [0, 1, 2,
               0, 1, 3,
               2, 3, 0,
               2, 3, 1];

    return new Prim(p, null, ind, null, null); 
}

function createCubeFacets(size) {
    let p = []; 
    p[0] = vec3(size, -size, -size),
    p[1] = vec3(-size, size, -size),
    p[2] = vec3(-size, -size, size),
    p[3] = vec3(-size, -size, -size),
    p[4] = vec3(size, size, -size),
    p[5] = vec3(size, -size, size),
    p[6] = vec3(size, size, size),
    p[7] = vec3(-size, size, size);
    let ind = [3, 1, 0,
               1, 0, 4,
               5, 6, 0,
               6, 0, 4,
               2, 7, 5,
               7, 5, 6,
               3, 1, 2,
               1, 2, 7,
               6, 7, 4,
               7, 4, 1,
               2, 5, 3,
               5, 3, 0];

    return new Prim(p, null, ind, null, null); 
}

function createOctaFacets(size) {
    let p = []; 
    p[0] = vec3(2 * size, 0, 0),
    p[1] = vec3(0, 0, 2 * size),
    p[2] = vec3(-size * 2, 0, 0),
    p[3] = vec3(0, 0, -size * 2),
    p[4] = vec3(0, size * 2, 0),
    p[5] = vec3(0, -size * 2, 0);
    let ind = [0, 1, 4,
               1, 2, 4,
               2, 3, 4,
               3, 0, 4,
               0, 1, 5,
               1, 2, 5,
               2, 3, 5,
               3, 0, 5,];

    return new Prim(p, null, ind, null, null); 
}

function createIcaFacets(size) {
    let p = [];

    for (let i = 0; i < 5; i++) {
        p[i] = vec3(Math.cos(i * 72 * Math.PI / 180.0), 0.5, Math.sin(i * 72 * Math.PI / 180.0));    
    }
    for (let i = 0; i < 5; i++) {
        p[i + 5] = vec3(Math.cos((36 + i * 72) * Math.PI / 180.0), -0.5, Math.sin((36 + i * 72) * Math.PI / 180.0));    
    }
    p[10] = vec3(0, Math.sqrt(5) / 2, 0);
    p[11] = vec3(0, -Math.sqrt(5) / 2, 0);

    let ind = [0, 5, 1,
               5, 1, 6,
               1, 6, 2,
               6, 2, 7,
               2, 7, 3,
               7, 3, 8,
               3, 8, 4,
               8, 4, 9,
               4, 9, 0,
               9, 0, 5,
               10, 0, 1,
               10, 1, 2,
               10, 2, 3,
               10, 3, 4,
               10, 4, 0,
               11, 5, 6,
               11, 6, 7,
               11, 7, 8,
               11, 8, 9,
               11, 9, 5,];
    return new Prim(p, null, ind, null, null); 
}

function vec3ToArray(element) {
    return [element.x, element.y, element.z];
}

function createVertFromFacets(prim) {
    let facets = prim.vertexArray;
    let vertArray = [];
    let normalArray = [];
    let cnt = 0;

    for (let i of facets)
    {
        vertArray = vertArray.concat(vec3ToArray(i));
        cnt++;
    }
    return new Prim(vertArray, null, prim.indexArray, cnt, normalArray);
}

export function createTriangle(size) {
    return createVertFromFacets(createTriangleFacets(size));
 } 

export function createCube(size) {
   return createVertFromFacets(createCubeFacets(size));
}

export function createOctahedron(size) {
    return createVertFromFacets(createOctaFacets(size));
} 

export function createIcohedron(size) {
    return createVertFromFacets(createIcaFacets(size));
 } 

export function bufLoad(gl, prg, prim) {
    // Loading to shader vertex array
    const posLoc = gl.getAttribLocation(prg, "InPosition");
    let vertexArray = gl.createVertexArray();
    gl.bindVertexArray(vertexArray);
    prim.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, prim.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(prim.vertexArray), gl.STATIC_DRAW);
    if (posLoc != -1) {
      gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(posLoc);
    }

    // Loading to shader index array
    prim.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, prim.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(prim.indexArray), gl.STATIC_DRAW);
}