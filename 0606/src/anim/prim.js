import { vec3, mat4 } from "../mth/math.js";

class Prim {
    constructor(vertexArray, /*vertexBuffer, indexBuffer,*/ numOfElements, normalArray) {
        this.vertexArray = vertexArray;
        //this.vertexBuffer = vertexBuffer;
        //this.indexBuffer = indexBuffer;
        this.normalArray = normalArray;
        this.numOfElements = numOfElements;
    }
}

function createTriangleFacets(size) {
    return [[vec3(size, -size, -size), vec3(-size, size, -size), vec3(-size, -size, size)],
            [vec3(size, -size, -size), vec3(-size, size, -size), vec3(size, size, size)],
            [vec3(-size, -size, size), vec3(size, size, size), vec3(size, -size, -size)],
            [vec3(-size, -size, size), vec3(size, size, size), vec3(-size, size, -size)]];
}

function createCubeFacets(size) {
    return [[vec3(-size, -size, -size), vec3(-size, size, -size), vec3(size, -size, -size), vec3(size, size, -size)],
            [vec3(size, -size, size), vec3(size, size, size), vec3(size, -size, -size), vec3(size, size, -size)],
            [vec3(-size, -size, size), vec3(-size, size, size), vec3(size, -size, size), vec3(size, size, size),],
            [vec3(-size, -size, -size), vec3(-size, size, -size), vec3(-size, -size, size), vec3(-size, size, size)],
            [vec3(size, size, size), vec3(-size, size, size), vec3(size, size, -size), vec3(-size, size, -size)],
            [vec3(-size, -size, size), vec3(-size, size, size), vec3(-size, -size, -size), vec3(size, -size, -size)],];
}

function createOctaFacets(size) {
    let p1 = vec3(2 * size, 0, 0),
        p2 = vec3(0, 0, 2 * size),
        p3 = vec3(-size * 2, 0, 0),
        p4 = vec3(0, 0, -size * 2),
        p5 = vec3(0, size * 2, 0),
        p6 = vec3(0, -size * 2, 0);
    return [[p1, p2, p5],
            [p2, p3, p5],
            [p3, p4, p5],
            [p4, p1, p5],
            [p1, p2, p6],
            [p2, p3, p6],
            [p3, p4, p6],
            [p4, p1, p6],];
}

function createIcaFacets(size) {
    let p = [];

    for (let i = 0; i < 5; i++) {
        p[i] = vec3(Math.cos(i * 72 * Math.PI / 180.0), 0.5, Math.sin(i * 72 * Math.PI / 180.0));    
    }
    for (let i = 0; i < 5; i++) {
        p[i + 5] = vec3(Math.cos((180 + i * 72) * Math.PI / 180.0), -0.5, Math.sin((180 + i * 72) * Math.PI / 180.0));    
    }
    p[10] = vec3(0, Math.sqrt(5) / 2, 0);
    p[11] = vec3(0, -Math.sqrt(5) / 2, 0);

    return [[p[0], p[5], p[1]],
            [p[5], p[1], p[6]],
            [p[1], p[6], p[2]],
            [p[6], p[2], p[7]],
            [p[2], p[7], p[3]],
            [p[7], p[3], p[8]],
            [p[3], p[8], p[4]],
            [p[8], p[4], p[9]],
            [p[4], p[9], p[0]],
            [p[9], p[0], p[5]],

            [p[10], p[0], p[1]],
            [p[10], p[1], p[2]],
            [p[10], p[2], p[3]],
            [p[10], p[3], p[4]],
            [p[11], p[5], p[6]],
            [p[11], p[6], p[7]],
            [p[11], p[7], p[8]],
            [p[11], p[8], p[9]],];
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

export function bufLoad(gl, prg, prim, numOfElements) {
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
}