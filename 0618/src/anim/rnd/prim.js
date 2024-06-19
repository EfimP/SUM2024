import { vec3, mat4 } from "../../mth/math.js";

class vertex {
  constructor(position, normal) {
    this.pos = position;
    this.norm = normal;
  }
}

function vert(...args) {
  return new vertex(...args);
}

class Prim {
    constructor(vertexArray, vertexBuffer, indexArray, indexBuffer, numOfElements, matrWorld) {
        this.vertexArray = vertexArray;
        this.vertexBuffer = vertexBuffer;
        this.indexArray = indexArray;
        this.indexBuffer = indexBuffer;
        this.numOfElements = numOfElements;
        this.matrWorld = matrWorld;
    }
}

function createCubeFacets(size) {
    let p = []; 
    p[0] = vert(vec3(size, -size, -size)),
    p[1] = vert(vec3(-size, size, -size)),
    p[2] = vert(vec3(-size, -size, size)),
    p[3] = vert(vec3(-size, -size, -size)),
    p[4] = vert(vec3(size, size, -size)),
    p[5] = vert(vec3(size, -size, size)),
    p[6] = vert(vec3(size, size, size)),
    p[7] = vert(vec3(-size, size, size));
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

    return new Prim(p, null, ind, null, null, null); 
}

function createNormals(prim)
{
  for (let i = 0; i < 8; i++)
    prim.vertexArray[i].norm = vec3(0);
  for (let i = 0; i <= 12/*prim.numOfElements*/; i = i + 3)
  {
    let i0 = prim.indexArray[i], i1 = prim.indexArray[i + 1], i2 = prim.indexArray[i + 2];
    let p01 = prim.vertexArray[i1].pos.sub(prim.vertexArray[i0].pos), p02 = prim.vertexArray[i2].pos.sub(prim.vertexArray[i0].pos);
    let normal = p01.cross(p02).normalize();

    prim.vertexArray[i0].norm = prim.vertexArray[i0].norm.add(normal);
    prim.vertexArray[i1].norm = prim.vertexArray[i1].norm.add(normal);
    prim.vertexArray[i2].norm = prim.vertexArray[i2].norm.add(normal);
  }
  return prim;
} // End of 'CreateNormals' function

function vec3ToArray(element) {
    return [element.x, element.y, element.z];
}

function createVertFromFacets(prim) {
    let facets = prim.vertexArray;
    let vertArray = [];
    let cnt = 0;

    for (let i of facets)
    {
        vertArray = vertArray.concat(vec3ToArray(i.pos).concat(vec3ToArray(i.norm)));
        cnt++;
    }
    return new Prim(vertArray, null, prim.indexArray, null, cnt, mat4());
}

export function createCube(size) {
   return createVertFromFacets(createNormals(createCubeFacets(size)));
}

export function bufLoad(gl, prg, prim) {
    // Loading to shader vertex array
    const posLoc = gl.getAttribLocation(prg, "InPosition");
    const normLoc = gl.getAttribLocation(prg, "InNormal");
    let vertexArray = gl.createVertexArray();
    gl.bindVertexArray(vertexArray);
    prim.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, prim.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(prim.vertexArray), gl.STATIC_DRAW);
    if (posLoc != -1) {
      gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(posLoc);
    }
    if (normLoc != -1) {
      gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(normLoc);
    }

    // Loading to shader index array
    prim.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, prim.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(prim.indexArray), gl.STATIC_DRAW);
}