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

function createCubeFacets(size) {
    return [[vec3(-size, -size, -size), vec3(-size, size, -size), vec3(size, -size, -size), vec3(size, size, -size)],
            [vec3(size, -size, size), vec3(size, size, size), vec3(size, -size, -size), vec3(size, size, -size)],
            [vec3(-size, -size, size), vec3(-size, size, size), vec3(size, -size, size), vec3(size, size, size),],
            [vec3(-size, -size, -size), vec3(-size, size, -size), vec3(-size, -size, size), vec3(-size, size, size)],
            [vec3(size, size, size), vec3(-size, size, size), vec3(size, size, -size), vec3(-size, size, -size)],
            [vec3(-size, -size, size), vec3(-size, size, size), vec3(-size, -size, -size), vec3(size, -size, -size)],];
}

function createTriangleFacets(size) {
    return [[vec3(size, -size, -size), vec3(-size, size, -size), vec3(-size, -size, size)],
            [vec3(size, -size, -size), vec3(-size, size, -size), vec3(size, size, size)],
            [vec3(-size, -size, size), vec3(size, size, size), vec3(size, -size, -size)],
            [vec3(-size, -size, size), vec3(size, size, size), vec3(-size, size, -size)]];
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

export function createCube(size) {
   return createVertFromFacets(createCubeFacets(size));
}

export function createTriangle(size) {
    return createVertFromFacets(createTriangleFacets(size));
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

    // Loading to shader normal array
    /*    
    let normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(prim.normalArray), gl.STATIC_DRAW);
    */
}