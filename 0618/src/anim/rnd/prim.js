import { vec3, mat4 } from "../../mth/math.js";

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

export function createCube(size) {
   return createVertFromFacets(createCubeFacets(size));
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