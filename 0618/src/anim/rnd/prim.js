import { vec2, vec3, mat4 } from "../../mth/math.js";
import { loadShaders } from "./res/shds.js";

class vertex {
  constructor(position, normal, texCoord) {
    this.pos = position;
    this.norm = normal;
    this.texCoord = texCoord;
  }
}

function vert(position, normal, texCoord) {
  return new vertex(position, normal, texCoord);
}

class Prim {
    constructor(vertexArray, indexArray, numOfElements, matrWorld, name) {
        this.vertexArray = vertexArray;
        this.vertexAttribArray = null;
        this.vertexBuffer = null;
        this.indexArray = indexArray;
        this.indexBuffer = null;
        this.numOfElements = numOfElements;
        this.matrWorld = matrWorld;
        this.shds = 0;
        this.name = name;
    }
}

function createPrim(vertexArray, indexArray, numOfElements, matrWorld, name) {
  return new Prim(vertexArray, indexArray, numOfElements, matrWorld, name);
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

    return createPrim(p, ind, null, null, "cube"); 
}

function createQuadFacets(size, pos) {
  let p = [];
  p[0] = vert(pos.add(vec3(-size / 2, 0, -size / 2)), vec3(), vec2(0, 0)),
  p[1] = vert(pos.add(vec3(-size / 2, 0, size / 2)), vec3(), vec2(0, 1)),
  p[2] = vert(pos.add(vec3(size / 2, 0, -size / 2)), vec3(), vec2(1, 0)),
  p[3] = vert(pos.add(vec3(size / 2, 0, size / 2)), vec3(), vec2(1, 1));
  let ind = [2, 0, 1,
             2, 1, 3];
  return createPrim(p, ind, null, null, "quad");
}

function createNormals(prim)
{
  for (let i = 0; i < (prim.name == "cube" ? 8 : 4)/*prim.numOfPoints*/; i++)
    prim.vertexArray[i].norm = vec3(0);
  for (let i = 0; i < (prim.name == "cube" ? 12 : 2)/*prim.numOfElements*/; i++)
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

function vec2ToArray(element) {
  if (element != undefined)
    return [element.x, element.y];
  else
  return [0, 0];
}

function createVertFromFacets(prim) {
    let facets = prim.vertexArray;
    let vertArray = [];
    let cnt = 0;

    for (let i of facets)
    {
        vertArray = vertArray.concat(vec3ToArray(i.pos).concat(vec3ToArray(i.norm)).concat(vec2ToArray(i.texCoord)));
        cnt++;
    }
    return createPrim(vertArray, prim.indexArray, cnt, mat4(), prim.name);
}

export function createCube(size, pos) {
   return createVertFromFacets(createNormals(createCubeFacets(size, pos)));
}

export function createQuad(size, pos) {
  return createVertFromFacets(createNormals(createQuadFacets(size, pos)));
}

export function bufLoad(gl, prim) {
    gl.useProgram(prim.shds.prg);
    // Loading to shader vertex array
    const posLoc = gl.getAttribLocation(prim.shds.prg, "InPosition");
    const texLoc = gl.getAttribLocation(prim.shds.prg, "DrawTexCoord");
    const normLoc = gl.getAttribLocation(prim.shds.prg, "InNormal");
    prim.vertexAttribArray = gl.createVertexArray();
    gl.bindVertexArray(prim.vertexAttribArray);
    prim.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, prim.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(prim.vertexArray), gl.STATIC_DRAW);
    if (posLoc != -1) {
      gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 4 * 3 * 2 + 4 * 2, 0);
      gl.enableVertexAttribArray(posLoc);
    }
    if (normLoc != -1) {
      gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, 4 * 3 * 2 + 4 * 2, 4 * 3);
      gl.enableVertexAttribArray(normLoc);
    }
    if (texLoc != -1) {
      gl.vertexAttribPointer(texLoc, 3, gl.FLOAT, false, 4 * 3 * 2 + 4 * 2, 4 * 3 * 2);
      gl.enableVertexAttribArray(texLoc);
    }

    // Loading to shader index array
    prim.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, prim.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(prim.indexArray), gl.STATIC_DRAW);
}

export function createFigure(rnd, figureName, shdName, size, pos) {
  let prim;

  if (figureName == "cube")
    prim = createCube(size, pos);
  else
    prim = createQuad(size, pos);
  // Loading shader
  prim.shds = loadShaders(rnd.gl, shdName);
  bufLoad(rnd.gl, prim);

  return prim;
}