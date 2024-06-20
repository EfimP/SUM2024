import { vec3, mat4 } from "../../mth/math.js";

class vertex {
  constructor(position, normal) {
    this.pos = position;
    this.norm = normal;
  }
}

function vert(position, normal) {
  return new vertex(position, normal);
}

class Prim {
    constructor(vertexArray, indexArray, numOfElements, matrWorld) {
        this.vertexArray = vertexArray;
        this.vertexAttribArray = null;
        this.vertexBuffer = null;
        this.indexArray = indexArray;
        this.indexBuffer = null;
        this.numOfElements = numOfElements;
        this.matrWorld = matrWorld;
        this.shds = 0;
    }
}

function createPrim(vertexArray, indexArray, numOfElements, matrWorld) {
  return new Prim(vertexArray, indexArray, numOfElements, matrWorld);
}

function createCubeFacets(size, pos) {
    let p = []; 
    p[0] = vert(pos.add(vec3(size / 2, 0, -size / 2))),
    p[1] = vert(pos.add(vec3(-size / 2, size, -size / 2))),
    p[2] = vert(pos.add(vec3(-size / 2, 0, size / 2))),
    p[3] = vert(pos.add(vec3(-size / 2, 0, -size / 2))),
    p[4] = vert(pos.add(vec3(size / 2, size, -size / 2))),
    p[5] = vert(pos.add(vec3(size / 2, 0, size / 2))),
    p[6] = vert(pos.add(vec3(size / 2, size, size / 2))),
    p[7] = vert(pos.add(vec3(-size / 2, size, size / 2)));
    let ind = [3, 1, 0,
               0, 1, 4,
               6, 5, 0,
               6, 0, 4,
               7, 2, 5,
               7, 5, 6,
               1, 3, 2,
               1, 2, 7,
               7, 6, 4,
               7, 4, 1,
               5, 2, 3,
               5, 3, 0];

    return createPrim(p, ind, null, null); 
}

function createQuadFacets(size, pos) {
  let p = [];
  p[0] = vert(pos.add(vec3(-size / 2, 0, -size / 2))),
  p[1] = vert(pos.add(vec3(-size / 2, 0, size / 2))),
  p[2] = vert(pos.add(vec3(size / 2, 0, -size / 2))),
  p[3] = vert(pos.add(vec3(size / 2, 0, size / 2)));
  let ind = [2, 0, 1,
             2, 1, 3];
  return createPrim(p, ind, null, null);
}

function createNormals(prim, name)
{
  for (let i = 0; i < (name == "cube" ? 8 : 4)/*prim.numOfPoints*/; i++)
    prim.vertexArray[i].norm = vec3(0);
  for (let i = 0; i < (name == "cube" ? 12 : 2)/*prim.numOfElements*/; i++)
  {
    let i0 = prim.indexArray[i * 3], i1 = prim.indexArray[i * 3 + 1], i2 = prim.indexArray[i * 3 + 2];
    let p01 = prim.vertexArray[i1].pos.sub(prim.vertexArray[i0].pos), 
        p02 = prim.vertexArray[i2].pos.sub(prim.vertexArray[i0].pos);
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
    return createPrim(vertArray, prim.indexArray, cnt, mat4());
}

export function createCube(size, pos) {
   return createVertFromFacets(createNormals(createCubeFacets(size, pos), "cube"));
}

export function createQuad(size, pos) {
  return createVertFromFacets(createNormals(createQuadFacets(size, pos), "quad"));
}

export function bufLoad(gl, prim) {
    gl.useProgram(prim.shds.prg);
    // Loading to shader vertex array
    const posLoc = gl.getAttribLocation(prim.shds.prg, "InPosition");
    const normLoc = gl.getAttribLocation(prim.shds.prg, "InNormal");
    prim.vertexAttribArray = gl.createVertexArray();
    gl.bindVertexArray(prim.vertexAttribArray);
    prim.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, prim.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(prim.vertexArray), gl.STATIC_DRAW);
    if (posLoc != -1) {
      gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 4 * 3 * 2, 0);
      gl.enableVertexAttribArray(posLoc);
    }
    if (normLoc != -1) {
      gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, 4 * 3 * 2, 4 * 3);
      gl.enableVertexAttribArray(normLoc);
    }

    // Loading to shader index array
    prim.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, prim.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(prim.indexArray), gl.STATIC_DRAW);
}