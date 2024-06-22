class _texture {
  constructor(gl, nameURL, textureType = "2d") {
    this.name = nameURL.name;
    this.type = gl.TEXTURE_2D;
    this.id = gl.createTexture();
    gl.bindTexture(this.type, this.id);
    if (nameURL.img) {
      gl.texImage2D(this.type, 0, gl.RGBA, 1, 1, 0, gl.RGBA,
                    gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 0]));
      nameURL.img.onload = () => {
        gl.bindTexture(this.type, this.id);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(this.type, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE,
                      nameURL.img);
        gl.generateMipmap(this.type);
        gl.texParameteri(this.type, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(this.type, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(this.type, gl.TEXTURE_MIN_FILTER,
                                    gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(this.type, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      }
      gl.activeTexture(gl.TEXTURE0 + 0);
      gl.bindTexture(gl.TEXTURE_2D, this.id);
    }
  }
}
 
export function texture(...args) {
  /*. . .*/
  return new _texture(...args);
}
